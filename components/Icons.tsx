import type { ReactNode } from "react";

type IconProps = { className?: string };

function Svg({ className = "", children, animated }: IconProps & { children: ReactNode; animated?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${animated ? "ico-draw" : ""}`}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function LogoMark({ className = "" }: IconProps) {
  // Brand mark: three rising rank-bars broken out of by an upward arrow.
  // Reads as "search rankings going up" at 16px favicon through hero sizes.
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="sr-lg" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff5ea3" />
          <stop offset="1" stopColor="#cf0b64" />
        </linearGradient>
        <linearGradient id="sr-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.32" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8.5" fill="url(#sr-lg)" />
      <rect x="2" y="2" width="28" height="28" rx="8.5" fill="url(#sr-sheen)" />
      {/* rank bars, ascending left → right */}
      <rect x="8.6" y="19.4" width="3.7" height="4.8" rx="1.4" fill="#fff" opacity="0.72" />
      <rect x="13.9" y="16.2" width="3.7" height="8" rx="1.4" fill="#fff" opacity="0.88" />
      <rect x="19.2" y="13.6" width="3.7" height="10.6" rx="1.4" fill="#fff" />
      {/* breakout arrow */}
      <path
        d="M8.2 16.2 L20.2 9.4"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M23.4 6.2 L17.9 8 L21.3 12.6 Z" fill="#fff" />
    </svg>
  );
}

export function IconCheck({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12.5l4.2 4.2L19 6.8" />
    </Svg>
  );
}

export function IconCross({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
  );
}

export function IconArrowRight({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </Svg>
  );
}

export function IconChevron({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 9l6 6 6-6" />
    </Svg>
  );
}

export function IconMenu({ className = "" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

/* ---------------- system icons ---------------- */

export function IconRoadmap({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="5" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <path d="M8.2 7.2L15.8 7.6M7.6 15.6l3-3M13.6 12.4l-1-5.4" />
    </Svg>
  );
}

export function IconContent({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <rect x="5" y="4" width="14" height="16" rx="2.5" />
      <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" />
    </Svg>
  );
}

export function IconAudit({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M15.5 15.5L20 20" />
      <path d="M8.5 11l1.8 1.8L14 8.5" />
    </Svg>
  );
}

/* ---------------- feature icons ---------------- */

export function IconPipeline({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <circle cx="5" cy="17" r="2.2" />
      <circle cx="12" cy="7" r="2.2" />
      <circle cx="19" cy="17" r="2.2" />
      <path d="M7 17h3.8M10.4 9.2l3.2 6.8M14.6 17H16.8" />
    </Svg>
  );
}

export function IconSystems({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.8" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.8" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.8" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.8" />
      <path d="M10.5 7h3M7 13.5v-3" />
    </Svg>
  );
}

export function IconHidden({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M3.5 20.5l17-17" />
    </Svg>
  );
}

export function IconFreshness({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 3.5V8h-4.5" />
    </Svg>
  );
}

export function IconTechnical({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M10.5 4h3l.8 2.4c.7.2 1.3.5 1.9 1l2.2-1 1.5 2.5-1.6 1.6a8 8 0 0 1 0 2l1.6 1.6-1.5 2.5-2.2-1a7.5 7.5 0 0 1-1.9 1l-.8 2.4h-3l-.8-2.4a7.5 7.5 0 0 1-1.9-1l-2.2 1-1.5-2.5L7 14a8 8 0 0 1 0-2L5.4 10.4l1.5-2.5 2.2 1a7.5 7.5 0 0 1 1.9-1z" />
      <circle cx="12" cy="12" r="2.4" />
    </Svg>
  );
}

export function IconAi({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M6 3l.7 2L3 6l2 .7 3 3-.7-4.5" />
      <path d="M14 5l1.2 3L18 9l-3 1.2L14 13l-1.2-2.8L10 9l3-1z" />
      <path d="M5 14.5l.9 2.4L8.5 18l-2.6.8L5 21l-.9-2.2L1.5 18l2.6-1.1z" />
      <path d="M16 15l3 3M16.8 17.8L19 20" />
    </Svg>
  );
}

export function IconContentSm({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M12 12l7-3M6.5 5.5l4.5 2M8.4 9.4 5.6 6.2" />
      <path d="M9 4h5M18 16v3.5M19.5 18H16.5L14 21h4" />
    </Svg>
  );
}

/* ---------------- how-it-works ---------------- */

export function IconRead({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M3 6.5C5.5 5 8.5 5.5 12 8c3.5-2.5 6.5-3 9-1.5v11c-2.5-1.5-5.5-2-9 .5-3.5-2.5-6.5-3-9-1.5z" />
      <path d="M12 8v11" />
    </Svg>
  );
}

export function IconImport({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M4 12v6.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V12" />
      <path d="M12 16V3.5M7.5 8L12 3.5 16.5 8" />
    </Svg>
  );
}

export function IconExecute({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M12 20a8 8 0 1 1 8-8" />
      <path d="M15.5 13.5l3 3M16 16.5L20 20M17.5 18.5l2.5 2.5" />
    </Svg>
  );
}

/* ---------------- policy icons ---------------- */

export function IconLifetime({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M6.5 12.5c-.8-.8-2-2.3-1.2-4 1-2 3.8-1.6 5.2.4M17.5 12.5c.8-.8 2-2.3 1.2-4-1-2-3.8-1.6-5.2.4M12 9c-1-1.8-3-3-4.5-2.6M12 9c1-1.8 3-3 4.5-2.6M12 9v.01" />
      <path d="M4 15.5c1.5-2 3.6-2.4 5-2M20 15.5c-1.5-2-3.6-2.4-5-2M4 20c1.5-2 3.6-2.4 5-2M20 20c-1.5-2-3.6-2.4-5-2M9 20v-2.5M15 20v-2.5" />
    </Svg>
  );
}

export function IconLicense({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M7 3h10v18l-5-3-5 3z" />
      <path d="M9.5 8h5M9.5 11.5h5" />
    </Svg>
  );
}

export function IconSupport({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M21 12a8 8 0 0 1-8 8H5l2.5-2.5A8 8 0 1 1 21 12z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </Svg>
  );
}

export function IconBolt({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <path d="M13 2.5L4.5 13.5H11L10 21.5l8.5-11H12z" />
    </Svg>
  );
}

export function IconIncluded({ className = "", animated }: IconProps & { animated?: boolean }) {
  return (
    <Svg className={className} animated={animated}>
      <rect x="3.5" y="4" width="17" height="12" rx="2" />
      <path d="M3.5 9h17M7 9v9M17 9v9" />
    </Svg>
  );
}