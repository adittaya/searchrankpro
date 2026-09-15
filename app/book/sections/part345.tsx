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
  Checklist,
} from "@/components/book/Blocks";
import {
  Figure,
  HubSpoke,
  FeedbackLoop,
  BarChart,
  Compare,
  Illustrative,
  FlowChart,
  GaugeStat,
  DonutChart,
} from "@/components/book/Visuals";

export const SECTIONS_345: BookSection[] = [
  {
    id: "p3-content",
    part: "Part III — Content & Expertise",
    partIndex: 3,
    title: "Own a topic: hubs, pillars & E-E-A-T",
    blurb:
      "Google trusts depth and proof. One topic, many connected pages, real credibility.",
    minutes: 5,
    body: (
      <>
        <P>
          A keyword is a question. A topic is a shelf of books. Win topics, not
          keywords.
        </P>

        <H3>The hub-and-spoke model</H3>

        <Figure
          label="Fig. 3"
          caption="A pillar page answers the big question; cluster pages answer the small ones. They link to each other."
        >
          <HubSpoke
            center="Topic pillar"
            nodes={["Crawl", "Core Web Vitals", "Schema", "Indexing", "Canonicals", "Log files"]}
          />
        </Figure>

        <P>
          Every small page links back to the pillar. Every pillar links to its
          small pages. No page is an orphan.
        </P>

        <H3>E-E-A-T = proof you know the subject</H3>

        <IconCards
          items={[
            { icon: "pen", title: "Real bylines", desc: "A named author, not 'staff'." },
            { icon: "cap", title: "Credentials", desc: "Why should we trust them?" },
            { icon: "calendar", title: "Updated on time", desc: "Stale beats trust away." },
            { icon: "book", title: "Cited sources", desc: "Claims you can verify." },
          ]}
        />

        <FeedbackLoop
          steps={[
            { label: "Publish depth", desc: "1. Cover the topic properly" },
            { label: "Link it", desc: "2. Wire it into the pillar" },
            { label: "Prove it", desc: "3. Byline, credit, date" },
            { label: "Compounds", desc: "4. Repeated visits build trust" },
          ]}
        />

        <Takeaway>
          E-E-A-T is a design system, not a rumour. Build proof into every page
          and the topic owns itself.
        </Takeaway>
      </>
    ),
  },
  {
    id: "p5-links",
    part: "Part V — Authority & Links",
    partIndex: 5,
    title: "Links are routes, not trophies",
    blurb:
      "You control internal links completely. They compound. You can start this week.",
    minutes: 4,
    body: (
      <>
        <P>
          External links are earned slowly and you can't command them. Internal
          links are fully yours — and they compound.
        </P>

        <H3>Internal links do three jobs</H3>

        <UL>
          <LI>Discovery: Googlebot walks your links to find pages</LI>
          <LI>Authority flow: high pages share power with linked pages</LI>
          <LI>Context: the link's words describe the destination</LI>
        </UL>

        <Figure
          label="Fig. 4"
          caption="Illustrative compounding of internal-link authority over 24 months."
        >
          <BarChart
            data={[
              { label: "Months 1–6", value: 30, note: "baseline, hubs built" },
              { label: "Months 7–12", value: 55, note: "clusters expand" },
              { label: "Months 13–18", value: 85, note: "cross-links deepen" },
              { label: "Months 19–24", value: 120, note: "fully interconnected" },
            ]}
          />
        </Figure>

        <Compare
          a={{
            title: "Routes",
            items: [
              "Links inside paragraphs",
              "Anchor words describe topic",
              "Lead somewhere valuable",
              "Weak links pruned",
            ],
            tone: "good",
          }}
          b={{
            title: "Trophies",
            items: [
              "Links hidden in footers",
              "'click here' anchors",
              "Lead to dead ends",
              "Weak links ignored",
            ],
            tone: "bad",
          }}
        />

        <Checklist
          items={[
            "Money pages are 3 clicks from the homepage",
            "Every cluster page links to its pillar",
            "Anchors are descriptive, not generic",
            "At least one internal link per new page",
          ]}
        />

        <Quote dark by="SearchRank Pro">
          Build paths, not monuments. A footer link passes power. A contextual
          link in a real sentence passes power, purpose, and understanding.
        </Quote>
      </>
    ),
  },
];
