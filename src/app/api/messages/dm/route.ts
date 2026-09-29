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

export const dynamic = "force-dynamic";

const schema = z.object({
  recipientId: z.string().min(1),
  body: z.string().trim().min(1).max(8000),
  subject: z.string().trim().min(1).max(200).optional(),
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
    const gate = await assertCanMessageUser(session.user.id, role, data.recipientId);
    if (!gate.ok) {
      return NextResponse.json({ error: gate.error }, { status: gate.status });
    }

    const thread = await findOrCreateDmThread({
      actorId: session.user.id,
      otherId: data.recipientId,
      subject: data.subject,
    });

    const message = await prisma.message.create({
      data: {
        threadId: thread.id,
        senderId: session.user.id,
        body: data.body,
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
      preview: data.body,
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
