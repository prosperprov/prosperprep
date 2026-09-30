import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { loadMessagePulse } from "@/lib/messageInbox";
import type { Role } from "@/types/school";

export const dynamic = "force-dynamic";

/**
 * Lightweight unread pulse for students, teachers, and admins.
 * Polled by MessageLiveAlerts (about every 8s) so badges and toasts update
 * without a full page reload.
 */
export async function GET() {
  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  const role = session.user.role as Role;
  if (role !== "STUDENT" && role !== "TEACHER" && role !== "ADMIN") {
    return NextResponse.json({ unreadCount: 0, latest: null, messagesHref: null });
  }
  const pulse = await loadMessagePulse(session.user.id);
  const messagesHref =
    role === "STUDENT" ? "/dashboard/student/messages" : "/dashboard/teacher/messages";
  return NextResponse.json(
    { ...pulse, messagesHref },
    { headers: { "Cache-Control": "no-store" } }
  );
}
