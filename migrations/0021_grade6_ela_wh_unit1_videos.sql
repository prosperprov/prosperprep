-- Fill Grade 6 ELA Unit 1 (vocab/context clues/roots) and World History Unit 1
-- (map skills/geography) videoUrl gaps left null by 0020.
-- All IDs oEmbed-verified (HTTP 200) at ship time. Prefer Khan Academy;
-- Crash Course Geography / TED-Ed-used Andy Jensen / education channels where KA lacks map-skills catalog.
-- Prosper LessonVideo cover unchanged. Student text must not mention Khan.
-- Do NOT run db:setup.

-- ========== ELA Unit 1: context clues + roots/affixes ==========
-- What Context Clues Do
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=CiNggzdWkIo' WHERE "id" = 'ppg6efae18a1c16daea5dd307';
-- Definition and Restatement Clues
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=k_vfm81eYD0' WHERE "id" = 'ppg6ed33df4ed27d6b5592cf5';
-- Contrast and Antonym Clues (IDEAS includes antonym)
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=CiNggzdWkIo' WHERE "id" = 'ppg6efda449cca346a5fdadee';
-- Example Clues and Lists
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=k_vfm81eYD0' WHERE "id" = 'ppg6e1331e9464d630653b53d';
-- Greek and Latin Roots I
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=fiaPqgwJFo4' WHERE "id" = 'ppg6eed22f42c47268ae93247';
-- Prefixes That Flip Meaning
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=WYSnf6qy4WA' WHERE "id" = 'ppg6e660ebd03a9b0f44def7c';
-- Suffixes and Part of Speech
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=WYSnf6qy4WA' WHERE "id" = 'ppg6e38ce4c2d4001dd1e53a0';

-- ========== World History Unit 1: map skills / geography ==========
-- Reading Maps: Keys and Directions
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=iHEMOdRo5u8' WHERE "id" = 'ppg6h3cbf4a597039eeb2b5de';
-- Latitude, Longitude, and Globes (TED-Ed lesson uses this clip)
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=swKBi6hHHMA' WHERE "id" = 'ppg6h5f2d2a3a429b36f92100';
-- Physical vs Political Maps
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=p1XG9WSEHiY' WHERE "id" = 'ppg6hdc2b679b7d93fd6fda78';
-- Regions and Human Geography
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=4y2nndDs8m4' WHERE "id" = 'ppg6h668d6b5319dc149332e4';
-- Climate, Landforms, and Settlement
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=1gMU7zfDqfg' WHERE "id" = 'ppg6h27a34b2e5453545ae67a';
-- Trade Routes on a Map
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=lLeIclx2lAU' WHERE "id" = 'ppg6h1ac1904d016510303be9';
-- Primary Sources: Maps as Evidence
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=iHEMOdRo5u8' WHERE "id" = 'ppg6h73daac8488d99bed8661';
-- Texas on the Map
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=2Jpgd8yKpUI' WHERE "id" = 'ppg6h078ece05774b6ac2fa73';
-- Geography Unit Synthesis
UPDATE "Lesson" SET "videoUrl" = 'https://www.youtube.com/watch?v=93LLwiMjDko' WHERE "id" = 'ppg6h100c5136c728dcde1f57';
