"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export function CreateSessionForm({
  courses,
  allowedGrades,
}: {
  courses: { id: string; title: string; grade: number }[];
  /** Grades this teacher may schedule for (required list). */
  allowedGrades: number[];
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState("");
  const [grade, setGrade] = useState<string>("");
  const [courseId, setCourseId] = useState<string>("");

  const coursesForGrade = useMemo(() => {
    if (grade === "") return [];
    const g = Number(grade);
    return courses.filter((c) => c.grade === g);
  }, [courses, grade]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setOk("");

    if (grade === "") {
      setError("Select a grade before scheduling. Grade is required.");
      return;
    }
    if (!allowedGrades.includes(Number(grade))) {
      setError("That grade is not assigned to your teaching roster.");
      return;
    }
    if (courseId === "") {
      setError("Select a course before scheduling. Course is required.");
      return;
    }
    const matched = courses.find((c) => c.id === courseId);
    if (!matched || matched.grade !== Number(grade)) {
      setError("Choose a course that matches the selected grade.");
      return;
    }

    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const local = String(fd.get("scheduledAt"));
    const scheduledAt = new Date(local).toISOString();
    const payload = {
      title: String(fd.get("title")),
      description: String(fd.get("description")),
      scheduledAt,
      durationMinutes: Number(fd.get("durationMinutes") || 45),
      courseId,
      grade: Number(grade),
    };
    const res = await fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Could not create session");
      return;
    }
    const n = typeof data.notifiedStudents === "number" ? data.notifiedStudents : null;
    setOk(
      n == null
        ? `Session created. Join: ${data.meetingUrl}`
        : `Session created. Notified ${n} student${n === 1 ? "" : "s"}. Join: ${data.meetingUrl}`
    );
    (e.target as HTMLFormElement).reset();
    setGrade("");
    setCourseId("");
    router.refresh();
  }

  if (allowedGrades.length === 0) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
        <h3 className="font-semibold text-slate-900">Schedule a live session</h3>
        <p className="mt-2">
          No teaching grades are assigned to your account yet. Ask an admin to assign grades
          under Admin → Teachers.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" noValidate>
      <h3 className="font-semibold text-slate-900">Schedule a live session</h3>
      {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
      {ok && <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900">{ok}</p>}
      <input name="title" required placeholder="Session title" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
      <textarea name="description" required placeholder="What students should expect" rows={2} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm">
          <span className="text-slate-600">Date & time (local)</span>
          <input name="scheduledAt" type="datetime-local" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="text-sm">
          <span className="text-slate-600">Duration (minutes)</span>
          <input name="durationMinutes" type="number" defaultValue={45} min={15} max={180} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm">
          <span className="text-slate-600">
            Grade <span className="text-red-600">*</span>
          </span>
          <select
            name="grade"
            required
            value={grade}
            onChange={(e) => {
              setGrade(e.target.value);
              setCourseId("");
              setError("");
            }}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="" disabled>
              Select a grade
            </option>
            {allowedGrades.map((g) => (
              <option key={g} value={g}>
                {g === 0 ? "Kindergarten" : `Grade ${g}`}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="text-slate-600">
            Course <span className="text-red-600">*</span>
          </span>
          <select
            name="courseId"
            required
            value={courseId}
            onChange={(e) => {
              setCourseId(e.target.value);
              setError("");
            }}
            disabled={grade === ""}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 disabled:bg-slate-50 disabled:text-slate-400"
          >
            <option value="" disabled>
              {grade === "" ? "Select a grade first" : "Select a course"}
            </option>
            {coursesForGrade.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      {grade !== "" && coursesForGrade.length === 0 && (
        <p className="text-xs text-amber-800">
          No courses are listed for that grade in the schedule list. Pick another grade or add
          courses for it.
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900 disabled:opacity-60"
      >
        {loading ? "Saving…" : "Create & publish session"}
      </button>
    </form>
  );
}
