"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { BookSection } from "./types";
import { BookEndCard, PartSep } from "./Blocks";

export type BookMeta = {
  title: string;
  edition: string;
  subtitle: string;
  author: string;
  priceLine?: ReactNode;
  railTitle?: string;
  railEdition?: string;
  tocIntro?: string;
  tocNote?: ReactNode;
  railNote?: ReactNode;
  chips?: string[];
  backQuote?: string;
  backLine?: string;
};

export type BookPart = { index: number; label: string; title: string; subtitle: string };

const DEFAULT_PARTS: BookPart[] = [
  { index: 0, label: "Open the book", title: "Open the book", subtitle: "What you're holding, where it fits, and how to read it." },
  { index: 1, label: "Part I — The Real System", title: "The Real System", subtitle: "What Google's own engineers described under oath." },
  { index: 2, label: "Part II — Signals & Weight", title: "Signals & Weight", subtitle: "The six signal families and how much each moves a page." },
  { index: 3, label: "Part III — Content & Expertise", title: "Content & Expertise", subtitle: "Hubs, pillars, and the proof that earns trust." },
  { index: 4, label: "Part IV — Technical Health", title: "Technical Health", subtitle: "The plumbing that lets great content compete." },
  { index: 5, label: "Part V — Authority & Links", title: "Authority & Links", subtitle: "Routes that compound, and routes that are just trophies." },
  { index: 6, label: "Part VI — The Action Plan", title: "The Action Plan", subtitle: "A sequenced 12-month roadmap with decision gates." },
  { index: 7, label: "Part VII — Troubleshooting", title: "Troubleshooting", subtitle: "Triage every ranking symptom to its root door." },
];

const DEFAULT_CHIPS = ["56 pages", "32 chapters", "7 parts", "6 appendices", "30 tasks", "4 gates", "2026 edition"];

function TOCButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-[#f5c2d8] bg-white px-4 py-2 text-[13px] font-bold text-[#8f0a4a] shadow-sm transition hover:border-[#ec1478]"
      aria-label="Open contents"
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
        <path d="M2 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1z" />
      </svg>
      Contents
    </button>
  );
}

export default function BookShell({
  meta,
  sections,
  parts = DEFAULT_PARTS,
}: {
  meta: BookMeta;
  sections: BookSection[];
  parts?: BookPart[];
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);

  const ids = useMemo(() => sections.map((s) => s.id), [sections]);

  const partMap = useMemo(() => {
    const m: Record<number, BookPart> = {};
    for (const p of parts) m[p.index] = p;
    return m;
  }, [parts]);

  const partLabel = (pi: number) => partMap[pi]?.label ?? `Part ${pi}`;

  /* running heads in the PDF are emitted as one named @page per chapter,
     since Chromium margin boxes do not support string-set/string(). */
  const pageHeadCss = useMemo(() => {
    const box = (t: string) =>
      `@top-right { content: ${JSON.stringify(t)}; font-family: "Plus Jakarta Sans", system-ui, sans-serif; font-size: 6.5pt; font-weight: 600; letter-spacing: 0.03em; color: #967184; white-space: nowrap; }`;
    const chapters = sections
      .map((s, i) => {
        const label = s.num != null ? s.num : String(i + 1);
        const head = label !== "" ? `${label}. ${s.title}` : s.title;
        return `@page book-page-${i + 1} { ${box(head)} }`;
      })
      .join("\n");
    return `@media print { ${chapters} @page toc-page { ${box("Contents")} } }`;
  }, [sections]);

  /* top scroll progress */
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setProgress(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* scroll-spy */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const idx = (i: number) => {
    const s = sections[i];
    if (s) go(s.id);
  };

  const totalMin = sections.reduce((a, s) => a + s.minutes, 0);

  const partMeta = Object.fromEntries(
    parts.map((p) => [p.index, { title: p.title, subtitle: p.subtitle }])
  ) as Record<number, { title: string; subtitle: string }>;

  const toc = (
    <nav className="toc-rail" aria-label="Contents">
      <div className="mb-5 hidden items-center gap-3 md:flex">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#ff3d8d] to-[#df0e6b] text-[15px] font-bold text-white">
          SR
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-bold text-[#ffe3ef]">{meta.railTitle ?? meta.title}</p>
          <p className="text-[11px] text-[#f087b6]">{meta.railEdition ?? meta.edition}</p>
        </div>
      </div>
      <p className="mb-1 hidden text-[10px] font-bold uppercase tracking-[0.18em] text-[#f087b6] md:block">
        Contents
      </p>
      <ul className="space-y-0.5">
        {sections.map((s, i) => (
          <li key={s.id}>
            <button
              onClick={() => go(s.id)}
              className={`group flex w-full items-start gap-2 rounded-lg px-2.5 py-2 text-left transition ${
                active === s.id ? "bg-[#ec1478]/15 text-[#ffe3ef]" : "text-[#d7a9bd] hover:bg-white/5 hover:text-white"
              }`}
              aria-current={active === s.id ? "true" : undefined}
            >
              <span className="mt-px w-6 shrink-0 text-right text-[11px] font-bold text-[#f087b6]">
                {s.num != null ? (s.num !== "" ? s.num : "·") : i + 1}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[13px] font-semibold">{s.title}</span>
                <span className="block truncate text-[11px] text-[#f087b6]">{s.part}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 hidden rounded-xl border border-white/10 bg-white/5 p-3 md:block">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#ffe3ef]">
          Reading time
        </p>
        <p className="mt-1 text-2xl font-bold text-white">{Math.round(totalMin)}<span className="text-sm font-semibold text-[#f087b6]"> min</span></p>
        <p className="mt-1 text-[11px] text-[#d7a9bd]">
          {meta.railNote ?? `${sections.length} flagship chapters · full 32-chapter PDF included`}
        </p>
      </div>
    </nav>
  );

  /* print-only table of contents page (renders between cover and part I).
     Page numbers are injected at export time by scripts/export-book-pdf.mjs
     (two-pass: measure, set data-page, re-print). */
  const printToc = (
    <section id="contents" className="book-toc hidden rounded-none bg-white px-10 py-16 print:block" style={{ page: "toc-page" }}>
      <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#c00e62]">
        {meta.edition}
      </p>
      <h2 className="mt-3 font-display text-[40px] font-semibold tracking-tight text-[#2d0a1f]">
        Contents
      </h2>
      <p className="mt-2 max-w-[52ch] text-[13px] leading-relaxed text-[#6d4059]">
        {meta.tocIntro ??
          "Twelve visual chapters across seven parts — the system, the signals, and the sequence that puts them to work."}
      </p>

      <div className="mt-10 space-y-7">
        {parts.map((p) => {
          const group = sections.filter((s) => s.partIndex === p.index);
          if (group.length === 0) return null;
          return (
            <div key={p.index}>
              <p className="mb-2 flex items-baseline gap-3">
                <span className="text-[9.5px] font-bold uppercase tracking-[0.22em] text-[#c00e62]">
                  {partLabel(p.index)}
                </span>
                <span className="h-px flex-1 bg-[#f6c9dc]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#967184]">
                  {p.subtitle}
                </span>
              </p>
              <ul className="space-y-1.5">
                {group.map((s) => {
                  const global = sections.indexOf(s);
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="toc-row grid grid-cols-[2em_1fr_1.4em] items-baseline gap-1 text-[13px] text-[#2d0a1f] no-underline hover:text-[#ec1478]"
                      >
                        <span className="text-right font-bold text-[#ec1478]">{s.num != null ? (s.num !== "" ? s.num : "·") : global + 1}</span>
                        <span className="font-semibold">{s.title}</span>
                        <span
                          className="toc-dots text-right text-[13px] font-bold text-[#8f0a4a]"
                          data-page-for={s.id}
                          data-page=""
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="mt-12 border-t border-[#f6c9dc] pt-4 text-[11px] font-semibold text-[#967184]">
        {meta.tocNote ??
          `${sections.length} preview chapters · full 32-chapter playbook, 6 appendices & the 30-task roadmap are included in the paid edition.`}
      </p>
      <span id="toc-end" className="hidden text-[2px] leading-none text-white print:block" aria-hidden>
        TOC-END-MARKER
      </span>
    </section>
  );

  return (
    <div className="book-shell min-h-screen bg-[#fffafd]">
      <style dangerouslySetInnerHTML={{ __html: pageHeadCss }} />

      {/* progress bar */}
      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-[#ffe3ef]">
        <div
          className="h-full bg-gradient-to-r from-[#ff3d8d] to-[#df0e6b] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* mobile top bar */}
      <header className="book-header sticky top-0 z-50 flex items-center justify-between gap-3 border-b border-[#f6c9dc] bg-[#fffafd]/90 px-4 py-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#ff3d8d] to-[#df0e6b] text-[12px] font-bold text-white">
            SR
          </span>
          <p className="text-[13px] font-bold text-[#2d0a1f]">{meta.title}</p>
        </div>
        <TOCButton onClick={() => setOpen(true)} />
      </header>

      {/* desktop rail */}
      <aside className="book-rail fixed left-0 top-0 z-40 hidden h-dvh w-[300px] flex-col overflow-y-auto bg-[#200618] px-4 py-6 md:flex">
        {toc}
      </aside>

      {/* mobile drawer */}
      <div className={`fixed inset-0 z-[70] md:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div
          className={`absolute inset-0 bg-[#200618]/60 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-y-0 left-0 w-[85%] max-w-[320px] overflow-y-auto bg-[#200618] px-4 py-6 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog"
          aria-label="Contents"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-bold text-[#ffe3ef]">Contents</p>
            <button onClick={() => setOpen(false)} className="rounded-full bg-white/10 p-1.5 text-sm font-bold text-white" aria-label="Close">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden>
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>
          {toc}
        </div>
      </div>

      {/* content */}
      <main className="book-main relative z-10 px-4 pb-24 pt-6 sm:px-6 md:ml-[300px] md:px-10 md:pt-10 lg:pl-[320px]">
        <div className="mx-auto max-w-[760px]">
          {/* mini header for desktop */}
          <div className="mb-8 hidden items-center justify-between md:flex">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#c00e62]">
              {meta.edition}
            </p>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-[#f5c2d8] bg-white px-4 py-2 text-[13px] font-bold text-[#8f0a4a] transition hover:border-[#ec1478]"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                <path d="M6 2h8a1 1 0 0 1 1 1v2h1a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zm9 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM7 5h6V4H7v1zm0 7v3h6v-3H7z" />
              </svg>
              Save as PDF
            </button>
          </div>

          {/* cover */}
          <section id="cover" className="book-cover rounded-3xl bg-gradient-to-br from-[#fff1f6] via-[#ffe3ef] to-[#ffd6e7] px-6 py-14 text-center shadow-[0_24px_70px_-30px_rgba(236,20,120,0.45)] sm:px-10 sm:py-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#c00e62]">
              {meta.edition}
            </p>
            <h1 className="mx-auto mt-4 max-w-[520px] text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[#2d0a1f] sm:text-6xl">
              {meta.title}
            </h1>
            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-[#6d4059] sm:text-[17px]">
              {meta.subtitle}
            </p>
            <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.18em] text-[#c00e62]">
              {meta.author}
            </p>
            {meta.priceLine && <div className="mt-6">{meta.priceLine}</div>}
            <div className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-2 text-[11.5px] font-semibold text-[#8f0a4a]">
              {(meta.chips ?? DEFAULT_CHIPS).map((t) => (
                <span key={t} className="rounded-full border border-[#f5c2d8] bg-white/70 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </section>

          {printToc}

          {/* chapters */}
          {sections.map((s, i) => {
            const isNewPart = i === 0 || s.partIndex !== sections[i - 1].partIndex;
            const pm = partMeta[s.partIndex];
            return (
              <article
                key={s.id}
                id={s.id}
                style={{ page: `book-page-${i + 1}` }}
                className={`book-chapter scroll-mt-24 border-t border-[#f6c9dc] py-12 md:scroll-mt-10 md:py-16 ${
                  isNewPart && i > 0 ? "chapter-part-first" : ""
                }`}
              >
                {isNewPart && i > 0 && pm && (
                  <PartSep partIndex={s.partIndex} title={pm.title} subtitle={pm.subtitle} />
                )}
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#ec1478] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white">
                    {s.part}
                  </span>
                  <span className="rounded-full bg-[#fff1f6] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#967184]">
                    {s.minutes} min read
                  </span>
                </div>
<h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-[#2d0a1f] sm:text-[34px]">
              {s.num != null && s.num !== "" && (
                <span className="mr-2 text-[#ec1478]">{s.num}.</span>
              )}
              {s.title}
            </h2>
                <p className="mt-2 max-w-[60ch] text-[15px] text-[#967184]">{s.blurb}</p>
                <div className="book-body mt-6">
                  {s.body}
                  <BookEndCard chapterNum={i + 1} total={sections.length} partName={s.part} />
                </div>

                <div className="book-nav mt-12 flex items-center justify-between gap-3 border-t border-[#f6c9dc] pt-6">
                  <button
                    onClick={() => idx(i - 1)}
                    disabled={i === 0}
                    className="rounded-full border border-[#f5c2d8] bg-white px-4 py-2 text-[13px] font-bold text-[#8f0a4a] transition enabled:hover:border-[#ec1478] disabled:opacity-40"
                  >
                    ← Previous
                  </button>
                  <p className="hidden text-[12px] font-semibold text-[#967184] sm:block">
                    {i + 1} / {sections.length}
                  </p>
                  <button
                    onClick={() => idx(i + 1)}
                    disabled={i === sections.length - 1}
                    className="rounded-full bg-gradient-to-r from-[#ff3d8d] to-[#df0e6b] px-5 py-2 text-[13px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(236,20,120,0.7)] transition enabled:hover:brightness-105 disabled:opacity-40"
                  >
                    Next →
                  </button>
                </div>
              </article>
            );
          })}

          {/* back cover */}
          <section className="book-back rounded-3xl bg-[#2d0a1f] px-6 py-14 text-center text-[#ffe3ef] sm:px-10">
            <p className="text-6xl leading-none text-[#ec1478]">“</p>
            <p className="mx-auto mt-2 max-w-[560px] text-balance font-display text-2xl font-medium leading-snug sm:text-3xl">
              {meta.backQuote ??
                "SEO is not a channel. It is a compounding asset — every page you fix, every link you earn, every metric you move, accumulates."}
            </p>
            <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.2em] text-[#f087b6]">
              {meta.backLine ?? "2026 Field Edition · searchrankpro.web.app · lifetime updates"}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}