// ------------------------------------------------------------------
// Google Analytics 4 (GA4) funnel tracking — inert until you set
// NEXT_PUBLIC_GA4_ID at build time. No ID = no scripts, no calls.
// ------------------------------------------------------------------

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Push a GA4 event. Safe no-op when GA isn't configured. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (!GA4_ID) return;
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag?.("event", event, params);
}

const item = () => ({
  item_id: "gsrs-2026",
  item_name: "The Google Search Ranking System — 2026 Edition",
  price: 39,
  quantity: 1,
  currency: "USD",
});

/** Fired once when the page content is viewed (GA4 "view_item"). */
export function trackViewItem() {
  track("view_item", {
    value: 39,
    currency: "USD",
    items: [item()],
  });
}

/** Fired on every buy-button click, before checkout opens. */
export function trackCheckout() {
  track("begin_checkout", {
    value: 39,
    currency: "USD",
    items: [item()],
    event_label: "buy-cta",
    event_category: "checkout",
  });
}