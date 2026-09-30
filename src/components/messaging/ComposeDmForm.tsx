"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { DirectoryPayload } from "./InboxClient";

export function ComposeDmForm({
  directory,
  onDone,
  threadBase,
  initialRecipientId = "",
  initialSubject = "",
  initialBody = "",
  lockRecipient = false,
  courseId,
  heading = "New direct message",
  hint,
}: {
  directory: DirectoryPayload;
  onDone: () => void;
  threadBase: string;
  initialRecipientId?: string;
  initialSubject?: string;
  initialBody?: string;
  /** Hide the recipient picker. Used by Ask your teacher. */
  lockRecipient?: boolean;
  courseId?: string;
  heading?: string;
  hint?: string;
}) {
  const router = useRouter();
  const [recipientId, setRecipientId] = useState(initialRecipientId);
  const [body, setBody] = useState(initialBody);
  const [subject, setSubject] = useState(initialSubject);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const options = useMemo(() => {
    const rows: { id: string; label: string }[] = [];
    for (const t of directory.teachers) {
      rows.push({ id: t.id, label: `Teacher · ${t.name}` });
    }
    for (const s of directory.students) {
      rows.push({ id: s.id, label: `Student · ${s.name} (G${s.grade})` });
    }
    for (const c of directory.classmates) {
      rows.push({ id: c.id, label: `Classmate · ${c.name}` });
    }
    return rows;
  }, [directory]);

  const lockedLabel =
    options.find((o) => o.id === recipientId)?.label ?? "Your teacher";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!recipientId) {
      setError("Pick someone to message.");
      return;
    }
    if (!body.trim()) {
      setError("Write a message.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/messages/dm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        recipientId,
        body: body.trim(),
        subject: subject.trim() || undefined,
        courseId: courseId || undefined,
      }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Could not send");
      return;
    }
    onDone();
    router.push(`${threadBase}/${data.threadId}`);
    router.refresh();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <h3 id="ask-teacher-title" className="text-base font-semibold text-slate-900">
        {heading}
      </h3>
      {hint ? <p className="text-sm text-slate-600">{hint}</p> : null}
      {lockRecipient ? (
        <p className="block text-sm">
          <span className="font-medium text-slate-700">To</span>
          <span className="mt-1 flex min-h-[44px] items-center rounded-lg border border-slate-200 bg-slate-50 px-3 font-semibold text-slate-900">
            {lockedLabel}
          </span>
        </p>
      ) : (
        <label className="block text-sm">
          <span className="font-medium text-slate-700">To</span>
          <select
            className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3"
            value={recipientId}
            onChange={(e) => setRecipientId(e.target.value)}
          >
            <option value="">Select…</option>
            {options.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      )}
      <label className="block text-sm">
        <span className="font-medium text-slate-700">Subject (optional)</span>
        <input
          className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 px-3"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          maxLength={200}
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-slate-700">Message</span>
        <textarea
          className="mt-1 min-h-[120px] w-full rounded-lg border border-slate-300 px-3 py-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          maxLength={8000}
          required
          autoFocus={lockRecipient}
        />
      </label>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          disabled={loading}
          className="min-h-[44px] rounded-lg bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900 disabled:opacity-60"
        >
          {loading ? "Sending…" : "Send"}
        </button>
        <button
          type="button"
          onClick={onDone}
          className="min-h-[44px] rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
