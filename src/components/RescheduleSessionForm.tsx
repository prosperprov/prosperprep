"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

/** Additive control on existing sessions — does not change CreateSessionForm. */
export function RescheduleSessionForm({
  sessionId,
  initialLocal,
}: {
  sessionId: string;
  /** datetime-local value in local browser time */
  initialLocal: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setOk("");
    const fd = new FormData(e.currentTarget);
    const local = String(fd.get("scheduledAt"));
    const scheduledAt = new Date(local).toISOString();
    const res = await fetch(`/api/sessions/${sessionId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scheduledAt }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Could not reschedule");
      return;
    }
    setOk(
      `Updated. Notified ${data.notifiedStudents ?? 0} student${
        (data.notifiedStudents ?? 0) === 1 ? "" : "s"
      }.`
    );
    setOpen(false);
    router.refresh();
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
      >
        Reschedule
      </button>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-end">
      <label className="text-sm">
        <span className="text-slate-600">New date & time</span>
        <input
          name="scheduledAt"
          type="datetime-local"
          required
          defaultValue={initialLocal}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      </label>
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-emerald-800 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-900 disabled:opacity-60"
        >
          {loading ? "Saving…" : "Save & notify"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
        >
          Cancel
        </button>
      </div>
      {error && <p className="text-xs text-red-700 sm:col-span-2">{error}</p>}
      {ok && <p className="text-xs text-emerald-800 sm:col-span-2">{ok}</p>}
    </form>
  );
}
