"use client";

import { useCallback, useMemo, useState } from "react";
import { IconCheck } from "@/components/Icons";

// ------------------------------------------------------------------
// Admin dashboard (/admin).
//
// The site is a static export, so the passcode is NEVER shipped in this
// bundle. The panel sends whatever the admin types to the Apps Script
// web app (scripts/checklist-email.gs), and the script is the only place
// that checks it (ADMIN_KEY). Wrong passcode => no data returned.
// ------------------------------------------------------------------

const ENDPOINT = process.env.NEXT_PUBLIC_EMAIL_FORM_URL || "";

type Lead = { time: string; email: string; source: string; valid: string };

function csvCell(v: string) {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function stamp() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`;
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function AdminPanel() {
  const [pass, setPass] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState("");

  const load = useCallback(async (key: string) => {
    if (!ENDPOINT) {
      setError("No endpoint configured. Set NEXT_PUBLIC_EMAIL_FORM_URL and rebuild.");
      return false;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ route: "admin", key }).toString(),
      });
      const data = await res.json().catch(() => ({}));
      if (!data?.ok) {
        setError(data?.error === "unauthorized" ? "Wrong passcode." : "Could not load leads.");
        return false;
      }
      setLeads(Array.isArray(data.leads) ? data.leads : []);
      return true;
    } catch {
      setError("Network error. Try again.");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (loading) return;
      const ok = await load(pass);
      if (ok) setAuthed(true);
    },
    [load, pass, loading],
  );

  const logout = useCallback(() => {
    setAuthed(false);
    setPass("");
    setLeads([]);
    setQuery("");
    setError("");
  }, []);

  const refresh = useCallback(() => {
    load(pass);
  }, [load, pass]);

  const stats = useMemo(() => {
    const now = Date.now();
    const day = new Date().toISOString().slice(0, 10);
    let today = 0;
    let week = 0;
    const bySource: Record<string, number> = {};
    for (const l of leads) {
      if (l.time.slice(0, 10) === day) today++;
      const t = new Date(l.time.replace(" ", "T"));
      if (!Number.isNaN(t.getTime()) && now - t.getTime() < 7 * 864e5) week++;
      const src = (l.source || "unknown").trim() || "unknown";
      bySource[src] = (bySource[src] || 0) + 1;
    }
    return { total: leads.length, today, week, bySource };
  }, [leads]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return leads;
    return leads.filter(
      (l) => l.email.toLowerCase().includes(q) || l.source.toLowerCase().includes(q),
    );
  }, [leads, query]);

  const downloadCSV = useCallback(() => {
    const header = "Time,Email,Source,Valid";
    const rows = filtered.map((l) =>
      [l.time, l.email, l.source, l.valid].map(csvCell).join(","),
    );
    const blob = new Blob(["\uFEFF" + [header, ...rows].join("\r\n")], {
      type: "text/csv;charset=utf-8",
    });
    triggerDownload(blob, `searchrank-leads-${stamp()}.csv`);
  }, [filtered]);

  const downloadEmails = useCallback(() => {
    const unique = Array.from(new Set(filtered.map((l) => l.email).filter(Boolean)));
    const blob = new Blob([unique.join("\n")], { type: "text/plain;charset=utf-8" });
    triggerDownload(blob, `searchrank-emails-${stamp()}.txt`);
  }, [filtered]);

  const copyEmail = useCallback(async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
      setTimeout(() => setCopied(""), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }, []);

  // ---- Locked screen ------------------------------------------------
  if (!authed) {
    return (
      <div className="grid min-h-screen place-items-center bg-blush px-5">
        <form
          onSubmit={login}
          className="card w-full max-w-sm p-7 text-center"
        >
          <span className="grid mx-auto h-12 w-12 place-items-center rounded-full bg-berry text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </span>
          <h1 className="font-display mt-4 text-2xl font-bold text-berry">
            Admin access
          </h1>
          <p className="mt-1 text-sm text-plum">
            Enter the passcode to open the lead dashboard.
          </p>
          <input
            type="password"
            inputMode="numeric"
            autoComplete="current-password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Passcode"
            className="mt-5 w-full rounded-xl border border-line bg-white px-4 py-3 text-center text-lg tracking-[0.3em] text-[#1f2933] outline-none transition placeholder:tracking-normal placeholder:text-plum-soft focus:border-pink focus:ring-2 focus:ring-pink/20"
          />
          {error && (
            <p className="mt-3 text-sm font-medium text-[#e5484d]">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary mt-4 w-full py-3"
          >
            {loading ? "Checking…" : "Unlock dashboard"}
          </button>
          <p className="mt-4 text-[11px] text-plum-soft">
            Authorized access only. This page is not linked anywhere on the site.
          </p>
        </form>
      </div>
    );
  }

  // ---- Dashboard ----------------------------------------------------
  const sourceEntries = Object.entries(stats.bySource).sort((a, b) => b[1] - a[1]);

  return (
    <div className="min-h-screen bg-blush pb-20">
      <header className="bg-berry px-5 py-6 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#93c5fd]">
              SearchRank Pro
            </p>
            <h1 className="font-display text-2xl font-bold">Lead dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={refresh}
              disabled={loading}
              className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 disabled:opacity-60"
            >
              {loading ? "Refreshing…" : "Refresh"}
            </button>
            <button
              onClick={logout}
              className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5">
        {/* Stats */}
        <div className="-mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Total leads", value: stats.total },
            { label: "Today", value: stats.today },
            { label: "Last 7 days", value: stats.week },
            { label: "Sources", value: sourceEntries.length },
          ].map((s) => (
            <div key={s.label} className="card p-4 text-center">
              <p className="font-display text-3xl font-bold text-berry">{s.value}</p>
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-plum-soft">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button onClick={downloadCSV} className="btn btn-primary px-5 py-2.5 text-sm">
            Download full CSV
          </button>
          <button onClick={downloadEmails} className="btn btn-ghost px-5 py-2.5 text-sm">
            Download email list (.txt)
          </button>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by email or source…"
            className="flex-1 min-w-[200px] rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-[#1f2933] outline-none transition placeholder:text-plum-soft focus:border-pink focus:ring-2 focus:ring-pink/20"
          />
        </div>

        {/* Sources */}
        {sourceEntries.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {sourceEntries.map(([src, n]) => (
              <span
                key={src}
                className="chip"
              >
                {src}: <strong className="ml-1 text-berry">{n}</strong>
              </span>
            ))}
          </div>
        )}

        {/* Table */}
        <div className="card mt-5 overflow-hidden p-0">
          {filtered.length === 0 ? (
            <p className="p-8 text-center text-sm text-plum">
              {leads.length === 0
                ? "No leads yet. Submissions will appear here."
                : "No leads match that filter."}
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-blush/70 text-[11px] uppercase tracking-[0.1em] text-plum-soft">
                    <th className="px-4 py-3 font-semibold">Time</th>
                    <th className="px-4 py-3 font-semibold">Email</th>
                    <th className="px-4 py-3 font-semibold">Source</th>
                    <th className="px-4 py-3 font-semibold">Valid</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((l, i) => (
                    <tr
                      key={`${l.email}-${i}`}
                      className="border-b border-line/70 last:border-0 hover:bg-blush/50"
                    >
                      <td className="whitespace-nowrap px-4 py-3 text-plum-soft">{l.time}</td>
                      <td className="px-4 py-3 font-medium text-[#1f2933]">{l.email}</td>
                      <td className="px-4 py-3 text-plum">{l.source}</td>
                      <td className="px-4 py-3">
                        {l.valid === "yes" ? (
                          <span className="inline-flex items-center gap-1 text-[#3b82f6]">
                            <IconCheck className="h-3.5 w-3.5" /> yes
                          </span>
                        ) : (
                          <span className="text-plum-soft">{l.valid || "—"}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => copyEmail(l.email)}
                          className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-berry transition hover:border-pink hover:text-pink"
                        >
                          {copied === l.email ? "Copied" : "Copy"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="mt-4 text-xs text-plum-soft">
          Showing {filtered.length} of {leads.length} leads · stored in your Google Sheet · newest first
        </p>
      </main>
    </div>
  );
}
