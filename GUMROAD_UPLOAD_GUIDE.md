# Gumroad Upload Guide — The Google Search Ranking System

Everything below is copy-paste-ready for your Gumroad product page.
Total file to upload: `Google_Search_Ranking_System_v1.0.zip` (271 KB, 11 files).

---

## 1. Product basics

| Field | Value |
|---|---|
| **Product name** | The Google Search Ranking System (2026 Edition) |
| **Product URL (slug)** | `seo-rank-playbook` → preview link `https://yourhandle.gumroad.com/l/seo-rank-playbook` |
| **Price** | **$49** (launch at **$39**, then raise) |
| **Card thumbnail** | `4a883470-af54-11f1-a691-91176a435956.png` — your book cover (1536×2304, 2:3 ratio). Crop version recommended: Gumroad thumbnails look best square or 2:3. |
| **Category** | Books → Ebooks / Marketing |
| **Tags** | SEO, search engine optimization, digital marketing, google ranking, content marketing, seo guide, seo ebook, technical seo, ai search, GEO |
| **Discount** | Gumroad → Discounts → "Launch" — $39 (20% off $49), set an end date. |

> Tip: Name the product file `The_Google_Search_Ranking_System_2026.zip` on Gumroad's upload screen — your zip is already structured with a clean top-level folder.

---

## 2. Short description (for the social/blurb field)

> How Google actually ranks pages — the systems, the signals, and the 12-month strategy to earn your place. A 100-page playbook, a working Notion execution system, and a roadmap that survives core updates and AI search.

Short blurb (paste into Gumroad "Description" preview / Twitter card):

> The 100-page playbook that explains how Google ranks pages — built from Google's official docs and the US v. Google antitrust trial — plus a 30-task Notion execution system, a 29-point audit, and 10 niche playbooks. 2026 Edition.

---

## 3. Full description (paste this in the Gumroad editor)

### The Google Search Ranking System — 2026 Edition

Every day, billions of people type a question into Google, and the same handful of pages get seen while everyone else gets ignored. This is the complete, sourced system for becoming one of the pages that gets seen.

Most SEO advice is an echo. This is source material. Every major claim cites its evidence — and the evidence is labelled honestly:

- **Google's own documentation** (Search Central, ranking-systems guide, core-update guidance)
- **Sworn testimony and exhibits from United States v. Google** — including the NavBoost click-satisfaction system that Google never publicly advertised
- **Published independent research** — the original GEO experiments (Princeton/AI2), SparkToro zero-click studies, core-update impact analyses
- Items that are just industry folklore are **clearly marked as folklore**

### What you get (one instant-download ZIP)

**The Playbook — 56 pages, 32 chapters, 7 parts + 6 appendices** (PDF + editable Word):
- Part I · How Search actually works — the query pipeline, the named systems, PageRank, BERT & neural matching, helpfulness, E-E-A-T, NavBoost & click signals, Core Web Vitals
- Part II · The signals — intent & information gain, links that count, freshness & decay, the Local Map Pack, spam policies, the full update timeline
- Part III · The practice — topic research, people-first content, technical SEO, speed, schema, earning links, local SEO, core-update survival
- Part IV · The AI-search era — AI Overviews, AI Mode, and GEO: becoming the source AI answers cite
- Part V–VI · Execution — a 90-day plan, professional toolstack, and the 12-month roadmap with decision gates
- Part VII · Ten niche playbooks — food, tech, travel, productivity, local, SaaS, and more — plus a full worked example
- Six appendices: named-systems reference table, 29-point technical audit, core-update recovery checklist, glossary, 14-symptom troubleshooting table, and 4 ready-to-use templates (article skeleton, content brief, PR pitch, refresh SOP)

**The Notion Execution System — 3 databases (CSV)**, documented 5-minute import:
- Roadmap_Tasks — 30 sequenced tasks across 5 phases, with 4 decision gates
- Content_Tracker — your topic-cluster content pipeline
- Technical_Audit — 29 pass/fail checks with how-to-verify + chapter references
- Works in Notion, Google Sheets, Excel, Airtable, or ClickUp

### Who this is for
- **Beginners / students** — read Parts I–II to build the mental model, then use the system to practice
- **Marketers & agencies** — the practice section, the troubleshooting table, and the client-ready templates
- **Developers / technical SEO** — NavBoost, Core Web Vitals, technical foundations, and the quarterly audit

### The value stack
| Component | Value |
|---|---|
| The Playbook (PDF + Word, 56 pages) | $59 |
| Notion Execution System (3 databases) | $29 |
| 29-point Technical Audit Checklist | $19 |
| Core-update Recovery + Troubleshooter | $19 |
| 10 Niche Playbooks + worked example | $29 |
| **Total value** | **$155** |
| **Your price today** | **$39** (was $49) |

Lifetime access · free updates forever.

> Benchmark: SEO ebooks average ~$51 on Gumroad; single SEO playbooks sell at $39–$52; 3-book bundles at $77–99. This bundle is a reference + execution system combined.

---

## 4. Pricing recommendation (why $49 / $39)

- Gumroad's own data (2026, 146K products): **$30–49 converts 28% better** than under-$10; ebooks average **$50.91**.
- Comparable products: "The SEO Playbook" $39 · "AI SEO Playbook" $49 · 3-in-1 SEO bundles $52–78.
- Launch at **$39** to trade margin for first-sale social proof + sales volume in week one → raise to **$49** after ~30 days or 50 sales. The landing page already shows $39 crossed from $49.
- Fees to expect (US): Gumroad 10% + ~2.9% + $0.30 ≈ **13.2%**. At $39 you keep ≈ $33.85; at $49 ≈ $42.50.

---

## 5. Policy (replaces a refund clause — paste into product notes)

> **Lifetime updates.** Buy once; every future edition and improvement is yours free forever. No renewal, no subscription, no upsells.
> **Fair-use license.** Licensed for personal and professional use: read on any device, print for yourself, and use the templates, checklists, and trackers freely in your own work — including client work. You may NOT redistribute, resell, share, or publicly post the files.
> **Support.** Questions answered directly by the author — importing the system, choosing a phase, or understanding a chapter.
> Not affiliated with or endorsed by Google LLC. Educational material, not legal or professional advice.

---

## 6. After you create the product

1. Copy your **checkout URL**: `https://yourhandle.gumroad.com/l/seo-rank-playbook`
2. Update it in the landing page in **one place**:
   - Edit `lib/site.ts` → set `CHECKOUT_URL` to your real URL (the 4 buy buttons read from it).
3. Optional: set your real domain in `app/layout.tsx` (`metadataBase`) if you deploy the page to a domain you own.
4. Deploy the landing page (Vercel recommended) and point it at the checkout link.

### Landing page commands
```bash
cd ~/projects/gsrs-landing
npm run dev      # local preview → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

---

## 7. Quick checklist before you hit publish

- [ ] Zip uploaded (271 KB) with clean folder structure
- [ ] Product name + tagline set
- [ ] Full description pasted (section 3)
- [ ] Cover thumbnail uploaded (section 1)
- [ ] Price $49, launch discount $39 with end date
- [ ] Tags added (section 1)
- [ ] Policy section pasted (section 5)
- [ ] Checkout URL copied into `lib/site.ts`
- [ ] Test purchase on Gumroad from the landing page button