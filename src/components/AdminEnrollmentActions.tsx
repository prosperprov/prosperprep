"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Action = "scholarship" | "cancel" | "activate_demo";

export function AdminEnrollmentActions({
  enrollmentId,
  status,
}: {
  enrollmentId: string;
  status: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState<Action | null>(null);
  const [error, setError] = useState("");

  async function run(action: Action) {
    setBusy(action);
    setError("");
    const res = await fetch("/api/admin/enrollments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enrollmentId, action }),
    });
    const data = await res.json();
    setBusy(null);
    if (!res.ok) {
      setError(data.error || "Update failed");
      return;
    }
    router.refresh();
  }

  const isActive = status === "ACTIVE";

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-wrap gap-1">
        {!isActive && (
          <button
            type="button"
            disabled={busy !== null}
            onClick={() => run("scholarship")}
            className="rounded-lg border border-emerald-700 bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-900 hover:bg-emerald-100 disabled:opacity-60"
          >
            {busy === "scholarship" ? "…" : "Grant scholarship"}
          </button>
        )}
        {isActive && (
          <button
            type="button"
            disabled={busy !== null}
            onClick={() => run("cancel")}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
          >
            {busy === "cancel" ? "…" : "Cancel"}
          </button>
        )}
        {!isActive && (
          <button
            type="button"
            disabled={busy !== null}
            onClick={() => run("activate_demo")}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
          >
            {busy === "activate_demo" ? "…" : "Activate demo"}
          </button>
        )}
        {isActive && (
          <button
            type="button"
            disabled={busy !== null}
            onClick={() => run("scholarship")}
            className="rounded-lg border border-emerald-700 bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-900 hover:bg-emerald-100 disabled:opacity-60"
          >
            {busy === "scholarship" ? "…" : "Mark scholarship"}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
