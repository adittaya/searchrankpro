import type { BookSection } from "@/components/book/types";
import { Kicker, H1, P, UL, LI, H2, H3, Tag, Takeaway, Quote, Step, IconCards, Stats } from "@/components/book/Blocks";
import { Figure, PipelineFlow, FlowChart, Compare, Illustrative, GaugeStat } from "@/components/book/Visuals";

export const SECTIONS_PART1: BookSection[] = [
  {
    id: "p1-trial",
    part: "Part I — The Real System",
    partIndex: 1,
    title: "The trial: what Google admitted under oath",
    blurb: "In a federal courtroom, Google finally described how it ranks pages. Here is what that changed.",
    minutes: 4,
    body: (
      <>
        <P>
          United States v. Google (2023–2024). For the first time, Google's own
          engineers described the ranking system under oath — including NavBoost,
          a system that uses Chrome click data as a ranking signal.
        </P>

        <Quote dark by="H. Aditya">
          Most SEO advice repeats folklore. The systems described in court are
          documentary evidence — the rarest, most reliable information there is.
        </Quote>

        <H3>Three source labels</H3>
        <IconCards
          items={[
            { icon: "doc", title: "Documented", desc: "Google's own docs & patents." },
            { icon: "scale", title: "Testimony", desc: "Said under oath in court." },
            { icon: "chat", title: "Folklore", desc: "SEO lore — often wrong." },
            { icon: "target", title: "Re-verify", desc: "Check when Google updates." },
          ]}
        />

        <H3>What was confirmed</H3>
        <UL>
          <LI>NavBoost uses click data to help rank results</LI>
          <LI>The system blends hundreds of signals, not one score</LI>
          <LI>Chrome is a data source Google uses every day</LI>
        </UL>

        <Takeaway>
          Ranking is a system of many signals, balanced live. Any guide that
          hands you “the one factor” is selling folklore.
        </Takeaway>

        <Stats
          items={[
            { value: "2", label: "of the Big Three signals", sub: "are user-behavior related" },
            { value: "2023", label: "antitrust trial opened", sub: "Washington D.C." },
            { value: "50k+", label: "pages of evidence", sub: "public record" },
            { value: "100%", label: "of claims labelled", sub: "documented / testimony / folklore" },
          ]}
        />

        <GaugeStat value="14" label="symptom checks" sub="triage table in Part VII" />
      </>
    ),
  },
  {
    id: "p1-pipeline",
    part: "Part I — The Real System",
    partIndex: 1,
    title: "The pipeline: how a page actually ranks",
    blurb: "Every result passes through three doors. Fail at any door and nothing else matters.",
    minutes: 5,
    body: (
      <>
        <P>
          Imagine your page as a package moving through three rooms. Each room can
          accept it, reject it, or reorder it.
        </P>

        <H3>Three doors, in order</H3>
        <Figure label="Fig. 1" caption="Your page must pass all three doors before anyone sees it.">
          <PipelineFlow
            stages={[
              {
                name: "Discover & crawl",
                desc: "Googlebot finds the URL — from links, sitemaps, or history. No link, no crawl, no chance.",
              },
              {
                name: "Render & index",
                desc: "JavaScript runs, content is read, and Google decides the page is worth storing. Crawled ≠ indexed.",
              },
              {
                name: "Retrieve & rank",
                desc: "A query pulls a candidate set, then signals sort it into final order.",
              },
            ]}
          />
        </Figure>

        <P>Every failure you will ever debug lives at one of these doors.</P>

        <H3>Where sites fail</H3>
        <FlowChart
          boxes={[
            { label: "Not discovered", desc: "orphan pages, weak sitemaps" },
            { label: "Discovered, not indexed", desc: "thin content or duplicate pages" },
            { label: "Indexed, not ranking", desc: "weak relevance or authority" },
          ]}
        />

        <Takeaway>
          Before you chase any ranking signal, confirm your page cleared all three
          doors. Most SEO problems live in door one or two.
        </Takeaway>

        <Quote dark by="SearchRank Pro">
          The difference between a crawled page and an indexed page is a book on a
          loading dock versus a book on the library shelf.
        </Quote>
      </>
    ),
  },
];