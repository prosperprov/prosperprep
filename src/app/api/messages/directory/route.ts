import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";
import { getActiveStudentGrade } from "@/lib/messaging";

export const dynamic = "force-dynamic";

/** People the current user may start a DM with. */
export async function GET() {
  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  if (session.user.role === "TEACHER" || session.user.role === "ADMIN") {
    const grades =
      session.user.role === "ADMIN"
        ? null
        : await getAssignedTeacherGrades(session.user.id, session.user.role);
    if (grades && grades.length === 0) {
      return NextResponse.json({ students: [], teachers: [], classmates: [] });
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
    return NextResponse.json({
      students: Array.from(byId.values()),
      teachers: [],
      classmates: [],
    });
  }

  if (session.user.role === "STUDENT") {
    const grade = await getActiveStudentGrade(session.user.id);
    if (grade == null) {
      return NextResponse.json({ students: [], teachers: [], classmates: [] });
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
      .filter((e) => e.user.role === "STUDENT" && e.user.id !== session.user.id)
      .map((e) => ({
        id: e.user.id,
        name: e.user.name,
        email: e.user.email,
        grade: e.grade,
      }));

    // Dedupe
    const uniq = (rows: { id: string }[]) => {
      const m = new Map(rows.map((r) => [r.id, r]));
      return Array.from(m.values());
    };

    return NextResponse.json({
      students: [],
      teachers: uniq(teacherList),
      classmates: uniq(classmateList),
    });
  }

  return NextResponse.json({ error: "Not authorized" }, { status: 403 });
}
