"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { IconArrowRight } from "@/components/Icons";

type Slide = {
  src: string;
  alt: string;
  caption: string;
  tag: string;
};

const SLIDES: Slide[] = [
  { src: "/previews/slide-cover.jpg", alt: "Cover of The Google Search Ranking System — 2026 Edition", caption: "The 2026 Edition", tag: "Cover" },
  { src: "/previews/slide-cover-page.jpg", alt: "Playbook opening page", caption: "A complete, practical guide", tag: "Opening pages" },
  { src: "/previews/slide-toc.jpg", alt: "Table of contents, page 1", caption: "Thirty-two chapters, seven parts, six appendices", tag: "Contents" },
  { src: "/previews/slide-toc2.jpg", alt: "Table of contents, page 2", caption: "From how search works to niche playbooks", tag: "Contents" },
  { src: "/previews/slide-part1.jpg", alt: "Part I — How Google Search Actually Works", caption: "Crawl, index, render, retrieval, ranking — the pipeline in order", tag: "Part I" },
  { src: "/previews/slide-part2.jpg", alt: "Part II — The Signals That Decide Rankings", caption: "The signals Google reads: links, freshness, locality, and more", tag: "Part II" },
  { src: "/previews/slide-part3.jpg", alt: "Part III — The Practice: Ranking Your Site", caption: "Research, writing, technical work, speed, and links", tag: "Part III" },
  { src: "/previews/slide-part4.jpg", alt: "Part IV — The AI Search Era", caption: "AI Overviews, AI Mode, and being the source AI answers cite", tag: "Part IV" },
  { src: "/previews/slide-part5.jpg", alt: "Part V — Execution, Measurement, and Tools", caption: "A working plan and a measurement routine that tells the truth", tag: "Part V" },
  { src: "/previews/slide-part6.jpg", alt: "Part VI — The 12-Month Ranking Roadmap", caption: "Five phases, clear milestones, simple pass-or-fail gates", tag: "Part VI" },
  { src: "/previews/slide-part7.jpg", alt: "Part VII — One System, Every Niche", caption: "A worked example plus ten ready-made niche playbooks", tag: "Part VII" },
  { src: "/previews/slide-appendices.jpg", alt: "Appendices", caption: "Reference tables, audits, glossary, and sources", tag: "Appendices" },
];

const INTERVAL = 3000;

export default function PreviewCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    el.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  return (
    <div
      className="mx-auto w-full max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative">
        <div className="overflow-hidden rounded-[1.6rem] bg-white shadow-[0_30px_70px_-24px_rgba(47,93,115,0.35)] ring-1 ring-[#d1d5db] sm:w-[min(60vh,560px)]">
          <div ref={track} className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            {SLIDES.map((s, i) => (
              <div key={s.src} className="relative aspect-[900/1165] w-full shrink-0">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2f5d73]/85 via-[#2f5d73]/35 to-transparent p-5 pb-6 pt-16 sm:p-7 sm:pb-8 sm:pt-24">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#93c5fd] backdrop-blur">
                    {s.tag}
                  </span>
                  <p className="font-display mt-2 text-lg font-semibold leading-tight text-white sm:text-2xl">{s.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous preview"
          className="group absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#2f5d73] shadow-md ring-1 ring-[#d1d5db] backdrop-blur transition hover:bg-white hover:text-[#2563eb] sm:left-5"
        >
          <IconArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next preview"
          className="group absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#2f5d73] shadow-md ring-1 ring-[#d1d5db] backdrop-blur transition hover:bg-white hover:text-[#2563eb] sm:right-5"
        >
          <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to preview ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-[#3b82f6]" : "w-2 bg-[#d1d5db] hover:bg-[#93c5fd]"
            }`}
          />
        ))}
      </div>
      <p className="mt-3 text-center text-xs font-medium text-[#9ca3af]">
        {index + 1} of {SLIDES.length} — auto-advances every 3s
      </p>
    </div>
  );
}