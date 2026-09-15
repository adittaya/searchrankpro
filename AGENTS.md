# AGENTS.md

This file gives AI coding agents the information they need to work on the SearchRank landing page and book reader.

---

## Project overview

Next.js 15 static-export site for **The Google Search Ranking System — 2026 Edition** by H. Aditya. The same repo contains two experiences:

1. **Landing / sales page** (`app/page.tsx`) — single-page funnel with hero, pricing, testimonials, preview carousel.
2. **In-browser book reader** (`app/book/`) — full 100-page ebook rendered via `components/book/BookShell.tsx`.

The site is deployed to **Firebase Hosting** at `https://searchrankpro.web.app`.

---

## Quick commands

```bash
npm install              # install deps (run once)
npm run dev              # dev server at http://localhost:3000
npm run build            # production static export into out/
firebase deploy --only hosting   # deploy to Firebase
```

The build is a **full static export** (`output: "export"`). No server runtime — every page is pre-rendered as HTML.

---

## Architecture

### Landing page

| File | Role |
|---|---|
| `app/page.tsx` | All landing sections as inline React functions: `Hero`, `Proof`, `Problem`, `Learn`, `How`, `Inside`, `Preview`, `Testimonials`, `MidCta`, `Included`, `System`, `Different`, `Compare`, `Pricing`, `Guarantee`, `Policy`, `Faq`, `FinalCta`, `StickyBuy`, `Footer`. |
| `app/layout.tsx` | Fonts (Playfair Display + Inter via next/font/google), metadata/SEO, OG image, GA4 script injection, JSON-LD structured data. |
| `app/globals.css` | Theme tokens (Tailwind `@theme inline`), button styles (`.btn-primary`, `.btn-ghost`), card/chip/dot-pulse, cover glow, grid-faint, print CSS for book reader, motion settings. |
| `components/BuyButton.tsx` | Single checkout button used everywhere — reads `CHECKOUT_URL`, fires GA4 `begin_checkout`. |
| `components/PreviewCarousel.tsx` | 3-second auto-slide image carousel (client component, 12 slides). |
| `components/Fx.tsx` | GSAP scroll animations + hero entrance. |
| `components/Icons.tsx` | All SVG icons: `LogoMark`, `IconCheck`, `IconArrowRight`, etc. |
| `components/MobileMenu.tsx` | Responsive nav overlay. |
| `lib/site.ts` | **Single source of truth** for product config: `CHECKOUT_URL`, `SITE_URL`, `SITE_NAME`, `PRODUCT` object. Edit here, not in page components. |
| `lib/analytics.ts` | GA4 funnel tracking — inert until `NEXT_PUBLIC_GA4_ID` is set. |

### Book reader

| File | Role |
|---|---|
| `app/book/page.tsx` | Book route — renders `BookShell` with sections from `sections.tsx`. |
| `app/book/sections.tsx` | Merges part files into canonical `SECTIONS` array. |
| `app/book/sections/full/*.tsx` | Full 32-chapter + 6-appendix content: `intro.tsx`, `part1.tsx` through `part7.tsx`, `appendices.tsx`. |
| `app/book/sections/front.tsx` | Cover/title/copyright/back-cover sections (short form). |
| `components/book/BookShell.tsx` | Main book renderer: page layout, TOC rail, print styles, theme. |
| `components/book/Blocks.tsx` | Authoring blocks: `PartSep`, `Chapter`, `KeyTakeaway`, `NavAccordion`, `QuoteBlock`, `CompareTable`, `Timeline`, `Checklist`, `FlowDeck`, etc. |
| `components/book/Visuals.tsx` | Data visuals: `BarChart`, `Timeline`, `GaugeGrid`, `CompareDeck`, `IconCards`, `Pipelines`, etc. |
| `components/book/types.ts` | `BookSection` type + `SectionKind` union. |
| `scripts/export-book-pdf.mjs` | Puppeteer PDF export script — use `BOOK_ROUTE=/book/full BOOK_PDF=out.pdf`. |

### Static assets

| Path | Purpose |
|---|---|
| `public/cover.png` | Main product cover (1536×2304 RGB). |
| `public/cover.webp` | Hero cover (1080×1620). |
| `public/cover-og.png` | OpenGraph social share image (1200×1800). |
| `public/previews/slide-*.jpg` | 12 carousel preview slides (book pages). |
| `public/product/*.png/webp/jpg` | Getvik listing thumbnails (4:3, 3 formats each). |
| `public/reviews/*.jpg` | Testimonial author photos. |
| `public/icon-*.png`, `public/favicon.ico`, `public/apple-touch-icon.png` | Favicon set (blue rank-bar logo). |
| `public/icon.svg` | SVG favicon (same mark). |

---

## Design system

### Color palette (ebook-matched blue theme)

```
Primary brand blues:
  #2F5D73 — primary headings, dark surfaces (announcement, footer, CTA)
  #3F6F86 — secondary headings, eyebrow accents
  #6F94A6 — icons, dividers, subtle UI

Accent (Google-style):
  #3B82F6 — primary accent (buttons, checks, links)
  #2563EB — deep accent / hover states
  #60A5FA — lighter accent / highlights
  #93C5FD — soft accent on dark backgrounds

Neutrals:
  #1F2933 — body text (almost charcoal)
  #4B5563 — secondary text
  #9CA3AF — captions / metadata
  #D1D5DB — lines / separators
  #F5F7F9 — background panels
  #FFFFFF — page background

Semantic:
  #A7C957 — lime accent (cover underline)
  #E5484D — "bad" / error (book audit visuals only)
```

### Fonts

- **Display / headings**: Playfair Display (serif) — `--font-display`
- **Body / UI**: Inter (sans-serif) — `--font-body`

Both loaded via `next/font/google` in `app/layout.tsx`. The CSS variables are `--font-display` and `--font-body`. Do not hardcode font family names; always reference the CSS variable or the Tailwind `font-display` / `font-body` classes.

### Tailwind tokens

Defined in `app/globals.css` under `@theme inline`:

```css
--color-cream:     #ffffff
--color-blush:     #f5f7f9
--color-blush-2:   #edf1f5
--color-line:      #d1d5db
--color-berry:     #2f5d73
--color-plum:      #4b5563
--color-plum-soft: #9ca3af
--color-pink:      #3b82f6
--color-pink-deep: #2563eb
--color-pink-ink:  #3f6f86
--color-rose-soft: #eaf0f6
```

Referenced as `text-berry`, `bg-blush`, `border-line`, `text-pink`, etc. These token names are legacy (originally pink); they are semantically mapped to the blue palette.

### Recurring patterns

- **Cards**: `.card` class — white bg, `border-line` border, `0.125rem` radius, blue shadow. `.card:hover` lifts 3px.
- **Buttons**: `.btn-primary` (blue gradient + white text), `.btn-ghost` (white + border).
- **Chips/pills**: `.chip` class or inline `rounded-full border border-line bg-white`.
- **Dark surfaces**: `bg-berry` with `text-white` (announcement bar, mid-CTA, footer).
- **Section**: `<Section>` component renders eyebrow pill + h2 + lead + children with standard spacing. Pass `tint` for `bg-blush/60`.
- **Animations**: `data-fx="up|left|right|scale"` on elements triggers GSAP scroll reveals (handled by `Fx.tsx`).
- **Preview carousel**: `PreviewCarousel.tsx` — 12 slides, 3s auto-advance, pauses on hover. Images in `public/previews/`.

---

## Key editing rules

### 1. Edit product config in one place

All product data lives in `lib/site.ts`. Never hardcode price, name, or checkout URL in page components.

### 2. Keep the blue palette consistent

Every hex value in the codebase is part of the palette above. If you add new colors:
- Use Tailwind tokens where possible (`text-berry`, `bg-blush`, `border-line`, `text-pink`).
- If you must use an arbitrary hex, pick from the palette.
- **Never** reintroduce pink/rose tones (`#ec1478`, `#c00e62`, `#fff1f6`, etc.) — the site is blue.

### 3. Respect the font pairing

- Headings: `font-display` (Playfair Display).
- Body/UI: `font-body` (Inter) or standard `font-sans` fallback chain.
- Do not add new font families.

### 4. BuyButton is the single checkout component

Never create inline buy buttons. Always use `<BuyButton>`. It handles tracking, hover animation, and the checkout URL.

### 5. Client vs server components

- `app/page.tsx` is a **server component** — it can import client components but does not use `"use client"`.
- Client components (`"use client"`) are: `Fx.tsx`, `MobileMenu.tsx`, `BuyButton.tsx`, `PreviewCarousel.tsx`, `ViewTracker.tsx`.
- The book components (`components/book/*`) are **server components** (no `"use client"` directive).
- When adding a new component that needs `useState`, `useEffect`, or browser APIs, add `"use client"` at the top and keep the file under `components/`.

### 6. Static export only

There is no server runtime. Every page must be statically renderable. Do not use `cookies()`, `headers()`, `searchParams`, or any dynamic server features in page/layout components.

### 7. PDF export

To regenerate the hosted PDF:
```bash
BOOK_ROUTE=/book/full BOOK_PDF=out.pdf node scripts/export-book-pdf.mjs
```
Output goes to `out.pdf`. Copy to `public/` and `The_Google_Search_Ranking_System_Playbook.pdf` for Firebase deploy.

---

## Product bundle

The ZIP sold on getvik (`Google_Search_Ranking_System_Bundle.zip`) lives at `/home/adityahalder829/Google_Search_Ranking_System_Bundle.zip` and contains:

```
Google_Search_Ranking_System/
  The Playbook/
    The_Google_Search_Ranking_Playbook.pdf   (100-page standard export)
    The_Google_Search_Ranking_Playbook.docx   (editable source)
  LICENSE.txt
  START_HERE.md
  Notion Execution System/
    01_Roadmap_Tasks.csv      (26 tasks + 4 gates)
    02_Content_Tracker.csv
    03_Technical_Audit_Checklist.csv   (29 checks)
    IMPORT_GUIDE.md
```

---

## Environment variables

| Variable | Where | Purpose |
|---|---|---|
| `NEXT_PUBLIC_GA4_ID` | build time | Google Analytics 4 measurement ID (`G-XXXXXXXXXX`). |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | build time | Google Search Console verification code. |

Both are optional. The site works without them.

---

## GitHub

- Repo: `https://github.com/adittaya/searchrankpro`
- Remote auth: `gh auth setup-git` (token-scoped, never commit the token).
- Push: `git push origin main`

---

## Common tasks

| Task | Where to edit |
|---|---|
| Change price | `lib/site.ts` → `PRODUCT.price`, `PRODUCT.launchPrice` |
| Change checkout link | `lib/site.ts` → `CHECKOUT_URL` |
| Add/remove landing section | `app/page.tsx` — add function, add to `<main>` in `Page()` |
| Add book chapter | `app/book/sections/full/part*.tsx` — add `BookSection` object, register in `sections.tsx` |
| Update favicon | Rebuild PNGs from `icon.svg` (use PIL script) + copy to `public/` |
| Add carousel slide | `components/PreviewCarousel.tsx` → `SLIDES` array + add image to `public/previews/` |
| Change site name/URL | `lib/site.ts` → `SITE_NAME`, `SITE_URL` + update `app/layout.tsx` metadata |
