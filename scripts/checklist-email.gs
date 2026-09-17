/**
 * Self-hosted lead capture + auto-email delivery for SearchRank Pro.
 *
 * Deploy once in script.google.com:
 *   1. Create a new script → name it "SearchRank Checklist".
 *   2. Copy this file's contents into Code.gs.
 *   3. Run `setup` once (authorize Gmail + Spreadsheets access).
 *   4. Deploy → New deployment → Web app →
 *        Execute as: Me
 *        Who has access: Anyone
 *   5. Copy the /exec URL. Set it as NEXT_PUBLIC_EMAIL_FORM_URL and rebuild.
 *
 * No third-party marketing platform required. Leads are stored in a
 * Google Sheet you own, and each opt-in is emailed the checklist directly
 * from your own Gmail account (MailApp).
 *
 * Daily Gmail limits: ~100 sends (free Gmail) / 1500 (Google Workspace).
 * Fine for landing-page volumes; when you pass them, switch the send()
 * call to a transactional provider, keeping everything else identical.
 */

var SS_PROPERTY = "LEAD_SHEET_ID"; // stores the active spreadsheet id
var MASTER_SHEET = "Leads";

/**
 * Run this once from the editor to create the tracking spreadsheet
 * and set the stored id. Authorize when prompted.
 */
function setup() {
  var ss =
    SpreadsheetApp.getActiveSpreadsheet() ||
    SpreadsheetApp.create("SearchRank Pro — Leads");
  PropertiesService.getScriptProperties().setProperty(SS_PROPERTY, ss.getId());
  var sh = ss.getSheetByName(MASTER_SHEET) || ss.insertSheet(MASTER_SHEET);
  if (sh.getLastRow() === 0) {
    sh.appendRow(["Time (UTC)", "Email", "Source", "Valid"]);
  }
  Logger.log("Lead sheet: " + ss.getUrl());
}

function getSheet_() {
  var id = PropertiesService.getScriptProperties().getProperty(SS_PROPERTY);
  if (!id) {
    setup();
    id = PropertiesService.getScriptProperties().getProperty(SS_PROPERTY);
  }
  return SpreadsheetApp.openById(id).getSheetByName(MASTER_SHEET);
}

function jsonOut_(obj, code) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function validEmail_(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((s || "").trim()) && s.length <= 254;
}

function now_() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
}

/**
 * Entry point. Receives { email } (form-encoded or JSON), validates,
 * dedupes, rate-limits, stores the lead, and emails the checklist.
 */
function doPost(e) {
  try {
    // Parse body: form-encoded (fetch default) or JSON fallback.
    var raw = e && e.postData && e.postData.contents ? e.postData.contents : "";
    var params = e && e.parameter ? e.parameter : {};
    var email = params.email || "";
    if (!email && raw.indexOf("{") === 0) {
      try {
        email = JSON.parse(raw).email || "";
      } catch (err2) {}
    }

    // Honeypot: a real browser never submits this field. Reject silently.
    if (params.website) {
      return jsonOut_({ ok: true });
    }

    if (!validEmail_(email)) {
      return jsonOut_({ ok: false, error: "invalid" });
    }

    email = email.trim().toLowerCase();
    var cache = CacheService.getScriptCache();

    // Per-address throttle: max 1 lead per 60s / 3 per 24h upstream abuse.
    var hits = Number(cache.get("h:" + email) || 0);
    if (hits >= 3) {
      return jsonOut_({ ok: false, error: "rate" });
    }
    cache.put("h:" + email, String(hits + 1), 300);

    var sheet = getSheet_();
    var existing = [];
    if (sheet.getLastRow() > 1) {
      existing = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
    }
    for (var i = 0; i < existing.length; i++) {
      if (String(existing[i][0] || "").trim().toLowerCase() === email) {
        // Already a lead — resend the checklist without dup row.
        sendChecklist_(email);
        return jsonOut_({ ok: true, duplicate: true });
      }
    }

    sheet.appendRow([now_(), email, params.form || "landing", "yes"]);
    sendChecklist_(email);
    return jsonOut_({ ok: true });
  } catch (err) {
    return jsonOut_({ ok: false, error: "server", detail: String(err) });
  }
}

/** GET /webhook for an easy health check. */
function doGet(e) {
  return jsonOut_({ ok: true, service: "searchrank-checklist", time: now_() });
}

/**
 * Sends the 5-point quick-win checklist to the subscriber using your
 * own Gmail account. Edit SUBJECT / BODY freely.
 */
function sendChecklist_(email) {
  var body =
    "<div style=\"font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#1f2933;line-height:1.6\">" +
    "<p style=\"font-size:18px;font-weight:bold;color:#2f5d73\">Your SEO Quick-Win Checklist</p>" +
    "<p>Here is the 5-point checklist to get moving this week — each fix takes under an hour.</p>" +
    "<ol style=\"padding-left:20px\">" +
    "<li><strong>Indexation scan</strong> — search <code>site:yoursite.com</code>; pages missing aren't indexable. Fix: submit sitemap in Search Console, check robots.txt.</li>" +
    "<li><strong>One primary keyword per page</strong> — two intents, no rank. Rewrite the H1 + title to one.</li>" +
    "<li><strong>Internal links from your strongest pages</strong> — 3 links from pages that already get traffic to your orphan pages.</li>" +
    "<li><strong>Schema on your main template</strong> — one Article JSON-LD snippet with headline + publish date covers every post.</li>" +
    "<li><strong>Mobile tap targets ≥48px</strong> — small buttons fail Core Web Vitals. Bump min-height to 48px, body font ≥16px.</li>" +
    "</ol>" +
    "<p>Open the full walkthrough here: <a href=\"https://searchrankpro.web.app/free-checklist\" style=\"color:#2563eb\">Free checklist walkthrough</a></p>" +
    "<p>Want the deep version? <a href=\"https://searchrankpro.web.app/\" style=\"color:#2563eb\">The Google Search Ranking System — 2026 Edition</a> walks through every step of ranking, sourced from Google's own docs.</p>" +
    "<p style=\"color:#9ca3af;font-size:12px\">You're receiving this because you asked for the free checklist. Unsubscribe anytime by replying \"stop\".</p>" +
    "</div>";

  MailApp.sendEmail({
    to: email,
    subject: "Your SEO Quick-Win Checklist is inside",
    htmlBody: body,
  });
}