"use client";

import { useEffect, useState } from "react";
import { CHECKOUT_URL, PRODUCT } from "@/lib/site";
import { IconArrowRight, IconMenu } from "@/components/Icons";

const links = [
  ["#learn", "What you learn"],
  ["#how", "How it works"],
  ["#included", "What's included"],
  ["#pricing", "Pricing"],
  ["#faq", "FAQ"],
] as const;

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#2f5d73] shadow-[inset_0_0_0_1.5px_#d1d5db] transition hover:bg-[#f5f7f9]"
      >
        {open ? (
          <span aria-hidden="true" className="text-xl font-bold leading-none">×</span>
        ) : (
          <IconMenu className="h-6 w-6" />
        )}
      </button>

      {/* backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`menu-backdrop fixed inset-0 z-40 bg-[#2f5d73]/30 backdrop-blur-[2px] ${open ? "is-open" : ""}`}
      />

      <div
        className={`menu-panel fixed inset-x-4 top-[4.5rem] z-50 rounded-3xl border border-[#d1d5db] bg-white/98 p-3 shadow-[0_24px_60px_-20px_rgba(47, 93, 115, 0.4)] backdrop-blur-xl ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="flex min-h-12 items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold text-[#2f5d73] transition hover:bg-[#f5f7f9]"
            >
              {label}
              <IconArrowRight className="h-4 w-4 text-[#3b82f6]" />
            </a>
          ))}
        </nav>
        <a
          href={CHECKOUT_URL}
          tabIndex={open ? 0 : -1}
          className="btn btn-primary mt-2 w-full px-6 py-4 text-[15px]"
        >
          Get instant access — ${PRODUCT.launchPrice}
        </a>
        <p className="mt-2 pb-1 text-center text-xs text-[#9ca3af]">
          Lifetime updates · instant download
        </p>
      </div>
    </div>
  );
}
