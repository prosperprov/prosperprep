-- Scrub leftover CKHG mention from archived Grade 6 World History stub.
-- Student UI hides retired lessons; still keep D1 clean. Do NOT run db:setup.

UPDATE "Lesson"
SET "content" = REPLACE(
  "content",
  'student-researched from free encyclopedias/CKHG',
  'student-researched from free public encyclopedias'
)
WHERE "id" = 'cmuh9bwwy0425edanrj5x4cdu' AND "content" LIKE '%CKHG%';
