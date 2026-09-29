import Link from "next/link";
import { subjectIslandStyle } from "@/lib/grade6Classroom";

export function SubjectIsland({
  href,
  subject,
  title,
  done,
  total,
}: {
  href: string;
  subject: string;
  title: string;
  done: number;
  total: number;
}) {
  const style = subjectIslandStyle(subject);
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <Link
      href={href}
      className={`group flex min-h-[120px] flex-col justify-between rounded-3xl border-2 p-5 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${style.accent}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-2xl shadow-sm"
          aria-hidden
        >
          {style.emoji}
        </span>
        <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${style.badge}`}>
          {style.shortLabel}
        </span>
      </div>
      <div className="mt-3">
        <p className="text-base font-bold leading-snug text-slate-900 group-hover:underline">
          {title}
        </p>
        <p className="mt-1 text-sm font-medium text-slate-700">
          {done}/{total} lessons · {pct}%
        </p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/70">
          <div
            className="h-full rounded-full bg-slate-800/70 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </Link>
  );
}
