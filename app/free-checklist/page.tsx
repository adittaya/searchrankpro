import type { Metadata } from "next";
import Link from "next/link";
import BuyButton from "@/components/BuyButton";
import { IconCheck, IconArrowRight } from "@/components/Icons";
import { PRODUCT, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free SEO Quick-Win Checklist",
  description:
    "Five fixes you can run this week: indexation scan, one keyword per page, internal links, schema, and mobile tap targets. Free checklist from SearchRank Pro.",
  alternates: { canonical: "/free-checklist" },
  openGraph: {
    title: "Free SEO Quick-Win Checklist",
    description:
      "Five fixes you can run this week to nudge any site toward page one.",
    images: [{ url: "/cover-og.png", width: 1200, height: 1800, alt: PRODUCT.name }],
  },
};

const items = [
  {
    n: "01",
    title: "Check that Google can actually see you",
    time: "5 minutes",
    what: "If an important page says 'Crawled — currently not indexed' or 'Excluded by noindex tag', that page is invisible to search. No tactic will fix rankings until this does.",
    fix: "Open Search Console's Pages report, submit (or re-submit) your sitemap under Sitemaps, and request indexing for any fixed money page via URL Inspection.",
    win: "Indexation problems silently block everything else — this unblocks the rest.",
  },
  {
    n: "02",
    title: "Compress your three biggest images",
    time: "10 minutes",
    what: "Image weight is the most common cause of a failed Largest Contentful Paint — and fast pages are measurably more likely to be cited by AI Overviews.",
    fix: "Open your homepage and top pages on a phone, note the three largest images (usually heroes and banners), export them as WebP or quality-70 JPEG at real display size, and re-upload. Add loading='lazy' to every image below the first screen.",
    win: "A Core Web Vitals win from the biggest lever on the page.",
  },
  {
    n: "03",
    title: "Add basic structured data to your top 3 pages",
    time: "10 minutes",
    what: "Schema makes your page unambiguous to machines — including the AI features that quote and cite content.",
    fix: "Paste an Article JSON-LD snippet (headline + datePublished + dateModified + author) into the head of each key article, validate with Google's Rich Results Test, then submit for re-indexing.",
    win: "One small snippet per page turns machine ambiguity into a clear signal.",
  },
  {
    n: "04",
    title: "Mine your Search Console queries for content gaps",
    time: "15 minutes",
    what: "You're visible for these searches but not winning them — the cheapest rankings you will ever win are the ones Google already shows you for.",
    fix: "In Performance, filter queries where your average position is 8–30. For each: does your page genuinely answer that query, in the format the searcher wants? Where it does not, add a section that does — one page per gap, not a new thin page per keyword.",
    win: "Answers you already nearly have, finished off and ranked.",
  },
  {
    n: "05",
    title: "Point your strongest pages at your weakest important ones",
    time: "10 minutes",
    what: "Internal links are the one link source you fully control, and they tell Google which pages you consider important.",
    fix: "Note your 3 highest-traffic pages. From each, add one contextual link — descriptive anchor text, not 'click here' — to a page you want to rank that currently gets little traffic. Three to five such links, built naturally into sentences, is enough.",
    win: "Authority you already earned, redirected to the pages that need it.",
  },
];

export default function FreeChecklistPage() {
  return (
    <main className="bg-white">
      <header className="bg-[#2f5d73] px-5 py-10 text-center text-white sm:py-14">
        <div className="mx-auto w-full max-w-3xl">
          <span className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#93c5fd]">
            Free checklist — PDF included
          </span>
          <h1 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            The SEO Quick-Win Checklist
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[#d1d5db]">
            Five fixes you can run today. Each takes about 10 minutes, needs only free tools,
            and together they take about an hour.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/free-checklist.pdf"
              download="The_SEO_Quick_Win_Checklist.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2563eb]"
            >
              Download the PDF
            </a>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#93c5fd]">
              <IconCheck className="h-3.5 w-3.5" /> From {SITE_NAME} — no paywall, no opt-in required to read
            </span>
          </div>
        </div>
      </header>

      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-3xl">
          <ol className="space-y-5">
            {items.map((it) => (
              <li key={it.n} className="card p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#3b82f6] text-base font-bold text-white">
                    {it.n}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h2 className="font-display text-lg font-semibold text-[#2f5d73]">
                        {it.title}
                      </h2>
                      <span className="rounded-full border border-[#d1d5db] bg-[#f5f7f9] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#3f6f86]">
                        {it.time}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">
                      <span className="font-semibold text-[#2f5d73]">Why it matters:</span>{" "}
                      {it.what}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#1f2933]">
                      <span className="font-semibold text-[#2f5d73]">Do this:</span> {it.fix}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563eb]">
                      <IconCheck className="h-4 w-4" /> {it.win}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="rounded-2xl bg-[#eaf0f6] p-6 text-center sm:p-8">
            <h2 className="font-display text-2xl font-bold text-[#2f5d73]">
              Want the complete system?
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[#4b5563]">
              These five wins are the warm-up. The playbook walks through the full
              12-month ranking roadmap — how Google actually ranks, every signal it
              reads, and the exact order to work in.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BuyButton className="btn btn-primary px-8 py-3.5 text-[15px]">
                Get the system — ${PRODUCT.launchPrice}
              </BuyButton>
              <Link
                href="/#learn"
                className="btn btn-ghost px-6 py-3.5 text-sm"
              >
                What&apos;s inside <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-[#9ca3af]">
            <Link href="/" className="underline decoration-[#d1d5db] underline-offset-2 hover:text-[#3f6f86]">
              Back to {PRODUCT.name}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}