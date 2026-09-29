"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function MarkCompleteButton({
  lessonId,
  initiallyCompleted,
  size = "default",
}: {
  lessonId: string;
  initiallyCompleted: boolean;
  /** Grade 6 immersive: larger tap targets */
  size?: "default" | "large";
}) {
  const router = useRouter();
  const [completed, setCompleted] = useState(initiallyCompleted);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function toggle() {
    setPending(true);
    setError(null);
    try {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, completed: !completed }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Could not update progress");
      }
      setCompleted(!completed);
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setPending(false);
    }
  }

  const large = size === "large";

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={toggle}
        disabled={pending}
        className={
          completed
            ? large
              ? "min-h-[52px] rounded-2xl border-2 border-emerald-700 bg-emerald-50 px-6 py-3 text-base font-bold text-emerald-900 hover:bg-emerald-100 disabled:opacity-60"
              : "rounded-lg border border-emerald-700 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-100 disabled:opacity-60"
            : large
              ? "min-h-[52px] rounded-2xl bg-emerald-700 px-6 py-3 text-base font-bold text-white hover:bg-emerald-800 disabled:opacity-60"
              : "rounded-lg bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900 disabled:opacity-60"
        }
      >
        {pending
          ? "Saving…"
          : completed
            ? large
              ? "Completed ✓ (tap to undo)"
              : "Completed ✓ (undo)"
            : large
              ? "✓ Mark complete"
              : "Mark complete"}
      </button>
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
}
