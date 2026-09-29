import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

/** Inbox: threads the current user participates in, newest activity first. */
export async function GET(req: Request) {
  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const box = searchParams.get("box") || "inbox"; // inbox | sent

  const memberships = await prisma.threadParticipant.findMany({
    where: { userId: session.user.id },
    select: { threadId: true, lastReadAt: true },
  });
  const threadIds = memberships.map((m) => m.threadId);
  if (threadIds.length === 0) {
    return NextResponse.json({ threads: [] });
  }

  const lastReadMap = new Map(
    memberships.map((m) => [m.threadId, m.lastReadAt?.getTime() ?? 0])
  );

  const threads = await prisma.messageThread.findMany({
    where: {
      id: { in: threadIds },
      ...(box === "sent" ? { createdById: session.user.id } : {}),
    },
    orderBy: { updatedAt: "desc" },
    take: 100,
    include: {
      createdBy: { select: { id: true, name: true, role: true } },
      course: { select: { id: true, title: true, grade: true } },
      participants: {
        include: { user: { select: { id: true, name: true, role: true } } },
        take: 8,
      },
      messages: {
        orderBy: { createdAt: "desc" },
        take: 1,
        include: { sender: { select: { id: true, name: true } } },
      },
      _count: { select: { messages: true, participants: true } },
    },
  });

  const shaped = threads.map((t) => {
    const last = t.messages[0] ?? null;
    const lastRead = lastReadMap.get(t.id) ?? 0;
    const unread =
      last && last.senderId !== session.user.id && last.createdAt.getTime() > lastRead;
    return {
      id: t.id,
      subject: t.subject,
      type: t.type,
      grade: t.grade,
      course: t.course,
      createdBy: t.createdBy,
      participants: t.participants.map((p) => p.user),
      participantCount: t._count.participants,
      messageCount: t._count.messages,
      lastMessage: last
        ? {
            id: last.id,
            body: last.body,
            createdAt: last.createdAt.toISOString(),
            sender: last.sender,
          }
        : null,
      unread: Boolean(unread),
      updatedAt: t.updatedAt.toISOString(),
      createdAt: t.createdAt.toISOString(),
    };
  });

  return NextResponse.json({ threads: shaped });
}
