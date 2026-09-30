import Link from "next/link";
import type { LessonAskContext } from "@/lib/lessonAskContext";

function when(iso: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleString("en-US", {
    timeZone: "America/Chicago",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

/** Compact lesson + progress for the teacher. Not a chat bubble. */
export function LessonAskPanel({ context }: { context: LessonAskContext }) {
  const doneWhen = when(context.completedAt);
  const quizWhen = when(context.quizAt);
  return (
    <aside className="space-y-3 rounded-2xl border-2 border-emerald-200 bg-emerald-50/60 p-4 lg:sticky lg:top-4">
      <p className="text-xs font-bold uppercase tracking-wide text-emerald-900">
        Lesson context
      </p>
      <div>
        <p className="text-sm font-semibold text-slate-900">{context.courseTitle}</p>
        <p className="text-sm text-slate-700">
          {context.subject} · {context.gradeLabel}
        </p>
        <p className="mt-1 text-sm text-slate-700">{context.unitLabel}</p>
        <p className="mt-1 text-sm font-semibold text-slate-900">
          Lesson {context.lessonOrder}: {context.lessonTitle}
        </p>
      </div>
      <dl className="space-y-2 text-sm">
        <div>
          <dt className="font-medium text-slate-500">Student</dt>
          <dd className="text-slate-900">{context.studentName}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-500">Lesson progress</dt>
          <dd className="text-slate-900">
            {context.completed ? "Completed" : "Not completed"}
            {doneWhen ? <span className="text-slate-600"> · {doneWhen} CT</span> : null}
          </dd>
        </div>
        <div>
          <dt className="font-medium text-slate-500">Quiz</dt>
          <dd className="text-slate-900">
            {!context.hasQuiz
              ? "No lesson quiz"
              : context.quizPercent == null
                ? "Not submitted"
                : `${context.quizPercent}%${quizWhen ? ` · ${quizWhen} CT` : ""}`}
          </dd>
        </div>
        <div>
          <dt className="font-medium text-slate-500">Time spent</dt>
          <dd className="text-slate-600">Not tracked</dd>
        </div>
      </dl>
      <Link
        href={context.lessonHref}
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900"
      >
        Open lesson
      </Link>
    </aside>
  );
}
