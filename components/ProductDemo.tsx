"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { track, trackMetaCustom } from "@/lib/analytics";

// ------------------------------------------------------------------
// 60-second product demo — sits right under the hero.
//
// Static-export friendly: the video is served from /public, and
// preload="none" means nothing downloads until the visitor hits play
// (desktop 5.3 MB / mobile 3.3 MB, poster frame shown instead).
// Fires GA4 "demo_played" + Meta "ViewContent" to see how often the
// demo converts.
// ------------------------------------------------------------------

const DESKTOP_SRC = "/demo.mp4";
const MOBILE_SRC = "/demo-mobile.mp4";
const POSTER = "/demo-poster.jpg";

export default function ProductDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState("");
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    setSrc(isMobile ? MOBILE_SRC : DESKTOP_SRC);
  }, []);

  const start = useCallback(() => {
    const v = videoRef.current;
    if (!v || playing || failed) return;
    v.play().catch(() => setFailed(true));
  }, [playing, failed]);

  const handlePlay = useCallback(() => {
    setPlaying(true);
    const v = videoRef.current;
    if (v) v.controls = true;
    track("demo_played", { source: src || "unknown" });
    trackMetaCustom("DemoPlayed", { source: src || "unknown" });
  }, [src]);

  return (
    <section id="demo" className="relative w-full scroll-mt-28">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 safe-pad sm:px-6 md:py-16">
        <div className="overflow-hidden rounded-[1.4rem] bg-[#0e2230] shadow-[0_30px_70px_-30px_rgba(15,40,55,0.6)] ring-1 ring-[#d1d5db]">
          <div className="group relative aspect-video w-full">
            <video
              ref={videoRef}
              className="h-full w-full bg-[#0e2230] object-contain"
              src={src}
              poster={POSTER}
              preload="none"
              playsInline
              onClick={start}
              onPlay={handlePlay}
              onError={() => setFailed(true)}
              aria-label="60-second product demo — the playbook, trackers, and roadmap in action"
            />

            {/* Play overlay (shown until playback starts) */}
            {!playing && !failed && (
              <button
                type="button"
                onClick={start}
                aria-label="Play the demo"
                className="absolute inset-0 grid cursor-pointer place-items-center bg-black/15 transition group-hover:bg-black/5"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-[#3b82f6] text-white shadow-[0_16px_40px_-8px_rgba(37,99,235,0.9)] transition group-hover:scale-110 sm:h-20 sm:w-20">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-7 w-7 sm:h-8 sm:w-8"
                    aria-hidden="true"
                  >
                    <path d="M8 5.14v13.72L19 12 8 5.14z" />
                  </svg>
                </span>
                <span className="absolute bottom-4 inset-x-0 mx-auto w-fit rounded-full bg-black/55 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  1:09 · the playbook, trackers &amp; roadmap in action
                </span>
              </button>
            )}

            {failed && (
              <div className="absolute inset-0 grid place-items-center bg-black/50 p-6 text-center">
                <p className="text-sm text-white/90">
                  Video couldn&apos;t load on this device.{" "}
                  <span className="font-semibold">The full tour is in the section below.</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* what you'll see */}
        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {["The Playbook — PDF + Word", "5 execution trackers", "Bonus resources", "Lifetime updates"].map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-[#9ca3af]">
          Sound on for the full walkthrough · ~1 minute · no signup needed
        </p>
      </div>
    </section>
  );
}