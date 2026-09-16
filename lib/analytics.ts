import { PRODUCT } from "@/lib/site";

// ------------------------------------------------------------------
// Google Analytics 4 (GA4) funnel tracking — inert until you set
// NEXT_PUBLIC_GA4_ID at build time. No ID = no scripts, no calls.
// ------------------------------------------------------------------

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";

// ------------------------------------------------------------------
// Meta Pixel — inert until you set NEXT_PUBLIC_META_PIXEL_ID at build
// time. No ID = no scripts, no calls.
// ------------------------------------------------------------------

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: ReturnType<typeof Array> & { push: (...args: unknown[]) => void };
  }
}

/** Push a GA4 event. Safe no-op when GA isn't configured. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (!GA4_ID) return;
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag?.("event", event, params);
}

/** Push a Meta Pixel event. Safe no-op when Pixel isn't configured. */
export function trackMeta(event: string, params?: Record<string, unknown>) {
  if (!META_PIXEL_ID) return;
  if (typeof window === "undefined") return;
  window.fbq?.("track", event, params);
}

/** Push a custom Meta Pixel event. Safe no-op when Pixel isn't configured. */
export function trackMetaCustom(event: string, params?: Record<string, unknown>) {
  if (!META_PIXEL_ID) return;
  if (typeof window === "undefined") return;
  window.fbq?.("trackCustom", event, params);
}

const item = () => ({
  item_id: "gsrs-2026",
  item_name: "The Google Search Ranking System — 2026 Edition",
  price: PRODUCT.launchPrice,
  quantity: 1,
  currency: "USD",
});

/** Fired once when the page content is viewed (GA4 "view_item"). */
export function trackViewItem() {
  track("view_item", {
    value: PRODUCT.launchPrice,
    currency: "USD",
    items: [item()],
  });
  trackMeta("ViewContent", {
    content_name: PRODUCT.name,
    content_category: "SEO Playbook",
    value: PRODUCT.launchPrice,
    currency: "USD",
  });
}

/** Fired on every buy-button click, before checkout opens. */
export function trackCheckout() {
  track("begin_checkout", {
    value: PRODUCT.launchPrice,
    currency: "USD",
    items: [item()],
    event_label: "buy-cta",
    event_category: "checkout",
  });
  trackMeta("InitiateCheckout", {
    value: PRODUCT.launchPrice,
    currency: "USD",
    content_name: PRODUCT.name,
  });
}

/** Fired on email capture. */
export function trackLeadCapture(email: string, source: string = "hero") {
  trackMetaCustom("LeadCapture", {
    content_name: "SEO Quick-Win Checklist",
    content_category: source,
    email,
  });
}