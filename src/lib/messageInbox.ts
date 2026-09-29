import { prisma } from "@/lib/prisma";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";
import { getActiveStudentGrade } from "@/lib/messaging";
import type { InboxThread, DirectoryPayload } from "@/components/messaging/InboxClient";
import type { Role } from "@/types/school";

async function shapeThreads(
  userId: string,
  threadIds: string[],
  filterCreatedBy?: string
): Promise<InboxThread[]> {
  if (threadIds.length === 0) return [];

  const memberships = await prisma.threadParticipant.findMany({
    where: { userId, threadId: { in: threadIds } },
    select: { threadId: true, lastReadAt: true },
  });
  const lastReadMap = new Map(
    memberships.map((m) => [m.threadId, m.lastReadAt?.getTime() ?? 0])
  );

  const threads = await prisma.messageThread.findMany({
    where: {
      id: { in: threadIds },
      ...(filterCreatedBy ? { createdById: filterCreatedBy } : {}),
    },
    orderBy: { updatedAt: "desc" },
    take: 100,
    include: {
      createdBy: { select: { id: true, name: true, role: true } },
      course: { select: { id: true, title: true, grade: true } },
      participants: {
        include: { user: { select: { id: true, name: true, role: true } } },
        take: 8,
      },
      messages: {
        orderBy: { createdAt: "desc" },
        take: 1,
        include: { sender: { select: { id: true, name: true } } },
      },
      _count: { select: { messages: true, participants: true } },
    },
  });

  return threads.map((t) => {
    const last = t.messages[0] ?? null;
    const lastRead = lastReadMap.get(t.id) ?? 0;
    const unread =
      Boolean(last) &&
      last!.senderId !== userId &&
      last!.createdAt.getTime() > lastRead;
    return {
      id: t.id,
      subject: t.subject,
      type: t.type,
      grade: t.grade,
      course: t.course,
      createdBy: t.createdBy,
      participants: t.participants.map((p) => p.user),
      participantCount: t._count.participants,
      messageCount: t._count.messages,
      lastMessage: last
        ? {
            id: last.id,
            body: last.body,
            createdAt: last.createdAt.toISOString(),
            sender: last.sender,
          }
        : null,
      unread,
      updatedAt: t.updatedAt.toISOString(),
      createdAt: t.createdAt.toISOString(),
    };
  });
}

export async function loadInboxForUser(userId: string) {
  const memberships = await prisma.threadParticipant.findMany({
    where: { userId },
    select: { threadId: true },
  });
  const threadIds = memberships.map((m) => m.threadId);
  const inboxThreads = await shapeThreads(userId, threadIds);
  const sentThreads = await shapeThreads(userId, threadIds, userId);
  return { inboxThreads, sentThreads };
}

export async function loadDirectoryForUser(
  userId: string,
  role: Role
): Promise<DirectoryPayload> {
  if (role === "TEACHER" || role === "ADMIN") {
    const grades =
      role === "ADMIN" ? null : await getAssignedTeacherGrades(userId, role);
    if (grades && grades.length === 0) {
      return { students: [], teachers: [], classmates: [] };
    }
    const enrollments = await prisma.enrollment.findMany({
      where: {
        status: "ACTIVE",
        ...(grades ? { grade: { in: grades } } : {}),
      },
      include: {
        user: { select: { id: true, name: true, email: true, role: true } },
      },
      orderBy: { grade: "asc" },
    });
    const byId = new Map<
      string,
      { id: string; name: string; email: string; grade: number }
    >();
    for (const e of enrollments) {
      if (e.user.role !== "STUDENT") continue;
      if (!byId.has(e.user.id)) {
        byId.set(e.user.id, {
          id: e.user.id,
          name: e.user.name,
          email: e.user.email,
          grade: e.grade,
        });
      }
    }
    return {
      students: Array.from(byId.values()),
      teachers: [],
      classmates: [],
    };
  }

  if (role === "STUDENT") {
    const grade = await getActiveStudentGrade(userId);
    if (grade == null) {
      return { students: [], teachers: [], classmates: [] };
    }
    const teachers = await prisma.teacherGrade.findMany({
      where: { grade },
      include: {
        teacher: { select: { id: true, name: true, email: true, role: true } },
      },
    });
    const teacherList = teachers
      .filter((t) => t.teacher.role === "TEACHER")
      .map((t) => ({
        id: t.teacher.id,
        name: t.teacher.name,
        email: t.teacher.email,
        grade,
      }));

    const classmates = await prisma.enrollment.findMany({
      where: { status: "ACTIVE", grade },
      include: {
        user: { select: { id: true, name: true, email: true, role: true } },
      },
    });
    const classmateList = classmates
      .filter((e) => e.user.role === "STUDENT" && e.user.id !== userId)
      .map((e) => ({
        id: e.user.id,
        name: e.user.name,
        email: e.user.email,
        grade: e.grade,
      }));

    const uniq = <T extends { id: string }>(rows: T[]) =>
      Array.from(new Map(rows.map((r) => [r.id, r])).values());

    return {
      students: [],
      teachers: uniq(teacherList),
      classmates: uniq(classmateList),
    };
  }

  return { students: [], teachers: [], classmates: [] };
}
