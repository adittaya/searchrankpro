import type { BookSection } from "@/components/book/types";
import { Kicker, H1, P, UL, LI, H2, H3, Tag, Takeaway, Quote, Step, IconCards, Checklist, Stats } from "@/components/book/Blocks";
import { Figure, Timeline, FlowChart, Compare, Illustrative, GaugeStat, BarChart } from "@/components/book/Visuals";

export const SECTIONS_PART6: BookSection[] = [
  {
    id: "p6-roadmap",
    part: "Part VI — The Action Plan",
    partIndex: 6,
    title: "The 12-month roadmap: 26 tasks, 4 gates",
    blurb: "A sequenced plan. Each task exists because the one before it made it possible.",
    minutes: 6,
    body: (
      <>
        <P>
          Most SEO plans are lists without order. This one is a dependency chain.
          Do things in sequence and momentum compounds.
        </P>

        <H3>Four gates, four seasons</H3>
        <Figure
          label="Fig. 5"
          caption="The full 26-task schedule ships as a CSV tracker with the playbook. Here is the shape of the year."
        >
          <Timeline
            phases={[
              {
                quarter: "Q1 · Months 1–3",
                title: "Foundation",
                tasks: ["Crawl audit", "Fix errors & redirects", "Map every page to a keyword"],
                metric: "metric: 100% errors gone",
              },
              {
                quarter: "Q2 · Months 4–6",
                title: "Build",
                tasks: ["Rewrite quick-win pages", "Publish long-tail guides", "Add schema"],
                metric: "metric: +3 positions",
              },
              {
                quarter: "Q3 · Months 7–9",
                title: "Expand",
                tasks: ["Topic clusters", "Refresh top pages", "PR & links"],
                metric: "metric: +40% impressions",
              },
              {
                quarter: "Q4 · Months 10–12",
                title: "Scale",
                tasks: ["Prune the weak", "Automate dashboard", "Document the SOP"],
                metric: "metric: traffic +50%",
              },
            ]}
          />
        </Figure>

        <H3>The rhythm that wins</H3>
        <IconCards
          items={[
            { icon: "calendar", title: "One page a week", desc: "Cadence beats dumping 40 pages at once." },
            { icon: "broom", title: "One prune a month", desc: "Weak pages drag the strong ones." },
            { icon: "refresh", title: "Refresh, don't rewrite", desc: "Update the winners keep their equity." },
            { icon: "chart", title: "Watch three numbers", desc: "Impressions, clicks, keywords ranked." },
          ]}
        />

        <Stats
          items={[
            { value: "30", label: "Tasks", sub: "in the CSV roadmap" },
            { value: "4", label: "Decision gates", sub: "audit → build → launch → scale" },
            { value: "12", label: "Months", sub: "one compounding year" },
            { value: "0", label: "Extra tools needed", sub: "Sheets + Search Console" },
          ]}
        />

        <Checklist
          items={[
            "Week 1: run the 29-point audit",
            "Week 2: fix the single worst blocker",
            "Month 1: build the keyword map",
            "Every Friday: 20 minutes on one task",
            "Review the gates at months 3, 6, 9",
          ]}
        />

        <Quote dark by="SearchRank Pro">
          The roadmap is not a suggestion — it's a dependency chain. Respect the
          sequence and the results become irreversible.
        </Quote>

        <Takeaway>
          You don't need a bigger plan — you need a sequenced one. Thirty small
          tasks in the right order outperform one hundred random ones.
        </Takeaway>
      </>
    ),
  },
];
