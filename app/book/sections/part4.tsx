import type { BookSection } from "@/components/book/types";
import { P, H3, Takeaway, Quote, Step, Checklist, DataTable } from "@/components/book/Blocks";
import { FlowChart } from "@/components/book/Visuals";

export const SECTIONS_PART4: BookSection[] = [
  {
    id: "p4-tech",
    part: "Part IV — Technical Health",
    partIndex: 4,
    title: "Technical health: the plumbing that lets content work",
    blurb: "Perfect content can't outrank a page Google can't read. Four pipes to keep clean.",
    minutes: 5,
    body: (
      <>
        <P>
          Think of your site as plumbing: you never notice it until it floods.
          Get the four pipes right and content gets its fair shot.
        </P>

        <H3>The four technical pipes</H3>
        <FlowChart
          boxes={[
            { label: "Rendering", desc: "JavaScript runs before pages are judged" },
            { label: "Indexing", desc: "Noindex/robots can block a good page" },
            { label: "Speed (Core Web Vitals)", desc: "LCP, INP, CLS — the load experience" },
            { label: "Canonicals", desc: "One clear version of every page" },
          ]}
        />

        <H3>Core Web Vitals at a glance</H3>
        <DataTable
          headers={["Metric", "What it measures", "Target"]}
          rows={[
            ["LCP", "how fast the main content appears", "under 2.5s"],
            ["INP", "how responsive the page feels", "under 200ms"],
            ["CLS", "how much layout jumps", "under 0.1"],
          ]}
        />

        <Checklist
          items={[
            "Most important pages are indexed",
            "No orphan pages on money topics",
            "One canonical per page, self-referencing",
            "No accidental noindex or robots blocks",
            "A structured sitemap is up to date",
          ]}
        />

        <Takeaway>
          Technical work removes friction. It never replaces relevance and
          authority — it gives them room to win.
        </Takeaway>
      </>
    ),
  },
  {
    id: "p7-troubleshoot",
    part: "Part VII — Troubleshooting",
    partIndex: 7,
    title: "Symptoms to fixes: a triage chart",
    blurb: "Traffic fell. Rankings wobbled. Start here, not with the panic button.",
    minutes: 4,
    body: (
      <>
        <P>
          SEO breaks slowly, then suddenly. The 14-symptom table in the full
          playbook maps every common failure. Here is the fastest-saving starter
          set.
        </P>

        <DataTable
          headers={["Symptom", "Check", "Fix"]}
          rows={[
            ["Gradual traffic dip", "Coverage report: indexed?", "Restore titles + internal links"],
            ["Cliff after a core update", "Update timeline match?", "Re-make page the best answer"],
            ["Pages not indexed", "URL inspection", "Fix noindex/canonical + request"],
            ["Volatile rankings", "7-day trends", "Match competitor depth"],
            ["Bounce spike", "Device segments", "Fix CLS or match intent"],
          ]}
        />

        <H3>Your first three moves</H3>
        <Step n={1} title="Look at the pipeline" metric="door 1">
          Was the page ever crawled and indexed? Confirm before touching
          content.
        </Step>
        <Step n={2} title="Check the intent" metric="door 3">
          Would a reader click and stay? Re-read your page as a stranger.
        </Step>
        <Step n={3} title="Compare the SERP" metric="fact">
          Who outranks you, and what did they do better?
        </Step>

        <Quote by="SearchRank Pro">
          The difference between recovery and collapse is not what went wrong —
          it's how fast you diagnosed it. Triage before strategy.
        </Quote>

        <Takeaway>
          Nearly every ranking problem maps to one of the three pipeline doors:
          reach, index, or relevance. Chase the door, not the symptom.
        </Takeaway>
      </>
    ),
  },
];
