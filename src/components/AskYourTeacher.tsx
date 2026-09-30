"use client";

import { useState } from "react";
import Link from "next/link";
import { ComposeDmForm } from "@/components/messaging/ComposeDmForm";
import type { LessonTeacherResolution } from "@/lib/resolveLessonTeacher";

/**
 * Lesson-chrome control. Opens the existing in-app DM compose, pre-addressed
 * to the resolved teacher. Does not collect or send email.
 */
export function AskYourTeacher({
  resolution,
  courseId,
  courseTitle,
  lessonId,
  lessonOrder,
  lessonTitle,
}: {
  resolution: LessonTeacherResolution;
  courseId: string;
  courseTitle: string;
  lessonId: string;
  lessonOrder: number;
  lessonTitle: string;
}) {
  const [open, setOpen] = useState(false);
  const subject = `${courseTitle} · Lesson ${lessonOrder}: ${lessonTitle}`.slice(0, 200);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-emerald-700 bg-white px-4 py-2 text-base font-bold text-emerald-900 shadow-sm hover:bg-emerald-50"
      >
        Ask your teacher
      </button>
      {open ? (
        <div className="fixed inset-0 z-[120] flex items-end justify-center p-3 sm:items-center">
          <button
            type="button"
            aria-label="Close ask your teacher"
            className="absolute inset-0 bg-slate-900/40"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ask-teacher-title"
            className="relative max-h-[min(90vh,40rem)] w-full max-w-lg overflow-y-auto"
          >
            {resolution.teacher ? (
              <ComposeDmForm
                heading="Ask your teacher"
                hint={resolution.detail}
                directory={{
                  teachers: [
                    {
                      id: resolution.teacher.id,
                      name: resolution.teacher.name,
                      email: "",
                      grade: 0,
                    },
                  ],
                  students: [],
                  classmates: [],
                }}
                initialRecipientId={resolution.teacher.id}
                lockRecipient
                initialSubject={subject}
                courseId={courseId}
                lessonId={lessonId}
                threadBase="/dashboard/student/messages"
                onDone={() => setOpen(false)}
              />
            ) : (
              <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 id="ask-teacher-title" className="text-base font-semibold text-slate-900">
                  Ask your teacher
                </h3>
                <p className="text-sm text-slate-700">{resolution.detail}</p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/dashboard/student/messages"
                    className="inline-flex min-h-[44px] items-center rounded-lg bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900"
                  >
                    Open Messages
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="min-h-[44px] rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
