# Quiz / lesson-check attempt limits

**Default:** students get **3 attempts** per lesson check and per section quiz (`MAX_QUIZ_ATTEMPTS` in `src/lib/quizAttempts.ts`).

After the third submit, further tries are locked. The latest score within the limit still counts toward the course grade. Teachers see attempt counts and scores on the Teacher Dashboard live progression panel.

**Counting:** one submit = one attempt. Rapid duplicate POSTs (double-click or edge retry) with the same answers within 15 seconds are collapsed and do not consume an extra attempt.
