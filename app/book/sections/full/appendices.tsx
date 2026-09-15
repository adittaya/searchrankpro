import type { BookSection } from "@/components/book/types";
import { H2, H3, P, UL, LI, Checklist, DataTable, Quote } from "@/components/book/Blocks";

export const SECTIONS_FULL_APPX: BookSection[] = [
  {
    id: "appxA",
    part: "Appendices",
    partIndex: 8,
    num: "A",
    title: "Appendix A: The Named Ranking Systems - Quick Reference",
    blurb:
      "Run this appendix like a REST lookup: find the system, read its one-line implication, and apply it to your pages.",
    minutes: 3,
    body: (
      <>
        <P>
          Google’s public ranking-systems guide names the notable systems in
          operation. This table pairs each with its practical implication —
          the one-line answer to “what does this system mean for my
          pages?” Systems absorbed into core are listed as historical
          context.
        </P>
        <DataTable
          headers={["System", "What it does", "What you do about it"]}
          rows={[
            ["BERT", "Understands how word combinations express intent", "Write naturally; structure questions as questions"],
            ["Core ranking systems", "The underlying engines producing results", "Everything in this book"],
            ["Crisis information systems", "Surfaces suicide/crisis help when needed", "Publish responsibly; never joke about self-harm queries"],
            ["Deduplication systems", "Avoids duplicated results and anchors", "One canonical page per topic; no near-duplicate sprawl"],
            ["Exact match domain systems", "Limits keyword-domain advantage", "Brand over keyword domains"],
            ["Freshness systems", "Boosts current content for fresh-seeking queries", "Refresh programmes; honest dates; dateModified accuracy"],
            ["Link analysis / PageRank", "Scores pages by the link graph", "Earn editorial links; engineer internal linking"],
            ["Local news systems", "Surfaces relevant local publications", "Local relevance signals for news publishers"],
            ["Neural matching", "Matches query concepts to page concepts", "Topical completeness over keyword coverage"],
            ["Original content systems", "Credits first sources over scrapers", "Publish first, syndicate carefully with canonicals"],
            ["Page experience", "Rewards good UX (CWV, HTTPS, interstitials)", "Hit LCP/INP/CLS thresholds; no intrusive popups"],
            ["Passage ranking", "Ranks sections of pages", "H2-level self-contained answers"],
            ["Reviews system", "Rewards deep, experienced reviews", "Hands-on evidence; original testing; named experts"],
            ["RankBrain", "Maps ambiguous queries to concepts", "Concept coverage; stop keyword math"],
            ["Reliable information systems", "Prioritizes quality for news contexts", "Cite primary sources; build topical authority"],
            ["Site diversity systems", "Caps multiple listings per site", "Diversify presence across brands/formats"],
            ["Spam detection / SpamBrain", "Fights policy-violating content and links", "Stay within published spam policies"],
            ["Topic authority systems", "Surfaces authoritative sources in niches", "Deep, consistent coverage of your beat"],
            ["[Absorbed] Panda", "Thin/duplicate content (merged 2015)", "Unique value on every page"],
            ["[Absorbed] Penguin", "Link spam (merged 2016)", "No bought or exchanged links"],
            ["[Absorbed] Hummingbird", "Meaning-first understanding (2013)", "Semantic writing"],
            ["[Absorbed] Helpful Content System", "People-first classification (merged 2024)", "Information gain; no content-for-engines"],
          ]}
        />
      </>
    ),
  },

  {
    id: "appxB",
    part: "Appendices",
    partIndex: 8,
    num: "B",
    title: "Appendix B: Technical SEO Audit Checklist",
    blurb:
      "A quarterly pass/fail audit of the technical essentials — indexation, architecture, rendering, content, and more. Fixes get tickets.",
    minutes: 6,
    body: (
      <>
        <P>
          Run quarterly, and after any major site change. Each item is pass/fail;
          failures get tickets, not notes.
        </P>
        <H3>Indexation</H3>
        <Checklist
          items={[
            "Search Console connected, verified, and receiving data; sitemap submitted and clean.",
            "No accidental noindex, robots.txt blocks, or X-Robots-Tag headers on important pages.",
            "Canonicals: every indexable page self-references; parameter/print/syndication duplicates handled.",
            "Indexation state reviewed: “crawled - not indexed” and “discovered - not indexed” investigated for quality or crawl-budget causes.",
            "Soft 404s (200-status empty pages) identified and fixed.",
          ]}
        />
        <H3>Crawling and architecture</H3>
        <Checklist
          items={[
            "Every important page reachable within three clicks of the home page; no orphans.",
            "Faceted/parameter URLs controlled; internal search pages crawl-blocked.",
            "Log files (or GSC crawl stats) reviewed: Googlebot is fetching what matters.",
            "Broken links and redirect chains (301-to-301) eliminated; 404s return proper codes.",
            "hreflang clusters complete and reciprocal for multilingual sites.",
          ]}
        />
        <H3>Rendering and mobile</H3>
        <Checklist
          items={[
            "Critical content present in rendered HTML; heavy-JS pages checked in the URL Inspection rendered view.",
            "Mobile rendering is the primary version — mobile parity checked page by page for key templates.",
            "Intrusive interstitials absent on mobile landing pages.",
          ]}
        />
        <H3>Performance and security</H3>
        <Checklist
          items={[
            "LCP 2.5 s or less, INP 200 ms or less, CLS 0.1 or less, at the 75th percentile (Search Console CWV report).",
            "HTTPS everywhere; no mixed content; HTTP 301s to HTTPS.",
            "Images compressed, sized, and in modern formats; hero assets preloaded.",
            "Third-party scripts audited quarterly — each one earns its latency.",
          ]}
        />
        <H3>Content and structured data</H3>
        <Checklist
          items={[
            "Schema valid for every template type (Article, Product, LocalBusiness, Organization); validated post-deploy.",
            "Title tags unique and specific; meta descriptions present for money pages.",
            "Headings hierarchical and descriptive; one H1 per page.",
            "No doorways, no templated thin pages at scale; internal links to and from every cluster article.",
          ]}
        />
      </>
    ),
  },

  {
    id: "appxC",
    part: "Appendices",
    partIndex: 8,
    num: "C",
    title: "Appendix C: Core Update Recovery Checklist",
    blurb:
      "The Chapter 22 recovery procedure condensed to a checklist — confirm, compare, classify, and act on the five biggest losers.",
    minutes: 5,
    body: (
      <>
        <P>
          The procedure from Chapter 22, condensed to the checklist. Work top to
          bottom; skip nothing.
        </P>
        <Checklist
          items={[
            "Confirm the update and its window via the Search Status Dashboard.",
            "Compare Search Console date ranges: two weeks before versus after rollout — clicks, impressions, position by page and query.",
            "Classify the hit: sitewide, section, or page-specific.",
            "Rule out technical causes first (indexation drops, noindex releases, canonical regressions).",
            "Audit the five biggest losers against Google’s core-update quality questions.",
            "Run the intent audit on each loser: does the page’s format match what the query rewards now?",
            "Decide per page: improve (refresh, evidence, structure), consolidate (merge + redirect), or remove (404/410).",
            "Prune unhelpful content sitewide — including old programmatic pages.",
            "Refresh honestly: facts, dates, added value, authorship — never re-date without substance.",
            "Resubmit sitemaps; request indexing for improved URLs.",
            "Document the changes and the baseline; wait for re-evaluation (weeks to the next core update).",
            "Between updates, measure partial recovery monthly and keep improving — do not pivot to link buying or panic redesigns.",
          ]}
        />
      </>
    ),
  },

  {
    id: "appxD",
    part: "Appendices",
    partIndex: 8,
    num: "D",
    title: "Appendix D: Glossary",
    blurb:
      "Key terms and definitions used throughout the playbook, from AI Mode to Zero-click search.",
    minutes: 6,
    body: (
      <>
        <DataTable
          headers={["Term", "Meaning"]}
          rows={[
            ["AI Mode", "Google’s conversational search interface with follow-up questions and multimodal input, expanded globally in 2025"],
            ["AI Overview", "Google’s AI-generated answer panel above organic results"],
            ["Anchor text", "The clickable words of a hyperlink; a relevance signal"],
            ["Backlink", "A link from another site to yours"],
            ["BERT", "Language model helping Google understand word-combination meaning (2019)"],
            ["Canonical", "The declared authoritative version of a page among duplicates"],
            ["CLS", "Cumulative Layout Shift; visual stability metric"],
            ["Core update", "Periodic broad recalibration of Google’s ranking systems"],
            ["Core Web Vitals", "LCP, INP, CLS — user experience metrics from real Chrome data"],
            ["Crawl budget", "How many URLs Googlebot fetches per visit on your site"],
            ["CrUX", "Chrome User Experience Report; the field data source for CWV"],
            ["E-E-A-T", "Experience, Expertise, Authoritativeness, Trustworthiness framework"],
            ["Entity", "A distinct, identifiable thing (person, org, product) in Google’s knowledge systems"],
            ["Fan-out", "AI retrieval generating multiple related searches for one query"],
            ["Featured snippet", "Extracted answer shown above organic results"],
            ["GEO", "Generative Engine Optimization; earning citations in AI answers"],
            ["Hreflang", "Annotation declaring language/region alternatives of a page"],
            ["Information gain", "The new value a page adds beyond existing results"],
            ["INP", "Interaction to Next Paint; responsiveness metric (replaced FID, March 2024)"],
            ["LCP", "Largest Contentful Paint; loading metric"],
            ["Map pack / local pack", "Three-listing local results block on local queries"],
            ["MUM", "Multitask Unified Model; powerful but not used for general ranking"],
            ["NavBoost", "Click-satisfaction re-ranking system revealed in antitrust testimony"],
            ["NAP", "Name, Address, Phone — local business identity consistency"],
            ["Orphan page", "Page with no internal links to it"],
            ["PageRank", "Google’s link-graph authority system from 1998, still part of core"],
            ["Passage ranking", "Scoring sections of a page for queries (2021)"],
            ["Pogo-sticking", "Clicking a result and quickly returning to the SERP"],
            ["Query fan-out", "See fan-out"],
            ["RAG", "Retrieval-augmented generation; AI answers grounded in retrieved pages"],
            ["RankBrain", "Google’s first ML ranking system (2015); concept mapping"],
            ["Robots.txt", "File controlling crawler access"],
            ["SERP", "Search engine results page"],
            ["Site diversity", "Limiting one domain to ~2 listings per SERP"],
            ["SpamBrain", "Google’s ML spam-detection system"],
            ["Structured data / schema", "Machine-readable page annotation (JSON-LD)"],
            ["Topical authority", "Recognized depth of expertise in a subject area"],
            ["YMYL", "Your Money or Your Life; high-stakes topics held to highest quality bar"],
            ["Zero-click search", "A search session ending without a click on an external site"],
          ]}
        />
      </>
    ),
  },

  {
    id: "appxE",
    part: "Appendices",
    partIndex: 8,
    num: "E",
    title: "Appendix E: The Symptom-to-Action Troubleshooter",
    blurb:
      "Find your symptom in the left column, apply the diagnosis and action, and follow the chapter reference for depth.",
    minutes: 5,
    body: (
      <>
        <P>
          Knowledge becomes valuable the moment it answers “what do I do
          TODAY?” This appendix converts the entire book into a decision
          table: find your symptom in the left column, apply the diagnosis and
          action in the middle, and follow the chapter reference for depth.
          Bookmark this page — it is the execution half of the playbook.
        </P>
        <DataTable
          headers={["Symptom", "Most likely cause", "Do this now", "Deep dive"]}
          rows={[
            ["Page not indexed", "Crawl block, noindex, or quality triage", "URL Inspection in Search Console: check robots.txt, noindex, canonical. Request indexing. If ‘discovered - not indexed’: it is a quality or crawl-budget verdict, not a bug", "Ch 17"],
            ["Indexed, but zero impressions", "No topical relevance or orphaned page", "Run the intent audit; verify the page is internally linked and belongs to a mapped cluster", "Ch 9, 15"],
            ["Impressions, but no clicks", "Title/description promise mismatch", "Rewrite the title for the query’s exact intent; write a per-page description; check whether an AI Overview absorbs the click", "Ch 16, 23"],
            ["Stuck at position 5–15", "Authority constraint, not content", "Stop publishing. Start earning: publish one original data asset and run its distribution", "Ch 10, 20"],
            ["Dropped after a core update", "Recalibration of quality weights", "Run the recovery checklist: compare date ranges, audit the five biggest losers, improve or consolidate or remove", "Ch 22, App C"],
            ["Traffic declining for months", "Content decay", "Add the pages to the quarterly refresh: update facts, add missing sub-questions, re-submit", "Ch 11"],
            ["Two of my pages compete for one query", "Keyword cannibalization", "Consolidate into the stronger page with a 301, or differentiate the intents explicitly; point all internal anchors at one URL", "Ch 15, 17"],
            ["Core Web Vitals failing on mobile", "Heavy hero asset, third-party scripts, layout shift", "Run the LCP/INP/CLS playbooks in order; audit from field data, not your laptop", "Ch 18"],
            ["A worse page outranks mine", "Authority and entity gap, or older satisfaction history", "Check their links, mentions, brand search, and freshness; strengthen yours before suspecting the algorithm", "Ch 7, 10"],
            ["Not cited in AI Overviews", "Not in the candidate pool, or not extractable", "Rank first (candidates come from Search); then answer capsules under question headings, FAQ structure, cited statistics", "Ch 23, 24"],
            ["Site vanished entirely", "Manual action or technical catastrophe", "Search Console: manual actions report; then check for an accidental robots.txt block or noindex release in a deploy", "Ch 13, 17"],
            ["Missing from the local pack", "Profile, proximity, or prominence gap", "GBP category and completeness audit; review velocity and responses; NAP consistency sweep", "Ch 12, 21"],
            ["Sudden spike of unknown traffic", "Bot traffic or a viral mention", "Check referral and direct segments; verify in server logs before acting on ‘growth’", "Ch 27"],
            ["Everything flat despite effort", "Wrong niche scope or unrealistic timeline", "Re-run the specialization questions; small sites in YMYL-heavy niches need years or a narrower beat", "Ch 30, 31"],
          ]}
        />
        <Quote dark>
          The discipline of diagnosis: Apply exactly one fix, wait for one
          crawl-and-reassessment cycle (two to six weeks for most sites), then
          re-measure. Stacking five changes at once is the fastest way to learn
          nothing.
        </Quote>
      </>
    ),
  },

  {
    id: "appxF",
    part: "Appendices",
    partIndex: 8,
    num: "F",
    title: "Appendix F: Ready-to-Use Templates",
    blurb:
      "The four day-to-day templates — the answer-first article skeleton, content brief, internal-linking blueprint, and outreach email.",
    minutes: 8,
    body: (
      <>
        <P>
          The four templates that carry most of the daily work. Copy them, adapt
          the wording, keep the structure — the structure is what the
          systems read.
        </P>

        <H3>The article skeleton (answer-first)</H3>
        <P>
          Title: [Exact question or outcome the searcher wants] — specific,
          honest, includes the format if it is a comparison or list.
        </P>
        <P>
          First 100 words: the direct answer to the title question. No preamble,
          no “in today’s world”. A reader who stops here still
          leaves satisfied.
        </P>
        <P>
          Body: one H2 per sub-question. Each H2 opens with a 40–80 word
          self-contained answer capsule, then expands with evidence, examples,
          and caveats.
        </P>
        <P>
          Experience block: original photos, tested numbers, or methodology
          — placed where a skeptic would look for proof.
        </P>
        <P>
          FAQ section: 3–6 genuine follow-up questions, each answered in
          50–150 words with a capsule structure.
        </P>
        <P>
          Authorship: byline linking to a real biography page with credentials
          and sameAs links.
        </P>

        <H3>The content brief (fill in before writing)</H3>
        <P>
          Target query and its intent: ______ Dominant format of the current top
          five: ______
        </P>
        <P>
          The one thing this page adds beyond those five (information gain): ______
        </P>
        <P>
          Experience evidence we will include: ______ Original number or data
          point: ______
        </P>
        <P>
          Cluster this belongs to, and the 3+ pages it must link to and from: ______
        </P>
        <P>
          The follow-up questions searchers will have (FAQ seeds): ______
        </P>
        <P>
          Definition of done: passes the skeptic audit, capsule under every H2,
          author credited.
        </P>

        <H3>The internal linking blueprint</H3>
        <P>
          Every new article links to its pillar page in the first or second
          paragraph, and to at least two sibling articles in context.
        </P>
        <P>
          Every pillar links to every child; every child links back to the
          pillar with consistent anchor phrasing.
        </P>
        <P>
          One page per intent: all internal anchors for a given target query
          point at a single URL.
        </P>
        <P>
          Descriptive anchors, not “click here” — the anchor is
          a relevance signal for the destination (Ch 3).
        </P>
        <P>
          Monthly pass: every new article strengthens three older ones; every
          refresh earns links from its freshest siblings.
        </P>

        <H3>The digital PR pitch email</H3>
        <P>
          Subject: the finding, not the ask — “We tested 14 hand
          grinders across 800 shots; one result surprised us”.
        </P>
        <P>
          Line 1: why this writer specifically — reference their relevant
          recent piece.
        </P>
        <P>
          Line 2–3: the finding in one sentence with the number, and the
          one-line methodology.
        </P>
        <P>
          Line 4: the asset link and the offer (data, quotes, custom cuts of
          the data).
        </P>
        <P>
          Sign-off: a real person with a real credential. No attachments, no
          follow-up guilt trips.
        </P>

        <H3>The quarterly refresh SOP</H3>
        <P>
          Pull the top 10 declining pages from Search Console (clicks, 3 months
          vs prior 3 months).
        </P>
        <P>
          For each: re-run the intent audit; note questions the page now shows
          for but does not answer.
        </P>
        <P>
          Update facts, numbers, screenshots, and dates — honestly (Ch
          11).
        </P>
        <P>
          Add the missing sub-sections as H2s with capsule answers; strengthen
          the experience evidence.
        </P>
        <P>
          Fix any CWV regressions while the page is open; verify canonical and
          schema.
        </P>
        <P>
          Re-submit via URL Inspection; record the refresh date in the content
          tracker.
        </P>

        <H2>Sources and Further Reading</H2>
        <P>
          This book separates three tiers of evidence: Google’s own
          documentation, sworn testimony and exhibits from United States v.
          Google, and independent industry research. The primary sources below
          are where the claims in this book come from; read them yourself before
          repeating any specific number.
        </P>
        <H3>Google’s own documentation</H3>
        <UL>
          <LI>
            A Guide to Google Search Ranking Systems
            — developers.google.com/search/docs/appearance/ranking-systems-guide
          </LI>
          <LI>
            How Search Works (crawl, index, serve)
            — google.com/search/howsearchworks
          </LI>
          <LI>
            Creating helpful, reliable, people-first content
            — developers.google.com/search/docs/fundamentals/creating-helpful-content
          </LI>
          <LI>
            Search Quality Rater Guidelines
            — guidelines.google.com/searchqualityevaluatorguidelines
          </LI>
          <LI>
            Core updates: what creators should know
            — developers.google.com/search/docs/core-updates
          </LI>
          <LI>
            Spam policies
            — developers.google.com/search/docs/essentials/spam-policies
          </LI>
          <LI>
            Optimizing for AI features in Search (AI Overviews, AI Mode)
            — developers.google.com/search/docs/fundamentals/ai-optimization-guide
          </LI>
          <LI>
            What creators should know about the March 2024 core update and spam
            policies — Google Search Central Blog, March 5, 2024
          </LI>
          <LI>
            Google Search Central Blog, all algorithm announcements
            — developers.google.com/search/blog
          </LI>
          <LI>
            Google Search Status Dashboard
            — status.search.google.com
          </LI>
        </UL>
        <H3>Antitrust-trial material (NavBoost and click signals)</H3>
        <UL>
          <LI>
            United States v. Google LLC (2023–2024), trial testimony of
            Pandu Nayak (VP of Search) and associated trial exhibits describing
            NavBoost, goodClicks/badClicks/lastLongestClicks, site2queries, and
            Chrome-derived signals.
          </LI>
          <LI>
            Analyses of the trial exhibits by industry researchers (LARRY Change
            Engineers memo, Mike King’s coverage of the leaked documents)
            — read as secondary interpretation.
          </LI>
        </UL>
        <H3>Independent research and reporting</H3>
        <UL>
          <LI>
            Search Engine Land — Google algorithm updates, complete history
            and 2025-in-review coverage.
          </LI>
          <LI>
            Aggarwal et al., “GEO: Generative Engine Optimization”
            (Princeton, Allen Institute for AI, IIT Delhi, 2023) — the
            citation-tactics experiments.
          </LI>
          <LI>
            SparkToro — zero-click search studies.
          </LI>
          <LI>
            Pew Research Center — field studies on AI summaries and click
            behaviour.
          </LI>
          <LI>
            Ahrefs, Semrush, seoClarity, and Seer Interactive analyses of AI
            Overview citation sources (2025–2026).
          </LI>
          <LI>
            Backlinko / Advanced Web Ranking — organic click-through-rate
            studies by position.
          </LI>
          <LI>
            Glenn Gabe (G-Squared Interactive) and Lily Ray —
            core-update impact analyses.
          </LI>
          <LI>
            AirOps and industry GEO studies (2025–2026) — freshness
            and AI citation correlations.
          </LI>
        </UL>
        <H3>A final note on freshness</H3>
        <P>
          Everything specific in this book — update counts, feature
          availability, percentages — was accurate as of the 2026
          edition’s research window (late 2025 unless otherwise noted).
          Search moves faster than any book. For current state, the Search
          Status Dashboard and Search Central Blog are the sources of record;
          treat everything else, including this book, as a well-sourced snapshot.
        </P>

        <H3>The Google Search Ranking Playbook</H3>
        <P>By H. Aditya</P>
        <P>
          Thank you for reading. If this book helped you understand how search
          really works, let it work for you: fix the machines’ reasons to
          ignore you, become the best honest answer in a small set of topics,
          make that answer extractable — and tell the people who cite
          things why it deserves citing.
        </P>
        <P>
          The Google Search Ranking Playbook — 2026 Edition.
        </P>
        <P>Written by H. Aditya. All rights reserved.</P>
        <P>
          This edition was compiled from Google’s public documentation,
          sworn testimony in United States v. Google LLC, and published
          independent research, as of the research window closing in late 2025.
        </P>
        <P>
          Disclaimer: This book is educational material, not legal, financial, or
          professional advice, and it is not affiliated with or endorsed by
          Google. Ranking systems change without notice; verify time-sensitive
          claims against Google’s official documentation. Product and
          company names are the trademarks of their respective owners.
        </P>
      </>
    ),
  },
];
