"use client";

import { useEffect, useState } from "react";

// ------------------------------------------------------------------
// Shared network-clock offset for client countdowns.
//
// Static export = no server to anchor the clock, so we estimate the
// offset between the server's UTC time and the visitor's device clock
// on mount (best effort, short timeout, fallback chain). Returns 0
// when every source fails — we then trust the device clock.
// ------------------------------------------------------------------

const TIME_URLS = [
  "https://worldtimeapi.org/api/ip",
  "https://timeapi.io/api/Time/current/zone?timeZone=UTC",
];

export async function syncClock(): Promise<number> {
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
      // Round-trip midpoint: offset between server clock and device clock.
      return serverMs - Math.round((t0 + t1) / 2);
    } catch {
      // try the next source
    }
  }
  return 0;
}

export function useClockOffset(): number {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    let alive = true;
    syncClock().then((o) => {
      if (alive) setOffset(o);
    });
    return () => {
      alive = false;
    };
  }, []);
  return offset;
}