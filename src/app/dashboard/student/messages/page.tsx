import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { DashboardShell } from "@/components/DashboardShell";
import { MessagingInbox } from "@/components/messaging/InboxClient";
import { loadDirectoryForUser, loadInboxForUser } from "@/lib/messageInbox";
import { brand } from "@/config/brand";
import type { Role } from "@/types/school";

export const dynamic = "force-dynamic";

export default async function StudentMessagesPage() {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/student/messages");
  if (session.user.role !== "STUDENT" && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const { inboxThreads, sentThreads } = await loadInboxForUser(session.user.id);
  const directory = await loadDirectoryForUser(
    session.user.id,
    session.user.role as Role
  );

  return (
    <DashboardShell
      title="Messages"
      subtitle={`${brand.shortName} inbox · talk with teachers and classmates`}
      nav={[
        { href: "/dashboard/student", label: "Overview" },
        { href: "/dashboard/student/messages", label: "Messages" },
        { href: "/dashboard/student/grades", label: "Grades" },
        { href: "/courses", label: "Catalog" },
      ]}
    >
      <MessagingInbox
        basePath="/dashboard/student/messages"
        role={session.user.role === "ADMIN" ? "ADMIN" : "STUDENT"}
        currentUserId={session.user.id}
        inboxThreads={inboxThreads}
        sentThreads={sentThreads}
        directory={directory}
        courses={[]}
        allowedGrades={[]}
      />
    </DashboardShell>
  );
}
