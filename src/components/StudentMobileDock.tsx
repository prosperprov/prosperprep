"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageCircle } from "lucide-react";

/**
 * Floating bottom dock for logged-in students (phone + tablet; hidden at lg+).
 * Quick access to Dashboard + Messages with unread badge.
 * Sits above lesson content; the global layout reserves its mobile height.
 */
export function StudentMobileDock({
  dashboardHref,
  unreadCount = 0,
}: {
  dashboardHref: string;
  unreadCount?: number;
}) {
  const pathname = usePathname() || "";
  const onDash =
    pathname === dashboardHref || pathname.startsWith(`${dashboardHref}/`);
  const onMessages =
    pathname === "/dashboard/student/messages" ||
    pathname.startsWith("/dashboard/student/messages/");

  const badge =
    unreadCount > 0 ? (
      <span className="absolute -right-1 -top-1 inline-flex min-w-[1.15rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold leading-4 text-white">
        {unreadCount > 9 ? "9+" : unreadCount}
      </span>
    ) : null;

  return (
    <nav
      aria-label="Student quick navigation"
      data-student-mobile-dock
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_16px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around gap-2">
        <li className="flex-1">
          <Link
            href={dashboardHref}
            className={`flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 text-xs font-semibold ${
              onDash && !onMessages
                ? "bg-emerald-50 text-emerald-900"
                : "text-slate-600 hover:bg-slate-50"
            }`}
            aria-current={onDash && !onMessages ? "page" : undefined}
          >
            <Home className="h-5 w-5" aria-hidden />
            Dashboard
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/dashboard/student/messages"
            className={`relative flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 text-xs font-semibold ${
              onMessages
                ? "bg-sky-50 text-sky-950"
                : "text-slate-600 hover:bg-slate-50"
            }`}
            aria-current={onMessages ? "page" : undefined}
          >
            <span className="relative inline-flex">
              <MessageCircle className="h-5 w-5" aria-hidden />
              {badge}
            </span>
            Messages
          </Link>
        </li>
      </ul>
    </nav>
  );
}
