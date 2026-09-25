"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export type StudentNotificationItem = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  meetingUrl: string | null;
  kind: string;
};

export function StudentNotifications({
  items,
}: {
  items: StudentNotificationItem[];
}) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);

  if (items.length === 0) return null;

  async function dismiss(id: string) {
    setBusy(id);
    await fetch(`/api/notifications/${id}/read`, { method: "POST" });
    setBusy(null);
    router.refresh();
  }

  return (
    <section className="mb-6 space-y-3">
      <h2 className="text-lg font-semibold text-slate-900">Notifications</h2>
      <ul className="space-y-2">
        {items.map((n) => (
          <li
            key={n.id}
            className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-sm text-emerald-950"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-semibold">{n.title}</p>
                <p className="mt-1 text-emerald-900/90">{n.body}</p>
                <p className="mt-1 text-xs text-emerald-800/70">
                  {new Date(n.createdAt).toLocaleString("en-US", {
                    timeZone: "America/Chicago",
                  })}{" "}
                  CT
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                {n.meetingUrl && (
                  <a
                    href={n.meetingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-emerald-800 px-3 py-2 text-center text-sm font-medium text-white hover:bg-emerald-900"
                  >
                    Join
                  </a>
                )}
                <button
                  type="button"
                  disabled={busy === n.id}
                  onClick={() => dismiss(n.id)}
                  className="rounded-lg border border-emerald-300 bg-white px-3 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-50"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
