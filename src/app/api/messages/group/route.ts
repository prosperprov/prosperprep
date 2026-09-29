import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";
import {
  activeStudentIdsForCourse,
  activeStudentIdsForGrade,
  markThreadRead,
  notifyMessageRecipients,
} from "@/lib/messaging";
import { gradeLabel } from "@/lib/grades";

export const dynamic = "force-dynamic";

const schema = z
  .object({
    subject: z.string().trim().min(3).max(200),
    body: z.string().trim().min(1).max(8000).optional(),
    grade: z.number().int().min(0).max(12).optional(),
    courseId: z.string().min(1).optional(),
  })
  .refine((d) => d.grade != null || d.courseId, {
    message: "Select a grade or a course for the group thread.",
  });

/** Teacher creates a classroom group thread; enrolled students can post. */
export async function POST(req: Request) {
  const session = await getSession();
  if (!session?.user || (session.user.role !== "TEACHER" && session.user.role !== "ADMIN")) {
    return NextResponse.json({ error: "Teachers only" }, { status: 403 });
  }

  try {
    const data = schema.parse(await req.json());
    const assigned =
      session.user.role === "ADMIN"
        ? null
        : await getAssignedTeacherGrades(session.user.id, session.user.role);

    let grade: number;
    let studentIds: string[];
    let courseId: string | null = null;
    let scopeLabel: string;

    if (data.courseId) {
      const roster = await activeStudentIdsForCourse(data.courseId);
      if (!roster) {
        return NextResponse.json({ error: "Course not found." }, { status: 400 });
      }
      if (assigned && !assigned.includes(roster.grade)) {
        return NextResponse.json(
          { error: "That course is outside your teaching assignment." },
          { status: 403 }
        );
      }
      if (data.grade != null && data.grade !== roster.grade) {
        return NextResponse.json(
          { error: "Course must match the selected grade." },
          { status: 400 }
        );
      }
      grade = roster.grade;
      studentIds = roster.studentIds;
      courseId = data.courseId;
      scopeLabel = roster.title;
    } else {
      grade = data.grade!;
      if (assigned && !assigned.includes(grade)) {
        return NextResponse.json(
          { error: "That grade is not on your teaching assignment." },
          { status: 403 }
        );
      }
      studentIds = await activeStudentIdsForGrade(grade);
      scopeLabel = gradeLabel(grade);
    }

    const participantIds = Array.from(new Set([session.user.id, ...studentIds]));
    const opener =
      data.body?.trim() ||
      `Welcome to ${data.subject}. This is our classroom group for ${scopeLabel}. Everyone can post.`;

    const thread = await prisma.messageThread.create({
      data: {
        subject: data.subject,
        type: "GROUP",
        createdById: session.user.id,
        courseId,
        grade,
        participants: {
          create: participantIds.map((userId) => ({ userId })),
        },
        messages: {
          create: {
            senderId: session.user.id,
            body: opener,
          },
        },
      },
    });

    await markThreadRead(thread.id, session.user.id);

    await notifyMessageRecipients({
      recipientIds: studentIds,
      senderName: session.user.name,
      subject: data.subject,
      threadId: thread.id,
      preview: opener,
    });

    return NextResponse.json({
      threadId: thread.id,
      participantCount: participantIds.length,
      scope: scopeLabel,
    });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues[0]?.message ?? "Invalid" }, { status: 400 });
    }
    throw e;
  }
}
