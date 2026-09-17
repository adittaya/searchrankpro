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
    title: "Indexation scan",
    time: "~10 minutes",
    what: "Search site:yoursite.com in Google. If pages are missing, they aren't in the index at all — no amount of on-page work will rank them.",
    fix: "Submit your sitemap in Google Search Console, confirm robots.txt isn't blocking anything, and make sure the sitemap is referenced in robots.txt.",
    win: "Every page that can be crawled can be ranked. This unblocks everything else.",
  },
  {
    n: "02",
    title: "One clear primary keyword per page",
    time: "~10 minutes/page",
    what: "A page that targets two intents targets none. Google can't tell which query the page should own.",
    fix: "Rewrite the H1 and title tag to match a single search intent. One page, one job. Fastest single-page ranking bump there is.",
    win: "A sharper defined page gets returned — and clicked — for the query you actually care about.",
  },
  {
    n: "03",
    title: "Internal links from your strongest pages",
    time: "~20 minutes",
    what: "Orphan pages get no link equity and Google treats them as an afterthought.",
    fix: "Add 3 links from pages that already get traffic, pointing to your orphan pages with descriptive anchor text.",
    win: "Cheapest authority transfer in SEO. Spreads equity to pages you need to rank.",
  },
  {
    n: "04",
    title: "Schema on your main template",
    time: "~15 minutes",
    what: "Rich results — and clearer understanding — need structured data.",
    fix: "Add one Article JSON-LD snippet with headline + publish date to your blog template. Applied once, it covers every post.",
    win: "No plugin needed. A single snippet upgrades the whole site's appearance in SERPs.",
  },
  {
    n: "05",
    title: "Mobile tap targets ≥48px",
    time: "~15 minutes",
    what: "Buttons smaller than 48px fail Core Web Vitals' interaction tests and tank mobile rankings.",
    fix: "Bump button min-height to 48px and set body font-size to at least 16px.",
    win: "Passes the interaction threshold Google measures — a small tweak, a real signal.",
  },
];

export default function FreeChecklistPage() {
  return (
    <main className="bg-white">
      <header className="bg-[#2f5d73] px-5 py-10 text-center text-white sm:py-14">
        <div className="mx-auto w-full max-w-3xl">
          <span className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#93c5fd]">
            Free checklist
          </span>
          <h1 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            The SEO Quick-Win Checklist
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[#d1d5db]">
            Five fixes you can run this week. Each takes under an hour, none require a
            plugin, and together they nudge any stale site toward page one.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#93c5fd]">
            <IconCheck className="h-3.5 w-3.5" /> From {SITE_NAME} — no paywall, no opt-in required to read
          </p>
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