import type { BookSection } from "@/components/book/types";
import { H2, H3, P, Quote, Checklist } from "@/components/book/Blocks";
import { DataTable } from "@/components/book/Blocks";

export const SECTIONS_FULL_PART7: BookSection[] = [
  {
    id: "ch30",
    part: "Part VII — Niche Playbooks",
    partIndex: 7,
    num: "30",
    title: "One System, Every Niche",
    blurb:
      "The ranking system is constant; what changes is which parts carry the weight. Five specialization questions tell you where to lean your effort.",
    minutes: 5,
    body: (
      <>
        <P>
          The ranking system does not change from niche to niche — PageRank does not
          work differently for recipes than for software reviews. What changes is
          which parts of the system carry the most weight, how high the trust bar
          sits, which formats the results page rewards, and where the links come
          from. Specializing the system means answering five questions for your
          niche, then leaning your effort where the answers point.
        </P>

        <H2>The five specialization questions</H2>
        <P>
          Who signs off on trust here? In product reviews, a named enthusiast can
          carry E-E-A-T. In health and finance, the same content needs credentials
          and institutional backing. This single answer decides your YMYL distance —
          how far your topic sits from the money-and-life categories where Google's
          reliable information systems enforce hardest.
        </P>
        <P>
          What does experience look like? First-hand evidence has a different shape
          in every niche: photos of cooked dishes, shot logs from tested machines,
          itinerary maps from walked routes, lab panels from personal experiments.
          Find your niche's version and make it the default, not the exception.
        </P>
        <P>
          Which format owns the results page? Search your ten money queries and
          count: listicles, step-by-step guides, videos, product pages, news. The
          dominant format is the one to beat — and the one Google's systems have
          learned satisfies those searchers.
        </P>
        <P>
          Where does the niche congregate? Links and mentions come from where the
          community actually lives — subreddits, forums, Discords, conferences,
          trade press. This is your link engine's map.
        </P>
        <P>
          What is the realistic timeline? A local plumber can rank in weeks; a
          personal-finance newcomer can spend a year earning the right to compete.
          Budgeting patience correctly is a competitive advantage.
        </P>

        <H2>Niche classes at a glance</H2>
        <DataTable
          headers={["Niche class", "Dominant systems", "E-E-A-T bar", "Format winners", "Link engine", "Realistic timeline"]}
          rows={[
            ["Informational media (food, DIY, productivity)", "Helpfulness, passage ranking, freshness (mild)", "Medium — experience over credentials", "Step guides, original photos, FAQ", "Communities, roundups, social", "3-9 months"],
            ["YMYL expert (finance, health)", "Reliable information, reviews, topic authority", "Highest — credentials, institutional trust", "Evidence-cited guides, expert authorship", "Citations from authoritative sites", "9-24 months"],
            ["Product &amp; commerce (reviews, affiliates)", "Reviews system, helpfulness, freshness", "Medium-high — demonstrated testing", "Tested comparisons, methodology, tables", "Original benchmarks and data", "4-12 months"],
            ["Local service", "Local pack, prominence signals", "Medium — reviews and NAP", "Service pages, GBP, local proof", "Local press, directories, community", "Weeks to 3 months"],
            ["News &amp; media", "Topic authority, freshness, original content", "High — editorial standards", "Timely coverage, explainers", "Wire pickup, citations", "Continuous cadence"],
            ["B2B &amp; thought leadership", "Helpfulness, entity signals, AI features", "High — named experts, real data", "Original research, definitive guides", "Data assets, industry press", "6-18 months"],
          ]}
        />

        <H2>How to use the next two chapters</H2>
        <P>
          Chapter 31 walks one fictional blog — a home espresso site — through the
          entire twelve-month roadmap, so you can see the phases, gates, and KPIs in
          motion with real decisions at each step. Chapter 32 then compresses that
          thinking into playbooks for the major content niches: the cluster to build
          first, the evidence to collect, the links to chase, and the traps specific
          to each. Read the worked example for the shape; use your niche's playbook
          for the specifics.
        </P>

        <Quote dark>
          The honest label: The worked example is an illustrative composite, not a
          real site's analytics. The decisions and sequencing are exactly what the
          roadmap prescribes; the numbers are typical patterns for a competent
          execution in a medium-competition niche, not promises. Your market, effort,
          and competition set your numbers.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "The system is constant; its weights vary by niche — YMYL distance sets the trust bar.",
            "Five specialization questions: trust sign-off, experience evidence, dominant format, link habitat, timeline.",
            "Match the format the results page already rewards before trying to out-write it.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch31",
    part: "Part VII — Niche Playbooks",
    partIndex: 7,
    num: "31",
    title: "The Worked Example: A Blog from Zero",
    blurb:
      "A home espresso site runs the entire twelve-month roadmap end to end — the clusters, the data asset, and the decisions that mattered.",
    minutes: 5,
    body: (
      <>
        <P>
          The Home Espresso Log — a fictional but representative project — targets
          home espresso enthusiasts: people buying their first machine and grinder,
          learning to dial in shots, and caring enough to read long-form content.
          The niche is product-adjacent (affiliate revenue possible), has active
          communities (two large subreddits and several forums), sits far from YMYL
          (nobody's health or money is at risk beyond a few hundred dollars), and
          rewards exactly the experience-first content the helpfulness layer wants
          to surface.
        </P>

        <H2>The starting cluster</H2>
        <P>
          Following Chapter 15, the plan is one pillar plus eight question-shaped
          articles, mapped before anything is written:
        </P>
        <P>
          Pillar: The Home Espresso Setup Guide — machines, grinders, and what
          actually matters (informational, the head term).
        </P>
        <P>
          How to dial in espresso: a step-by-step method with shot photos
          (informational).
        </P>
        <P>
          Why your espresso tastes sour — and how to fix it (informational; the
          classic beginner failure).
        </P>
        <P>
          Espresso grind size explained, with side-by-side photos (informational).
        </P>
        <P>
          Best espresso machines under $500 — tested over 60 shots each (commercial,
          reviews system).
        </P>
        <P>
          Bambino vs Dedica: two budget machines, 200 shots compared (commercial
          investigation).
        </P>
        <P>
          How to steam milk for latte art at home (informational, video-adjacent).
        </P>
        <P>
          Water for espresso: recipes, testing, and what actually changes
          (informational, information-gain candidate).
        </P>
        <P>
          Every article carries the same experience kit, collected while actually
          making espresso: original photos of crema and pours, shot logs with
          weights and timings, and named authorship with a biography page linking
          the author's years of home-barista forum participation. The site runs a
          lightweight theme that ships Core Web Vitals green by default — Phase 1's
          speed work is mostly not creating problems.
        </P>

        <H2>Twelve months, phase by phase</H2>
        <DataTable
          headers={["Months", "Phase", "What we did", "Gate / KPI movement (illustrative)"]}
          rows={[
            ["0", "Audit", "Chose niche deliberately; competitor map of 10 money queries; baseline zero — new domain; Search Console wired", "Niche scorecard written; no critical debt"],
            ["1-3", "Foundations", "Published the 9-page cluster at 2 per week; author entity set up; internal links both directions; submitted sitemap", "All pages indexed in week 2; first impressions appear week 5; impressions grow to a few thousand per month"],
            ["4-6", "Authority", "Built the data asset: 'We tested 14 hand grinders across 800 shots' — full methodology, dataset, photos; shared in communities where the author was already a member; pitched 20 relevant writers", "12-20 referring domains; community threads and 2 newsletters link the study; impressions roughly 5x Phase 1 exit; first page-2 positions"],
            ["7-9", "Compounding", "Refresh cycle on the dial-in and sour-shot guides (added the questions Search Console showed); conversion paths on the two commercial pages; second cluster (milk and drinks)", "'Sour espresso fix' hits position 2-4; first affiliate revenue — modest but real; average position across site improves month over month"],
            ["10-12", "Scale &amp; Defend", "Third cluster (machines by budget tier); answer-capsule rewrite of top pages; monthly AI prompt sampling begins", "Cited in one AI Overview for a grinder query; brand searches appearing; survives a core update with volatility below the niche's chatter"],
          ]}
        />

        <H2>The decisions that mattered</H2>
        <P>
          Choosing a niche with reachable communities and no YMYL exposure made every
          later phase cheaper — the same effort in personal finance would still be
          waiting for trust at month twelve.
        </P>
        <P>
          The data asset came before outreach, so the pitches offered something to
          link. This one sequencing choice is why Phase 2 worked.
        </P>
        <P>
          Refresh effort followed Search Console data — the 'sour espresso' page got
          the sub-sections the queries were asking for, and its ranking followed
          within a core update cycle.
        </P>
        <P>
          Commercial pages were built last, once the informational cluster had given
          the site topical standing — reversing that order is the classic beginner
          mistake.
        </P>

        <Quote dark>
          Run this walkthrough for your niche: Replace the espresso specifics with
          yours: pick the cluster a beginner would need first, define your experience
          kit (what you can photograph, test, log, or measure), name your
          communities, and design the one data asset only you could produce. The
          months, gates, and KPIs stay the same.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Niche choice — community reach plus low YMYL distance — determines cost per result more than any tactic.",
            "Data asset before outreach; commercial pages after topical standing.",
            "Refresh decisions come from Search Console queries, not intuition.",
            "The same shape applies to any niche; the specifics are what Chapter 32 supplies.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch32",
    part: "Part VII — Niche Playbooks",
    partIndex: 7,
    num: "32",
    title: "The Niche Playbook Library",
    blurb:
      "Ten ready-made playbooks — the cluster to build first, the experience evidence to collect, the link engine to run, and the traps specific to each niche.",
    minutes: 8,
    body: (
      <>
        <P>
          Ten playbooks covering the major content niches, each answering the five
          specialization questions in the compressed format you can act on this
          week: the cluster to build first, the experience evidence to collect, the
          link engine to run, and the traps specific to the niche. Combine your
          playbook with the roadmap of Part VI and the tracks of Chapter 28.
        </P>

        <H3>Food &amp; recipes</H3>
        <P>
          Heavily visual results pages (images and video carousels), mild freshness
          pressure, and a reviews-adjacent quality bar on technique content. Recipe
          schema eligibility matters; original photography is the experience signal
          and the differentiator — recipe pages without it read as scraped.
        </P>
        <P>
          First cluster: one technique pillar (for example, weeknight pasta) plus
          question-shaped recipes and method pages.
        </P>
        <P>
          Experience evidence: your own photos at every step, tested-and-adjusted
          notes, failure notes when a recipe misbehaved.
        </P>
        <P>
          Link engine: food communities, seasonal roundups, and publications that
          aggregate recipes — a distinctive original recipe earns links for years.
        </P>
        <P>
          Watch-outs: thin recipe pages with no method substance; nutrition claims
          drifting into health YMYL.
        </P>

        <H3>Travel</H3>
        <P>
          Freshness matters (openings, prices, visa rules), local intent blends with
          informational, and results pages mix guides with booking platforms.
          First-hand presence is the entire game — Google's systems and readers
          alike can smell synthesized itineraries.
        </P>
        <P>
          First cluster: one destination you genuinely know at depth, not ten you
          researched.
        </P>
        <P>
          Experience evidence: your photos, dated visits, prices paid, itineraries
          you actually walked.
        </P>
        <P>
          Link engine: destination guides cited by other writers, travel communities,
          local tourism boards.
        </P>
        <P>
          Watch-outs: programmatic city-template pages (scaled content policy),
          scraped booking details, stale prices left unrefreshed.
        </P>

        <H3>Personal finance (YMYL)</H3>
        <P>
          The highest trust bar in content. Reliable information systems and topic
          authority push results toward institutions; independent sites win with
          genuine expertise, cited primary sources, and consistent author entities.
          Timelines are long and should be planned as such.
        </P>
        <P>
          First cluster: a narrow sub-topic you can claim demonstrably — for example,
          a specific tax credit or one investing mechanic, not 'investing'.
        </P>
        <P>
          Experience evidence: credentials where they exist, worked examples with
          real numbers, calculations readers can reproduce, reviewed-by lines.
        </P>
        <P>
          Link engine: citations from journalists needing experts, original data on
          your sub-topic, expert roundups — relationships over volume.
        </P>
        <P>
          Watch-outs: AI-drafted commodity explainers (fatal here), rate tables
          without dating, anything drifting into advice without disclaimers.
        </P>

        <H3>Health &amp; wellness (YMYL)</H3>
        <P>
          Same institutional gravity as finance, with the added dynamic of evidence
          quality: citations to primary research are the currency. Practitioner
          experience can compete when paired with medical review and honest scope
          statements.
        </P>
        <P>
          First cluster: one condition-adjacent or practice area where you have
          clinical or deep personal-experience authority.
        </P>
        <P>
          Experience evidence: credentialed authors, reviewed-by lines with real
          reviewers, links to studies — not to other blogs.
        </P>
        <P>
          Link engine: citations in clinical and consumer health contexts, expert
          commentary for journalists.
        </P>
        <P>
          Watch-outs: claims beyond evidence, undated statistics, removing the 'this
          is not medical advice' honesty rather than earning around it.
        </P>

        <H3>Tech, software &amp; SaaS reviews</H3>
        <P>
          The reviews system and commercial-investigation intent dominate. Comparison
          tables, hands-on screenshots, and testing methodology are table stakes;
          information gain comes from original benchmarks nobody else runs.
        </P>
        <P>
          First cluster: one category you can test physically or by trial accounts —
          narrow enough to own.
        </P>
        <P>
          Experience evidence: screenshots of your own runs, methodology pages,
          versioned and dated results.
        </P>
        <P>
          Link engine: benchmark data journalists cite, category roundups, developer
          communities for technical topics.
        </P>
        <P>
          Watch-outs: rehashing press releases, review pages that never mention what
          was actually tested, affiliate-heavy thin comparisons.
        </P>

        <H3>Home &amp; DIY</H3>
        <P>
          How-to intent with strong video competition — your structured,
          photographable steps are what passage ranking and AI features extract
          best. Light YMYL pressure appears where safety does (electrical,
          structural).
        </P>
        <P>
          First cluster: one project type end to end — tool selection, technique,
          mistakes, costs.
        </P>
        <P>
          Experience evidence: build photos at every stage, materials actually used,
          honest cost and time accounting.
        </P>
        <P>
          Link engine: DIY forums, community answers, supplier and manufacturer
          mentions.
        </P>
        <P>
          Watch-outs: safety-relevant steps without caveats; instructions that skip
          the failure cases.
        </P>

        <H3>Productivity &amp; self-improvement</H3>
        <P>
          The most crowded, least differentiated niche — which makes information gain
          the whole game. Personal experiments with data beat summary essays; the
          format bar is originality.
        </P>
        <P>
          First cluster: one method or tool system you actually ran, documented with
          before-and-after data.
        </P>
        <P>
          Experience evidence: your own logs, screenshots, measured outcomes over a
          stated period.
        </P>
        <P>
          Link engine: original experiments people cite, newsletters, community
          write-ups.
        </P>
        <P>
          Watch-outs: '10 habits' commodity content — the exact pattern the
          helpfulness layer demotes.
        </P>

        <H3>Parenting &amp; family</H3>
        <P>
          Mixed YMYL: safety-adjacent topics (sleep, health, car seats) carry
          elevated trust expectations, while activity and education content rewards
          warmth plus first-hand photos. Communities are strong and generous with
          mentions.
        </P>
        <P>
          First cluster: one age-band problem space you lived through recently.
        </P>
        <P>
          Experience evidence: your family's real routines and photos, honest
          what-did-not-work notes, expert review on medical-adjacent pieces.
        </P>
        <P>
          Link engine: parenting communities, teacher and pediatrician roundups,
          local family press.
        </P>
        <P>
          Watch-outs: medical-adjacent guidance without review; fear-based content
          that outruns evidence.
        </P>

        <H3>Beauty &amp; fashion</H3>
        <P>
          Trend-driven freshness plus visual SERPs (images, shopping, video).
          Ingredient-level science content is rising as the E-E-A-T differentiator
          in skincare; before/after documentation is the experience standard.
        </P>
        <P>
          First cluster: one category (for example, a skin concern or a wardrobe
          capsule) with seasonal refreshes.
        </P>
        <P>
          Experience evidence: before/after photos over documented weeks, ingredient
          analysis with primary sources, shade-tested swatches.
        </P>
        <P>
          Link engine: beauty communities, ingredient-science citations, seasonal
          trend pieces for publications.
        </P>
        <P>
          Watch-outs: skin and hair claims drifting into health YMYL without
          evidence; undated trend content.
        </P>

        <H3>Gaming &amp; entertainment</H3>
        <P>
          Freshness systems dominate for news-shaped queries; evergreen guides
          (builds, walkthroughs, mechanics) compound for years. Topic authority
          rewards sustained cadence — if you cannot cover the beat continuously,
          focus on evergreen and skip news.
        </P>
        <P>
          First cluster: deep guides for one game or genre you play at a high level —
          mechanics, builds, troubleshooting.
        </P>
        <P>
          Experience evidence: your own gameplay footage, patch-tested builds,
          frame-data measurements for technical titles.
        </P>
        <P>
          Link engine: game subreddits, wiki citations, creator communities — your
          data tables become reference material.
        </P>
        <P>
          Watch-outs: patch-dependent content left unrefreshed (freshness decay),
          news cadence you cannot sustain.
        </P>

        <H2>B2B, local, and everything else</H2>
        <P>
          Two niches get their own treatment elsewhere in this book because they run
          on different plumbing. B2B and thought-leadership content is, mechanically,
          the data-asset niche taken to enterprise scale: original research, named
          experts, entity consistency, and the AI-visibility programme of Part IV
          matter more than publishing volume — apply Chapters 20, 24, and 27 with
          extra weight on the entity layer. Local service businesses run on the
          prominence economy of Chapters 12 and 21 — the Business Profile, reviews,
          and honest service-area pages — with the content chapters applied at the
          scale of one strong page per service. If your niche was not named, run the
          five specialization questions from Chapter 30; every niche in between is a
          blend of the ten above.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Every niche is one of these archetypes or a blend — run the five questions and the pattern is visible.",
            "Experience evidence has a niche-specific shape; find yours and make it the default.",
            "YMYL-adjacent niches: credentials, review, and citations are the tax you pay to compete.",
            "Crowded non-YMYL niches: original data is the only reliable differentiator.",
          ]}
        />
      </>
    ),
  },
];