import type { BookSection } from "@/components/book/types";
import { H2, H3, P, UL, LI, Tag, Takeaway, Quote, Step, IconCards, Stats, DataTable, Checklist, Divider, Kicker, BookEndCard, PartSep } from "@/components/book/Blocks";

export const SECTIONS_FULL_INTRO: BookSection[] = [
  {
    id: "intro",
    part: "Introduction",
    partIndex: 0,
    num: "",
    title: "Introduction: Why This Book Exists",
    blurb:
      "An honest, plain-language guide to how Google actually decides which pages get seen — with what is documented, what came out in a courtroom, and what is folklore clearly labelled.",
    minutes: 5,
    body: (
      <>
        <P>
          Every day, billions of people type a question into Google, and the same handful of
          pages get seen while everyone else gets ignored. This book explains how that decision
          is actually made — in plain language, with nothing invented. Where Google has
          documented something, we cite it. Where it only came out in a courtroom, we say so.
          Where something is just industry folklore, we label it as folklore.
        </P>

        <P>
          You do not need a computer science degree or any marketing background to read this.
          Every chapter starts with the idea, builds the detail on top, and ends with a short
          “key takeaways” card you can revise from before an interview, a client meeting, or an
          exam. If a term is new to you, check the glossary in Appendix D — it has every term in
          this book in one line each.
        </P>

        <H3>What you will learn</H3>
        <UL>
          <LI>
            How Google turns a search into a results page: crawling, indexing, retrieval, and
            the systems that score pages.
          </LI>
          <LI>
            The named ranking systems — PageRank, BERT, RankBrain, neural matching, passage
            ranking and more — and what each means for your pages.
          </LI>
          <LI>
            The hidden layer Google never advertised: NavBoost, click satisfaction, and what the
            antitrust trial revealed.
          </LI>
          <LI>
            How helpfulness, E-E-A-T, and page-level versus site-wide quality decide who
            survives a core update.
          </LI>
          <LI>
            The practical stack: topic research, people-first content, technical SEO, Core Web
            Vitals, schema, and earning links.
          </LI>
          <LI>
            The AI search era: AI Overviews, AI Mode, and how to become the source AI answers
            cite.
          </LI>
          <LI>
            A 12-month roadmap with phases, milestones, and decision gates, plus playbooks for
            the major content niches.
          </LI>
        </UL>

        <H3>How to use this book</H3>
        <P>
          The book moves in seven parts, each building on the one before it. Part I explains the
          machine. Part II is a reference on the signals that matter. Part III is the hands-on
          practice. Part IV covers AI search. Part V turns it into a plan, Part VI stretches
          that into a twelve-month roadmap, and Part VII applies everything to specific niches
          with a full worked example.
        </P>
        <P>
          If you are a student or a complete beginner, you are the reader this edition was
          revised for. Read Parts I and II slowly — they give you the mental model that makes
          everything else click. Do not skip the Key Takeaways cards; they are the revision
          layer. When you reach Part III, pick one small project (a free blog works) and do the
          exercises as you read — SEO is a practical subject, like cooking, and reading alone
          will not make it stick.
        </P>
        <P>
          If you are a working marketer, start with Part III and treat the rest as reference —
          each chapter stands alone when you need to explain a ranking change to a client. If
          you are a developer, Chapters 7, 8, 17, 18, and 19 plus Appendix B will feel like
          home; the content chapters will help you argue for the editorial work your site also
          needs.
        </P>
        <P>
          One request before you begin: treat every number in this book as dated. Google shipped
          three core updates in 2025 alone, and AI Overviews went from a US experiment to more
          than 200 countries within a single year. The principles are durable; the specifics
          were accurate as of late 2025. Verify anything time-sensitive against Google’s own
          Search Central documentation, linked in the Sources section.
        </P>

        <H3>A note on honesty</H3>
        <P>
          Nobody outside Google knows the full ranking formula, and anyone who claims to is
          selling something. This book separates three tiers of evidence: what Google has
          documented publicly, what emerged from sworn testimony and court exhibits, and what the
          independent research community has measured. Where a claim is only a widely-held
          belief, it is labelled as one.
        </P>
      </>
    ),
  },
];