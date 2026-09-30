import { prisma } from "@/lib/prisma";
import { getActiveStudentGrade } from "@/lib/messaging";

/**
 * Who "Ask your teacher" addresses.
 *
 * Prosper Prep does not store a per-course owner or a separate homeroom id.
 * Teachers are cleared by grade (`TeacherGrade`). A student may only DM a
 * teacher assigned to their active enrollment grade (`assertCanMessageUser`),
 * so the recipient is always someone the existing Messages DM path will accept.
 * Nothing here invents an email address — delivery is in-app only.
 *
 * Order (first match wins):
 * 1. Course session teacher — earliest live class (`LiveSession`) for this
 *    course whose teacher is assigned to the student's enrollment grade.
 * 2. Course/grade teacher — earliest `TeacherGrade` row for the lesson's
 *    course grade, when that teacher is also assigned to the student's
 *    enrollment grade. If the course grade IS the enrollment grade, this
 *    person is both the course teacher and the homeroom teacher (same row).
 * 3. Homeroom fallback — earliest `TeacherGrade` for the student's enrollment
 *    grade, when nobody above can be messaged (course grade has no overlap).
 * 4. None — no teacher is assigned to the student's grade. The button still
 *    opens Messages and explains that; it does not fall through to email.
 *
 * "Earliest" means oldest `createdAt`, then teacher name, so the choice is stable.
 */
export type LessonTeacherVia = "course-session" | "course-grade" | "homeroom" | "none";

export type LessonTeacherResolution = {
  teacher: { id: string; name: string } | null;
  via: LessonTeacherVia;
  detail: string;
};

type TeacherRow = { id: string; name: string };

async function teachersForGrade(grade: number): Promise<TeacherRow[]> {
  const rows = await prisma.teacherGrade.findMany({
    where: { grade, teacher: { role: "TEACHER" } },
    orderBy: [{ createdAt: "asc" }, { teacher: { name: "asc" } }],
    select: { teacher: { select: { id: true, name: true } } },
  });
  const seen = new Set<string>();
  const out: TeacherRow[] = [];
  for (const row of rows) {
    if (seen.has(row.teacher.id)) continue;
    seen.add(row.teacher.id);
    out.push({ id: row.teacher.id, name: row.teacher.name });
  }
  return out;
}

export async function resolveLessonTeacher(opts: {
  studentId: string;
  courseId: string;
  courseGrade: number;
}): Promise<LessonTeacherResolution> {
  const enrollmentGrade = await getActiveStudentGrade(opts.studentId);
  const homeroom =
    enrollmentGrade == null ? [] : await teachersForGrade(enrollmentGrade);
  const homeroomIds = new Set(homeroom.map((t) => t.id));
  const canMessage = (teacherId: string) =>
    enrollmentGrade != null && homeroomIds.has(teacherId);

  const sessions = await prisma.liveSession.findMany({
    where: { courseId: opts.courseId, teacher: { role: "TEACHER" } },
    orderBy: { createdAt: "asc" },
    select: { teacher: { select: { id: true, name: true } } },
  });
  for (const session of sessions) {
    if (!canMessage(session.teacher.id)) continue;
    return {
      teacher: { id: session.teacher.id, name: session.teacher.name },
      via: "course-session",
      detail:
        "This is the teacher who leads live class for this course and is assigned to your grade.",
    };
  }

  const courseTeachers = await teachersForGrade(opts.courseGrade);
  const courseMatch = courseTeachers.find((t) => canMessage(t.id));
  if (courseMatch) {
    const sameGrade = enrollmentGrade === opts.courseGrade;
    return {
      teacher: { id: courseMatch.id, name: courseMatch.name },
      via: "course-grade",
      detail: sameGrade
        ? "This is the first teacher assigned to your grade. Teachers are stored by grade, so this person is your course teacher and your homeroom teacher."
        : "This is the first teacher assigned to this course's grade who is also assigned to your grade.",
    };
  }

  if (homeroom[0]) {
    return {
      teacher: { id: homeroom[0].id, name: homeroom[0].name },
      via: "homeroom",
      detail:
        "No teacher assigned to this course can take a message from your grade. This is the first teacher assigned to your grade (homeroom).",
    };
  }

  return {
    teacher: null,
    via: "none",
    detail:
      "No teacher is assigned to your grade yet. This stays in Messages and is not emailed. An admin can assign a teacher to your grade.",
  };
}
