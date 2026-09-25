import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const bodySchema = z.object({
  enrollmentId: z.string().min(1),
  action: z.enum(["scholarship", "cancel", "activate_demo"]),
});

export async function PATCH(req: Request) {
  const session = await getSession();
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Admins only" }, { status: 403 });
  }

  try {
    const { enrollmentId, action } = bodySchema.parse(await req.json());
    const enrollment = await prisma.enrollment.findUnique({ where: { id: enrollmentId } });
    if (!enrollment) {
      return NextResponse.json({ error: "Enrollment not found" }, { status: 404 });
    }

    if (action === "cancel") {
      const updated = await prisma.enrollment.update({
        where: { id: enrollmentId },
        data: { status: "CANCELED" },
      });
      return NextResponse.json({ ok: true, enrollment: updated });
    }

    // scholarship or activate_demo — cancel other ACTIVE, activate this one
    const asScholarship = action === "scholarship";
    await prisma.enrollment.updateMany({
      where: {
        userId: enrollment.userId,
        status: "ACTIVE",
        id: { not: enrollmentId },
      },
      data: { status: "CANCELED" },
    });

    const updated = await prisma.enrollment.update({
      where: { id: enrollmentId },
      data: {
        status: "ACTIVE",
        demoMode: true,
        scholarship: asScholarship,
        startedAt: new Date(),
      },
    });

    await prisma.user.update({
      where: { id: enrollment.userId },
      data: { grade: enrollment.grade },
    });

    return NextResponse.json({ ok: true, enrollment: updated });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues[0]?.message || "Invalid input" }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ error: "Could not update enrollment" }, { status: 500 });
  }
}
