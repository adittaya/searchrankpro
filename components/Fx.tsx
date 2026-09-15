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

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // Hero entrance — includes headline, runs once on load
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

        // Scroll reveals — play once, no reverse flicker
        gsap.utils.toArray<HTMLElement>("[data-fx]").forEach((el) => {
          const kind = el.dataset.fx || "up";
          const from: gsap.TweenVars = { opacity: 0, duration: 0.75, ease: "power3.out" };
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

        // Gentle cover drift (desktop only, no scrub conflict)
        if (window.innerWidth >= 1024) {
          gsap.to("#hero-cover-inner", {
            y: -10,
            ease: "none",
            scrollTrigger: { trigger: "#top", start: "top top", end: "60% top", scrub: 1 },
          });
        }
      });

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
