import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { setTeacherGrades } from "@/lib/teacherGrades";

const bodySchema = z.object({
  teacherId: z.string().min(1),
  grades: z.array(z.number().int().min(0).max(12)),
});

export async function GET() {
  const session = await getSession();
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Admins only" }, { status: 403 });
  }

  const teachers = await prisma.user.findMany({
    where: { role: "TEACHER" },
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      email: true,
      teacherGrades: { select: { grade: true }, orderBy: { grade: "asc" } },
    },
  });

  return NextResponse.json({
    teachers: teachers.map((t) => ({
      id: t.id,
      name: t.name,
      email: t.email,
      grades: t.teacherGrades.map((g) => g.grade),
    })),
  });
}

export async function PUT(req: Request) {
  const session = await getSession();
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Admins only" }, { status: 403 });
  }

  try {
    const body = bodySchema.parse(await req.json());
    const teacher = await prisma.user.findUnique({ where: { id: body.teacherId } });
    if (!teacher || teacher.role !== "TEACHER") {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }
    const grades = await setTeacherGrades(body.teacherId, body.grades);
    return NextResponse.json({ ok: true, teacherId: body.teacherId, grades });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues[0]?.message || "Invalid input" }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ error: "Could not update teacher grades" }, { status: 500 });
  }
}
