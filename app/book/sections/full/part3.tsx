import type { BookSection } from "@/components/book/types";
import {
  H2, H3, P, UL, LI, Tag, Takeaway, Quote, Step, IconCards, Stats,
  DataTable, Checklist, Divider, Kicker, BookEndCard, PartSep,
} from "@/components/book/Blocks";

export const SECTIONS_FULL_PART3: BookSection[] = [
  {
    id: "ch15",
    part: "Part III — The Practice: Ranking Your Site",
    partIndex: 3,
    num: "15",
    title: "Keyword and Topic Research That Maps to Authority",
    blurb:
      "Keyword research has changed shape — the unit of planning is now the topic cluster, and the process below builds a topical map, not a keyword list, that scales from a one-person blog to an enterprise team.",
    minutes: 5,
    body: (
      <>
        <P>
          Keyword research has changed shape. The unit of planning is no longer the keyword —
          it is the topic cluster, because that is the unit Google’s semantic systems assess
          (Chapter 9). The process below produces a topical map, not a keyword list, and it
          scales from a one-person blog to an enterprise content team.
        </P>

        <H2>Step 1: Mine the language of your actual market</H2>
        <P>
          Search Console first. For an existing site, the queries you already show for — even
          at position 30 — are the cheapest research on earth: they are queries Google already
          associates with you.
        </P>
        <P>
          Competitor gap analysis. In any commercial tool, list the keywords competitors rank
          for where you have no page. That intersection is the highest-probability opportunity
          set.
        </P>
        <P>
          Community listening. Reddit, niche forums, YouTube comments, Amazon reviews in your
          category — the exact phrases customers use when they describe their problem. These
          are entity-rich and exactly what neural matching wants to match.
        </P>
        <P>
          Customer-facing teams. Sales and support transcripts hold the objections,
          comparisons, and vocabulary that never appear in keyword tools but dominate real
          queries.
        </P>

        <H2>Step 2: Classify by intent and difficulty, honestly</H2>
        <P>
          Every candidate gets an intent label (informational, commercial, transactional,
          navigational) and a realistic difficulty assessment. Difficulty is dominated by who
          currently ranks: if the top ten for a query are established institutions and the
          intent is YMYL, that is a long-term authority investment, not a this-quarter article.
          Bias towards clusters where your entity has, or can quickly earn, genuine reputation —
          the topical-scope lesson of Chapter 5 applies to your own site as much as to
          publishers.
        </P>

        <H2>Step 3: Build the cluster map</H2>
        <P>
          Group candidates into topics: one pillar page per topic (a comprehensive overview
          that can rank for the head term) and one article per meaningful sub-question (the
          long tail, where 92 percent of keywords get fewer than ten searches per month and
          where new sites actually win). Map every article to the question it answers better
          than the current results, then connect: pillar links to every child; children link
          back and sideways to siblings where relevant. That internal graph is your topical
          authority engine — and your PageRank distribution system (Chapter 3).
        </P>

        <DataTable
          headers={["Asset", "Pillar", "Cluster article", "Supporting"]}
          rows={[
            ["Query type", "Head term (e.g. “email marketing”)", "Specific question or subtopic", "Very narrow long-tail"],
            ["Example", "Email marketing guide", "“Best send times by industry”", "“How to A/B test subject lines”"],
            ["Depth", "Comprehensive overview", "One question answered completely", "One facet, tightly"],
            ["Links to", "Every cluster article", "Pillar + siblings", "Parent cluster article"],
          ]}
        />

        <H2>Step 4: Assign business value before writing anything</H2>
        <P>
          Not every cluster deserves content. Rank clusters by strategic value: proximity to
          revenue, alignment with the products or mission, and achievability given your current
          authority. A small site that writes its fifteen best clusters well beats one that
          writes its eighty best clusters thinly — scaled content is not merely penalized
          (Chapter 13), it genuinely dilutes the site-wide helpfulness assessment.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Plan in topic clusters, not keywords — that is the unit Google assesses.",
            "Search Console, competitor gaps, and community language are the cheap research sources.",
            "The long tail (most keywords: under ten searches a month) is where new sites win.",
            "Internal linking across the cluster is both authority distribution and topical proof.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch16",
    part: "Part III — The Practice: Ranking Your Site",
    partIndex: 3,
    num: "16",
    title: "Building People-First Content That Ranks",
    blurb:
      "One editorial question governs everything in Part I; this chapter turns it into the practical craft of building people-first content.",
    minutes: 5,
    body: (
      <>
        <P>
          Every principle in Part I reduces to one editorial question: is this page the best
          answer on the open web for this searcher? This chapter is how to produce pages that
          pass that test repeatably — the writing system, not the individual burst of talent.
        </P>

        <H2>The answer-first structure</H2>
        <P>
          Passage ranking lifts sections; AI retrieval extracts passages; NavBoost rewards the
          searcher who does not need to return. All three converge on one layout. Put the
          direct answer in the first hundred words. Under each H2, open with a 40-80 word
          self-contained answer to that heading’s question, then expand. Write headings as the
          questions people actually type. This is not a hack — it is the honest format of a
          page that intends to satisfy completely and immediately.
        </P>

        <H2>The information-gain checklist per draft</H2>
        <P>
          What does this page contain that the current top five do not? (Name it before
          writing.)
        </P>
        <P>
          First-hand evidence: original photos, tested numbers, personal methodology, or a
          named practitioner’s perspective.
        </P>
        <P>
          At least one original or freshly-verified number with its source and date.
        </P>
        <P>
          A section that answers the searcher’s follow-up question, not just the stated one.
        </P>
        <P>
          Honest limitations — what this does not do, when it does not apply.
        </P>

        <H2>Titles, descriptions, and the promise-economy</H2>
        <P>
          The title tag is a ranking input (relevance and keywords, still) and an
          expectation-setting device for the click loop: NavBoost penalizes over-promising,
          because a disappointed searcher bounces back. Write titles that are specific,
          verifiable in the first screen of the page, and honest about format. Meta
          descriptions do not directly rank, but they convert impressions to clicks — and
          clicks are behavioural signals. Write them like ad copy for the searcher’s exact
          intent, per page, never templated.
        </P>

        <H2>Authorship and the trust layer</H2>
        <P>
          Every substantive page gets a real author with a real biography page: who they are,
          why they know this, where else they publish, linked to verifiable identities
          (LinkedIn, ORCID, company page) via Person schema and sameAs. For YMYL content add a
          reviewed-by line with credentials. This is the on-page half of E-E-A-T (Chapter 6),
          and it is also entity-building: Google’s knowledge of who you are is built from
          consistent, verifiable author entities across the web.
        </P>

        <H2>Production workflow that keeps quality honest</H2>
        <P>
          Separate the roles even if you are one person wearing them: researcher (gathers the
          question set, the current top five, the primary sources), writer (drafts for one
          reader, answer-first), editor (holds the information-gain checklist and kills
          anything that fails it), and publisher (schema, internal links, freshness date,
          Search Console submission). A page that skips the editor role is how sites drift from
          publisher to content farm one compromise at a time — and the helpfulness systems
          measure the drift.
        </P>

        <Quote dark>
          Where AI writing fits: Google’s position is purpose-based, not tool-based:
          AI-generated content is not inherently spam, but content generated at scale primarily
          to rank is. The professional standard that satisfies both policy and quality: use AI
          for research, outlines, and first drafts; add the experience, data, and opinion only
          you have; fact-check every claim (models hallucinate numbers confidently); and put a
          human name on editorial responsibility. The same bar applies to your freelancers.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Answer-first structure satisfies passage ranking, AI extraction, and click satisfaction simultaneously.",
            "Every draft must name its information gain before it is written.",
            "Titles set expectations; NavBoost punishes over-promising.",
            "Real authors with verifiable entities are the on-page half of E-E-A-T.",
            "AI is a drafting tool under a human editorial bar — purpose and quality decide, not the tool.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch17",
    part: "Part III — The Practice: Ranking Your Site",
    partIndex: 3,
    num: "17",
    title: "Technical SEO Foundations",
    blurb:
      "The discipline of making a site fully crawlable, correctly indexed, and unambiguous — removing every machine-side reason a good page could underperform.",
    minutes: 5,
    body: (
      <>
        <P>
          Technical SEO is the discipline of making a site fully crawlable, correctly indexed,
          and unambiguous — removing every machine-side reason a good page could underperform.
          This chapter is the working map; Appendix B is the full audit checklist to run
          quarterly.
        </P>

        <H2>The non-negotiables</H2>
        <P>
          Crawlable by design: nothing important behind robots.txt blocks, meta noindex, or
          links only reachable via JavaScript menus that Googlebot cannot follow.
        </P>
        <P>
          One URL per canonical entity: self-referencing canonicals on every indexable page;
          parameters, print views, and syndicated copies handled by canonical tags or
          redirects — never duplicates competing with each other.
        </P>
        <P>
          Clean status codes: 200 for live pages, 301 for permanent moves (never chains),
          404/410 for dead pages, and no soft-404s returning 200 with empty content.
        </P>
        <P>
          HTTPS everywhere, with no mixed content; HTTP URLs 301-redirected to HTTPS.
        </P>
        <P>
          A current XML sitemap containing exactly the indexable pages you care about,
          submitted in Search Console — not a dump of every URL ever generated.
        </P>
        <P>
          Logical URL structure that mirrors the site hierarchy (example.com/topic/subtopic),
          readable in one glance by humans and crawlers.
        </P>

        <H2>Indexation: the control room</H2>
        <P>
          Google Search Console is the only authoritative indexation dashboard: the Pages
          report classifies every submitted URL as indexed, crawled-not-indexed,
          discovered-not-indexed, duplicate, alternate, or excluded. Each classification is a
          diagnosis. “Discovered — currently not indexed” on a batch of pages means Google saw
          the URLs and declined — usually quality or crawl-budget triage. A rising count of
          duplicates with canonical tags means consolidation is working; a sitewide drop
          usually means a technical change, not a penalty: check the settings, the robots.txt,
          and any deployment that shipped noindex to production.
        </P>

        <H2>Site architecture and crawl budget</H2>
        <P>
          Architecture is both a user-experience and a PageRank document: every page should be
          reachable within three clicks of the home page, organized into clear silos, with
          contextual internal links between related articles and no orphan pages. Crawl
          budget — how many URLs Googlebot fetches per visit — matters at scale: faceted
          navigation, parameter permutations, internal search results pages, and calendar
          pagination can multiply a 5,000-URL site into millions of crawlable dead ends. Block
          or noindex them, keep sitemaps honest, and monitor log files (or the GSC crawl
          stats) to see what Googlebot actually fetches.
        </P>

        <H2>The international layer, briefly</H2>
        <P>
          Multi-language or multi-country sites need hreflang annotations that declare every
          language/region alternative of each page (and return the favour from each
          alternative), localized URLs, and content that is genuinely localized rather than
          machine-translated boilerplate — the helpfulness layer has no sense of humour about
          near-identical multilingual templates. Get the hreflang cluster right in a sitemap
          rather than page-level tags if the site is large; one malformed tag removes the whole
          cluster’s clarity.
        </P>

        <Quote dark>
          The one-page technical test: When rankings move for no visible reason, run this
          before panicking: URL Inspection in Search Console — is the page indexed, on what
          canonical, crawled when, rendered how? Compare the rendered HTML to the live page;
          check the mobile-rendered version specifically; verify the canonical and the sitemap
          agree. Eight of ten mysterious ranking drops reveal themselves here — the other two
          are algorithmic.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Technical SEO removes machine-side reasons to underperform; it does not create quality.",
            "Canonicals, redirects, sitemaps, and indexation state are the control surface — all in Search Console.",
            "Architecture = three-click reachability + topical silos + no orphans.",
            "Faceted and parameter URLs are the usual crawl-budget killers at scale.",
            "hreflang clusters must be complete and mutually consistent, or they are noise.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch18",
    part: "Part III — The Practice: Ranking Your Site",
    partIndex: 3,
    num: "18",
    title: "Speed and Core Web Vitals in Practice",
    blurb:
      "The engineering playbook behind the vitals — the fixes that resolve the overwhelming majority of real-world speed failures, in the order to apply them.",
    minutes: 5,
    body: (
      <>
        <P>
          Chapter 8 covered what the vitals measure and why they matter (tie-breaker for
          rankings, first-class asset for AI citation, conversion multiplier everywhere). This
          chapter is the engineering playbook — the fixes that resolve the overwhelming
          majority of real-world failures, in the order to apply them.
        </P>

        <H2>Measure from reality, not from your laptop</H2>
        <P>
          The authoritative sources, in order: the Core Web Vitals report in Search Console
          (field data, your real users, 28-day windows); PageSpeed Insights (field plus lab
          with prioritized suggestions); and Chrome UX Report dashboards for trends. Lab tools
          (Lighthouse runs in local browsers) are useful for diagnosing causes but are not your
          score — a green Lighthouse badge with failing field data is a testing-environment
          delusion, and the reverse happens too.
        </P>

        <H2>The LCP playbook</H2>
        <P>
          Audit what renders above the fold on a mid-range phone on 4G — not your desktop. The
          LCP element is usually a hero image or headline block.
        </P>
        <P>
          Compress and resize that image properly: AVIF or WebP, correctly sized, with explicit
          width and height; a decorative full-screen photo is the single most common LCP
          killer.
        </P>
        <P>
          Preload the LCP resource (link rel=preload) and serve it from a CDN close to the
          user.
        </P>
        <P>
          Eliminate render-blocking chains: inline critical CSS, defer non-critical CSS, and
          load scripts with defer or async rather than in the head.
        </P>
        <P>
          Move to modern hosting and caching — full-page caching and edge delivery fix more LCP
          budgets than any amount of micro-optimization.
        </P>

        <H2>The INP playbook</H2>
        <P>
          Find long tasks: any JavaScript task over 50 ms blocks interaction. Performance
          profiles (and tools that visualize main-thread work) reveal them immediately.
        </P>
        <P>
          Break them up — yield to the main thread (scheduler.yield or setTimeout chunking)
          instead of running monolithic scripts.
        </P>
        <P>
          Audit third-party tags: chat widgets, analytics, tag managers, and ad scripts are
          usually the majority of interactive delay; remove, defer, or lazy-load them.
        </P>
        <P>
          Reduce hydration cost: heavy client-side frameworks re-render entire trees; prefer
          server-rendered HTML with islands of interactivity where the budget is tight.
        </P>
        <P>
          Use content-visibility: auto on long sections below the fold so the browser skips
          rendering them until scrolled.
        </P>

        <H2>The CLS playbook</H2>
        <P>
          Set explicit dimensions or CSS aspect-ratio on every image, iframe, and embed.
        </P>
        <P>
          Reserve space for ad slots and any late-loading dynamic content — a fixed-height
          container stops the jump.
        </P>
        <P>
          Never inject banners or notifications above existing content after load.
        </P>
        <P>
          Match font fallback metrics (font-display: optional with size-adjusted fallbacks) so
          text does not reflow when webfonts arrive.
        </P>

        <H2>The realistic expectations</H2>
        <P>
          Most sites can reach “Good” on all three within one or two focused engineering
          sprints; the long tail of ad-heavy and heavily-scripted sites pays an ongoing tax.
          Judge effort against return: for a content site, LCP and CLS fixes usually clear the
          bar; for a programmatic or app-like site, INP is the multi-quarter project. And
          remember the hierarchy: fix these after content relevance, never instead of it — page
          experience is the tie-breaker, and you need to first be in the tie.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Field data (Search Console, CrUX) is the truth; lab runs diagnose causes.",
            "LCP: compress and preload the hero asset, kill render-blocking, cache at the edge.",
            "INP: break 50 ms+ tasks, cut third-party tags, shrink hydration.",
            "CLS: dimensions everywhere, reserve ad space, match font fallbacks.",
            "One to two focused sprints clears the bar for most content sites.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch19",
    part: "Part III — The Practice: Ranking Your Site",
    partIndex: 3,
    num: "19",
    title: "Structured Data and Schema",
    blurb:
      "Machine-readable annotation — JSON-LD in practice — that declares, unambiguously, what a page is. Not a ranking dial, but rich-result eligibility, entity clarity, and clean extraction for AI features.",
    minutes: 4,
    body: (
      <>
        <P>
          Structured data is machine-readable annotation — JSON-LD in practice — that declares,
          unambiguously, what a page is: an article, by whom, when published, about what, for
          what price. It is not a direct ranking boost in the folklore sense; Google says it
          does not use it to rank. It does three jobs that matter more: it makes you eligible
          for rich results (stars, FAQs, breadcrumbs, event details), it sharpens the machine’s
          understanding of your entities (feeding the same knowledge systems E-E-A-T lives in),
          and it makes your content cleanly extractable for AI features.
        </P>

        <H2>The schema worth implementing</H2>
        <P>
          Organization + Person on the home and about pages — the entity anchor: name, logo,
          sameAs links to your verifiable profiles. This is your identity card to the
          knowledge graph.
        </P>
        <P>
          Article / BlogPosting on content, with author (Person), datePublished, dateModified —
          the freshness and authorship declaration.
        </P>
        <P>
          Product + Offer + AggregateRating on commerce pages — eligibility for price,
          availability, and review stars.
        </P>
        <P>
          LocalBusiness with geo, hours, and sameAs on location pages — the site-side half of
          local SEO.
        </P>
        <P>
          FAQPage on genuine question-and-answer content — and note Google’s 2023 restriction:
          FAQ rich results now show mainly for authoritative government and health sites, but
          the markup still structures content for extraction (which AI features read).
        </P>
        <P>
          HowTo (with the same caveat — rich result display was restricted in 2023),
          BreadcrumbList, Event, and Recipe where format-matched.
        </P>

        <H2>Rules of engagement</H2>
        <P>
          Mark up only what is visible on the page — schema describing hidden or non-existent
          content is a spam policy violation.
        </P>
        <P>
          Validate before and after: Google’s Rich Results Test and the Schema.org validator,
          every deploy.
        </P>
        <P>
          Keep it synchronized with reality: prices, dates, availability that disagree with the
          page erode trust in everything else you declare.
        </P>
        <P>
          Prefer JSON-LD in a script tag — cleaner than microdata attributes scattered through
          markup, trivial to template.
        </P>
        <P>
          Match the page’s primary type: one comprehensive, honest schema block beats five
          aspirational ones.
        </P>

        <Quote dark>
          Schema and AI search: Independent studies in 2025-2026 found no automatic AI-citation
          boost from adding JSON-LD — Google’s AI features retrieve and read pages like the
          rest of Search, and they understand unstructured text well. Schema’s role is subtler:
          it removes ambiguity about entities, authorship, and dates, which helps every system
          that grounds an answer in your page. Implement it as hygiene and eligibility, not as
          a GEO hack.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Schema is entity declaration and rich-result eligibility, not a ranking dial.",
            "Organization, Person, Article, Product, LocalBusiness are the core set.",
            "Mark up only visible, truthful content; validate every deploy.",
            "Expect structured Q&amp;A formats to be extractable — no rich-result guarantees since 2023.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch20",
    part: "Part III — The Practice: Ranking Your Site",
    partIndex: 3,
    num: "20",
    title: "Earning Links in 2026",
    blurb:
      "Link acquisition died in 2012; what replaced it is link earning — creating reasons for editors to cite you, ordered by effort-to-outcome.",
    minutes: 5,
    body: (
      <>
        <P>
          Link building died in 2012, in the sense that link <em>acquisition</em> —
          directories, exchanges, purchases, placements — stopped working as a strategy and
          became a liability. What replaced it is link <em>earning</em>: creating reasons for
          editors to cite you, and telling them those reasons exist. This chapter is the
          modern playbook, ordered by effort-to-outcome.
        </P>

        <H2>Tier 1: Original data</H2>
        <P>
          Publish research nobody else has: run a survey of your industry, aggregate anonymized
          data from your product, benchmark tools, price-track a category for a quarter,
          analyse a public dataset. Journalists and bloggers need numbers constantly; a
          well-packaged, honestly-sourced statistic on a well-built page is the single most
          linkable asset class in SEO. One original study can earn links for years — each
          article citing your number is a permanent editorial link, and in the AI era,
          citations of your data teach every answer engine that you are the primary source.
        </P>

        <H2>Tier 2: Digital PR</H2>
        <P>
          The craft of making newsworthy stories and offering them to journalists: a strong
          hook (a finding, a first, a contrarian claim with evidence), an asset (the
          underlying data or tool), and a targeted pitch to the writers who cover the space —
          not a press-release blast. The earned-mention study cited in Chapter 10 matters
          here: AI systems weight third-party editorial coverage heavily, so a successful
          digital PR campaign pays three times — links, mentions, and AI visibility.
        </P>

        <H2>Tier 3: Linkable utilities and depth</H2>
        <P>
          Free tools and calculators that solve one narrow problem well — they accumulate links
          passively for years.
        </P>
        <P>
          Definitive guides that genuinely are definitive — the page every future writer must
          acknowledge.
        </P>
        <P>
          Curated resource pages maintained honestly; original photography and data
          visualizations offered for reuse with attribution requirements.
        </P>

        <H2>What to stop doing</H2>
        <P>
          Guest post farming at volume — discountable placements and a pattern SpamBrain
          specializes in clustering.
        </P>
        <P>
          Link swaps and link networks, including the “link exchange marketplaces” that rebrand
          every few years.
        </P>
        <P>
          Buying followed links of any kind — the risk calculus has only worsened since 2016’s
          real-time Penguin.
        </P>
        <P>
          Chasing domain-authority numbers rather than relevance — a relevant small-publication
          link beats an irrelevant giant, and tools’ authority metrics are estimates, not
          Google’s signals.
        </P>

        <H2>The distribution half of the job</H2>
        <P>
          A linkable asset nobody knows about earns nothing. Budget half the campaign for
          distribution: communities where the audience lives (with genuine participation, not
          drive-by drops), newsletters in the niche, direct outreach to the twenty people who
          have written about the topic before, and conference or podcast appearances that come
          with show-note links. The asset earns the link; distribution earns the asset its
          audience.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Original data is the highest-leverage link asset; it compounds for years and teaches AI engines your authority.",
            "Digital PR pays triple: links, mentions, AI visibility.",
            "Tools and definitive guides earn passive links; placements and exchanges earn devaluation.",
            "Spend half the campaign on distribution — assets do not distribute themselves.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch21",
    part: "Part III — The Practice: Ranking Your Site",
    partIndex: 3,
    num: "21",
    title: "The Local SEO Playbook",
    blurb:
      "The operating procedure for a local business, run in the order a new business should run it — from Google Business Profile to review velocity.",
    minutes: 4,
    body: (
      <>
        <P>
          Chapter 12 covered how local ranking works; this is the operating procedure for a
          local business, in the order a new business should run it.
        </P>

        <H2>Week 1: Foundations</H2>
        <P>
          Claim and verify the Google Business Profile; select the most specific true primary
          category and all applicable secondary categories.
        </P>
        <P>
          Audit the NAP (name, address, phone) — it must be character-identical on the website,
          the profile, and the top directories (Apple Maps, Bing Places, and the handful of
          real local directories in your market).
        </P>
        <P>
          Build or fix the location landing page: name of business, address, hours, embedded
          map, LocalBusiness schema, real photos, service list with local detail.
        </P>
        <P>
          Set up review acquisition: a direct review link, a post-service follow-up message
          that asks within 48 hours, and a response protocol for every review, positive or
          negative.
        </P>

        <H2>Months 1-3: Prominence work</H2>
        <P>
          Publish the service-area content: pages for each core service with genuine local
          substance — the neighbourhoods served, response times, local regulations, real job
          stories and photos. City-template pages with swapped nouns are the scaled-content
          violation, not a strategy.
        </P>
        <P>
          Earn local links and citations: chamber of commerce, local press (your data stories
          work locally too), sponsorships you would make anyway, industry local directories.
        </P>
        <P>
          Post to the Business Profile weekly: offers, completed jobs, team. It signals an
          active business and feeds the profile’s own engagement.
        </P>
        <P>
          Collect and respond to reviews relentlessly — velocity and responses are the
          prominence signal you control completely.
        </P>

        <H2>Ongoing: measurement</H2>
        <P>
          The Business Profile performance report shows the queries, calls, direction requests,
          and website clicks the profile drives — the actual conversion currency of local.
          Watch profile-level queries alongside website rankings in Search Console; local
          visibility lives in both. Reviews, profile posts, and Q&amp;A are also behavioural
          surfaces: they shape the click decisions that feed back into prominence.
        </P>

        <Quote dark>
          Multi-location honesty: With several locations, the temptation is a location template
          stamped per city. Resist it: each location page needs a person accountable for it —
          its own photos, jobs, local facts, and reviews. One genuine page per location beats
          twenty thin ones, both with users and with the scaled-content policies.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Foundations first: profile, categories, NAP consistency, landing page, review link.",
            "Prominence is earned with service-area content, local links, and review velocity plus responses.",
            "Measure with the profile performance report, not just website rankings.",
            "Every location page needs an accountable human — templates do not survive.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch22",
    part: "Part III — The Practice: Ranking Your Site",
    partIndex: 3,
    num: "22",
    title: "Core Update Survival: Diagnosis and Recovery",
    blurb:
      "How to survive a core update: a recovery procedure of confirmation, classification, improvement — consolidation or removal — and patience.",
    minutes: 5,
    body: (
      <>
        <P>
          A core update recalibrates the weights among existing quality signals — it is not a
          penalty, has no fix-form, and no appeal. Google’s guidance has been consistent
          through every update since 2019: pages that drop may not be doing anything “wrong”;
          other pages are being rewarded more. Recovery is therefore a re-evaluation over
          months, earned by becoming what the new weights reward. This chapter is the
          procedure.
        </P>

        <H2>Step 1: Confirm it is actually the update</H2>
        <P>
          Check the Search Status Dashboard: which update, what dates, fully rolled out?
        </P>
        <P>
          In Search Console, compare two weeks before versus after the rollout window — look at
          the date range, not single days.
        </P>
        <P>
          Separate traffic sources: a drop across all channels is usually a tracking or site
          issue; a drop only in Google organic, concentrated in the update window, is the
          update.
        </P>
        <P>
          Classify the hit: whole site, a section, or specific pages? Site-wide points to
          site-level quality assessment; page-specific points to content or intent mismatches.
        </P>

        <H2>Step 2: Diagnose against the quality bar</H2>
        <P>
          Take the five pages that lost the most and audit them against the questions Google
          publishes for core updates, which are the helpfulness bar of Chapter 5 in checklist
          form: first-hand expertise? original information, reporting, research, or analysis?
          Would a reader trust this? After reading, does someone leave satisfied or do they
          need to keep searching? Then run the intent audit of Chapter 9 on each — very often
          a page “hit by the update” is a page the results page simply stopped rewarding in
          that format. Some sites that dropped with the September 2023 helpful content update
          and then improved content saw partial recoveries through the 2024-2025 core updates —
          recovery is real, slow, and content-earned.
        </P>

        <H2>Step 3: Improve, remove, or consolidate</H2>
        <P>
          Improve: pages with genuine value and fixable gaps get the full treatment — refreshed
          facts, added experience evidence, better structure, honest authorship.
        </P>
        <P>
          Consolidate: overlapping thin pages merge into one strong one, with redirects —
          removing mediocrity raises the site-wide average the helpfulness systems compute.
        </P>
        <P>
          Remove or noindex: content with no path to being the best answer anywhere comes off
          the site. Google’s own core update advice names pruning unhelpful content explicitly.
        </P>

        <H2>Step 4: Wait correctly</H2>
        <P>
          Re-evaluation happens as Google recrawls and reprocesses, and full weight often lands
          with the next core update — Google has said exactly this. The wrong response is a
          redesign or a panic pivot mid-rollout; the right one is measured improvement on a
          months-long cadence, submitted honestly (updated sitemap, URL inspection requests),
          and then patience. Between updates, partial recovery is common for sites that did the
          work.
        </P>

        <Quote dark>
          What never works: Reconsideration requests (no manual action exists to reconsider),
          changing nothing and waiting, buying links to “add authority” mid-recovery, and
          template-swapping titles while keeping the same thin content. Every one of these has
          a documented history of converting a recoverable drop into a permanent one.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Confirm the update with real date-range comparisons before diagnosing anything.",
            "Audit the biggest losers against Google’s own quality questions and the intent audit.",
            "Improve, consolidate, or remove — and pruning is explicitly part of the documented recovery path.",
            "Full recovery often waits for the next core update; partial recovery between updates is common.",
          ]}
        />
      </>
    ),
  },
];