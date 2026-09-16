"use client";

import { useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

/**
 * Fixed UI overlay for the pitch deck:
 * - Back-to-site link (top-left)
 * - Progress dots (right rail, clickable)
 * - Slide counter (bottom-right)
 * - Keyboard nav (arrows / space)
 * - IntersectionObserver triggers [data-reveal] animations per slide
 */
export default function PitchDeckNav({
  total,
  themes,
}: {
  total: number;
  themes: Theme[];
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-slide]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = Number(el.getAttribute("data-slide"));
            setCurrent(index);
            // stagger reveal children
            el.querySelectorAll("[data-reveal]").forEach((child, i) => {
              setTimeout(
                () => child.classList.add("is-visible"),
                120 + i * 90,
              );
            });
          }
        });
      },
      { threshold: 0.42 },
    );

    sections.forEach((s) => observer.observe(s));

    const onKey = (e: KeyboardEvent) => {
      const go = (dir: number) => {
        e.preventDefault();
        const target = Math.min(Math.max(current + dir, 0), total - 1);
        document
          .querySelector(`[data-slide="${target}"]`)
          ?.scrollIntoView({ behavior: "smooth" });
      };
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        go(1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        go(-1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, [current, total]);

  const goTo = useCallback((i: number) => {
    document
      .querySelector(`[data-slide="${i}"]`)
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const isDark = themes[current] === "dark";
  const textClass = isDark ? "text-white" : "text-[#2f5d73]";
  const mutedClass = isDark ? "text-white/50" : "text-[#9ca3af]";

  return (
    <>
      {/* Back to site */}
      <a
        href="/"
        className={`fixed left-4 top-4 z-50 flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70 sm:left-6 sm:top-6 ${textClass}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Back to site</span>
      </a>

      {/* Progress dots */}
      <div className="fixed right-3 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-2.5 sm:right-5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full border transition-all duration-300 ${
              i === current
                ? "scale-[1.6] border-[#3b82f6] bg-[#3b82f6]"
                : isDark
                  ? "border-white/30 bg-transparent hover:bg-white/20"
                  : "border-[#2f5d73]/25 bg-transparent hover:bg-[#2f5d73]/15"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        className={`fixed bottom-4 right-5 z-50 font-display text-sm font-bold tabular-nums ${textClass}`}
      >
        <span>{String(current + 1).padStart(2, "0")}</span>
        <span className={`mx-0.5 ${mutedClass}`}>/</span>
        <span className={mutedClass}>{String(total).padStart(2, "0")}</span>
      </div>
    </>
  );
}
