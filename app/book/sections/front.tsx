import type { BookSection } from "@/components/book/types";
import {
  H1,
  P,
  H2,
  Tag,
  Takeaway,
  IconCards,
  Stats,
  Quote,
} from "@/components/book/Blocks";

export const SECTIONS_FRONT: BookSection[] = [
  {
    id: "start",
    part: "Open the book",
    partIndex: 0,
    title: "Start here — what you get & how to read this book",
    blurb:
      "Twelve visual chapters, seven parts, and the exact value stack you are buying. Read this first.",
    minutes: 3,
    body: (
      <>
        <P>
          This is a <strong>visual field edition</strong>. Every chapter is short.
          Every big idea gets its own diagram. No jargon is left unexplained — if a
          word appears, its meaning appears beside it.
        </P>

        <Takeaway>
          If you only read one diagram in this book, make it the pipeline in
          Chapter 2 — it explains 80% of why sites fail.
        </Takeaway>

        <H2>How to read this book</H2>

        <IconCards
          items={[
            {
              icon: "compass",
              title: "Parts, not chapters",
              desc: "Seven parts tell one story: how ranking works, then how to win it.",
            },
            {
              icon: "search",
              title: "Diagrams first",
              desc: "Every big idea has a picture. Read the picture, then the words.",
            },
            {
              icon: "check",
              title: "Sorted labels",
              desc: "Claims are tagged Documented, Testimony, or Folklore.",
            },
            {
              icon: "clock",
              title: "Timed chapters",
              desc: "Each chapter has a read time. Do one a day if you like.",
            },
          ]}
        />

        <H2>What you get — the value stack</H2>

        <Stats
          items={[
            { value: "$59", label: "Playbook PDF+Word", sub: "the full 32-chapter reference" },
            { value: "$29", label: "Roadmap CSV", sub: "30 tasks, 12 months" },
            { value: "$19", label: "Tracker CSV", sub: "editorial content tracker" },
            { value: "$29", label: "Audit CSV", sub: "29-point site audit" },
            { value: "$25", label: "Updates & support", sub: "lifetime, free forever" },
            { value: "$161", label: "Total value", sub: "launch price $39 \u00B7 reg $49" },
          ]}
        />

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Tag tone="rose">Documented</Tag>
          <Tag tone="ink">Testimony</Tag>
          <Tag tone="soft">Folklore</Tag>
        </div>

        <P>
          <strong>Documented</strong> claims are backed by published research or
          primary data. <strong>Testimony</strong> comes from named practitioners
          with verifiable results. <strong>Folklore</strong> is widely repeated
          industry belief that lacks controlled proof.
        </P>

        <Quote dark by="SearchRank Pro">
          A $39 book that has to justify itself is a book Google doesn&apos;t want
          you to read.
        </Quote>
      </>
    ),
  },
];
