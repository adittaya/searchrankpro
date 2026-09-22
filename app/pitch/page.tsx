import type { Metadata } from "next";
import Image from "next/image";
import { PRODUCT, SITE_NAME } from "@/lib/site";
import BuyButton from "@/components/BuyButton";
import PitchDeckNav from "@/components/PitchDeckNav";
import { IconCheck, IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pitch Deck — The Google Search Ranking System",
  description:
    "Why most content never ranks — and the system that changes that. A 100-page playbook + 3-database execution system for Google's 2026 algorithm.",
  alternates: { canonical: "/pitch" },
  openGraph: {
    title: "Pitch Deck — The Google Search Ranking System",
    description:
      "Why most content never ranks — and the system that changes that.",
    images: [{ url: "/cover-og.png", width: 1200, height: 1800, alt: PRODUCT.name }],
  },
};

const CTA_LABEL = `Get instant access — $${PRODUCT.launchPrice}`;

const themes = ["dark", "light", "light", "dark", "light", "dark", "light", "light", "dark", "dark"] as const;

/* ---------- shared slide primitives ---------- */

function Eyebrow({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <span
      className={`inline-block rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] ${
        dark
          ? "border-white/20 bg-white/5 text-[#93c5fd]"
          : "border-[#d1d5db] bg-[#f5f7f9] text-[#3f6f86]"
      }`}
    >
      {children}
    </span>
  );
}

function CheckRow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
          dark ? "bg-[#3b82f6]" : "bg-[#3b82f6]"
        } text-white`}
      >
        <IconCheck className="h-3 w-3" />
      </span>
      <span className={`text-[15px] leading-snug ${dark ? "text-white/85" : "text-[#4b5563]"}`}>
        {children}
      </span>
    </div>
  );
}

function XRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f5f7f9] text-[#9ca3af]">
        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current" strokeWidth="3" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </span>
      <span className="text-[15px] leading-snug text-[#9ca3af]">{children}</span>
    </div>
  );
}

/* ---------- slides ---------- */

function SlideCover() {
  return (
    <section data-slide={0} className="pitch-slide bg-[#2f5d73] text-white">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <p data-reveal className="text-xs font-bold uppercase tracking-[0.18em] text-[#93c5fd]">
          {SITE_NAME} · 2026 Edition
        </p>
        <h1 data-reveal className="mt-5 font-display text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
          The Google Search
          <br />
          Ranking System
        </h1>
        <p data-reveal className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {PRODUCT.tagline}
        </p>
        <p data-reveal className="mt-8 text-sm text-white/50">
          by H. Aditya
        </p>
        <div data-reveal className="mt-12 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll to begin</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function SlideShift() {
  return (
    <section data-slide={1} className="pitch-slide bg-white">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div data-reveal>
          <Eyebrow>The Shift</Eyebrow>
        </div>
        <h2 data-reveal className="mt-5 font-display text-3xl font-bold leading-tight text-[#2f5d73] sm:text-5xl md:text-6xl">
          Google stopped rewarding content.
          <br />
          <span className="text-[#3b82f6]">It started rewarding systems.</span>
        </h2>
        <p data-reveal className="mt-6 max-w-2xl text-base leading-relaxed text-[#4b5563] sm:text-lg">
          The 2018 playbook — publish more, optimize titles, build backlinks — doesn&apos;t work
          anymore. Google&apos;s 2026 algorithm ranks based on:
        </p>
        <div data-reveal className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            "Genuine expertise and authority signals — not keyword density",
            "Topical coverage across clusters — not isolated pages",
            "Technical health across 200+ ranking factors — not just page speed",
            "AI overviews (SGE) that cite sources differently — not blue links",
          ].map((t) => (
            <CheckRow key={t}>{t}</CheckRow>
          ))}
        </div>
        <p data-reveal className="mt-8 text-[15px] font-semibold text-[#3f6f86]">
          If you&apos;re still playing the old playbook, you&apos;re already losing.
        </p>
      </div>
    </section>
  );
}

function SlideProblem() {
  const pains = [
    "You wrote 30 blog posts. 4 get traffic. The rest are invisible.",
    "You optimized for a keyword. Someone with fewer links outranks you.",
    "You got hit by a core update. You don\u2019t know why.",
    "You read SEO advice. Half of it contradicts the other half.",
    "Your CMS shows green checkmarks. Google still won\u2019t index half your pages.",
    "You hired a writer. The content is \u201cgood.\u201d It still doesn\u2019t rank.",
  ];
  return (
    <section data-slide={2} className="pitch-slide bg-[#f5f7f9]">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div data-reveal>
          <Eyebrow>The Problem</Eyebrow>
        </div>
        <h2 data-reveal className="mt-5 font-display text-3xl font-bold leading-tight text-[#2f5d73] sm:text-5xl md:text-6xl">
          You&rsquo;re publishing.
          <br />
          <span className="text-[#3b82f6]">You&rsquo;re not ranking.</span>
        </h2>
        <p data-reveal className="mt-5 text-base text-[#4b5563] sm:text-lg">
          Sound familiar?
        </p>
        <div data-reveal className="mt-6 grid gap-3 sm:grid-cols-2">
          {pains.map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-xl border border-[#d1d5db] bg-white p-4">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e5484d]" />
              <span className="text-[14px] leading-snug text-[#4b5563]">{t}</span>
            </div>
          ))}
        </div>
        <p data-reveal className="mt-7 text-[15px] font-bold text-[#2f5d73]">
          You&rsquo;re doing the work. The system just isn&rsquo;t built right.
        </p>
      </div>
    </section>
  );
}

function SlideCost() {
  return (
    <section data-slide={3} className="pitch-slide bg-[#2f5d73] text-white">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div data-reveal>
          <Eyebrow dark>The Cost</Eyebrow>
        </div>
        <h2 data-reveal className="mt-5 font-display text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Every week you wait,
          <br />
          <span className="text-[#60a5fa]">your competitors compound.</span>
        </h2>
        <p data-reveal className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Content without a system is a sunk cost.
        </p>
        <div data-reveal className="mt-7 space-y-4">
          {[
            "Every unpublished idea is a missed keyword opportunity.",
            "Every misaligned cluster pushes your topical authority down.",
            "Every month without a technical audit means slow pages, broken schema, and silent indexation bugs.",
            "Your competitors who systematized a year ago are now uncatchable.",
          ].map((t) => (
            <CheckRow key={t} dark>
              {t}
            </CheckRow>
          ))}
        </div>
        <p data-reveal className="mt-8 text-base font-bold text-[#93c5fd] sm:text-lg">
          The gap widens weekly. Close it now — or spend 3&times; catching up later.
        </p>
      </div>
    </section>
  );
}

function SlideCompare() {
  const oldWay = [
    "Publish individual posts",
    "Chase keywords",
    "React to core updates",
    "Read conflicting advice",
    "Optimize titles manually",
    "Hope for backlinks",
  ];
  const newWay = [
    "Build topical clusters",
    "Map search intent",
    "Run quarterly audits",
    "Follow a 30-task roadmap",
    "Fix 200+ ranking factors",
    "Earn authority through coverage",
  ];
  return (
    <section data-slide={4} className="pitch-slide bg-white">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div data-reveal>
          <Eyebrow>Old Way &rarr; New Way</Eyebrow>
        </div>
        <h2 data-reveal className="mt-5 font-display text-3xl font-bold leading-tight text-[#2f5d73] sm:text-4xl md:text-5xl">
          Two approaches. <span className="text-[#3b82f6]">One ranks.</span>
        </h2>
        <div data-reveal className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#d1d5db] bg-[#f5f7f9] p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#9ca3af]">Old Way &mdash; Guesswork</p>
            <div className="space-y-3">
              {oldWay.map((t) => (
                <XRow key={t}>{t}</XRow>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[#93c5fd] bg-white p-6 shadow-[0_14px_40px_-18px_rgba(59,130,246,0.35)]">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#3b82f6]">New Way &mdash; System</p>
            <div className="space-y-3">
              {newWay.map((t) => (
                <CheckRow key={t}>{t}</CheckRow>
              ))}
            </div>
          </div>
        </div>
        <p data-reveal className="mt-7 text-center text-[15px] font-bold text-[#2f5d73]">
          One costs you time. The other compounds it.
        </p>
      </div>
    </section>
  );
}

function SlideSolution() {
  return (
    <section data-slide={5} className="pitch-slide bg-[#2f5d73] text-white">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <div data-reveal>
            <Eyebrow dark>The Solution</Eyebrow>
          </div>
          <h2 data-reveal className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            This is
            <br />
            <span className="text-[#60a5fa]">the system.</span>
          </h2>
          <p data-reveal className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            A 100-page playbook + a 3-database execution system that turns
            &ldquo;doing SEO&rdquo; into running a system.
          </p>
          <div data-reveal className="mt-6 space-y-3">
            {[
              "Read the reference",
              "Import the databases",
              "Execute the 30-task roadmap",
              "Rank",
            ].map((t, i) => (
              <div key={t} className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#3b82f6] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-[15px] text-white/85">{t}</span>
              </div>
            ))}
          </div>
          <p data-reveal className="mt-7 text-sm text-white/50">
            One ZIP. About 3.5 MB. Yours forever.
          </p>
        </div>
        <div data-reveal className="relative mx-auto w-full max-w-sm">
          <div className="cover-glow relative aspect-[2/3] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/cover.webp"
              alt={PRODUCT.name}
              fill
              sizes="(max-width: 768px) 80vw, 400px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideInside() {
  return (
    <section data-slide={6} className="pitch-slide bg-[#f5f7f9]">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div data-reveal>
          <Eyebrow>What&apos;s Inside</Eyebrow>
        </div>
        <h2 data-reveal className="mt-5 font-display text-3xl font-bold leading-tight text-[#2f5d73] sm:text-4xl md:text-5xl">
          Three components. <span className="text-[#3b82f6]">One system.</span>
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div data-reveal className="card p-6">
            <h3 className="font-display text-lg font-bold text-[#2f5d73]">The Playbook</h3>
            <p className="text-xs font-semibold text-[#3b82f6]">PDF + Word</p>
            <ul className="mt-4 space-y-2.5">
              <li className="text-[14px] text-[#4b5563]">100 pages &middot; 32 chapters</li>
              <li className="text-[14px] text-[#4b5563]">7 parts + 6 appendices</li>
              <li className="text-[14px] text-[#4b5563]">Every claim sourced</li>
              <li className="text-[14px] text-[#4b5563]">Editable Word version</li>
            </ul>
          </div>
          <div data-reveal className="card p-6">
            <h3 className="font-display text-lg font-bold text-[#2f5d73]">Execution System</h3>
            <p className="text-xs font-semibold text-[#3b82f6]">5 databases</p>
            <ul className="mt-4 space-y-2.5">
              <li className="text-[14px] text-[#4b5563]">Roadmap: 30 tasks, 5 phases</li>
              <li className="text-[14px] text-[#4b5563]">Tracker: topical authority pipeline</li>
              <li className="text-[14px] text-[#4b5563]">Audit: 29 pass/fail checks</li>
              <li className="text-[14px] text-[#4b5563]">5-minute Notion import</li>
            </ul>
          </div>
          <div data-reveal className="card p-6">
            <h3 className="font-display text-lg font-bold text-[#2f5d73]">Niche Playbooks</h3>
            <p className="text-xs font-semibold text-[#3b82f6]">10 + Recovery</p>
            <ul className="mt-4 space-y-2.5">
              <li className="text-[14px] text-[#4b5563]">10 industry-specific playbooks</li>
              <li className="text-[14px] text-[#4b5563]">Full worked example</li>
              <li className="text-[14px] text-[#4b5563]">14-symptom troubleshooter</li>
              <li className="text-[14px] text-[#4b5563]">START_HERE + Import Guide</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideProof() {
  const stats = [
    { value: "100", label: "pages of strategy, not fluff" },
    { value: "32", label: "chapters with key-takeaway cards" },
    { value: "26", label: "sequenced tasks across 5 phases" },
    { value: "29", label: "technical audit checks" },
    { value: "10", label: "niche-specific playbooks" },
    { value: "6", label: "appendices with templates" },
  ];
  return (
    <section data-slide={7} className="pitch-slide bg-white">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div data-reveal>
          <Eyebrow>The Proof</Eyebrow>
        </div>
        <h2 data-reveal className="mt-5 font-display text-3xl font-bold leading-tight text-[#2f5d73] sm:text-4xl md:text-5xl">
          Built like a reference.
          <br />
          <span className="text-[#3b82f6]">Priced like a book.</span>
        </h2>
        <div data-reveal className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-[#d1d5db] bg-[#f5f7f9] p-5 text-center">
              <p className="font-display text-4xl font-bold text-[#3b82f6]">{s.value}</p>
              <p className="mt-1.5 text-[13px] leading-snug text-[#4b5563]">{s.label}</p>
            </div>
          ))}
        </div>
        <div data-reveal className="mt-7 rounded-xl border border-[#e5ebf1] bg-[#f5f7f9] p-5">
          <p className="text-[14px] leading-relaxed text-[#4b5563]">
            Every claim is sourced: <span className="font-semibold text-[#2f5d73]">Google documentation</span>,
            <span className="font-semibold text-[#2f5d73]"> testimony</span>, or
            <span className="font-semibold text-[#2f5d73]"> documented behavior</span>.
            No listicle filler. No recycled advice.
          </p>
          <p className="mt-3 text-[14px] font-semibold text-[#3f6f86]">
            By H. Aditya &mdash; SEO practitioner, not a content marketer.
          </p>
        </div>
      </div>
    </section>
  );
}

function SlidePricing() {
  const valueRows: [string, number][] = [
    ["The Playbook \u2014 PDF + Word \u00b7 100 pages", 59],
    ["Execution System \u2014 5 databases", 29],
    ["14-symptom Recovery Troubleshooter", 19],
    ["10 Niche Playbooks + worked example", 29],
    ["START_HERE + Import Guide", 19],
  ];
  const stack = valueRows.reduce((a, r) => a + r[1], 0);
  return (
    <section data-slide={8} className="pitch-slide bg-[#2f5d73] text-white">
      <div className="mx-auto w-full max-w-3xl px-6">
        <div data-reveal>
          <Eyebrow dark>Pricing</Eyebrow>
        </div>
        <h2 data-reveal className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          ${PRODUCT.value} of value.{" "}
          <span className="text-[#60a5fa]">${PRODUCT.launchPrice} at launch.</span>
        </h2>
        <div data-reveal className="mt-7 rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
          {valueRows.map(([item, cost]) => (
            <div
              key={item}
              className="flex items-center justify-between gap-4 border-b border-white/10 py-2.5 text-sm last:border-0"
            >
              <span className="text-white/85">{item}</span>
              <span className="font-display shrink-0 font-bold text-white/50">${cost}</span>
            </div>
          ))}
          <div className="mt-3 flex items-center justify-between gap-4 pt-2">
            <span className="text-sm font-bold text-white">Total value</span>
            <span className="font-display font-bold text-white/40 line-through">${stack}</span>
          </div>
        </div>
        <div data-reveal className="mt-6 flex flex-wrap items-end gap-3">
          <span className="font-display text-5xl font-bold leading-none text-white">${PRODUCT.launchPrice}</span>
          <span className="font-display mb-1 text-lg font-semibold text-white/40 line-through">${PRODUCT.price}</span>
          <span className="mb-1 text-sm text-white/60">one-time &middot; lifetime updates</span>
        </div>
        <div data-reveal className="mt-5">
          <BuyButton className="btn btn-primary px-8 py-5 text-base">
            <span className="flex items-center gap-2">
              {CTA_LABEL}
              <IconArrowRight className="arrow-dash h-4 w-4" />
            </span>
          </BuyButton>
        </div>
      </div>
    </section>
  );
}

function SlideClose() {
  return (
    <section data-slide={9} className="pitch-slide bg-[#2f5d73] text-white">
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <h2 data-reveal className="font-display text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
          Get the system.
          <br />
          <span className="text-[#60a5fa]">Start ranking.</span>
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          The Google Search Ranking System &mdash; 2026 Edition
          <br />
          by H. Aditya
        </p>
        <div data-reveal className="mt-8 flex flex-col items-center gap-3">
          <BuyButton className="btn btn-primary px-9 py-5 text-base sm:text-lg">
            <span className="flex flex-col items-center gap-1">
              <span className="flex items-center gap-2">
                {CTA_LABEL}
                <IconArrowRight className="arrow-dash h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-white/85">
                Instant download &middot; ~3.5 MB ZIP
              </span>
            </span>
          </BuyButton>
          <p className="mt-2 text-sm text-white/50">
            ${PRODUCT.value} value &middot; one-time &middot; lifetime updates
          </p>
        </div>
        <p data-reveal className="mt-10">
          <a href="/" className="text-sm text-white/40 transition hover:text-white/70">
            &larr; Back to full site
          </a>
        </p>
      </div>
    </section>
  );
}

/* ---------- page ---------- */

export default function PitchPage() {
  return (
    <>
      <PitchDeckNav total={10} themes={[...themes]} />
      <main className="pitch-deck">
        <SlideCover />
        <SlideShift />
        <SlideProblem />
        <SlideCost />
        <SlideCompare />
        <SlideSolution />
        <SlideInside />
        <SlideProof />
        <SlidePricing />
        <SlideClose />
      </main>
    </>
  );
}
