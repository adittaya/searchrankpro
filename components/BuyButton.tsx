"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { CHECKOUT_URL } from "@/lib/site";
import { trackCheckout } from "@/lib/analytics";

/**
 * Single, tracked checkout button used across the whole funnel —
 * links to CHECKOUT_URL and fires a GA4 begin_checkout event.
 */
export default function BuyButton({
  href = CHECKOUT_URL,
  className,
  children,
  ariaLabel,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const onClick: MouseEventHandler<HTMLAnchorElement> = () => {
    trackCheckout();
  };
  return (
    <a href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
}