/**
 * Finite attempt policy for lesson checks and section quizzes.
 *
 * Default: 3 attempts per lesson check / section quiz.
 * After the max, further submits are rejected and the UI locks.
 * Teachers see attempt counts and latest scores on the live progress panel.
 * Latest successful attempt within the limit still counts toward the course grade.
 */
export const MAX_QUIZ_ATTEMPTS = 3;

export function attemptsRemaining(used: number, max: number = MAX_QUIZ_ATTEMPTS): number {
  return Math.max(0, max - used);
}

export function isAttemptLocked(used: number, max: number = MAX_QUIZ_ATTEMPTS): boolean {
  return used >= max;
}
