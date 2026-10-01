"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Home, MessageCircle } from "lucide-react";
import { MESSAGE_PULSE_EVENT } from "@/components/messaging/liveConstants";

/**
 * Floating bottom dock for logged-in students on ALL viewports.
 * Always visible (no lg:/md: breakpoint hide) so Dashboard + Messages cannot
 * disappear due to Tailwind purge or wide phone desktop mode.
 * Sits above lesson content; globals.css pads main whenever the dock mounts.
 * Explicitly full viewport width so it never leaves a white strip on mobile.
 */
export function StudentMobileDock({
  dashboardHref,
  messagesHref = "/dashboard/student/messages",
  unreadCount = 0,
  audience = "student",
  homeLabel = "Dashboard",
}: {
  dashboardHref: string;
  messagesHref?: string;
  unreadCount?: number;
  audience?: "student" | "staff";
  homeLabel?: string;
}) {
  const { data: session, status } = useSession();
  const role = session?.user?.role;
  const pathname = usePathname() || "";
  const [liveUnread, setLiveUnread] = useState(unreadCount);
  useEffect(() => setLiveUnread(unreadCount), [unreadCount]);
  useEffect(() => {
    const fn = (event: Event) => {
      const detail = (event as CustomEvent<{ unreadCount?: number }>).detail;
      if (typeof detail?.unreadCount === "number") setLiveUnread(detail.unreadCount);
    };
    window.addEventListener(MESSAGE_PULSE_EVENT, fn);
    return () => window.removeEventListener(MESSAGE_PULSE_EVENT, fn);
  }, []);
  // Server only mounts this for the matching role. After hydration, unmount if
  // the client session does not match. While status is "loading", keep the
  // server HTML so we don't hydration-mismatch.
  if (status !== "loading") {
    if (audience === "student" && role !== "STUDENT") return null;
    if (audience === "staff" && role !== "TEACHER" && role !== "ADMIN") return null;
  }

  const onDash =
    pathname === dashboardHref || pathname.startsWith(`${dashboardHref}/`);
  const onMessages =
    pathname === messagesHref || pathname.startsWith(`${messagesHref}/`);

  const badge =
    liveUnread > 0 ? (
      <span className="absolute -right-1 -top-1 inline-flex min-w-[1.15rem] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold leading-4 text-white">
        {liveUnread > 9 ? "9+" : liveUnread}
      </span>
    ) : null;

  return (
    <nav
      aria-label={audience === "staff" ? "Teacher quick navigation" : "Student quick navigation"}
      data-student-mobile-dock
      data-app-dock
      className="fixed bottom-0 left-0 right-0 z-[100] flex w-full max-w-none border-t border-emerald-900/10 bg-white px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_24px_rgba(2,44,34,0.22)]"
      style={{ display: "flex", width: "100%", left: 0, right: 0 }}
    >
      <ul className="mx-auto flex w-full max-w-md items-stretch justify-around gap-2">
        <li className="min-w-0 flex-1">
          <Link
            href={dashboardHref}
            className={`flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 text-xs font-semibold ${
              onDash && !onMessages
                ? "bg-emerald-100 text-emerald-950"
                : "text-slate-600 hover:bg-emerald-50"
            }`}
            aria-current={onDash && !onMessages ? "page" : undefined}
          >
            <Home className="h-5 w-5" aria-hidden />
            {homeLabel}
          </Link>
        </li>
        <li className="min-w-0 flex-1">
          <Link
            href={messagesHref}
            className={`relative flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 text-xs font-semibold ${
              onMessages
                ? "bg-emerald-100 text-emerald-950"
                : "text-slate-600 hover:bg-emerald-50"
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
