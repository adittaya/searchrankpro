import type { BookSection } from "@/components/book/types";
import {
  H2, H3, P, DataTable, Checklist, Quote, PartSep,
} from "@/components/book/Blocks";

export const SECTIONS_FULL_PART4: BookSection[] = [
  {
    id: "ch23",
    part: "Part IV — The AI Search Era",
    partIndex: 4,
    num: "23",
    title: "AI Overviews and AI Mode: How Google Answers",
    blurb:
      "Google's 2025 I/O took AI answers global: AI Overviews spread to more than 200 countries and 40+ languages and roughly 1.5 billion monthly users, and AI Mode launched as a full conversational search experience. Whatever your position, AI answers are now the front door for a large share of queries.",
    minutes: 5,
    body: (
      <>
        <P>
          In May 2025, Google's I/O marked the tipping point of a decade of AI
          experiments: AI Overviews expanded from a US-only feature to more than
          200 countries and 40+ languages, reaching a reported 1.5 billion monthly
          users by mid-2025, and the conversational AI Mode launched as a full
          search experience, expanding to more than 40 countries that October.
          Whatever your position on AI answers, they are now the front door for a
          large share of queries.
        </P>

        <H2>How an AI Overview is built</H2>
        <P>
          Google's published architecture is retrieval-augmented generation (RAG):
          the system generates a set of related searches for the query — a process
          called query fan-out — retrieves candidate pages for each using the same
          core Search ranking systems that produce the ten blue links, then a model
          writes a synthesized answer grounded in what the retrieved pages actually
          say, with links to the sources. Two consequences follow. First, the
          candidate pool comes from Search's own ranking: pages that do not rank
          anywhere are rarely candidates. Second, the grounding layer means the
          answer's content comes from the cited pages — which makes being the cited
          source the entire game.
        </P>

        <H2>AI Mode: the conversational layer</H2>
        <P>
          AI Mode is the chat-native sibling: a persistent session with follow-up
          questions, multimodal input (images via Lens, video), and interactive
          elements. It is designed for the multi-step explorations that used to
          require six separate searches. For content strategy, AI Mode's existence
          strengthens the same assets that AI Overviews reward — clear structure,
          extractable answers, verifiable entities — because the same retrieved
          corpus feeds both.
        </P>

        <H2>The traffic reality, honestly</H2>
        <P>
          Numbers from 2025 are directional but consistent. SparkToro's zero-click
          research put roughly 58 percent of Google searches ending without any
          click on an external site. Pew Research's field study found clicks on
          results fell from about 15 percent to 8 percent when an AI summary was
          present. Position-1 results for queries showing an AI Overview lost a
          large share of clicks in several independent analyses. But the split is
          not uniform: informational queries — the kind an Overview answers in two
          paragraphs — compress hardest, while commercial and transactional queries
          (people who need to buy, book, or reach a destination) remain largely
          intact. And sites cited inside Overviews report meaningful branded search
          lift — searchers verifying the source.
        </P>

        <DataTable
          headers={["Query type", "AI Overview presence", "Click impact", "Strategy"]}
          rows={[
            ["Simple informational", "High", "Heavy compression", "Be the cited source; earn the verification visit"],
            ["Complex research", "Growing (AI Mode)", "Session restructured", "Cover the full fan-out; be the authority"],
            ["Commercial comparison", "Moderate", "Moderate", "Comparison tables, original testing, strong entity"],
            ["Transactional", "Lower", "Largely intact", "Full classic SEO: speed, schema, conversion"],
            ["Navigational", "Low", "None", "Own your brand terms"],
          ]}
        />

        <H2>What Google tells publishers to do</H2>
        <P>
          Google's own guidance for AI features is pointed: the fundamentals of SEO
          remain the foundation, because the features are rooted in core Search
          ranking. It names specific myths — “chunking” content into fragments,
          writing separate content for every fan-out query variation, llms.txt
          files, seeking inauthentic mentions — as ineffective or policy-violating.
          The company's position is that there is no separate “AI optimization” —
          only content that ranks, is structured honestly, and is worth citing. The
          next chapter is the practitioner's version of that statement.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "AI Overviews are RAG on top of core Search ranking — no ranking, no candidacy.",
            "Query fan-out means full topical coverage, not a page per variation (which is named spam).",
            "Informational clicks compress; transactional largely holds; cited sources gain branded verification traffic.",
            "Google's guidance: classic SEO plus honesty — no llms.txt, no chunking, no fake mentions.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch24",
    part: "Part IV — The AI Search Era",
    partIndex: 4,
    num: "24",
    title: "GEO: Becoming the Cited Source",
    blurb:
      "Generative engine optimization is the discipline of making your content the source AI answers retrieve, trust, and cite — with the strongest evidence for statistics, quotations, citations, answer-first structure, and open-web entity reputation.",
    minutes: 5,
    body: (
      <>
        <P>
          Generative engine optimization (GEO) is the discipline of making your
          content the source AI answers retrieve, trust, and cite. Google's
          official line is that GEO for its features is just SEO done well;
          independent research agrees in direction and disagrees on emphasis —
          there are measurable differences between what earns a ranking and what
          earns a citation, and the citation game has its own tactics. The strongest
          evidence base is the Princeton/AI2/IIT Delhi GEO paper (Aggarwal et al.),
          which tested optimization methods across ten thousand queries on live
          generative engines.
        </P>

        <H2>The three highest-evidence tactics</H2>
        <P>
          Statistics with sources. Adding relevant statistics to a passage lifted a
          source's visibility in generated answers by around 40 percent in the
          Princeton study — the single strongest intervention tested. Concrete,
          attributable numbers are what answers are made of.
        </P>
        <P>
          Quotations from named people. Quotable expert statements give a model
          something extractable with an owner; gains in the 30-40 percent range.
          This is the research-level reason to include expert voices, including
          your own.
        </P>
        <P>
          Citations to authoritative sources. Citing primary references yourself
          (the study, the standards body, the government dataset) produced similar
          gains. Models propagate trust chains; grounding your claims in verifiable
          sources makes you a safer source to cite.
        </P>

        <H2>The structure of citable content</H2>
        <P>
          Answer-first structure earns double duty here, with a specific refinement:
          under each question-shaped H2, open with a 40-80 word self-contained
          answer capsule — a passage the model can lift, unedited, into its
          response. Include an FAQ section of genuinely useful questions with the
          same capsule-per-answer discipline; independent analyses in 2025-26
          repeatedly found FAQ-structured content cited at multiples of non-FAQ
          content. Front-load the strongest facts — one analysis of citation
          placement found a large share of LLM citations trace to the opening third
          of source text. And keep every claim specific and attributable: “AI
          reduces operational costs” belongs to nobody; “queries of twelve or more
          words returned one click from 61,782 impressions” has an owner and a
          reason to be cited.
        </P>

        <H2>The entity layer</H2>
        <P>
          AI systems deciding whether to cite you draw on their model of who you
          are — the same entity consistency as E-E-A-T: Organization and Person
          schema with sameAs links, consistent facts across your site, LinkedIn,
          and the review platforms, and third-party coverage in your niche. The
          same 2025 analyses found brand mentions across the web correlating with
          AI visibility roughly three times more strongly than backlinks, and heavy
          bias toward earned, third-party editorial sources over brand-owned pages.
          Your site is a minority shareholder in your own AI reputation; the open
          web holds the rest, which is why digital PR (Chapter 20) is the
          escalation path.
        </P>

        <H2>Bot access and measurement</H2>
        <P>
          Keep content crawlable without login — retrieval precedes citation.
        </P>
        <P>
          Do not bother with llms.txt — Google says it ignores it; OpenAI and
          others never standardized it.
        </P>
        <P>
          Measure with the Generative AI performance report in Search Console
          (impressions and clicks from AI features) and by sampling real prompts
          monthly — citation data is noisy; read trends, not instances.
        </P>

        <Quote dark>
          The realistic GEO strategy: In order of leverage: rank well (the
          candidate pool), structure honestly (answer capsules, FAQ), be specific
          and sourced (statistics, quotes, citations), and build the entity across
          the open web (mentions, reviews, profiles). Nothing here is new machinery
          — it is the same reputation, expressed for machines that quote.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Statistics (+~40 percent), quotations, and citations are the highest-evidence citation tactics.",
            "Write 40-80 word self-contained answer capsules under question-shaped headings.",
            "Entity consistency and third-party mentions decide AI reputation more than your own site does.",
            "Measure with the Search Console Generative AI report plus monthly prompt sampling — trends, not instances.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch25",
    part: "Part IV — The AI Search Era",
    partIndex: 4,
    num: "25",
    title: "The Zero-Click Reality and the New Funnel",
    blurb:
      "Zero-click was already the norm before AI, and AI answers push it higher. The strategic response is a corrected funnel: citations as the new impression, brand search as the new high-intent click, destination queries still earning clicks, and owned channels as the hedge.",
    minutes: 5,
    body: (
      <>
        <P>
          Zero-click is not new — most searches ended without a click years before
          AI Overviews — but AI answers push the share up: roughly 58 percent of
          searches ended without an external click in 2025 by SparkToro's measure,
          and Pew's field experiment put session-ending-without-click at about a
          quarter of AI-summary searches. The strategic response is not despair; it
          is a corrected model of what search traffic is for.
        </P>

        <H2>The four jobs of a search presence in the AI era</H2>
        <P>
          The citation. Your brand and data named inside the answer — the new
          top-of-funnel impression, which drives branded search and verification
          visits even without a direct click.
        </P>
        <P>
          The destination click. The surviving direct clicks concentrate where
          users need a destination: transactions, bookings, tools, downloads, full
          detail. These queries still reward full classic SEO.
        </P>
        <P>
          The brand search. People who read an AI answer and search your name are
          the highest-intent visitors you will ever receive — make sure your brand
          SERP (site, profiles, reviews) is presentable.
        </P>
        <P>
          The subscription surface. Direct channels — newsletter, community, app —
          are the hedge every content business now maintains: owned audience value
          does not compress when Google's answer changes.
        </P>

        <H2>Rebalancing a content portfolio</H2>
        <P>
          Audit your content by funnel role. Pages that answer questions an AI
          Overview fully satisfies should be measured for citation and branded
          lift, not clicks alone. Pages serving destination needs — comparisons
          with your testing data, tools, pricing, booking flows — get the
          conversion-rate investment. The mistake of 2025 was abandoning
          informational content wholesale: it still earns the citations, the
          mentions, and the topical authority that carry the commercial pages.
        </P>

        <H2>The measurement stack for the new world</H2>
        <P>
          Search Console: classic performance plus the Generative AI report for
          AI-feature visibility.
        </P>
        <P>
          Brand search volume in tools and Search Console: the citation dividend
          shows up here.
        </P>
        <P>
          Referral analytics for AI platforms (ChatGPT, Perplexity, Gemini): small
          absolute numbers now, consistently high conversion quality in early
          reports.
        </P>
        <P>
          Prompt-level sampling: a monthly panel of your money queries across the
          assistants, tracked as a trend line.
        </P>
        <P>
          And the old discipline still: assisted conversions, revenue per landing
          page, and cohort retention — the things that prove search is an
          investment rather than a slot machine.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Zero-click rose with AI answers; the response is a corrected funnel, not retreat.",
            "Citations are the new impression; brand search is the new high-intent click.",
            "Destination queries keep their clicks — invest conversion work there.",
            "Owned channels are the hedge every content business now maintains.",
          ]}
        />
      </>
    ),
  },
];