# SearchRank — Landing Page

Production landing page for **The Google Search Ranking System (2026 Edition)**.

## Files to know
- `lib/site.ts` — product name, price, and **checkout URL** (the main file to edit)
- `lib/analytics.ts` — GA4 funnel tracking (inert until `NEXT_PUBLIC_GA4_ID` is set)
- `components/BuyButton.tsx` — the single tracked checkout button used everywhere
- `app/page.tsx` — the landing page
- `app/layout.tsx` — fonts, metadata, OG image, GA4 scripts
- `public/cover.png` — product cover (1536×2304)
- `public/product/` — Getvik thumbnail + preview images (4:3 PNG masters + webp/jpg)
- `GUMROAD_UPLOAD_GUIDE.md` — product-listing copy kit
- `PRODUCT_IMAGE_PROMPTS.md` — AI image-generation prompts (HF/SDXL/FLUX)

## Run
```bash
npm install
npm run dev      # preview at http://localhost:3000
npm run build    # production build
firebase deploy --only hosting
```

## Launcher checklist
1. **Checkout link** — paste your Getvik checkout URL into `CHECKOUT_URL` in `lib/site.ts`.
2. **GA4 funnel** (optional) — set `NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX` at build time.
   Fires `view_item` on load and `begin_checkout` on every buy click.
3. **Search Console** — set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` at build time,
   or paste your meta tag into `app/layout.tsx` (`verification.google`).