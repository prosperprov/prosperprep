"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLink = { href: string; label: string };

export function MobileNav({
  links,
  authSlot,
}: {
  links: NavLink[];
  authSlot: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-50"
        aria-expanded={open}
        aria-controls="mobile-primary-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open && (
        <div
          id="mobile-primary-nav"
          className="absolute left-0 right-0 top-full z-50 border-b border-slate-200 bg-white px-4 py-4 shadow-lg"
        >
          <nav className="flex flex-col gap-1 text-base text-slate-700">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="min-h-[44px] rounded-lg px-3 py-3 hover:bg-emerald-50 hover:text-emerald-900"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">{authSlot}</div>
        </div>
      )}
    </div>
  );
}
