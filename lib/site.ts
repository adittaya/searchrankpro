// ------------------------------------------------------------------
// Site-wide configuration — the only file you need to edit.
// ------------------------------------------------------------------

// Checkout URL. EVERY buy button on the site uses this — paste your
// real Getvik checkout link here, e.g. "https://getvik.com/store/your-shop/your-product"
export const CHECKOUT_URL = "https://getvik.com/store/thedigitalshop/product/the-google-search-ranking-system-2026-edition";

// IMPORTANT: replace with your real public URL before deploying.
// This drives canonical URLs, sitemap, OG images, and the Google
// site-name/logo structured data. No trailing slash.
export const SITE_URL = "https://searchrankpro.web.app";

// The name Google shows under your favicon in search results.
export const SITE_NAME = "SearchRank Pro";

export const PRODUCT = {
  name: "The Google Search Ranking System",
  shortName: "SearchRank Pro",
  edition: "2026 Edition",
  price: 49,
  launchPrice: 39,
  value: 155,
  tagline:
    "How Google actually ranks pages — the systems, the signals, and the 12-month strategy to earn your place.",
};

// ------------------------------------------------------------------
// Launch-window deadline that drives the countdown chips near the CTAs.
// Set this to the real moment the launch price ends (ISO 8601, UTC).
// When it passes, the chips switch to "launch offer ended".
// ------------------------------------------------------------------
export const LAUNCH_PRICE_ENDS = "2026-10-31T23:59:59Z";