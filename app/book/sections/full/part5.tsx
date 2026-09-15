import type { BookSection } from "@/components/book/types";
import {
  H2, H3, P, DataTable, Checklist, Quote, PartSep,
} from "@/components/book/Blocks";

export const SECTIONS_FULL_PART5: BookSection[] = [
  {
    id: "ch26",
    part: "Part V — Execution: Plans, Measurement, and Tools",
    partIndex: 5,
    num: "26",
    title: "The 90-Day Ranking Plan",
    blurb:
      "Everything in the book compresses into one quarter of focused work: diagnosis and foundations, strategy, content and authority, then compounding — for one person or a small team at roughly ten focused hours per week.",
    minutes: 5,
    body: (
      <>
        <P>
          Everything in this book compresses into one quarter of focused work. This
          plan assumes one person or a small team, an existing site, and roughly
          ten focused hours per week. New sites should add the patience disclaimer
          up front: authority compounds over quarters, and months four through nine
          are typically where the compounding becomes visible.
        </P>

        <H2>Days 1-14: Diagnosis and foundations</H2>
        <P>
          Run the technical audit (Appendix B): indexation, canonicals, sitemap,
          orphans, speed, mobile rendering. Fix the mechanical failures first —
          they gate everything else.
        </P>
        <P>
          Verify Search Console and analytics are clean: tracking works, the
          profile excludes internal traffic, conversions are defined.
        </P>
        <P>
          Baseline the numbers: clicks and impressions by page and query, CWV
          scores, backlink count, top competitors for your money queries. This is
          your before picture; you will need it.
        </P>
        <P>
          Submit a clean sitemap and request indexing for your ten most important
          URLs.
        </P>

        <H2>Days 15-30: Strategy</H2>
        <P>
          Build the topic map (Chapter 15): three to five clusters where your
          entity has genuine standing, mapped to business value.
        </P>
        <P>
          Run the intent audit on your existing pages: keep, refresh, consolidate,
          or remove — and schedule the refreshes.
        </P>
        <P>
          Define the one editorial checklist your site will use (information gain,
          answer-first structure, authorship) so every future page is born
          compliant.
        </P>

        <H2>Days 31-60: Content and authority</H2>
        <P>
          Refresh the five highest-traffic decliners with updated facts, added
          experience evidence, answer-capsule structure, and FAQ sections.
        </P>
        <P>
          Publish the first cluster articles (two per week is a sustainable solo
          pace): one pillar and the long-tail questions around it, internally
          linked both directions.
        </P>
        <P>
          Launch the first link-earning asset: an original dataset, benchmark, or
          tool in your strongest topic — and run its distribution (communities,
          direct outreach, newsletters).
        </P>
        <P>
          Set the review cadence: weekly Search Console check, monthly ranking and
          AI-citation sampling.
        </P>

        <H2>Days 61-90: Compounding</H2>
        <P>
          Consolidate overlaps created in the first two months; prune anything with
          no path to being the best answer.
        </P>
        <P>
          Second link-earning asset, or the second distribution wave of the first
          one.
        </P>
        <P>
          Local businesses: the profile programme of Chapter 21 running weekly
          (posts, review responses, photos).
        </P>
        <P>
          Report honestly against the day-1 baseline: rankings, clicks,
          impressions, brand search, citations — and set the next quarter's three
          priorities from what moved.
        </P>

        <Quote dark>
          The one-rule version: If you remember nothing else from ninety days: fix
          the machines' reasons to ignore you, become the best honest answer in a
          small set of topics, make that answer extractable, and tell the people
          who cite things why it deserves citing. Everything else in this book is
          elaboration.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Days 1-14: technical foundations and an honest baseline.",
            "Days 15-30: topic strategy and the intent audit of existing pages.",
            "Days 31-60: refreshes, cluster publishing, and the first linkable asset with distribution.",
            "Days 61-90: consolidation, the second asset, and an honest before/after report.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch27",
    part: "Part V — Execution: Plans, Measurement, and Tools",
    partIndex: 5,
    num: "27",
    title: "Measurement and the Professional Toolstack",
    blurb:
      "Search Console is the non-negotiable free core; a small paid tier extends it. The reporting rhythm that earns stakeholder trust is weekly health checks, monthly one-page trend reports, and quarterly strategy reviews — with honest, indirect attribution.",
    minutes: 5,
    body: (
      <>
        <P>
          You cannot manage what you refuse to measure, and SEO attracts both
          over-measurement (fifty dashboards, no decisions) and under-measurement
          (rank checks only, ever). This is the professional minimum.
        </P>

        <H2>The free core (all you truly need)</H2>
        <P>
          Google Search Console — the only source of Google's own data about your
          site: queries, impressions, clicks, average position, indexation state,
          CWV field data, manual actions, and the Generative AI performance report.
          If you install one thing, this is it.
        </P>
        <P>
          Google Analytics 4 (or a privacy-respecting alternative) — behaviour on
          site: engagement, conversions, and the paths search traffic actually
          takes.
        </P>
        <P>
          PageSpeed Insights + CrUX dashboard — field performance and the specific
          lab causes of failures.
        </P>
        <P>
          Google Trends and autocomplete — demand language and seasonality, free.
        </P>

        <H2>The paid extensions (when the free tier runs out)</H2>
        <P>
          A rank tracker of your money queries across locations — position data
          plus volatility context around updates.
        </P>
        <P>
          A link database subscription (Ahrefs, Semrush, Majestic, Moz) —
          competitor gaps, backlink audits, mention monitoring. Use authority
          scores as direction, never as Google's signal.
        </P>
        <P>
          A crawler (Screaming Frog or a cloud equivalent) — your own site's full
          technical X-ray, weekly on large sites.
        </P>
        <P>
          Log-file analysis — what Googlebot actually fetches, for crawl-budget
          work at scale.
        </P>
        <P>
          An AI-citation tracker or a disciplined manual prompt panel — the trend
          line of your share of AI answers.
        </P>

        <H2>The reporting rhythm that earns stakeholder trust</H2>
        <P>
          Weekly: indexation and errors check in Search Console; anything broken
          gets a ticket, not a shrug. Monthly: one page — clicks and impressions
          versus the same month last year (updates make quarter-over-quarter
          noisy), top movers and decliners with one-line explanations, CWV status,
          links and mentions gained, and next month's three priorities. Quarterly:
          strategy review against the topic map — what to double down on, what to
          kill. This rhythm survives core updates because it reports trends and
          actions, not lottery numbers.
        </P>

        <H2>Attribution honesty</H2>
        <P>
          Search works indirectly: a reader sees your citation in an AI Overview,
          searches your brand two days later, subscribes a week after that.
          Last-click attribution will under-credit SEO forever; brand search
          trends, direct traffic cohorts, and assisted conversions close part of
          the gap. Report the assisted story or you will be defending the channel
          with one hand tied by your own dashboard's defaults.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Search Console is the non-negotiable core; everything else extends it.",
            "Weekly health checks, monthly one-page trend reports, quarterly strategy reviews.",
            "Authority scores are directional estimates, not Google signals.",
            "SEO earns indirect credit; report brand search and assisted conversions or under-claim your own work.",
          ]}
        />
      </>
    ),
  },
];