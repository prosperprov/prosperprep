-- Ask your teacher: which lesson a DM is about. Context lives on the thread, not in a message body.
-- Do NOT run db:setup. Safe additive column for production D1 (prosperprep-school).

ALTER TABLE "MessageThread" ADD COLUMN "lessonId" TEXT;

CREATE INDEX IF NOT EXISTS "MessageThread_lessonId_idx" ON "MessageThread"("lessonId");
