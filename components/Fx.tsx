"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Fx() {
  useEffect(() => {
    document.documentElement.classList.add("js-on");

    const mm = gsap.matchMedia();
    let stickyObserver: IntersectionObserver | null = null;

    // Collected for manual cleanup (magnetic button listeners)
    const magneticHandlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    let progressHandler: (() => void) | null = null;

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // On small screens, keep reveals vertical-only. Horizontal offsets
      // (data-fx="left"/"right") nudge cards sideways past the viewport edge
      // mid-animation, making rounded cards look clipped/off-center.
      const isMobile = window.innerWidth < 768;
      const ctx = gsap.context(() => {
        // Hero entrance — staggered, layered reveal
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo("#hero-badge", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.05)
          .fromTo("#hero-title", { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.12)
          .fromTo("#hero-sub", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.28)
          .fromTo("#hero-cta", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.38)
          .fromTo("#hero-trust", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.46)
          .fromTo("#hero-chips", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.52)
          .fromTo(
            "#hero-cover",
            { y: 36, opacity: 0, scale: 0.97 },
            { y: 0, opacity: 1, scale: 1, duration: 0.9 },
            0.25
          )
          .fromTo(
            "#hero-stats > *",
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, stagger: 0.07 },
            0.55
          );

        // Scroll reveals — group siblings for staggered playback
        const fxEls = gsap.utils.toArray<HTMLElement>("[data-fx]");

        // Group elements by their immediate parent so cards in the same grid stagger together
        const groups = new Map<HTMLElement, HTMLElement[]>();
        fxEls.forEach((el) => {
          const parent = el.parentElement as HTMLElement;
          if (!parent) return;
          if (!groups.has(parent)) groups.set(parent, []);
          groups.get(parent)!.push(el);
        });

        groups.forEach((siblings) => {
          const kind = siblings[0]?.dataset?.fx || "up";
          const horizontal = !isMobile && (kind === "left" || kind === "right");
          if (siblings.length > 1) {
            // Stagger group
            gsap.fromTo(
              siblings,
              horizontal
                ? kind === "left"
                  ? { x: -36, opacity: 0 }
                  : { x: 36, opacity: 0 }
                : kind === "scale" && !isMobile
                  ? { scale: 0.95, opacity: 0 }
                  : { y: 28, opacity: 0 },
              {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 0.75,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: { trigger: siblings[0], start: "top 90%", once: true },
              }
            );
          } else {
            // Single element — animate individually
            const el = siblings[0];
            let kind = el.dataset.fx || "up";
            const from: gsap.TweenVars = { opacity: 0, duration: 0.75, ease: "power3.out" };
            // Mobile: horizontal/scale reveals become vertical-only so
            // rounded cards never slide sideways out of the container.
            if (isMobile && (kind === "left" || kind === "right" || kind === "scale")) kind = "up";
            if (kind === "up") from.y = 28;
            if (kind === "left") from.x = -36;
            if (kind === "right") from.x = 36;
            if (kind === "scale") from.scale = 0.95;
            gsap.fromTo(
              el,
              from,
              {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                duration: 0.75,
                ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              }
            );
          }
        });

        // Counters — run once
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = Number(el.dataset.count || 0);
          const obj = { n: 0 };
          gsap.to(obj, {
            n: target,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 94%", once: true },
            onUpdate: () => {
              el.textContent = String(Math.round(obj.n));
            },
          });
        });

        // Parallax depth — hero cover and floating cards move at different rates
        if (window.innerWidth >= 1024) {
          // Cover drift (existing, enhanced)
          gsap.to("#hero-cover-inner", {
            y: -14,
            ease: "none",
            scrollTrigger: { trigger: "#top", start: "top top", end: "60% top", scrub: 1 },
          });
          // Floating value card drifts faster (closer to viewer)
          gsap.to("#hero-cover .cover-glow", {
            y: 30,
            ease: "none",
            scrollTrigger: { trigger: "#top", start: "top top", end: "60% top", scrub: 1.5 },
          });
        }

        // Magnetic CTA buttons — subtle cursor attraction (desktop, pointer:fine only)
        if (window.matchMedia("(pointer: fine)").matches) {
          const magnets = gsap.utils.toArray<HTMLElement>(".btn-primary");

          magnets.forEach((el) => {
            const move = (e: MouseEvent) => {
              const rect = el.getBoundingClientRect();
              const x = e.clientX - (rect.left + rect.width / 2);
              const y = e.clientY - (rect.top + rect.height / 2);
              const dist = Math.sqrt(x * x + y * y);
              const maxDist = 90;
              if (dist > maxDist) {
                gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
                return;
              }
              const pull = 0.35;
              gsap.to(el, { x: x * pull, y: y * pull, duration: 0.3, ease: "power2.out" });
            };
            const leave = () => {
              gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
            };
            el.addEventListener("mousemove", move);
            el.addEventListener("mouseleave", leave);
            magneticHandlers.push({ el, move, leave });
          });
        }
      });

      // Scroll progress bar — thin gradient bar at the very top
      const progressEl = document.querySelector("#scroll-progress > div") as HTMLElement | null;
      if (progressEl) {
        progressHandler = () => {
          const h = document.documentElement;
          const max = h.scrollHeight - h.clientHeight;
          const pct = max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0;
          progressEl.style.width = `${pct}%`;
        };
        progressHandler();
        window.addEventListener("scroll", progressHandler, { passive: true });
      }

      // Sticky mobile buy bar — show after hero
      const bar = document.getElementById("sticky-buy");
      const hero = document.getElementById("top");
      if (bar && hero && "IntersectionObserver" in window) {
        stickyObserver = new IntersectionObserver(
          ([entry]) => bar.classList.toggle("is-visible", !entry.isIntersecting),
          { threshold: 0 }
        );
        stickyObserver.observe(hero);
      }

      ScrollTrigger.refresh();

      // Fail-safe: recalc triggers after fonts/images settle (layout shift
      // can otherwise leave above-fold items stuck at opacity 0).
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);

      // Fail-safe: force-reveal any IN-VIEWPORT item still invisible after 3s.
      // Below-fold items are untouched so scroll animations still play.
      const safety = window.setTimeout(() => {
        document.querySelectorAll<HTMLElement>("[data-fx]").forEach((el) => {
          const r = el.getBoundingClientRect();
          const inView = r.top < window.innerHeight * 0.95 && r.bottom > 0;
          if (inView && Number(getComputedStyle(el).opacity) < 0.1) {
            el.style.opacity = "1";
            el.style.transform = "none";
          }
        });
        ScrollTrigger.refresh();
      }, 3000);

      return () => {
        ctx.revert();
        stickyObserver?.disconnect();
        stickyObserver = null;
        window.removeEventListener("load", onLoad);
        window.clearTimeout(safety);
        // Cleanup magnetic button listeners
        magneticHandlers.forEach(({ el, move, leave }) => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        });
        magneticHandlers.length = 0;
        // Cleanup progress bar
        if (progressHandler) {
          window.removeEventListener("scroll", progressHandler);
          progressHandler = null;
        }
      };
    });

    // If reduced motion: still show sticky bar logic without GSAP
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.querySelectorAll("[data-fx]").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
      });
    }

    return () => {
      mm.revert();
      stickyObserver?.disconnect();
    };
  }, []);

  return null;
}
