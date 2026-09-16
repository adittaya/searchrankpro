import type { Metadata } from "next";
import BookShell, { type BookMeta } from "@/components/book/BookShell";
import { SECTIONS_FULL, FULL_PARTS } from "./sections";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "The Google Search Ranking Playbook — Full 2026 Edition" },
  description:
    "The complete 32-chapter Google Search ranking playbook — the systems, the signals, and the strategy to earn your place. All 7 parts plus 6 appendices.",
  robots: { index: false, follow: false },
};

const meta: BookMeta = {
  title: "The Google Search Ranking Playbook",
  edition: "2026 Edition",
  subtitle:
    "How Google decides who wins search — the systems, the signals, and the strategy to earn your place",
  author: "BY H. ADITYA",
  railTitle: "The Google Search Ranking Playbook",
  railEdition: "2026 Edition",
  tocIntro:
    "Thirty-two chapters across seven parts, plus a full reference appendix set — the system, the signals, and the sequence that puts them to work.",
  tocNote: (
    <>
      The complete 2026 edition — 32 chapters, 7 parts, 6 appendices, the
      90-day plan, the 12-month roadmap, and the niche playbook library.
    </>
  ),
  railNote: "The complete 2026 edition — all 32 chapters.",
  pages: "100 pages",
  chips: ["32 chapters", "7 parts", "6 appendices", "1 worked example", "10 niche playbooks", "2026 edition"],
  backQuote:
    "SEO is not a mirror you polish once. It is a compounding asset — every page you fix, every link you earn, every system you satisfy, accumulates.",
  backLine: "The Google Search Ranking Playbook · 2026 Edition · searchrankpro.web.app",
};

export default function FullBookPage() {
  return <BookShell meta={meta} sections={SECTIONS_FULL} parts={FULL_PARTS} />;
}