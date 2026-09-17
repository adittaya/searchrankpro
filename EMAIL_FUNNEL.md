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
3. Run the **setup** function once from the editor. It authorizes Gmail + Sheets + triggers,
   creates the lead spreadsheet, adds the `Sequence` column, and installs the daily
   `checkSequence` trigger. (Re-running `setup` is safe — it reopens the existing sheet and
   won't create a second one.)
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
- Stores every lead (time, email, source form, sequence progress) in a Google Sheet you own.
- Sends **email 1 (welcome + PDF)** immediately, straight from your own Gmail (`MailApp`).
- Runs a **daily trigger** (`checkSequence`) that sends the next due email of the 6-email
  drip sequence (day 2, 4, 6, 9, 12) and records progress in the sheet's `Sequence` column.
- Dedupes (resends the welcome on repeat opt-in without a duplicate row).
- Rate-limits per address (abuse guard) and silently drops honeypot submissions.

The email copy lives in one place: the `SEQUENCE` array at the top of
`scripts/checklist-email.gs`. Edit it there, save, and redeploy — no other file changes.

Limits: free Gmail ≈ 100 sends/day, Google Workspace ≈ 1500/day. Fine for landing pages.
When you outgrow it, point the same form at a transactional provider — nothing else changes.

The checklist walkthrough page lives at `/free-checklist` and is already linked in the
success state and in the script's welcome email. The admin dashboard lives at `/admin`
(passcode-gated inside the script via `ADMIN_KEY`).

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
with the Apps Script backend (Option A above), the checklist PDF lives at
`/free-checklist.pdf` (and the readable walkthrough at `/free-checklist`). The script
fetches the PDF and **attaches it directly** to the welcome email, so the subscriber gets
the file, not just a link. No `/thank-you` needed.

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

## 5. Sequence: the 6 emails (built into the Apps Script)

This is the authoritative copy — it lives in the `SEQUENCE` array in
`scripts/checklist-email.gs` and is sent automatically. Day 0 fires on signup; the rest fire
from the daily trigger.

| # | Day | Subject | Job |
|---|---|---|---|
| 1 | 0 | Your SEO Quick-Win Checklist (fix #1 takes 5 minutes) | Deliver the PDF (attached) |
| 2 | 2 | Did 5 minutes of work fix your traffic? | Follow up on fix #1 |
| 3 | 4 | The 5 stages every Google query passes through | Teach one idea (crawl→ranking) |
| 4 | 6 | The system behind the checklist | The pitch |
| 5 | 9 | Is this different from free SEO advice? | Objection handling |
| 6 | 12 | One honest question before you go | The close |

To change any of them, edit the corresponding `text`/`subject` in `SEQUENCE`, set `day` as
needed, save, and redeploy. Each email is authored as plain text (blank line = paragraph);
`toHtml_` builds the HTML version and auto-links URLs, so you only maintain one copy.

**Metrics to watch** (weekly, 5 min):

| Metric | Healthy | If low, fix |
|---|---|---|
| Open rate | 40%+ | Test 2 subject lines per email |
| Click rate | 3–8% | One link per email; clearer CTA |
| Reach email 4 | 85%+ | Avoid spam words; keep plain-text style |
| Leads who buy | 2–5% | Sequence is working; improve the page if lower |

**After the sequence:** anyone who finishes all 6 without buying stays on your list. Send a
genuinely useful email every 1–2 weeks (one lesson, one observation, one answer to a reader
question) and pitch only occasionally. When the book updates, that email is your best sales
email: *"The March 2026 core update is covered — edition 2 shipped free to every buyer."*

*(Option B providers: paste this same copy into ConvertKit / Buttondown and use their
sequence engine instead — the copy is provider-agnostic.)*

---

## 6. Tracking once live

GA4 events already fire: `lead_capture_attempt`, `lead_capture_success`, `view_item`,
`begin_checkout`. If you install Meta Pixel via `NEXT_PUBLIC_META_PIXEL_ID`, it also fires
`PageView`, `ViewContent`, `InitiateCheckout`, and custom `LeadCapture`.

To see the funnel clearly in GA4:
1. Go to GA4 → **Explore** → **Free-form**.
2. Rows: `event_name`, Columns: `session_source`.
3. Filter: `lead_capture_success`, `begin_checkout`, `purchase`.