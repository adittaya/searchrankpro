"use client";

import { useEffect, useState } from "react";
import { LAUNCH_PRICE_ENDS } from "@/lib/site";

// ------------------------------------------------------------------
// Client countdown chip for the launch-price window.
// Server-renders empty (no hydration mismatch); ticks once mounted.
// Reads the deadline from lib/site.ts -> LAUNCH_PRICE_ENDS.
// ------------------------------------------------------------------

type Left = { d: number; h: number; m: number; s: number } | null;

function left(): Left {
  const t = new Date(LAUNCH_PRICE_ENDS).getTime() - Date.now();
  if (t <= 0) return null;
  return {
    d: Math.floor(t / 86400000),
    h: Math.floor((t % 86400000) / 3600000),
    m: Math.floor((t % 3600000) / 60000),
    s: Math.floor((t % 60000) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ className = "" }: { className?: string }) {
  const [t, setT] = useState<Left>(null);

  useEffect(() => {
    setT(left());
    const id = setInterval(() => setT(left()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!t) return <span className={className}>launch offer ended</span>;

  return (
    <span className={`tabular-nums ${className}`}>
      {t.d}d {pad(t.h)}h {pad(t.m)}m {pad(t.s)}s
    </span>
  );
}