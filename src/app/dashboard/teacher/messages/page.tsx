import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { teacherDashNav } from "@/lib/dashboardNav";
import { MessagingInbox } from "@/components/messaging/InboxClient";
import { loadDirectoryForUser, loadInboxForUser } from "@/lib/messageInbox";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";
import { brand } from "@/config/brand";
import { publishedCourseWhere } from "@/lib/courseVisibility";
import type { Role } from "@/types/school";

export const dynamic = "force-dynamic";

export default async function TeacherMessagesPage() {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/teacher/messages");
  if (session.user.role !== "TEACHER" && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const assignedGrades = await getAssignedTeacherGrades(
    session.user.id,
    session.user.role
  );
  const { inboxThreads, sentThreads } = await loadInboxForUser(session.user.id);
  const directory = await loadDirectoryForUser(
    session.user.id,
    session.user.role as Role
  );
  const courses =
    assignedGrades.length === 0
      ? []
      : await prisma.course.findMany({
          where: { grade: { in: assignedGrades }, ...publishedCourseWhere },
          orderBy: [{ grade: "asc" }, { order: "asc" }],
          select: { id: true, title: true, grade: true },
        });

  return (
    <DashboardShell
      title="Messages"
      subtitle={`${brand.shortName} · DMs, class blasts, and classroom groups`}
      nav={teacherDashNav()}
    >
      <MessagingInbox
        basePath="/dashboard/teacher/messages"
        role={session.user.role === "ADMIN" ? "ADMIN" : "TEACHER"}
        currentUserId={session.user.id}
        inboxThreads={inboxThreads}
        sentThreads={sentThreads}
        directory={directory}
        courses={courses}
        allowedGrades={assignedGrades}
      />
    </DashboardShell>
  );
}
