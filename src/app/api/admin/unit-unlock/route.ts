import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

const bodySchema = z.object({
  userId: z.string().min(1),
  courseId: z.string().min(1),
  maxUnlockedUnit: z.number().int().min(1).max(20),
  note: z.string().max(500).optional(),
});

/** Admin or teacher: unlock units 1..N ahead for one student on a course. */
export async function POST(req: Request) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const role = session.user.role;
  if (role !== "ADMIN" && role !== "TEACHER") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const json = await req.json().catch(() => null);
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid body", details: parsed.error.flatten() }, { status: 400 });
  }
  const { userId, courseId, maxUnlockedUnit, note } = parsed.data;

  const [student, course] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId }, select: { id: true, role: true } }),
    prisma.course.findUnique({ where: { id: courseId }, select: { id: true } }),
  ]);
  if (!student || student.role !== "STUDENT") {
    return NextResponse.json({ error: "Student not found" }, { status: 404 });
  }
  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  const now = new Date();
  const row = await prisma.unitUnlockOverride.upsert({
    where: { userId_courseId: { userId, courseId } },
    create: {
      userId,
      courseId,
      maxUnlockedUnit,
      note: note ?? "",
      createdById: session.user.id,
      updatedAt: now,
    },
    update: {
      maxUnlockedUnit,
      note: note ?? "",
      createdById: session.user.id,
      updatedAt: now,
    },
  });

  return NextResponse.json({ ok: true, override: row });
}

export async function DELETE(req: Request) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const role = session.user.role;
  if (role !== "ADMIN" && role !== "TEACHER") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const courseId = searchParams.get("courseId");
  if (!userId || !courseId) {
    return NextResponse.json({ error: "userId and courseId required" }, { status: 400 });
  }

  await prisma.unitUnlockOverride.deleteMany({ where: { userId, courseId } });
  return NextResponse.json({ ok: true });
}
