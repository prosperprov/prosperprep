-- Finish Bible Study rename for Grade 10 showcase lesson title missed by 0022 CASE.
-- ELA "Word Study Editing Pass" intentionally unchanged.
-- Do NOT run db:setup.

UPDATE "Lesson"
SET
  "title" = 'From Bible Study to Integrity in Work',
  "description" = REPLACE(
    REPLACE("description", 'word study', 'Bible study'),
    'Word Study',
    'Bible Study'
  ),
  "content" = REPLACE(
    REPLACE(
      REPLACE("content", 'Word Study', 'Bible Study'),
      'word study',
      'Bible study'
    ),
    'From Word Study to Integrity in Work',
    'From Bible Study to Integrity in Work'
  )
WHERE "id" = 'cmuh9byf90a3nedankndieymf'
  OR "title" = 'From Word Study to Integrity in Work';

UPDATE "Question"
SET
  "prompt" = REPLACE(
    REPLACE("prompt", 'Word Study', 'Bible Study'),
    'word study',
    'Bible study'
  ),
  "choices" = REPLACE(
    REPLACE("choices", 'Word Study', 'Bible Study'),
    'word study',
    'Bible study'
  ),
  "explanation" = REPLACE(
    REPLACE("explanation", 'Word Study', 'Bible Study'),
    'word study',
    'Bible study'
  )
WHERE "lessonId" = 'cmuh9byf90a3nedankndieymf';
