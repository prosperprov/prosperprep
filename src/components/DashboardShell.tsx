import Link from "next/link";
import { ReactNode } from "react";

export function DashboardShell({
  title,
  subtitle,
  nav,
  children,
}: {
  title: string;
  subtitle?: string;
  nav: { href: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-5">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-1 text-sm font-medium text-emerald-300/95 md:text-base">{subtitle}</p>
        )}
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-emerald-400/45 bg-emerald-950/40 px-3 py-1.5 text-sm font-medium text-emerald-50 shadow-sm backdrop-blur-sm transition hover:border-emerald-300 hover:bg-emerald-800/50 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="school-dash-body w-full min-w-0">{children}</div>
    </div>
  );
}
