import type { BookSection } from "@/components/book/types";
import { H2, H3, P, UL, LI, Tag, Takeaway, Quote, Step, IconCards, Stats, DataTable, Checklist, Divider, Kicker, BookEndCard, PartSep } from "@/components/book/Blocks";

export const SECTIONS_FULL_PART1: BookSection[] = [
  {
    id: "ch1",
    part: "Part I — How Google Search Actually Works",
    partIndex: 1,
    num: "1",
    title: "The Life of a Query",
    blurb:
      "Every search result is the last step of a pipeline that starts long before anyone types anything — and every ranking problem maps to exactly one stage of it.",
    minutes: 5,
    body: (
      <>
        <P>
          Every search result you have ever seen is the last step of a pipeline that starts
          long before anyone types anything. Understanding that pipeline is the single
          highest-leverage thing a beginner can do, because every ranking problem you will ever
          diagnose — “my page is not indexed,” “my page ranks eighth,” “my page vanished” —
          maps to exactly one stage of it.
        </P>

        <H2>Stage 1: Crawling — finding your pages</H2>
        <P>
          Google discovers pages by following links and by reading previously submitted sitemaps.
          Its crawler, Googlebot, decides which URLs to visit, how often, and how deeply based on
          the page’s perceived importance and the site’s overall quality. Two practical
          consequences follow. First, a page with no internal links pointing to it — an “orphan
          page” — may never be discovered at all. Second, sites that waste crawl budget on
          faceted URLs, parameter duplicates, and calendar traps get their good pages crawled
          less often.
        </P>

        <Quote dark>
          Where beginners lose rankings without knowing it: The most common ranking problem is
          not ranking at all. Ahrefs’ study of its index found that roughly 9 in 10 pages get
          zero traffic from Google. Before optimizing anything, verify the page is crawled and
          indexed: search “site:yourpage” or check the URL Inspection tool in Google Search
          Console.
        </Quote>

        <H2>Stage 2: Rendering and indexing — understanding what you built</H2>
        <P>
          After fetching a page, Google must render it: execute the JavaScript, load images, and
          see what a user sees. Google does render JavaScript, but rendering happens after the
          initial crawl and on a delayed schedule — sometimes days later. Content that exists
          only after heavy client-side JavaScript runs is indexed later, and occasionally
          imperfectly. Then Google parses the rendered page: text, headings, links, structured
          data, and metadata, and stores a distilled representation in the index alongside
          signals about quality, language, and country targeting.
        </P>
        <P>
          Indexing is selective. Google explicitly states that not every crawled page is
          indexed, and inclusion is not a right — it is a judgement that the page holds enough
          value for searchers. Duplicate content, near-empty pages, pages blocked by the noindex
          directive, and low-value pages swamped by better alternatives are routinely kept out.
        </P>

        <H2>Stage 3: Retrieval — building the candidate set</H2>
        <P>
          When a query arrives, Google cannot score the entire web in a quarter second. It first
          retrieves a candidate set — a subset of the index relevant to the query — using an
          inverted index and, increasingly, vector-based retrieval that matches the meaning of
          the query with the meaning of documents rather than just their exact words. In 2025,
          reporting and Google research papers indicated that Google integrated a multi-vector
          retrieval system nicknamed MUVERA into retrieval during the June 2025 core update
          period, a shift toward similarity-based candidate generation. For practitioners the
          message is unchanged: the system’s understanding of relevance has moved decisively
          from keywords to meaning.
        </P>

        <H2>Stage 4: Ranking — the systems layer</H2>
        <P>
          The candidate set, often tens of thousands of pages, is then scored by hundreds of
          signals run through dozens of specialized systems: PageRank for link-based authority,
          BERT and neural matching for language understanding, freshness systems for
          time-sensitive queries, the reviews system for product content, spam systems that
          remove violators, and the broad core ranking systems that weigh them together. There
          is no single “algorithm” — that word is shorthand for a cascading pipeline of systems,
          each with a narrow job, whose outputs combine into the ordered list you see.
        </P>

        <H2>Stage 5: Serving and the results page</H2>
        <P>
          Finally, the ranked results are assembled with the features the query deserves: local
          packs, featured snippets, videos, images, and, increasingly, an AI Overview generated
          by a model that retrieves and summarizes content from the top-ranked sources.
          Localization and personalization (mostly language and region, much less than people
          fear) adjust what is served. The whole journey — keystroke to results — completes in a
          few hundred milliseconds.
        </P>

        <DataTable
          headers={["Stage", "What happens", "What you control"]}
          rows={[
            ["Crawling", "Googlebot fetches URLs via links and sitemaps", "Internal linking, sitemaps, robots.txt, log-file analysis"],
            ["Rendering", "JavaScript executes; the real page is seen", "Server-side or static rendering, critical content in HTML"],
            ["Indexing", "Page content and signals stored selectively", "Unique value, indexable markup, no accidental noindex"],
            ["Retrieval", "Candidate set built for the query", "Topical relevance, meaning-rich content"],
            ["Ranking", "Systems score and order candidates", "Everything in Parts II and III of this book"],
            ["Serving", "Results assembled with SERP features", "Schema, page experience, AI-citable structure"],
          ]}
        />

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Every ranking problem maps to one pipeline stage — diagnose the stage before touching tactics.",
            "Discovery runs on links and sitemaps; orphan pages may never be crawled.",
            "Rendering lags crawling for JavaScript-heavy sites; critical content should be in the HTML.",
            "Indexing is a judgement, not a right — low-value pages are excluded.",
            "Retrieval now works on meaning (vectors), not just keyword match.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch2",
    part: "Part I — How Google Search Actually Works",
    partIndex: 1,
    num: "2",
    title: "The Systems Layer: The Named Systems and the Core",
    blurb:
      "Google publishes an official parts list of the systems behind “the algorithm” — and the pattern that matters most is how mature systems get absorbed into the core.",
    minutes: 5,
    body: (
      <>
        <P>
          Google maintains a public guide, “A guide to Google Search ranking systems,” that
          names the more notable systems in operation. It is the closest thing to an official
          parts list the company has ever published, and it is worth reading the way a mechanic
          reads an engine diagram. Each system has a narrow job; together, applied to every
          query, they are what people call “the algorithm.”
        </P>

        <H2>The working list</H2>
        <P>
          The current named systems include: BERT (language understanding), crisis information
          systems (suicide, addiction, and crisis support), deduplication systems (avoiding
          repeated results), exact match domain systems (limiting the advantage of
          keyword-stuffed domains), freshness systems (serving current content for queries that
          need it), link analysis systems and PageRank (how pages connect), local news systems,
          neural matching (matching query concepts to page concepts), original content systems
          (crediting the source), removal-based demotion systems (downranking sites with many
          takedown requests), page experience, passage ranking (understanding sections of a
          page), the reviews system, RankBrain, reliable information systems (quality in news
          contexts), site diversity (limiting how many results one site shows), spam detection
          systems including SpamBrain, and topic authority systems for news. The full
          quick-reference table with each system’s practical implication is in Appendix A.
        </P>

        <H2>The retired systems — and what their retirements mean</H2>
        <P>
          Four famous systems no longer exist as separate, toggleable systems, because each was
          folded into the core: Panda (2011, thin and duplicate content; merged 2015), Penguin
          (2012, link spam; merged 2016), Hummingbird (2013, meaning-based query understanding;
          evolved into today’s language systems), and the Helpful Content System (2022,
          people-first content; merged into core in March 2024). The pattern is the most
          important insight in this chapter: Google launches a targeted system, tunes it for
          years, and then dissolves it into the baseline so every core update thereafter
          includes it. When SEOs say “Panda is still with us,” this is what they mean — not the
          2011 filter, but its mature logic inside core scoring.
        </P>

        <DataTable
          headers={["System", "Launched", "Targeted", "Absorbed into core"]}
          rows={[
            ["Panda", "2011", "Thin, duplicate, low-value content", "2015"],
            ["Penguin", "2012", "Manipulative link building", "2016 (real-time)"],
            ["Hummingbird", "2013", "Meaning-first query understanding", "Evolved into core language systems"],
            ["Helpful Content System", "2022", "Content made for engines, not people", "March 2024 core update"],
          ]}
        />

        <H2>Page-level first, site-wide second</H2>
        <P>
          Google’s documentation is unusually direct on a question the industry argued about for
          years: ranking is primarily page-level. Individual pages are scored by a variety of
          signals, while site-wide signals and classifiers contribute to the understanding of
          those pages. But the same passage warns in both directions: good site-wide signals do
          not guarantee every page ranks, and poor site-wide signals do not doom every page. The
          2024-2025 updates made this dynamic harsher — strong topical reputation in one area no
          longer carries a site into unrelated areas. Several 2025 analyses documented publishers
          watching their reviews sections underperform when those reviews strayed from the
          site’s core area of reputation.
        </P>

        <H2>Site diversity, dedup, and the rest of the fine print</H2>
        <P>
          A cluster of systems shapes the results page in ways that look like ranking but are
          not. Site diversity (rolled out 2019) usually limits one site to at most two listings
          on a single results page. Deduplication collapses duplicates — including when an
          anchor link on the same page would otherwise repeat. These systems can remove your
          second listing even when your scoring earned it, which is why “we dominate page one”
          strategies measure less than they used to. Meanwhile the exact match domain system, in
          place since 2012, caps the unfair advantage of domains that exactly match a query —
          buying bestrunning.shoes no longer buys you the SERP.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Ranking is a pipeline of specialized systems, not one algorithm — Google documents roughly twenty by name.",
            "Retired systems (Panda, Penguin, Hummingbird, Helpful Content) were absorbed into core, not turned off.",
            "Scoring is page-level first; site-wide signals colour every page but guarantee nothing.",
            "Site diversity and deduplication shape the page independently of scores.",
            "Read Google’s ranking systems guide directly — it is short, official, and stable.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch3",
    part: "Part I — How Google Search Actually Works",
    partIndex: 1,
    num: "3",
    title: "PageRank and the Link Graph",
    blurb:
      "PageRank is the system Google was born with — a web-wide vote in which authority flows through links, split among a page’s outbound links recursively.",
    minutes: 5,
    body: (
      <>
        <P>
          PageRank is the system Google was born with — the idea in Larry Page and Sergey Brin’s
          1998 Stanford paper that made a search engine out of a web-wide vote. It models a
          hypothetical surfer who clicks links at random forever; a page’s PageRank is the
          probability the surfer is on that page at any moment. Pages receive weight from the
          pages linking to them, weighted by those pages’ own importance and divided among their
          outbound links, with a damping factor (0.85 in the original paper) accounting for the
          surfer periodically teleporting to a random page.
        </P>
        <P>
          Two properties of this model still shape every link decision you will make. First, a
          link from a page with few outbound links passes more weight than an equally strong page
          that links out everywhere — the vote is split fewer ways. Second, a link from a page
          that is itself well-linked passes more — authority flows recursively. Google’s own
          documentation confirms PageRank’s continued role: “How PageRank works has evolved a lot
          since then, and it continues to be part of our core ranking systems.”
        </P>

        <H2>What PageRank is not</H2>
        <P>
          The toolbar PageRank you may remember — a public 0-10 score — was killed in 2016, and
          the third-party “authority” or “domain rating” scores sold by SEO tools today are
          estimates that Google says do not correspond to any of its signals. PageRank also has
          no inherent opinion about content quality; it is purely about the link graph. That is
          why link-based authority must be read alongside quality systems, and why a link from a
          high-PageRank page about football helps your football page far more than your medical
          page — relevance of the linking context matters to modern link analysis systems.
        </P>

        <H2>Anchor text and context</H2>
        <P>
          The clickable words of a link — anchor text — have been a relevance signal since the
          beginning, because they describe the target page in someone else’s vocabulary. They are
          also one of the most abused signals in SEO history, which is why Penguin-era
          enforcement made exact-match anchor manipulation a penalty risk. A healthy backlink
          profile has a natural mix: mostly the site name or URL, some partial matches, and only
          a small fraction of keyword-exact anchors. In 2025, an anchor-text distribution that is
          overwhelmingly keyword-exact reads as coordination, and Google’s link spam policies and
          SpamBrain systems are built to catch exactly that pattern.
        </P>

        <H2>How links get devalued today</H2>
        <P>
          Since 2019, Google treats all links it identifies as non-editorial as candidates for
          nofollow-style handling. The rel attributes — nofollow, sponsored, and ugc — let
          publishers declare intent explicitly, and Google extended the treatment algorithmically
          to links it believes are unearned regardless of markup: press releases, widget links,
          comment links, guestbook links, and footer sitewide boilerplate are routinely
          discounted. The practical rule is simple and hard for many site owners: links you can
          place yourself are, by definition, not earned, and Google increasingly ignores them.
        </P>

        <H2>Internal links are PageRank too</H2>
        <P>
          The same mathematics that flows authority across the web flows it within your site.
          Internal links are the only links you fully control, and they are the cheapest
          authority lever available: they distribute weight to your money pages, tell Google
          which pages you consider important, and create the topical clusters that passage
          ranking and neural matching read. A sensible architecture — home page to hub pages to
          detailed content, with contextual cross-links between related articles — does more for
          most small sites than a year of outreach.
        </P>

        <Quote dark>
          The link quality test: Before pursuing any link, ask: would this link exist if search
          engines did not exist? If a real publication would cite this source for its readers, it
          is a real link. If it exists only because a form, a payment, or a software submission
          made it possible, it is a placement — and placements are what Google’s spam systems are
          trained to discount.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "PageRank remains part of core ranking: authority flows through links, split among a page’s outbound links.",
            "Tool “authority” metrics are estimates, not Google signals — use them as direction, not truth.",
            "Anchor text is a relevance signal, but exact-match-heavy profiles read as manipulation.",
            "Self-placed links (nofollow, sponsored, UGC, and their algorithmic equivalents) are discounted.",
            "Internal linking is the PageRank you control completely — architecture is a ranking lever.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch4",
    part: "Part I — How Google Search Actually Works",
    partIndex: 1,
    num: "4",
    title: "Teaching the Machine Language",
    blurb:
      "Since 2013 Google has built systems that understand what queries and pages mean — four milestones rewrote what a well-optimized page looks like.",
    minutes: 5,
    body: (
      <>
        <P>
          For its first fifteen years, Google matched search queries to pages largely as bags of
          words. Since 2013 — and accelerating through the late 2010s AI turn — it has instead
          built systems that understand what queries and pages mean. Four names mark the
          milestones, and each one quietly rewrote what a well-optimized page looks like.
        </P>

        <H2>Hummingbird (2013): meaning enters the query</H2>
        <P>
          Hummingbird rebuilt query understanding around meaning rather than string matching —
          the moment Google stopped looking only for the words you typed and started looking for
          the thing you meant. Its concepts (entities, relationships between words) are the
          ancestors of today’s language systems; it is retired as a name and native to
          everything since.
        </P>

        <H2>RankBrain (2015): the first AI ranking system</H2>
        <P>
          RankBrain was Google’s first machine-learning system used directly in ranking,
          introduced to interpret queries the engine had never seen before — reported at launch
          to affect a meaningful share of them, concentrated in ambiguous and novel phrasings.
          Its job is conceptual bridging: understanding that a query about one thing is served by
          pages about a related thing, even without shared exact words. For practice, RankBrain
          killed the last reason to write for exact keyword matching — if your page genuinely
          covers the concept, related phrasings rank with or without the literal words.
        </P>

        <H2>BERT (2019): prepositions finally matter</H2>
        <P>
          BERT (Bidirectional Encoder Representations from Transformers) understands how
          combinations of words, especially small words like “to” and “for,” change meaning.
          Google reported it affected about 10 percent of US English queries at launch — an
          enormous number by update standards — and it now runs as part of core ranking. The
          classic example: “traveler to USA visa” versus “traveler from USA visa” — prepositions
          that flip intent. BERT is why word order and natural phrasing in headings and content
          genuinely help, and why keyword-stuffed strings actively hurt.
        </P>

        <H2>Neural matching and passage ranking</H2>
        <P>
          Neural matching maps representations of concepts in queries to representations in pages
          — a stronger, learned version of conceptual matching across whole documents. Passage
          ranking (introduced 2021, affecting about 7 percent of queries at launch) goes the
          other direction: it identifies individual sections of a page and scores them for the
          query, so a single excellent section inside a long page can rank for the question it
          answers. Together they reward depth organized under clear headings: pages that answer
          distinct sub-questions under distinct headings give these systems exactly the structure
          they retrieve.
        </P>

        <H2>MUM: powerful, but not your problem</H2>
        <P>
          MUM (Multitask Unified Model), announced in 2021, is a thousand-times-more-capable
          model that can understand and generate language across modalities. Google has stated it
          is not used for general ranking — its confirmed uses are specific improvements such as
          better featured-snippet callouts and certain information panels. It is worth knowing
          only to correct the myth that MUM replaced ranking: it did not.
        </P>

        <DataTable
          headers={["System", "Year", "What it understands", "Practical effect"]}
          rows={[
            ["Hummingbird", "2013", "Query meaning, not just words", "Synonyms and phrasing variations rank naturally"],
            ["RankBrain", "2015", "Novel queries as concepts", "Exact-match keyword density stopped helping"],
            ["BERT", "2019", "How word combinations change meaning", "Natural phrasing and question structure rewarded"],
            ["Neural matching", "2018", "Query concepts to page concepts", "Topical completeness beats keyword repetition"],
            ["Passage ranking", "2021", "Sections of pages", "Answer sub-questions under clear headings"],
          ]}
        />

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Search is semantic: pages rank for meanings, not matched strings.",
            "BERT processes prepositions and order — write like people speak, and structure questions as questions.",
            "Passage ranking means each H2 section should self-containedly answer one sub-query.",
            "MUM is not a general ranking system, whatever the conference slides claim.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch5",
    part: "Part I — How Google Search Actually Works",
    partIndex: 1,
    num: "5",
    title: "The Helpfulness Layer",
    blurb:
      "From the 2022 Helpful Content System to the March 2024 merger into core — what “helpful” measurably means for the pages that lose and win.",
    minutes: 5,
    body: (
      <>
        <P>
          In August 2022 Google launched the Helpful Content System with a blunt classification
          goal: ensure people see original, helpful content written by people, for people —
          rather than content made primarily to gain search-engine traffic. It was a site-wide
          classifier, a signal that tagged a whole domain. By September 2023 the update built on
          it had become one of the most disruptive in years, swallowing large percentages of
          traffic for hundreds of mid-size publishers who had built content the way SEO guides of
          the 2010s recommended.
        </P>

        <H2>March 2024: the merger that changed everything</H2>
        <P>
          The March 2024 core update was the most complex update Google had shipped in years. It
          updated multiple core systems together, took 45 days to roll out, and formally ended
          the Helpful Content System as a separate entity — its logic was absorbed into the core
          ranking systems, where helpfulness is now assessed through “a variety of innovative
          signals and approaches” rather than one classifier. Google stated the update, combined
          with earlier work, would reduce unhelpful, unoriginal content in results by 45 percent.
          The company also published the questions that matter to that assessment, and they have
          stayed remarkably stable: does the content demonstrate first-hand expertise and depth?
          Would you trust this site with your money or your health? After reading it, does
          someone leave feeling satisfied or needing to search again?
        </P>

        <H2>What “helpful” measurably means</H2>
        <P>
          Field evidence across the 2024-2025 updates converged on what loses and what wins.
          Losers: commodity summaries that restate the first page of results without adding
          anything; content that exists only because a keyword has volume; pages where the
          visible answer is thin and the page is padded with FAQ blocks and “conclusion”
          sections; programmatic pages stamped from templates across thousands of city or product
          permutations. Winners: first-hand experience (original photos, tested claims, named
          practitioners), original research and data, and pages that demonstrate what Google’s
          guidelines call “information gain” — something the searcher could not have assembled
          from the existing results.
        </P>

        <Quote dark>
          The information-gain test: Before publishing, search your target query and read the
          current top five results. Write down what a searcher learns from them collectively.
          Then ask, honestly, what your draft adds beyond that list. If the honest answer is “a
          different voice,” the page is competing to be the tenth best version of the same answer
          — and the helpfulness layer is built to decline that trade.
        </Quote>

        <H2>Site-level reputation now has borders</H2>
        <P>
          A harder lesson emerged across 2024-2025: topical scope is enforced. A publisher with
          strong reputation in finance found its sprawling third-party product-review section
          underperforming regardless of the quality of individual reviews, because reputation is
          read as domain-specific. Google’s own guidance for the August 2024 core update
          addressed this directly — if you publish a large volume of content primarily to chase
          search traffic in areas outside your site’s demonstrated expertise, expect the whole
          site’s performance to suffer. The strategic implication for every site, small or large:
          go deep before going broad.
        </P>

        <H2>The reviews system and “experience”</H2>
        <P>
          The reviews system — which periodically updates on its own schedule — rewards reviews
          with insightful analysis, original research, and obvious expertise, written by people
          who know the product category. Its evolution parallels the helpfulness story: in 2023
          Google added the second E to E-E-A-T, Experience, signalling that evidence of having
          actually used the thing being reviewed is a quality signal in its own right. For
          affiliate and ecommerce sites this is the single most important system to satisfy
          honestly: hands-on evidence, original photography, quantified comparisons, and named
          authors with verifiable backgrounds.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Helpfulness is now assessed by core systems through many signals, not one classifier.",
            "March 2024’s target was a 45 percent reduction in unhelpful, unoriginal content.",
            "Information gain — what your page adds beyond existing results — is the practical test.",
            "Topical reputation is domain-specific; unrelated content dilutes rather than supports.",
            "The reviews system rewards demonstrated first-hand experience above recitation of specs.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch6",
    part: "Part I — How Google Search Actually Works",
    partIndex: 1,
    num: "6",
    title: "E-E-A-T: How Google Judges Trust",
    blurb:
      "E-E-A-T is a framework from the Quality Rater Guidelines, not a score — but it is the clearest published statement of what Google’s systems are trained to approximate.",
    minutes: 5,
    body: (
      <>
        <P>
          E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. It is
          not a score, not a direct ranking factor, and Google says so plainly — it is a
          framework used in the Search Quality Rater Guidelines, the ~170-page manual that human
          quality raters use to evaluate whether rating systems are working. But dismissing
          E-E-A-T because it is “indirect” is the most expensive mistake in modern SEO: the
          guidelines are the clearest published statement of what Google’s systems are being
          trained to approximate, and the pages that satisfy raters consistently satisfy the
          machine.
        </P>

        <H2>The four letters, in order of weight</H2>
        <P>
          Trust is the organizing principle of the current guidelines — the other three exist to
          establish it. A trustworthy page is accurate, honest, safe, and transparent: clear
          sourcing, honest about limitations, no hidden commercial intent. Expertise is knowledge
          and skill — evidenced by credentials for formal domains (medical, financial, legal) and
          by demonstrated know-how everywhere else. Authoritativeness is reputation in the wild:
          what other experts and independent sources say about you. Experience — added in
          December 2022 — is the newest and most underrated: evidence that the creator has
          actually done the thing — used the product, visited the place, run the experiment.
        </P>

        <H2>YMYL: where E-E-A-T is enforced hardest</H2>
        <P>
          Your Money or Your Life topics — health, finance, safety, news about civic life — are
          held to the highest standard because harm is possible. For YMYL queries, Google’s
          reliable information systems and topic authority systems push results toward
          established, verifiable institutions, and a no-name page with excellent keywords will
          not crack them. The pragmatic strategy for YMYL-adjacent sites is to bring verifiable
          expertise into the content itself: credentialed authors with biography pages,
          reviewed-by lines linking to those credentials, citations to primary sources, and about
          pages that a skeptic would accept.
        </P>

        <H2>How to evidence each letter on a page</H2>
        <P>
          Experience: original photos of the product in use, screenshots of your own results,
          first-person methodology (“we tested eleven tripods over six weeks”), dates and
          specifics that only a participant would know.
        </P>
        <P>
          Expertise: author bylines with real biography pages, credentials and publications
          linked, reviewed-by lines for medical and financial content, technical depth that shows
          rather than claims knowledge.
        </P>
        <P>
          Authoritativeness: consistent entity information across the web — the same organization
          name, same founder names, same facts on your site, LinkedIn, Crunchbase, Wikipedia if
          earned — plus citations and mentions from publications in your niche.
        </P>
        <P>
          Trustworthiness: visible contact information, honest disclosure of affiliations and
          sponsorships, sourced claims with dates, HTTPS, a privacy policy, and a track record of
          correcting errors.
        </P>

        <H2>What E-E-A-T is not</H2>
        <P>
          E-E-A-T is not a checkbox and there is no E-E-A-T score. Adding an author box does not
          “add E-E-A-T points”; it removes one of the reasons a rater — or a language model
          trained on rater judgements — would distrust the page. The right mental model is a
          skeptical reader audit: hand your page to a critical stranger in your target audience
          and ask whether they would act on its advice with money or health on the line. Every
          element that survives that audit is E-E-A-T work.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "E-E-A-T is a framework from the Quality Rater Guidelines, not a direct ranking score — but it describes what the systems approximate.",
            "Trust is the anchor; the other three letters are evidence for it.",
            "YMYL topics face the highest bar; verifiable credentials and institutional signals matter most there.",
            "Experience (the second E, added 2022) is the cheapest differentiator for independent sites.",
            "Audit pages as a skeptical stranger would — that is the entire method.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch7",
    part: "Part I — How Google Search Actually Works",
    partIndex: 1,
    num: "7",
    title: "The Hidden Layer: NavBoost and Click Signals",
    blurb:
      "Click satisfaction became documented, under oath, in the antitrust trial — NavBoost re-ranks results on the history of what searchers actually do with them.",
    minutes: 5,
    body: (
      <>
        <P>
          For two decades, Google’s public answer to “do clicks affect rankings?” was a careful
          “we use many signals.” That ended in 2023-2024, in a federal courtroom. During the
          United States v. Google antitrust trial, Google’s own VP of Search, Pandu Nayak,
          testified under oath about NavBoost — a re-ranking system he called “one of the
          important signals that we have” — and trial exhibits described its mechanics in detail.
          Nothing in this chapter comes from a blog post; all of it comes from testimony and
          exhibits entered into the court record.
        </P>

        <H2>What NavBoost does</H2>
        <P>
          NavBoost re-ranks the candidate set after initial scoring, using historical user
          behaviour with the results. It aggregates clicks over a rolling window — 13 months in
          the current implementation, 18 months before 2017 — and distinguishes between:
          goodClicks, where the user clicks a result and does not come back, implying
          satisfaction; badClicks, where the user clicks and quickly returns to the results page
          (“pogo-sticking”), implying dissatisfaction; and lastLongestClicks, the final result a
          user settled on in a session. A page that satisfies searchers accumulates positive
          weight; a page that repeatedly disappoints accumulates the opposite.
        </P>

        <H2>The Chrome dimension</H2>
        <P>
          Trial exhibits confirmed a separate popularity signal derived from Chrome browser data
          — metrics with names like chrome_trans_clicks and uniqueChromeViews feeding the same
          family of systems. With Chrome holding roughly two-thirds of the browser market, Google
          has a behavioural panel most of the industry never internalized: popularity and
          satisfaction signals independent of the search results page itself. A related exhibit
          described “site2queries”-style aggregation: how many queries a site has gained or lost
          visibility for, a site-level view of performance feeding demotion decisions for
          consistently unsatisfying sites.
        </P>

        <H2>Why this reframes SEO strategy</H2>
        <P>
          If clicks and satisfaction re-rank results, then the ranking you can see is partly a{" "}
          <em>consequence</em> of how satisfying searchers find the results — a feedback loop,
          not a static scorecard. Three practical consequences follow. First, titles and
          descriptions are ranking instruments: they set expectations, and pages that over-promise
          collect badClicks. Second, pogo-sticking is diagnostic: if analytics shows searchers
          returning quickly from your top pages, you are training the system against yourself
          regardless of your content quality. Third, the best link-building and content strategies
          were already NavBoost strategies — digital PR that sends real humans to genuinely useful
          pages generates the exact behavioural pattern NavBoost rewards.
        </P>

        <Quote dark>
          Do not try to fake clicks: Every few years a service sells “click bots” that simulate
          user engagement. Google’s countermeasures are precisely what you would expect from a
          company that logs every click with timestamps and patterns at planetary scale: filtering
          of anomalous click patterns, deduplication, and spam systems that treat coordinated
          engagement manipulation as an attack. NavBoost is a reason to make real people
          satisfied, not a vector to exploit.
        </Quote>

        <H2>The honest caveat</H2>
        <P>
          Court testimony describes systems as they existed at trial time; Google does not publish
          NavBoost’s current parameters, and its engineers have described ongoing work against
          click fraud and engagement manipulation. Treat this chapter as the strongest available
          evidence of a layer that was long denied — and as strategic direction (satisfy the
          searcher completely) rather than a specification to game.
        </P>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "NavBoost re-ranks results using historical click satisfaction (goodClicks, badClicks, lastLongestClicks) over a ~13-month window.",
            "Chrome supplies independent popularity signals (chrome_trans_clicks, uniqueChromeViews).",
            "Titles that over-promise generate badClicks — expectation-setting is a ranking concern.",
            "Pogo-sticking is measurable in your own analytics and is a recovery signal to fix.",
            "Make searchers satisfied: the behavioural loop is now documented, under oath.",
          ]}
        />
      </>
    ),
  },
  {
    id: "ch8",
    part: "Part I — How Google Search Actually Works",
    partIndex: 1,
    num: "8",
    title: "Page Experience and Core Web Vitals",
    blurb:
      "Page experience is a tie-breaker among equals — but fast pages are measurably more likely to be cited by AI Overviews, and slow pages bleed conversions long before rankings.",
    minutes: 5,
    body: (
      <>
        <P>
          Page experience is Google’s umbrella for the set of signals that describe how pleasant a
          page is to land on: HTTPS, no intrusive interstitials, safe browsing,
          mobile-friendliness, and the Core Web Vitals. Google has been consistent about its
          weight in the overall decision: it is a tie-breaker among pages that are otherwise
          similarly relevant and good, not a primary ranker. But 2024-2025 changed the practical
          picture — Core Web Vitals failures now cost more than rankings, because fast pages are
          measurably more likely to be cited by AI Overviews, and slow pages bleed conversions
          long before rankings.
        </P>

        <H2>The three vitals that matter</H2>
        <P>
          LCP (Largest Contentful Paint) measures loading: the largest above-the-fold element
          (usually the hero image or headline block) must render within 2.5 seconds at the 75th
          percentile of real-user visits. INP (Interaction to Next Paint) measures responsiveness
          end-to-end: the median latency between any user tap and the next visual response must be
          200 ms or less. INP replaced FID (First Input Delay) in March 2024 as the responsiveness
          metric, and it is harder — it samples all interactions over the page lifetime, not just
          the first one. CLS (Cumulative Layout Shift) measures visual stability: elements jumping
          as ads, images, or fonts load accumulate shifts, and pages must stay under 0.1.
        </P>

        <DataTable
          headers={["Vital", "Measures", "Good", "Needs improvement", "Poor"]}
          rows={[
            ["LCP", "Loading (largest element paints)", "2.5 s or less", "2.5-4.0 s", "> 4.0 s"],
            ["INP", "Interaction responsiveness", "200 ms or less", "200-500 ms", "> 500 ms"],
            ["CLS", "Visual stability (layout shift)", "0.1 or less", "0.1-0.25", "> 0.25"],
          ]}
        />

        <P>
          All three are measured from real users in the Chrome User Experience Report (CrUX), not
          lab tests — your scores are the experience of your actual visitors, on their devices and
          networks, most of which are mid-range Android phones on mediocre connections. Optimize
          for that reality, not for your laptop.
        </P>

        <H2>What actually moves each metric</H2>
        <P>
          LCP: compress and serve hero images in modern formats (WebP/AVIF) with explicit
          dimensions, preload the LCP image, eliminate render-blocking chains, use a CDN, and put
          critical CSS inline.
        </P>
        <P>
          INP: break up long JavaScript tasks (any task over 50 ms blocks the main thread), defer
          third-party scripts, avoid heavy hydration frameworks on interactive pages, and use
          content-visibility for long lists.
        </P>
        <P>
          CLS: always set width and height (or aspect-ratio) on images and embeds, reserve space
          for ads and dynamic content, avoid inserting banners above existing content, and match
          font fallback metrics (font-display: optional plus size-adjust).
        </P>

        <H2>Intrusive interstitials and mobile</H2>
        <P>
          The page experience systems also penalize intrusive interstitials — full-screen popups
          and dialogs that block content on mobile landing pages — and they reward HTTPS
          everywhere. Neither is new, but both interact with the AI era: AI Overviews synthesize
          from pages that load cleanly for the crawler and the reader, and interstitials are one
          more reason a model retrieving your content sees a degraded version of it.
        </P>

        <Quote dark>
          The realistic weight of page experience: Do not expect a CWV fix alone to lift rankings
          against better content — Google’s own documentation frames page experience as a
          tie-breaker. Expect it to protect rankings you have earned, to convert the traffic you
          already get (fast pages convert better at every studied threshold), and to keep you
          eligible for AI citation, where independent analyses have found fast pages cited
          disproportionately.
        </Quote>

        <H3>Key takeaways</H3>
        <Checklist
          items={[
            "Core Web Vitals: LCP 2.5 s or less, INP 200 ms or less, CLS 0.1 or less, at the 75th percentile of real users.",
            "INP replaced FID in March 2024 and measures all interactions, not just the first.",
            "Scores come from real Chrome users (CrUX) — test on mid-range devices, not developer laptops.",
            "Page experience is a tie-breaker among equals, not a primary ranking factor.",
            "Fast pages have a second life as AI citation assets.",
          ]}
        />
      </>
    ),
  },
];