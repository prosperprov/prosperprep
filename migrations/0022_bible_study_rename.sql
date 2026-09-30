-- Rename user-facing "Bible … Word Study" → "Bible Study …" in live D1 catalog.
-- Scopes to Bible specialty courses only (does not touch ELA "Grammar: Word Study").
-- Do NOT run db:setup.

-- 1) Lesson titles + copy while Course.subject is still the old name
UPDATE "Lesson"
SET
  "title" = CASE "title"
    WHEN 'Why Word Study Matters' THEN 'Why Bible Study Matters'
    WHEN 'The Name and Praise: Hallelujah Word Study' THEN 'The Name and Praise: Hallelujah Bible Study'
    WHEN 'From Word Study to Life: Integrity and Work' THEN 'From Bible Study to Life: Integrity and Work'
    WHEN 'Capstone Word Study Project' THEN 'Capstone Bible Study Project'
    ELSE "title"
  END,
  "description" = REPLACE(
    REPLACE("description", 'word study', 'Bible study'),
    'Word Study',
    'Bible Study'
  ),
  "content" = REPLACE(
    REPLACE(
      REPLACE(
        REPLACE("content", 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study', 'Bible Study: Hallelujah Scriptures & Paleo-Hebrew'),
        'Word Study Journal',
        'Bible Study Journal'
      ),
      'Word Study',
      'Bible Study'
    ),
    'word study',
    'Bible study'
  )
WHERE "courseId" IN (
  SELECT "id" FROM "Course"
  WHERE "subject" = 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study'
);

-- 2) Lesson-check questions for those Bible lessons
UPDATE "Question"
SET
  "prompt" = REPLACE(
    REPLACE(
      REPLACE("prompt", 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study', 'Bible Study: Hallelujah Scriptures & Paleo-Hebrew'),
      'Word Study',
      'Bible Study'
    ),
    'word study',
    'Bible study'
  ),
  "choices" = REPLACE(
    REPLACE(
      REPLACE("choices", 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study', 'Bible Study: Hallelujah Scriptures & Paleo-Hebrew'),
      'Word Study',
      'Bible Study'
    ),
    'word study',
    'Bible study'
  ),
  "explanation" = REPLACE(
    REPLACE(
      REPLACE("explanation", 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study', 'Bible Study: Hallelujah Scriptures & Paleo-Hebrew'),
      'Word Study',
      'Bible Study'
    ),
    'word study',
    'Bible study'
  )
WHERE "lessonId" IN (
  SELECT "id" FROM "Lesson"
  WHERE "courseId" IN (
    SELECT "id" FROM "Course"
    WHERE "subject" = 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study'
  )
);

-- 3) Section quizzes + their questions for Bible courses
UPDATE "Quiz"
SET
  "title" = REPLACE(
    REPLACE("title", 'Word Study', 'Bible Study'),
    'word study',
    'Bible study'
  ),
  "description" = REPLACE(
    REPLACE(
      REPLACE("description", 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study', 'Bible Study: Hallelujah Scriptures & Paleo-Hebrew'),
      'Word Study',
      'Bible Study'
    ),
    'word study',
    'Bible study'
  )
WHERE "courseId" IN (
  SELECT "id" FROM "Course"
  WHERE "subject" = 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study'
);

UPDATE "Question"
SET
  "prompt" = REPLACE(
    REPLACE(
      REPLACE("prompt", 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study', 'Bible Study: Hallelujah Scriptures & Paleo-Hebrew'),
      'Word Study',
      'Bible Study'
    ),
    'word study',
    'Bible study'
  ),
  "choices" = REPLACE(
    REPLACE(
      REPLACE("choices", 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study', 'Bible Study: Hallelujah Scriptures & Paleo-Hebrew'),
      'Word Study',
      'Bible Study'
    ),
    'word study',
    'Bible study'
  ),
  "explanation" = REPLACE(
    REPLACE(
      REPLACE("explanation", 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study', 'Bible Study: Hallelujah Scriptures & Paleo-Hebrew'),
      'Word Study',
      'Bible Study'
    ),
    'word study',
    'Bible study'
  )
WHERE "quizId" IN (
  SELECT "id" FROM "Quiz"
  WHERE "courseId" IN (
    SELECT "id" FROM "Course"
    WHERE "subject" = 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study'
  )
);

-- 4) Course title / description / subject (last so earlier WHERE clauses still match)
UPDATE "Course"
SET
  "title" = REPLACE(
    "title",
    'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study',
    'Bible Study: Hallelujah Scriptures & Paleo-Hebrew'
  ),
  "description" = REPLACE(
    "description",
    'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study',
    'Bible Study: Hallelujah Scriptures & Paleo-Hebrew'
  ),
  "subject" = 'Bible Study: Hallelujah Scriptures & Paleo-Hebrew'
WHERE "subject" = 'Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study';
