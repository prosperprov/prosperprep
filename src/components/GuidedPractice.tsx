"use client";

import { useState } from "react";
import type { GuidedPracticeItem } from "@/lib/guidedPractice";

export function GuidedPractice({ items }: { items: GuidedPracticeItem[] }) {
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  if (items.length === 0) return null;

  return (
    <section id="practice" className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50/40 p-5 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">Practice before the grade</p>
      <h2 className="mt-1 text-xl font-bold text-slate-900">Try it yourself</h2>
      <p className="mt-2 text-sm text-slate-700">Write your reasoning, then reveal a worked response. This practice is not graded; use it to prepare for the lesson check.</p>
      <div className="mt-6 space-y-6">
        {items.map((item, index) => (
          <div key={item.prompt} className="rounded-xl bg-white p-4 shadow-sm">
            <label htmlFor={`practice-${index}`} className="font-semibold text-slate-900">{index + 1}. {item.prompt}</label>
            <p className="mt-1 text-sm text-slate-600">Hint: {item.hint}</p>
            <textarea
              id={`practice-${index}`}
              rows={3}
              value={responses[index] ?? ""}
              onChange={(event) => setResponses((current) => ({ ...current, [index]: event.target.value }))}
              placeholder="Work out your answer here…"
              className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
            <button
              type="button"
              disabled={!responses[index]?.trim()}
              onClick={() => setRevealed((current) => ({ ...current, [index]: !current[index] }))}
              className="mt-2 rounded-lg border border-indigo-500 px-3 py-2 text-sm font-medium text-indigo-800 disabled:opacity-50"
            >
              {revealed[index] ? "Hide worked response" : "Compare my reasoning"}
            </button>
            {revealed[index] && (
              <div className="mt-3 rounded-lg bg-indigo-50 p-3 text-sm text-slate-800">
                <p><strong>One strong response:</strong> {item.exampleResponse}</p>
                <p className="mt-2"><strong>Why:</strong> {item.feedback}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-600">Practice text stays in this page only. Submit the teacher-scored portfolio separately when the lesson includes one.</p>
    </section>
  );
}
