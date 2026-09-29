import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import {
  markThreadRead,
  notifyMessageRecipients,
  userIsParticipant,
} from "@/lib/messaging";

export const dynamic = "force-dynamic";

const postSchema = z.object({
  body: z.string().trim().min(1).max(8000),
});

/** Thread detail + messages */
export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  const ok = await userIsParticipant(params.id, session.user.id);
  if (!ok) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const thread = await prisma.messageThread.findUnique({
    where: { id: params.id },
    include: {
      createdBy: { select: { id: true, name: true, role: true } },
      course: { select: { id: true, title: true, grade: true } },
      participants: {
        include: { user: { select: { id: true, name: true, role: true } } },
        orderBy: { joinedAt: "asc" },
      },
      messages: {
        orderBy: { createdAt: "asc" },
        take: 500,
        include: { sender: { select: { id: true, name: true, role: true } } },
      },
    },
  });
  if (!thread) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await markThreadRead(params.id, session.user.id);

  return NextResponse.json({
    thread: {
      id: thread.id,
      subject: thread.subject,
      type: thread.type,
      grade: thread.grade,
      course: thread.course,
      createdBy: thread.createdBy,
      participants: thread.participants.map((p) => p.user),
      messages: thread.messages.map((m) => ({
        id: m.id,
        body: m.body,
        createdAt: m.createdAt.toISOString(),
        sender: m.sender,
      })),
      createdAt: thread.createdAt.toISOString(),
      updatedAt: thread.updatedAt.toISOString(),
    },
  });
}

/** Reply in a thread */
export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  const ok = await userIsParticipant(params.id, session.user.id);
  if (!ok) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const data = postSchema.parse(await req.json());
    const message = await prisma.message.create({
      data: {
        threadId: params.id,
        senderId: session.user.id,
        body: data.body,
      },
      include: { sender: { select: { id: true, name: true, role: true } } },
    });

    await prisma.messageThread.update({
      where: { id: params.id },
      data: { updatedAt: new Date() },
    });

    await markThreadRead(params.id, session.user.id);

    const others = await prisma.threadParticipant.findMany({
      where: { threadId: params.id, userId: { not: session.user.id } },
      select: { userId: true },
    });
    const thread = await prisma.messageThread.findUnique({
      where: { id: params.id },
      select: { subject: true },
    });
    await notifyMessageRecipients({
      recipientIds: others.map((o) => o.userId),
      senderName: session.user.name,
      subject: thread?.subject ?? "Message",
      threadId: params.id,
      preview: data.body,
    });

    return NextResponse.json({
      message: {
        id: message.id,
        body: message.body,
        createdAt: message.createdAt.toISOString(),
        sender: message.sender,
      },
    });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues[0]?.message ?? "Invalid" }, { status: 400 });
    }
    throw e;
  }
}
