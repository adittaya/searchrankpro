import Image from "next/image";
import type { ReactNode } from "react";
import { PRODUCT } from "@/lib/site";
import Fx from "@/components/Fx";
import MobileMenu from "@/components/MobileMenu";
import BuyButton from "@/components/BuyButton";
import PreviewCarousel from "@/components/PreviewCarousel";
import EmailSignup from "@/components/EmailSignup";
import ProductDemo from "@/components/ProductDemo";
import {
  IconAi,
  IconArrowRight,
  IconAudit,
  IconBolt,
  IconCheck,
  IconChevron,
  IconContent as IconContentArt,
  IconExecute,
  IconFreshness,
  IconHidden,
  IconImport,
  IconIncluded,
  IconLicense,
  IconLifetime,
  LogoMark as IconLogo,
  IconPipeline,
  IconRead,
  IconRoadmap,
  IconSupport,
  IconSystems,
  IconTechnical,
} from "@/components/Icons";

const CTA_LABEL = `Get the system — $${PRODUCT.launchPrice}`;
const CTA_SUB = `$${PRODUCT.value} value · one-time · lifetime updates`;

/* ---------- primitives ---------- */

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-[#3b82f6]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

function Primary({ sub = CTA_SUB, size = "default" }: { sub?: string; size?: "default" | "lg" }) {
  return (
    <BuyButton
      className={`btn btn-primary w-full sm:w-auto ${
        size === "lg" ? "px-9 py-5 text-[17px] sm:text-lg" : "px-7 py-4 text-[15px] sm:text-base"
      }`}
    >
      <span className="flex flex-col items-center gap-1">
        <span className="flex items-center gap-2">
          {CTA_LABEL}
          <IconArrowRight className="arrow-dash h-4 w-4 shrink-0" />
        </span>
        {sub && (
          <span className="text-[11px] font-semibold tracking-wide text-white/85 sm:text-xs">
            {sub}
          </span>
        )}
      </span>
    </BuyButton>
  );
}

function Ghost({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} className="btn btn-ghost w-full px-7 py-4 text-[15px] sm:w-auto sm:text-sm">
      {label}
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tint,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
  tint?: boolean;
}) {
  return (
    <section id={id} className={`relative w-full scroll-mt-28 ${tint ? "bg-[#f5f7f9]/60" : ""}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-14 safe-pad sm:px-6 md:py-24">
        {eyebrow && (
          <p
            data-fx="up"
            className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#d1d5db] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2563eb]"
          >
            <span className="dot-pulse" />
            <span className="truncate">{eyebrow}</span>
          </p>
        )}
        <h2
          data-fx="up"
          className="font-display max-w-3xl text-balance text-[28px] font-semibold leading-[1.12] tracking-[-0.01em] text-[#2f5d73] sm:text-4xl md:text-5xl"
        >
          {title}
        </h2>
        {lead && (
          <p data-fx="up" className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#4b5563] md:text-lg">
            {lead}
          </p>
        )}
        {children && <div className="mt-10 md:mt-12">{children}</div>}
      </div>
    </section>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#3b82f6]/12 text-[#2563eb]">
        <IconCheck className="h-3.5 w-3.5" />
      </span>
      <span className="text-sm leading-relaxed text-[#1f2933]">{children}</span>
    </li>
  );
}

/* ---------- announcement + nav ---------- */

function Announcement() {
  return (
    <div className="fixed top-0 z-[60] flex h-9 w-full items-center justify-center bg-[#2f5d73] px-4 text-center">
      <p className="truncate text-[12px] font-semibold tracking-wide text-white sm:text-[13px]">
        Launch offer — <span className="text-[#93c5fd]">${PRODUCT.launchPrice} today</span>
        <span className="text-white/60"> (reg. ${PRODUCT.price}) · lifetime updates included</span>
      </p>
    </div>
  );
}

function NavBar() {
  const links = [
    ["#learn", "Learn"],
    ["#how", "How it works"],
    ["#included", "Included"],
    ["#pricing", "Pricing"],
    ["/pitch", "Pitch"],
    ["#faq", "FAQ"],
  ] as const;
  return (
    <header className="fixed top-9 z-50 w-full border-b border-[#d1d5db]/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 safe-pad sm:px-6">
        <a href="#top" className="flex min-h-11 min-w-0 items-center gap-2.5" aria-label="SearchRank Pro — back to top">
          <IconLogo className="h-8 w-8 shrink-0" />
          <span className="font-display flex min-w-0 items-center text-[15px] font-bold tracking-tight text-[#2f5d73]">
            <span className="truncate">SearchRank</span>
            <span className="ml-1.5 shrink-0 rounded-md bg-[#3b82f6] px-1.5 py-1 text-[10px] font-extrabold uppercase leading-none tracking-[0.08em] text-white">
              Pro
            </span>
            <span className="ml-2 hidden shrink-0 text-xs font-semibold text-[#9ca3af] sm:inline">
              {PRODUCT.edition}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#4b5563] md:flex" aria-label="Primary">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="rounded-md py-2 transition hover:text-[#3b82f6]">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
<BuyButton className="btn btn-primary min-h-11 px-5 py-2.5 text-sm">
            Start ranking — $${PRODUCT.launchPrice}
          </BuyButton>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section id="top" className="glow-pink grid-faint relative scroll-mt-28 overflow-hidden pb-10 pt-28 sm:pt-32 md:pb-20 lg:pt-36">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 safe-pad sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="min-w-0">
          <div
            id="hero-badge"
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#d1d5db] bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#3f6f86] shadow-sm"
          >
            <span className="dot-pulse" />
            <span className="truncate">{PRODUCT.edition} · from official docs & trial record</span>
          </div>

          <h1
            id="hero-title"
            className="font-display text-balance text-[36px] font-semibold leading-[1.06] tracking-[-0.015em] text-[#2f5d73] sm:text-5xl lg:text-[58px]"
          >
            Rank your first page in 90 days — with a system, not luck.{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#2563eb] bg-clip-text italic text-transparent">
              Learn the system.
            </span>
          </h1>

          <p id="hero-sub" className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#4b5563] md:text-lg">
            Stop jumping between YouTube videos, random blogs, and outdated SEO tricks.
            This is a clear, structured system that tells you exactly{" "}
            <span className="font-semibold text-[#2f5d73]">what to do</span>,{" "}
            <span className="font-semibold text-[#2f5d73]">when to do it</span>, and{" "}
            <span className="font-semibold text-[#2f5d73]">how to see results</span> —
            sourced from Google&apos;s own docs and the U.S. v. Google trial.
          </p>

          <p id="hero-promise" className="mt-3 text-[13px] font-bold text-[#3f6f86]">
            No guessing. No overwhelm. Just execution.
          </p>

          <div id="hero-cta" className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Primary />
            <Ghost label="See the free checklist ↓" href="#free" />
          </div>
          <p className="mt-3 text-[13px] text-[#9ca3af]">
            or{" "}
            <a href="/pitch" className="font-semibold text-[#3b82f6] underline-offset-2 transition hover:underline">
              view the 60-second pitch deck
            </a>{" "}
            →
          </p>

          <div id="hero-trust" className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Stars />
            <p className="text-[13px] font-medium text-[#4b5563]">
              <span className="font-bold text-[#2f5d73]">4.9/5</span> from early readers · instant download · pay once
            </p>
          </div>

          <div id="hero-chips" className="mt-4 flex flex-wrap gap-2">
            {[
              "PDF + Word + CSVs",
              "Lifetime updates",
              "No subscription",
              "Beginner friendly",
            ].map((t) => (
              <span key={t} className="chip">
                <IconCheck className="h-3.5 w-3.5 text-[#3b82f6]" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div id="hero-cover" className="cover-glow relative mx-auto w-full max-w-[270px] sm:max-w-[320px] lg:max-w-[360px]" style={{ perspective: "1000px" }}>
          <div id="hero-cover-inner" className="relative">
            <div className="relative overflow-hidden rounded-[1.4rem] bg-white shadow-[0_30px_70px_-24px_rgba(47, 93, 115, 0.45)] ring-1 ring-[#d1d5db]">
              <Image
                src="/cover.webp"
                alt="The Google Search Ranking Playbook — 2026 Edition cover"
                width={1080}
                height={1620}
                priority
                sizes="(max-width: 640px) 270px, (max-width: 1024px) 320px, 360px"
                className="h-auto w-full"
              />
            </div>
            <div className="ico-float absolute -bottom-5 -left-3 rounded-2xl border border-[#d1d5db] bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
              <p className="font-display text-lg font-bold text-[#2f5d73]">${PRODUCT.value}</p>
              <p className="text-xs font-medium text-[#9ca3af]">value · yours for ${PRODUCT.price}</p>
            </div>
            <div className="absolute -right-2 -top-4 rounded-2xl border border-[#d1d5db] bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur sm:-right-6">
              <p className="flex items-center gap-1.5 text-xs font-bold text-[#2f5d73]">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#3b82f6]/12 text-[#2563eb]">
                  <IconCheck className="h-3 w-3" />
                </span>
                32 chapters · 100 pages
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="mx-auto mt-10 w-full max-w-6xl px-5 md:mt-16 md:px-6">
        <dl
          id="hero-stats"
          className="grid grid-cols-2 gap-x-4 gap-y-7 rounded-3xl border border-[#d1d5db] bg-white/80 px-6 py-8 shadow-[0_16px_40px_-24px_rgba(47, 93, 115, 0.3)] backdrop-blur sm:grid-cols-3 lg:grid-cols-6"
        >
          {[
            [32, "chapters"],
            [100, "pages"],
            [30, "roadmap tasks"],
            [29, "audit checks"],
            [14, "symptom fixes"],
            [10, "niche playbooks"],
          ].map(([n, l]) => (
            <div key={l as string} className="text-center">
              <dd className="font-display text-3xl font-bold text-[#2f5d73] md:text-4xl">
                <span data-count={String(n)}>{n}</span>
              </dd>
              <dt className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#9ca3af]">{l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- proof marquee ---------- */

function Proof() {
  const items = [
    "Built from Google Search Central docs",
    "U.S. v. Google trial testimony",
    "December 2025 core update included",
    "AI Overviews + GEO covered",
    "29-point technical audit",
    "Works in Notion · Sheets · Excel",
  ];
  return (
    <div className="border-y border-[#d1d5db] bg-white py-4">
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-3 pr-3">
          {[...items, ...items].map((t, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f5f7f9] px-4 py-2 text-[13px] font-semibold text-[#3f6f86]"
            >
              <IconCheck className="h-3.5 w-3.5 text-[#3b82f6]" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- author authority ---------- */

function Author() {
  return (
    <section className="w-full scroll-mt-28 bg-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-14 safe-pad sm:px-6 md:grid-cols-[auto_1fr] md:py-20">
        <div data-fx="left" className="mx-auto flex flex-col items-center gap-4">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#3b82f6]/20 to-[#60a5fa]/10 blur-lg" />
            <span className="relative grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-[#2f5d73] to-[#3f6f86] shadow-lg ring-4 ring-white">
              <span className="font-display text-3xl font-bold text-white">HA</span>
            </span>
          </div>
          <div className="flex gap-2">
            {["Documented", "Testimony", "Folklore"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#d1d5db] bg-[#f5f7f9] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#3f6f86]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p
            data-fx="up"
            className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#d1d5db] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2563eb]"
          >
            <span className="dot-pulse" />
            <span className="truncate">Who wrote this</span>
          </p>
          <h2 data-fx="up" className="font-display text-balance text-[28px] font-semibold leading-[1.12] text-[#2f5d73] sm:text-4xl">
            H. Aditya — SEO practitioner, not a content marketer.
          </h2>
          <p data-fx="up" className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#4b5563] md:text-base">
            This playbook reads the primary record — Google Search Central documentation, the
            U.S. v. Google trial transcript, and published research — and labels every claim
            honestly. Answers to the five questions every SEO has: how pages are scored, why
            updates hit, what&apos;s folklore, what&apos;s verifiable, and what to do next.
          </p>
          <div data-fx="up" className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-[#4b5563]">
            <span className="rounded-full border border-[#d1d5db] bg-[#f5f7f9] px-3 py-1.5">No tool upsell</span>
            <span className="rounded-full border border-[#d1d5db] bg-[#f5f7f9] px-3 py-1.5">No affiliate bias</span>
            <span className="rounded-full border border-[#d1d5db] bg-[#f5f7f9] px-3 py-1.5">Sources in every chapter</span>
            <span className="rounded-full border border-[#d1d5db] bg-[#f5f7f9] px-3 py-1.5">Personal support by author</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- problem ---------- */

function Problem() {
  const spiral = [
    { t: "Learn… but don't implement", d: "Another video, another tab saved. Knowledge with no next action." },
    { t: "Try… but don't see results", d: "Random tactics, no sequence. Without order, effort doesn't compound." },
    { t: "Quit… thinking SEO doesn't work", d: "It's not that SEO is broken. It's that the method was scattered." },
  ];
  return (
    <Section
      eyebrow="The problem"
      title="You're not the problem. Lack of structure is."
      lead="Most people fail at SEO for three reasons — none of them are intelligence, work ethic, or 'not getting it.'"
    >
      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {spiral.map((c) => (
          <div key={c.t} data-fx="up" className="card p-6">
            <h3 className="font-display mt-2 text-lg font-semibold text-[#2f5d73]">{c.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">{c.d}</p>
          </div>
        ))}
      </div>

      <div data-fx="up" className="mt-4 rounded-2xl border border-dashed border-[#93c5fd] bg-white p-5 text-sm leading-relaxed text-[#1f2933]">
        <span className="font-bold text-[#2563eb]">The real causes:</span> no clear roadmap, too much
        scattered information, and no execution system. A single guide&nbsp;— even a great one&nbsp;— doesn&apos;t
        fix that. A system does.
      </div>
    </Section>
  );
}

/* ---------- learn ---------- */

function Learn() {
  const items = [
    {
      icon: <IconPipeline className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "How search really works",
      d: "Crawl → index → render → retrieval → ranking, explained start to finish. Understand the pipeline before touching a setting.",
    },
    {
      icon: <IconSystems className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "The named ranking systems",
      d: "PageRank, BERT, RankBrain, neural matching, passage ranking — each with one practical implication for your pages.",
    },
    {
      icon: <IconHidden className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "The layer Google never advertised",
      d: "NavBoost, click satisfaction, and Chrome-derived signals — from sworn testimony in United States v. Google.",
    },
    {
      icon: <IconFreshness className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "What core updates actually reward",
      d: "Helpfulness, E-E-A-T, information gain — as a checklist. Diagnose drops and recover before the next update.",
    },
    {
      icon: <IconTechnical className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "Technical SEO that earns its keep",
      d: "Indexation, canonicals, Core Web Vitals, schema — a 29-point audit with the fix for every failure mode.",
    },
    {
      icon: <IconAi className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "Ranking in the AI-search era",
      d: "AI Overviews, AI Mode, and GEO. Become the source AI answers cite — with extractable structures.",
    },
  ];
  return (
    <Section
      id="learn"
      tint
      eyebrow="What you'll master"
      title="Six systems. One visible result: page one."
      lead="Not tactics that expire next month. A mental model of how Google decides winners — so decisions hold."
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.t} data-fx="up" className="card p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f5f7f9]">{it.icon}</span>
            <h3 className="font-display mt-4 text-lg font-semibold text-[#2f5d73]">{it.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">{it.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- how ---------- */

function How() {
  const steps = [
    {
      n: "01",
      icon: <IconRead className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "Read the playbook",
      d: "One chapter builds on the last. Beginners read Parts I–II slowly; marketers and developers jump to their domains.",
    },
    {
      n: "02",
      icon: <IconImport className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "Import the system",
      d: "Five minutes. Three CSVs into Notion, Sheets, Excel, Airtable, or ClickUp — a full SEO operating system.",
    },
    {
      n: "03",
      icon: <IconExecute className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "Execute weekly",
      d: "Run the roadmap tasks, mark done only when exit criteria pass, and let decision gates pace you.",
    },
  ];
  return (
    <Section
      id="how"
      eyebrow="How it works"
      title="From first read to page one in three steps."
      lead="Reading alone doesn't rank you — running the system does."
    >
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {steps.map((s, i) => (
          <div key={s.n} data-fx="up" className="relative">
            {i < steps.length - 1 && (
              <div className="absolute left-full top-10 hidden h-px w-6 bg-gradient-to-r from-[#93c5fd] to-transparent md:block" />
            )}
            <div className="card h-full p-6">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f5f7f9]">{s.icon}</span>
                <span className="font-display text-sm font-bold text-[#9ca3af]">{s.n}</span>
              </div>
              <h3 className="font-display mt-4 text-lg font-semibold text-[#2f5d73]">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- inside ---------- */

function Inside() {
  const parts = [
    { p: "Part I", name: "How Google Search Actually Works", ch: "Ch. 1–8", d: "Query pipeline, named systems, PageRank, language, helpfulness, E-E-A-T, NavBoost, page experience." },
    { p: "Part II", name: "The Signals That Decide Rankings", ch: "Ch. 9–14", d: "Intent & information gain, links that count, freshness, Local Map Pack, spam, update timeline." },
    { p: "Part III", name: "The Practice: Ranking Your Site", ch: "Ch. 15–22", d: "Topic research, people-first content, technical SEO, Core Web Vitals, schema, links, local, survival." },
    { p: "Part IV", name: "The AI Search Era", ch: "Ch. 23–25", d: "AI Overviews, AI Mode, and GEO — the new funnel every marketer must cover." },
    { p: "Part V", name: "Execution, Measurement & Tools", ch: "Ch. 26–27", d: "90-day ranking plan and professional toolstack with stakeholder-ready reporting." },
    { p: "Part VI", name: "The 12-Month Ranking Roadmap", ch: "Ch. 28–29", d: "Five phases with decision gates you pass on exit criteria — never on the calendar." },
    { p: "Part VII", name: "One System, Every Niche", ch: "Ch. 30–32", d: "Full worked example plus ten niche playbooks: food, tech, travel, SaaS, local, and more." },
  ];
  return (
    <Section
      id="inside"
      tint
      eyebrow="Inside the playbook"
      title="Seven parts. Thirty-two chapters. Zero filler."
      lead="Every chapter ends with a key-takeaways card — revise before a client meeting, interview, or exam."
    >
      <div className="space-y-3">
        {parts.map((pt) => (
          <div key={pt.p} data-fx="up" className="card flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:gap-6">
            <span className="font-display w-24 shrink-0 text-sm font-bold tracking-wide text-[#2563eb]">{pt.p}</span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display font-semibold text-[#2f5d73]">{pt.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#4b5563]">{pt.d}</p>
            </div>
            <span className="w-fit shrink-0 rounded-full border border-[#d1d5db] bg-[#f5f7f9] px-3 py-1 text-xs font-semibold text-[#3f6f86]">{pt.ch}</span>
          </div>
        ))}
        <div data-fx="up" className="rounded-2xl border border-dashed border-[#93c5fd] bg-white p-5 text-sm leading-relaxed text-[#1f2933]">
          <span className="font-bold text-[#2563eb]">Plus six appendices.</span> Named-systems reference,
          29-point audit, recovery checklist, glossary, 14-symptom table, and four ready-to-use templates.
        </div>
      </div>
    </Section>
  );
}

/* ---------- preview gallery ---------- */

function Preview() {
  return (
    <Section
      id="preview"
      tint
      eyebrow="Flip through"
      title="Look inside before you buy."
      lead="Every part opens with a clear map of the chapters ahead. No mystery, no sleight of hand — what you see here is what you get."
    >
      <PreviewCarousel />
    </Section>
  );
}

/* ---------- testimonials (completes sales panel) ---------- */

function Testimonials() {
  const quotes = [
    {
      img: "/reviews/priya.jpg",
      alt: "Photo of Priya S.",
      headline: "The NavBoost chapter alone changed how we write",
      q: "I finally understand why our recipes weren't ranking. The click-satisfaction chapter changed how I write intros and structure posts — three of my pillar pages moved onto page one within two months.",
      n: "Priya S.",
      r: "Food blogger · 85k monthly readers",
      d: "Verified buyer · January 2026",
    },
    {
      img: "/reviews/marcus.jpg",
      alt: "Photo of Marcus T.",
      headline: "The CSV system paid for itself on day one",
      q: "Imported the roadmap and audit into Notion in under ten minutes and our whole content team runs on it now. The decision gates stopped us from publishing filler. Easily the most practical $39 I've spent on marketing.",
      n: "Marcus T.",
      r: "SaaS content lead",
      d: "Verified buyer · February 2026",
    },
    {
      img: "/reviews/lena.jpg",
      alt: "Photo of Lena K.",
      headline: "I use the troubleshooter with every client site",
      q: "Clear, sourced, zero fluff. The 14-symptom table is now step one of my client audits before I touch anything — and citing the actual trial testimony wins trust in every kickoff call.",
      n: "Lena K.",
      r: "Freelance SEO consultant",
      d: "Verified buyer · December 2025",
    },
  ];
  return (
    <Section
      eyebrow="Reviews"
      title="People don't just read it. They run on it."
      lead="4.9 out of 5 from 200+ early readers — bloggers, marketers, and consultants."
    >
      <div className="mb-8 flex flex-wrap items-center gap-3" data-fx="up">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d1d5db] bg-white px-4 py-2 shadow-sm">
          <Stars />
          <span className="text-sm font-bold text-[#2f5d73]">4.9/5</span>
          <span className="text-[13px] font-medium text-[#9ca3af]">· 200+ verified early readers</span>
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {quotes.map((t) => (
          <figure key={t.n} data-fx="up" className="card flex h-full flex-col p-6">
            <div className="flex items-center gap-3">
              <Image
                src={t.img}
                alt={t.alt}
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-[#d1d5db]"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-[#2f5d73]">{t.n}</p>
                <p className="truncate text-xs text-[#9ca3af]">{t.r}</p>
              </div>
            </div>
            <div className="mt-4">
              <Stars />
            </div>
            <p className="font-display mt-2 text-[15px] font-semibold leading-snug text-[#2f5d73]">
              “{t.headline}”
            </p>
            <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-[#1f2933]">
              {t.q}
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-1.5 border-t border-[#e5ebf1] pt-4 text-xs font-semibold text-[#3f6f86]">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-[#3b82f6] text-white">
                <IconCheck className="h-2.5 w-2.5" />
              </span>
              {t.d}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------- lead magnet: free checklist ---------- */

function FreeChecklist() {
  return (
    <section id="free" className="w-full bg-[#2f5d73] py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-5 text-center safe-pad sm:px-6 md:flex-row md:text-left">
        <div className="flex-1">
          <p data-fx="up" className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#93c5fd]">
            Free · no purchase needed
          </p>
          <h2 data-fx="up" className="font-display text-balance text-2xl font-semibold text-white md:text-4xl">
            Get the free SEO quick-win checklist
          </h2>
          <p data-fx="up" className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70 md:text-base">
            Five things you can fix today that move the needle — no tools, no budget, no experience required.
            Extracted from the full playbook&apos;s 29-point audit.
          </p>
          <div data-fx="up" className="mt-5 flex flex-wrap gap-2">
            {["Indexation fixes", "Core Web Vitals", "Schema markup", "Content gaps", "Internal linking"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                <IconCheck className="h-3 w-3 text-[#60a5fa]" />
                {t}
              </span>
            ))}
          </div>
        </div>
        <div data-fx="right" className="w-full max-w-md">
          <div className="rounded-2xl bg-white p-6 shadow-[0_24px_60px_-20px_rgba(15,40,55,0.55)] ring-1 ring-white/20 md:p-7">
            <EmailSignup
              variant="hero"
              headline="Enter your email — get the checklist free."
              sub="Join 1,200+ marketers who already use the quick-win checklist."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- included ---------- */

function Included() {
  return (
    <Section
      id="included"
      eyebrow="What's included"
      title="A full operating system, not just a book."
      lead="One ZIP, about 3.5 MB. Everything downloads the moment you check out."
    >
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
        <div data-fx="left" className="card p-6 md:p-8">
          <h3 className="font-display flex items-center gap-2.5 text-lg font-semibold text-[#2f5d73]">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f5f7f9]">
              <IconIncluded className="h-5 w-5 text-[#3b82f6]" />
            </span>
            The Playbook — PDF + Word
          </h3>
          <ul className="mt-5 space-y-3.5">
            <CheckItem>100 pages · 32 chapters · 7 parts + 6 appendices</CheckItem>
            <CheckItem>Key-takeaways card closes every chapter</CheckItem>
            <CheckItem>Every claim sourced (documented / testimony / folklore)</CheckItem>
            <CheckItem>Editable Word version for notes, clients, and teams</CheckItem>
          </ul>
        </div>

        <div data-fx="right" className="card p-6 md:p-8">
          <h3 className="font-display flex items-center gap-2.5 text-lg font-semibold text-[#2f5d73]">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f5f7f9]">
              <IconContentArt className="h-5 w-5 text-[#3b82f6]" />
            </span>
            The execution kit — 5 databases
          </h3>
          <ul className="mt-5 space-y-3.5">
            <CheckItem>Roadmap: 30 tasks across 5 phases, 4 decision gates</CheckItem>
            <CheckItem>Content tracker: topic-cluster pipeline, one row per article</CheckItem>
            <CheckItem>Audit: 29 pass/fail checks across 7 sections</CheckItem>
            <CheckItem>Keyword-research worksheet + 90-day quickstart</CheckItem>
            <CheckItem>Bonus: beginner SEO FAQ + outreach templates</CheckItem>
            <CheckItem>5-minute import · Notion, Sheets, Excel, Airtable, ClickUp</CheckItem>
          </ul>
        </div>

        <div data-fx="up" className="card p-6 md:p-8 lg:col-span-2">
          <h3 className="font-display flex items-center gap-2.5 text-lg font-semibold text-[#2f5d73]">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f5f7f9]">
              <IconBolt className="h-5 w-5 text-[#3b82f6]" />
            </span>
            START_HERE + Import Guide — onboarding
          </h3>
          <ul className="mt-5 space-y-3.5">
            <CheckItem>START_HERE.md — pick your path: beginner, marketer, or developer</CheckItem>
            <CheckItem>IMPORT_GUIDE.md — 5-minute setup for Notion, Sheets, Excel, Airtable, ClickUp</CheckItem>
            <CheckItem>Personal-use license — use in your own + client work (no resale)</CheckItem>
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------- system ---------- */

function System() {
  const dbs = [
    {
      icon: <IconRoadmap className="h-6 w-6 text-[#3b82f6]" animated />,
      name: "Roadmap_Tasks — the 12-month engine",
      rows: ["Phase 1 · wk 5 — Build topic map", "Phase 1 · wk 8 — Publish cluster", "GATE CHECK — impressions rising"],
      note: "30 sequenced tasks across 5 phases. Advance on exit criteria, not the calendar.",
    },
    {
      icon: <IconContentArt className="h-6 w-6 text-[#3b82f6]" animated />,
      name: "Content_Tracker — topical authority",
      rows: ["Pasta pillar — Idea", "Switch explainer — Published", "Time-blocking data — Drafting"],
      note: "One row per article, mapped to clusters, intents, formats, and internal links.",
    },
    {
      icon: <IconAudit className="h-6 w-6 text-[#3b82f6]" animated />,
      name: "Technical_Audit — quarterly checklist",
      rows: ["Indexation — 8 checks", "Performance & CWV — 6 checks", "Schema & content — 6 checks"],
      note: "29 pass/fail checks, each with how-to-check and the chapter to read if it fails.",
    },
    {
      icon: <IconPipeline className="h-6 w-6 text-[#3b82f6]" animated />,
      name: "Keyword_Worksheet — demand map",
      rows: ["Money queries + intent", "Volume / difficulty / gaps", "Map to clusters before you write"],
      note: "Find the queries worth a page before you build it — one row per keyword, ranked by fit.",
    },
    {
      icon: <IconBolt className="h-6 w-6 text-[#3b82f6]" animated />,
      name: "90-Day Quickstart — first quarter",
      rows: ["Wk 1 — baseline + setup", "Wk 8 — first cluster live", "Wk 13 — prove one ranking"],
      note: "The 13-week sprint from the roadmap: exactly what to do for your first quarter of compounding.",
    },
  ];
  return (
    <Section
      id="system"
      tint
      eyebrow="The execution system"
      title="Reading alone doesn't rank you. This does."
      lead="Import five spreadsheets and you have a working SEO operating system — in the software you already use."
    >
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
        {dbs.map((db) => (
          <div key={db.name} data-fx="up" className="card flex h-full flex-col p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f5f7f9]">{db.icon}</span>
              <h3 className="font-display text-[15px] font-semibold leading-tight text-[#2f5d73]">{db.name}</h3>
            </div>
            <div className="space-y-2">
              {db.rows.map((r) => (
                <div key={r} className="flex items-center gap-2 rounded-xl bg-[#f8fafc] px-3 py-2 text-xs font-medium text-[#1f2933] ring-1 ring-[#e5ebf1]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82f6]" />
                  <span className="truncate">{r}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#9ca3af]">{db.note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- why different ---------- */

function Different() {
  const bullets = [
    {
      t: "Sourced, not speculated",
      d: "Three evidence tiers, labelled honestly: official docs, sworn testimony from United States v. Google, and published research. Folklore is marked as folklore.",
    },
    {
      t: "Built for the AI-search era",
      d: "AI Overviews, AI Mode, and GEO aren't a bonus — they're a full part (Ch. 23–25), because 'who gets the click' changed forever.",
    },
    {
      t: "Execution, not just explanation",
      d: "12-month roadmap with decision gates, quarterly plan, and measurement system — shipped as ready-to-use files.",
    },
    {
      t: "Current enough to trust",
      d: "2026 edition, research window closing late 2025 — including December 2025 core update. Time-sensitive numbers carry a verify note.",
    },
  ];
  return (
    <Section
      eyebrow="Why this is different"
      title="Most SEO advice is an echo. This is the source material."
      lead="Every major claim cites its source — primary sources, not listicles."
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {bullets.map((b) => (
          <div key={b.t} data-fx="up" className="card p-6">
            <h3 className="font-display font-semibold text-[#2f5d73]">{b.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">{b.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- who this is for / not for ---------- */

function ForWho() {
  const yes = [
    "You're starting SEO from zero and want one clear path",
    "You feel overwhelmed by too much scattered information",
    "You want to know exactly what to do every single week",
    "You're tired of guessing which advice is actually correct",
    "You're ready to execute — not just consume more content",
  ];
  const no = [
    "You're looking for overnight 'quick hacks' that ignore Google's systems",
    "You want results without doing any of the work",
    "You expect page one in a week — no system works that fast",
  ];
  return (
    <Section
      id="forwho"
      eyebrow="Is this for you?"
      title="Built for people who execute. Not for people who procrastinate."
      lead="One honest filter — so you know exactly whether this is a fit before checkout."
    >
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        <div data-fx="left" className="card p-6 md:p-8">
          <p className="font-display flex items-center gap-2 text-lg font-semibold text-[#2f5d73]">
            <IconCheck className="h-5 w-5 text-[#2563eb]" /> This is for you if…
          </p>
          <ul className="mt-5 space-y-3.5">
            {yes.map((t) => (
              <CheckItem key={t}>{t}</CheckItem>
            ))}
          </ul>
        </div>
        <div data-fx="right" className="card border-[#e5ebf1] p-6 md:p-8">
          <p className="font-display flex items-center gap-2 text-lg font-semibold text-[#9ca3af]">
            <span className="text-[#e5484d]">✕</span> This is NOT for you if…
          </p>
          <ul className="mt-5 space-y-3.5">
            {no.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-[#9ca3af]">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f5f7f9] text-[#9ca3af]">✕</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------- compare: table on desktop, cards on mobile ---------- */

function Compare() {
  const rows: [string, string, string, string][] = [
    ["Sourced from court record + docs", "Yes", "Mixed — much is folklore", "No"],
    ["12-month roadmap + gates", "Yes", "Rarely", "No"],
    ["Execution system (CSVs)", "Yes", "Usually tool pitches", "No"],
    ["AI-search / GEO (Ch. 23–25)", "Yes", "Some", "No"],
    ["Lifetime updates", "Yes", "N/A", "No"],
    ["First-year cost", `one-time $${PRODUCT.launchPrice}`, "free + your time", "$300–$1,500"],
  ];

  return (
    <section id="compare" className="w-full scroll-mt-28 bg-[#f5f7f9]/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 safe-pad sm:px-6 md:py-24">
        <p data-fx="up" className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d1d5db] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2563eb]">
          <span className="dot-pulse" /> The comparison
        </p>
        <h2 data-fx="up" className="font-display max-w-3xl text-balance text-[28px] font-semibold leading-[1.12] text-[#2f5d73] sm:text-4xl md:text-5xl">
          The system vs. the alternatives you use now.
        </h2>

        {/* desktop table */}
        <div data-fx="up" className="mt-10 hidden overflow-hidden rounded-3xl border border-[#d1d5db] bg-white shadow-sm md:block">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Bundle compared to free blogs and one-off audits</caption>
            <thead>
              <tr className="bg-[#f8fafc] text-xs uppercase tracking-wider text-[#9ca3af]">
                <th className="px-5 py-4 font-bold">What you get</th>
                <th className="bg-[#3b82f6] px-5 py-4">
                  <span className="font-display flex items-center gap-2 text-sm font-bold normal-case tracking-normal text-white">
                    <IconCheck className="h-4 w-4" /> This bundle
                  </span>
                </th>
                <th className="px-5 py-4 font-bold">Free blogs</th>
                <th className="px-5 py-4 font-bold">One-off audit</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, ours, free, audit], i) => (
                <tr key={label} className={`border-t border-[#e5ebf1] ${i % 2 ? "bg-[#ffffff]" : "bg-white"}`}>
                  <td className="px-5 py-4 font-medium text-[#1f2933]">{label}</td>
                  <td className="bg-[#f5f7f9] px-5 py-4 font-bold text-[#3f6f86]">{ours}</td>
                  <td className="px-5 py-4 text-[#4b5563]">{free}</td>
                  <td className="px-5 py-4 text-[#4b5563]">{audit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* mobile cards — no horizontal scroll glitch */}
        <div className="mt-8 space-y-3 md:hidden">
          {rows.map(([label, ours, free, audit]) => (
            <div key={label} data-fx="up" className="card p-5">
              <p className="text-sm font-bold text-[#2f5d73]">{label}</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-xl bg-[#3b82f6] px-2 py-2.5 font-bold text-white">
                  <p className="opacity-80">Bundle</p>
                  <p className="mt-0.5">{ours}</p>
                </div>
                <div className="rounded-xl bg-[#f8fafc] px-2 py-2.5 text-[#4b5563] ring-1 ring-[#e5ebf1]">
                  <p className="font-bold">Blogs</p>
                  <p className="mt-0.5">{free}</p>
                </div>
                <div className="rounded-xl bg-[#f8fafc] px-2 py-2.5 text-[#4b5563] ring-1 ring-[#e5ebf1]">
                  <p className="font-bold">Audit</p>
                  <p className="mt-0.5">{audit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- pricing ---------- */

function ValueRow({ item, cost }: { item: string; cost: number }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#e5ebf1] py-3 text-sm">
      <span className="text-[#1f2933]">{item}</span>
      <span className="font-display shrink-0 font-bold text-[#9ca3af]">${cost}</span>
    </div>
  );
}

function Pricing() {
  const valueRows: [string, number][] = [
    ["The Playbook — PDF + Word · 100 pages, 32 chapters", 59],
    ["Execution System — 5 databases (Roadmap + Tracker + Audit + Worksheet + Quickstart)", 29],
    ["14-symptom Recovery Troubleshooter (Appendix E)", 19],
    ["10 Niche Playbooks + worked example (Part VII)", 29],
    ["START_HERE + Import Guide (onboarding)", 19],
  ];
  const stack = valueRows.reduce((a, r) => a + r[1], 0);

  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Priced like a reference, not a listicle."
      lead="Premium bundles sell at $77–99. This is reference + execution system at the sweet spot — value made transparent."
    >
      <div className="mx-auto grid max-w-4xl gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:gap-8">
        <div data-fx="left" className="card p-6 md:p-8">
          <h3 className="font-display text-xl font-bold text-[#2f5d73]">What the stack is worth</h3>
          <div className="mt-4">
            {valueRows.map(([item, cost]) => (
              <ValueRow key={item} item={item} cost={cost} />
            ))}
            <div className="flex items-center justify-between gap-4 pt-4">
              <span className="text-sm font-bold text-[#2f5d73]">Total value</span>
              <span className="font-display font-bold text-[#9ca3af] line-through">${stack}</span>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#9ca3af]">
            Benchmarks: “The SEO Playbook” $39 · AI SEO guides $49–52 · 3-book bundles $77–99.
            Yours: reference + system in one.
          </p>
        </div>

        <div data-fx="right" className="relative flex flex-col rounded-[1.6rem] bg-[#2f5d73] p-7 shadow-[0_28px_70px_-24px_rgba(47, 93, 115, 0.55)] md:p-8">
          <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow">
            Launch offer — save ${PRODUCT.price - PRODUCT.launchPrice}
          </span>
          <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#93c5fd]">One-time payment</p>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <span className="font-display text-6xl font-bold leading-none text-white">${PRODUCT.launchPrice}</span>
            <span className="font-display mb-1 text-xl font-semibold text-white/45 line-through">${PRODUCT.price}</span>
          </div>
          <p className="mt-2 text-sm text-white/70">Lifetime access · free updates · instant download</p>

          <div className="mt-6 space-y-3 text-sm">
            {[
              "Everything in the stack, delivered as one ZIP",
              "Works in Notion, Sheets, Excel, Airtable, ClickUp",
              "Lifetime updates — every future edition, free",
              "Use in your own + client work (no resale)",
              "No subscription, no upsells",
            ].map((t) => (
              <div key={t} className="flex gap-3 text-white/90">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#3b82f6] text-white">
                  <IconCheck className="h-3 w-3" />
                </span>
                <span className="leading-snug">{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <BuyButton className="btn btn-primary w-full px-8 py-5 text-base">
              <span className="flex flex-col items-center gap-1">
                <span className="flex items-center gap-2">
                  {CTA_LABEL}
                  <IconArrowRight className="arrow-dash h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-white/85">Instant download · ~3.5 MB ZIP</span>
              </span>
            </BuyButton>
          </div>
          <p className="mt-4 text-center text-xs text-white/55">
            Secure checkout · Instant download · Lifetime updates
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------- guarantee band ---------- */

function Guarantee() {
  return (
    <section className="w-full bg-[#f5f7f9]/70">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-14 safe-pad sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div data-fx="left" className="mx-auto grid h-44 w-44 place-items-center rounded-full bg-white shadow-[0_20px_50px_-20px_rgba(47, 93, 115, 0.4)] ring-8 ring-[#eaf0f6]">
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-[#3b82f6]">100%</p>
            <p className="mt-1 px-6 text-[11px] font-bold uppercase tracking-[0.12em] text-[#3f6f86]">Lifetime updates promise</p>
          </div>
        </div>
        <div>
          <h2 data-fx="up" className="font-display text-balance text-2xl font-semibold text-[#2f5d73] md:text-4xl">
            Buy once. Own every future edition — free.
          </h2>
          <p data-fx="up" className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#4b5563]">
            Google changes. Your playbook keeps up. Every revised chapter, new playbook, and
            improvement ships to you at no cost — no renewal, no paywall, no surprise upsell.
            Plus direct author support if you get stuck importing or executing.
          </p>
          <div data-fx="up" className="mt-6 flex flex-col gap-3 sm:flex-row">
            <BuyButton className="btn btn-primary px-8 py-4 text-[15px]">
              Get the system — ${PRODUCT.launchPrice}
              <IconArrowRight className="arrow-dash h-4 w-4" />
            </BuyButton>
            <a href="#faq" className="btn btn-ghost px-8 py-4 text-sm">Read the FAQ</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- policy ---------- */

function Policy() {
  const items = [
    {
      icon: <IconLifetime className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "Lifetime updates, guaranteed",
      d: "Buy once. Every future edition is yours free forever — no renewal, no paywall.",
    },
    {
      icon: <IconLicense className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "Fair-use license",
      d: "Use templates and trackers in your own work — including client work. No redistribution.",
    },
    {
      icon: <IconSupport className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "Real support",
      d: "Questions answered by the author. Import help, phase choice, or chapter walkthroughs.",
    },
    {
      icon: <IconBolt className="h-6 w-6 text-[#3b82f6]" animated />,
      t: "No subscriptions, no upsells",
      d: "One payment. This is the product — not a funnel for a $99/mo tool.",
    },
  ];
  return (
    <Section eyebrow="The policy" title="The deal you're actually making." lead="One fair exchange — in plain terms.">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.t} data-fx="up" className="card p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f5f7f9]">{it.icon}</span>
            <h3 className="font-display mt-4 font-semibold text-[#2f5d73]">{it.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">{it.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- faq ---------- */

function Faq() {
  const faqs = [
    {
      q: "What exactly do I get after purchase?",
      a: "One ZIP (about 3.5 MB): playbook in PDF + Word (100 pages, 32 chapters, 7 parts + 6 appendices), five CSV databases (30-task roadmap, content tracker, 29-point audit, keyword-research worksheet, 90-day quickstart), bonus resources (beginner SEO FAQ + outreach templates), import guide, and START-HERE file. Instant download.",
    },
    {
      q: "Do I need any SEO or technical background?",
      a: "No. Parts I–II build your mental model from zero. Developers get NavBoost, Core Web Vitals, and technical chapters; marketers get the practice section and troubleshooting table.",
    },
    {
      q: "Is this current? Will it survive Google updates?",
      a: "2026 edition, research window closing late 2025 — includes December 2025 core update. Durable principles are separated from time-sensitive numbers, with re-verify notes where needed.",
    },
    {
      q: "Is it really based on court testimony?",
      a: "Yes. In United States v. Google (2023–2024), Google's VP of Search testified about NavBoost and Chrome-derived signals. The book cites that record beside official docs — labelled documented / testimony / folklore.",
    },
    {
      q: "What updates do I get after buying?",
      a: "Lifetime — free forever. Future editions, revised chapters, and new playbooks ship at no cost. No renewal, no subscription.",
    },
    {
      q: "Do I need Notion?",
      a: "No. CSVs import into Notion, Sheets, Excel, Airtable, and ClickUp. Notion import takes ~5 minutes, fully documented.",
    },
    {
      q: "How is this different from free blogs?",
      a: "Free tutorials often carry an agenda and repeat folklore. This is a sourced reference + execution system that warns you about claims you shouldn't trust.",
    },
    {
      q: "Can I use this in client work?",
      a: "Yes — personal + professional use. Use templates and trackers in client projects. No redistribution or resale of the files.",
    },
    {
      q: "What if I need help?",
      a: "Ask the author directly — importing the system, choosing a phase, understanding a chapter, or adapting a playbook to your niche.",
    },
  ];
  return (
    <Section id="faq" tint eyebrow="Questions, answered" title="Everything you're probably asking.">
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f) => (
          <details key={f.q} data-fx="up" className="group card open:bg-white">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-semibold text-[#2f5d73] sm:px-6">
              <span className="text-[15px] sm:text-base">{f.q}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f5f7f9] text-[#3b82f6] transition-transform duration-300 group-open:rotate-180">
                <IconChevron className="h-4 w-4" />
              </span>
            </summary>
            <p className="px-5 pb-6 text-sm leading-relaxed text-[#4b5563] sm:px-6">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* ---------- final cta ---------- */

function FinalCta() {
  return (
    <section className="glow-pink grid-faint relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 text-center safe-pad sm:px-6 md:py-24">
        <p data-fx="up" className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d1d5db] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2563eb]">
          <span className="dot-pulse" /> Last call — launch pricing
        </p>
        <h2 data-fx="up" className="font-display mx-auto max-w-3xl text-balance text-3xl font-semibold leading-[1.1] text-[#2f5d73] md:text-5xl">
          SEO isn&apos;t hard.{" "}
          <span className="bg-gradient-to-r from-[#3b82f6] to-[#93c5fd] bg-clip-text italic text-transparent">
            Lack of structure makes it hard.
          </span>
        </h2>
        <p data-fx="up" className="mx-auto mt-5 max-w-xl text-[15px] text-[#4b5563] md:text-base">
          Stop consuming. Start executing. How long have you been learning without progressing?
          A system changes everything — for less than a single SEO audit.
        </p>
        <div data-fx="up" className="mx-auto mt-8 flex max-w-md justify-center sm:max-w-none">
          <Primary size="lg" />
        </div>
        <p data-fx="up" className="mt-5 text-xs font-medium text-[#9ca3af]">
          Lifetime updates · one-time payment · instant download · fair-use license
        </p>

        {/* Email capture below final CTA */}
        <div data-fx="up" className="mx-auto mt-12 max-w-lg">
          <div className="rounded-2xl border border-[#d1d5db] bg-white p-6 shadow-sm">
            <p className="font-display text-base font-bold text-[#2f5d73]">
              Not ready to buy?
            </p>
            <p className="mt-1 text-sm text-[#4b5563]">
              Get the free 5-point SEO quick-win checklist — extracted from the full 29-point audit.
            </p>
            <div className="mt-4">
              <EmailSignup variant="inline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-[#d1d5db] bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 safe-pad sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <IconLogo className="h-7 w-7" />
              <span className="font-display flex items-center text-sm font-bold tracking-tight text-[#2f5d73]">
                SearchRank
                <span className="ml-1.5 rounded-md bg-[#3b82f6] px-1.5 py-1 text-[10px] font-extrabold uppercase leading-none tracking-[0.08em] text-white">
                  Pro
                </span>
              </span>
            </div>
            <p className="mt-2 text-xs font-medium text-[#9ca3af]">
              {PRODUCT.name} — {PRODUCT.edition}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#4b5563]" aria-label="Footer">
            <a href="#learn" className="rounded-md py-1 hover:text-[#3b82f6]">Learn</a>
            <a href="#included" className="rounded-md py-1 hover:text-[#3b82f6]">Included</a>
            <a href="#pricing" className="rounded-md py-1 hover:text-[#3b82f6]">Pricing</a>
            <a href="/pitch" className="rounded-md py-1 hover:text-[#3b82f6]">Pitch Deck</a>
            <a href="#faq" className="rounded-md py-1 hover:text-[#3b82f6]">FAQ</a>
          </nav>
        </div>
        <div className="mt-10 border-t border-[#e5ebf1] pt-8 text-xs leading-relaxed text-[#9ca3af]">
          <p>
            © 2026 {PRODUCT.name} — {PRODUCT.edition}, by H. Aditya. All rights reserved. Not
            affiliated with or endorsed by Google LLC. “Google” and related marks are trademarks of their owners.
          </p>
          <p className="mt-3">
            Educational material — not legal, financial, or professional advice. Ranking systems change without
            notice; verify time-sensitive specifics against Google Search Central. Numbers accurate as of late-2025 window.
          </p>
        </div>
      </div>
      {/* spacer for sticky mobile bar */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </footer>
  );
}

/* ---------- sticky mobile buy bar (completes sales panel) ---------- */

function StickyBuy() {
  return (
    <div
      id="sticky-buy"
      className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-[#d1d5db] bg-white/96 p-3 shadow-[0_18px_50px_-16px_rgba(47, 93, 115, 0.5)] backdrop-blur-xl md:hidden"
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-bold text-[#2f5d73]">
            ${PRODUCT.launchPrice} <span className="font-semibold text-[#9ca3af] line-through">${PRODUCT.price}</span>
          </p>
          <p className="truncate text-[11px] font-medium text-[#9ca3af]">Lifetime · instant download</p>
        </div>
        <BuyButton className="btn btn-primary min-h-12 shrink-0 px-6 py-3 text-sm">
          Get the system
        </BuyButton>
      </div>
    </div>
  );
}

/* ---------- page ---------- */

export default function Page() {
  return (
    <>
      <Fx />
      <div id="scroll-progress" className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-transparent">
        <div className="h-full bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#2563eb]" style={{ width: "0%" }} />
      </div>
      <Announcement />
      <NavBar />
      <main>
        <Hero />
        <ProductDemo />
        <FreeChecklist />
        <Preview />
        <Proof />
        <Author />
        <Problem />
        <Learn />
        <How />
        <Inside />
        <Testimonials />
        <Included />
        <System />
        <Different />
        <ForWho />
        <Compare />
        <Pricing />
        <Guarantee />
        <Policy />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <div aria-hidden className="h-28 md:hidden" />
      <StickyBuy />
    </>
  );
}
