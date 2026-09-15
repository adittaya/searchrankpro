import type { BookSection } from "@/components/book/types";
import { H2, H3, P, Quote, Checklist } from "@/components/book/Blocks";
import { DataTable } from "@/components/book/Blocks";

export const SECTIONS_FULL_PART2: BookSection[] = [
  {
    id: "ch9",
    part: "Part II — The Signals That Decide Rankings",
    partIndex: 2,
    num: "9",
    title: "Intent, Relevance, and Information Gain",
    blurb:
      "Relevance gates every other signal, so ranking starts by matching the intent a query already rewards and by covering topics in depth rather than keywords.",
    minutes: 5,
    body: (
      <>
        <P>
          Relevance is the gate every other signal passes through: a page cannot
          outrank its irrelevance with authority, speed, or trust. Google
          classifies queries by intent, and the dominant framework is fourfold.
          Informational queries want knowledge (“how does PageRank work”).
          Navigational queries want one destination (“Gmail login”). Commercial
          investigation queries compare options ahead of a decision (“best CRM
          for small nonprofits”). Transactional queries want to complete an
          action (“buy Yeti cooler 65”).
        </P>

        <H2>Dominant intent wins the query</H2>
        <P>
          Each query has one dominant intent, decided by what the results that
          satisfy searchers look like — not by what you wish they looked like.
          The failure mode is intent mismatch: a product page trying to rank for
          an informational query, or a beginner guide trying to rank for “buy”
          terms. Before targeting any keyword, search it and read the results
          page like a survey of what searchers accepted. If all ten results are
          listicles, your product page will not crack them; if all ten are
          product categories, no essay will. Match the format the query already
          rewards, then win on execution.
        </P>

        <H2>Topical coverage versus keyword coverage</H2>
        <P>
          Because retrieval is semantic (Chapter 4), rankings are won by topical
          completeness rather than by keyword matching. Google’s systems assess
          whether a page, and the site around it, covers the full entity-graph of
          a topic: for “hemoglobin A1c” that means normal ranges, causes of
          elevation, testing, versus fasting glucose, and who should be tested.
          One page ranking alone is rare; clusters of interlinked pages that
          cover a topic’s depth — a pillar page with a dozen specific articles —
          demonstrate topical authority and let passage ranking lift each section
          for its question-shaped query. Google’s own AI-era guidance warns
          against the opposite: building a page for every fan-out query variation
          is named as scaled content abuse, not strategy.
        </P>

        <H2>Information gain: the tiebreaker among equals</H2>
        <P>
          When ten pages all cover the same ground, helpfulness systems need a
          reason to prefer one. That reason is information gain — content that
          adds something the current results do not: original data, first-hand
          testing, a clearer structure, an updated number, a cheaper method, a
          counter-argument with evidence. Google’s leaked internal engineering
          language and its public guidance (“does the content provide substantial
          value when compared to other pages in search results?”) both point at
          the same mechanic. In practice, information gain is the
          highest-leverage editorial standard you can hold a draft to, and the
          cheapest one to verify: read the current top five, then check what your
          draft adds.
        </P>

        <Quote dark>
          The query intent audit: For every page you already have: search its
          target query, compare the dominant result format with your page, and
          classify the mismatch. Realigning existing pages to the intent the
          query actually rewards — or redirecting them to pages that match — is
          routinely the fastest ranking win on any established site.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Four intents: informational, navigational, commercial, transactional — and one dominates each query.",
            "Read the current results page before creating content; the format searchers accepted is the format to beat.",
            "Semantic retrieval rewards topical clusters, not keyword coverage of variations.",
            "Information gain against existing results is the practical tiebreaker among equals.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch10",
    part: "Part II — The Signals That Decide Rankings",
    partIndex: 2,
    num: "10",
    title: "Links as Votes: What Actually Counts",
    blurb:
      "Editorial relevance is the whole link game; original data earns links for years while self-placed links stopped counting a Penguin-generation ago.",
    minutes: 5,
    body: (
      <>
        <P>
          Chapter 3 covered the mathematics of PageRank; this chapter is the
          field guide — what separates the links that move rankings from the
          links that waste months and can, at the manipulation end, trigger spam
          actions.
        </P>

        <H2>The links that count</H2>
        <P>
          Editorial links from relevant pages — a writer for a publication in
          your niche chose to cite your work because it helped their argument.
          This is the entire ideal, and nearly every effective tactic is a way to
          make this moment likelier.
        </P>
        <P>
          Links from topical communities — subreddits, niche forums, Discord and
          Slack communities, industry aggregators. Often nofollow by markup, they
          still send behavioural signals (NavBoost’s world) and real humans, who
          go on to search your brand and cite you elsewhere.
        </P>
        <P>
          Original-data citations — journalists need numbers; the site that
          publishes the benchmark gets cited in every article that uses it. One
          strong original study can earn hundreds of links over years, which is
          why data assets have the best effort-to-link ratio of any format.
        </P>
        <P>
          Links from local and industry directories that real humans browse —
          moderate value, mostly relevant-anchor neutral, worthwhile for local
          businesses and nearly worthless at scale for anyone else.
        </P>

        <H2>The links that do not count — or hurt</H2>
        <P>
          Anything you can self-place: comments, forum signatures, profiles,
          bookmarking sites, article directories, press-release wires.
          Discounted algorithmically regardless of markup.
        </P>
        <P>
          Paid links without disclosure — buying followed links passes PageRank
          manipulatively and violates the link spam policies; enforcement ranges
          from devaluation (links simply stop counting) to manual penalties on
          whole sites.
        </P>
        <P>
          Link exchanges and PBNs — reciprocal rings and private blog networks
          pattern-match as coordination. SpamBrain’s specialty is exactly these
          clusters; the second-order links that pointed at a devalued network
          stop counting too.
        </P>
        <P>
          Widget, footer, and boilerplate sitewide links — the same URL on every
          page of an unrelated site, placed by a developer rather than an editor.
        </P>

        <H2>Anchor text in a healthy profile</H2>
        <P>
          A natural backlink profile is dominated by the brand name and URL, with
          partial-match phrases and a small minority of keyword-relevant anchors.
          The ratio that matters is not keyword count but distribution: when a
          large share of new links to a page use the same commercial anchor text,
          the pattern itself is the spam signal — the 2012 Penguin system was
          built on it, and its modern core descendants never unlearned it. When
          earning links, do not engineer anchors; engineer reasons for editors to
          use the anchor they would naturally use.
        </P>

        <H2>The unlinked-mention economy</H2>
        <P>
          A 2025 analysis by Ahrefs found that plain brand mentions on the open
          web correlate far more strongly with AI Overview visibility than
          backlinks do — roughly three times more, in their data. Whether Google
          uses mentions as a direct ranking input is unresolved; what is certain
          is that mentions beget links (writers who name you eventually link
          you), and that AI systems synthesizing answers weight third-party
          discussion heavily. Digital PR that wins mentions is therefore both a
          link strategy and an AI-visibility strategy — two assets for one
          campaign.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Editorial relevance is the whole game: links you cannot self-place, from pages about your topic.",
            "Original data and tools earn links for years; placements stop counting within one Penguin-generation.",
            "Anchor distribution matters more than anchor count — engineer reasons, not anchors.",
            "Mentions are the new secondary currency: they correlate with AI visibility and mature into links.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch11",
    part: "Part II — The Signals That Decide Rankings",
    partIndex: 2,
    num: "11",
    title: "Freshness Systems and Content Decay",
    blurb:
      "Freshness-sensitive queries reward recent content, dishonest re-dating backfires, and decay is competition and staleness — not a penalty.",
    minutes: 4,
    body: (
      <>
        <P>
          Some queries deserve fresh results — news, prices, releases, “best”
          lists, anything where last year’s answer is wrong this year. Google’s
          freshness systems, descendants of the 2007 “Query Deserves Freshness”
          work, detect this class of query and boost recently updated or newly
          published pages. The mirror image is content decay: pages that once
          ranked and slide as their facts age, competitors publish fresher takes,
          and searchers’ satisfaction (NavBoost again) declines.
        </P>

        <H2>Which queries are freshness-sensitive</H2>
        <P>
          Recency-implicit: “best CRM 2026,” “iphone price,” “next solar
          eclipse” — the query itself carries a time expectation.
        </P>
        <P>
          Event-driven: news, sports, releases — freshness dominates for days or
          weeks, then the authoritative explainer takes over.
        </P>
        <P>
          Stable-knowledge queries — “what is photosynthesis” — are far less
          freshness-sensitive; a 2018 page can beat a 2026 one on merit.
        </P>

        <H2>Dates done honestly</H2>
        <P>
          Visible dates influence both click behaviour and freshness assessment,
          and Google penalizes the dishonest use of them: republishing old
          content with a new date and no substantive change is the textbook
          definition of a cheap freshness trick. The professional standard:
          update the date when the content substantively changes (facts
          re-checked, numbers refreshed, new sections), expose both published and
          modified dates in Article schema where relevant, and keep dateModified
          accurate in structured data — AI-era retrieval demonstrably weights it
          for anything time-sensitive.
        </P>

        <H2>A refresh programme that compounds</H2>
        <P>
          The highest-ROI editorial process most sites never build: a quarterly
          content refresh. Rank your pages by declining clicks in Search Console;
          for each decliner, re-run the intent audit (Chapter 9), update the
          numbers and screenshots, add a section answering questions the page
          does not currently cover (find them in the queries the page already
          shows for), fix any CWV regressions, and re-submit the URL for
          indexing. Independent AI-citation research in 2025-2026 repeatedly
          found pages updated within recent months were several times more likely
          to be cited by AI Overviews — the refresh programme is now both a
          ranking and an AI-visibility programme.
        </P>

        <Quote dark>
          Decay is not a penalty: Content decay looks like a penalty in the
          charts — traffic slides quarter over quarter — but it is competition
          and staleness, not enforcement. The fix is the refresh programme, not a
          reconsideration request.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Freshness-sensitive queries: recency-implicit and event-driven; stable knowledge barely cares.",
            "Re-date only with substantive change — fake freshness is a named manipulative tactic.",
            "Keep schema dateModified truthful; AI retrieval weights it.",
            "Run a quarterly refresh programme ranked by declining Search Console clicks.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch12",
    part: "Part II — The Signals That Decide Rankings",
    partIndex: 2,
    num: "12",
    title: "Local Search: The Map Pack Economy",
    blurb:
      "Local queries surface a map pack with its own competition and signals — relevance, distance, and prominence — worth more than the organic results below it.",
    minutes: 5,
    body: (
      <>
        <P>
          Local queries — “dentist near me,” “emergency plumber Andheri” —
          produce a results page led by the map pack: a three-listing local block
          above the traditional organic results, plus a map. The pack is a
          separate ranking competition with its own dominant signals, and for a
          local business it is worth more than all ten organic listings below it,
          because it captures the click of someone ready to walk in or call
          today.
        </P>

        <H2>The three pillars of local ranking</H2>
        <P>
          Google’s own local search documentation names the factors: relevance
          (how well the profile matches the query), distance (proximity of the
          business to the searcher or searched location — the factor you control
          least), and prominence (how well known and well regarded the business
          is, drawn from Google’s knowledge of the web: reviews, links, articles,
          and the local ecosystem). Distance dominating means you cannot outrank
          geography — but you can own prominence for your category within your
          service area, which is what the rest of the local game is.
        </P>

        <H2>The Google Business Profile checklist</H2>
        <P>
          Claim and verify the profile; choose the most specific category that is
          true — primary category is a heavy ranking input.
        </P>
        <P>
          Complete every field: hours (including holiday hours), services,
          attributes, description written for customers rather than keywords.
        </P>
        <P>
          Post real photos monthly — interiors, team, work product; profiles with
          recent photos measurably convert better.
        </P>
        <P>
          Keep NAP (name, address, phone) exactly consistent across the profile,
          the website, and major directories — consistency is the trust signal;
          citations feed prominence.
        </P>
        <P>
          Enable and answer messaging; set service areas honestly; link to the
          right landing page on your site.
        </P>

        <H2>Reviews: the currency of prominence</H2>
        <P>
          Review count, velocity, rating, and — critically — your responses are
          the strongest prominence signal a local business can manufacture
          legitimately. Google’s own guidance confirms responding to reviews
          improves visibility, and reviews carry the keyword-weight the profile
          itself lacks (a review saying “fixed my BMW’s gearbox” helps you for
          gearbox repairs). The professional system: ask every satisfied
          customer, make leaving a review a 60-second task with a direct link,
          respond to every review including negative ones calmly and factually,
          and never buy or fabricate — fake reviews are a policy violation with
          enforcement teeth, and local guides notice.
        </P>

        <H2>Local organic beneath the pack</H2>
        <P>
          Below the map pack, organic local results reward localized content:
          city- or area-level service pages with genuine local substance (not
          five near-identical pages differing only by city name — that is the
          scaled-content pattern Chapter 13 covers), local links (chambers of
          commerce, local press, community sponsorships), LocalBusiness schema on
          the site, and the E-E-A-T basics. For multi-location businesses, the
          honest architecture is one strong page per location with real local
          information and someone accountable for it.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Local ranking = relevance + distance + prominence; you win relevance and prominence.",
            "Primary Business Profile category is a heavyweight input; complete every field.",
            "NAP consistency across the web feeds prominence; reviews and responses are the strongest lever you own.",
            "Local service pages need genuine local substance to survive the scaled-content policies.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch13",
    part: "Part II — The Signals That Decide Rankings",
    partIndex: 2,
    num: "13",
    title: "Spam Policies: What Gets You Demoted or Removed",
    blurb:
      "Published rules earn demotion or removal; enforcement runs through SpamBrain and manual actions, and three March 2024 policies define the era.",
    minutes: 5,
    body: (
      <>
        <P>
          Google’s spam policies are published rules for practices that earn
          demotion or removal from results. Enforcement runs on two tracks:
          automated systems, principally SpamBrain — a machine-learning system
          Google describes as its primary spam fighter, continuously retrained on
          evolving spam patterns — and manual actions, where a human reviewer
          applies a penalty visible in Search Console with a reconsideration
          process. The important strategic fact: modern policy is aimed at
          behaviour, not tools. Three policies announced with the March 2024
          update define the current era.
        </P>

        <H2>Scaled content abuse</H2>
        <P>
          The policy targets “many pages generated for the primary purpose of
          manipulating Search rankings and not helping users” — regardless of
          whether automation, humans, or a combination produced them. This
          replaced the older “automatically generated content” framing
          deliberately: mass-produced content is spam whether a language model
          wrote it or a content farm of freelances did. Google has stated plainly
          that AI-generated content is not inherently spam — quality and purpose
          are what count — but a thousand programmatic pages stamped from
          templates with no first-hand input are squarely in scope. Sites
          generating thousands of city- or product-permutation pages saw this
          policy plus core updates eat their visibility through 2024-2025.
        </P>

        <H2>Site reputation abuse (“parasite SEO”)</H2>
        <P>
          Third-party pages published with little or no first-party oversight to
          exploit the host site’s ranking signals — the payday-loan reviews on a
          trusted education domain, the coupon sections bolted onto news sites.
          Enforcement began May 2024 and expanded through 2025, eventually
          covering cases where even first-party involvement did not save content
          whose primary purpose was ranking on the host’s reputation. What is not
          a violation: native advertising genuinely intended for the
          publication’s readers, editorial content produced with close
          involvement, syndicated wire news, and user-generated platforms with
          real moderation. If you host third-party content, the safe posture is
          close editorial oversight and noindex on anything published primarily
          for search.
        </P>

        <H2>Expired domain abuse</H2>
        <P>
          Buying expired domains to repurpose their accumulated ranking signals
          for low-quality content is now named spam. The old grey-hat play of
          inheriting a dead domain’s link equity for a fresh affiliate site is
          closed — signals do not survive the repurposing, and the practice
          itself is actionable.
        </P>

        <H2>The standing policies that still bite</H2>
        <P>Cloaking — showing crawlers different content than users.</P>
        <P>
          Sneaky redirects — including redirecting mobile users to different
          content than desktop.
        </P>
        <P>
          Text and links hidden or barely visible to users but readable by
          crawlers (white-on-white, CSS off-screen, font-size zero).
        </P>
        <P>
          Link spam — buying and selling links for ranking, excessive exchanges,
          automated link building, and the mass low-quality directory/article
          placements of the 2010s.
        </P>
        <P>Scraped and plagiarized content republished without value-add.</P>
        <P>
          Doorway pages — multiple near-identical pages each targeting a query
          variation, funnelling to one destination.
        </P>

        <Quote dark>
          Manual action versus algorithmic demotion: A manual action arrives with
          a notice in Search Console and a reconsideration process; you will know
          exactly what you were caught for and who to satisfy. Algorithmic
          demotion — what core updates do to scaled, thin content — arrives with
          no notice, no explanation, and no appeal; recovery means fixing the
          content and waiting for the systems to re-evaluate. One is a fine; the
          other is a market repricing.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "SpamBrain enforces automatically; manual actions come with notices and reconsideration.",
            "Scaled content abuse is about purpose and volume, not about AI versus human authorship.",
            "Site reputation abuse closed the parasite loophole, with or without first-party involvement.",
            "Expired-domain arbitrage is named spam — the tactic is dead, not grey.",
            "Standing policies (cloaking, hidden text, link buying, doorway pages) still bite, and ignorance is not a defence.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch14",
    part: "Part II — The Signals That Decide Rankings",
    partIndex: 2,
    num: "14",
    title: "A Timeline of the Updates That Made Modern SEO",
    blurb:
      "Every ranking reality is downstream of a specific update; read the timeline once for the arc — Google kills a tactic, then absorbs the lesson into core.",
    minutes: 4,
    body: (
      <>
        <P>
          Every current ranking reality is downstream of a specific update. This
          chapter is the timeline — one row per inflection point, with the
          strategic consequence of each. Read it once for the arc (Google
          repeatedly: kills a manipulative tactic, then absorbs the lesson into
          core), and keep it as reference when a client asks why the rules
          changed.
        </P>

        <DataTable
          headers={["Update", "Year", "What it changed", "Strategic consequence"]}
          rows={[
            ["PageRank / launch", "1998", "Links as votes in the original algorithm", "Link authority became the web’s currency"],
            ["Florida", "2003", "First great crackdown on on-page manipulation", "Keyword stuffing era ends"],
            ["Personalized / Universal", "2005-07", "Maps, news, video woven into results", "The SERP became more than ten links"],
            ["Caffeine", "2010", "Index rebuilt for freshness and scale", "Fresh content and news became feasible"],
            ["Panda", "2011", "Site-wide classifier against thin content", "Content farms died; quality became site-wide"],
            ["Page Layout / Top Heavy", "2012", "Ad-stuffed above-the-fold demoted", "UX entered the ranking vocabulary"],
            ["Penguin", "2012", "Link-spam enforcement, exact anchors", "Link buying becomes penalty risk"],
            ["Exact Match Domain", "2012", "EMD advantage capped", "Keyword domains stopped being a strategy"],
            ["DMCA / removal demotion", "2012", "Takedown volume demotes sites", "Rights compliance became a ranking issue"],
            ["Hummingbird", "2013", "Meaning-first query understanding", "Topic depth beats keyword matching"],
            ["Pigeon", "2014", "Local algorithm tied to web ranking", "Local SEO converged with organic"],
            ["Mobile-friendly (Mobilegeddon)", "2015", "Mobile-friendliness as a ranking signal", "Desktop-first sites entered their decline"],
            ["RankBrain", "2015", "First ML ranking system", "Concepts, not strings; keyword math retired"],
            ["Possum", "2016", "Local filter diversity", "Local visibility decoupled from address only"],
            ["Fred", "2017", "Ad-heavy affiliate value content demoted", "Monetization-first pages targeted"],
            ["Mobile-first indexing", "2018-2020", "Mobile version crawled and indexed", "The mobile page became the only page"],
            ["Medic (core)", "2018", "YMYL quality enforcement", "E-A-T became the industry’s obsession"],
            ["BERT", "2019", "Natural-language understanding (~10% of queries)", "Write like people speak; structure honestly"],
            ["Site diversity", "2019", "One site rarely takes >2 listings", "SERP domination strategies ended"],
            ["Core Web Vitals / Page Experience", "2020-21", "Speed and stability formally measured", "Performance became an SEO deliverable"],
            ["Passage ranking", "2021", "Sections rank for their questions", "H2-level answer-first writing"],
            ["Product Reviews updates", "2021-23", "Review depth and experience rewarded", "Hands-on evidence became table stakes"],
            ["Helpful Content System", "2022-23", "People-first content classifier (site-wide)", "Content-for-engines sites lost wholesale"],
            ["E-E-A-T (Experience added)", "2022", "Rater guidelines add first-hand experience", "Proof of doing became a differentiator"],
            ["October core + spam updates", "2023", "Cached pages retired; spam refreshed", "Stale tactics sunset quietly"],
            ["March 2024 core + spam policies", "2024", "HCS merged into core; three new spam policies; 45% reduction in unhelpful content targeted", "Scaled content, parasite SEO, expired domains named spam"],
            ["INP replaces FID", "2024", "Responsiveness metric upgraded", "All-interaction latency now measured"],
            ["AI Overviews global rollout", "2025", "200+ countries, 40+ languages", "Informational clicks compress; citations matter"],
            ["AI Mode launch + expansion", "2025", "Conversational search at scale", "Query sessions lengthen; source quality compounds"],
            ["March / June / Dec 2025 core updates", "2025", "Three recalibrations; partial HCU recoveries", "Quality bar reset three times in a year"],
            ["August 2025 spam update", "2025", "Enforcement run against scaled and parasite patterns", "The 2024 policies got teeth"],
          ]}
        />

        <P>
          Two patterns worth internalizing from the arc. First, every major
          “penalty update” of the 2010s ended the same way: absorbed into core,
          so what began as a targeted enforcement became the permanent baseline.
          Second, the interval between Google identifying a manipulative pattern
          and making it counterproductive has shortened from years to months —
          which is the strongest argument that durable, policy-compliant strategy
          is also the cheap one.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Every current rule descends from a dated update — the timeline explains why, not just what.",
            "Targeted systems (Panda, Penguin, HCU) end up inside core; enforcement becomes baseline.",
            "2024-2025: helpfulness merged into core, three new spam policies, AI features went global.",
          ]}
        />
      </>
    ),
  },
];