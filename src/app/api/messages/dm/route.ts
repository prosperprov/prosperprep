import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import type { Role } from "@/types/school";
import {
  assertCanMessageUser,
  findOrCreateDmThread,
  markThreadRead,
  notifyMessageRecipients,
} from "@/lib/messaging";
import { canAccessCourseContent } from "@/lib/curriculumAccess";
import { studentMessageBody } from "@/lib/studentMessageBody";

export const dynamic = "force-dynamic";

const schema = z.object({
  recipientId: z.string().min(1),
  body: z.string().trim().min(1).max(8000),
  subject: z.string().trim().min(1).max(200).optional(),
  courseId: z.string().trim().min(1).max(64).optional(),
  lessonId: z.string().trim().min(1).max(64).optional(),
});

/** Start or continue a DM (teacher↔student or student↔student same grade). */
export async function POST(req: Request) {
  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  const role = session.user.role as Role;
  if (role !== "STUDENT" && role !== "TEACHER" && role !== "ADMIN") {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  try {
    const data = schema.parse(await req.json());
    const body = studentMessageBody(data.body);
    if (!body) {
      return NextResponse.json(
        { error: "Write your question. Lesson location is not sent as a message." },
        { status: 400 }
      );
    }
    const gate = await assertCanMessageUser(session.user.id, role, data.recipientId);
    if (!gate.ok) {
      return NextResponse.json({ error: gate.error }, { status: gate.status });
    }

    let courseId: string | undefined;
    let lessonId: string | undefined;
    let subject = data.subject;
    if (data.lessonId) {
      const lesson = await prisma.lesson.findUnique({
        where: { id: data.lessonId },
        select: {
          id: true,
          title: true,
          order: true,
          courseId: true,
          course: { select: { id: true, title: true, grade: true } },
        },
      });
      if (!lesson) {
        return NextResponse.json({ error: "Lesson not found" }, { status: 400 });
      }
      const access = await canAccessCourseContent({
        userId: session.user.id,
        role,
        courseGrade: lesson.course.grade,
      });
      if (!access.ok) {
        return NextResponse.json({ error: access.reason }, { status: 403 });
      }
      courseId = lesson.courseId;
      lessonId = lesson.id;
      subject =
        data.subject ||
        `${lesson.course.title} · Lesson ${lesson.order}: ${lesson.title}`.slice(0, 200);
    } else if (data.courseId) {
      const course = await prisma.course.findUnique({
        where: { id: data.courseId },
        select: { id: true },
      });
      if (course) courseId = course.id;
    }

    const thread = await findOrCreateDmThread({
      actorId: session.user.id,
      otherId: data.recipientId,
      subject,
      courseId,
      lessonId,
    });

    const message = await prisma.message.create({
      data: {
        threadId: thread.id,
        senderId: session.user.id,
        body,
      },
    });

    await prisma.messageThread.update({
      where: { id: thread.id },
      data: { updatedAt: new Date() },
    });
    await markThreadRead(thread.id, session.user.id);

    await notifyMessageRecipients({
      recipientIds: [data.recipientId],
      senderName: session.user.name,
      subject: thread.subject,
      threadId: thread.id,
      preview: body,
    });

    return NextResponse.json({
      threadId: thread.id,
      messageId: message.id,
    });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues[0]?.message ?? "Invalid" }, { status: 400 });
    }
    throw e;
  }
}
