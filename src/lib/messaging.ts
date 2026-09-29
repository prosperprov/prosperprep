import { prisma } from "@/lib/prisma";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";
import type { Role } from "@/types/school";

export type ThreadType = "DM" | "BLAST" | "GROUP";

/** Active enrollment grade for a student (curriculum lock). */
export async function getActiveStudentGrade(userId: string): Promise<number | null> {
  const enrollment = await prisma.enrollment.findFirst({
    where: { userId, status: "ACTIVE" },
    orderBy: { createdAt: "desc" },
    select: { grade: true },
  });
  return enrollment?.grade ?? null;
}

/** ACTIVE student user ids enrolled in a grade. */
export async function activeStudentIdsForGrade(grade: number): Promise<string[]> {
  const enrollments = await prisma.enrollment.findMany({
    where: { status: "ACTIVE", grade },
    include: { user: { select: { id: true, role: true } } },
  });
  const ids = new Set<string>();
  for (const e of enrollments) {
    if (e.user.role === "STUDENT") ids.add(e.user.id);
  }
  return Array.from(ids);
}

/**
 * ACTIVE students whose enrollment grade matches a course's grade.
 * (Enrollment is plan/grade-based; course roster ≈ grade roster.)
 */
export async function activeStudentIdsForCourse(courseId: string): Promise<{
  grade: number;
  studentIds: string[];
  title: string;
} | null> {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: { id: true, grade: true, title: true },
  });
  if (!course) return null;
  const studentIds = await activeStudentIdsForGrade(course.grade);
  return { grade: course.grade, studentIds, title: course.title };
}

export async function assertCanMessageUser(
  actorId: string,
  actorRole: Role,
  targetId: string
): Promise<{ ok: true } | { ok: false; error: string; status: number }> {
  if (actorId === targetId) {
    return { ok: false, error: "Cannot message yourself.", status: 400 };
  }
  const target = await prisma.user.findUnique({
    where: { id: targetId },
    select: { id: true, role: true, name: true },
  });
  if (!target) return { ok: false, error: "Recipient not found.", status: 404 };

  if (actorRole === "ADMIN") return { ok: true };

  if (actorRole === "TEACHER") {
    if (target.role !== "STUDENT") {
      return { ok: false, error: "Teachers may only DM students.", status: 403 };
    }
    const assigned = await getAssignedTeacherGrades(actorId, actorRole);
    const studentGrade = await getActiveStudentGrade(targetId);
    if (studentGrade == null || !assigned.includes(studentGrade)) {
      return {
        ok: false,
        error: "Student is outside your assigned grades.",
        status: 403,
      };
    }
    return { ok: true };
  }

  if (actorRole === "STUDENT") {
    const myGrade = await getActiveStudentGrade(actorId);
    if (myGrade == null) {
      return { ok: false, error: "Active enrollment required to message.", status: 403 };
    }
    if (target.role === "TEACHER") {
      const teacherGrades = await getAssignedTeacherGrades(targetId, "TEACHER");
      if (!teacherGrades.includes(myGrade)) {
        return {
          ok: false,
          error: "That teacher is not assigned to your grade.",
          status: 403,
        };
      }
      return { ok: true };
    }
    if (target.role === "STUDENT") {
      const theirGrade = await getActiveStudentGrade(targetId);
      if (theirGrade !== myGrade) {
        return {
          ok: false,
          error: "You can only message classmates in your grade.",
          status: 403,
        };
      }
      return { ok: true };
    }
    return { ok: false, error: "Students may only message teachers or classmates.", status: 403 };
  }

  return { ok: false, error: "Not authorized to message.", status: 403 };
}

/** Find existing 2-person DM or create one. */
export async function findOrCreateDmThread(opts: {
  actorId: string;
  otherId: string;
  subject?: string;
}) {
  const mine = await prisma.threadParticipant.findMany({
    where: { userId: opts.actorId, thread: { type: "DM" } },
    select: { threadId: true },
  });
  const threadIds = mine.map((p) => p.threadId);
  if (threadIds.length) {
    const shared = await prisma.threadParticipant.findFirst({
      where: {
        userId: opts.otherId,
        threadId: { in: threadIds },
        thread: { type: "DM" },
      },
      include: {
        thread: {
          include: {
            participants: {
              include: { user: { select: { id: true, name: true, role: true } } },
            },
          },
        },
      },
    });
    if (shared && shared.thread.participants.length === 2) {
      return shared.thread;
    }
  }

  const other = await prisma.user.findUnique({
    where: { id: opts.otherId },
    select: { name: true },
  });
  const subject = opts.subject?.trim() || `Chat with ${other?.name ?? "classmate"}`;

  const thread = await prisma.messageThread.create({
    data: {
      subject,
      type: "DM",
      createdById: opts.actorId,
      participants: {
        create: [{ userId: opts.actorId }, { userId: opts.otherId }],
      },
    },
    include: {
      participants: {
        include: { user: { select: { id: true, name: true, role: true } } },
      },
    },
  });
  return thread;
}

export async function userIsParticipant(threadId: string, userId: string) {
  const row = await prisma.threadParticipant.findUnique({
    where: { threadId_userId: { threadId, userId } },
  });
  return Boolean(row);
}

export async function markThreadRead(threadId: string, userId: string) {
  await prisma.threadParticipant.updateMany({
    where: { threadId, userId },
    data: { lastReadAt: new Date() },
  });
}

/** Optional Notification stub when a new message arrives. */
export async function notifyMessageRecipients(opts: {
  recipientIds: string[];
  senderName: string;
  subject: string;
  threadId: string;
  preview: string;
}) {
  const preview =
    opts.preview.length > 140 ? opts.preview.slice(0, 137) + "…" : opts.preview;
  for (const userId of opts.recipientIds) {
    if (!userId) continue;
    await prisma.notification.create({
      data: {
        userId,
        type: "message_received",
        title: `Message from ${opts.senderName}`,
        body: `${opts.subject}: ${preview}`,
        meta: JSON.stringify({ threadId: opts.threadId }),
      },
    });
  }
}

export function threadTypeLabel(type: string) {
  switch (type) {
    case "DM":
      return "Direct message";
    case "BLAST":
      return "Class announcement";
    case "GROUP":
      return "Classroom group";
    default:
      return type;
  }
}
