import { ReactNode } from "react";

/**
 * Logged-in school area: dark green brand shell matching the public homepage hero.
 * Cards and forms stay on light surfaces for contrast; chrome/titles sit on the gradient.
 * Full-bleed width so mobile never shows a white strip beside the shell.
 */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div
      data-school-dash
      className="relative w-full min-w-0 max-w-full flex-1 overflow-x-clip bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-emerald-50"
      style={{ minHeight: "100%" }}
    >
      {/* Soft mint glow — same premium feel as the marketing hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(52,211,153,0.18),_transparent_55%)]"
      />
      <div className="relative z-[1] w-full min-w-0 max-w-full">{children}</div>
    </div>
  );
}
