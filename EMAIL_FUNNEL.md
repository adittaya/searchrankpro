# Email funnel — setup + ready-to-send sequences

The landing page already has the lead-capture form built (`components/EmailSignup.tsx`).
It is **inert until you connect a backend**. You can run it entirely on your own
(Google Apps Script → your Gmail → a spreadsheet you own), or use a provider. This guide
covers both, then gives you 6 copy-paste emails.

---

## 1. Option A (recommended, no third party): your own Apps Script backend

Deploy the bundled script (`scripts/checklist-email.gs`) as a Google Apps Script web app:

1. Go to <https://script.google.com> → **New project** → name it "SearchRank Checklist".
2. Copy the contents of `scripts/checklist-email.gs` into `Code.gs`.
3. Run the **setup** function once from the editor (authorizes Gmail + Sheets, creates the lead spreadsheet).
4. **Deploy → New deployment → Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the `/exec` URL.
6. Wire it in and rebuild:
   ```bash
   NEXT_PUBLIC_EMAIL_FORM_URL="https://script.google.com/macros/s/XXXX/exec" NEXT_PUBLIC_GA4_ID="G-XXXX" NEXT_PUBLIC_META_PIXEL_ID="123456..."
   npm run build
   firebase deploy --only hosting
   ```

What the script does automatically, with no other service:
- Stores every lead (time, email, source form) in a Google Sheet you own.
- Emails the 5-point checklist **straight from your own Gmail** (`MailApp`).
- Dedupes (resends checklist on repeat opt-in without a duplicate row).
- Rate-limits per address (abuse guard) and silently drops honeypot submissions.

Limits: free Gmail ≈ 100 sends/day, Google Workspace ≈ 1500/day. Fine for landing pages.
When you outgrow it, point the same form at a transactional provider — nothing else changes.

The checklist walkthrough page lives at `/free-checklist` and is already linked in the
success state and in the script's email.

---

## 1b. Option B: a provider instead

| Provider | Free plan | Why |
|---|---|---|
| **ConvertKit** | 300 subscribers | Best for creators + tags + sequences. Built-in form endpoints. |
| **Buttondown** | 100 subscribers | Simplest. One email address per newsletter. Has a subscribe API. |
| **Formspree** | 50 submissions/mo | Fastest to wire up. Just a form endpoint, no sequence engine. |
| **Custom API** | — | Point `NEXT_PUBLIC_EMAIL_FORM_URL` at your own endpoint. |

---

## 2. What to do for each provider

### ConvertKit (recommended)
1. Sign up, create free account.
2. Form → add a form → take the action URL from the embed snippet
   (or use `https://app.convertkit.com/forms/ACTIVATE` modern form API with your API key).
3. Set env var and rebuild:
   ```bash
   NEXT_PUBLIC_EMAIL_FORM_URL="https://f.convertkit.com/... " NEXT_PUBLIC_GA4_ID="G-XXXX" NEXT_PUBLIC_META_PIXEL_ID="123456..."
   npm run build
   firebase deploy --only hosting
   ```
4. In ConvertKit create a **Sequence** named "SEO Quick-Win" with the emails below.

### Formspree (fastest smoke test)
1. Sign up → create form → copy the `https://formspree.io/f/YOURID` endpoint.
2. The EmailSignup component POSTs `{ email }` with `Content-Type: application/json`,
   which Formspree accepts directly.
3. Formspree only delivers leads to your email — you still need a sequence engine.
   Use it to validate the flow, then move to ConvertKit.

### Buttondown
- Their subscribe endpoint: `https://buttondown.com/api/emails/embed-subscribe/{username}`
  but it expects form-encoded data, not JSON. **Note:** you may need `content-type` tuned.
  If you use Buttondown, email the checklist from within their dashboard instead.

---

## 3. The lead magnet itself

`NEXT_PUBLIC_EMAIL_REDIRECT` defaults to `/thank-you`. The walkthrough is already built —
with the Apps Script backend (Option A above), the checklist page is at `/free-checklist`,
linked in the success state and delivered in the script's email. No `/thank-you` needed.

If you use a provider instead, create `/thank-you` once the email flow is live and point
`NEXT_PUBLIC_EMAIL_REDIRECT` at it.

Suggested welcome delivery (copy into email #1):
> Here's your checklist — [link to /free-checklist]
> Save it. Print it. Run the 5 fixes this week.

The `/free-checklist` page (built) renders the 5-point checklist; it's public, so the email
gate is the value — anyone can read it, but the email puts it in front of you on purpose.

---

## 4. The 5-point quick-win checklist (lead magnet content)

Use this verbatim in the free PDF/section:

1. **Indexation scan** — Search `site:yoursite.com` in Google. Pages missing are not
   indexable. Fix: submit the sitemap in Search Console, check robots.txt, add XML sitemap.
2. **One clear primary keyword per page** — If a page targets two keywords, it targets none.
   Rewrite the H1 + title to one intent. This is the fastest single-page win.
3. **Internal links from your strongest pages** — Add 3 links from pages that already get
   traffic, pointing to your orphan pages. Distributes authority, cheapest fix that works.
4. **Schema on your main template** — Add `Article` schema with headline + publish date to
   your blog template once. No plugin needed; a single JSON-LD snippet applies to every post.
5. **Mobile tap targets** — Buttons smaller than 48px fail Core Web Vitals' LCP/interaction
   test. Bump button min-height to 48px + ensure body font ≥16px.

Each fix: < 30 minutes, zero tools, works for any niche site.

---

## 5. Sequence: 6 emails (copy-paste ready)

Sequence name in ConvertKit: **SEO Quick-Win**
Tag: `quick-win-checklist`

### Email 1 — Deliver (immediately, 0h)
Subject: `Your SEO quick-win checklist (5 fixes, 30 min)`
```
Hi {{ first_name }},

Here's your free checklist — exactly what I promised:

1. Indexation scan
2. One clear keyword per page
3. Internal links from strong pages
4. Article schema on your template
5. 48px tap targets

Do 1 and 2 this week. They take 30 minutes total and are the highest-leverage of the five.

Why these five? They're pulled from the 29-point technical audit in my playbook — the
12 checks that move rankings fastest when fixed.

If a friend just forwarded this, [subscribe here](link).

— H. Aditya
```

### Email 2 — Quick win (day 2)
Subject: `The #2 fix people skip (and it's free)`
```
Hi {{ first_name }},

Yesterday's checklist had 5 fixes. Today: one 15-minute fix that outranks most blog advice.

**One keyword per page.**

Open your top 10 posts. For each, write the ONE search you want to win. If you can't
answer in 5 seconds, the page is targeting too many things — and Google can't decide
what it's about.

Fix the title + H1 to that one search. That's it.

Next email: why your best pages still don't rank, and the Layer Google never advertised.
```

### Email 3 — The shift (day 5)
Subject: `Google stopped rewarding content`
```
Hi {{ first_name }},

You wrote the content. It didn't rank. It's not laziness — the rules changed.

Google's 2026 algorithm ranks based on *systems*, not individual pages:
- topical coverage across clusters, not isolated posts
- technical health across 200+ factors, not just page speed
- expertise that search engines can *verify*, not just claim

That's why a single "great article" won't save you. The system decides.

In the full playbook, this is the 12-month roadmap + 3 databases that make it runnable.
More on that in email #6 — first, let me show you the audit that finds what's broken.
```

### Email 4 — The audit (day 8)
Subject: `The 29-point audit nobody does`
```
Hi {{ first_name }},

Most sites have one silent killer: an indexation bug, broken schema, or orphan pages
eating authority. Nobody notices because rankings drift slowly.

My playbook ships a 29-point technical audit — every check with the exact how-to and the
chapter to read if it fails. Run it quarterly.

PDF + Word + 3 CSV databases (26-task roadmap, content tracker, audit) import into
Notion/Sheets/Excel in 5 minutes.

Before the big reveal on day 12, answer me this: what's your #1 ranking frustration?
(Just hit reply.)
```

### Email 5 — Objection handling (day 10)
Subject: `Notion? No problem`
```
Hi {{ first_name }},

Two questions buyers ask most:

Q: Do I need Notion? → No. CSVs import into Sheets, Excel, Airtable, ClickUp. Notion is
just the nicest 5-minute option.

Q: Do I need SEO experience? → No. Parts I–II build the mental model from zero. Part VII
gives you 10 niche playbooks so you can skip ahead.

And it's a *source*, not a listicle: labeled documented / testimony / folklore. Including
the U.S. v. Google trial testimony about NavBoost. That's the part content marketers
can't quote — because they've never read the record.
```

### Email 6 — The offer (day 12)
Subject: `The system (and why $39 is short-term)`
```
Hi {{ first_name }},

Five emails in. You've used the checklist, seen the audit, and watched content stop
ranking. Here's the offer:

**The Google Search Ranking System — 2026 Edition**
- 100-page playbook: 32 chapters, 7 parts, 6 appendices
- 26-task 12-month roadmap + 3 databases (Notion/Sheets/Excel-ready)
- 29-point technical audit + 14-symptom recovery table
- 10 niche playbooks + full worked example
- Lifetime updates — every future edition free

$155 stack value, yours for $39 one-time. Instant download. 30-day "prove-it" guarantee:

> Rank one page using this system's audit + roadmap in 30 days, or email me and I'll
> refund you. Simple.

[Get instant access →](LINK)

You're on this list because you wanted quick wins. The system is what turns them into
permanent rankings. I'll be here if you need help importing or choosing a phase.

— H. Aditya
```

---

## 6. Tracking once live

GA4 events already fire: `lead_capture_attempt`, `lead_capture_success`, `view_item`,
`begin_checkout`. If you install Meta Pixel via `NEXT_PUBLIC_META_PIXEL_ID`, it also fires
`PageView`, `ViewContent`, `InitiateCheckout`, and custom `LeadCapture`.

To see the funnel clearly in GA4:
1. Go to GA4 → **Explore** → **Free-form**.
2. Rows: `event_name`, Columns: `session_source`.
3. Filter: `lead_capture_success`, `begin_checkout`, `purchase`.