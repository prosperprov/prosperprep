"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MESSAGE_POLL_MS, MESSAGE_PULSE_EVENT } from "@/components/messaging/liveConstants";

type Latest = {
  messageId: string;
  threadId: string;
  senderName: string;
  subject: string;
  preview: string;
  createdAt: string;
};

function dispatchUnread(unreadCount: number) {
  window.dispatchEvent(
    new CustomEvent(MESSAGE_PULSE_EVENT, { detail: { unreadCount } })
  );
}

/** Header/dock badge that tracks the pulse without waiting for a reload. */
export function LiveUnreadBadge({ initial }: { initial: number }) {
  const [n, setN] = useState(initial);
  useEffect(() => setN(initial), [initial]);
  useEffect(() => {
    const fn = (event: Event) => {
      const detail = (event as CustomEvent<{ unreadCount?: number }>).detail;
      if (typeof detail?.unreadCount === "number") setN(detail.unreadCount);
    };
    window.addEventListener(MESSAGE_PULSE_EVENT, fn);
    return () => window.removeEventListener(MESSAGE_PULSE_EVENT, fn);
  }, []);
  if (n <= 0) return null;
  return (
    <span className="ml-1 inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
      {n > 9 ? "9+" : n}
    </span>
  );
}

/**
 * Polls /api/messages/pulse while a student, teacher, or admin is signed in.
 * A new incoming message raises a banner and soft-refreshes server badges.
 * The open thread itself polls, so the banner is skipped there.
 */
export function MessageLiveAlerts({
  initialUnread,
  initialLatestId,
  messagesHref,
}: {
  initialUnread: number;
  initialLatestId: string | null;
  messagesHref: string;
}) {
  const router = useRouter();
  const pathname = usePathname() || "";
  const seenRef = useRef<string | null>(initialLatestId);
  const [toast, setToast] = useState<Latest | null>(null);
  void initialUnread;

  useEffect(() => {
    let cancelled = false;

    async function tick() {
      try {
        const res = await fetch("/api/messages/pulse", { cache: "no-store" });
        if (!res.ok || cancelled) return;
        const data = (await res.json()) as {
          unreadCount?: number;
          latest?: Latest | null;
        };
        if (cancelled) return;
        dispatchUnread(data.unreadCount ?? 0);
        const latest = data.latest ?? null;
        if (!latest || latest.messageId === seenRef.current) return;
        seenRef.current = latest.messageId;
        const onThisThread = pathname.includes(`/messages/${latest.threadId}`);
        if (!onThisThread) setToast(latest);
        router.refresh();
      } catch {
        // Next poll retries. A dropped pulse must not break the page.
      }
    }

    void tick();
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") void tick();
    }, MESSAGE_POLL_MS);
    const onVisible = () => {
      if (document.visibilityState === "visible") void tick();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);
    return () => {
      cancelled = true;
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, [pathname, router]);

  if (!toast) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-16 z-[110] flex justify-center px-3"
      aria-live="polite"
    >
      <div
        role="status"
        className="pointer-events-auto w-full max-w-lg rounded-2xl border-2 border-emerald-700 bg-white p-4 shadow-lg"
      >
        <p className="text-sm font-bold text-emerald-950">
          New message from {toast.senderName}
        </p>
        <p className="mt-1 text-sm text-slate-700">
          <span className="font-semibold">{toast.subject}.</span> {toast.preview}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href={`${messagesHref}/${toast.threadId}`}
            onClick={() => setToast(null)}
            className="inline-flex min-h-[44px] items-center rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900"
          >
            Open
          </Link>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="min-h-[44px] rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
