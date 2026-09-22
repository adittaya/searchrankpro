"use client";

import { useEffect, useRef, useState } from "react";
import { LAUNCH_PRICE_ENDS } from "@/lib/site";
import { useClockOffset } from "@/lib/time-offset";

// ------------------------------------------------------------------
// Real-time countdown for the launch-price window.
//
//   - Deadline is absolute UTC (LAUNCH_PRICE_ENDS): every visitor sees
//     the same remaining time, regardless of timezone.
//   - Clock skew is corrected via useClockOffset (network time sync).
//   - SSR/hydration: first paint renders invisible fixed-width slots so
//     the chip never flashes a wrong "launch offer ended" state.
// ------------------------------------------------------------------

type Left = { d: number; h: number; m: number; s: number } | null;

const DEADLINE = new Date(LAUNCH_PRICE_ENDS).getTime();

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

export default function Countdown({ className = "" }: { className?: string }) {
  const offset = useClockOffset();
  const [mounted, setMounted] = useState(false);
  const [left, setLeft] = useState<Left>(null);
  const offsetRef = useRef(0);

  useEffect(() => {
    offsetRef.current = offset;
    setLeft(from(Date.now() + offset));
    setMounted(true);
    const id = setInterval(() => setLeft(from(Date.now() + offsetRef.current)), 1000);
    return () => clearInterval(id);
  }, [offset]);

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