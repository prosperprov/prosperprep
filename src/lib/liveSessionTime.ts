/** Split teacher Live Sessions into current/upcoming vs past by end time. */

export type SessionWithSchedule = {
  scheduledAt: Date | string;
  durationMinutes: number;
};

/** Instant when the live room is considered over (scheduled start + duration). */
export function liveSessionEndsAt(session: SessionWithSchedule): Date {
  const start =
    session.scheduledAt instanceof Date
      ? session.scheduledAt
      : new Date(session.scheduledAt);
  return new Date(start.getTime() + session.durationMinutes * 60_000);
}

/** True once the session end time is strictly before `now` (default: Date.now()). */
export function isLiveSessionPast(
  session: SessionWithSchedule,
  now: Date = new Date()
): boolean {
  return liveSessionEndsAt(session).getTime() < now.getTime();
}

export function partitionLiveSessions<T extends SessionWithSchedule>(
  sessions: T[],
  now: Date = new Date()
): { upcoming: T[]; past: T[] } {
  const upcoming: T[] = [];
  const past: T[] = [];
  for (const s of sessions) {
    if (isLiveSessionPast(s, now)) past.push(s);
    else upcoming.push(s);
  }
  // Upcoming: soonest first; past: most recent first
  upcoming.sort(
    (a, b) =>
      new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime()
  );
  past.sort(
    (a, b) =>
      new Date(b.scheduledAt).getTime() - new Date(a.scheduledAt).getTime()
  );
  return { upcoming, past };
}
