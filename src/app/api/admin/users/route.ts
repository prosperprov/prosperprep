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
