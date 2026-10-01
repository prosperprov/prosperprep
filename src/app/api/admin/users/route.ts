import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { gradeBandFor } from "@/lib/grades";
import { setTeacherGrades } from "@/lib/teacherGrades";

const teacherSchema = z.object({
  role: z.literal("TEACHER"),
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  grades: z.array(z.number().int().min(0).max(12)).default([]),
});

const studentSchema = z.object({
  role: z.literal("STUDENT"),
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  grade: z.number().int().min(0).max(12),
  scholarship: z.boolean(),
});

const bodySchema = z.discriminatedUnion("role", [teacherSchema, studentSchema]);

export async function POST(req: Request) {
  const session = await getSession();
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Admins only" }, { status: 403 });
  }

  try {
    const data = bodySchema.parse(await req.json());
    const email = data.email.toLowerCase().trim();
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "An account with that email already exists." }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(data.password, 10);

    if (data.role === "TEACHER") {
      const user = await prisma.user.create({
        data: {
          name: data.name.trim(),
          email,
          passwordHash,
          role: "TEACHER",
        },
      });
      await setTeacherGrades(user.id, data.grades);
      return NextResponse.json({
        ok: true,
        user: { id: user.id, name: user.name, email: user.email, role: user.role },
      });
    }

    // STUDENT — resolve plan before create when scholarship so we fail cleanly
    let planId: string | null = null;
    if (data.scholarship) {
      const band = gradeBandFor(data.grade);
      const plan = await prisma.plan.findFirst({
        where: { gradeBand: band, active: true },
      });
      if (!plan) {
        return NextResponse.json({ error: "No active plan for that grade band" }, { status: 400 });
      }
      planId = plan.id;
    }

    const user = await prisma.user.create({
      data: {
        name: data.name.trim(),
        email,
        passwordHash,
        role: "STUDENT",
        grade: data.grade,
        ...(planId
          ? {
              enrollments: {
                create: {
                  planId,
                  grade: data.grade,
                  status: "ACTIVE",
                  demoMode: true,
                  scholarship: true,
                  startedAt: new Date(),
                },
              },
            }
          : {}),
      },
    });

    return NextResponse.json({
      ok: true,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues[0]?.message || "Invalid input" }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ error: "Could not create user" }, { status: 500 });
  }
}


const updateStudentSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  grade: z.number().int().min(0).max(12),
  enrollmentId: z.string().min(1).optional(),
  enrollmentStatus: z
    .enum(["ACTIVE", "PENDING", "PAUSED", "PAST_DUE", "UNPAID", "CANCELED"])
    .optional(),
  password: z.string().min(8).optional(),
});

export async function PATCH(req: Request) {
  const session = await getSession();
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Admins only" }, { status: 403 });
  }

  try {
    const data = updateStudentSchema.parse(await req.json());
    const user = await prisma.user.findUnique({ where: { id: data.id } });
    if (!user || user.role !== "STUDENT") {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    const email = data.email.toLowerCase().trim();
    if (email !== user.email) {
      const taken = await prisma.user.findUnique({ where: { email } });
      if (taken) {
        return NextResponse.json({ error: "An account with that email already exists." }, { status: 400 });
      }
    }

    const passwordHash =
      data.password && data.password.length >= 8
        ? await bcrypt.hash(data.password, 10)
        : undefined;

    const updated = await prisma.user.update({
      where: { id: data.id },
      data: {
        name: data.name.trim(),
        email,
        grade: data.grade,
        ...(passwordHash ? { passwordHash } : {}),
      },
    });

    // Keep enrollments aligned with grade; optionally set status on a specific row.
    if (data.enrollmentId && data.enrollmentStatus) {
      const enrollment = await prisma.enrollment.findFirst({
        where: { id: data.enrollmentId, userId: data.id },
      });
      if (!enrollment) {
        return NextResponse.json({ error: "Enrollment not found for this student" }, { status: 404 });
      }
      if (data.enrollmentStatus === "ACTIVE") {
        await prisma.enrollment.updateMany({
          where: {
            userId: data.id,
            status: "ACTIVE",
            id: { not: data.enrollmentId },
          },
          data: { status: "CANCELED" },
        });
      }
      await prisma.enrollment.update({
        where: { id: data.enrollmentId },
        data: {
          grade: data.grade,
          status: data.enrollmentStatus,
          ...(data.enrollmentStatus === "ACTIVE" && !enrollment.startedAt
            ? { startedAt: new Date() }
            : {}),
        },
      });
    } else {
      await prisma.enrollment.updateMany({
        where: { userId: data.id, status: "ACTIVE" },
        data: { grade: data.grade },
      });
    }

    return NextResponse.json({
      ok: true,
      user: {
        id: updated.id,
        name: updated.name,
        email: updated.email,
        role: updated.role,
        grade: updated.grade,
      },
    });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues[0]?.message || "Invalid input" }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ error: "Could not update student" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getSession();
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Admins only" }, { status: 403 });
  }

  try {
    const id = new URL(req.url).searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Student id required" }, { status: 400 });
    }
    if (id === session.user.id) {
      return NextResponse.json({ error: "Cannot delete your own account" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }
    if (user.role === "ADMIN") {
      return NextResponse.json({ error: "Cannot delete a Super Admin account" }, { status: 400 });
    }
    if (user.role !== "STUDENT") {
      return NextResponse.json({ error: "Only student accounts can be deleted here" }, { status: 400 });
    }

    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ ok: true, deletedId: id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Could not delete student" }, { status: 500 });
  }
}
