"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export type ThreadMessage = {
  id: string;
  body: string;
  createdAt: string;
  sender: { id: string; name: string; role: string };
};

export function ThreadViewClient({
  threadId,
  subject,
  type,
  backHref,
  messages: initial,
  currentUserId,
}: {
  threadId: string;
  subject: string;
  type: string;
  backHref: string;
  messages: ThreadMessage[];
  currentUserId: string;
}) {
  const router = useRouter();
  const [body, setBody] = useState("");
  const [messages, setMessages] = useState(initial);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!body.trim()) return;
    setLoading(true);
    const res = await fetch(`/api/messages/threads/${threadId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body: body.trim() }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Could not send");
      return;
    }
    setMessages((prev) => [...prev, data.message]);
    setBody("");
    router.refresh();
  }

  const typeLabel =
    type === "BLAST" ? "Announcement" : type === "GROUP" ? "Group" : "Direct message";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={backHref}
          className="inline-flex min-h-[44px] items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-emerald-300"
        >
          ← Inbox
        </Link>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
          {typeLabel}
        </span>
      </div>
      <h2 className="text-xl font-bold text-slate-900">{subject}</h2>

      <ul className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
        {messages.map((m) => {
          const mine = m.sender.id === currentUserId;
          return (
            <li key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[90%] rounded-2xl px-4 py-3 sm:max-w-[75%] ${
                  mine ? "bg-emerald-800 text-white" : "bg-slate-100 text-slate-900"
                }`}
              >
                <p
                  className={`text-xs font-semibold ${
                    mine ? "text-emerald-100" : "text-slate-500"
                  }`}
                >
                  {m.sender.name}
                  {m.sender.role === "TEACHER" ? " · Teacher" : ""}
                </p>
                <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed">{m.body}</p>
                <p
                  className={`mt-1 text-[11px] ${mine ? "text-emerald-200" : "text-slate-400"}`}
                >
                  {new Date(m.createdAt).toLocaleString("en-US", {
                    timeZone: "America/Chicago",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}{" "}
                  CT
                </p>
              </div>
            </li>
          );
        })}
        {messages.length === 0 && (
          <li className="text-sm text-slate-500">No messages in this thread yet.</li>
        )}
      </ul>

      <form onSubmit={onSubmit} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Reply</span>
          <textarea
            className="mt-1 min-h-[96px] w-full rounded-lg border border-slate-300 px-3 py-2 text-base"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Type your message…"
            maxLength={8000}
            required
          />
        </label>
        {error && <p className="text-sm text-red-700">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="min-h-[48px] w-full rounded-xl bg-emerald-800 px-4 py-3 text-base font-semibold text-white hover:bg-emerald-900 disabled:opacity-60 sm:w-auto"
        >
          {loading ? "Sending…" : "Send reply"}
        </button>
      </form>
    </div>
  );
}
