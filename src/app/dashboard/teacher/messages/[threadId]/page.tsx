import { redirect, notFound } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { teacherDashNav } from "@/lib/dashboardNav";
import { ThreadViewClient } from "@/components/messaging/ThreadViewClient";
import { LessonAskPanel } from "@/components/messaging/LessonAskPanel";
import { markThreadRead, userIsParticipant } from "@/lib/messaging";
import { loadLessonAskContextForThread } from "@/lib/lessonAskContext";
import { brand } from "@/config/brand";

export const dynamic = "force-dynamic";

export default async function TeacherThreadPage({
  params,
}: {
  params: { threadId: string };
}) {
  const session = await getSession();
  if (!session?.user) {
    redirect(`/login?callbackUrl=/dashboard/teacher/messages/${params.threadId}`);
  }
  if (session.user.role !== "TEACHER" && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const ok = await userIsParticipant(params.threadId, session.user.id);
  if (!ok) notFound();

  const thread = await prisma.messageThread.findUnique({
    where: { id: params.threadId },
    include: {
      messages: {
        orderBy: { createdAt: "asc" },
        take: 500,
        include: { sender: { select: { id: true, name: true, role: true } } },
      },
    },
  });
  if (!thread) notFound();

  await markThreadRead(params.threadId, session.user.id);
  const lessonContext = await loadLessonAskContextForThread(params.threadId);

  return (
    <DashboardShell
      title="Conversation"
      subtitle={brand.shortName}
      nav={teacherDashNav()}
    >
      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <ThreadViewClient
        threadId={thread.id}
        subject={thread.subject}
        type={thread.type}
        backHref="/dashboard/teacher/messages"
        currentUserId={session.user.id}
        messages={thread.messages.map((m) => ({
          id: m.id,
          body: m.body,
          createdAt: m.createdAt.toISOString(),
          sender: m.sender,
        }))}
      />
      {lessonContext ? <LessonAskPanel context={lessonContext} /> : null}
      </div>
    </DashboardShell>
  );
}
