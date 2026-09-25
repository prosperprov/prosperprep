import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import { brand } from "@/config/brand";
import { gradeLabel } from "@/lib/grades";

export type LiveSessionNotifyInput = {
  id: string;
  title: string;
  description: string;
  scheduledAt: Date;
  /** Session grade field: null = All/open (unless courseId implies a grade). */
  grade: number | null;
  /** Optional course — targets that course's grade when set. */
  courseId: string | null;
  meetingUrl: string | null;
};

function formatWhen(at: Date) {
  return (
    at.toLocaleString("en-US", {
      timeZone: "America/Chicago",
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }) + " CT"
  );
}

function appBaseUrl() {
  return (
    process.env.NEXTAUTH_URL?.replace(/\/$/, "") ||
    process.env.APP_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}

/**
 * Resolve who a live session is for from the session's grade + course fields.
 *
 * - Neither set (All/open): all ACTIVE student enrollments
 * - Grade only: ACTIVE enrollments with that exact grade
 * - Course only: ACTIVE enrollments whose grade equals the course's grade
 * - Both set: exact match on that grade only if session.grade === course.grade;
 *   if they conflict, notify nobody
 */
export async function resolveLiveSessionAudience(opts: {
  grade: number | null;
  courseId: string | null;
}): Promise<{
  targetGrade: number | null;
  empty: boolean;
  courseTitle: string | null;
  courseGrade: number | null;
  reason: string;
}> {
  let courseGrade: number | null = null;
  let courseTitle: string | null = null;

  if (opts.courseId) {
    const course = await prisma.course.findUnique({
      where: { id: opts.courseId },
      select: { grade: true, title: true },
    });
    if (!course) {
      return {
        targetGrade: null,
        empty: true,
        courseTitle: null,
        courseGrade: null,
        reason: "course_not_found",
      };
    }
    courseGrade = course.grade;
    courseTitle = course.title;
  }

  const sessionGrade = opts.grade;

  if (sessionGrade != null && courseGrade != null && sessionGrade !== courseGrade) {
    return {
      targetGrade: null,
      empty: true,
      courseTitle,
      courseGrade,
      reason: "grade_course_mismatch",
    };
  }

  if (courseGrade != null) {
    return {
      targetGrade: courseGrade,
      empty: false,
      courseTitle,
      courseGrade,
      reason: sessionGrade != null ? "grade_and_course" : "course_only",
    };
  }

  if (sessionGrade != null) {
    return {
      targetGrade: sessionGrade,
      empty: false,
      courseTitle,
      courseGrade,
      reason: "grade_only",
    };
  }

  return {
    targetGrade: null,
    empty: false,
    courseTitle,
    courseGrade,
    reason: "all_open",
  };
}

/** ACTIVE enrolled students for the resolved audience. */
export async function recipientsForLiveSession(opts: {
  grade: number | null;
  courseId: string | null;
}) {
  const audience = await resolveLiveSessionAudience(opts);
  if (audience.empty) {
    return { recipients: [] as { id: string; email: string; name: string }[], audience };
  }

  const enrollments = await prisma.enrollment.findMany({
    where: {
      status: "ACTIVE",
      ...(audience.targetGrade == null ? {} : { grade: audience.targetGrade }),
    },
    include: {
      user: { select: { id: true, email: true, name: true, role: true } },
    },
  });

  const byUser = new Map<string, { id: string; email: string; name: string }>();
  for (const e of enrollments) {
    if (e.user.role !== "STUDENT") continue;
    // Exact grade match when targeted (Prisma already filters; belt-and-suspenders).
    if (audience.targetGrade != null && e.grade !== audience.targetGrade) continue;
    byUser.set(e.user.id, {
      id: e.user.id,
      email: e.user.email,
      name: e.user.name,
    });
  }

  return { recipients: Array.from(byUser.values()), audience };
}

/**
 * In-app Notification rows + email for matching students only.
 * kind: created | updated (reschedule / detail change)
 */
export async function notifyStudentsOfLiveSession(
  live: LiveSessionNotifyInput,
  kind: "created" | "updated"
) {
  const { recipients, audience } = await recipientsForLiveSession({
    grade: live.grade,
    courseId: live.courseId,
  });

  const when = formatWhen(live.scheduledAt);
  const join = live.meetingUrl?.trim() || `${appBaseUrl()}/dashboard/student`;
  const gradeText =
    audience.targetGrade == null
      ? "All grades (open)"
      : gradeLabel(audience.targetGrade);
  const courseBit = audience.courseTitle ? ` · ${audience.courseTitle}` : "";

  const title =
    kind === "created"
      ? `Live session: ${live.title}`
      : `Live session updated: ${live.title}`;

  const body =
    kind === "created"
      ? `${live.title} is scheduled for ${when} (${gradeText}${courseBit}). Join: ${join}`
      : `${live.title} was rescheduled/updated to ${when} (${gradeText}${courseBit}). Join: ${join}`;

  const subject =
    kind === "created"
      ? `[${brand.shortName}] New live session — ${live.title}`
      : `[${brand.shortName}] Live session updated — ${live.title}`;

  const text = [
    `Hi,`,
    ``,
    kind === "created"
      ? `A teacher scheduled a live session for you:`
      : `A live session on your schedule was updated:`,
    ``,
    `Title: ${live.title}`,
    `When: ${when}`,
    `Audience: ${gradeText}${courseBit}`,
    live.description ? `Details: ${live.description}` : null,
    ``,
    `Join: ${join}`,
    ``,
    `Or open your dashboard: ${appBaseUrl()}/dashboard/student`,
    ``,
    `— ${brand.name}`,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <p>Hi,</p>
    <p>${
      kind === "created"
        ? "A teacher scheduled a live session for you:"
        : "A live session on your schedule was updated:"
    }</p>
    <ul>
      <li><strong>Title:</strong> ${escapeHtml(live.title)}</li>
      <li><strong>When:</strong> ${escapeHtml(when)}</li>
      <li><strong>Audience:</strong> ${escapeHtml(gradeText + courseBit)}</li>
    </ul>
    <p><a href="${escapeAttr(join)}">Join live room</a></p>
    <p><a href="${escapeAttr(appBaseUrl() + "/dashboard/student")}">Open student dashboard</a></p>
    <p>— ${escapeHtml(brand.name)}</p>
  `;

  let notified = 0;
  for (const student of recipients) {
    const meta = JSON.stringify({
      liveSessionId: live.id,
      kind,
      meetingUrl: live.meetingUrl,
      scheduledAt: live.scheduledAt.toISOString(),
      grade: live.grade,
      courseId: live.courseId,
      targetGrade: audience.targetGrade,
      audienceReason: audience.reason,
    });

    await prisma.notification.create({
      data: {
        userId: student.id,
        type: kind === "created" ? "live_session_created" : "live_session_updated",
        title,
        body,
        meta,
      },
    });

    await sendEmail({
      to: student.email,
      subject,
      text: `Hi ${student.name},\n\n${text.replace(/^Hi,\n\n/, "")}`,
      html: html.replace("<p>Hi,</p>", `<p>Hi ${escapeHtml(student.name)},</p>`),
    });
    notified += 1;
  }

  return {
    notified,
    recipientIds: recipients.map((r) => r.id),
    targetGrade: audience.targetGrade,
    audienceReason: audience.reason,
  };
}

/**
 * When a course is chosen and session grade is All/open, persist the course's grade
 * so listing filters and notifications stay aligned.
 */
export async function effectiveSessionGrade(
  grade: number | null | undefined,
  courseId: string | null | undefined
): Promise<number | null> {
  if (grade != null) return grade;
  if (!courseId) return null;
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: { grade: true },
  });
  return course?.grade ?? null;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(s: string) {
  return escapeHtml(s).replace(/'/g, "&#39;");
}
