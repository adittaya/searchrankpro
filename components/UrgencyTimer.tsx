"use client";

import { useEffect, useState } from "react";
import { URGENCY_WINDOWS_MIN, URGENCY_RESET_ON_EXPIRE } from "@/lib/site";
import { useClockOffset } from "@/lib/time-offset";

// ------------------------------------------------------------------
// Per-visitor urgency timer ("you have 5 minutes left", etc).
//
// Each new session picks a random window from URGENCY_WINDOWS_MIN and
// counts it down in real time (MM:SS). The window is persisted in
// sessionStorage, so it survives page navigation but resets for a
// genuinely new visitor/tab. First paint renders invisible slots so the
// value never flashes wrong. Clock skew corrected via useClockOffset.
//
// When the window hits 00:00 and URGENCY_RESET_ON_EXPIRE is true, a
// fresh window starts (keeps the urgency on the page alive). Set it to
// false to instead freeze at 00:00 ("offer locked").
// ------------------------------------------------------------------

const KEY = "sr_urgency_end";

function freshEnd(nowMs: number): number {
  const mins = URGENCY_WINDOWS_MIN[Math.floor(Math.random() * URGENCY_WINDOWS_MIN.length)];
  return nowMs + mins * 60000;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function UrgencyTimer({ className = "" }: { className?: string }) {
  const offset = useClockOffset();
  const [mounted, setMounted] = useState(false);
  const [end, setEnd] = useState<number | null>(null);
  const [left, setLeft] = useState(0); // remaining seconds (corrected time)

  // Mount: restore the session window, or mint a fresh one.
  useEffect(() => {
    if (mounted) return;
    try {
      const raw = sessionStorage.getItem(KEY);
      const now = Date.now();
      if (raw) {
        const saved = parseInt(raw, 10);
        if (Number.isFinite(saved) && saved > now) {
          setEnd(saved);
        } else {
          const e = freshEnd(now);
          sessionStorage.setItem(KEY, String(e));
          setEnd(e);
        }
      } else {
        const e = freshEnd(now);
        sessionStorage.setItem(KEY, String(e));
        setEnd(e);
      }
    } catch {
      setEnd(Date.now() + 5 * 60000);
    }
    setMounted(true);
  }, [mounted]);

  // Tick every second with the clock-corrected "now".
  useEffect(() => {
    if (!mounted || end === null) return;
    const tick = () => {
      const remain = Math.max(0, Math.ceil((end - (Date.now() + offset)) / 1000));
      setLeft(remain);
      if (remain === 0 && URGENCY_RESET_ON_EXPIRE) {
        const e = freshEnd(Date.now() + offset);
        setEnd(e);
        try {
          sessionStorage.setItem(KEY, String(e));
        } catch {
          /* ignore */
        }
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [mounted, end, offset]);

  if (!mounted || end === null) {
    return (
      <span className={`tabular-nums opacity-0 ${className}`} aria-hidden="true">
        00:00
      </span>
    );
  }

  return (
    <span className={`tabular-nums ${className}`}>
      {pad(Math.floor(left / 60))}:{pad(left % 60)}
    </span>
  );
}