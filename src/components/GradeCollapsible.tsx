"use client";

import { useId, useState, type ReactNode, type SyntheticEvent } from "react";

type GradeCollapsibleProps = {
  /** Visible grade title, e.g. "Grade 6". */
  label: string;
  /** Right-side summary counts, e.g. "12 students · 2 live". */
  summary: string;
  /** Start expanded. Prefer false so the dashboard stays compact. */
  defaultOpen?: boolean;
  /** Optional search field shown when the section is open. */
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  /** Extra classes on the outer details. */
  className?: string;
  children: ReactNode;
};

/**
 * Collapsed-by-default grade block for teacher dashboard panels.
 * Matches Live Sessions past-disclosure chrome (emerald, mobile-safe).
 */
export function GradeCollapsible({
  label,
  summary,
  defaultOpen = false,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  className = "",
  children,
}: GradeCollapsibleProps) {
  const searchId = useId();
  const [open, setOpen] = useState(defaultOpen);
  const showSearch = Boolean(searchPlaceholder && onSearchChange);

  function onToggle(e: SyntheticEvent<HTMLDetailsElement>) {
    setOpen(e.currentTarget.open);
  }

  return (
    <details
      className={`group min-w-0 overflow-x-hidden rounded-xl border border-emerald-400/30 bg-emerald-950/35 open:pb-3 ${className}`}
      open={open}
      onToggle={onToggle}
    >
      <summary className="cursor-pointer list-none px-3 py-3 text-sm font-semibold text-emerald-50 marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex min-w-0 flex-wrap items-center justify-between gap-2">
          <span className="inline-flex min-w-0 items-center gap-2">
            <span
              aria-hidden
              className="inline-block text-emerald-300 transition-transform group-open:rotate-90"
            >
              ▸
            </span>
            <span className="truncate text-base font-bold text-white sm:text-sm sm:font-semibold sm:text-emerald-50">
              {label}
            </span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-200/75">
            {summary}
          </span>
        </span>
      </summary>
      <div className="min-w-0 space-y-3 px-3 pt-1">
        {showSearch ? (
          <label htmlFor={searchId} className="block min-w-0">
            <span className="sr-only">Search {label}</span>
            <input
              id={searchId}
              type="search"
              value={searchValue ?? ""}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full min-w-0 rounded-lg border border-emerald-400/40 bg-emerald-950/60 px-3 py-2 text-sm text-emerald-50 placeholder:text-emerald-200/55"
            />
          </label>
        ) : null}
        {children}
      </div>
    </details>
  );
}

/** Case-insensitive substring match against one or more haystacks. */
export function matchesStudentQuery(
  query: string,
  ...parts: Array<string | null | undefined>
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return parts.some((p) => (p ?? "").toLowerCase().includes(q));
}
