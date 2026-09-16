import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   Editorial blocks used across every chapter — consistent spacing,
   tasteful rose accents, calm editorial rhythm.
------------------------------------------------------------------- */

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563eb]">{children}</p>
  );
}

export function H1({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h1
      id={id}
      className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-[#2f5d73] sm:text-4xl"
    >
      {children}
    </h1>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-9 text-balance font-display text-2xl font-semibold tracking-tight text-[#2f5d73] sm:text-[26px]">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-6 text-[17px] font-bold text-[#2f5d73]">{children}</h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.75] text-[#4b5563]">{children}</p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-3 space-y-2">{children}</ul>;
}

export function LI({ children, check = true }: { children: ReactNode; check?: boolean }) {
  return (
    <li className="flex gap-2.5 text-[15px] leading-relaxed text-[#4b5563]">
      <span
        className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
          check ? "bg-[#eaf0f6] text-[#2563eb]" : "bg-[#f5f7f9] text-[#9ca3af]"
        }`}
        aria-hidden
      >
        {check ? (
          <svg viewBox="0 0 20 20" className="h-3 w-3 fill-none stroke-current" strokeWidth="3">
            <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        )}
      </span>
      <span>{children}</span>
    </li>
  );
}

/* ---------- Key takeaway box ---------- */
export function Takeaway({ children }: { children: ReactNode }) {
  return (
    <aside className="book-avoid-break mt-6 rounded-2xl border-l-4 border-[#3b82f6] bg-[#eaf0f6] px-5 py-4">
      <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#2563eb]">
        Key takeaway
      </p>
      <p className="mt-1.5 text-[15px] font-semibold leading-relaxed text-[#2f5d73]">{children}</p>
    </aside>
  );
}

/* ---------- Quote / highlight card ---------- */
export function Quote({
  children,
  by,
  dark = false,
}: {
  children: ReactNode;
  by?: string;
  dark?: boolean;
}) {
  return (
    <blockquote
      className={`book-avoid-break mt-6 rounded-2xl px-6 py-5 ${
        dark ? "bg-[#2f5d73] text-[#eaf0f6]" : "border border-[#d1d5db] bg-white text-[#2f5d73]"
      } shadow-[0_14px_36px_-22px_rgba(45,10,31,0.4)]`}
    >
      <span className={`text-3xl leading-none ${dark ? "text-[#3b82f6]" : "text-[#3b82f6]"}`} aria-hidden>
        &ldquo;
      </span>
      <p
        className={`mt-1 text-[15.5px] font-semibold leading-relaxed ${dark ? "text-[#dbeafe]" : "text-[#2f5d73]"}`}
      >
        {children}
      </p>
      {by && <cite className={`mt-3 block text-[12.5px] font-medium not-italic ${dark ? "text-[#93c5fd]" : "text-[#9ca3af]"}`}>— {by}</cite>}
    </blockquote>
  );
}

/* ---------- Print-safe SVG icons ---------- */
const iconPaths: Record<string, ReactNode> = {
  search: <path d="m14 14 4 4M10 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />,
  check: <path d="M4 11l4 4 8-9" />,
  flag: <path d="M5 3v18M5 4h11l-2 4 2 4H5" />,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></>,
  doc: <><path d="M14 3v5h5" /><path d="M6 3h8l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /></>,
  scale: <path d="M12 3v18M7 21h10M5 7h14M5 7l-3 5a3 3 0 0 0 6 0L5 7zm14 0-3 5a3 3 0 0 0 6 0l-3-5z" />,
  chat: <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" />,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
  pen: <path d="m14 6 4 4M4 20l3.5-1L20 6.5 17.5 4 5 17l-1 3z" />,
  cap: <path d="M2 9l10-4 10 4-10 4L2 9zm3 3v4c0 1.7 3 3.5 7 3.5s7-1.8 7-3.5v-4" />,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" /><path d="M19 19H6a2 2 0 0 0-2 2" /></>,
  broom: <path d="m20 4-7 7m3-9-5 5m-2 7-5 5 5-5zM3 21c5 0 7-2 8-4" />,
  refresh: <path d="M20 12a8 8 0 1 1-3-6.3M20 4v4h-4" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  compass: <><circle cx="12" cy="12" r="8.5" /><path d="m14.5 9.5-3 5 5-3" /></>,
  link: <><path d="M9 15l6-6M10 4l3-1 2 2 1 1-3 2z" /><path d="M14 20l-3 1-2-2-1-1 3-2" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2.5l1.8 2 2.6-.3 1 2.4 2.5 1-1 2.4 1.4 2.2-2.3 1.4.4 2.6-2.6.7-2 2.5-2.2-1.4-2.2 1.4-2-2.5-2.6-.7.4-2.6-2.3-1.4 1.4-2.2-1-2.4 2.5-1 1-2.4 2.6.3z" /></>,
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />,
  home: <path d="M3 11l9-8 9 8M5 10v10h14V10" />,
  leaf: <><path d="M20 4c-9 1-13 6-13 12M20 4c1 9-4 13-10 13" /></>,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  cursor: <path d="M6 3l12 8-6 2-3 6-3-16z" />,
};

export function BookIcon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {iconPaths[name] ?? <circle cx="12" cy="12" r="5" />}
    </svg>
  );
}

/* ---------- Numbered step ---------- */
export function Step({
  n,
  title,
  children,
  metric,
}: {
  n: number;
  title: string;
  children: ReactNode;
  metric?: string;
}) {
  return (
    <div className="book-avoid-break mt-5 flex gap-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-[15px] font-bold text-white shadow-[0_6px_16px_-6px_rgba(59, 130, 246, 0.7)]">
        {n}
      </span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[15.5px] font-bold text-[#2f5d73]">{title}</p>
          {metric && (
            <span className="rounded-full bg-[#eaf0f6] px-2.5 py-0.5 text-[11px] font-bold text-[#2563eb]">
              {metric}
            </span>
          )}
        </div>
        <div className="mt-1 text-[14.5px] leading-relaxed text-[#4b5563]">{children}</div>
      </div>
    </div>
  );
}

/* ---------- Icon card grid ---------- */
export function IconCards({
  items,
}: {
  items: { icon: string; title: string; desc: string }[];
}) {
  return (
    <div className="icon-cards mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.title}
          className="rounded-2xl border border-[#d1d5db] bg-white p-4 shadow-[0_8px_24px_-18px_rgba(47, 93, 115, 0.35)]"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#eaf0f6] text-[#2563eb]">
            <BookIcon name={it.icon} className="h-5 w-5" />
          </span>
          <p className="mt-2.5 text-[14px] font-bold text-[#2f5d73]">{it.title}</p>
          <p className="mt-1 text-[13px] leading-relaxed text-[#4b5563]">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Data table ---------- */
export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="data-table mt-5 overflow-x-auto rounded-2xl border border-[#d1d5db] bg-white shadow-[0_10px_30px_-22px_rgba(47, 93, 115, 0.3)]">
      <table className="w-full min-w-[480px] border-collapse text-left">
        <thead>
          <tr className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb]">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-[12.5px] font-bold uppercase tracking-wide text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? "bg-[#f8fafc]" : "bg-white"}>
              {r.map((c, j) => (
                <td key={j} className="px-4 py-2.5 align-top text-[13.5px] text-[#2f5d73]">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Stat row ---------- */
export function Stats({ items }: { items: { value: string; label: string; sub?: string }[] }) {
  return (
    <div className="stats mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="rounded-2xl border border-[#d1d5db] bg-[#f5f7f9] px-4 py-5 text-center">
          <p className="font-display text-3xl font-bold text-[#3b82f6]">{s.value}</p>
          <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.1em] text-[#2f5d73]">{s.label}</p>
          {s.sub && <p className="mt-0.5 text-[11.5px] text-[#9ca3af]">{s.sub}</p>}
        </div>
      ))}
    </div>
  );
}

/* ---------- Checklist ---------- */
export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="book-avoid-break mt-5 space-y-2 rounded-2xl border border-[#d1d5db] bg-white px-5 py-4 shadow-[0_8px_24px_-18px_rgba(47, 93, 115, 0.3)]">
      {items.map((it) => (
        <li key={it} className="flex gap-2.5 text-[14px] text-[#2f5d73]">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-[#3b82f6] text-[#3b82f6]">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 11l4 4 8-9" />
            </svg>
          </span>
          {it}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Section divider ---------- */
export function Divider({ children }: { children?: ReactNode }) {
  return (
    <div className="my-10 flex items-center gap-3">
      <span className="h-px flex-1 bg-[#d1d5db]" />
      {children && <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563eb]">{children}</span>}
      <span className="h-px flex-1 bg-[#d1d5db]" />
    </div>
  );
}

/* ---------- Labeled chip ---------- */
export function Tag({ children, tone = "rose" }: { children: ReactNode; tone?: "rose" | "ink" | "soft" }) {
  const map = {
    rose: "bg-[#eaf0f6] text-[#2563eb]",
    ink: "bg-[#2f5d73] text-[#eaf0f6]",
    soft: "bg-[#f5f7f9] text-[#9ca3af] border border-[#d1d5db]",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${map[tone]}`}>
      {children}
    </span>
  );
}

/* ---------- Chapter end-card: slim in print, fuller on screen ---------- */
export function BookEndCard({ chapterNum, total, partName, pages = "56 pages" }: { chapterNum: number; total: number; partName: string; pages?: string }) {
  return (
    <div className="book-endcard mt-10 flex flex-col items-center gap-4 rounded-2xl border border-[#d1d5db] bg-[#f8fafc] px-8 py-8 text-center print:mt-4 print:border-x-0 print:border-t print:border-b-0 print:bg-transparent print:py-3">
      <div className="flex items-center gap-2">
        <span className="h-px w-8 bg-[#d1d5db] print:hidden" />
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9ca3af]">Chapter complete</span>
        <span className="h-px w-8 bg-[#d1d5db] print:hidden" />
      </div>
      <p className="text-[13px] font-semibold text-[#2f5d73] print:hidden">
        {chapterNum} / {total}
      </p>
      <p className="max-w-[48ch] text-[12.5px] leading-relaxed text-[#4b5563] print:hidden">
        The full playbook includes <strong>32 chapters</strong>, <strong>6 appendices</strong>, and a <strong>26-task roadmap</strong> across seven parts.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-[#3f6f86] print:hidden">
        <span className="rounded-full border border-[#d1d5db] bg-white px-3 py-1">{pages}</span>
        <span className="rounded-full border border-[#d1d5db] bg-white px-3 py-1">{partName}</span>
        <span className="rounded-full border border-[#d1d5db] bg-white px-3 py-1">PDF + DOCX</span>
      </div>
    </div>
  );
}

/* ---------- Part banner: compact band atop the first chapter of each part ---------- */
export function PartSep({ partIndex, title, subtitle }: { partIndex: number; title: string; subtitle: string }) {
  const numerals = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  return (
    <div className="book-partsep relative mb-8 overflow-hidden rounded-3xl border border-[#dbeafe] bg-gradient-to-br from-[#f5f7f9] via-[#eaf0f6] to-[#dbeafe] px-6 py-7 text-center print:mb-5 print:rounded-none print:border-x-0 print:border-t-0 print:py-6 sm:px-8">
      <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#3b82f6] to-[#2563eb] text-[13px] font-bold text-white shadow-[0_8px_24px_-8px_rgba(59, 130, 246, 0.6)] sm:h-11 sm:w-11">
        {numerals[partIndex] ?? partIndex}
      </span>
      <p className="mt-3 text-[10.5px] font-bold uppercase tracking-[0.24em] text-[#2563eb]">
        Part {numerals[partIndex] ?? partIndex}
      </p>
      <h2 className="mx-auto mt-1 max-w-[520px] text-balance font-display text-[26px] font-semibold leading-tight tracking-tight text-[#2f5d73] sm:text-[32px]">
        {title}
      </h2>
      <p className="mx-auto mt-1.5 max-w-[44ch] text-[13px] leading-relaxed text-[#4b5563] sm:text-[14px]">
        {subtitle}
      </p>
    </div>
  );
}