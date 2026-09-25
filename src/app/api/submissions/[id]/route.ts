import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getAssignedTeacherGrades, teacherCanAccessGrade } from "@/lib/teacherGrades";

const patchSchema = z.object({
  score: z.number().min(0),
  teacherFeedback: z.string().max(10000).optional().nullable(),
  status: z.enum(["GRADED", "RETURNED"]),
});

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  if (session.user.role !== "TEACHER" && session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Teachers only" }, { status: 403 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = patchSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const submission = await prisma.writtenSubmission.findUnique({
    where: { id: params.id },
    include: { course: true },
  });
  if (!submission) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const assigned = await getAssignedTeacherGrades(session.user.id, session.user.role);
  if (!teacherCanAccessGrade(assigned, submission.course.grade)) {
    return NextResponse.json({ error: "Outside your grade scope" }, { status: 403 });
  }

  const { score, teacherFeedback, status } = parsed.data;
  if (score > submission.maxScore) {
    return NextResponse.json(
      { error: `Score cannot exceed maxScore (${submission.maxScore})` },
      { status: 400 }
    );
  }

  const percent = Math.round((score / submission.maxScore) * 1000) / 10;

  const updated = await prisma.writtenSubmission.update({
    where: { id: submission.id },
    data: {
      score,
      percent,
      teacherFeedback: teacherFeedback ?? null,
      status,
      gradedById: session.user.id,
      gradedAt: new Date(),
    },
  });

  // Gradebook entry: WRITTEN source (~10% blend in courseAverage)
  await prisma.gradeEntry.upsert({
    where: {
      userId_courseId_source_refId: {
        userId: submission.userId,
        courseId: submission.courseId,
        source: "WRITTEN",
        refId: submission.id,
      },
    },
    create: {
      userId: submission.userId,
      courseId: submission.courseId,
      source: "WRITTEN",
      refId: submission.id,
      score,
      maxScore: submission.maxScore,
      percent,
      weight: 1,
    },
    update: {
      score,
      maxScore: submission.maxScore,
      percent,
      gradedAt: new Date(),
    },
  });

  return NextResponse.json({ ok: true, submission: updated });
}
