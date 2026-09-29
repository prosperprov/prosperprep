import Link from "next/link";
import { subjectIslandStyle } from "@/lib/grade6Classroom";

/**
 * Sticky lesson progress + big action shortcuts for Grade 6.
 */
export function Grade6LessonChrome({
  courseId,
  courseTitle,
  subject,
  lessonTitle,
  lessonOrder,
  lessonIndex,
  lessonCount,
  completed,
  hasVideo,
  hasQuizQuestions,
  nextHref,
  nextLabel,
  sectionQuizHref,
  sectionQuizUnlocked,
}: {
  courseId: string;
  courseTitle: string;
  subject: string;
  lessonTitle: string;
  lessonOrder: number;
  lessonIndex: number;
  lessonCount: number;
  completed: boolean;
  hasVideo: boolean;
  hasQuizQuestions: boolean;
  nextHref: string | null;
  nextLabel: string | null;
  sectionQuizHref: string | null;
  sectionQuizUnlocked: boolean;
}) {
  const style = subjectIslandStyle(subject);
  const pct =
    lessonCount > 0 ? Math.round(((lessonIndex + (completed ? 1 : 0)) / lessonCount) * 100) : 0;

  return (
    <>
      <div className="sticky top-0 z-30 -mx-4 mb-6 border-b-2 border-emerald-200 bg-white/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/90 sm:mx-0 sm:rounded-2xl sm:border-2 sm:shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="min-w-0">
            <Link
              href={`/courses/${courseId}`}
              className="text-sm font-semibold text-emerald-800 hover:underline"
            >
              ← {courseTitle}
            </Link>
            <p className="truncate text-base font-bold text-slate-900 sm:text-lg">
              <span className="mr-2" aria-hidden>
                {style.emoji}
              </span>
              Lesson {lessonOrder}: {lessonTitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                completed ? "bg-emerald-100 text-emerald-900" : "bg-amber-100 text-amber-900"
              }`}
            >
              {completed ? "Complete ✓" : "In progress"}
            </span>
            <span className="text-sm font-semibold text-slate-700">
              {lessonIndex + 1}/{lessonCount}
            </span>
          </div>
        </div>
        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-emerald-600 transition-all"
            style={{ width: `${Math.min(100, Math.max(pct, completed ? pct : Math.max(pct, 8)))}%` }}
          />
        </div>
      </div>

      <nav
        className="mb-6 flex flex-wrap gap-2"
        aria-label="Lesson actions"
      >
        {hasVideo && (
          <a
            href="#lesson-video"
            className="inline-flex min-h-[48px] items-center rounded-2xl border-2 border-sky-300 bg-sky-50 px-4 py-2 text-base font-bold text-sky-950 hover:bg-sky-100"
          >
            ▶ Watch video
          </a>
        )}
        {hasQuizQuestions ? (
          <a
            href="#lesson-check"
            className="inline-flex min-h-[48px] items-center rounded-2xl border-2 border-amber-300 bg-amber-50 px-4 py-2 text-base font-bold text-amber-950 hover:bg-amber-100"
          >
            Take quiz
          </a>
        ) : (
          <a
            href="#lesson-check"
            className="inline-flex min-h-[48px] items-center rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-4 py-2 text-base font-bold text-emerald-950 hover:bg-emerald-100"
          >
            Mark complete
          </a>
        )}
        {sectionQuizHref && sectionQuizUnlocked && (
          <Link
            href={sectionQuizHref}
            className="inline-flex min-h-[48px] items-center rounded-2xl border-2 border-violet-300 bg-violet-50 px-4 py-2 text-base font-bold text-violet-950 hover:bg-violet-100"
          >
            Section quiz
          </Link>
        )}
        {nextHref && nextLabel && (
          <Link
            href={nextHref}
            className="inline-flex min-h-[48px] items-center rounded-2xl bg-emerald-700 px-4 py-2 text-base font-bold text-white hover:bg-emerald-800"
          >
            Next: {nextLabel.length > 28 ? `${nextLabel.slice(0, 28)}…` : nextLabel} →
          </Link>
        )}
      </nav>
    </>
  );
}
