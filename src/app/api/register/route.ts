import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { gradeBandFor } from "@/lib/grades";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["STUDENT", "PARENT", "TEACHER"]).default("STUDENT"),
  grade: z.number().int().min(0).max(12).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    if (process.env.NODE_ENV === "production" && data.role === "TEACHER") {
      return NextResponse.json({ error: "Teacher accounts are created by School Ops." }, { status: 403 });
    }
    const email = data.email.toLowerCase().trim();
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "An account with that email already exists." }, { status: 400 });
    }
    if (data.role === "STUDENT" && data.grade === undefined) {
      return NextResponse.json({ error: "Students must select a grade." }, { status: 400 });
    }
    const passwordHash = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email,
        passwordHash,
        role: data.role,
        grade: data.role === "STUDENT" ? data.grade : null,
      },
    });
    return NextResponse.json({
      id: user.id,
      email: user.email,
      role: user.role,
      grade: user.grade,
      gradeBand: user.grade != null ? gradeBandFor(user.grade) : null,
    });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues[0]?.message || "Invalid input" }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
