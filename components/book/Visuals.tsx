import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   Visual vocabulary for the eBook — every diagram is a clean SVG
   data-visual using the brand pink/white palette. All components are
   self-contained, responsive, and print-safe.
------------------------------------------------------------------- */

export const PINK = "#ec1478";
export const PINK_DEEP = "#c00e62";
export const PINK_SOFT = "#ffe3ef";
export const PANEL = "#fff1f6";
export const LINE = "#f6c9dc";
export const INK = "#2d0a1f";
export const BODY = "#6d4059";

function grad(id: string, from: string, to: string) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor={from} />
      <stop offset="100%" stopColor={to} />
    </linearGradient>
  );
}

/* ---------- Figure wrapper: label + caption + children ---------- */
export function Figure({
  label,
  caption,
  children,
}: {
  label?: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure className="book-fig rounded-3xl border border-[#f5c2d8] bg-white p-4 shadow-[0_14px_40px_-22px_rgba(189,24,97,0.3)] sm:p-6">
      {label && (
        <figcaption className="mb-3 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#ec1478] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
            {label}
          </span>
        </figcaption>
      )}
      <div className="book-fx">{children}</div>
      {caption && (
        <p className="mt-3 text-center text-[13px] leading-snug text-[#967184]">{caption}</p>
      )}
    </figure>
  );
}

/* ---------- 1) Pipeline flow (3 stage boxes with arrows) ---------- */
export function PipelineFlow({
  stages,
  note,
}: {
  stages: { name: string; desc: string }[];
  note?: string;
}) {
  return (
    <div className="pipeline-deck flex flex-col items-center gap-3 sm:flex-row sm:items-stretch">
      {stages.map((s, i) => (
        <div key={s.name} className="flex w-full flex-col items-center gap-3 sm:w-1/3">
          <div className="w-full rounded-2xl border border-[#f5c2d8] bg-[#fff1f6] px-4 py-5 text-center">
            <span className="mx-auto mb-2 grid h-8 w-8 place-items-center rounded-full bg-[#ec1478] text-sm font-bold text-white shadow-[0_6px_16px_-6px_rgba(236,20,120,0.7)]">
              {i + 1}
            </span>
            <p className="text-sm font-bold text-[#2d0a1f]">{s.name}</p>
            <p className="mt-1 text-[13px] leading-snug text-[#6d4059]">{s.desc}</p>
          </div>
          {i < stages.length - 1 && (
            <svg
              className="h-5 w-5 shrink-0 rotate-90 text-[#ec1478] sm:rotate-0"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12h14m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      ))}
      {note && <p className="sr-only">{note}</p>}
    </div>
  );
}

/* ---------- 2) Donut chart (percentage segments) ---------- */
export type Slice = { label: string; value: number; color?: string };

export function DonutChart({ data }: { data: Slice[] }) {
  // Standardize colors if not given
  const palette = [PINK, "#ff5a9d", "#ff8bb8", "#ffb6d1", "#ffd6e7", "#f6c9dc"];
  const slices = data.map((d, i) => ({ ...d, color: d.color || palette[i % palette.length] }));
  const total = slices.reduce((a, s) => a + s.value, 0);
  const R = 80;
  const C = 2 * Math.PI * R;
  let acc = 0;

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
      <svg viewBox="0 0 220 220" className="w-52 max-w-full shrink-0" role="img">
        <circle cx="110" cy="110" r={R} fill="none" stroke="#fff1f6" strokeWidth="34" />
        {slices.map((s) => {
          const len = (s.value / total) * C;
          const el = (
            <circle
              key={s.label}
              cx="110"
              cy="110"
              r={R}
              fill="none"
              stroke={s.color}
              strokeWidth="34"
              strokeDasharray={`${len - 3} ${C - len + 3}`}
              strokeDashoffset={-acc}
              strokeLinecap="butt"
              transform="rotate(-90 110 110)"
            />
          );
          acc += len;
          return el;
        })}
        <text x="110" y="104" textAnchor="middle" dominantBaseline="middle" className="fill-[#2d0a1f]" fontSize="26" fontWeight="700">
          100%
        </text>
        <text x="110" y="123" textAnchor="middle" dominantBaseline="middle" className="fill-[#967184]" fontSize="11">
          of ranking influence*
        </text>
      </svg>
      <ul className="w-full space-y-2">
        {slices.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-[13px] text-[#2d0a1f]">
            <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: s.color }} />
            <span className="flex-1 font-medium">{s.label}</span>
            <span className="font-bold text-[#ec1478]">{s.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- 3) Horizontal bar chart ---------- */
export function BarChart({ data }: { data: { label: string; value: number; note?: string }[] }) {
  return (
    <div className="bar-chart space-y-4">
      {data.map((b) => (
        <div key={b.label}>
          <div className="mb-1 flex items-baseline justify-between gap-3 text-[13px]">
            <span className="font-semibold text-[#2d0a1f]">{b.label}</span>
            <span className="font-bold text-[#ec1478]">{b.value}</span>
          </div>
          <div className="h-3.5 overflow-hidden rounded-full bg-[#fff1f6]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#ff3d8d] to-[#df0e6b]"
              style={{ width: `${Math.min(100, Math.max(6, b.value))}%` }}
            />
          </div>
          {b.note && <p className="mt-0.5 text-[12px] text-[#967184]">{b.note}</p>}
        </div>
      ))}
    </div>
  );
}

/* ---------- 4) Hub-and-spoke diagram ---------- */
export function HubSpoke({
  center,
  nodes,
}: {
  center: string;
  nodes: string[];
}) {
  const cx = 220;
  const cy = 130;
  const rad = 92;
  const hubR = 46;
  const nodeW = 104;
  const nodeH = 30;
  return (
    <svg viewBox="0 0 440 260" className="w-full max-w-xl" role="img">
      <defs>{grad("hs", PINK, PINK_DEEP)}</defs>
      {nodes.map((n, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + rad * Math.cos(a);
        const y = cy + rad * Math.sin(a);
        // dash pattern starts at the hub's edge so every spoke is in phase
        const hx = cx + hubR * Math.cos(a);
        const hy = cy + hubR * Math.sin(a);
        return (
          <g key={n}>
            <line
              x1={hx}
              y1={hy}
              x2={x}
              y2={y}
              stroke={LINE}
              strokeWidth="1.5"
              strokeDasharray="3 5"
            />
            <rect
              x={x - nodeW / 2}
              y={y - nodeH / 2}
              width={nodeW}
              height={nodeH}
              rx={nodeH / 2}
              fill="#fff1f6"
              stroke="#f5c2d8"
              strokeWidth="1.5"
            />
            <text
              x={x}
              y={y}
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill={INK}
            >
              {n.length > 16 ? n.slice(0, 15) + "…" : n}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={hubR} fill="url(#hs)" />
      <text x={cx} y={cy} dominantBaseline="middle" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">
        {center.length > 18 ? center.slice(0, 17) + "…" : center}
      </text>
    </svg>
  );
}

/* ---------- 5) Feedback loop (circular steps) ---------- */
export function FeedbackLoop({
  steps,
}: {
  steps: { label: string; desc: string }[];
}) {
  const cx = 170;
  const cy = 152;
  const rad = 100;
  const labelR = rad + 32;
  return (
    <div className="feedback-deck flex flex-col items-center gap-5 sm:flex-row sm:items-center">
      <svg viewBox="0 0 348 304" className="w-72 max-w-full shrink-0" role="img">
        <circle cx={cx} cy={cy} r={rad} fill="none" stroke={PINK_SOFT} strokeWidth="22" />
        {steps.map((s, i) => {
          const a = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + rad * Math.cos(a);
          const y = cy + rad * Math.sin(a);
          const lx = cx + labelR * Math.cos(a);
          const ly = cy + labelR * Math.sin(a);
          return (
            <g key={s.label}>
              <circle cx={x} cy={y} r="22" fill={i === 0 ? "url(#fl0)" : "#fff"} stroke={PINK} strokeWidth="2.5" />
              <text
                x={x}
                y={y}
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="12"
                fontWeight="700"
                fill={i === 0 ? "#fff" : PINK}
              >
                {i + 1}
              </text>
              <text x={lx} y={ly} dominantBaseline="middle" textAnchor="middle" fontSize="10.5" fontWeight="600" fill={INK}>
                {s.label}
              </text>
            </g>
          );
        })}
        <defs>
          <linearGradient id="fl0" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff3d8d" />
            <stop offset="100%" stopColor="#df0e6b" />
          </linearGradient>
        </defs>
      </svg>
      <ul className="w-full space-y-2.5">
        {steps.map((s) => (
          <li key={s.label} className="flex gap-3 rounded-xl border border-[#f5c2d8] bg-[#fffafc] px-3 py-2.5">
            <span className="mt-0.5 text-[15px] font-bold text-[#ec1478]">{s.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- 6) Timeline (4 quarters, compact 2-col grid) ---------- */
export function Timeline({
  phases,
}: {
  phases: { quarter: string; title: string; tasks: string[]; metric: string }[];
}) {
  return (
    <div className="timeline-deck grid grid-cols-1 gap-5 sm:grid-cols-2">
      {phases.map((p, i) => (
        <div
          key={p.quarter}
          className="flex flex-col rounded-2xl border border-[#f5c2d8] bg-white p-4 shadow-[0_10px_30px_-20px_rgba(189,24,97,0.3)]"
        >
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ff3d8d] to-[#df0e6b] text-[12px] font-bold text-white shadow-[0_6px_16px_-6px_rgba(236,20,120,0.7)]">
              {i + 1}
            </span>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#c00e62]">
              {p.quarter}
            </p>
          </div>
          <p className="mt-1.5 text-[15px] font-bold text-[#2d0a1f]">{p.title}</p>
          <ul className="mt-1.5 space-y-1">
            {p.tasks.slice(0, 4).map((t) => (
              <li key={t} className="flex gap-2 text-[13px] leading-snug text-[#6d4059]">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ec1478]" />
                {t}
              </li>
            ))}
            {p.tasks.length > 4 && (
              <li className="pl-3.5 text-[12px] font-semibold text-[#967184]">
                +{p.tasks.length - 4} more tasks
              </li>
            )}
          </ul>
          <p className="mt-auto pt-2 text-[12px] font-semibold text-[#2563c7]">
            {p.metric}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ---------- 7) Two-column compare ---------- */
export function Compare({
  a,
  b,
}: {
  a: { title: string; items: string[]; tone?: "good" | "bad" };
  b: { title: string; items: string[]; tone?: "good" | "bad" };
}) {
  const tone = (t?: string) =>
    t === "good"
      ? "border-[#ffd6e7] bg-[#fffafc]"
      : t === "bad"
        ? "border-[#ffe1e1] bg-[#fff7f7]"
        : "border-[#f5c2d8] bg-white";
  return (
    <div className="compare-deck grid gap-4 sm:grid-cols-2">
      {[a, b].map((c) => (
        <div key={c.title} className={`rounded-2xl border p-4 ${tone(c.tone)}`}>
          <p className="text-[13px] font-bold text-[#2d0a1f]">{c.title}</p>
          <ul className="mt-2 space-y-1.5">
            {c.items.map((it) => (
              <li key={it} className="flex gap-2 text-[13px] leading-snug text-[#6d4059]">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${c.tone === "bad" ? "bg-[#e5484d]" : "bg-[#ec1478]"}`} />
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ---------- 8) FlowChart: boxes + arrows ---------- */
export function FlowChart({
  boxes,
}: {
  boxes: { label: string; desc?: string; accent?: boolean }[];
}) {
  return (
    <div className="flow-deck flex flex-col items-center gap-2.5">
      {boxes.map((b, i) => (
        <div key={b.label} className="flex w-full flex-col items-center gap-2.5">
          <div
            className={`w-full rounded-2xl px-4 py-3 text-center ${
              b.accent
                ? "bg-gradient-to-r from-[#ff3d8d] to-[#df0e6b] text-white"
                : "border border-[#f5c2d8] bg-[#fff1f6] text-[#2d0a1f]"
            }`}
          >
            <p className="text-[14px] font-bold">{b.label}</p>
            {b.desc && <p className={`text-[12px] ${b.accent ? "text-white/90" : "text-[#6d4059]"}`}>{b.desc}</p>}
          </div>
          {i < boxes.length - 1 && (
            <svg className="h-4 w-4 text-[#ec1478]" viewBox="0 0 24 24" fill="none">
              <path d="M4 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- 9) Gauge type stat ---------- */
export function GaugeStat({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="gauge-grid rounded-2xl border border-[#f5c2d8] bg-[#fff1f6] px-5 py-6 text-center">
      <p className="font-display text-4xl font-bold text-[#ec1478]">{value}</p>
      <p className="mt-1 text-[13px] font-bold uppercase tracking-[0.1em] text-[#2d0a1f]">{label}</p>
      {sub && <p className="mt-1 text-[12px] text-[#967184]">{sub}</p>}
    </div>
  );
}

/* ---------- 10) Source tag (illustrative data labeller) ---------- */
export function Illustrative() {
  return (
    <p className="mt-3 rounded-lg bg-[#fff1f6] px-3 py-2 text-center text-[11.5px] font-medium text-[#967184]">
      * Illustrative estimates from trial testimony & public research — Google publishes no official signal weights.
    </p>
  );
}