-- Grade 6 World History: hand-authored Teach / Warm-up / Guided / Exit + skill Check MC.
-- Keeps existing lesson IDs and titles. Independent practice from skill banks (ELA) or hand packs (Science/History).
-- UPDATE content + objectives + description + Question rows. Preserve videoUrl.
-- Do NOT run db:setup. Safe for production D1 (prosperprep-school).
-- Source: scripts/data/grade6-history-hand-teach.json — do not Mad-Lib overwrite via gen-grade6-history-year.mjs without hand merge.

-- Unit 1 L1. Reading Maps: Keys and Directions (ppg6h3cbf4a597039eeb2b5de)
UPDATE "Lesson" SET "content" = '# Reading Maps: Keys and Directions

*Grade 6 World History · Unit 1 of 9 · Maps and Geographic Thinking · Lesson 1*

## Objective

**I can** use map keys, compass directions, and scale to locate places accurately.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Reading Maps: Keys and Directions”?

## Teach

### Big idea

A map **key/legend** explains symbols; a **compass rose** shows directions.

### Example 1 — Example 1

If green = forest, a green patch is forest — not “grass crayon.”

### Try this

Which way is west of a labeled north arrow pointing up?

**Check:** Left on a standard north-up map.

### Example 2 — Example 2

Second case for “Reading Maps: Keys and Directions”: compare places or times.

### Common mistake (this lesson only)

Treating “Reading Maps: Keys and Directions” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Reading Maps: Keys and Directions”?  
   **Answer:** Use map keys, compass directions, and scale to locate places accurately.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Reading Maps: Keys and Directions” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. A map **key/legend** explains symbols; a **compass rose** shows directions.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Reading Maps: Keys and Directions” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Reading Maps: Keys and Directions” with one map sketch.
', "objectives" = '• Use map keys, compass directions, and scale to locate places accurately.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Use map keys, compass directions, and scale to locate places accurately.' WHERE "id" = 'ppg6h3cbf4a597039eeb2b5de' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h6b46c375a0412dcdebc3','ppg6h3cbf4a597039eeb2b5de',NULL,'MULTIPLE_CHOICE','Closest to the core of “Reading Maps: Keys and Directions”?','["A map **key/legend** explains symbols; a **compass rose** shows directions.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h362bf8a722a1c14c3e8f','ppg6h3cbf4a597039eeb2b5de',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h8ec34e54e266ef1dfbe9','ppg6h3cbf4a597039eeb2b5de',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L2. Latitude, Longitude, and Globes (ppg6h5f2d2a3a429b36f92100)
UPDATE "Lesson" SET "content" = '# Latitude, Longitude, and Globes

*Grade 6 World History · Unit 1 of 9 · Maps and Geographic Thinking · Lesson 2*

## Objective

**I can** explain how latitude and longitude form a grid for locating places on Earth.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Latitude, Longitude, and Globes”?

## Teach

### Big idea

**Latitude** lines run east–west (measure N/S); **longitude** run north–south (measure E/W).

### Example 1 — Example 1

Equator = 0° latitude; prime meridian = 0° longitude.

### Try this

Apply “Latitude, Longitude, and Globes” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Latitude, Longitude, and Globes”: compare places or times.

### Common mistake (this lesson only)

Treating “Latitude, Longitude, and Globes” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Latitude, Longitude, and Globes”?  
   **Answer:** Explain how latitude and longitude form a grid for locating places on Earth.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Latitude, Longitude, and Globes” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. **Latitude** lines run east–west (measure N/S); **longitude** run north–south (measure E/W).
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Latitude, Longitude, and Globes” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Latitude, Longitude, and Globes” with one map sketch.
', "objectives" = '• Explain how latitude and longitude form a grid for locating places on Earth.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain how latitude and longitude form a grid for locating places on Earth.' WHERE "id" = 'ppg6h5f2d2a3a429b36f92100' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h40a032cbff88563ab885','ppg6h5f2d2a3a429b36f92100',NULL,'MULTIPLE_CHOICE','Closest to the core of “Latitude, Longitude, and Globes”?','["**Latitude** lines run east–west (measure N/S); **longitude** run north–south (measure E/W).","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h56bed5a0c273da59e227','ppg6h5f2d2a3a429b36f92100',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hbc1b411079ed4150e6ea','ppg6h5f2d2a3a429b36f92100',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L3. Physical vs Political Maps (ppg6hdc2b679b7d93fd6fda78)
UPDATE "Lesson" SET "content" = '# Physical vs Political Maps

*Grade 6 World History · Unit 1 of 9 · Maps and Geographic Thinking · Lesson 3*

## Objective

**I can** compare what physical and political maps emphasize and when to choose each.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Physical vs Political Maps”?

## Teach

### Big idea

**Physical** maps show landforms/water; **political** show borders and cities.

### Example 1 — Example 1

Mountains on physical; country borders on political.

### Try this

Apply “Physical vs Political Maps” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Physical vs Political Maps”: compare places or times.

### Common mistake (this lesson only)

Treating “Physical vs Political Maps” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Physical vs Political Maps”?  
   **Answer:** Compare what physical and political maps emphasize and when to choose each.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Physical vs Political Maps” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. **Physical** maps show landforms/water; **political** show borders and cities.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Physical vs Political Maps” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Physical vs Political Maps” with one map sketch.
', "objectives" = '• Compare what physical and political maps emphasize and when to choose each.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Compare what physical and political maps emphasize and when to choose each.' WHERE "id" = 'ppg6hdc2b679b7d93fd6fda78' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h9362387452c6e52b9cc9','ppg6hdc2b679b7d93fd6fda78',NULL,'MULTIPLE_CHOICE','Closest to the core of “Physical vs Political Maps”?','["**Physical** maps show landforms/water; **political** show borders and cities.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h1e7ac27eb7b4665ba8f9','ppg6hdc2b679b7d93fd6fda78',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hcdcface6dcd7a7d50bee','ppg6hdc2b679b7d93fd6fda78',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L4. Regions and Human Geography (ppg6h668d6b5319dc149332e4)
UPDATE "Lesson" SET "content" = '# Regions and Human Geography

*Grade 6 World History · Unit 1 of 9 · Maps and Geographic Thinking · Lesson 4*

## Objective

**I can** define regions by physical and human characteristics with clear examples.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Regions and Human Geography”?

## Teach

### Big idea

**Regions** group places by shared features (climate, culture, economy).

### Example 1 — Example 1

East Texas piney woods as a region idea.

### Try this

Apply “Regions and Human Geography” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Regions and Human Geography”: compare places or times.

### Common mistake (this lesson only)

Treating “Regions and Human Geography” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Regions and Human Geography”?  
   **Answer:** Define regions by physical and human characteristics with clear examples.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Regions and Human Geography” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. **Regions** group places by shared features (climate, culture, economy).
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Regions and Human Geography” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Regions and Human Geography” with one map sketch.
', "objectives" = '• Define regions by physical and human characteristics with clear examples.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Define regions by physical and human characteristics with clear examples.' WHERE "id" = 'ppg6h668d6b5319dc149332e4' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h96580f5c6e1d590ffc63','ppg6h668d6b5319dc149332e4',NULL,'MULTIPLE_CHOICE','Closest to the core of “Regions and Human Geography”?','["**Regions** group places by shared features (climate, culture, economy).","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h5e59b133fcfac22aa76b','ppg6h668d6b5319dc149332e4',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb12ef2d2755917b213e7','ppg6h668d6b5319dc149332e4',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L5. Climate, Landforms, and Settlement (ppg6h27a34b2e5453545ae67a)
UPDATE "Lesson" SET "content" = '# Climate, Landforms, and Settlement

*Grade 6 World History · Unit 1 of 9 · Maps and Geographic Thinking · Lesson 5*

## Objective

**I can** connect climate and landforms to where communities historically settle.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Climate, Landforms, and Settlement”?

## Teach

### Big idea

People settle where water, soil, and climate support food and trade — not randomly.

### Example 1 — Example 1

River valleys attracted early cities.

### Try this

Apply “Climate, Landforms, and Settlement” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Climate, Landforms, and Settlement”: compare places or times.

### Common mistake (this lesson only)

Treating “Climate, Landforms, and Settlement” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Climate, Landforms, and Settlement”?  
   **Answer:** Connect climate and landforms to where communities historically settle.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Climate, Landforms, and Settlement” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. People settle where water, soil, and climate support food and trade — not randomly.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Climate, Landforms, and Settlement” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Climate, Landforms, and Settlement” with one map sketch.
', "objectives" = '• Connect climate and landforms to where communities historically settle.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Connect climate and landforms to where communities historically settle.' WHERE "id" = 'ppg6h27a34b2e5453545ae67a' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hc118e5a91ce88c341de5','ppg6h27a34b2e5453545ae67a',NULL,'MULTIPLE_CHOICE','Closest to the core of “Climate, Landforms, and Settlement”?','["People settle where water, soil, and climate support food and trade — not randomly.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hf99a8aeb50dd30ad9927','ppg6h27a34b2e5453545ae67a',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h79e0aef20df13c62e4c9','ppg6h27a34b2e5453545ae67a',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L6. Trade Routes on a Map (ppg6h1ac1904d016510303be9)
UPDATE "Lesson" SET "content" = '# Trade Routes on a Map

*Grade 6 World History · Unit 1 of 9 · Maps and Geographic Thinking · Lesson 6*

## Objective

**I can** trace a historic trade route and explain why geography shaped its path.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Trade Routes on a Map”?

## Teach

### Big idea

Trade routes follow coasts, rivers, and passes that make travel possible.

### Example 1 — Example 1

Silk Roads idea = linked routes, not one highway.

### Try this

Apply “Trade Routes on a Map” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Trade Routes on a Map”: compare places or times.

### Common mistake (this lesson only)

Treating “Trade Routes on a Map” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Trade Routes on a Map”?  
   **Answer:** Trace a historic trade route and explain why geography shaped its path.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Trade Routes on a Map” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Trade routes follow coasts, rivers, and passes that make travel possible.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Trade Routes on a Map” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Trade Routes on a Map” with one map sketch.
', "objectives" = '• Trace a historic trade route and explain why geography shaped its path.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Trace a historic trade route and explain why geography shaped its path.' WHERE "id" = 'ppg6h1ac1904d016510303be9' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha361cc573fd48eb92a69','ppg6h1ac1904d016510303be9',NULL,'MULTIPLE_CHOICE','Closest to the core of “Trade Routes on a Map”?','["Trade routes follow coasts, rivers, and passes that make travel possible.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h8426e729fa2283443a95','ppg6h1ac1904d016510303be9',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h55ba36ef203ff7049fb5','ppg6h1ac1904d016510303be9',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L7. Primary Sources: Maps as Evidence (ppg6h73daac8488d99bed8661)
UPDATE "Lesson" SET "content" = '# Primary Sources: Maps as Evidence

*Grade 6 World History · Unit 1 of 9 · Maps and Geographic Thinking · Lesson 7*

## Objective

**I can** treat historic maps as sources: what they show, omit, and why that matters.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Primary Sources: Maps as Evidence”?

## Teach

### Big idea

Historical maps are **primary sources** with bias and limits — read the key and date.

### Example 1 — Example 1

A 1800s map may omit Indigenous names.

### Try this

Apply “Primary Sources: Maps as Evidence” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Primary Sources: Maps as Evidence”: compare places or times.

### Common mistake (this lesson only)

Treating “Primary Sources: Maps as Evidence” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Primary Sources: Maps as Evidence”?  
   **Answer:** Treat historic maps as sources: what they show, omit, and why that matters.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Primary Sources: Maps as Evidence” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Historical maps are **primary sources** with bias and limits — read the key and date.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Primary Sources: Maps as Evidence” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Primary Sources: Maps as Evidence” with one map sketch.
', "objectives" = '• Treat historic maps as sources: what they show, omit, and why that matters.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Treat historic maps as sources: what they show, omit, and why that matters.' WHERE "id" = 'ppg6h73daac8488d99bed8661' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6he9b647f4f5eed0ac7711','ppg6h73daac8488d99bed8661',NULL,'MULTIPLE_CHOICE','Closest to the core of “Primary Sources: Maps as Evidence”?','["Historical maps are **primary sources** with bias and limits — read the key and date.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h46712b3a373f065a0be8','ppg6h73daac8488d99bed8661',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hd84784b77fcf4d86cacd','ppg6h73daac8488d99bed8661',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L8. Texas on the Map (ppg6h078ece05774b6ac2fa73)
UPDATE "Lesson" SET "content" = '# Texas on the Map

*Grade 6 World History · Unit 1 of 9 · Maps and Geographic Thinking · Lesson 8*

## Objective

**I can** locate Texas relative to continents, oceans, and neighboring regions.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Texas on the Map”?

## Teach

### Big idea

Locate Texas relative to Gulf, Mexico, and US regions; note rivers and major cities.

### Example 1 — Example 1

Gulf Coast vs Panhandle differences.

### Try this

Apply “Texas on the Map” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Texas on the Map”: compare places or times.

### Common mistake (this lesson only)

Treating “Texas on the Map” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Texas on the Map”?  
   **Answer:** Locate Texas relative to continents, oceans, and neighboring regions.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Texas on the Map” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Locate Texas relative to Gulf, Mexico, and US regions; note rivers and major cities.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Texas on the Map” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Texas on the Map” with one map sketch.
', "objectives" = '• Locate Texas relative to continents, oceans, and neighboring regions.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Locate Texas relative to continents, oceans, and neighboring regions.' WHERE "id" = 'ppg6h078ece05774b6ac2fa73' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb0d629453067274c4e85','ppg6h078ece05774b6ac2fa73',NULL,'MULTIPLE_CHOICE','Closest to the core of “Texas on the Map”?','["Locate Texas relative to Gulf, Mexico, and US regions; note rivers and major cities.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h3e6a09df09412e35f05d','ppg6h078ece05774b6ac2fa73',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h64e5f3353b6db7032c68','ppg6h078ece05774b6ac2fa73',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L9. Geography Unit Synthesis (ppg6h100c5136c728dcde1f57)
UPDATE "Lesson" SET "content" = '# Geography Unit Synthesis

*Grade 6 World History · Unit 1 of 9 · Maps and Geographic Thinking · Lesson 9*

## Objective

**I can** explain one historical pattern using maps, regions, and geographic vocabulary.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Geography Unit Synthesis”?

## Teach

### Big idea

Maps + regions + settlement + Texas — geography shapes history questions.

### Example 1 — Example 1

One map skills checklist.

### Try this

Apply “Geography Unit Synthesis” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Geography Unit Synthesis”: compare places or times.

### Common mistake (this lesson only)

Treating “Geography Unit Synthesis” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Geography Unit Synthesis”?  
   **Answer:** Explain one historical pattern using maps, regions, and geographic vocabulary.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Geography Unit Synthesis” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Maps + regions + settlement + Texas — geography shapes history questions.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Geography Unit Synthesis” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Geography Unit Synthesis” with one map sketch.
', "objectives" = '• Explain one historical pattern using maps, regions, and geographic vocabulary.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain one historical pattern using maps, regions, and geographic vocabulary.' WHERE "id" = 'ppg6h100c5136c728dcde1f57' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha726f5db9405690b0d96','ppg6h100c5136c728dcde1f57',NULL,'MULTIPLE_CHOICE','Closest to the core of “Geography Unit Synthesis”?','["Maps + regions + settlement + Texas — geography shapes history questions.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h680ce1ce19f490141378','ppg6h100c5136c728dcde1f57',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h6ae6b9351d8139dba9f0','ppg6h100c5136c728dcde1f57',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L1. What Historians Can Know About Deep Time (ppg6hfb0a5c53f7d3c5e9611d)
UPDATE "Lesson" SET "content" = '# What Historians Can Know About Deep Time

*Grade 6 World History · Unit 2 of 9 · Early Humans and Farming · Lesson 1*

## Objective

**I can** distinguish evidence-based claims from guesses about early human history.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “What Historians Can Know About Deep Time”?

## Teach

### Big idea

Historians and archaeologists use artifacts, sites, and careful inference — not time machines.

### Example 1 — Example 1

A stone tool is evidence of technology, not a full diary.

### Try this

Apply “What Historians Can Know About Deep Time” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “What Historians Can Know About Deep Time”: compare places or times.

### Common mistake (this lesson only)

Treating “What Historians Can Know About Deep Time” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “What Historians Can Know About Deep Time”?  
   **Answer:** Distinguish evidence-based claims from guesses about early human history.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “What Historians Can Know About Deep Time” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Historians and archaeologists use artifacts, sites, and careful inference — not time machines.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “What Historians Can Know About Deep Time” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “What Historians Can Know About Deep Time” with one map sketch.
', "objectives" = '• Distinguish evidence-based claims from guesses about early human history.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Distinguish evidence-based claims from guesses about early human history.' WHERE "id" = 'ppg6hfb0a5c53f7d3c5e9611d' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h7cdf72cc1e1f1f3c8c85','ppg6hfb0a5c53f7d3c5e9611d',NULL,'MULTIPLE_CHOICE','Closest to the core of “What Historians Can Know About Deep Time”?','["Historians and archaeologists use artifacts, sites, and careful inference — not time machines.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h0dbe8ae2aaca09b31b44','ppg6hfb0a5c53f7d3c5e9611d',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h1cf9c539988083119f09','ppg6hfb0a5c53f7d3c5e9611d',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L2. Foraging Lifeways (ppg6h733657ec49b181ce30e8)
UPDATE "Lesson" SET "content" = '# Foraging Lifeways

*Grade 6 World History · Unit 2 of 9 · Early Humans and Farming · Lesson 2*

## Objective

**I can** describe foraging communities and the skills they needed to survive.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Foraging Lifeways”?

## Teach

### Big idea

Foragers gather/hunt; mobility often follows seasonal resources.

### Example 1 — Example 1

Small groups; deep environmental knowledge.

### Try this

Apply “Foraging Lifeways” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Foraging Lifeways”: compare places or times.

### Common mistake (this lesson only)

Treating “Foraging Lifeways” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Foraging Lifeways”?  
   **Answer:** Describe foraging communities and the skills they needed to survive.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Foraging Lifeways” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Foragers gather/hunt; mobility often follows seasonal resources.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Foraging Lifeways” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Foraging Lifeways” with one map sketch.
', "objectives" = '• Describe foraging communities and the skills they needed to survive.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Describe foraging communities and the skills they needed to survive.' WHERE "id" = 'ppg6h733657ec49b181ce30e8' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha30b37cc9467b07f791b','ppg6h733657ec49b181ce30e8',NULL,'MULTIPLE_CHOICE','Closest to the core of “Foraging Lifeways”?','["Foragers gather/hunt; mobility often follows seasonal resources.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hf04b09863b8f6bc88419','ppg6h733657ec49b181ce30e8',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h187a4d31b594365e0f20','ppg6h733657ec49b181ce30e8',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L3. The Agricultural Revolution (ppg6heed534fdb297ea263059)
UPDATE "Lesson" SET "content" = '# The Agricultural Revolution

*Grade 6 World History · Unit 2 of 9 · Early Humans and Farming · Lesson 3*

## Objective

**I can** explain how farming changed food supply, settlement, and daily work.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “The Agricultural Revolution”?

## Teach

### Big idea

Farming domesticated plants/animals → surplus, villages, new jobs — huge change over long time.

### Example 1 — Example 1

Not overnight.

### Try this

Apply “The Agricultural Revolution” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “The Agricultural Revolution”: compare places or times.

### Common mistake (this lesson only)

Treating “The Agricultural Revolution” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “The Agricultural Revolution”?  
   **Answer:** Explain how farming changed food supply, settlement, and daily work.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “The Agricultural Revolution” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Farming domesticated plants/animals → surplus, villages, new jobs — huge change over long time.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “The Agricultural Revolution” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “The Agricultural Revolution” with one map sketch.
', "objectives" = '• Explain how farming changed food supply, settlement, and daily work.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain how farming changed food supply, settlement, and daily work.' WHERE "id" = 'ppg6heed534fdb297ea263059' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h472e0182c028778a79e8','ppg6heed534fdb297ea263059',NULL,'MULTIPLE_CHOICE','Closest to the core of “The Agricultural Revolution”?','["Farming domesticated plants/animals → surplus, villages, new jobs — huge change over long time.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6had7a7f741cccf272132a','ppg6heed534fdb297ea263059',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb4d2942de00894b0b29d','ppg6heed534fdb297ea263059',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L4. Domestication of Plants and Animals (ppg6h9798a98ac86864ec6130)
UPDATE "Lesson" SET "content" = '# Domestication of Plants and Animals

*Grade 6 World History · Unit 2 of 9 · Early Humans and Farming · Lesson 4*

## Objective

**I can** define domestication and give examples that reshaped human societies.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Domestication of Plants and Animals”?

## Teach

### Big idea

**Domestication** = humans breed species for traits over generations.

### Example 1 — Example 1

Wheat, cattle examples.

### Try this

Apply “Domestication of Plants and Animals” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Domestication of Plants and Animals”: compare places or times.

### Common mistake (this lesson only)

Treating “Domestication of Plants and Animals” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Domestication of Plants and Animals”?  
   **Answer:** Define domestication and give examples that reshaped human societies.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Domestication of Plants and Animals” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. **Domestication** = humans breed species for traits over generations.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Domestication of Plants and Animals” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Domestication of Plants and Animals” with one map sketch.
', "objectives" = '• Define domestication and give examples that reshaped human societies.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Define domestication and give examples that reshaped human societies.' WHERE "id" = 'ppg6h9798a98ac86864ec6130' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h5ecfc2e123f382c0b095','ppg6h9798a98ac86864ec6130',NULL,'MULTIPLE_CHOICE','Closest to the core of “Domestication of Plants and Animals”?','["**Domestication** = humans breed species for traits over generations.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h6a6546aca0ae759f972b','ppg6h9798a98ac86864ec6130',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h772eefd96dbd3a2ced7e','ppg6h9798a98ac86864ec6130',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L5. From Camps to Villages (ppg6hbaffa6e71f60ea42eb33)
UPDATE "Lesson" SET "content" = '# From Camps to Villages

*Grade 6 World History · Unit 2 of 9 · Early Humans and Farming · Lesson 5*

## Objective

**I can** trace how surplus food supported larger, more permanent settlements.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “From Camps to Villages”?

## Teach

### Big idea

Surplus food supports denser settlement and specialization.

### Example 1 — Example 1

Pottery and storage appear more often.

### Try this

Apply “From Camps to Villages” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “From Camps to Villages”: compare places or times.

### Common mistake (this lesson only)

Treating “From Camps to Villages” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “From Camps to Villages”?  
   **Answer:** Trace how surplus food supported larger, more permanent settlements.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “From Camps to Villages” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Surplus food supports denser settlement and specialization.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “From Camps to Villages” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “From Camps to Villages” with one map sketch.
', "objectives" = '• Trace how surplus food supported larger, more permanent settlements.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Trace how surplus food supported larger, more permanent settlements.' WHERE "id" = 'ppg6hbaffa6e71f60ea42eb33' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h50296f0e464b63dac464','ppg6hbaffa6e71f60ea42eb33',NULL,'MULTIPLE_CHOICE','Closest to the core of “From Camps to Villages”?','["Surplus food supports denser settlement and specialization.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h439b86f2d266ffb95096','ppg6hbaffa6e71f60ea42eb33',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h13f465f0fc9af68858af','ppg6hbaffa6e71f60ea42eb33',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L6. Specialization and New Jobs (ppg6h291e25febb844af77701)
UPDATE "Lesson" SET "content" = '# Specialization and New Jobs

*Grade 6 World History · Unit 2 of 9 · Early Humans and Farming · Lesson 6*

## Objective

**I can** connect farming surplus to specialized roles (craft, trade, leadership).

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Specialization and New Jobs”?

## Teach

### Big idea

Not everyone farms — craft, trade, leadership roles grow with surplus.

### Example 1 — Example 1

Potter vs farmer.

### Try this

Apply “Specialization and New Jobs” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Specialization and New Jobs”: compare places or times.

### Common mistake (this lesson only)

Treating “Specialization and New Jobs” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Specialization and New Jobs”?  
   **Answer:** Connect farming surplus to specialized roles (craft, trade, leadership).

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Specialization and New Jobs” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Not everyone farms — craft, trade, leadership roles grow with surplus.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Specialization and New Jobs” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Specialization and New Jobs” with one map sketch.
', "objectives" = '• Connect farming surplus to specialized roles (craft, trade, leadership).
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Connect farming surplus to specialized roles (craft, trade, leadership).' WHERE "id" = 'ppg6h291e25febb844af77701' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h03c697962ca55818a795','ppg6h291e25febb844af77701',NULL,'MULTIPLE_CHOICE','Closest to the core of “Specialization and New Jobs”?','["Not everyone farms — craft, trade, leadership roles grow with surplus.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hafeee1874fb9c77198f6','ppg6h291e25febb844af77701',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha3421f984a4901f3ce89','ppg6h291e25febb844af77701',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L7. Technology and Tools Over Time (ppg6h3b14206be575c3576502)
UPDATE "Lesson" SET "content" = '# Technology and Tools Over Time

*Grade 6 World History · Unit 2 of 9 · Early Humans and Farming · Lesson 7*

## Objective

**I can** interpret simple tool changes as evidence of problem-solving, not “smarter vs less smart.”

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Technology and Tools Over Time”?

## Teach

### Big idea

Tools improve problem-solving; stone → metals in many regions over time.

### Example 1 — Example 1

Bronze/iron as later chapters.

### Try this

Apply “Technology and Tools Over Time” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Technology and Tools Over Time”: compare places or times.

### Common mistake (this lesson only)

Treating “Technology and Tools Over Time” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Technology and Tools Over Time”?  
   **Answer:** Interpret simple tool changes as evidence of problem-solving, not “smarter vs less smart.”

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Technology and Tools Over Time” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Tools improve problem-solving; stone → metals in many regions over time.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Technology and Tools Over Time” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Technology and Tools Over Time” with one map sketch.
', "objectives" = '• Interpret simple tool changes as evidence of problem-solving, not “smarter vs less smart.”
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Interpret simple tool changes as evidence of problem-solving, not “smarter vs less smart.”' WHERE "id" = 'ppg6h3b14206be575c3576502' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hfdff1717e5235831a838','ppg6h3b14206be575c3576502',NULL,'MULTIPLE_CHOICE','Closest to the core of “Technology and Tools Over Time”?','["Tools improve problem-solving; stone → metals in many regions over time.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hdd7fdf2f42a0c7bdefca','ppg6h3b14206be575c3576502',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h7953f3a705902de840ca','ppg6h3b14206be575c3576502',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L8. Early Humans Unit Review (ppg6h049b765a9dcfee68a092)
UPDATE "Lesson" SET "content" = '# Early Humans Unit Review

*Grade 6 World History · Unit 2 of 9 · Early Humans and Farming · Lesson 8*

## Objective

**I can** argue with evidence how farming transformed human communities.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Early Humans Unit Review”?

## Teach

### Big idea

Foraging → farming → villages → specialization map.

### Example 1 — Example 1

Cause/effect chain.

### Try this

Apply “Early Humans Unit Review” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Early Humans Unit Review”: compare places or times.

### Common mistake (this lesson only)

Treating “Early Humans Unit Review” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Early Humans Unit Review”?  
   **Answer:** Argue with evidence how farming transformed human communities.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Early Humans Unit Review” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Foraging → farming → villages → specialization map.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Early Humans Unit Review” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Early Humans Unit Review” with one map sketch.
', "objectives" = '• Argue with evidence how farming transformed human communities.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Argue with evidence how farming transformed human communities.' WHERE "id" = 'ppg6h049b765a9dcfee68a092' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h72e6cb542ff2608d726b','ppg6h049b765a9dcfee68a092',NULL,'MULTIPLE_CHOICE','Closest to the core of “Early Humans Unit Review”?','["Foraging → farming → villages → specialization map.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h78f007fddb836e9c70dc','ppg6h049b765a9dcfee68a092',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb23c2d0ca1998ed42592','ppg6h049b765a9dcfee68a092',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L1. Why Rivers Matter (ppg6h727fb40f7bcdda7ba272)
UPDATE "Lesson" SET "content" = '# Why Rivers Matter

*Grade 6 World History · Unit 3 of 9 · River Civilizations · Lesson 1*

## Objective

**I can** explain why major early civilizations clustered along fertile river valleys.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Why Rivers Matter”?

## Teach

### Big idea

Rivers give water, silt, transport, and flood risk — magnets for early cities.

### Example 1 — Example 1

Nile flood cycle story.

### Try this

Apply “Why Rivers Matter” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Why Rivers Matter”: compare places or times.

### Common mistake (this lesson only)

Treating “Why Rivers Matter” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Why Rivers Matter”?  
   **Answer:** Explain why major early civilizations clustered along fertile river valleys.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Why Rivers Matter” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Rivers give water, silt, transport, and flood risk — magnets for early cities.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Why Rivers Matter” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Why Rivers Matter” with one map sketch.
', "objectives" = '• Explain why major early civilizations clustered along fertile river valleys.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain why major early civilizations clustered along fertile river valleys.' WHERE "id" = 'ppg6h727fb40f7bcdda7ba272' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h4e9bc1bf4ce178322d7d','ppg6h727fb40f7bcdda7ba272',NULL,'MULTIPLE_CHOICE','Closest to the core of “Why Rivers Matter”?','["Rivers give water, silt, transport, and flood risk — magnets for early cities.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hddb308a35343e8031b99','ppg6h727fb40f7bcdda7ba272',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hcfe6d471b0a5e3e335d0','ppg6h727fb40f7bcdda7ba272',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L2. Mesopotamia: Cities and Writing (ppg6h5dd7fee6932d411ccd10)
UPDATE "Lesson" SET "content" = '# Mesopotamia: Cities and Writing

*Grade 6 World History · Unit 3 of 9 · River Civilizations · Lesson 2*

## Objective

**I can** describe city life, irrigation, and early writing in Mesopotamia.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Mesopotamia: Cities and Writing”?

## Teach

### Big idea

Tigris–Euphrates cities; cuneiform writing for records.

### Example 1 — Example 1

Writing helps manage surplus and law.

### Try this

Apply “Mesopotamia: Cities and Writing” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Mesopotamia: Cities and Writing”: compare places or times.

### Common mistake (this lesson only)

Treating “Mesopotamia: Cities and Writing” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Mesopotamia: Cities and Writing”?  
   **Answer:** Describe city life, irrigation, and early writing in Mesopotamia.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Mesopotamia: Cities and Writing” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Tigris–Euphrates cities; cuneiform writing for records.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Mesopotamia: Cities and Writing” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Mesopotamia: Cities and Writing” with one map sketch.
', "objectives" = '• Describe city life, irrigation, and early writing in Mesopotamia.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Describe city life, irrigation, and early writing in Mesopotamia.' WHERE "id" = 'ppg6h5dd7fee6932d411ccd10' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h1a554f6b4f9da4a1a1c7','ppg6h5dd7fee6932d411ccd10',NULL,'MULTIPLE_CHOICE','Closest to the core of “Mesopotamia: Cities and Writing”?','["Tigris–Euphrates cities; cuneiform writing for records.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h2515816d14468c03b209','ppg6h5dd7fee6932d411ccd10',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h691134dd1a22f7f053dd','ppg6h5dd7fee6932d411ccd10',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L3. Ancient Egypt Along the Nile (ppg6hf9d4a9a1daa1a2887c45)
UPDATE "Lesson" SET "content" = '# Ancient Egypt Along the Nile

*Grade 6 World History · Unit 3 of 9 · River Civilizations · Lesson 3*

## Objective

**I can** connect Nile flooding, farming, and centralized authority in Egypt.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Ancient Egypt Along the Nile”?

## Teach

### Big idea

Nile flooding + farming + centralized authority linked.

### Example 1 — Example 1

Predictable floods (relative) aided planning.

### Try this

Apply “Ancient Egypt Along the Nile” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Ancient Egypt Along the Nile”: compare places or times.

### Common mistake (this lesson only)

Treating “Ancient Egypt Along the Nile” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Ancient Egypt Along the Nile”?  
   **Answer:** Connect Nile flooding, farming, and centralized authority in Egypt.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Ancient Egypt Along the Nile” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Nile flooding + farming + centralized authority linked.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Ancient Egypt Along the Nile” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Ancient Egypt Along the Nile” with one map sketch.
', "objectives" = '• Connect Nile flooding, farming, and centralized authority in Egypt.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Connect Nile flooding, farming, and centralized authority in Egypt.' WHERE "id" = 'ppg6hf9d4a9a1daa1a2887c45' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha43f1d02eca8ad245a7e','ppg6hf9d4a9a1daa1a2887c45',NULL,'MULTIPLE_CHOICE','Closest to the core of “Ancient Egypt Along the Nile”?','["Nile flooding + farming + centralized authority linked.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h23bf0223b9c9ffd01595','ppg6hf9d4a9a1daa1a2887c45',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h30570b1355dbd37fce78','ppg6hf9d4a9a1daa1a2887c45',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L4. Indus Valley Patterns (ppg6h18acade4458d4586802a)
UPDATE "Lesson" SET "content" = '# Indus Valley Patterns

*Grade 6 World History · Unit 3 of 9 · River Civilizations · Lesson 4*

## Objective

**I can** use archaeological evidence carefully to describe Indus Valley cities.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Indus Valley Patterns”?

## Teach

### Big idea

Planned cities, drainage — evidence of organization; writing still debated in meaning.

### Example 1 — Example 1

Harappa/Mohenjo-daro patterns.

### Try this

Apply “Indus Valley Patterns” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Indus Valley Patterns”: compare places or times.

### Common mistake (this lesson only)

Treating “Indus Valley Patterns” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Indus Valley Patterns”?  
   **Answer:** Use archaeological evidence carefully to describe Indus Valley cities.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Indus Valley Patterns” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Planned cities, drainage — evidence of organization; writing still debated in meaning.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Indus Valley Patterns” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Indus Valley Patterns” with one map sketch.
', "objectives" = '• Use archaeological evidence carefully to describe Indus Valley cities.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Use archaeological evidence carefully to describe Indus Valley cities.' WHERE "id" = 'ppg6h18acade4458d4586802a' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h746e56a634ecbb494fc5','ppg6h18acade4458d4586802a',NULL,'MULTIPLE_CHOICE','Closest to the core of “Indus Valley Patterns”?','["Planned cities, drainage — evidence of organization; writing still debated in meaning.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha854e905c94b1ace9933','ppg6h18acade4458d4586802a',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hfeaf7ca4fb5cfd3aa7a2','ppg6h18acade4458d4586802a',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L5. Ancient China: Rivers and Dynasties Intro (ppg6h52417a2492f8e8888b5e)
UPDATE "Lesson" SET "content" = '# Ancient China: Rivers and Dynasties Intro

*Grade 6 World History · Unit 3 of 9 · River Civilizations · Lesson 5*

## Objective

**I can** introduce early Chinese river civilizations and continuity themes.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Ancient China: Rivers and Dynasties Intro”?

## Teach

### Big idea

Yellow/Yangtze river systems; early dynastic cycles intro.

### Example 1 — Example 1

Geography shaped farming cores.

### Try this

Apply “Ancient China: Rivers and Dynasties Intro” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Ancient China: Rivers and Dynasties Intro”: compare places or times.

### Common mistake (this lesson only)

Treating “Ancient China: Rivers and Dynasties Intro” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Ancient China: Rivers and Dynasties Intro”?  
   **Answer:** Introduce early Chinese river civilizations and continuity themes.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Ancient China: Rivers and Dynasties Intro” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Yellow/Yangtze river systems; early dynastic cycles intro.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Ancient China: Rivers and Dynasties Intro” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Ancient China: Rivers and Dynasties Intro” with one map sketch.
', "objectives" = '• Introduce early Chinese river civilizations and continuity themes.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Introduce early Chinese river civilizations and continuity themes.' WHERE "id" = 'ppg6h52417a2492f8e8888b5e' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h4d1cc23c001374676afc','ppg6h52417a2492f8e8888b5e',NULL,'MULTIPLE_CHOICE','Closest to the core of “Ancient China: Rivers and Dynasties Intro”?','["Yellow/Yangtze river systems; early dynastic cycles intro.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6had12d19d21d750023924','ppg6h52417a2492f8e8888b5e',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h29999ff3dee7b877c708','ppg6h52417a2492f8e8888b5e',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L6. Laws, Leaders, and Order (ppg6hdcf79b6a919431e4e418)
UPDATE "Lesson" SET "content" = '# Laws, Leaders, and Order

*Grade 6 World History · Unit 3 of 9 · River Civilizations · Lesson 6*

## Objective

**I can** compare how early states used laws and leaders to organize large populations.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Laws, Leaders, and Order”?

## Teach

### Big idea

Written laws and leaders claim order — ask who benefits and what evidence shows.

### Example 1 — Example 1

Hammurabi as example of public law claims.

### Try this

Apply “Laws, Leaders, and Order” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Laws, Leaders, and Order”: compare places or times.

### Common mistake (this lesson only)

Treating “Laws, Leaders, and Order” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Laws, Leaders, and Order”?  
   **Answer:** Compare how early states used laws and leaders to organize large populations.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Laws, Leaders, and Order” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Written laws and leaders claim order — ask who benefits and what evidence shows.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Laws, Leaders, and Order” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Laws, Leaders, and Order” with one map sketch.
', "objectives" = '• Compare how early states used laws and leaders to organize large populations.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Compare how early states used laws and leaders to organize large populations.' WHERE "id" = 'ppg6hdcf79b6a919431e4e418' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6haf8e23d34c05f60397e4','ppg6hdcf79b6a919431e4e418',NULL,'MULTIPLE_CHOICE','Closest to the core of “Laws, Leaders, and Order”?','["Written laws and leaders claim order — ask who benefits and what evidence shows.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hda60d371c85b79b18b58','ppg6hdcf79b6a919431e4e418',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h2e2ad2e234a9a183583c','ppg6hdcf79b6a919431e4e418',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L7. Trade and Cultural Exchange (ppg6h4267dab47b57408937de)
UPDATE "Lesson" SET "content" = '# Trade and Cultural Exchange

*Grade 6 World History · Unit 3 of 9 · River Civilizations · Lesson 7*

## Objective

**I can** show how goods and ideas moved between early civilizations.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Trade and Cultural Exchange”?

## Teach

### Big idea

Goods and ideas move together along routes.

### Example 1 — Example 1

Beads, metals, beliefs travel.

### Try this

Apply “Trade and Cultural Exchange” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Trade and Cultural Exchange”: compare places or times.

### Common mistake (this lesson only)

Treating “Trade and Cultural Exchange” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Trade and Cultural Exchange”?  
   **Answer:** Show how goods and ideas moved between early civilizations.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Trade and Cultural Exchange” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Goods and ideas move together along routes.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Trade and Cultural Exchange” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Trade and Cultural Exchange” with one map sketch.
', "objectives" = '• Show how goods and ideas moved between early civilizations.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Show how goods and ideas moved between early civilizations.' WHERE "id" = 'ppg6h4267dab47b57408937de' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h766ac3f044dc73e74dbf','ppg6h4267dab47b57408937de',NULL,'MULTIPLE_CHOICE','Closest to the core of “Trade and Cultural Exchange”?','["Goods and ideas move together along routes.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h62a56e09e2860d123ffe','ppg6h4267dab47b57408937de',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h5710df3cb79b259cebba','ppg6h4267dab47b57408937de',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L8. Achievements and Daily Life (ppg6hf04b4bab07bf89c10f17)
UPDATE "Lesson" SET "content" = '# Achievements and Daily Life

*Grade 6 World History · Unit 3 of 9 · River Civilizations · Lesson 8*

## Objective

**I can** balance famous monuments with ordinary people’s work and family life.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Achievements and Daily Life”?

## Teach

### Big idea

Monuments ≠ whole story; daily life includes work, family, faith practice, inequality.

### Example 1 — Example 1

Compare farmer vs elite evidence.

### Try this

Apply “Achievements and Daily Life” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Achievements and Daily Life”: compare places or times.

### Common mistake (this lesson only)

Treating “Achievements and Daily Life” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Achievements and Daily Life”?  
   **Answer:** Balance famous monuments with ordinary people’s work and family life.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Achievements and Daily Life” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Monuments ≠ whole story; daily life includes work, family, faith practice, inequality.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Achievements and Daily Life” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Achievements and Daily Life” with one map sketch.
', "objectives" = '• Balance famous monuments with ordinary people’s work and family life.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Balance famous monuments with ordinary people’s work and family life.' WHERE "id" = 'ppg6hf04b4bab07bf89c10f17' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hcdecf31cdbc24ce997a6','ppg6hf04b4bab07bf89c10f17',NULL,'MULTIPLE_CHOICE','Closest to the core of “Achievements and Daily Life”?','["Monuments ≠ whole story; daily life includes work, family, faith practice, inequality.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hf8b0bb9bc707c4cfc7e9','ppg6hf04b4bab07bf89c10f17',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h981c2d9b174d4a493385','ppg6hf04b4bab07bf89c10f17',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L9. River Civilizations Synthesis (ppg6ha6fcd1eeaf1eb24e820f)
UPDATE "Lesson" SET "content" = '# River Civilizations Synthesis

*Grade 6 World History · Unit 3 of 9 · River Civilizations · Lesson 9*

## Objective

**I can** compare two river civilizations on geography, governance, and culture.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “River Civilizations Synthesis”?

## Teach

### Big idea

Rivers + surplus + cities + writing/law + trade.

### Example 1 — Example 1

Compare two civilizations on one trait.

### Try this

Apply “River Civilizations Synthesis” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “River Civilizations Synthesis”: compare places or times.

### Common mistake (this lesson only)

Treating “River Civilizations Synthesis” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “River Civilizations Synthesis”?  
   **Answer:** Compare two river civilizations on geography, governance, and culture.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “River Civilizations Synthesis” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Rivers + surplus + cities + writing/law + trade.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “River Civilizations Synthesis” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “River Civilizations Synthesis” with one map sketch.
', "objectives" = '• Compare two river civilizations on geography, governance, and culture.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Compare two river civilizations on geography, governance, and culture.' WHERE "id" = 'ppg6ha6fcd1eeaf1eb24e820f' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb6292c02174acf21d195','ppg6ha6fcd1eeaf1eb24e820f',NULL,'MULTIPLE_CHOICE','Closest to the core of “River Civilizations Synthesis”?','["Rivers + surplus + cities + writing/law + trade.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h0359f89393b03ef7c05f','ppg6ha6fcd1eeaf1eb24e820f',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h9f7149d7b576ae0a4c62','ppg6ha6fcd1eeaf1eb24e820f',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L1. What Makes an Empire? (ppg6hd5e37fc921c9db65d224)
UPDATE "Lesson" SET "content" = '# What Makes an Empire?

*Grade 6 World History · Unit 4 of 9 · Classical Empires and Belief Systems · Lesson 1*

## Objective

**I can** define empire and list challenges of ruling diverse lands.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “What Makes an Empire?”?

## Teach

### Big idea

Empires rule many peoples/lands from a center — military, admin, roads, taxes.

### Example 1 — Example 1

Size + diversity + central power.

### Try this

Apply “What Makes an Empire?” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “What Makes an Empire?”: compare places or times.

### Common mistake (this lesson only)

Treating “What Makes an Empire?” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “What Makes an Empire?”?  
   **Answer:** Define empire and list challenges of ruling diverse lands.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “What Makes an Empire?” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Empires rule many peoples/lands from a center — military, admin, roads, taxes.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “What Makes an Empire?” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “What Makes an Empire?” with one map sketch.
', "objectives" = '• Define empire and list challenges of ruling diverse lands.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Define empire and list challenges of ruling diverse lands.' WHERE "id" = 'ppg6hd5e37fc921c9db65d224' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hc903267366091e8c7ada','ppg6hd5e37fc921c9db65d224',NULL,'MULTIPLE_CHOICE','Closest to the core of “What Makes an Empire?”?','["Empires rule many peoples/lands from a center — military, admin, roads, taxes.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6he4ad89a80a3d3b9eff1d','ppg6hd5e37fc921c9db65d224',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h888d6e2ca9fbbde6f31c','ppg6hd5e37fc921c9db65d224',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L2. Classical Mediterranean Snapshot (ppg6hde2acd4cc65b624f1406)
UPDATE "Lesson" SET "content" = '# Classical Mediterranean Snapshot

*Grade 6 World History · Unit 4 of 9 · Classical Empires and Belief Systems · Lesson 2*

## Objective

**I can** outline key features of classical Mediterranean political life at Grade 6 depth.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Classical Mediterranean Snapshot”?

## Teach

### Big idea

Greece/Rome ideas: citizenship debates, law, engineering — selective snapshot.

### Example 1 — Example 1

Roads and republic/empire transition notes.

### Try this

Apply “Classical Mediterranean Snapshot” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Classical Mediterranean Snapshot”: compare places or times.

### Common mistake (this lesson only)

Treating “Classical Mediterranean Snapshot” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Classical Mediterranean Snapshot”?  
   **Answer:** Outline key features of classical Mediterranean political life at Grade 6 depth.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Classical Mediterranean Snapshot” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Greece/Rome ideas: citizenship debates, law, engineering — selective snapshot.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Classical Mediterranean Snapshot” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Classical Mediterranean Snapshot” with one map sketch.
', "objectives" = '• Outline key features of classical Mediterranean political life at Grade 6 depth.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Outline key features of classical Mediterranean political life at Grade 6 depth.' WHERE "id" = 'ppg6hde2acd4cc65b624f1406' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h802d28d82d4815d0ad9b','ppg6hde2acd4cc65b624f1406',NULL,'MULTIPLE_CHOICE','Closest to the core of “Classical Mediterranean Snapshot”?','["Greece/Rome ideas: citizenship debates, law, engineering — selective snapshot.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hc431f0a2c665725f8eae','ppg6hde2acd4cc65b624f1406',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h312a3d8f272e74129046','ppg6hde2acd4cc65b624f1406',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L3. Classical Asia Snapshot (ppg6h210528acae8155b0e165)
UPDATE "Lesson" SET "content" = '# Classical Asia Snapshot

*Grade 6 World History · Unit 4 of 9 · Classical Empires and Belief Systems · Lesson 3*

## Objective

**I can** outline key features of classical Asian empires students should recognize.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Classical Asia Snapshot”?

## Teach

### Big idea

Classical India/China contributions — governance, belief, tech — snapshot not encyclopedia.

### Example 1 — Example 1

Silk Roads later link.

### Try this

Apply “Classical Asia Snapshot” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Classical Asia Snapshot”: compare places or times.

### Common mistake (this lesson only)

Treating “Classical Asia Snapshot” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Classical Asia Snapshot”?  
   **Answer:** Outline key features of classical Asian empires students should recognize.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Classical Asia Snapshot” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Classical India/China contributions — governance, belief, tech — snapshot not encyclopedia.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Classical Asia Snapshot” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Classical Asia Snapshot” with one map sketch.
', "objectives" = '• Outline key features of classical Asian empires students should recognize.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Outline key features of classical Asian empires students should recognize.' WHERE "id" = 'ppg6h210528acae8155b0e165' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h60a15cbe344d4e6fb27b','ppg6h210528acae8155b0e165',NULL,'MULTIPLE_CHOICE','Closest to the core of “Classical Asia Snapshot”?','["Classical India/China contributions — governance, belief, tech — snapshot not encyclopedia.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h381159df4827fb3546dc','ppg6h210528acae8155b0e165',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb5761a4126763379e888','ppg6h210528acae8155b0e165',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L4. Belief Systems: Judaism (ppg6hf888b8c6762f57cf02b7)
UPDATE "Lesson" SET "content" = '# Belief Systems: Judaism

*Grade 6 World History · Unit 4 of 9 · Classical Empires and Belief Systems · Lesson 4*

## Objective

**I can** summarize core beliefs and historical significance of Judaism respectfully.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Belief Systems: Judaism”?

## Teach

### Big idea

Judaism: monotheism, covenant, Hebrew Scriptures — teach respectfully as history of belief.

### Example 1 — Example 1

Synagogue/Torah as vocabulary.

### Try this

Apply “Belief Systems: Judaism” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Belief Systems: Judaism”: compare places or times.

### Common mistake (this lesson only)

Treating “Belief Systems: Judaism” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Belief Systems: Judaism”?  
   **Answer:** Summarize core beliefs and historical significance of Judaism respectfully.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Belief Systems: Judaism” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Judaism: monotheism, covenant, Hebrew Scriptures — teach respectfully as history of belief.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Belief Systems: Judaism” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Belief Systems: Judaism” with one map sketch.
', "objectives" = '• Summarize core beliefs and historical significance of Judaism respectfully.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Summarize core beliefs and historical significance of Judaism respectfully.' WHERE "id" = 'ppg6hf888b8c6762f57cf02b7' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hcabb138ef0263cc6986a','ppg6hf888b8c6762f57cf02b7',NULL,'MULTIPLE_CHOICE','Closest to the core of “Belief Systems: Judaism”?','["Judaism: monotheism, covenant, Hebrew Scriptures — teach respectfully as history of belief.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb89839675b0289b907ce','ppg6hf888b8c6762f57cf02b7',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h7fc53e319ac0145086a1','ppg6hf888b8c6762f57cf02b7',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L5. Belief Systems: Christianity (ppg6h452379da6e30e9fc2780)
UPDATE "Lesson" SET "content" = '# Belief Systems: Christianity

*Grade 6 World History · Unit 4 of 9 · Classical Empires and Belief Systems · Lesson 5*

## Objective

**I can** summarize origins and spread of Christianity in historical context.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Belief Systems: Christianity”?

## Teach

### Big idea

Christianity emerges from Jewish context; Jesus’s followers spread teachings across empire roads.

### Example 1 — Example 1

Church as community vocabulary.

### Try this

Apply “Belief Systems: Christianity” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Belief Systems: Christianity”: compare places or times.

### Common mistake (this lesson only)

Treating “Belief Systems: Christianity” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Belief Systems: Christianity”?  
   **Answer:** Summarize origins and spread of Christianity in historical context.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Belief Systems: Christianity” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Christianity emerges from Jewish context; Jesus’s followers spread teachings across empire roads.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Belief Systems: Christianity” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Belief Systems: Christianity” with one map sketch.
', "objectives" = '• Summarize origins and spread of Christianity in historical context.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Summarize origins and spread of Christianity in historical context.' WHERE "id" = 'ppg6h452379da6e30e9fc2780' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h57a2ae0795cdc841bc5e','ppg6h452379da6e30e9fc2780',NULL,'MULTIPLE_CHOICE','Closest to the core of “Belief Systems: Christianity”?','["Christianity emerges from Jewish context; Jesus’s followers spread teachings across empire roads.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h1097aa08401167738cf6','ppg6h452379da6e30e9fc2780',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h9b2cb7a3a93e86fd3f4c','ppg6h452379da6e30e9fc2780',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L6. Belief Systems: Islam (ppg6h427fbdec2b155112be46)
UPDATE "Lesson" SET "content" = '# Belief Systems: Islam

*Grade 6 World History · Unit 4 of 9 · Classical Empires and Belief Systems · Lesson 6*

## Objective

**I can** summarize origins and early spread of Islam in historical context.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Belief Systems: Islam”?

## Teach

### Big idea

Islam: monotheism, Quran, Five Pillars intro — respectful academic framing.

### Example 1 — Example 1

Mecca/Medina historical geography.

### Try this

Apply “Belief Systems: Islam” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Belief Systems: Islam”: compare places or times.

### Common mistake (this lesson only)

Treating “Belief Systems: Islam” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Belief Systems: Islam”?  
   **Answer:** Summarize origins and early spread of Islam in historical context.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Belief Systems: Islam” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Islam: monotheism, Quran, Five Pillars intro — respectful academic framing.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Belief Systems: Islam” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Belief Systems: Islam” with one map sketch.
', "objectives" = '• Summarize origins and early spread of Islam in historical context.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Summarize origins and early spread of Islam in historical context.' WHERE "id" = 'ppg6h427fbdec2b155112be46' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h8517548b80d50c5ea1d5','ppg6h427fbdec2b155112be46',NULL,'MULTIPLE_CHOICE','Closest to the core of “Belief Systems: Islam”?','["Islam: monotheism, Quran, Five Pillars intro — respectful academic framing.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h3d88defcdf6b2dcbad52','ppg6h427fbdec2b155112be46',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h36a2bb23b09bf2365529','ppg6h427fbdec2b155112be46',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L7. Belief Systems: Hinduism and Buddhism Intro (ppg6hcd0fe58cef3220745495)
UPDATE "Lesson" SET "content" = '# Belief Systems: Hinduism and Buddhism Intro

*Grade 6 World History · Unit 4 of 9 · Classical Empires and Belief Systems · Lesson 7*

## Objective

**I can** introduce core ideas of Hinduism and Buddhism as historical belief systems.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Belief Systems: Hinduism and Buddhism Intro”?

## Teach

### Big idea

Hinduism’s diverse traditions; Buddhism’s path from Siddhartha’s teachings — intro only.

### Example 1 — Example 1

Dharma/karma vocabulary carefully.

### Try this

Apply “Belief Systems: Hinduism and Buddhism Intro” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Belief Systems: Hinduism and Buddhism Intro”: compare places or times.

### Common mistake (this lesson only)

Treating “Belief Systems: Hinduism and Buddhism Intro” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Belief Systems: Hinduism and Buddhism Intro”?  
   **Answer:** Introduce core ideas of Hinduism and Buddhism as historical belief systems.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Belief Systems: Hinduism and Buddhism Intro” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Hinduism’s diverse traditions; Buddhism’s path from Siddhartha’s teachings — intro only.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Belief Systems: Hinduism and Buddhism Intro” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Belief Systems: Hinduism and Buddhism Intro” with one map sketch.
', "objectives" = '• Introduce core ideas of Hinduism and Buddhism as historical belief systems.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Introduce core ideas of Hinduism and Buddhism as historical belief systems.' WHERE "id" = 'ppg6hcd0fe58cef3220745495' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h942b231a05022504e59b','ppg6hcd0fe58cef3220745495',NULL,'MULTIPLE_CHOICE','Closest to the core of “Belief Systems: Hinduism and Buddhism Intro”?','["Hinduism’s diverse traditions; Buddhism’s path from Siddhartha’s teachings — intro only.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h5a7c604e7e3b294ac484','ppg6hcd0fe58cef3220745495',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h78fdc058563675d90df5','ppg6hcd0fe58cef3220745495',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L8. How Beliefs Travel (ppg6hb655fa478c33f4569854)
UPDATE "Lesson" SET "content" = '# How Beliefs Travel

*Grade 6 World History · Unit 4 of 9 · Classical Empires and Belief Systems · Lesson 8*

## Objective

**I can** explain how trade, conquest, and teaching carried belief systems across regions.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “How Beliefs Travel”?

## Teach

### Big idea

Beliefs travel with traders, migrants, missionaries, and empires — not only armies.

### Example 1 — Example 1

Route + message.

### Try this

Apply “How Beliefs Travel” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “How Beliefs Travel”: compare places or times.

### Common mistake (this lesson only)

Treating “How Beliefs Travel” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “How Beliefs Travel”?  
   **Answer:** Explain how trade, conquest, and teaching carried belief systems across regions.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “How Beliefs Travel” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Beliefs travel with traders, migrants, missionaries, and empires — not only armies.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “How Beliefs Travel” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “How Beliefs Travel” with one map sketch.
', "objectives" = '• Explain how trade, conquest, and teaching carried belief systems across regions.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain how trade, conquest, and teaching carried belief systems across regions.' WHERE "id" = 'ppg6hb655fa478c33f4569854' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h40c1c6342ed72d72448f','ppg6hb655fa478c33f4569854',NULL,'MULTIPLE_CHOICE','Closest to the core of “How Beliefs Travel”?','["Beliefs travel with traders, migrants, missionaries, and empires — not only armies.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h9353e90106dc2f9b3aed','ppg6hb655fa478c33f4569854',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h3b8d1d7ded54a1da6f51','ppg6hb655fa478c33f4569854',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L9. Empires and Beliefs Synthesis (ppg6h23e1ef16be4b9077c89c)
UPDATE "Lesson" SET "content" = '# Empires and Beliefs Synthesis

*Grade 6 World History · Unit 4 of 9 · Classical Empires and Belief Systems · Lesson 9*

## Objective

**I can** connect one empire’s governance to how belief communities lived within it.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Empires and Beliefs Synthesis”?

## Teach

### Big idea

Empires and belief systems shape identity and law; compare respectfully.

### Example 1 — Example 1

One compare chart.

### Try this

Apply “Empires and Beliefs Synthesis” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Empires and Beliefs Synthesis”: compare places or times.

### Common mistake (this lesson only)

Treating “Empires and Beliefs Synthesis” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Empires and Beliefs Synthesis”?  
   **Answer:** Connect one empire’s governance to how belief communities lived within it.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Empires and Beliefs Synthesis” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Empires and belief systems shape identity and law; compare respectfully.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Empires and Beliefs Synthesis” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Empires and Beliefs Synthesis” with one map sketch.
', "objectives" = '• Connect one empire’s governance to how belief communities lived within it.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Connect one empire’s governance to how belief communities lived within it.' WHERE "id" = 'ppg6h23e1ef16be4b9077c89c' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hd60668849d0687402dc8','ppg6h23e1ef16be4b9077c89c',NULL,'MULTIPLE_CHOICE','Closest to the core of “Empires and Beliefs Synthesis”?','["Empires and belief systems shape identity and law; compare respectfully.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h92b4761abcc833fc3c4c','ppg6h23e1ef16be4b9077c89c',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h109bd4d248789f27d6fa','ppg6h23e1ef16be4b9077c89c',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L1. After Classical Empires (ppg6h2cc66d703d6c48d7d22b)
UPDATE "Lesson" SET "content" = '# After Classical Empires

*Grade 6 World History · Unit 5 of 9 · Medieval Networks · Lesson 1*

## Objective

**I can** describe continuity and change after major classical empires restructured.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “After Classical Empires”?

## Teach

### Big idea

Power vacuums, new kingdoms, continuity of cities/faiths after imperial peaks.

### Example 1 — Example 1

Not “Dark Age” stereotype flattening.

### Try this

Apply “After Classical Empires” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “After Classical Empires”: compare places or times.

### Common mistake (this lesson only)

Treating “After Classical Empires” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “After Classical Empires”?  
   **Answer:** Describe continuity and change after major classical empires restructured.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “After Classical Empires” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Power vacuums, new kingdoms, continuity of cities/faiths after imperial peaks.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “After Classical Empires” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “After Classical Empires” with one map sketch.
', "objectives" = '• Describe continuity and change after major classical empires restructured.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Describe continuity and change after major classical empires restructured.' WHERE "id" = 'ppg6h2cc66d703d6c48d7d22b' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hf88d4fe5b238ae8ff78d','ppg6h2cc66d703d6c48d7d22b',NULL,'MULTIPLE_CHOICE','Closest to the core of “After Classical Empires”?','["Power vacuums, new kingdoms, continuity of cities/faiths after imperial peaks.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h19433403258b3534f31e','ppg6h2cc66d703d6c48d7d22b',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hdf357eba834f111c59a9','ppg6h2cc66d703d6c48d7d22b',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L2. Medieval Europe Snapshot (ppg6h8bc8fa635f22af6ed7ae)
UPDATE "Lesson" SET "content" = '# Medieval Europe Snapshot

*Grade 6 World History · Unit 5 of 9 · Medieval Networks · Lesson 2*

## Objective

**I can** outline feudal relationships, manors, and church influence at intro level.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Medieval Europe Snapshot”?

## Teach

### Big idea

Manor/church/kingship patterns — varied by place/time.

### Example 1 — Example 1

Local lords + faith institutions.

### Try this

Apply “Medieval Europe Snapshot” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Medieval Europe Snapshot”: compare places or times.

### Common mistake (this lesson only)

Treating “Medieval Europe Snapshot” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Medieval Europe Snapshot”?  
   **Answer:** Outline feudal relationships, manors, and church influence at intro level.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Medieval Europe Snapshot” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Manor/church/kingship patterns — varied by place/time.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Medieval Europe Snapshot” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Medieval Europe Snapshot” with one map sketch.
', "objectives" = '• Outline feudal relationships, manors, and church influence at intro level.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Outline feudal relationships, manors, and church influence at intro level.' WHERE "id" = 'ppg6h8bc8fa635f22af6ed7ae' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h6f3701b3479113272a7b','ppg6h8bc8fa635f22af6ed7ae',NULL,'MULTIPLE_CHOICE','Closest to the core of “Medieval Europe Snapshot”?','["Manor/church/kingship patterns — varied by place/time.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h76455d7d0134d04adffc','ppg6h8bc8fa635f22af6ed7ae',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha01de2dbadbcf0300ef6','ppg6h8bc8fa635f22af6ed7ae',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L3. Islamic Golden Age Contributions (ppg6h4e01625812711d12f987)
UPDATE "Lesson" SET "content" = '# Islamic Golden Age Contributions

*Grade 6 World History · Unit 5 of 9 · Medieval Networks · Lesson 3*

## Objective

**I can** identify scholarship, trade, and preservation of knowledge in Islamic societies.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Islamic Golden Age Contributions”?

## Teach

### Big idea

Scholarship in math, medicine, preservation/translation — Baghdad and beyond.

### Example 1 — Example 1

House of Wisdom idea.

### Try this

Apply “Islamic Golden Age Contributions” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Islamic Golden Age Contributions”: compare places or times.

### Common mistake (this lesson only)

Treating “Islamic Golden Age Contributions” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Islamic Golden Age Contributions”?  
   **Answer:** Identify scholarship, trade, and preservation of knowledge in Islamic societies.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Islamic Golden Age Contributions” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Scholarship in math, medicine, preservation/translation — Baghdad and beyond.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Islamic Golden Age Contributions” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Islamic Golden Age Contributions” with one map sketch.
', "objectives" = '• Identify scholarship, trade, and preservation of knowledge in Islamic societies.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Identify scholarship, trade, and preservation of knowledge in Islamic societies.' WHERE "id" = 'ppg6h4e01625812711d12f987' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hcfab53be2033319d9d9a','ppg6h4e01625812711d12f987',NULL,'MULTIPLE_CHOICE','Closest to the core of “Islamic Golden Age Contributions”?','["Scholarship in math, medicine, preservation/translation — Baghdad and beyond.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h4c756b7b25aec799be7d','ppg6h4e01625812711d12f987',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hd07c73f183eb6a4bafcf','ppg6h4e01625812711d12f987',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L4. African Kingdoms and Trade (ppg6h801c9312d7439b8522c4)
UPDATE "Lesson" SET "content" = '# African Kingdoms and Trade

*Grade 6 World History · Unit 5 of 9 · Medieval Networks · Lesson 4*

## Objective

**I can** explain how African kingdoms participated in long-distance trade networks.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “African Kingdoms and Trade”?

## Teach

### Big idea

Ghana/Mali/Songhai and others thrived on gold-salt trade networks.

### Example 1 — Example 1

Timbuktu learning fame.

### Try this

Apply “African Kingdoms and Trade” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “African Kingdoms and Trade”: compare places or times.

### Common mistake (this lesson only)

Treating “African Kingdoms and Trade” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “African Kingdoms and Trade”?  
   **Answer:** Explain how African kingdoms participated in long-distance trade networks.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “African Kingdoms and Trade” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Ghana/Mali/Songhai and others thrived on gold-salt trade networks.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “African Kingdoms and Trade” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “African Kingdoms and Trade” with one map sketch.
', "objectives" = '• Explain how African kingdoms participated in long-distance trade networks.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain how African kingdoms participated in long-distance trade networks.' WHERE "id" = 'ppg6h801c9312d7439b8522c4' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h1f0e5de373411b5fa21d','ppg6h801c9312d7439b8522c4',NULL,'MULTIPLE_CHOICE','Closest to the core of “African Kingdoms and Trade”?','["Ghana/Mali/Songhai and others thrived on gold-salt trade networks.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h29226a2c8d8a6c1342b7','ppg6h801c9312d7439b8522c4',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h9d05525d0d221dbddc92','ppg6h801c9312d7439b8522c4',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L5. Asian Networks and Exchange (ppg6hb549e51004b366fbf746)
UPDATE "Lesson" SET "content" = '# Asian Networks and Exchange

*Grade 6 World History · Unit 5 of 9 · Medieval Networks · Lesson 5*

## Objective

**I can** trace goods and ideas along Asian trade routes in the medieval era.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Asian Networks and Exchange”?

## Teach

### Big idea

East/South/Southeast Asia networks exchanged goods and ideas.

### Example 1 — Example 1

Monsoon trade.

### Try this

Apply “Asian Networks and Exchange” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Asian Networks and Exchange”: compare places or times.

### Common mistake (this lesson only)

Treating “Asian Networks and Exchange” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Asian Networks and Exchange”?  
   **Answer:** Trace goods and ideas along Asian trade routes in the medieval era.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Asian Networks and Exchange” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. East/South/Southeast Asia networks exchanged goods and ideas.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Asian Networks and Exchange” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Asian Networks and Exchange” with one map sketch.
', "objectives" = '• Trace goods and ideas along Asian trade routes in the medieval era.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Trace goods and ideas along Asian trade routes in the medieval era.' WHERE "id" = 'ppg6hb549e51004b366fbf746' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h9f2b7ae48f05fa253e94','ppg6hb549e51004b366fbf746',NULL,'MULTIPLE_CHOICE','Closest to the core of “Asian Networks and Exchange”?','["East/South/Southeast Asia networks exchanged goods and ideas.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h4b08e7de3c67272acd78','ppg6hb549e51004b366fbf746',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h9fb7b5274b9343d39aa6','ppg6hb549e51004b366fbf746',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L6. The Silk Roads Idea (ppg6ha29d2eeb8559424ebcda)
UPDATE "Lesson" SET "content" = '# The Silk Roads Idea

*Grade 6 World History · Unit 5 of 9 · Medieval Networks · Lesson 6*

## Objective

**I can** explain the Silk Roads as a web of routes, not a single highway.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “The Silk Roads Idea”?

## Teach

### Big idea

Linked routes across Eurasia — goods, technologies, beliefs.

### Example 1 — Example 1

Not a single road.

### Try this

Apply “The Silk Roads Idea” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “The Silk Roads Idea”: compare places or times.

### Common mistake (this lesson only)

Treating “The Silk Roads Idea” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “The Silk Roads Idea”?  
   **Answer:** Explain the Silk Roads as a web of routes, not a single highway.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “The Silk Roads Idea” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Linked routes across Eurasia — goods, technologies, beliefs.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “The Silk Roads Idea” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “The Silk Roads Idea” with one map sketch.
', "objectives" = '• Explain the Silk Roads as a web of routes, not a single highway.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain the Silk Roads as a web of routes, not a single highway.' WHERE "id" = 'ppg6ha29d2eeb8559424ebcda' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h2d46cb0cfb822b1c2300','ppg6ha29d2eeb8559424ebcda',NULL,'MULTIPLE_CHOICE','Closest to the core of “The Silk Roads Idea”?','["Linked routes across Eurasia — goods, technologies, beliefs.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h466cb8acf2c694f87086','ppg6ha29d2eeb8559424ebcda',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hd6352389d9b686736f5b','ppg6ha29d2eeb8559424ebcda',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L7. Cities as Crossroads (ppg6hcb832b916a8d1d7315b6)
UPDATE "Lesson" SET "content" = '# Cities as Crossroads

*Grade 6 World History · Unit 5 of 9 · Medieval Networks · Lesson 7*

## Objective

**I can** show how medieval cities concentrated trade, crafts, and learning.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Cities as Crossroads”?

## Teach

### Big idea

Crossroad cities mix languages, faiths, and markets.

### Example 1 — Example 1

Diversity with conflict and cooperation.

### Try this

Apply “Cities as Crossroads” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Cities as Crossroads”: compare places or times.

### Common mistake (this lesson only)

Treating “Cities as Crossroads” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Cities as Crossroads”?  
   **Answer:** Show how medieval cities concentrated trade, crafts, and learning.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Cities as Crossroads” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Crossroad cities mix languages, faiths, and markets.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Cities as Crossroads” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Cities as Crossroads” with one map sketch.
', "objectives" = '• Show how medieval cities concentrated trade, crafts, and learning.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Show how medieval cities concentrated trade, crafts, and learning.' WHERE "id" = 'ppg6hcb832b916a8d1d7315b6' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h044995b2f650c1ae970b','ppg6hcb832b916a8d1d7315b6',NULL,'MULTIPLE_CHOICE','Closest to the core of “Cities as Crossroads”?','["Crossroad cities mix languages, faiths, and markets.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hac59a9c9dbcf66abdaf2','ppg6hcb832b916a8d1d7315b6',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h620341ee831dec27e5ee','ppg6hcb832b916a8d1d7315b6',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L8. Medieval Networks Unit Review (ppg6h33a622b104056fecb952)
UPDATE "Lesson" SET "content" = '# Medieval Networks Unit Review

*Grade 6 World History · Unit 5 of 9 · Medieval Networks · Lesson 8*

## Objective

**I can** argue how networks (trade + belief + cities) reshaped regions.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Medieval Networks Unit Review”?

## Teach

### Big idea

Trade + cities + scholarship + kingdoms connected Afro-Eurasia.

### Example 1 — Example 1

One network map in words.

### Try this

Apply “Medieval Networks Unit Review” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Medieval Networks Unit Review”: compare places or times.

### Common mistake (this lesson only)

Treating “Medieval Networks Unit Review” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Medieval Networks Unit Review”?  
   **Answer:** Argue how networks (trade + belief + cities) reshaped regions.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Medieval Networks Unit Review” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Trade + cities + scholarship + kingdoms connected Afro-Eurasia.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Medieval Networks Unit Review” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Medieval Networks Unit Review” with one map sketch.
', "objectives" = '• Argue how networks (trade + belief + cities) reshaped regions.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Argue how networks (trade + belief + cities) reshaped regions.' WHERE "id" = 'ppg6h33a622b104056fecb952' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h786519a4242b1e35b843','ppg6h33a622b104056fecb952',NULL,'MULTIPLE_CHOICE','Closest to the core of “Medieval Networks Unit Review”?','["Trade + cities + scholarship + kingdoms connected Afro-Eurasia.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h2951ae5d01cbe2e91cfd','ppg6h33a622b104056fecb952',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hc2cf6b6a8b8a84fe1b0a','ppg6h33a622b104056fecb952',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L1. Motivations to Explore (ppg6h9611df14058c43d3079e)
UPDATE "Lesson" SET "content" = '# Motivations to Explore

*Grade 6 World History · Unit 6 of 9 · Exploration and the First Global Age · Lesson 1*

## Objective

**I can** explain God, gold, and glory-style motives without reducing history to slogans.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Motivations to Explore”?

## Teach

### Big idea

God, gold, glory framing — also technology and competition among states.

### Example 1 — Example 1

Multiple motives.

### Try this

Apply “Motivations to Explore” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Motivations to Explore”: compare places or times.

### Common mistake (this lesson only)

Treating “Motivations to Explore” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Motivations to Explore”?  
   **Answer:** Explain God, gold, and glory-style motives without reducing history to slogans.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Motivations to Explore” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. God, gold, glory framing — also technology and competition among states.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Motivations to Explore” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Motivations to Explore” with one map sketch.
', "objectives" = '• Explain God, gold, and glory-style motives without reducing history to slogans.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain God, gold, and glory-style motives without reducing history to slogans.' WHERE "id" = 'ppg6h9611df14058c43d3079e' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h3a506acbff7bb2cd2145','ppg6h9611df14058c43d3079e',NULL,'MULTIPLE_CHOICE','Closest to the core of “Motivations to Explore”?','["God, gold, glory framing — also technology and competition among states.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6haeba02bb08a4aac705b1','ppg6h9611df14058c43d3079e',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h5aa3eb33083438dcbf37','ppg6h9611df14058c43d3079e',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L2. Navigation Tools and Knowledge (ppg6hd4107051193b11279918)
UPDATE "Lesson" SET "content" = '# Navigation Tools and Knowledge

*Grade 6 World History · Unit 6 of 9 · Exploration and the First Global Age · Lesson 2*

## Objective

**I can** connect maps, ships, and navigational knowledge to longer voyages.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Navigation Tools and Knowledge”?

## Teach

### Big idea

Compass, improved ships, maps, shared know-how — exploration needed tools.

### Example 1 — Example 1

Portolan charts idea.

### Try this

Apply “Navigation Tools and Knowledge” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Navigation Tools and Knowledge”: compare places or times.

### Common mistake (this lesson only)

Treating “Navigation Tools and Knowledge” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Navigation Tools and Knowledge”?  
   **Answer:** Connect maps, ships, and navigational knowledge to longer voyages.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Navigation Tools and Knowledge” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Compass, improved ships, maps, shared know-how — exploration needed tools.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Navigation Tools and Knowledge” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Navigation Tools and Knowledge” with one map sketch.
', "objectives" = '• Connect maps, ships, and navigational knowledge to longer voyages.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Connect maps, ships, and navigational knowledge to longer voyages.' WHERE "id" = 'ppg6hd4107051193b11279918' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h7dc94f23dcd349959e6b','ppg6hd4107051193b11279918',NULL,'MULTIPLE_CHOICE','Closest to the core of “Navigation Tools and Knowledge”?','["Compass, improved ships, maps, shared know-how — exploration needed tools.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h345c27a91277e1ff5e9e','ppg6hd4107051193b11279918',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h3ba609a52227bde942c9','ppg6hd4107051193b11279918',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L3. Contact in the Americas (ppg6hdeca1cb56d243d6290a7)
UPDATE "Lesson" SET "content" = '# Contact in the Americas

*Grade 6 World History · Unit 6 of 9 · Exploration and the First Global Age · Lesson 3*

## Objective

**I can** describe early contact between Europeans and Indigenous peoples with care and evidence.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Contact in the Americas”?

## Teach

### Big idea

Contact reshaped hemispheres — Indigenous nations already complex; outcomes uneven and often tragic.

### Example 1 — Example 1

Avoid discovery myths that erase people.

### Try this

Apply “Contact in the Americas” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Contact in the Americas”: compare places or times.

### Common mistake (this lesson only)

Treating “Contact in the Americas” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Contact in the Americas”?  
   **Answer:** Describe early contact between Europeans and Indigenous peoples with care and evidence.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Contact in the Americas” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Contact reshaped hemispheres — Indigenous nations already complex; outcomes uneven and often tragic.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Contact in the Americas” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Contact in the Americas” with one map sketch.
', "objectives" = '• Describe early contact between Europeans and Indigenous peoples with care and evidence.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Describe early contact between Europeans and Indigenous peoples with care and evidence.' WHERE "id" = 'ppg6hdeca1cb56d243d6290a7' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hd3053fc66c3d355c744d','ppg6hdeca1cb56d243d6290a7',NULL,'MULTIPLE_CHOICE','Closest to the core of “Contact in the Americas”?','["Contact reshaped hemispheres — Indigenous nations already complex; outcomes uneven and often tragic.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h73a58c15e46e3803dfb6','ppg6hdeca1cb56d243d6290a7',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h7384ff30e8db88b66a94','ppg6hdeca1cb56d243d6290a7',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L4. The Columbian Exchange (ppg6hc67cccdc94e075d5fbd8)
UPDATE "Lesson" SET "content" = '# The Columbian Exchange

*Grade 6 World History · Unit 6 of 9 · Exploration and the First Global Age · Lesson 4*

## Objective

**I can** trace plants, animals, and diseases moving between hemispheres and their effects.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “The Columbian Exchange”?

## Teach

### Big idea

Transfer of plants, animals, people, diseases between hemispheres.

### Example 1 — Example 1

Potato to Europe; horses to Americas — mixed effects.

### Try this

Apply “The Columbian Exchange” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “The Columbian Exchange”: compare places or times.

### Common mistake (this lesson only)

Treating “The Columbian Exchange” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “The Columbian Exchange”?  
   **Answer:** Trace plants, animals, and diseases moving between hemispheres and their effects.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “The Columbian Exchange” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Transfer of plants, animals, people, diseases between hemispheres.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “The Columbian Exchange” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “The Columbian Exchange” with one map sketch.
', "objectives" = '• Trace plants, animals, and diseases moving between hemispheres and their effects.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Trace plants, animals, and diseases moving between hemispheres and their effects.' WHERE "id" = 'ppg6hc67cccdc94e075d5fbd8' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h3f6c30405f26be8a88c7','ppg6hc67cccdc94e075d5fbd8',NULL,'MULTIPLE_CHOICE','Closest to the core of “The Columbian Exchange”?','["Transfer of plants, animals, people, diseases between hemispheres.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h38ac3cf2d499808eddaf','ppg6hc67cccdc94e075d5fbd8',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h023e7c28a4bdbd474e32','ppg6hc67cccdc94e075d5fbd8',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L5. Empires Expand (ppg6h54ffe3b4afed0f1c86b9)
UPDATE "Lesson" SET "content" = '# Empires Expand

*Grade 6 World History · Unit 6 of 9 · Exploration and the First Global Age · Lesson 5*

## Objective

**I can** explain how maritime empires projected power across oceans.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Empires Expand”?

## Teach

### Big idea

European empires expand with colonies; other empires also active worldwide.

### Example 1 — Example 1

Power and resistance.

### Try this

Apply “Empires Expand” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Empires Expand”: compare places or times.

### Common mistake (this lesson only)

Treating “Empires Expand” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Empires Expand”?  
   **Answer:** Explain how maritime empires projected power across oceans.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Empires Expand” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. European empires expand with colonies; other empires also active worldwide.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Empires Expand” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Empires Expand” with one map sketch.
', "objectives" = '• Explain how maritime empires projected power across oceans.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain how maritime empires projected power across oceans.' WHERE "id" = 'ppg6h54ffe3b4afed0f1c86b9' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6he362b35f6dc63a1ff846','ppg6h54ffe3b4afed0f1c86b9',NULL,'MULTIPLE_CHOICE','Closest to the core of “Empires Expand”?','["European empires expand with colonies; other empires also active worldwide.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h256461bd9b7fb8c9e088','ppg6h54ffe3b4afed0f1c86b9',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hc122d816ae3a15a09176','ppg6h54ffe3b4afed0f1c86b9',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L6. Labor Systems and Human Cost (ppg6h98dbd411f9d0e0ad15eb)
UPDATE "Lesson" SET "content" = '# Labor Systems and Human Cost

*Grade 6 World History · Unit 6 of 9 · Exploration and the First Global Age · Lesson 6*

## Objective

**I can** describe forced labor and enslavement as historical realities with seriousness.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Labor Systems and Human Cost”?

## Teach

### Big idea

Forced labor and enslavement caused immense human suffering — teach with gravity.

### Example 1 — Example 1

Economic systems had moral costs.

### Try this

Apply “Labor Systems and Human Cost” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Labor Systems and Human Cost”: compare places or times.

### Common mistake (this lesson only)

Treating “Labor Systems and Human Cost” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Labor Systems and Human Cost”?  
   **Answer:** Describe forced labor and enslavement as historical realities with seriousness.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Labor Systems and Human Cost” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Forced labor and enslavement caused immense human suffering — teach with gravity.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Labor Systems and Human Cost” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Labor Systems and Human Cost” with one map sketch.
', "objectives" = '• Describe forced labor and enslavement as historical realities with seriousness.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Describe forced labor and enslavement as historical realities with seriousness.' WHERE "id" = 'ppg6h98dbd411f9d0e0ad15eb' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h01b496abeadf823f06ad','ppg6h98dbd411f9d0e0ad15eb',NULL,'MULTIPLE_CHOICE','Closest to the core of “Labor Systems and Human Cost”?','["Forced labor and enslavement caused immense human suffering — teach with gravity.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h6fdb09a1b0826edc2da2','ppg6h98dbd411f9d0e0ad15eb',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hd5ee654ec5f9bef3881a','ppg6h98dbd411f9d0e0ad15eb',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L7. Global Trade Goods (ppg6h153e225664d8a4f4ae51)
UPDATE "Lesson" SET "content" = '# Global Trade Goods

*Grade 6 World History · Unit 6 of 9 · Exploration and the First Global Age · Lesson 7*

## Objective

**I can** follow one commodity (sugar, silver, or spices) through a global network.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Global Trade Goods”?

## Teach

### Big idea

Sugar, silver, spices, textiles — commodities reshaped economies.

### Example 1 — Example 1

Follow one good’s path.

### Try this

Apply “Global Trade Goods” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Global Trade Goods”: compare places or times.

### Common mistake (this lesson only)

Treating “Global Trade Goods” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Global Trade Goods”?  
   **Answer:** Follow one commodity (sugar, silver, or spices) through a global network.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Global Trade Goods” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Sugar, silver, spices, textiles — commodities reshaped economies.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Global Trade Goods” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Global Trade Goods” with one map sketch.
', "objectives" = '• Follow one commodity (sugar, silver, or spices) through a global network.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Follow one commodity (sugar, silver, or spices) through a global network.' WHERE "id" = 'ppg6h153e225664d8a4f4ae51' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h0ac222908a6c792aa596','ppg6h153e225664d8a4f4ae51',NULL,'MULTIPLE_CHOICE','Closest to the core of “Global Trade Goods”?','["Sugar, silver, spices, textiles — commodities reshaped economies.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h223fe970d70412c9da7a','ppg6h153e225664d8a4f4ae51',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hbecdb59ee4fe37b3d971','ppg6h153e225664d8a4f4ae51',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L8. First Global Age Synthesis (ppg6hfcfc8dda4a7f9f67c224)
UPDATE "Lesson" SET "content" = '# First Global Age Synthesis

*Grade 6 World History · Unit 6 of 9 · Exploration and the First Global Age · Lesson 8*

## Objective

**I can** weigh benefits and harms of early global exchange using evidence.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “First Global Age Synthesis”?

## Teach

### Big idea

Motives + tools + contact + exchange + empire + human cost.

### Example 1 — Example 1

Balanced paragraph.

### Try this

Apply “First Global Age Synthesis” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “First Global Age Synthesis”: compare places or times.

### Common mistake (this lesson only)

Treating “First Global Age Synthesis” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “First Global Age Synthesis”?  
   **Answer:** Weigh benefits and harms of early global exchange using evidence.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “First Global Age Synthesis” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Motives + tools + contact + exchange + empire + human cost.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “First Global Age Synthesis” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “First Global Age Synthesis” with one map sketch.
', "objectives" = '• Weigh benefits and harms of early global exchange using evidence.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Weigh benefits and harms of early global exchange using evidence.' WHERE "id" = 'ppg6hfcfc8dda4a7f9f67c224' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h0c868de444d653bbd1b0','ppg6hfcfc8dda4a7f9f67c224',NULL,'MULTIPLE_CHOICE','Closest to the core of “First Global Age Synthesis”?','["Motives + tools + contact + exchange + empire + human cost.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h22806e53aff7584010d7','ppg6hfcfc8dda4a7f9f67c224',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha16c91e0da31879178ea','ppg6hfcfc8dda4a7f9f67c224',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L1. Ideas That Challenged Kings (ppg6h21c28ce728941143c003)
UPDATE "Lesson" SET "content" = '# Ideas That Challenged Kings

*Grade 6 World History · Unit 7 of 9 · Revolutions and Industry · Lesson 1*

## Objective

**I can** identify Enlightenment-era ideas about rights and government at intro level.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Ideas That Challenged Kings”?

## Teach

### Big idea

Enlightenment/rights language challenged absolute rule — ideas travel in print.

### Example 1 — Example 1

Consent / rights vocabulary.

### Try this

Apply “Ideas That Challenged Kings” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Ideas That Challenged Kings”: compare places or times.

### Common mistake (this lesson only)

Treating “Ideas That Challenged Kings” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Ideas That Challenged Kings”?  
   **Answer:** Identify Enlightenment-era ideas about rights and government at intro level.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Ideas That Challenged Kings” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Enlightenment/rights language challenged absolute rule — ideas travel in print.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Ideas That Challenged Kings” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Ideas That Challenged Kings” with one map sketch.
', "objectives" = '• Identify Enlightenment-era ideas about rights and government at intro level.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Identify Enlightenment-era ideas about rights and government at intro level.' WHERE "id" = 'ppg6h21c28ce728941143c003' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h265bb382213ae4aff310','ppg6h21c28ce728941143c003',NULL,'MULTIPLE_CHOICE','Closest to the core of “Ideas That Challenged Kings”?','["Enlightenment/rights language challenged absolute rule — ideas travel in print.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h7c01379e4119e290e923','ppg6h21c28ce728941143c003',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb9390184f01020801681','ppg6h21c28ce728941143c003',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L2. Atlantic Revolutions Snapshot (ppg6h5cd015956ab77a21efc7)
UPDATE "Lesson" SET "content" = '# Atlantic Revolutions Snapshot

*Grade 6 World History · Unit 7 of 9 · Revolutions and Industry · Lesson 2*

## Objective

**I can** compare causes of major Atlantic-world revolutions in broad strokes.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Atlantic Revolutions Snapshot”?

## Teach

### Big idea

American, French, Haitian, Latin American revolutions — different goals/results.

### Example 1 — Example 1

Compare two.

### Try this

Apply “Atlantic Revolutions Snapshot” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Atlantic Revolutions Snapshot”: compare places or times.

### Common mistake (this lesson only)

Treating “Atlantic Revolutions Snapshot” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Atlantic Revolutions Snapshot”?  
   **Answer:** Compare causes of major Atlantic-world revolutions in broad strokes.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Atlantic Revolutions Snapshot” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. American, French, Haitian, Latin American revolutions — different goals/results.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Atlantic Revolutions Snapshot” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Atlantic Revolutions Snapshot” with one map sketch.
', "objectives" = '• Compare causes of major Atlantic-world revolutions in broad strokes.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Compare causes of major Atlantic-world revolutions in broad strokes.' WHERE "id" = 'ppg6h5cd015956ab77a21efc7' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h201352a91d19304dc4e2','ppg6h5cd015956ab77a21efc7',NULL,'MULTIPLE_CHOICE','Closest to the core of “Atlantic Revolutions Snapshot”?','["American, French, Haitian, Latin American revolutions — different goals/results.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h629f25b17afe3efb1725','ppg6h5cd015956ab77a21efc7',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hd316154193b63a445b6c','ppg6h5cd015956ab77a21efc7',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L3. New Governments, New Questions (ppg6hbcbd8e1c6740edccf977)
UPDATE "Lesson" SET "content" = '# New Governments, New Questions

*Grade 6 World History · Unit 7 of 9 · Revolutions and Industry · Lesson 3*

## Objective

**I can** explain that writing a constitution does not automatically create a just society.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “New Governments, New Questions”?

## Teach

### Big idea

Constitutions raise who counts as a citizen and who is left out.

### Example 1 — Example 1

Promises vs practice.

### Try this

Apply “New Governments, New Questions” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “New Governments, New Questions”: compare places or times.

### Common mistake (this lesson only)

Treating “New Governments, New Questions” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “New Governments, New Questions”?  
   **Answer:** Explain that writing a constitution does not automatically create a just society.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “New Governments, New Questions” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Constitutions raise who counts as a citizen and who is left out.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “New Governments, New Questions” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “New Governments, New Questions” with one map sketch.
', "objectives" = '• Explain that writing a constitution does not automatically create a just society.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain that writing a constitution does not automatically create a just society.' WHERE "id" = 'ppg6hbcbd8e1c6740edccf977' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h922706251ab858fbabee','ppg6hbcbd8e1c6740edccf977',NULL,'MULTIPLE_CHOICE','Closest to the core of “New Governments, New Questions”?','["Constitutions raise who counts as a citizen and who is left out.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h0f4200f8df914bf3e01b','ppg6hbcbd8e1c6740edccf977',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h7e6bd269d4bd9f553f33','ppg6hbcbd8e1c6740edccf977',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L4. Industrial Revolution Begins (ppg6h456f858d90cf0eee4f0c)
UPDATE "Lesson" SET "content" = '# Industrial Revolution Begins

*Grade 6 World History · Unit 7 of 9 · Revolutions and Industry · Lesson 4*

## Objective

**I can** describe how new machines and energy sources changed work and cities.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Industrial Revolution Begins”?

## Teach

### Big idea

Machines, factories, fossil energy — production scales up first in Britain then beyond.

### Example 1 — Example 1

Steam + textile story.

### Try this

Apply “Industrial Revolution Begins” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Industrial Revolution Begins”: compare places or times.

### Common mistake (this lesson only)

Treating “Industrial Revolution Begins” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Industrial Revolution Begins”?  
   **Answer:** Describe how new machines and energy sources changed work and cities.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Industrial Revolution Begins” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Machines, factories, fossil energy — production scales up first in Britain then beyond.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Industrial Revolution Begins” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Industrial Revolution Begins” with one map sketch.
', "objectives" = '• Describe how new machines and energy sources changed work and cities.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Describe how new machines and energy sources changed work and cities.' WHERE "id" = 'ppg6h456f858d90cf0eee4f0c' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h62dedb334af181d3fd1f','ppg6h456f858d90cf0eee4f0c',NULL,'MULTIPLE_CHOICE','Closest to the core of “Industrial Revolution Begins”?','["Machines, factories, fossil energy — production scales up first in Britain then beyond.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb6ada443ca85bd1b4df9','ppg6h456f858d90cf0eee4f0c',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h7fea1417efcbed993ab0','ppg6h456f858d90cf0eee4f0c',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L5. Factory Life and Families (ppg6h50b52a37161c3a85e703)
UPDATE "Lesson" SET "content" = '# Factory Life and Families

*Grade 6 World History · Unit 7 of 9 · Revolutions and Industry · Lesson 5*

## Objective

**I can** examine how industrial work changed family schedules and child labor debates.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Factory Life and Families”?

## Teach

### Big idea

Urban work changed family time, child labor debates, new class experiences.

### Example 1 — Example 1

Primary source work hours.

### Try this

Apply “Factory Life and Families” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Factory Life and Families”: compare places or times.

### Common mistake (this lesson only)

Treating “Factory Life and Families” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Factory Life and Families”?  
   **Answer:** Examine how industrial work changed family schedules and child labor debates.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Factory Life and Families” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Urban work changed family time, child labor debates, new class experiences.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Factory Life and Families” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Factory Life and Families” with one map sketch.
', "objectives" = '• Examine how industrial work changed family schedules and child labor debates.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Examine how industrial work changed family schedules and child labor debates.' WHERE "id" = 'ppg6h50b52a37161c3a85e703' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h2c8b3b17728d63313a44','ppg6h50b52a37161c3a85e703',NULL,'MULTIPLE_CHOICE','Closest to the core of “Factory Life and Families”?','["Urban work changed family time, child labor debates, new class experiences.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h1ef0b490603b336d94ef','ppg6h50b52a37161c3a85e703',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h0d3b980b6b33d515a283','ppg6h50b52a37161c3a85e703',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L6. Reform and Response (ppg6h497fd238da6706539e2b)
UPDATE "Lesson" SET "content" = '# Reform and Response

*Grade 6 World History · Unit 7 of 9 · Revolutions and Industry · Lesson 6*

## Objective

**I can** identify reform movements that responded to industrial problems.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Reform and Response”?

## Teach

### Big idea

Workers, faith communities, and politicians pushed reforms — uneven wins.

### Example 1 — Example 1

Safety laws.

### Try this

Apply “Reform and Response” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Reform and Response”: compare places or times.

### Common mistake (this lesson only)

Treating “Reform and Response” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Reform and Response”?  
   **Answer:** Identify reform movements that responded to industrial problems.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Reform and Response” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Workers, faith communities, and politicians pushed reforms — uneven wins.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Reform and Response” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Reform and Response” with one map sketch.
', "objectives" = '• Identify reform movements that responded to industrial problems.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Identify reform movements that responded to industrial problems.' WHERE "id" = 'ppg6h497fd238da6706539e2b' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hfa79625978c2e5c780fd','ppg6h497fd238da6706539e2b',NULL,'MULTIPLE_CHOICE','Closest to the core of “Reform and Response”?','["Workers, faith communities, and politicians pushed reforms — uneven wins.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6haf9bf7ab02c4af4a16cf','ppg6h497fd238da6706539e2b',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h060b7004608697a59dac','ppg6h497fd238da6706539e2b',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L7. Nation, Empire, and Power (ppg6h2c58792472572a73c522)
UPDATE "Lesson" SET "content" = '# Nation, Empire, and Power

*Grade 6 World History · Unit 7 of 9 · Revolutions and Industry · Lesson 7*

## Objective

**I can** connect industrial power to imperialism in a Grade 6-appropriate survey.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Nation, Empire, and Power”?

## Teach

### Big idea

Nation-states and empires competed — nationalism as double-edged.

### Example 1 — Example 1

Map changes.

### Try this

Apply “Nation, Empire, and Power” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Nation, Empire, and Power”: compare places or times.

### Common mistake (this lesson only)

Treating “Nation, Empire, and Power” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Nation, Empire, and Power”?  
   **Answer:** Connect industrial power to imperialism in a Grade 6-appropriate survey.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Nation, Empire, and Power” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Nation-states and empires competed — nationalism as double-edged.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Nation, Empire, and Power” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Nation, Empire, and Power” with one map sketch.
', "objectives" = '• Connect industrial power to imperialism in a Grade 6-appropriate survey.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Connect industrial power to imperialism in a Grade 6-appropriate survey.' WHERE "id" = 'ppg6h2c58792472572a73c522' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h7d481641fd893cb64e1e','ppg6h2c58792472572a73c522',NULL,'MULTIPLE_CHOICE','Closest to the core of “Nation, Empire, and Power”?','["Nation-states and empires competed — nationalism as double-edged.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hdf48eb587dbda7a265b5','ppg6h2c58792472572a73c522',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h4a569525a3ec0963fe2f','ppg6h2c58792472572a73c522',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L8. Revolutions & Industry Review (ppg6h87afa1544222cd59159b)
UPDATE "Lesson" SET "content" = '# Revolutions & Industry Review

*Grade 6 World History · Unit 7 of 9 · Revolutions and Industry · Lesson 8*

## Objective

**I can** link political revolutions and industrial change in one evidence paragraph.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Revolutions & Industry Review”?

## Teach

### Big idea

Ideas → revolutions → industry → reform chain.

### Example 1 — Example 1

Cause/effect.

### Try this

Apply “Revolutions & Industry Review” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Revolutions & Industry Review”: compare places or times.

### Common mistake (this lesson only)

Treating “Revolutions & Industry Review” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Revolutions & Industry Review”?  
   **Answer:** Link political revolutions and industrial change in one evidence paragraph.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Revolutions & Industry Review” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Ideas → revolutions → industry → reform chain.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Revolutions & Industry Review” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Revolutions & Industry Review” with one map sketch.
', "objectives" = '• Link political revolutions and industrial change in one evidence paragraph.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Link political revolutions and industrial change in one evidence paragraph.' WHERE "id" = 'ppg6h87afa1544222cd59159b' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hfb9431fad86b2eea5346','ppg6h87afa1544222cd59159b',NULL,'MULTIPLE_CHOICE','Closest to the core of “Revolutions & Industry Review”?','["Ideas → revolutions → industry → reform chain.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hf19ce0d1d617f3b29086','ppg6h87afa1544222cd59159b',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h3919aa75b68a515624a5','ppg6h87afa1544222cd59159b',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L1. Texas Before Statehood (ppg6hc11e5c9e21c3726aa4d5)
UPDATE "Lesson" SET "content" = '# Texas Before Statehood

*Grade 6 World History · Unit 8 of 9 · Texas and American Turning Points · Lesson 1*

## Objective

**I can** outline major peoples and powers in Texas before U.S. statehood.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Texas Before Statehood”?

## Teach

### Big idea

Indigenous nations; Spanish/Mexican rule layers before US statehood.

### Example 1 — Example 1

Multiple sovereignties.

### Try this

Apply “Texas Before Statehood” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Texas Before Statehood”: compare places or times.

### Common mistake (this lesson only)

Treating “Texas Before Statehood” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Texas Before Statehood”?  
   **Answer:** Outline major peoples and powers in Texas before U.S. statehood.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Texas Before Statehood” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Indigenous nations; Spanish/Mexican rule layers before US statehood.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Texas Before Statehood” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Texas Before Statehood” with one map sketch.
', "objectives" = '• Outline major peoples and powers in Texas before U.S. statehood.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Outline major peoples and powers in Texas before U.S. statehood.' WHERE "id" = 'ppg6hc11e5c9e21c3726aa4d5' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb1c1741b99636463554a','ppg6hc11e5c9e21c3726aa4d5',NULL,'MULTIPLE_CHOICE','Closest to the core of “Texas Before Statehood”?','["Indigenous nations; Spanish/Mexican rule layers before US statehood.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h5513d1f94f2a47ddb1df','ppg6hc11e5c9e21c3726aa4d5',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h10a279ae5e5e7cb623ba','ppg6hc11e5c9e21c3726aa4d5',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L2. Revolution and Republic in Texas (ppg6h3a187f5c0b6d9e6039f0)
UPDATE "Lesson" SET "content" = '# Revolution and Republic in Texas

*Grade 6 World History · Unit 8 of 9 · Texas and American Turning Points · Lesson 2*

## Objective

**I can** explain key events leading to the Texas Republic with a timeline habit.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Revolution and Republic in Texas”?

## Teach

### Big idea

1836 revolution → Republic of Texas — motives mixed (rights, land, slavery politics).

### Example 1 — Example 1

Primary source caution.

### Try this

Apply “Revolution and Republic in Texas” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Revolution and Republic in Texas”: compare places or times.

### Common mistake (this lesson only)

Treating “Revolution and Republic in Texas” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Revolution and Republic in Texas”?  
   **Answer:** Explain key events leading to the Texas Republic with a timeline habit.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Revolution and Republic in Texas” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. 1836 revolution → Republic of Texas — motives mixed (rights, land, slavery politics).
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Revolution and Republic in Texas” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Revolution and Republic in Texas” with one map sketch.
', "objectives" = '• Explain key events leading to the Texas Republic with a timeline habit.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain key events leading to the Texas Republic with a timeline habit.' WHERE "id" = 'ppg6h3a187f5c0b6d9e6039f0' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h8ecf54ae8f689e1bd06d','ppg6h3a187f5c0b6d9e6039f0',NULL,'MULTIPLE_CHOICE','Closest to the core of “Revolution and Republic in Texas”?','["1836 revolution → Republic of Texas — motives mixed (rights, land, slavery politics).","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hd9f8159ebdc59e59e5b6','ppg6h3a187f5c0b6d9e6039f0',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h5c5c450206b6392307e2','ppg6h3a187f5c0b6d9e6039f0',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L3. Statehood and the Civil War Era (ppg6h7beb84944dbb92f4283e)
UPDATE "Lesson" SET "content" = '# Statehood and the Civil War Era

*Grade 6 World History · Unit 8 of 9 · Texas and American Turning Points · Lesson 3*

## Objective

**I can** place Texas within U.S. Civil War and Reconstruction themes carefully.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Statehood and the Civil War Era”?

## Teach

### Big idea

1845 statehood; Civil War and Reconstruction reshape Texas.

### Example 1 — Example 1

Loyalty conflicts.

### Try this

Apply “Statehood and the Civil War Era” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Statehood and the Civil War Era”: compare places or times.

### Common mistake (this lesson only)

Treating “Statehood and the Civil War Era” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Statehood and the Civil War Era”?  
   **Answer:** Place Texas within U.S. Civil War and Reconstruction themes carefully.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Statehood and the Civil War Era” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. 1845 statehood; Civil War and Reconstruction reshape Texas.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Statehood and the Civil War Era” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Statehood and the Civil War Era” with one map sketch.
', "objectives" = '• Place Texas within U.S. Civil War and Reconstruction themes carefully.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Place Texas within U.S. Civil War and Reconstruction themes carefully.' WHERE "id" = 'ppg6h7beb84944dbb92f4283e' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6he5acc294449a8e60702d','ppg6h7beb84944dbb92f4283e',NULL,'MULTIPLE_CHOICE','Closest to the core of “Statehood and the Civil War Era”?','["1845 statehood; Civil War and Reconstruction reshape Texas.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hbe931202757a35ede3b8','ppg6h7beb84944dbb92f4283e',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h092ca459164a6d489e91','ppg6h7beb84944dbb92f4283e',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L4. Cattle, Cotton, and Railroads (ppg6h230640461608f07280df)
UPDATE "Lesson" SET "content" = '# Cattle, Cotton, and Railroads

*Grade 6 World History · Unit 8 of 9 · Texas and American Turning Points · Lesson 4*

## Objective

**I can** connect Texas economic changes to national markets in the late 1800s.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Cattle, Cotton, and Railroads”?

## Teach

### Big idea

Economy on cattle drives, cotton, and rail links to national markets.

### Example 1 — Example 1

Barbed wire closes open range.

### Try this

Apply “Cattle, Cotton, and Railroads” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Cattle, Cotton, and Railroads”: compare places or times.

### Common mistake (this lesson only)

Treating “Cattle, Cotton, and Railroads” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Cattle, Cotton, and Railroads”?  
   **Answer:** Connect Texas economic changes to national markets in the late 1800s.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Cattle, Cotton, and Railroads” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Economy on cattle drives, cotton, and rail links to national markets.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Cattle, Cotton, and Railroads” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Cattle, Cotton, and Railroads” with one map sketch.
', "objectives" = '• Connect Texas economic changes to national markets in the late 1800s.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Connect Texas economic changes to national markets in the late 1800s.' WHERE "id" = 'ppg6h230640461608f07280df' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hab500e782217ce859f9e','ppg6h230640461608f07280df',NULL,'MULTIPLE_CHOICE','Closest to the core of “Cattle, Cotton, and Railroads”?','["Economy on cattle drives, cotton, and rail links to national markets.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hd4c52b563ac733be1397','ppg6h230640461608f07280df',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hdcd7ce1221df52a8ab02','ppg6h230640461608f07280df',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L5. Constitutional Promises (ppg6h9935a5c35e1e6ba91ce4)
UPDATE "Lesson" SET "content" = '# Constitutional Promises

*Grade 6 World History · Unit 8 of 9 · Texas and American Turning Points · Lesson 5*

## Objective

**I can** explain equal protection and voting rights as constitutional claims people fought to realize.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Constitutional Promises”?

## Teach

### Big idea

US/Texas constitutions promise rights — ask how people claim them.

### Example 1 — Example 1

Bill of Rights vocabulary.

### Try this

Apply “Constitutional Promises” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Constitutional Promises”: compare places or times.

### Common mistake (this lesson only)

Treating “Constitutional Promises” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Constitutional Promises”?  
   **Answer:** Explain equal protection and voting rights as constitutional claims people fought to realize.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Constitutional Promises” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. US/Texas constitutions promise rights — ask how people claim them.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Constitutional Promises” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Constitutional Promises” with one map sketch.
', "objectives" = '• Explain equal protection and voting rights as constitutional claims people fought to realize.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain equal protection and voting rights as constitutional claims people fought to realize.' WHERE "id" = 'ppg6h9935a5c35e1e6ba91ce4' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha81e007415d3206d0f38','ppg6h9935a5c35e1e6ba91ce4',NULL,'MULTIPLE_CHOICE','Closest to the core of “Constitutional Promises”?','["US/Texas constitutions promise rights — ask how people claim them.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hae0d20a45e29088fb662','ppg6h9935a5c35e1e6ba91ce4',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h778f831a6adef8b69e15','ppg6h9935a5c35e1e6ba91ce4',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L6. Civil Rights Milestones (ppg6h57c1171c19eba9a79b31)
UPDATE "Lesson" SET "content" = '# Civil Rights Milestones

*Grade 6 World History · Unit 8 of 9 · Texas and American Turning Points · Lesson 6*

## Objective

**I can** identify major U.S. civil rights milestones (abolition to mid-20th-century legal victories) with causes and effects.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Civil Rights Milestones”?

## Teach

### Big idea

Ordinary people and leaders challenged segregation and voting barriers.

### Example 1 — Example 1

Court cases + local courage.

### Try this

Apply “Civil Rights Milestones” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Civil Rights Milestones”: compare places or times.

### Common mistake (this lesson only)

Treating “Civil Rights Milestones” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Civil Rights Milestones”?  
   **Answer:** Identify major U.S. civil rights milestones (abolition to mid-20th-century legal victories) with causes and effects.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Civil Rights Milestones” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Ordinary people and leaders challenged segregation and voting barriers.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Civil Rights Milestones” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Civil Rights Milestones” with one map sketch.
', "objectives" = '• Identify major U.S. civil rights milestones (abolition to mid-20th-century legal victories) with causes and effects.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Identify major U.S. civil rights milestones (abolition to mid-20th-century legal victories) with causes and effects.' WHERE "id" = 'ppg6h57c1171c19eba9a79b31' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb194e24f71a5287c8d45','ppg6h57c1171c19eba9a79b31',NULL,'MULTIPLE_CHOICE','Closest to the core of “Civil Rights Milestones”?','["Ordinary people and leaders challenged segregation and voting barriers.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hbf36cd670fa69ae93326','ppg6h57c1171c19eba9a79b31',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hb179cd17537fb0bdf8d9','ppg6h57c1171c19eba9a79b31',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L7. Leaders and Ordinary Courage (ppg6h4b1d0ca315d78482ab2f)
UPDATE "Lesson" SET "content" = '# Leaders and Ordinary Courage

*Grade 6 World History · Unit 8 of 9 · Texas and American Turning Points · Lesson 7*

## Objective

**I can** show how both famous leaders and ordinary families advanced justice under law.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Leaders and Ordinary Courage”?

## Teach

### Big idea

History is not only famous names — families, churches, students matter.

### Example 1 — Example 1

Local example.

### Try this

Apply “Leaders and Ordinary Courage” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Leaders and Ordinary Courage”: compare places or times.

### Common mistake (this lesson only)

Treating “Leaders and Ordinary Courage” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Leaders and Ordinary Courage”?  
   **Answer:** Show how both famous leaders and ordinary families advanced justice under law.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Leaders and Ordinary Courage” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. History is not only famous names — families, churches, students matter.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Leaders and Ordinary Courage” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Leaders and Ordinary Courage” with one map sketch.
', "objectives" = '• Show how both famous leaders and ordinary families advanced justice under law.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Show how both famous leaders and ordinary families advanced justice under law.' WHERE "id" = 'ppg6h4b1d0ca315d78482ab2f' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hc75997e8a6860d481c09','ppg6h4b1d0ca315d78482ab2f',NULL,'MULTIPLE_CHOICE','Closest to the core of “Leaders and Ordinary Courage”?','["History is not only famous names — families, churches, students matter.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h048f7f74748fc6261b23','ppg6h4b1d0ca315d78482ab2f',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h6228b459c12792be8188','ppg6h4b1d0ca315d78482ab2f',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L8. Texas & Turning Points Synthesis (ppg6h3716af72d8ed49d94911)
UPDATE "Lesson" SET "content" = '# Texas & Turning Points Synthesis

*Grade 6 World History · Unit 8 of 9 · Texas and American Turning Points · Lesson 8*

## Objective

**I can** write a CER on one Texas or U.S. turning point using two pieces of evidence.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Texas & Turning Points Synthesis”?

## Teach

### Big idea

Geography + sovereignty changes + economy + rights struggles.

### Example 1 — Example 1

Timeline of 5 beats.

### Try this

Apply “Texas & Turning Points Synthesis” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Texas & Turning Points Synthesis”: compare places or times.

### Common mistake (this lesson only)

Treating “Texas & Turning Points Synthesis” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Texas & Turning Points Synthesis”?  
   **Answer:** Write a CER on one Texas or U.S. turning point using two pieces of evidence.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Texas & Turning Points Synthesis” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Geography + sovereignty changes + economy + rights struggles.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Texas & Turning Points Synthesis” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Texas & Turning Points Synthesis” with one map sketch.
', "objectives" = '• Write a CER on one Texas or U.S. turning point using two pieces of evidence.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Write a CER on one Texas or U.S. turning point using two pieces of evidence.' WHERE "id" = 'ppg6h3716af72d8ed49d94911' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h52dd58e3b95c0dca42d0','ppg6h3716af72d8ed49d94911',NULL,'MULTIPLE_CHOICE','Closest to the core of “Texas & Turning Points Synthesis”?','["Geography + sovereignty changes + economy + rights struggles.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hc465ec3e3f32d420af61','ppg6h3716af72d8ed49d94911',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h8f11cd01bf75a46835c9','ppg6h3716af72d8ed49d94911',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L1. The 20th Century in Broad Strokes (ppg6h3a6a4d686949f058e0f7)
UPDATE "Lesson" SET "content" = '# The 20th Century in Broad Strokes

*Grade 6 World History · Unit 9 of 9 · Global Connections Today · Lesson 1*

## Objective

**I can** outline world wars and major 20th-century conflicts as global turning points.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “The 20th Century in Broad Strokes”?

## Teach

### Big idea

Wars, technology, rights movements, and global links — selective overview.

### Example 1 — Example 1

Pick 3 markers.

### Try this

Apply “The 20th Century in Broad Strokes” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “The 20th Century in Broad Strokes”: compare places or times.

### Common mistake (this lesson only)

Treating “The 20th Century in Broad Strokes” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “The 20th Century in Broad Strokes”?  
   **Answer:** Outline world wars and major 20th-century conflicts as global turning points.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “The 20th Century in Broad Strokes” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Wars, technology, rights movements, and global links — selective overview.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “The 20th Century in Broad Strokes” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “The 20th Century in Broad Strokes” with one map sketch.
', "objectives" = '• Outline world wars and major 20th-century conflicts as global turning points.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Outline world wars and major 20th-century conflicts as global turning points.' WHERE "id" = 'ppg6h3a6a4d686949f058e0f7' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h7f8ac82b737d7e975d02','ppg6h3a6a4d686949f058e0f7',NULL,'MULTIPLE_CHOICE','Closest to the core of “The 20th Century in Broad Strokes”?','["Wars, technology, rights movements, and global links — selective overview.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h5bc87b30e0d413ab4715','ppg6h3a6a4d686949f058e0f7',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h3b167cbfbbb23a29aa6e','ppg6h3a6a4d686949f058e0f7',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L2. Cold War Ideas (Intro) (ppg6hd770f81443068a10581e)
UPDATE "Lesson" SET "content" = '# Cold War Ideas (Intro)

*Grade 6 World History · Unit 9 of 9 · Global Connections Today · Lesson 2*

## Objective

**I can** explain the Cold War as a rivalry of alliances and ideas without caricature.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Cold War Ideas (Intro)”?

## Teach

### Big idea

US/Soviet rivalry of systems — nuclear fear, alliances, proxy conflicts intro.

### Example 1 — Example 1

Not only Europe.

### Try this

Apply “Cold War Ideas (Intro)” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Cold War Ideas (Intro)”: compare places or times.

### Common mistake (this lesson only)

Treating “Cold War Ideas (Intro)” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Cold War Ideas (Intro)”?  
   **Answer:** Explain the Cold War as a rivalry of alliances and ideas without caricature.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Cold War Ideas (Intro)” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. US/Soviet rivalry of systems — nuclear fear, alliances, proxy conflicts intro.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Cold War Ideas (Intro)” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Cold War Ideas (Intro)” with one map sketch.
', "objectives" = '• Explain the Cold War as a rivalry of alliances and ideas without caricature.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain the Cold War as a rivalry of alliances and ideas without caricature.' WHERE "id" = 'ppg6hd770f81443068a10581e' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h5f278c47b8da40275594','ppg6hd770f81443068a10581e',NULL,'MULTIPLE_CHOICE','Closest to the core of “Cold War Ideas (Intro)”?','["US/Soviet rivalry of systems — nuclear fear, alliances, proxy conflicts intro.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h94de1da42db2342fd631','ppg6hd770f81443068a10581e',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h5a8c89bf21242f998445','ppg6hd770f81443068a10581e',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L3. Decolonization Snapshot (ppg6he1a34e568844c7492ce1)
UPDATE "Lesson" SET "content" = '# Decolonization Snapshot

*Grade 6 World History · Unit 9 of 9 · Global Connections Today · Lesson 3*

## Objective

**I can** describe how many nations gained independence in the mid-20th century.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Decolonization Snapshot”?

## Teach

### Big idea

Colonies sought independence after WWII — new nations, hard transitions.

### Example 1 — Example 1

Africa/Asia examples.

### Try this

Apply “Decolonization Snapshot” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Decolonization Snapshot”: compare places or times.

### Common mistake (this lesson only)

Treating “Decolonization Snapshot” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Decolonization Snapshot”?  
   **Answer:** Describe how many nations gained independence in the mid-20th century.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Decolonization Snapshot” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Colonies sought independence after WWII — new nations, hard transitions.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Decolonization Snapshot” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Decolonization Snapshot” with one map sketch.
', "objectives" = '• Describe how many nations gained independence in the mid-20th century.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Describe how many nations gained independence in the mid-20th century.' WHERE "id" = 'ppg6he1a34e568844c7492ce1' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha412ea8092d7ef821443','ppg6he1a34e568844c7492ce1',NULL,'MULTIPLE_CHOICE','Closest to the core of “Decolonization Snapshot”?','["Colonies sought independence after WWII — new nations, hard transitions.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hbd4b654ceb622da3f1d6','ppg6he1a34e568844c7492ce1',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h3e494546768d1a5c3b1b','ppg6he1a34e568844c7492ce1',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L4. Globalization: Goods and Information (ppg6h815f7d588159e5f4e376)
UPDATE "Lesson" SET "content" = '# Globalization: Goods and Information

*Grade 6 World History · Unit 9 of 9 · Global Connections Today · Lesson 4*

## Objective

**I can** define globalization through trade, travel, and communication examples.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Globalization: Goods and Information”?

## Teach

### Big idea

Faster trade and information link places — winners/losers questions.

### Example 1 — Example 1

Container ships + internet.

### Try this

Apply “Globalization: Goods and Information” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Globalization: Goods and Information”: compare places or times.

### Common mistake (this lesson only)

Treating “Globalization: Goods and Information” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Globalization: Goods and Information”?  
   **Answer:** Define globalization through trade, travel, and communication examples.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Globalization: Goods and Information” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Faster trade and information link places — winners/losers questions.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Globalization: Goods and Information” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Globalization: Goods and Information” with one map sketch.
', "objectives" = '• Define globalization through trade, travel, and communication examples.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Define globalization through trade, travel, and communication examples.' WHERE "id" = 'ppg6h815f7d588159e5f4e376' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h4ac6bf98395c96e2fdbb','ppg6h815f7d588159e5f4e376',NULL,'MULTIPLE_CHOICE','Closest to the core of “Globalization: Goods and Information”?','["Faster trade and information link places — winners/losers questions.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha5ae3fe1472bf4a22085','ppg6h815f7d588159e5f4e376',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h41977aa1339295f16227','ppg6h815f7d588159e5f4e376',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L5. Human Rights Language (ppg6hd2d96c847c5cb065061a)
UPDATE "Lesson" SET "content" = '# Human Rights Language

*Grade 6 World History · Unit 9 of 9 · Global Connections Today · Lesson 5*

## Objective

**I can** explain human rights as claims about dignity and justice grounded in documents and law.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Human Rights Language”?

## Teach

### Big idea

Universal claims of dignity — UDHR idea; enforcement uneven.

### Example 1 — Example 1

Rights as standards to measure.

### Try this

Apply “Human Rights Language” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Human Rights Language”: compare places or times.

### Common mistake (this lesson only)

Treating “Human Rights Language” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Human Rights Language”?  
   **Answer:** Explain human rights as claims about dignity and justice grounded in documents and law.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Human Rights Language” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Universal claims of dignity — UDHR idea; enforcement uneven.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Human Rights Language” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Human Rights Language” with one map sketch.
', "objectives" = '• Explain human rights as claims about dignity and justice grounded in documents and law.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Explain human rights as claims about dignity and justice grounded in documents and law.' WHERE "id" = 'ppg6hd2d96c847c5cb065061a' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h8a3238220296f426481d','ppg6hd2d96c847c5cb065061a',NULL,'MULTIPLE_CHOICE','Closest to the core of “Human Rights Language”?','["Universal claims of dignity — UDHR idea; enforcement uneven.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hccb5c76cdf27ccac669a','ppg6hd2d96c847c5cb065061a',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h35116a786ea8de2e852c','ppg6hd2d96c847c5cb065061a',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L6. Texas in a Global Economy (ppg6hb72629c0e5b55185459a)
UPDATE "Lesson" SET "content" = '# Texas in a Global Economy

*Grade 6 World History · Unit 9 of 9 · Global Connections Today · Lesson 6*

## Objective

**I can** connect East Texas families and industries to wider markets and stewardship.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Texas in a Global Economy”?

## Teach

### Big idea

Texas energy, ports, tech, agriculture connect worldwide.

### Example 1 — Example 1

Houston ship channel idea.

### Try this

Apply “Texas in a Global Economy” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Texas in a Global Economy”: compare places or times.

### Common mistake (this lesson only)

Treating “Texas in a Global Economy” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Texas in a Global Economy”?  
   **Answer:** Connect East Texas families and industries to wider markets and stewardship.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Texas in a Global Economy” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Texas energy, ports, tech, agriculture connect worldwide.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Texas in a Global Economy” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Texas in a Global Economy” with one map sketch.
', "objectives" = '• Connect East Texas families and industries to wider markets and stewardship.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Connect East Texas families and industries to wider markets and stewardship.' WHERE "id" = 'ppg6hb72629c0e5b55185459a' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h4a925b86ff34beaf491e','ppg6hb72629c0e5b55185459a',NULL,'MULTIPLE_CHOICE','Closest to the core of “Texas in a Global Economy”?','["Texas energy, ports, tech, agriculture connect worldwide.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ha213ba6a6c021124a9dc','ppg6hb72629c0e5b55185459a',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h20512a25fb59028c7588','ppg6hb72629c0e5b55185459a',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L7. Media Literacy for Citizens (ppg6h79e697111ae101dbca22)
UPDATE "Lesson" SET "content" = '# Media Literacy for Citizens

*Grade 6 World History · Unit 9 of 9 · Global Connections Today · Lesson 7*

## Objective

**I can** evaluate a news claim with sourcing questions appropriate for Grade 6.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Media Literacy for Citizens”?

## Teach

### Big idea

Check sources, dates, evidence — citizenship skill.

### Example 1 — Example 1

Headline vs article body.

### Try this

Apply “Media Literacy for Citizens” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Media Literacy for Citizens”: compare places or times.

### Common mistake (this lesson only)

Treating “Media Literacy for Citizens” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Media Literacy for Citizens”?  
   **Answer:** Evaluate a news claim with sourcing questions appropriate for Grade 6.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Media Literacy for Citizens” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. Check sources, dates, evidence — citizenship skill.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Media Literacy for Citizens” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Media Literacy for Citizens” with one map sketch.
', "objectives" = '• Evaluate a news claim with sourcing questions appropriate for Grade 6.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Evaluate a news claim with sourcing questions appropriate for Grade 6.' WHERE "id" = 'ppg6h79e697111ae101dbca22' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h001dd80be2e94db7cdd9','ppg6h79e697111ae101dbca22',NULL,'MULTIPLE_CHOICE','Closest to the core of “Media Literacy for Citizens”?','["Check sources, dates, evidence — citizenship skill.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h96f929635771ad641930','ppg6h79e697111ae101dbca22',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h3b35c5f1ed5120ff9c91','ppg6h79e697111ae101dbca22',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L8. Year Capstone: Continuity and Change (ppg6hda892a8e03ce8f6d636e)
UPDATE "Lesson" SET "content" = '# Year Capstone: Continuity and Change

*Grade 6 World History · Unit 9 of 9 · Global Connections Today · Lesson 8*

## Objective

**I can** argue what changed and what endured from early farming to today’s connected world.

## Warm-up (2 minutes)

Before reading: what is one thing you already know that might connect to “Year Capstone: Continuity and Change”?

## Teach

### Big idea

What changed / what continued across the year path — claim + evidence.

### Example 1 — Example 1

Two continuities, two changes.

### Try this

Apply “Year Capstone: Continuity and Change” with one map or source detail.

**Check:** On-skill answer with evidence.

### Example 2 — Example 2

Second case for “Year Capstone: Continuity and Change”: compare places or times.

### Common mistake (this lesson only)

Treating “Year Capstone: Continuity and Change” as a single stereotype for a whole continent or century. Fix: name a specific place/time and evidence.

## Guided practice (we do)

1. Big idea of “Year Capstone: Continuity and Change”?  
   **Answer:** Argue what changed and what endured from early farming to today’s connected world.

2. One specific example?  
   **Answer:** Place/people/route/document.

3. What question should a historian ask next?  
   **Answer:** Who benefits / what is missing / what changed?

## Independent practice

Complete each item. Show your thinking.

1. Define/summarize “Year Capstone: Continuity and Change” in one sentence.
2. Give a specific example (place/people/goods).
3. What evidence type helps (map, artifact, text)?
4. One continuity or change related to the lesson.
5. A misconception to avoid.
6. Exit-style check question you invent + answer.

### Answer key (try first)

1. What changed / what continued across the year path — claim + evidence.
2. Must be concrete.
3. Named type.
4. Stated clearly.
5. Stereotype / myth.
6. Correct.

## Exit ticket

1. State “Year Capstone: Continuity and Change” in one evidence-based sentence.
2. Name one specific example.

## Stretch (optional)

Create a mini teaching poster for “Year Capstone: Continuity and Change” with one map sketch.
', "objectives" = '• Argue what changed and what endured from early farming to today’s connected world.
• Use a map, timeline, or source example.
• Check claims against specific evidence.', "description" = 'Argue what changed and what endured from early farming to today’s connected world.' WHERE "id" = 'ppg6hda892a8e03ce8f6d636e' AND "courseId" = 'cmuh9bwwo041bedan1gymikl1';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6h439f82978d3d98918619','ppg6hda892a8e03ce8f6d636e',NULL,'MULTIPLE_CHOICE','Closest to the core of “Year Capstone: Continuity and Change”?','["What changed / what continued across the year path — claim + evidence.","Maps never need keys","Empires have no costs","Beliefs never travel"]',0,'Core idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hd2cd485b683b7ce57ae4','ppg6hda892a8e03ce8f6d636e',NULL,'MULTIPLE_CHOICE','Strong history answers include…','["specific evidence (map, source, or example)","only vibes","made-up dates presented as fact","no geography"]',0,'Evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6hbb3813985fe0b53163bb','ppg6hda892a8e03ce8f6d636e',NULL,'MULTIPLE_CHOICE','When a claim is huge, you should…','["narrow to a place/time and cite evidence","shout louder","delete the map","ignore Indigenous peoples"]',0,'Narrow + cite.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

