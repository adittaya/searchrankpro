import type { Metadata } from "next";
import type { ReactNode } from "react";
import BookShell, { type BookMeta } from "@/components/book/BookShell";
import { SECTIONS } from "./sections";
import { PRODUCT, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "The System Preview — Visual Field Edition | SearchRank Pro" },
  description:
    "A visual, interactive preview of The Google Search Ranking System — pipeline diagrams, signal-weight charts, hub-and-spoke content architecture, and a 12-month roadmap. Read it free.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "book",
    url: `${SITE_URL}/book`,
    title: "The Google Search Ranking System — Visual Field Edition",
    description:
      "Diagrams, charts, and a 12-month roadmap that make how Google ranks pages finally click.",
  },
};

const meta: BookMeta = {
  title: "The Google Search Ranking System",
  edition: "2026 Visual Field Edition · free preview",
  subtitle:
    "How Google actually ranks pages — the systems, the signals, and the 12-month strategy to earn your place. Read in 40 minutes, understand for years.",
  author: "SearchRank Pro · H. Aditya",
  priceLine: (
    <p className="text-[13px] font-bold text-[#8f0a4a]">
      Visual chapters · full 32-chapter PDF + tools included with the playbook — ${PRODUCT.launchPrice}
    </p>
  ),
};

export default function BookPage() {
  return <BookShell meta={meta} sections={SECTIONS} />;
}