import type { BookSection } from "@/components/book/types";
import type { BookPart } from "@/components/book/BookShell";
import { SECTIONS_FULL_INTRO } from "@/app/book/sections/full/intro";
import { SECTIONS_FULL_PART1 } from "@/app/book/sections/full/part1";
import { SECTIONS_FULL_PART2 } from "@/app/book/sections/full/part2";
import { SECTIONS_FULL_PART3 } from "@/app/book/sections/full/part3";
import { SECTIONS_FULL_PART4 } from "@/app/book/sections/full/part4";
import { SECTIONS_FULL_PART5 } from "@/app/book/sections/full/part5";
import { SECTIONS_FULL_PART6 } from "@/app/book/sections/full/part6";
import { SECTIONS_FULL_PART7 } from "@/app/book/sections/full/part7";
import { SECTIONS_FULL_APPX } from "@/app/book/sections/full/appendices";

/* The complete 2026 edition: Introduction, Parts I–VII, Appendices A–F. */
export const SECTIONS_FULL: BookSection[] = [
  ...SECTIONS_FULL_INTRO,
  ...SECTIONS_FULL_PART1,
  ...SECTIONS_FULL_PART2,
  ...SECTIONS_FULL_PART3,
  ...SECTIONS_FULL_PART4,
  ...SECTIONS_FULL_PART5,
  ...SECTIONS_FULL_PART6,
  ...SECTIONS_FULL_PART7,
  ...SECTIONS_FULL_APPX,
];

export const FULL_PARTS: BookPart[] = [
  {
    index: 0,
    label: "Introduction",
    title: "Introduction",
    subtitle: "Why this book exists and how to use it.",
  },
  {
    index: 1,
    label: "Part I — How Google Search Actually Works",
    title: "How Google Search Actually Works",
    subtitle:
      "Before you can rank, you need to know what you are ranking in. These eight chapters walk through how Google actually finds, understands, and scores pages — step by step, system by system.",
  },
  {
    index: 2,
    label: "Part II — The Signals That Decide Rankings",
    title: "The Signals That Decide Rankings",
    subtitle:
      "Now that you know the machine, meet the signals it reads: relevance, links, freshness, locality, the rules that get sites removed — and the update timeline that explains how we got here.",
  },
  {
    index: 3,
    label: "Part III — The Practice: Ranking Your Site",
    title: "The Practice: Ranking Your Site",
    subtitle:
      "The doing part. Research, writing, technical work, speed, links, local visibility, and what to do when an update hits your site — the chapters you will come back to every month.",
  },
  {
    index: 4,
    label: "Part IV — The AI Search Era",
    title: "The AI Search Era",
    subtitle:
      "Search now answers many questions before anyone clicks a link. These chapters cover AI Overviews, AI Mode, and how to become the source that AI answers cite.",
  },
  {
    index: 5,
    label: "Part V — Execution: Plans, Measurement, and Tools",
    title: "Execution: Plans, Measurement, and Tools",
    subtitle:
      "Everything you have learned, turned into a working plan and a measurement routine that tells you the truth.",
  },
  {
    index: 6,
    label: "Part VI — The 12-Month Ranking Roadmap",
    title: "The 12-Month Ranking Roadmap",
    subtitle:
      "Your year, mapped: five phases with clear milestones and simple pass-or-fail gates, from the first audit to rankings that can defend themselves.",
  },
  {
    index: 7,
    label: "Part VII — Niche Playbooks",
    title: "Niche Playbooks",
    subtitle:
      "The same system wears different clothes in every niche. Watch it applied end to end in a worked example, then pick up the ready-made playbook for yours.",
  },
  {
    index: 8,
    label: "Appendices",
    title: "Appendices",
    subtitle:
      "Quick-reference systems, audit and recovery checklists, the full glossary, a symptom-to-action troubleshooter, and ready-to-use templates.",
  },
];