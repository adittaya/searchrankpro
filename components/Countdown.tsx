"use client";

import { useEffect, useRef, useState } from "react";
import { LAUNCH_PRICE_ENDS } from "@/lib/site";

// ------------------------------------------------------------------
// Real-time countdown for the launch-price window.
//
// Accuracy model:
//   - The deadline is absolute UTC (LAUNCH_PRICE_ENDS), so the numbers
//     shown are timezone-independent — every visitor sees the same
//     remaining time.
//   - Device clocks can be wrong, so on mount we estimate the clock
//     offset against a network time source (best effort, with a short
//     timeout + fallback chain). If sync fails we fall back to the
//     device clock.
//   - SSR/hydration: the first paint renders an invisible placeholder
//     (fixed-width slots) so the countdown never flashes a wrong
//     "launch offer ended" state. The real value appears only after
//     mount, then ticks every second.
// ------------------------------------------------------------------

type Left = { d: number; h: number; m: number; s: number } | null;

const DEADLINE = new Date(LAUNCH_PRICE_ENDS).getTime();

// Network time sources (in order). Both return UTC timestamps and allow
// cross-origin reads.
const TIME_URLS = [
  "https://worldtimeapi.org/api/ip",
  "https://timeapi.io/api/Time/current/zone?timeZone=UTC",
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function from(nowMs: number): Left {
  const ms = DEADLINE - nowMs;
  if (ms <= 0) return null;
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms % 86400000) / 3600000),
    m: Math.floor((ms % 3600000) / 60000),
    s: Math.floor((ms % 60000) / 1000),
  };
}

// Estimate the offset (serverMs - deviceMs) using the round-trip midpoint.
// Returns 0 when every source fails — we then trust the device clock.
async function syncClock(): Promise<number> {
  for (const url of TIME_URLS) {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 3000);
      const t0 = Date.now();
      const res = await fetch(url, { cache: "no-store", signal: ctrl.signal });
      clearTimeout(timer);
      if (!res.ok) continue;
      const json = (await res.json()) as { datetime?: string; dateTime?: string };
      const serverMs = Date.parse(json.datetime ?? json.dateTime ?? "");
      if (!Number.isFinite(serverMs)) continue;
      const t1 = Date.now();
      return serverMs - Math.round((t0 + t1) / 2);
    } catch {
      // try the next source
    }
  }
  return 0;
}

export default function Countdown({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [left, setLeft] = useState<Left>(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    let alive = true;
    let id: ReturnType<typeof setInterval> | null = null;

    const startTicking = (offset: number) => {
      if (!alive) return;
      offsetRef.current = offset;
      setLeft(from(Date.now() + offset));
      setMounted(true);
      id = setInterval(() => setLeft(from(Date.now() + offsetRef.current)), 1000);
    };

    syncClock().then(startTicking);

    return () => {
      alive = false;
      if (id) clearInterval(id);
    };
  }, []);

  // First paint (SSR + pre-hydration): invisible fixed-width slots so the
  // chip keeps its size and never shows a wrong value.
  if (!mounted) {
    return (
      <span className={`tabular-nums opacity-0 ${className}`} aria-hidden="true">
        00d 00h 00m 00s
      </span>
    );
  }

  if (!left) {
    return <span className={className}>launch offer ended</span>;
  }

  return (
    <span className={`tabular-nums ${className}`}>
      {left.d}d {pad(left.h)}h {pad(left.m)}m {pad(left.s)}s
    </span>
  );
}