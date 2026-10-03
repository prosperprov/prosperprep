-- Grade 6: keep core courses visible. Unpublish everything else for this grade.
-- Rows are kept (do NOT delete) so Bible, athletics, and entrepreneurship can return later.
-- Other grades are unchanged.
-- Also add Grade 6 Spanish, Unit 1, as a published course. Do NOT run db:setup.

UPDATE "Course"
SET "published" = 0
WHERE "grade" = 6
  AND "subject" NOT IN (
    'English Language Arts',
    'Mathematics',
    'Life & Earth Science',
    'World History',
    'Spanish'
  );

INSERT INTO "Course" ("id", "title", "description", "subject", "grade", "gradeBand", "order", "published")
SELECT
  'g6-spanish',
  'Spanish · Grade 6',
  'Grade 6 Spanish, Unit 1 (Greetings). Hear each new word, then practice it.',
  'Spanish',
  6,
  'MIDDLE',
  5,
  1
WHERE NOT EXISTS (
  SELECT 1 FROM "Course" WHERE "id" = 'g6-spanish' OR ("grade" = 6 AND "subject" = 'Spanish')
);

INSERT INTO "Lesson" ("id", "courseId", "title", "description", "content", "objectives", "order", "durationMin", "sectionKey")
SELECT 'g6-es-hello-goodbye', 'g6-spanish', 'Hello and goodbye', 'Hola, adiós, and hasta luego.', '', '', 1, 12, 'spanish-unit-1'
WHERE EXISTS (SELECT 1 FROM "Course" WHERE "id" = 'g6-spanish')
  AND NOT EXISTS (SELECT 1 FROM "Lesson" WHERE "id" = 'g6-es-hello-goodbye');

INSERT INTO "Lesson" ("id", "courseId", "title", "description", "content", "objectives", "order", "durationMin", "sectionKey")
SELECT 'g6-es-morning-and-night', 'g6-spanish', 'Morning and night', 'Good morning, good afternoon, and good night.', '', '', 2, 12, 'spanish-unit-1'
WHERE EXISTS (SELECT 1 FROM "Course" WHERE "id" = 'g6-spanish')
  AND NOT EXISTS (SELECT 1 FROM "Lesson" WHERE "id" = 'g6-es-morning-and-night');

INSERT INTO "Lesson" ("id", "courseId", "title", "description", "content", "objectives", "order", "durationMin", "sectionKey")
SELECT 'g6-es-please-and-thanks', 'g6-spanish', 'Please and thank you', 'Por favor, gracias, and de nada.', '', '', 3, 12, 'spanish-unit-1'
WHERE EXISTS (SELECT 1 FROM "Course" WHERE "id" = 'g6-spanish')
  AND NOT EXISTS (SELECT 1 FROM "Lesson" WHERE "id" = 'g6-es-please-and-thanks');

INSERT INTO "Lesson" ("id", "courseId", "title", "description", "content", "objectives", "order", "durationMin", "sectionKey")
SELECT 'g6-es-yes-and-no', 'g6-spanish', 'Yes and no', 'Sí, no, and short polite replies.', '', '', 4, 12, 'spanish-unit-1'
WHERE EXISTS (SELECT 1 FROM "Course" WHERE "id" = 'g6-spanish')
  AND NOT EXISTS (SELECT 1 FROM "Lesson" WHERE "id" = 'g6-es-yes-and-no');

INSERT INTO "Lesson" ("id", "courseId", "title", "description", "content", "objectives", "order", "durationMin", "sectionKey")
SELECT 'g6-es-numbers-1-5', 'g6-spanish', 'Numbers 1 to 5', 'Uno, dos, tres, cuatro, and cinco.', '', '', 5, 12, 'spanish-unit-1'
WHERE EXISTS (SELECT 1 FROM "Course" WHERE "id" = 'g6-spanish')
  AND NOT EXISTS (SELECT 1 FROM "Lesson" WHERE "id" = 'g6-es-numbers-1-5');

INSERT INTO "Lesson" ("id", "courseId", "title", "description", "content", "objectives", "order", "durationMin", "sectionKey")
SELECT 'g6-es-numbers-6-10', 'g6-spanish', 'Numbers 6 to 10', 'Seis, siete, ocho, nueve, and diez.', '', '', 6, 12, 'spanish-unit-1'
WHERE EXISTS (SELECT 1 FROM "Course" WHERE "id" = 'g6-spanish')
  AND NOT EXISTS (SELECT 1 FROM "Lesson" WHERE "id" = 'g6-es-numbers-6-10');

INSERT INTO "Lesson" ("id", "courseId", "title", "description", "content", "objectives", "order", "durationMin", "sectionKey")
SELECT 'g6-es-colors', 'g6-spanish', 'Colors', 'Red, blue, green, yellow, white, and black.', '', '', 7, 12, 'spanish-unit-1'
WHERE EXISTS (SELECT 1 FROM "Course" WHERE "id" = 'g6-spanish')
  AND NOT EXISTS (SELECT 1 FROM "Lesson" WHERE "id" = 'g6-es-colors');

INSERT INTO "Lesson" ("id", "courseId", "title", "description", "content", "objectives", "order", "durationMin", "sectionKey")
SELECT 'g6-es-my-name', 'g6-spanish', 'My name', 'Me llamo, soy, and how to ask a name.', '', '', 8, 12, 'spanish-unit-1'
WHERE EXISTS (SELECT 1 FROM "Course" WHERE "id" = 'g6-spanish')
  AND NOT EXISTS (SELECT 1 FROM "Lesson" WHERE "id" = 'g6-es-my-name');
