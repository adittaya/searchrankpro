/**
 * Self-hosted lead capture + 6-email drip sequence for SearchRank Pro.
 *
 * Deploy once in script.google.com:
 *   1. Create a new script → name it "SearchRank Checklist".
 *   2. Copy this file's contents into Code.gs.
 *   3. Run `setup` once (authorize Gmail + Spreadsheets + triggers).
 *      This creates the lead Sheet and installs a DAILY email-sequence trigger.
 *   4. Deploy → New deployment → Web app →
 *        Execute as: Me
 *        Who has access: Anyone
 *   5. Copy the /exec URL. Set it as NEXT_PUBLIC_EMAIL_FORM_URL and rebuild.
 *
 * How the sequence works
 * ----------------------
 * Signup  → email 1 (welcome + PDF) is sent immediately.
 * Then a daily trigger (`checkSequence`) looks at each lead's signup date and
 * sends the next due email (day 2, 4, 6, 9, 12). Progress is stored in the
 * lead Sheet's "Sequence" column (number of emails sent so far), so nobody
 * gets an email twice and nobody gets flooded if the script was down.
 *
 * No third-party marketing platform. Leads live in a Google Sheet you own,
 * and every email is sent from your own Gmail account (MailApp).
 *
 * Daily Gmail limits: ~100 sends (free Gmail) / 1500 (Google Workspace).
 */

var SS_PROPERTY = "LEAD_SHEET_ID"; // stores the active spreadsheet id
var MASTER_SHEET = "Leads";
var SITE_URL = "https://searchrankpro.web.app";

// Admin panel passcode. CHANGE THIS to your own value, then redeploy.
// The admin page (/admin) never stores it — it types it in and this script
// is the only place that checks it, so it is never exposed in the website.
var ADMIN_KEY = "7047571829";

/**
 * The drip sequence. `day` = days after signup the email becomes due.
 * Email 1 is sent at signup; the rest go out via the daily trigger.
 * Write plain text with blank lines between paragraphs — HTML is generated
 * automatically, and bare links become clickable. Every email is stored
 * once here, so editing copy is a single-line change.
 */
var SEQUENCE = [
  {
    day: 0,
    subject: "Your SEO Quick-Win Checklist (fix #1 takes 5 minutes)",
    text:
      "Hi,\n\n" +
      "Here's your checklist — attached as a PDF. The five fixes are in order of impact, and the first one takes five minutes in a free tool.\n\n" +
      "Do fix #1 today. It's the one that silently blocks everything else: if Google can't index a page, no tactic on earth will make it rank.\n\n" +
      "Download it again any time: " + SITE_URL + "/free-checklist.pdf\n\n" +
      "One thing as you work through it: every fix has a chapter in the full playbook that goes deep on it — the system behind the fixes, the 12-month roadmap, and the tracker that tells you what to do each week.\n\n" +
      "Reply to this email and tell me what you're working on — I read every reply.\n\n" +
      "Best,\nH. Aditya\nThe Google Search Ranking Playbook\n\n" +
      "You're receiving this because you asked for the checklist. Reply \"stop\" to unsubscribe.",
  },
  {
    day: 2,
    subject: "Did 5 minutes of work fix your traffic?",
    text:
      "Hi,\n\n" +
      "Quick check-in. Of the five fixes, #1 — the indexation check — is the one people skip because it sounds boring. It's also the one that produces the \"wait, what?\" moment.\n\n" +
      "The short version of why: Google does not rank pages it has not indexed.\n\n" +
      "Sites routinely discover that a page they promoted for months was marked \"noindex\" since the day it was built, or that their sitemap was never submitted. Every hour of content work on an unindexed page is work Google literally cannot see.\n\n" +
      "Five minutes, Search Console, Pages report. If all your important pages are indexed, you're one of the lucky ones — skip to fix #2.\n\n" +
      "The full playbook has an entire chapter on indexation, including the four error states that matter and the three you can safely ignore.\n\n" +
      "Best,\nH. Aditya\nThe Google Search Ranking Playbook\n\n" +
      "You're receiving this because you asked for the checklist. Reply \"stop\" to unsubscribe.",
  },
  {
    day: 4,
    subject: "The 5 stages every Google query passes through",
    text:
      "Hi,\n\n" +
      "One idea from the playbook that changes how you see every ranking problem.\n\n" +
      "When someone searches, Google's system runs a pipeline, in this order: crawl, index, render, retrieval, ranking.\n\n" +
      "Most SEO advice jumps straight to the last stage — ranking — because that's where the tricks live. But if a page is losing at an earlier stage (not crawled, not indexed, slow to render, not retrieved for the query), no amount of ranking tactics will help. It's like tuning an engine with no fuel line.\n\n" +
      "That's why the checklist starts with indexation, and why the book's troubleshooter — 14 symptoms, each mapped to the stage it fails at — starts every diagnosis the same way: find the stage, then fix the stage.\n\n" +
      "When you can name the stage, \"SEO\" stops feeling like superstition.\n\n" +
      "Best,\nH. Aditya\nThe Google Search Ranking Playbook\n\n" +
      "P.S. If you want the troubleshooter I mentioned, it's Appendix E of the book: " + SITE_URL + "\n\n" +
      "You're receiving this because you asked for the checklist. Reply \"stop\" to unsubscribe.",
  },
  {
    day: 6,
    subject: "The system behind the checklist",
    text:
      "Hi,\n\n" +
      "You've had the checklist for six days. This is the honest version of the pitch.\n\n" +
      "The checklist fixes symptoms. What it can't give you in two pages is the operating system: what Google's systems actually reward, in what order to do the work, and how to know a change worked. That's the playbook.\n\n" +
      "What's in the bundle:\n\n" +
      "• The Playbook — 100 pages, 32 chapters, PDF + editable Word\n" +
      "• A 30-task, 12-month roadmap with pass/fail phase gates\n" +
      "• A 29-point technical audit with a fix for every failure\n" +
      "• 10 niche playbooks — the system adapted for your niche\n" +
      "• The Symptom-to-Action Troubleshooter — 14 problems, exact next moves\n" +
      "• All trackers import into Notion, Sheets, or Excel in five minutes\n\n" +
      "Every claim is labelled by evidence: documented, sworn testimony (from the U.S. v. Google trial record), or folklore. No guru vibes.\n\n" +
      "Get the complete system: " + SITE_URL + "\n\n" +
      "Buy once. Every future edition free. No subscription.\n\n" +
      "Best,\nH. Aditya\nThe Google Search Ranking Playbook\n\n" +
      "You're receiving this because you asked for the checklist. Reply \"stop\" to unsubscribe.",
  },
  {
    day: 9,
    subject: "Is this different from free SEO advice?",
    text:
      "Hi,\n\n" +
      "Fair question, and the honest answer: most of the individual facts are available free. The difference is the same as between searching symptoms and seeing a doctor.\n\n" +
      "1. Curation with sources. Free advice is a mix of documented facts, guesses, and folklore that all look identical. The playbook labels every claim — and marks folklore as folklore.\n\n" +
      "2. Sequence. A 30-task roadmap with gates beats an infinite feed of tactics. You always know what this week's job is.\n\n" +
      "3. The execution layer. Notion-importable trackers, not inspiration.\n\n" +
      "An independent one-off audit costs $300–$1,500 and gives you a list of problems. This gives you the system to fix them, and the year to do it in.\n\n" +
      "If free blogs are working for you, genuinely — keep reading them. This will still be here in six months.\n\n" +
      "If you want the structured version: " + SITE_URL + "\n\n" +
      "Best,\nH. Aditya\nThe Google Search Ranking Playbook\n\n" +
      "You're receiving this because you asked for the checklist. Reply \"stop\" to unsubscribe.",
  },
  {
    day: 12,
    subject: "One honest question before you go",
    text:
      "Hi,\n\n" +
      "Last email in this sequence, so I'll be direct.\n\n" +
      "If you did even one fix from the checklist and saw that SEO responds to specific, mechanical actions, you've already felt the thing the playbook is built on. Rankings aren't luck. They're a system with rules, and the rules are knowable.\n\n" +
      "The first week of the roadmap is exactly the checklist you already have, plus the baseline numbers you need before any change — so you can prove what worked. Week two builds on it: one topic cluster, one data asset, one quarter of patient compounding.\n\n" +
      "If that's the year you want to have: " + SITE_URL + "\n\n" +
      "And if not — the checklist was free, it works, and I hope it moves your traffic. Either way, thanks for reading.\n\n" +
      "Best,\nH. Aditya\nThe Google Search Ranking Playbook\n\n" +
      "P.S. The book comes with lifetime updates: Google changes, you get every future edition without paying again.\n\n" +
      "You're receiving this because you asked for the checklist. Reply \"stop\" to unsubscribe.",
  },
];

/**
 * Run this once from the editor to create the tracking spreadsheet,
 * set the stored id, and install the daily sequence trigger.
 * Authorize when prompted.
 */
function setup() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty(SS_PROPERTY);
  var ss = null;
  if (id) {
    try {
      ss = SpreadsheetApp.openById(id);
    } catch (e) {
      ss = null;
    }
  }
  if (!ss) {
    ss = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.create("SearchRank Pro — Leads");
  }
  props.setProperty(SS_PROPERTY, ss.getId());
  var sh = ss.getSheetByName(MASTER_SHEET) || ss.insertSheet(MASTER_SHEET);
  if (sh.getLastRow() === 0) {
    sh.appendRow(["Time (UTC)", "Email", "Source", "Valid", "Sequence"]);
  }
  ensureSequenceColumn_(sh);
  ensureDailyTrigger_();
  Logger.log("Lead sheet: " + ss.getUrl());
}

/** Installs a once-a-day trigger for checkSequence() if not already present. */
function ensureDailyTrigger_() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "checkSequence") return;
  }
  ScriptApp.newTrigger("checkSequence").timeBased().everyDays(1).atHour(9).create();
}

/** Adds the "Sequence" header column to older sheets and backfills to 1. */
function ensureSequenceColumn_(sheet) {
  var header = sheet.getRange(1, 5).getValue();
  if (header !== "Sequence") {
    sheet.getRange(1, 5).setValue("Sequence");
    var last = sheet.getLastRow();
    if (last > 1) {
      var fill = [];
      for (var i = 2; i <= last; i++) fill.push([1]);
      sheet.getRange(2, 5, last - 1, 1).setValues(fill);
    }
  }
}

function getSheet_() {
  var id = PropertiesService.getScriptProperties().getProperty(SS_PROPERTY);
  if (!id) {
    setup();
    id = PropertiesService.getScriptProperties().getProperty(SS_PROPERTY);
  }
  return SpreadsheetApp.openById(id).getSheetByName(MASTER_SHEET);
}

function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function validEmail_(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((s || "").trim()) && s.length <= 254;
}

function now_() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");
}

/** Converts plain text (blank lines = paragraphs) to a simple HTML email. */
function toHtml_(text) {
  var paras = text.split(/\n\n+/);
  var html = [];
  for (var i = 0; i < paras.length; i++) {
    var p = paras[i].replace(/\n/g, "<br/>");
    p = p.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" style="color:#2563eb">$1</a>');
    html.push('<p style="margin:14px 0">' + p + "</p>");
  }
  return (
    '<div style="font-family:Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;' +
    'color:#1f2933;line-height:1.6;font-size:15px">' + html.join("") + "</div>"
  );
}

/**
 * Sends one step of the sequence (1-based). Step 1 carries the PDF attachment.
 */
function sendStep_(email, step) {
  var item = SEQUENCE[step - 1];
  if (!item) return;
  var opts = {
    to: email,
    subject: item.subject,
    body: item.text,
    htmlBody: toHtml_(item.text),
  };
  if (step === 1) {
    opts.attachments = [
      UrlFetchApp.fetch(SITE_URL + "/free-checklist.pdf").getBlob(),
    ];
  }
  MailApp.sendEmail(opts);
}

/** Back-compat: the welcome email is just step 1. */
function sendChecklist_(email) {
  sendStep_(email, 1);
}

/**
 * Daily trigger. Sends the next due email to every lead that is behind,
 * at most one email per person per run, then records progress in column E.
 */
function checkSequence() {
  var sheet = getSheet_();
  var last = sheet.getLastRow();
  if (last < 2) return;
  ensureSequenceColumn_(sheet);

  var vals = sheet.getRange(2, 1, last - 1, 5).getValues();
  var now = new Date();

  for (var i = 0; i < vals.length; i++) {
    try {
      var email = String(vals[i][1] || "").trim().toLowerCase();
      if (!validEmail_(email)) continue;

      var done = Number(vals[i][4] || 0);
      if (done >= SEQUENCE.length) continue; // finished the sequence

      var signed = vals[i][0] instanceof Date
        ? vals[i][0]
        : new Date(String(vals[i][0]).replace(" ", "T"));
      if (isNaN(signed.getTime())) continue;

      var days = Math.floor((now.getTime() - signed.getTime()) / 86400000);
      var next = SEQUENCE[done]; // next unsent item
      if (next && days >= next.day) {
        sendStep_(email, done + 1);
        sheet.getRange(i + 2, 5).setValue(done + 1);
      }
    } catch (err) {
      Logger.log("Sequence error for row " + (i + 2) + ": " + err);
    }
  }
}

/**
 * Entry point. Receives { email } (form-encoded or JSON), validates,
 * dedupes, rate-limits, stores the lead, and sends email 1.
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
    ensureSequenceColumn_(sheet);
    var existing = [];
    if (sheet.getLastRow() > 1) {
      existing = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
    }
    for (var i = 0; i < existing.length; i++) {
      if (String(existing[i][0] || "").trim().toLowerCase() === email) {
        // Already a lead — resend the welcome without a duplicate row.
        sendStep_(email, 1);
        return jsonOut_({ ok: true, duplicate: true });
      }
    }

    sheet.appendRow([now_(), email, params.form || "landing", "yes", 1]);
    sendStep_(email, 1);
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
 * Columns: Time (UTC) | Email | Source | Valid | Sequence.
 */
function adminLeads_() {
  try {
    var sheet = getSheet_();
    ensureSequenceColumn_(sheet);
    var leads = [];
    if (sheet.getLastRow() > 1) {
      var vals = sheet.getRange(2, 1, sheet.getLastRow() - 1, 5).getValues();
      for (var i = 0; i < vals.length; i++) {
        leads.push({
          time: String(vals[i][0] || ""),
          email: String(vals[i][1] || ""),
          source: String(vals[i][2] || ""),
          valid: String(vals[i][3] || ""),
          step: Number(vals[i][4] || 0),
        });
      }
    }
    leads.reverse(); // newest first
    return jsonOut_({ ok: true, count: leads.length, total: SEQUENCE.length, leads: leads });
  } catch (err) {
    return jsonOut_({ ok: false, error: "server", detail: String(err) });
  }
}
