"use client";

import { useEffect } from "react";
import { trackViewItem } from "@/lib/analytics";

/** Fires GA4 view_item once when the landing page loads. */
export default function ViewTracker() {
  useEffect(() => {
    trackViewItem();
  }, []);
  return null;
}