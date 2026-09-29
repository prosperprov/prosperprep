"use client";

import Link from "next/link";
import { useState } from "react";
import { ComposeDmForm } from "./ComposeDmForm";
import { BlastForm } from "./BlastForm";
import { GroupThreadForm } from "./GroupThreadForm";

export type InboxThread = {
  id: string;
  subject: string;
  type: string;
  grade: number | null;
  course: { id: string; title: string; grade: number } | null;
  createdBy: { id: string; name: string; role: string };
  participants: { id: string; name: string; role: string }[];
  participantCount: number;
  messageCount: number;
  lastMessage: {
    id: string;
    body: string;
    createdAt: string;
    sender: { id: string; name: string };
  } | null;
  unread: boolean;
  updatedAt: string;
  createdAt: string;
};

export type DirectoryPayload = {
  students: { id: string; name: string; email: string; grade: number }[];
  teachers: { id: string; name: string; email: string; grade: number }[];
  classmates: { id: string; name: string; email: string; grade: number }[];
};

function typeBadge(type: string) {
  if (type === "BLAST") return "bg-amber-100 text-amber-900";
  if (type === "GROUP") return "bg-sky-100 text-sky-900";
  return "bg-emerald-100 text-emerald-900";
}

function typeLabel(type: string) {
  if (type === "BLAST") return "Announcement";
  if (type === "GROUP") return "Group";
  return "DM";
}

export function MessagingInbox({
  basePath,
  role,
  currentUserId,
  inboxThreads,
  sentThreads,
  directory,
  courses,
  allowedGrades,
}: {
  basePath: "/dashboard/student/messages" | "/dashboard/teacher/messages";
  role: "STUDENT" | "TEACHER" | "ADMIN";
  currentUserId: string;
  inboxThreads: InboxThread[];
  sentThreads: InboxThread[];
  directory: DirectoryPayload;
  courses: { id: string; title: string; grade: number }[];
  allowedGrades: number[];
}) {
  const [box, setBox] = useState<"inbox" | "sent">("inbox");
  const [compose, setCompose] = useState<"dm" | "blast" | "group" | null>(null);
  const threads = box === "sent" ? sentThreads : inboxThreads;
  void currentUserId;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setBox("inbox")}
          className={`min-h-[44px] rounded-full px-4 py-2 text-sm font-semibold ${
            box === "inbox"
              ? "bg-emerald-800 text-white"
              : "border border-slate-200 bg-white text-slate-700"
          }`}
        >
          Inbox
        </button>
        <button
          type="button"
          onClick={() => setBox("sent")}
          className={`min-h-[44px] rounded-full px-4 py-2 text-sm font-semibold ${
            box === "sent"
              ? "bg-emerald-800 text-white"
              : "border border-slate-200 bg-white text-slate-700"
          }`}
        >
          Sent
        </button>
        <button
          type="button"
          onClick={() => setCompose(compose === "dm" ? null : "dm")}
          className="min-h-[44px] rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-100"
        >
          New message
        </button>
        {(role === "TEACHER" || role === "ADMIN") && (
          <>
            <button
              type="button"
              onClick={() => setCompose(compose === "blast" ? null : "blast")}
              className="min-h-[44px] rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-950 hover:bg-amber-100"
            >
              Class blast
            </button>
            <button
              type="button"
              onClick={() => setCompose(compose === "group" ? null : "group")}
              className="min-h-[44px] rounded-full border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-950 hover:bg-sky-100"
            >
              New group
            </button>
          </>
        )}
      </div>

      {compose === "dm" && (
        <ComposeDmForm
          directory={directory}
          onDone={() => setCompose(null)}
          threadBase={basePath}
        />
      )}
      {compose === "blast" && (role === "TEACHER" || role === "ADMIN") && (
        <BlastForm
          courses={courses}
          allowedGrades={allowedGrades}
          onDone={() => setCompose(null)}
          threadBase={basePath}
        />
      )}
      {compose === "group" && (role === "TEACHER" || role === "ADMIN") && (
        <GroupThreadForm
          courses={courses}
          allowedGrades={allowedGrades}
          onDone={() => setCompose(null)}
          threadBase={basePath}
        />
      )}

      {threads.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">
          No messages yet. Start a conversation with New message
          {role === "TEACHER" || role === "ADMIN"
            ? ", Class blast, or New group"
            : ""}
          .
        </p>
      ) : (
        <ul className="space-y-2">
          {threads.map((t) => {
            const preview = t.lastMessage?.body ?? "No messages yet";
            const when = t.lastMessage?.createdAt ?? t.updatedAt;
            const others = t.participants
              .map((p) => p.name)
              .slice(0, 3)
              .join(", ");
            return (
              <li key={t.id}>
                <Link
                  href={`${basePath}/${t.id}`}
                  className={`flex min-h-[64px] flex-col gap-1 rounded-xl border px-4 py-3 transition hover:border-emerald-300 sm:flex-row sm:items-center sm:justify-between ${
                    t.unread
                      ? "border-emerald-300 bg-emerald-50/60"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${typeBadge(
                          t.type
                        )}`}
                      >
                        {typeLabel(t.type)}
                      </span>
                      {t.unread && (
                        <span className="rounded-full bg-emerald-800 px-2 py-0.5 text-xs font-semibold text-white">
                          New
                        </span>
                      )}
                      <p className="truncate font-semibold text-slate-900">{t.subject}</p>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-slate-600">
                      {t.lastMessage
                        ? `${t.lastMessage.sender.name}: ${preview}`
                        : preview}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {others}
                      {t.participantCount > 3 ? ` +${t.participantCount - 3}` : ""} ·{" "}
                      {t.messageCount} message{t.messageCount === 1 ? "" : "s"}
                    </p>
                  </div>
                  <p className="shrink-0 text-xs text-slate-500">
                    {new Date(when).toLocaleString("en-US", {
                      timeZone: "America/Chicago",
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}{" "}
                    CT
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
