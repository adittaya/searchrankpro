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

// Admin panel passcode. CHANGE THIS to your own value, then redeploy.
// The admin page (/admin) never stores it — it types it in and this script
// is the only place that checks it, so it is never exposed in the website.
var ADMIN_KEY = "7047571829";

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

    // Admin analytics — returns the lead list to the /admin panel.
    if (params.route === "admin") {
      if (params.key !== ADMIN_KEY) {
        return jsonOut_({ ok: false, error: "unauthorized" });
      }
      return adminLeads_();
    }

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

/** GET /webhook for an easy health check. Also serves admin via ?route=admin&key=. */
function doGet(e) {
  var params = (e && e.parameter) || {};
  if (params.route === "admin") {
    if (params.key !== ADMIN_KEY) {
      return jsonOut_({ ok: false, error: "unauthorized" });
    }
    return adminLeads_();
  }
  return jsonOut_({ ok: true, service: "searchrank-checklist", time: now_() });
}

/**
 * Returns every stored lead, newest first, for the /admin dashboard.
 * Columns: Time (UTC) | Email | Source | Valid.
 */
function adminLeads_() {
  try {
    var sheet = getSheet_();
    var leads = [];
    if (sheet.getLastRow() > 1) {
      var vals = sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues();
      for (var i = 0; i < vals.length; i++) {
        leads.push({
          time: String(vals[i][0] || ""),
          email: String(vals[i][1] || ""),
          source: String(vals[i][2] || ""),
          valid: String(vals[i][3] || ""),
        });
      }
    }
    leads.reverse(); // newest first
    return jsonOut_({ ok: true, count: leads.length, leads: leads });
  } catch (err) {
    return jsonOut_({ ok: false, error: "server", detail: String(err) });
  }
}

/**
 * Sends the 5-point quick-win checklist to the subscriber using your
 * own Gmail account. Delivered cold-email style: plain-text + HTML
 * pair (HTML-only is a major spam trigger), a calm subject line, a
 * human signature, and the PDF attached. Edit freely, keep the
 * attachment and the plain-text body.
 */
function sendChecklist_(email) {
  var subject = "Your SEO Quick-Win Checklist";
  var siteUrl = "https://searchrankpro.web.app";

  // Plain-text version — always include one. Recipients who open this
  // in plain text (or filter mail) see it; spam filters reward it.
  var text =
    "Hi,\n\n" +
    "Thanks for signing up. Attached is The SEO Quick-Win Checklist — the five fixes from my playbook that use only free tools and take about an hour in total.\n\n" +
    "If you run them this week, start with fix one (indexation): pages Google can't see cannot rank, and it unblocks everything after it.\n\n" +
    "When you're ready for the full system — how Google actually ranks pages, built from Google's own documentation and the U.S. v. Google trial record — it's here: " + siteUrl + "\n\n" +
    "If anything on the list needs a hand, just reply to this email.\n\n" +
    "Best,\n" +
    "H. Aditya\n" +
    "The Google Search Ranking Playbook\n\n" +
    "You're receiving this because you asked for the checklist. Reply \"stop\" to unsubscribe.";

  var html =
    "<div style=\"font-family:Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;color:#1f2933;line-height:1.6;font-size:15px\">" +
    "<p style=\"margin:16px 0\">Hi,</p>" +
    "<p style=\"margin:16px 0\">Thanks for signing up. Attached is <strong>The SEO Quick-Win Checklist</strong> — the five fixes from my playbook that use only free tools and take about an hour in total.</p>" +
    "<p style=\"margin:16px 0\">If you run them this week, start with fix one (indexation): pages Google can&rsquo;t see cannot rank, and it unblocks everything after it.</p>" +
    "<p style=\"margin:16px 0\">When you&rsquo;re ready for the full system — how Google actually ranks pages, built from Google&rsquo;s own documentation and the U.S. v. Google trial record — it&rsquo;s <a href=\"" + siteUrl + "\" style=\"color:#2563eb\">here</a>.</p>" +
    "<p style=\"margin:16px 0\">If anything on the list needs a hand, just reply to this email.</p>" +
    "<p style=\"margin:16px 0\">Best,<br/>H. Aditya<br/>The Google Search Ranking Playbook</p>" +
    "<p style=\"margin:16px 0;color:#9ca3af;font-size:12px\">You&rsquo;re receiving this because you asked for the checklist. Reply &ldquo;stop&rdquo; to unsubscribe.</p>" +
    "</div>";

  MailApp.sendEmail({
    to: email,
    subject: subject,
    body: text,
    htmlBody: html,
    attachments: [UrlFetchApp.fetch(siteUrl + "/free-checklist.pdf").getBlob()],
  });
}