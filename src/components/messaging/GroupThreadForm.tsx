"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { gradeLabel } from "@/lib/grades";

export function GroupThreadForm({
  courses,
  allowedGrades,
  onDone,
  threadBase,
}: {
  courses: { id: string; title: string; grade: number }[];
  allowedGrades: number[];
  onDone: () => void;
  threadBase: string;
}) {
  const router = useRouter();
  const [grade, setGrade] = useState("");
  const [courseId, setCourseId] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const coursesForGrade = useMemo(() => {
    if (grade === "") return courses;
    return courses.filter((c) => c.grade === Number(grade));
  }, [courses, grade]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (grade === "" && courseId === "") {
      setError("Select a grade or course for the group.");
      return;
    }
    setLoading(true);
    const payload: Record<string, unknown> = {
      subject: subject.trim(),
    };
    if (body.trim()) payload.body = body.trim();
    if (grade !== "") payload.grade = Number(grade);
    if (courseId !== "") payload.courseId = courseId;
    const res = await fetch("/api/messages/group", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Could not create group");
      return;
    }
    onDone();
    router.push(`${threadBase}/${data.threadId}`);
    router.refresh();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 rounded-2xl border border-sky-200 bg-sky-50/40 p-4 shadow-sm"
    >
      <h3 className="text-base font-semibold text-slate-900">Classroom group thread</h3>
      <p className="text-sm text-slate-600">
        Create a shared thread. All enrolled students in the scope can post.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Grade</span>
          <select
            className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3"
            value={grade}
            onChange={(e) => {
              setGrade(e.target.value);
              setCourseId("");
            }}
          >
            <option value="">Any / use course</option>
            {allowedGrades.map((g) => (
              <option key={g} value={g}>
                {gradeLabel(g)}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Course (optional)</span>
          <select
            className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
          >
            <option value="">Whole grade</option>
            {coursesForGrade.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm">
        <span className="font-medium text-slate-700">Thread title</span>
        <input
          className="mt-1 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          minLength={3}
          maxLength={200}
          placeholder="e.g. Grade 6 Math — Questions"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-slate-700">Opening message (optional)</span>
        <textarea
          className="mt-1 min-h-[96px] w-full rounded-lg border border-slate-300 bg-white px-3 py-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          maxLength={8000}
        />
      </label>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          disabled={loading}
          className="min-h-[44px] rounded-lg bg-sky-800 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-900 disabled:opacity-60"
        >
          {loading ? "Creating…" : "Create group"}
        </button>
        <button
          type="button"
          onClick={onDone}
          className="min-h-[44px] rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
