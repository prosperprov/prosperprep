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

/**
 * Scoring always returns the correct choice. A stored attempt means that
 * answer was already shown, so the question is finished.
 * This does not lower MAX_QUIZ_ATTEMPTS for a check that has not revealed an answer.
 */
export function priorAttemptRevealedAnswer(priorAttempts: number): boolean {
  return priorAttempts > 0;
}

export const ANSWER_REVEALED_ERROR = "The correct answer was already shown.";

export type RevealedCheckResult = {
  selected: number;
  correct: number;
  isCorrect: boolean;
  explanation: string;
  points: number;
};

/** Rebuild the revealed key for a finished check. Safe to send only after an attempt exists. */
export function buildRevealedResults(
  questions: { id: string; correctIndex: number; explanation: string; points: number }[],
  answersJson: string | null | undefined,
): Record<string, RevealedCheckResult> {
  let answers: Record<string, unknown> = {};
  if (answersJson) {
    try {
      const parsed = JSON.parse(answersJson) as unknown;
      if (parsed && typeof parsed === "object") answers = parsed as Record<string, unknown>;
    } catch {
      answers = {};
    }
  }
  const results: Record<string, RevealedCheckResult> = {};
  for (const q of questions) {
    const raw = answers[q.id];
    const selected = typeof raw === "number" ? raw : -1;
    results[q.id] = {
      selected,
      correct: q.correctIndex,
      isCorrect: selected === q.correctIndex,
      explanation: q.explanation,
      points: q.points,
    };
  }
  return results;
}
