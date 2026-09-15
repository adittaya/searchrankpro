import type { BookSection } from "@/components/book/types";
import {
  Kicker,
  H1,
  P,
  UL,
  LI,
  H2,
  H3,
  Tag,
  Takeaway,
  Quote,
  Step,
  IconCards,
  Stats,
} from "@/components/book/Blocks";
import {
  Figure,
  DonutChart,
  BarChart,
  Compare,
  Illustrative,
  FlowChart,
  GaugeStat,
} from "@/components/book/Visuals";

export const SECTIONS_PART2: BookSection[] = [
  {
    id: "p2-signals",
    part: "Part II — Signals & Weight",
    partIndex: 2,
    title: "The signals: what moves a page (and roughly how much)",
    blurb:
      "Google blends hundreds of signals. Six families do almost all the work.",
    minutes: 5,
    body: (
      <>
        <P>
          Google never publishes weights. But testimony + public research let us
          estimate the six families, honestly labelled as ranges.
        </P>

        <Figure
          label="Fig. 2"
          caption="Illustrative influence ranges from testimony & research — Google publishes no official numbers."
        >
          <DonutChart
            data={[
              { label: "Topical relevance", value: 40 },
              { label: "Authority & E-E-A-T", value: 25 },
              { label: "Technical health", value: 13 },
              { label: "Links", value: 12 },
              { label: "Freshness", value: 7 },
              { label: "Click satisfaction", value: 3 },
            ]}
          />
        </Figure>

        <Illustrative />

        <H3>Read it like a pie</H3>
        <P>
          Relevance + authority = most of the plate. Technical and links are the
          seasoning: needed, but they win no dish alone.
        </P>

        <BarChart
          data={[
            { label: "Relevance & depth", value: 40 },
            { label: "Authority & E-E-A-T", value: 25 },
            { label: "Technical & CWV", value: 13 },
            { label: "Links & reputation", value: 12 },
            { label: "Freshness", value: 7 },
            { label: "Click feedback", value: 3 },
          ]}
        />

        <Takeaway>
          Fix relevance and authority first. Technical sprints and link building
          amplify a page that already answers the question.
        </Takeaway>
      </>
    ),
  },
  {
    id: "p2-intent",
    part: "Part II — Signals & Weight",
    partIndex: 2,
    title: "Match the intent, not just the keywords",
    blurb:
      "The same words can mean three different jobs. Rank for the job, not the phrase.",
    minutes: 4,
    body: (
      <>
        <P>
          When a person searches, they have a job in mind. Match the job and
          clicks feel easy.
        </P>

        <H3>The three (plus one) jobs</H3>

        <Step n={1} title="Learn something" metric="Informational">
          Guides, definitions, walkthroughs. Win with structure &amp; completeness.
        </Step>
        <Step n={2} title="Go somewhere" metric="Navigational">
          A known destination. Win by being the brand, or the recognised
          alternative.
        </Step>
        <Step n={3} title="Do something" metric="Transactional">
          Buy, sign up, compare. Win with clarity and a next button.
        </Step>
        <Step n={4} title="Learn, then do" metric="Mixed">
          A little education, then a path to act. Win with both parts.
        </Step>

        <Compare
          a={{
            title: "Match the intent",
            items: [
              "Page answers the exact job",
              "Clickers stay — long clicks",
              "Ranking compounds",
            ],
            tone: "good",
          }}
          b={{
            title: "Ignore it",
            items: [
              "Page answers a different job",
              "Clickers leave instantly",
              "Ranking decays",
            ],
            tone: "bad",
          }}
        />

        <Quote by="SearchRank Pro">
          A page that matches intent earns long clicks. Long clicks earn rank.
          Rank earns impressions. Impressions earn clicks. The loop feeds itself
          — in both directions.
        </Quote>

        <Takeaway>
          Before writing a page, write the user&apos;s job in one sentence. If
          the page can&apos;t say it, the searcher will click away.
        </Takeaway>
      </>
    ),
  },
];
