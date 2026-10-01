-- Grade 10 cores ONLY: unpublish electives from student/teacher/catalog views.
-- Rows kept (do NOT delete) so other grades' ACT/SAT/Athletic/Bible courses stay intact
-- and Prosper can re-enable G10 electives later without reseed.
-- Do NOT run db:setup.

ALTER TABLE "Course" ADD COLUMN "published" INTEGER NOT NULL DEFAULT 1;

UPDATE "Course"
SET "published" = 0
WHERE "grade" = 10
  AND (
    "subject" IN (
      'ACT Prep',
      'SAT Prep',
      'College Athletic Pathway',
      'Entrepreneurship & Financial Independence',
      'Bible Study: Hallelujah Scriptures & Paleo-Hebrew',
      'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study'
    )
    OR lower("subject") LIKE '%act prep%'
    OR lower("subject") LIKE 'sat %'
    OR lower("subject") LIKE 'sat prep%'
    OR lower("subject") LIKE '%athletic%'
    OR lower("subject") LIKE '%bible%'
    OR lower("subject") LIKE '%entrepreneur%'
    OR lower("subject") LIKE '%financial independence%'
  );
