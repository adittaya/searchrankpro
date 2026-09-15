import type { BookSection } from "@/components/book/types";
import { H2, H3, P, Quote, Checklist } from "@/components/book/Blocks";
import { DataTable } from "@/components/book/Blocks";

export const SECTIONS_FULL_PART6: BookSection[] = [
  {
    id: "ch28",
    part: "Part VI — The 12-Month Ranking Roadmap",
    partIndex: 6,
    num: "28",
    title: "The Roadmap at a Glance",
    blurb:
      "The year-long arc that turns motion into durable visibility — five phases, each with a defined focus, measurable exit criteria, and a decision gate.",
    minutes: 4,
    body: (
      <>
        <P>
          Everything before this part explains how Google ranks pages; the 90-day
          plan in Chapter 26 gets you moving. This part is the year-long arc that
          turns that motion into durable, defensible visibility. It is written the
          way a consultant would run an engagement: five phases, each with a defined
          focus, measurable exit criteria, and a decision gate that must be passed
          before the next phase earns its budget.
        </P>

        <P>
          The sequencing is not arbitrary. Technical foundations come first because
          they gate everything — content published on a broken site is invisible
          regardless of quality. Authority work comes second because links and entity
          signals take months to mature and cannot be rushed at the end. Compounding
          comes third because refresh programmes and internal-link optimization only
          pay once there is a critical mass of content to refresh and link. Defending
          comes last because resilience to core updates is only measurable once you
          have rankings worth defending.
        </P>

        <DataTable
          headers={[
            "PHASE 0 MONTH 0",
            "PHASE 1 MONTHS 1-3",
            "PHASE 2 MONTHS 4-6",
            "PHASE 3 MONTHS 7-9",
            "PHASE 4 MONTHS 10-12",
          ]}
          rows={[
            ["Audit &amp; Diagnose", "Foundations", "Authority", "Compounding", "Scale &amp; Defend"],
          ]}
        />

        <H2>The five phases in one table</H2>
        <DataTable
          headers={["Phase", "Months", "Focus", "Chapters", "You exit when"]}
          rows={[
            ["0 — Audit &amp; Diagnose", "0", "Technical audit, baseline metrics, competitive map", "17, 22, App. B", "Zero critical errors; baseline dashboards live"],
            ["1 — Foundations", "1-3", "Fixes, indexation, first topic cluster, CWV", "15, 17, 18", "Money pages indexed; CWV green; 8-12 pages live"],
            ["2 — Authority", "4-6", "Content velocity, original data asset, first earned links", "16, 20", "2-3 clusters complete; first editorial links; impressions rising"],
            ["3 — Compounding", "7-9", "Refresh programme, entity building, internal-link passes", "11, 16, 19", "Long-tail page-1 rankings; organic conversions occurring"],
            ["4 — Scale &amp; Defend", "10-12", "AI visibility, adjacent clusters, core-update resilience", "23, 24, 25", "AI citations appearing; volatility below niche average"],
          ]}
        />

        <H2>The KPI ladder: leading before lagging</H2>
        <P>
          Rankings and revenue are lagging indicators — they move months after the
          work. Judge each phase on its leading indicators first: crawl health and
          indexation, then impressions, then average position, then clicks, then
          conversions. A phase can be completely on track while clicks are still
          flat, because impressions lead clicks by one to two core-update cycles.
          The KPI you hold each phase to is deliberately one rung ahead of the
          outcome you ultimately want.
        </P>
        <DataTable
          headers={["Rung", "Metric", "Where it lives", "Typical first movement"]}
          rows={[
            ["1", "Indexation &amp; crawl errors", "Search Console Pages report", "Weeks 1-4"],
            ["2", "Impressions", "Search Console Performance", "Weeks 4-12"],
            ["3", "Average position", "Search Console Performance", "Months 2-6"],
            ["4", "Clicks &amp; CTR", "Search Console Performance", "Months 3-9"],
            ["5", "Conversions &amp; revenue", "Analytics + CRM", "Months 4-12"],
            ["6", "Brand search &amp; AI citations", "Keyword tools + AI sampling", "Months 6-12"],
          ]}
        />

        <H2>Choose your track</H2>
        <P>
          The roadmap is one spine with three riders on it. Before Phase 0, pick the
          track that matches your situation; the phases stay identical, but the
          workstreams and hours shift.
        </P>
        <DataTable
          headers={["Workstream", "Solo creator", "Local business", "Agency / enterprise"]}
          rows={[
            ["Publishing pace", "1-2 cluster articles per week", "1 substantial page per month", "Parallel clusters per team"],
            ["Phase 0 scope", "Self-audit with free tools", "Audit + Google Business Profile setup", "Full technical audit + governance plan"],
            ["Link workstream", "Original data quarterly; digital PR outreach", "Local sponsorships, press, directories", "Digital PR programme; brand entity consolidation"],
            ["Phase 2 centrepiece", "Deep, first-hand cluster content", "Service-area pages with real jobs and reviews", "Subject-matter-expert authorship programme"],
            ["Reporting rhythm", "Monthly self-review", "Monthly profile + ranking review", "Monthly stakeholder one-pager, quarterly strategy"],
          ]}
        />

        <Quote dark>
          The one rule of the roadmap: Do not advance phases on the calendar; advance
          them on exit criteria. A team that enters Phase 2 with unresolved
          indexation problems will spend six months blaming the content — which was
          never the bottleneck. The gates exist precisely because the calendar lies
          about readiness.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Five phases: audit, foundations, authority, compounding, scale and defend — sequenced by dependency, not preference.",
            "Judge phases on leading indicators one rung ahead of the outcome you want.",
            "Exit on criteria, never on the calendar.",
            "One spine, three tracks: solo creator, local business, agency.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch29",
    part: "Part VI — The 12-Month Ranking Roadmap",
    partIndex: 6,
    num: "29",
    title: "Phase-by-Phase Execution",
    blurb:
      "The operating manual for each phase: the goal, the workstreams, exit criteria with real numbers, the decision gate, and the failure mode seen most often in the field.",
    minutes: 7,
    body: (
      <>
        <P>
          This chapter is the operating manual for each phase: the goal, the
          workstreams, the exit criteria with real numbers, the decision gate, and
          the failure mode seen most often in the field. Numbers assume a content
          site starting from modest authority; an established site typically moves
          one rung faster, a brand-new domain one rung slower.
        </P>

        <H2>Phase 0 — Audit &amp; Diagnose (Month 0)</H2>
        <P>
          Goal: know exactly what is broken, what is working, and who you are
          competing with — before changing anything. This is a two-week sprint for a
          small site, up to a month for a large one.
        </P>
        <P>
          Run the full technical audit (Appendix B): indexation, canonicals, orphan
          pages, sitemap health, CWV field data.
        </P>
        <P>
          Baseline the numbers and screenshot them: clicks, impressions, position by
          page and query, backlink count, brand search volume.
        </P>
        <P>
          Map the competitive set: who ranks for your ten money queries, what formats
          they use, what their clusters look like.
        </P>
        <P>
          Verify Search Console, analytics, and conversion tracking are clean — every
          later decision depends on this data being true.
        </P>
        <P>
          Exit criteria: zero critical technical errors; baseline dashboard exists;
          competitor map written down.
        </P>
        <P>
          Decision gate: if more than 20 percent of important pages are unindexed or
          canonicalized away, treat Phase 1 as primarily technical — content waits.
        </P>

        <Quote dark>
          What usually goes wrong: Teams skip Phase 0 because it produces no visible
          output. Then every later phase underperforms for reasons the audit would
          have caught in week one. The audit is the cheapest two weeks in the entire
          roadmap.
        </Quote>

        <H2>Phase 1 — Foundations (Months 1-3)</H2>
        <P>
          Goal: a technically sound site with one topic cluster fully live and the
          first traffic signals moving.
        </P>
        <P>
          Fix everything from the audit in priority order: indexation first, then
          canonical and redirect hygiene, then Core Web Vitals on the money templates
          (Chapter 18's playbooks).
        </P>
        <P>
          Build the topic map (Chapter 15) and commit to one cluster — one pillar plus
          six to ten question-shaped articles, internally linked both directions.
        </P>
        <P>
          Implement the editorial standard from Chapter 16: authorship, answer-first
          structure, information-gain check on every draft.
        </P>
        <P>
          Set the measurement rhythm from Chapter 27: weekly health check, monthly
          one-page report.
        </P>
        <P>
          Exit criteria: all money pages indexed; CWV rated Good on key templates; one
          full cluster live; impressions trending up month over month.
        </P>
        <P>
          Decision gate: if key pages are indexed but impressions stay flat after 8
          weeks of the cluster being live, re-run the intent audit (Chapter 9) — the
          usual cause is format mismatch, not quality.
        </P>

        <H2>Phase 2 — Authority (Months 4-6)</H2>
        <P>
          Goal: give the systems the off-site reasons to trust you — earned links,
          mentions, and a recognizable entity behind the content.
        </P>
        <P>
          Publish the first original data asset (Chapter 20): a survey, benchmark, or
          dataset only you can produce — then run its distribution as half the
          campaign.
        </P>
        <P>
          Complete two to three clusters; connect them with contextual internal links
          so topical authority compounds across the site.
        </P>
        <P>
          Begin entity hygiene: consistent organization facts across your site,
          LinkedIn, and the platforms your niche actually reads; Organization and
          Person schema with sameAs links.
        </P>
        <P>
          For local businesses, the equivalent workstream is the prominence programme
          of Chapter 21: review velocity, local links, profile activity.
        </P>
        <P>
          Exit criteria: two or three clusters complete; first editorial links from
          relevant publications arriving without payment; impressions roughly two to
          three times the Phase 0 baseline.
        </P>
        <P>
          Decision gate: if content ranks but stalls between positions 5 and 15 across
          the cluster, the constraint is authority, not content — shift effort from
          publishing to link earning before writing more.
        </P>

        <Quote dark>
          What usually goes wrong: Sites pitch for links before the asset exists.
          Editors decline politely, the team concludes outreach does not work, and the
          phase stalls. Sequence it: asset, then distribution, then pitch — the
          acceptance rate is an order of magnitude different.
        </Quote>

        <H2>Phase 3 — Compounding (Months 7-9)</H2>
        <P>
          Goal: convert the accumulated work into rankings that defend themselves, and
          start converting traffic.
        </P>
        <P>
          Run the refresh programme (Chapter 11) on a quarterly cadence: re-check
          facts, update numbers, add the sub-questions the page now shows for,
          re-submit for indexing.
        </P>
        <P>
          Run internal-link passes: every new article strengthens three older ones;
          every older one feeds the new.
        </P>
        <P>
          Push long-tail rankings from page two to page one by depth: add the missing
          sub-section competitors answer and you do not.
        </P>
        <P>
          Wire up conversion paths on the pages that now receive traffic — the fastest
          ROI in this phase is conversion optimization on already-ranking pages.
        </P>
        <P>
          Exit criteria: multiple page-1 long-tail rankings; organic conversions
          occurring weekly; refresh programme running on schedule.
        </P>
        <P>
          Decision gate: if rankings stabilized but conversions are absent, the
          problem is intent mismatch on the money pages — fix the promise between
          title and page before adding traffic.
        </P>

        <H2>Phase 4 — Scale &amp; Defend (Months 10-12)</H2>
        <P>
          Goal: make the position durable against core updates and AI-era shifts, and
          expand deliberately.
        </P>
        <P>
          Establish AI visibility (Chapters 23-25): answer capsules, FAQ discipline,
          monthly prompt sampling, the Search Console generative report in the
          monthly review.
        </P>
        <P>
          Expand to one adjacent cluster — adjacent, not unrelated; topical scope is
          enforced (Chapter 5), so grow outward from existing reputation.
        </P>
        <P>
          Prepare for core updates: run the Appendix C checklist proactively — prune
          weak pages, refresh statistics, verify authorship before updates land, not
          after.
        </P>
        <P>
          Document the playbook so the system survives team changes; by now you have a
          repeatable process, not a lucky quarter.
        </P>
        <P>
          Exit criteria: cited in AI answers for your core queries; update volatility
          at or below your niche's average; year-over-year organic growth visible in
          every KPI rung.
        </P>
        <P>
          Decision gate: if expansion attempts underperform consistently, stop
          broadening — double down on depth in the cluster that works (this is the
          single most common correct decision at month twelve).
        </P>

        <H2>After month twelve</H2>
        <P>
          The roadmap ends; the system does not. Year two is the same four levers at
          higher stakes: deeper clusters, bigger original-data assets, a refresh
          programme that now has hundreds of pages to compound across, and a
          defensive posture that treats every core update as an audit you have
          already passed. Sites that follow this arc typically see their strongest
          growth in months twelve to twenty-four — not because the algorithm rewards
          age, but because authority, entity recognition, and behavioural
          satisfaction (Chapter 7) are cumulative systems that a full year of
          consistent work has finally fed.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Each phase: goal, workstreams, numeric exit criteria, a decision gate, and a known failure mode.",
            "Advance on exit criteria, not dates; diagnose stalls with the gate's if-then before adding effort.",
            "Position 5-15 plateaus mean authority constraints; flat impressions with live clusters mean intent mismatch.",
            "Year two is the same levers at higher stakes — the compounding is the point.",
          ]}
        />
      </>
    ),
  },
];