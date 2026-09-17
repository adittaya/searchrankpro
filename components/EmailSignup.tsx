"use client";

import { useState, useCallback } from "react";
import { IconCheck } from "@/components/Icons";
import { track, trackMetaCustom } from "@/lib/analytics";

// ------------------------------------------------------------------
// Email capture component.
//
// Works with any form backend:
//   Self-hosted        — set FORM action to your Apps Script web app URL
//                        (scripts/checklist-email.gs — stores leads in a
//                        Sheet and emails the checklist from your Gmail)
//   ConvertKit         — set FORM action to your ConvertKit form URL
//   Formspree          — set FORM action to https://formspree.io/f/XXXX
//   Custom API         — set FORM action to /api/subscribe
//
// Sends form-encoded data (no CORS preflight) so a script.google.com web
// app, classic forms, Formspree, and ConvertKit all accept it directly.
// For now, the form POSTs to FORM_ACTION and shows a success state.
// ------------------------------------------------------------------

const FORM_ACTION = process.env.NEXT_PUBLIC_EMAIL_FORM_URL || "";
const REDIRECT_URL = process.env.NEXT_PUBLIC_EMAIL_REDIRECT || "/thank-you";

export default function EmailSignup({
  variant = "inline",
  headline,
  sub,
}: {
  variant?: "inline" | "hero" | "modal";
  headline?: string;
  sub?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!email || status === "loading") return;

      setStatus("loading");
      track("lead_capture_attempt", { email });

      // If no backend configured, simulate success (dev/preview mode)
      if (!FORM_ACTION) {
        setStatus("success");
        track("lead_capture_success", { email });
        trackMetaCustom("LeadCapture", { email, form: variant });
        return;
      }

      try {
        const res = await fetch(FORM_ACTION, {
          method: "POST",
          // Form-encoded keeps the request "simple" (no CORS preflight), which
          // Google Apps Script web apps and classic form backends both accept.
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email, form: variant }).toString(),
        });

        if (res.ok) {
          setStatus("success");
          track("lead_capture_success", { email });
          trackMetaCustom("LeadCapture", { email, form: variant });
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    },
    [email, status],
  );

  // Success state
  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#3b82f6]/20 bg-[#3b82f6]/5 p-6 text-center">
        <span className="grid mx-auto h-12 w-12 place-items-center rounded-full bg-[#3b82f6] text-white">
          <IconCheck className="h-6 w-6" />
        </span>
        <p className="mt-3 font-display text-lg font-bold text-[#2f5d73]">
          Check your inbox.
        </p>
        <p className="mt-1 text-sm text-[#4b5563]">
          The free SEO quick-win checklist is on its way. Check spam if you don&apos;t see it within 2 minutes.
        </p>
        <a
          href="/free-checklist"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563eb] underline-offset-2 hover:underline"
        >
          Or open the checklist right now
        </a>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className="w-full max-w-md">
        {headline && (
          <p className="mb-3 font-display text-lg font-bold text-[#2f5d73]">
            {headline}
          </p>
        )}
        {sub && (
          <p className="mb-4 text-sm leading-relaxed text-[#4b5563]">
            {sub}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Your best email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-xl border border-[#d1d5db] bg-white px-4 py-3.5 text-[15px] text-[#1f2933] shadow-sm outline-none transition placeholder:text-[#9ca3af] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary shrink-0 px-7 py-3.5 text-[15px]"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Sending…
              </span>
            ) : (
              "Get free checklist"
            )}
          </button>
        </form>
        <p className="mt-2.5 text-[12px] text-[#9ca3af]">
          Free · no spam · unsubscribe anytime · we respect your inbox
        </p>
      </div>
    );
  }

  // Inline variant (default)
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        placeholder="Your best email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-[15px] text-[#1f2933] shadow-sm outline-none transition placeholder:text-[#9ca3af] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary shrink-0 px-6 py-3 text-sm"
      >
        {status === "loading" ? "Sending…" : "Send me the checklist"}
      </button>
    </form>
  );
}
