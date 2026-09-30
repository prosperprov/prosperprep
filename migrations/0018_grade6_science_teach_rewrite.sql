-- Grade 6 Science: hand-authored Teach / Warm-up / Guided / Exit + skill Check MC.
-- Keeps existing lesson IDs and titles. Independent practice from skill banks (ELA) or hand packs (Science/History).
-- UPDATE content + objectives + description + Question rows. Preserve videoUrl.
-- Do NOT run db:setup. Safe for production D1 (prosperprep-school).
-- Source: scripts/data/grade6-science-hand-teach.json — do not Mad-Lib overwrite via gen-grade6-science-year.mjs without hand merge.

-- Unit 1 L1. What Scientists Mean by Matter (ppg6s3483df38a537aa116e8f)
UPDATE "Lesson" SET "content" = '# What Scientists Mean by Matter

*Grade 6 Science · Unit 1 of 10 · Properties of Matter · Lesson 1*

## Objective

**I can** define matter as anything that has mass and takes up space.

## Warm-up (2 minutes)

Is air matter? Is light matter? Why?

## Teach

### Matter defined

**Matter** is anything that has **mass** and takes up **space** (volume). Air counts; light and sound energy do not.

### Example 1 — air vs light

A balloon gets heavier when you add air (mass) and looks bigger (volume) → air is matter. A flashlight beam is energy, not matter.

### Try this

Is steam matter?

**Check:** Yes — water in gas form still has mass and volume.

### Example 2 — non-examples

Feelings, ideas, and energy transfers are not matter even though we talk about them in science class.

### Common mistake (this lesson only)

Saying matter is “anything you can see.” Fix: use mass + volume tests (air is matter you often cannot see).

## Guided practice (we do)

1. Two tests for matter?  
   **Answer:** Has mass; takes up space.

2. Is heat matter?  
   **Answer:** No — energy.

3. Why is air matter?  
   **Answer:** It has mass and volume.

## Independent practice

Complete each item. Show your thinking.

1. List 3 matter examples and 2 non-examples.
2. Why does a ball count as matter?
3. Defend: helium in a balloon is matter.
4. Classify smoke.
5. Is an echo matter?
6. Write the definition from memory.

### Answer key (try first)

1. Matter: desk, water, air. Non: light, sound (samples).
2. It has mass and takes up space.
3. Mass (scale) + volume (fills balloon).
4. Matter (particles) — mixture of solids/gases.
5. No — sound energy.
6. Anything with mass and volume.

## Exit ticket

1. Classify: rock, sunlight, oxygen, sadness.
2. Defend air with both tests.

## Stretch (optional)

Design a simple demo that shows air has mass.
', "objectives" = '• Define matter as anything that has mass and takes up space.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Define matter as anything that has mass and takes up space.' WHERE "id" = 'ppg6s3483df38a537aa116e8f' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf024d92c6569caa919e8','ppg6s3483df38a537aa116e8f',NULL,'MULTIPLE_CHOICE','Which is matter?','["oxygen gas","sunlight","a radio wave","a shadow"]',0,'Gas has mass/volume.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sc765af896e90d92a4832','ppg6s3483df38a537aa116e8f',NULL,'MULTIPLE_CHOICE','Matter must have…','["mass and volume","only color","only a smell","a battery"]',0,'Mass + volume.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s4048eafb8c247c9cebc1','ppg6s3483df38a537aa116e8f',NULL,'MULTIPLE_CHOICE','Light is best classified as…','["energy, not matter","a solid","a liquid","a type of mass"]',0,'Energy.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L2. States of Matter: Solid, Liquid, Gas (ppg6s673b20c6b63380cb80e0)
UPDATE "Lesson" SET "content" = '# States of Matter: Solid, Liquid, Gas

*Grade 6 Science · Unit 1 of 10 · Properties of Matter · Lesson 2*

## Objective

**I can** compare solids, liquids, and gases by shape and volume.

## Warm-up (2 minutes)

Does juice keep its shape when poured into a new cup?

## Teach

### Three states

**Solid:** fixed shape and volume. **Liquid:** fixed volume, shape of container. **Gas:** neither shape nor volume fixed (fills container).

### Example 1 — pour test

Water in a bottle has a definite volume but takes the bottle’s shape → liquid.

### Try this

Classify steam above a pot.

**Check:** Gas (water vapor) — fills the available space above.

### Example 2 — particle hint

Later we will model particles packed (solid), sliding (liquid), or flying free (gas).

### Common mistake (this lesson only)

Calling ice “not water.” Fix: ice is water in the solid state.

## Guided practice (we do)

1. Liquid property?  
   **Answer:** Definite volume; shape of container.

2. Gas property?  
   **Answer:** Fills container; no fixed volume.

3. Solid property?  
   **Answer:** Fixed shape and volume.

## Independent practice

Complete each item. Show your thinking.

1. Sort: brick, milk, neon, wood, oil, air.
2. Why don''t solids pour like liquids?
3. Balloon inflation uses which state?
4. Does liquid volume change when poured?
5. Name one solid that can flow slowly (challenge).
6. Define each state in ≤8 words.

### Answer key (try first)

1. S: brick, wood. L: milk, oil. G: neon, air.
2. Particles packed; fixed shape.
3. Gas.
4. No (approximately) — shape changes.
5. Sample: glacier ice / pitch — still modeled as solid typically.
6. Solid fixed shape/volume; liquid fixed volume; gas fills space.

## Exit ticket

1. Sort 6 examples into S/L/G.
2. Explain one borderline case (syrup).

## Stretch (optional)

Explain why a bicycle tire can hold a gas under pressure.
', "objectives" = '• Compare solids, liquids, and gases by shape and volume.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Compare solids, liquids, and gases by shape and volume.' WHERE "id" = 'ppg6s673b20c6b63380cb80e0' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sc6ea38b91db4ffa5d5d2','ppg6s673b20c6b63380cb80e0',NULL,'MULTIPLE_CHOICE','Juice poured into a bowl…','["keeps volume; changes shape","keeps shape; changes volume","is a solid","disappears as matter"]',0,'Liquid.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s38f8b86804dfc1a7105a','ppg6s673b20c6b63380cb80e0',NULL,'MULTIPLE_CHOICE','Which best fits a gas?','["fills the whole container","keeps a cube shape","has no mass","cannot move"]',0,'Fills container.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s7a69ca66c8d8933007d0','ppg6s673b20c6b63380cb80e0',NULL,'MULTIPLE_CHOICE','Ice melting is a change of…','["state","element identity","nuclear composition","planet"]',0,'State.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L3. Particle Model Thinking (ppg6s5784f3db78b2ab41e380)
UPDATE "Lesson" SET "content" = '# Particle Model Thinking

*Grade 6 Science · Unit 1 of 10 · Properties of Matter · Lesson 3*

## Objective

**I can** relate particle arrangement to state and behavior.

## Warm-up (2 minutes)

If particles in a solid only vibrate in place, how can a solid expand when heated?

## Teach

### Particle model

Tiny particles make up matter. In solids they pack and vibrate; in liquids they slide; in gases they move freely and are far apart.

### Example 1 — heat expands

Heating makes particles move faster and spread a little → solid/liquid can expand without changing state yet.

### Try this

Why can you compress a gas more than a liquid?

**Check:** Gas particles have lots of empty space between them.

### Example 2 — smell travel

Perfume particles move through air (gas mixing) — diffusion.

### Common mistake (this lesson only)

Drawing gas particles as touching like a solid. Fix: show large spaces between gas particles.

## Guided practice (we do)

1. Solid particle motion?  
   **Answer:** Vibrate in place.

2. Liquid?  
   **Answer:** Slide past neighbors.

3. Gas spacing?  
   **Answer:** Far apart.

## Independent practice

Complete each item. Show your thinking.

1. Sketch and label solid particles.
2. Why gases fill a room?
3. Connect melting to particle freedom.
4. Compressibility ranking S/L/G.
5. One limit of the particle model?
6. Explain syrup’s slow pour with particles.

### Answer key (try first)

1. Packed, vibrating.
2. Particles move freely / diffuse.
3. Particles gain freedom to slide.
4. G most compressible.
5. Particles are not literally visible dots in class drawings.
6. Particles slide but with more attraction/friction-like interaction.

## Exit ticket

1. Sketch S/L/G particle diagrams.
2. Explain one diagram aloud.

## Stretch (optional)

Use the model to explain why solids are hard to compress.
', "objectives" = '• Relate particle arrangement to state and behavior.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Relate particle arrangement to state and behavior.' WHERE "id" = 'ppg6s5784f3db78b2ab41e380' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s9f71ceabb35ebaa17ad1','ppg6s5784f3db78b2ab41e380',NULL,'MULTIPLE_CHOICE','Best gas particle sketch?','["particles far apart, moving freely","tight grid, no motion","one giant particle only","particles glued in a cube"]',0,'Far apart.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s1373de457998243e3e6f','ppg6s5784f3db78b2ab41e380',NULL,'MULTIPLE_CHOICE','Heating a solid (before melting) makes particles…','["move faster / vibrate more","disappear","become energy only","stop moving"]',0,'Faster motion.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6saf2e07c91def7017efc8','ppg6s5784f3db78b2ab41e380',NULL,'MULTIPLE_CHOICE','Liquids are hard to compress because…','["particles are already close","particles do not exist","liquids have no mass","gases fill them"]',0,'Close particles.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L4. Measuring Mass and Volume (ppg6s36c0c1690d1ace6b4c2d)
UPDATE "Lesson" SET "content" = '# Measuring Mass and Volume

*Grade 6 Science · Unit 1 of 10 · Properties of Matter · Lesson 4*

## Objective

**I can** measure mass and volume with appropriate tools and units.

## Warm-up (2 minutes)

Which tool measures mass: balance or graduated cylinder?

## Teach

### Tools and units

**Mass** (grams) with a balance. **Volume** of liquid (mL) with a graduated cylinder; regular solids via L×W×H (cm³).

### Example 1 — meniscus

Read liquid volume at eye level at the bottom of the meniscus.

### Try this

A block is 2 cm × 3 cm × 4 cm. Volume?

**Check:** 24 cm³.

### Example 2 — mass vs weight

In Grade 6 we treat mass as amount of matter; weight depends on gravity — use mass language in lab.

### Common mistake (this lesson only)

Reading the top of the meniscus. Fix: eye level, bottom of curve for water.

## Guided practice (we do)

1. Mass tool?  
   **Answer:** Balance.

2. Liquid volume tool?  
   **Answer:** Graduated cylinder.

3. 2×3×5 cm volume?  
   **Answer:** 30 cm³.

## Independent practice

Complete each item. Show your thinking.

1. Match tool→quantity.
2. Convert note: 1 cm³ water ≈ 1 mL.
3. Find volume of 4×4×4 cube.
4. Why tare a balance?
5. Error: reading from above.
6. List units: mass, liquid volume, solid volume.

### Answer key (try first)

1. Balance→mass; cylinder→liquid volume.
2. Useful bridge.
3. 64 cm³.
4. Ignore container mass.
5. Parallax / wrong meniscus.
6. g; mL; cm³.

## Exit ticket

1. Practice meniscus reading on a diagram.
2. Compute a rectangular volume.

## Stretch (optional)

Explain why units must match in a density later lab.
', "objectives" = '• Measure mass and volume with appropriate tools and units.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Measure mass and volume with appropriate tools and units.' WHERE "id" = 'ppg6s36c0c1690d1ace6b4c2d' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sc8580c0032010ba31454','ppg6s36c0c1690d1ace6b4c2d',NULL,'MULTIPLE_CHOICE','Best mass unit in class labs?','["grams","kilometers","hours","decibels"]',0,'Grams.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf91123938c9582b61377','ppg6s36c0c1690d1ace6b4c2d',NULL,'MULTIPLE_CHOICE','Volume of 5 cm × 2 cm × 2 cm?','["20 cm³","9 cm³","5 cm³","0"]',0,'5×2×2=20.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s953090eebfd24947f763','ppg6s36c0c1690d1ace6b4c2d',NULL,'MULTIPLE_CHOICE','Read a meniscus…','["at eye level at the bottom of the curve","from above looking down only","from across the room","without a cylinder"]',0,'Eye level.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L5. Density as a Physical Property (ppg6s872183cd83d0b25ac836)
UPDATE "Lesson" SET "content" = '# Density as a Physical Property

*Grade 6 Science · Unit 1 of 10 · Properties of Matter · Lesson 5*

## Objective

**I can** define density as mass per unit volume and compare materials.

## Warm-up (2 minutes)

Why does a steel bolt sink while a large wood log floats?

## Teach

### Density

**Density** = mass ÷ volume. It is a property of the material (at a given temperature), not just “heaviness.”

### Example 1 — calculate

Mass 20 g, volume 10 cm³ → density 2 g/cm³.

### Try this

Which is denser: 50 g in 25 cm³ or 10 g in 2 cm³?

**Check:** Second: 5 g/cm³ > 2 g/cm³.

### Example 2 — float idea

Objects denser than water (~1 g/cm³) tend to sink if solid and not shaped to trap air.

### Common mistake (this lesson only)

Thinking bigger objects are always denser. Fix: compare mass per volume, not size alone.

## Guided practice (we do)

1. Formula?  
   **Answer:** D=m/V.

2. Unit example?  
   **Answer:** g/cm³.

3. Same material, different size — density?  
   **Answer:** About the same.

## Independent practice

Complete each item. Show your thinking.

1. Compute D for 12 g / 4 cm³.
2. Compare 1 g/cm³ vs 0.8 g/cm³ in water.
3. Why is density intensive?
4. Find V if m=50 g and D=2.
5. Lab error that ruins D?
6. State D formula from memory.

### Answer key (try first)

1. 3 g/cm³.
2. 0.8 tends to float.
3. Doesn''t depend on sample size.
4. 25 cm³.
5. Wrong volume reading.
6. m/V.

## Exit ticket

1. Compute two densities; compare.
2. Predict sink/float vs water.

## Stretch (optional)

Explain a ship made of steel that still floats (shape/air).
', "objectives" = '• Define density as mass per unit volume and compare materials.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Define density as mass per unit volume and compare materials.' WHERE "id" = 'ppg6s872183cd83d0b25ac836' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6see672decc0fd7e7905a5','ppg6s872183cd83d0b25ac836',NULL,'MULTIPLE_CHOICE','Density of 30 g / 10 cm³?','["3 g/cm³","40 g/cm³","0.3 g/cm³","300"]',0,'30/10=3.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s7bfd8935566a57c23e8c','ppg6s872183cd83d0b25ac836',NULL,'MULTIPLE_CHOICE','Best density definition?','["mass per unit volume","total weight only","color darkness","temperature"]',0,'m/V.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s4ba836f243b4e4515e58','ppg6s872183cd83d0b25ac836',NULL,'MULTIPLE_CHOICE','Large low-density object can…','["float while a small high-density object sinks","never float","always sink","have zero mass"]',0,'Density rules.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L6. Pure Substances vs Mixtures (ppg6s5042b0d949668a8cef17)
UPDATE "Lesson" SET "content" = '# Pure Substances vs Mixtures

*Grade 6 Science · Unit 1 of 10 · Properties of Matter · Lesson 6*

## Objective

**I can** distinguish pure substances from mixtures.

## Warm-up (2 minutes)

Is salt water a pure substance? Is oxygen gas?

## Teach

### Pure vs mixture

A **pure substance** has one kind of matter throughout (element or compound). A **mixture** combines two or more substances that keep their own properties.

### Example 1 — salt water

Salt water is a mixture — you can separate salt by evaporating water.

### Try this

Is air a mixture?

**Check:** Yes — mainly nitrogen and oxygen mixed.

### Example 2 — compound note

Water (H₂O) is a pure compound; it is not a mixture of hydrogen gas and oxygen gas sitting side by side.

### Common mistake (this lesson only)

Calling every clear liquid pure. Fix: clear can still be a mixture (sugar water).

## Guided practice (we do)

1. Pure substance examples?  
   **Answer:** Oxygen; pure water; gold.

2. Mixture examples?  
   **Answer:** Air; salad; salt water.

3. Separation hint?  
   **Answer:** Mixtures can often be separated physically.

## Independent practice

Complete each item. Show your thinking.

1. Sort: air, silver, trail mix, distilled water.
2. Define mixture.
3. Why is water a compound, not mixture?
4. Method: salt + water.
5. Alloy = ?
6. Give one pure and one mixture from breakfast.

### Answer key (try first)

1. Mix / pure / mix / pure.
2. Two+ substances retaining properties.
3. Chemically bonded H and O.
4. Evaporation / distillation.
5. Mixture of metals (typical).
6. Samples vary.

## Exit ticket

1. Sort 8 cards into pure vs mixture.
2. Name a separation method for one mixture.

## Stretch (optional)

Explain why stainless steel is a mixture (alloy).
', "objectives" = '• Distinguish pure substances from mixtures.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Distinguish pure substances from mixtures.' WHERE "id" = 'ppg6s5042b0d949668a8cef17' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6saf49673b38c1d83226c9','ppg6s5042b0d949668a8cef17',NULL,'MULTIPLE_CHOICE','Salt water is…','["a mixture","an element","pure gold","a type of light"]',0,'Mixture.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s0f0177c35597cf3fe147','ppg6s5042b0d949668a8cef17',NULL,'MULTIPLE_CHOICE','Oxygen gas (O₂) in a tank is…','["a pure substance (element)","a salad","a mechanical mixture of metals","not matter"]',0,'Element.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s308107e6b30143a6f1be','ppg6s5042b0d949668a8cef17',NULL,'MULTIPLE_CHOICE','Best separation for sand + iron filings?','["magnet","eating them","burning the table","adding more sand only"]',0,'Magnet.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L7. Physical Properties Lab Habits (ppg6scb4dfbed414debe607e3)
UPDATE "Lesson" SET "content" = '# Physical Properties Lab Habits

*Grade 6 Science · Unit 1 of 10 · Properties of Matter · Lesson 7*

## Objective

**I can** use safe, repeatable methods to observe physical properties.

## Warm-up (2 minutes)

Why do scientists repeat a measurement instead of trusting one hurried reading?

## Teach

### Lab habits

**Physical properties** (color, mass, volume, density, melting point, conductivity) can be observed without making a new substance. Good habits: repeat, record, control variables.

### Example 1 — repeatability

Three mass trials: 12.1, 12.0, 12.1 g → average and note uncertainty.

### Try this

Name two physical properties of a copper wire.

**Check:** Sample: color (reddish), conducts electricity, malleable, density.

### Example 2 — data table

Always include units and what you measured.

### Common mistake (this lesson only)

Changing two variables at once. Fix: change one factor at a time when testing.

## Guided practice (we do)

1. Why repeat trials?  
   **Answer:** Catch errors; see consistency.

2. Physical property means?  
   **Answer:** Observable without new substance.

3. Units matter because…  
   **Answer:** Numbers without units are unclear.

## Independent practice

Complete each item. Show your thinking.

1. List 5 physical properties.
2. Why average trials?
3. Control variable example.
4. Unsafe habit to avoid.
5. Record 3 fake mass trials and average.
6. Define physical property.

### Answer key (try first)

1. mass, volume, density, color, MP…
2. Reduce random error impact.
3. Same thermometer each time.
4. Tasting chemicals.
5. Compute.
6. No new substance formed to observe it.

## Exit ticket

1. Draft a 3-column data table for mass trials.
2. List 4 physical properties of water.

## Stretch (optional)

Critique a sloppy lab that skips units.
', "objectives" = '• Use safe, repeatable methods to observe physical properties.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Use safe, repeatable methods to observe physical properties.' WHERE "id" = 'ppg6scb4dfbed414debe607e3' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s5efeed2ffb14b42e9e07','ppg6scb4dfbed414debe607e3',NULL,'MULTIPLE_CHOICE','Best lab habit?','["Repeat, record with units, change one variable at a time","Guess results","Skip the table","Mix mystery chemicals randomly"]',0,'Good habits.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s2809d307e36406b115e0','ppg6scb4dfbed414debe607e3',NULL,'MULTIPLE_CHOICE','Color of a mineral is a…','["physical property","chemical reaction product always","type of force","cell"]',0,'Physical.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s177bf67958cc965bd5f7','ppg6scb4dfbed414debe607e3',NULL,'MULTIPLE_CHOICE','A data table should include…','["units and labels","only doodles","no numbers","secret codes"]',0,'Units/labels.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L8. Physical Changes Around Us (ppg6s120859dad29a0e8173cd)
UPDATE "Lesson" SET "content" = '# Physical Changes Around Us

*Grade 6 Science · Unit 1 of 10 · Properties of Matter · Lesson 8*

## Objective

**I can** identify physical changes and conserve substance identity.

## Warm-up (2 minutes)

When ice melts, is it still water?

## Teach

### Physical change

A **physical change** alters form or appearance without making a new substance: melt, freeze, crush, dissolve (often taught as physical), cut.

### Example 1 — melt

Ice → liquid water: same H₂O, different state.

### Try this

Is tearing paper physical?

**Check:** Yes — still paper.

### Example 2 — dissolve note

Sugar dissolved in water can be recovered by evaporating — identity of sugar remains (Grade 6 framing).

### Common mistake (this lesson only)

Thinking melting creates a new substance. Fix: check identity — water stays water.

## Guided practice (we do)

1. Physical change examples?  
   **Answer:** Melt, freeze, crush, cut.

2. Still the same substance?  
   **Answer:** Yes for physical changes.

3. Burning wood?  
   **Answer:** Chemical (preview).

## Independent practice

Complete each item. Show your thinking.

1. Sort 6 everyday changes.
2. Why is freezing physical?
3. Crush vs rust.
4. Recover sugar from water how?
5. Define physical change.
6. List 3 East Texas weather physical changes of water.

### Answer key (try first)

1. Answers vary; melting/cutting physical.
2. Same substance, new state.
3. Crush physical; rust chemical.
4. Evaporate water.
5. Form changes; identity stays.
6. freeze/melt/evaporate samples.

## Exit ticket

1. Sort changes: melt butter, burn toast, crush can, bake cake.
2. Defend two sorts.

## Stretch (optional)

Explain dissolving salt as physical with a recovery plan.
', "objectives" = '• Identify physical changes and conserve substance identity.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Identify physical changes and conserve substance identity.' WHERE "id" = 'ppg6s120859dad29a0e8173cd' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s50bc75d9d44a74faef26','ppg6s120859dad29a0e8173cd',NULL,'MULTIPLE_CHOICE','Melting ice is…','["physical change","a new element forming","nuclear","not a change"]',0,'Physical.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s282b114a699061c57aee','ppg6s120859dad29a0e8173cd',NULL,'MULTIPLE_CHOICE','After crushing a can, the metal is…','["still the same metal","a new gas","gone as matter","a plant cell"]',0,'Same substance.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s765c32036db687221083','ppg6s120859dad29a0e8173cd',NULL,'MULTIPLE_CHOICE','Best identity test question?','["Is it still the same substance?","Was it loud?","Was it Monday?","Did someone smile?"]',0,'Identity.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L9. Matter Unit Synthesis (ppg6sf4b4ac1e53555cbca6a6)
UPDATE "Lesson" SET "content" = '# Matter Unit Synthesis

*Grade 6 Science · Unit 1 of 10 · Properties of Matter · Lesson 9*

## Objective

**I can** integrate matter, states, particles, and density ideas.

## Warm-up (2 minutes)

In 4 sentences, connect particle model → state → density.

## Teach

### Synthesis

Matter has mass and volume; states differ by particle arrangement; density is m/V; physical changes keep identity.

### Example 1 — map

Solid packed → usually higher density than gas of same material at same T (typical). Check numbers when given.

### Try this

Explain floating with density language.

**Check:** Object’s average density less than fluid’s → floats (Grade 6).

### Example 2 — checklist

□ definition of matter □ state properties □ particle sketch □ density calc □ physical vs not

### Common mistake (this lesson only)

Memorizing definitions without an example. Fix: always attach one Prosper Prep lab example.

## Guided practice (we do)

1. Density formula?  
   **Answer:** m/V

2. Gas particles?  
   **Answer:** Far apart.

3. Physical change keeps…  
   **Answer:** Substance identity.

## Independent practice

Complete each item. Show your thinking.

1. Write matter definition.
2. One density word problem.
3. Particle sketch of gas.
4. Physical vs chemical: burn vs melt.
5. Why air is matter.
6. List unit vocabulary (8 words).

### Answer key (try first)

1. mass + volume.
2. Solve m/V.
3. Far apart.
4. chem vs phys.
5. mass+volume.
6. matter, mass, volume, density, solid, liquid, gas, particle…

## Exit ticket

1. Write a synthesis paragraph with one calculation.
2. Sketch S/L/G.

## Stretch (optional)

Teach a 60-second oral review to a partner.
', "objectives" = '• Integrate matter, states, particles, and density ideas.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Integrate matter, states, particles, and density ideas.' WHERE "id" = 'ppg6sf4b4ac1e53555cbca6a6' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s371107d3176af26ea194','ppg6sf4b4ac1e53555cbca6a6',NULL,'MULTIPLE_CHOICE','Best synthesis includes…','["definitions + example + one calculation or sketch","only jokes","only a topic word","no science words"]',0,'Complete.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s714c449ed45a0a5d846f','ppg6sf4b4ac1e53555cbca6a6',NULL,'MULTIPLE_CHOICE','Water as solid/liquid/gas shows…','["same substance, different states","three different elements","loss of mass always","non-matter"]',0,'States.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s903e5f9ec618dbe22224','ppg6sf4b4ac1e53555cbca6a6',NULL,'MULTIPLE_CHOICE','Density compares…','["mass per volume","only color","only temperature","only shape names"]',0,'m/V.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L1. Elements as Building Blocks (ppg6sc117fb72679b1cfbfdce)
UPDATE "Lesson" SET "content" = '# Elements as Building Blocks

*Grade 6 Science · Unit 2 of 10 · Elements and Chemical Changes · Lesson 1*

## Objective

**I can** explain that elements are pure substances made of one kind of atom.

## Warm-up (2 minutes)

Quick think: Explain that elements are pure substances made of one kind of atom — give one example from life or lab.

## Teach

### Big idea

An **element** is a pure substance made of only one kind of atom.

### Example 1 — Example 1

Oxygen (O) and iron (Fe) are elements; water is not.

### Try this

Is carbon dioxide an element?

**Check:** No — compound of C and O.

### Example 2 — Example 2

Elements are listed on the periodic table; they are the building blocks of compounds.

### Common mistake (this lesson only)

Confusing “Elements as Building Blocks” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Elements as Building Blocks”?  
   **Answer:** Explain that elements are pure substances made of one kind of atom.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Elements as Building Blocks.”
2. Example for “Elements as Building Blocks.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. An **element** is a pure substance made of only one kind of atom.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Elements as Building Blocks” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Elements as Building Blocks” to a partner in 60 seconds with one diagram.
', "objectives" = '• Explain that elements are pure substances made of one kind of atom.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Explain that elements are pure substances made of one kind of atom.' WHERE "id" = 'ppg6sc117fb72679b1cfbfdce' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf14e376317daf19846cb','ppg6sc117fb72679b1cfbfdce',NULL,'MULTIPLE_CHOICE','Core idea of “Elements as Building Blocks” is closest to…','["An **element** is a pure substance made of only one kind of atom.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sac014ebe8db63510a2fe','ppg6sc117fb72679b1cfbfdce',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Elements as Building Blocks”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s16ab60f2bb0f64ecc041','ppg6sc117fb72679b1cfbfdce',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L2. Reading the Periodic Table (ppg6s3acc13063805ce5b178f)
UPDATE "Lesson" SET "content" = '# Reading the Periodic Table

*Grade 6 Science · Unit 2 of 10 · Elements and Chemical Changes · Lesson 2*

## Objective

**I can** locate metals, nonmetals, and metalloids and describe shared physical properties.

## Warm-up (2 minutes)

Quick think: Locate metals, nonmetals, and metalloids and describe shared physical properties — give one example from life or lab.

## Teach

### Big idea

The **periodic table** organizes elements by atomic number and repeating properties.

### Example 1 — Example 1

Find oxygen: symbol O, atomic number 8.

### Try this

What does the atomic number tell you?

**Check:** Number of protons (and electrons in a neutral atom — Grade 6 intro).

### Example 2 — Example 2

Periods are rows; groups/families are columns with similar behavior.

### Common mistake (this lesson only)

Confusing “Reading the Periodic Table” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Reading the Periodic Table”?  
   **Answer:** Locate metals, nonmetals, and metalloids and describe shared physical properties.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Reading the Periodic Table.”
2. Example for “Reading the Periodic Table.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. The **periodic table** organizes elements by atomic number and repeating properties.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Reading the Periodic Table” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Reading the Periodic Table” to a partner in 60 seconds with one diagram.
', "objectives" = '• Locate metals, nonmetals, and metalloids and describe shared physical properties.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Locate metals, nonmetals, and metalloids and describe shared physical properties.' WHERE "id" = 'ppg6s3acc13063805ce5b178f' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s1862da9580c9bfeae7c0','ppg6s3acc13063805ce5b178f',NULL,'MULTIPLE_CHOICE','Core idea of “Reading the Periodic Table” is closest to…','["The **periodic table** organizes elements by atomic number and repeating properties.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s851c2424fafa931269fd','ppg6s3acc13063805ce5b178f',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Reading the Periodic Table”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s43892e08ec68e718770f','ppg6s3acc13063805ce5b178f',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L3. Metals, Nonmetals, and Metalloids (ppg6sf01f85f64d9b63221103)
UPDATE "Lesson" SET "content" = '# Metals, Nonmetals, and Metalloids

*Grade 6 Science · Unit 2 of 10 · Elements and Chemical Changes · Lesson 3*

## Objective

**I can** compare conductivity, luster, and malleability across element classes.

## Warm-up (2 minutes)

Quick think: Compare conductivity, luster, and malleability across element classes — give one example from life or lab.

## Teach

### Big idea

**Metals** usually conduct and are shiny/malleable; **nonmetals** often do not; **metalloids** sit between.

### Example 1 — Example 1

Copper wire conducts; sulfur is a brittle nonmetal.

### Try this

Classify silicon.

**Check:** Metalloid (used in electronics).

### Example 2 — Example 2

Left/middle of the table skew metallic; upper-right skew nonmetallic.

### Common mistake (this lesson only)

Confusing “Metals, Nonmetals, and Metalloids” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Metals, Nonmetals, and Metalloids”?  
   **Answer:** Compare conductivity, luster, and malleability across element classes.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Metals, Nonmetals, and Metalloids.”
2. Example for “Metals, Nonmetals, and Metalloids.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Metals** usually conduct and are shiny/malleable; **nonmetals** often do not; **metalloids** sit between.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Metals, Nonmetals, and Metalloids” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Metals, Nonmetals, and Metalloids” to a partner in 60 seconds with one diagram.
', "objectives" = '• Compare conductivity, luster, and malleability across element classes.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Compare conductivity, luster, and malleability across element classes.' WHERE "id" = 'ppg6sf01f85f64d9b63221103' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6scf53592fdd71a5c2a7b5','ppg6sf01f85f64d9b63221103',NULL,'MULTIPLE_CHOICE','Core idea of “Metals, Nonmetals, and Metalloids” is closest to…','["**Metals** usually conduct and are shiny/malleable; **nonmetals** often do not; **metalloids** sit between.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s654d5dd8be8189ed2c59','ppg6sf01f85f64d9b63221103',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Metals, Nonmetals, and Metalloids”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s873e07ad8c69ba70f06a','ppg6sf01f85f64d9b63221103',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L4. Compounds vs Elements (ppg6s3538664ce7cf609dcf92)
UPDATE "Lesson" SET "content" = '# Compounds vs Elements

*Grade 6 Science · Unit 2 of 10 · Elements and Chemical Changes · Lesson 4*

## Objective

**I can** distinguish compounds from elements using composition language.

## Warm-up (2 minutes)

Quick think: Distinguish compounds from elements using composition language — give one example from life or lab.

## Teach

### Big idea

A **compound** chemically combines two or more elements in a fixed ratio (H₂O).

### Example 1 — Example 1

Water is a compound; a bowl of trail mix is a mixture.

### Try this

Is O₂ a compound?

**Check:** No — element (two atoms of same element).

### Example 2 — Example 2

Compounds have properties different from their elements (sodium + chlorine → salt).

### Common mistake (this lesson only)

Confusing “Compounds vs Elements” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Compounds vs Elements”?  
   **Answer:** Distinguish compounds from elements using composition language.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Compounds vs Elements.”
2. Example for “Compounds vs Elements.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. A **compound** chemically combines two or more elements in a fixed ratio (H₂O).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Compounds vs Elements” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Compounds vs Elements” to a partner in 60 seconds with one diagram.
', "objectives" = '• Distinguish compounds from elements using composition language.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Distinguish compounds from elements using composition language.' WHERE "id" = 'ppg6s3538664ce7cf609dcf92' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6secf1f4f645e90dd08a15','ppg6s3538664ce7cf609dcf92',NULL,'MULTIPLE_CHOICE','Core idea of “Compounds vs Elements” is closest to…','["A **compound** chemically combines two or more elements in a fixed ratio (H₂O).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf1fed71fd1c3720e167c','ppg6s3538664ce7cf609dcf92',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Compounds vs Elements”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6saafe83f97a7bddef54df','ppg6s3538664ce7cf609dcf92',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L5. Evidence of Chemical Change (ppg6s8fbe2a36b004b96c245a)
UPDATE "Lesson" SET "content" = '# Evidence of Chemical Change

*Grade 6 Science · Unit 2 of 10 · Elements and Chemical Changes · Lesson 5*

## Objective

**I can** list evidence (gas, color, temperature, precipitate) that a new substance may form.

## Warm-up (2 minutes)

Quick think: List evidence (gas, color, temperature, precipitate) that a new substance may form — give one example from life or lab.

## Teach

### Big idea

Signs of **chemical change**: new substance clues — color change, gas bubbles (not boiling), precipitate, energy release/absorb, hard-to-reverse.

### Example 1 — Example 1

Baking soda + vinegar → bubbles of new gas (CO₂).

### Try this

Is melting ice chemical?

**Check:** No — physical.

### Example 2 — Example 2

Multiple signs together make a stronger claim.

### Common mistake (this lesson only)

Confusing “Evidence of Chemical Change” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Evidence of Chemical Change”?  
   **Answer:** List evidence (gas, color, temperature, precipitate) that a new substance may form.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Evidence of Chemical Change.”
2. Example for “Evidence of Chemical Change.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Signs of **chemical change**: new substance clues — color change, gas bubbles (not boiling), precipitate, energy release/absorb, hard-to-reverse.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Evidence of Chemical Change” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Evidence of Chemical Change” to a partner in 60 seconds with one diagram.
', "objectives" = '• List evidence (gas, color, temperature, precipitate) that a new substance may form.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'List evidence (gas, color, temperature, precipitate) that a new substance may form.' WHERE "id" = 'ppg6s8fbe2a36b004b96c245a' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6scfbef1585f8b98ccf14e','ppg6s8fbe2a36b004b96c245a',NULL,'MULTIPLE_CHOICE','Core idea of “Evidence of Chemical Change” is closest to…','["Signs of **chemical change**: new substance clues — color change, gas bubbles (not boiling), precipitate, energy release/absorb, hard-to-reverse.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf939842ca7fea7ee1f14','ppg6s8fbe2a36b004b96c245a',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Evidence of Chemical Change”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s87bef0fa80d279833249','ppg6s8fbe2a36b004b96c245a',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L6. Physical vs Chemical Change Sort (ppg6s12c0dd494bab81b031f7)
UPDATE "Lesson" SET "content" = '# Physical vs Chemical Change Sort

*Grade 6 Science · Unit 2 of 10 · Elements and Chemical Changes · Lesson 6*

## Objective

**I can** classify everyday changes and justify with evidence, not slogans.

## Warm-up (2 minutes)

Quick think: Classify everyday changes and justify with evidence, not slogans — give one example from life or lab.

## Teach

### Big idea

Sort with the identity test: same substance → physical; new substance → chemical.

### Example 1 — Example 1

Crush can = physical; rust = chemical.

### Try this

Burn toast?

**Check:** Chemical.

### Example 2 — Example 2

Second example confirming “Physical vs Chemical Change Sort”: change one variable or context and re-explain.

### Common mistake (this lesson only)

Confusing “Physical vs Chemical Change Sort” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Physical vs Chemical Change Sort”?  
   **Answer:** Classify everyday changes and justify with evidence, not slogans.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Physical vs Chemical Change Sort.”
2. Example for “Physical vs Chemical Change Sort.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Sort with the identity test: same substance → physical; new substance → chemical.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Physical vs Chemical Change Sort” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Physical vs Chemical Change Sort” to a partner in 60 seconds with one diagram.
', "objectives" = '• Classify everyday changes and justify with evidence, not slogans.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Classify everyday changes and justify with evidence, not slogans.' WHERE "id" = 'ppg6s12c0dd494bab81b031f7' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sbcd530d0e951c21ccb4c','ppg6s12c0dd494bab81b031f7',NULL,'MULTIPLE_CHOICE','Core idea of “Physical vs Chemical Change Sort” is closest to…','["Sort with the identity test: same substance → physical; new substance → chemical.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s4661c97e535c9b7d7d9c','ppg6s12c0dd494bab81b031f7',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Physical vs Chemical Change Sort”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s965aeee4cd01daf239db','ppg6s12c0dd494bab81b031f7',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L7. Conservation of Mass Intro (ppg6sdb5bd4be4c928167c6cf)
UPDATE "Lesson" SET "content" = '# Conservation of Mass Intro

*Grade 6 Science · Unit 2 of 10 · Elements and Chemical Changes · Lesson 7*

## Objective

**I can** argue that mass is conserved in closed-system chemical changes at intro level.

## Warm-up (2 minutes)

Quick think: Argue that mass is conserved in closed-system chemical changes at intro level — give one example from life or lab.

## Teach

### Big idea

In a closed system, **mass is conserved** in chemical changes — atoms rearrange, they do not vanish.

### Example 1 — Example 1

Sealed bag reaction: mass before ≈ mass after.

### Try this

If a candle “loses” mass in open air, where did atoms go?

**Check:** To gases that escaped.

### Example 2 — Example 2

Second example confirming “Conservation of Mass Intro”: change one variable or context and re-explain.

### Common mistake (this lesson only)

Confusing “Conservation of Mass Intro” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Conservation of Mass Intro”?  
   **Answer:** Argue that mass is conserved in closed-system chemical changes at intro level.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Conservation of Mass Intro.”
2. Example for “Conservation of Mass Intro.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. In a closed system, **mass is conserved** in chemical changes — atoms rearrange, they do not vanish.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Conservation of Mass Intro” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Conservation of Mass Intro” to a partner in 60 seconds with one diagram.
', "objectives" = '• Argue that mass is conserved in closed-system chemical changes at intro level.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Argue that mass is conserved in closed-system chemical changes at intro level.' WHERE "id" = 'ppg6sdb5bd4be4c928167c6cf' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sdc13745782a574bd02e7','ppg6sdb5bd4be4c928167c6cf',NULL,'MULTIPLE_CHOICE','Core idea of “Conservation of Mass Intro” is closest to…','["In a closed system, **mass is conserved** in chemical changes — atoms rearrange, they do not vanish.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s508565e08ab4b972a0c7','ppg6sdb5bd4be4c928167c6cf',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Conservation of Mass Intro”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s8e0db9be267a932bd714','ppg6sdb5bd4be4c928167c6cf',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L8. Chemical Changes Unit Review (ppg6s34851fe0e137cac4b3b2)
UPDATE "Lesson" SET "content" = '# Chemical Changes Unit Review

*Grade 6 Science · Unit 2 of 10 · Elements and Chemical Changes · Lesson 8*

## Objective

**I can** synthesize element identity, compounds, and chemical-change evidence.

## Warm-up (2 minutes)

Quick think: Synthesize element identity, compounds, and chemical-change evidence — give one example from life or lab.

## Teach

### Big idea

Integrate elements, compounds, signs of chemical change, and conservation of mass.

### Example 1 — Example 1

Quick map: element → compound via chemical change; mass conserved if closed.

### Try this

Apply “Chemical Changes Unit Review.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Chemical Changes Unit Review.”

### Common mistake (this lesson only)

Confusing “Chemical Changes Unit Review” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Chemical Changes Unit Review”?  
   **Answer:** Synthesize element identity, compounds, and chemical-change evidence.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Chemical Changes Unit Review.”
2. Example for “Chemical Changes Unit Review.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Integrate elements, compounds, signs of chemical change, and conservation of mass.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Chemical Changes Unit Review” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Chemical Changes Unit Review” to a partner in 60 seconds with one diagram.
', "objectives" = '• Synthesize element identity, compounds, and chemical-change evidence.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Synthesize element identity, compounds, and chemical-change evidence.' WHERE "id" = 'ppg6s34851fe0e137cac4b3b2' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sa8cacda342e122844815','ppg6s34851fe0e137cac4b3b2',NULL,'MULTIPLE_CHOICE','Core idea of “Chemical Changes Unit Review” is closest to…','["Integrate elements, compounds, signs of chemical change, and conservation of mass.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sc0352645289c4c7b4fda','ppg6s34851fe0e137cac4b3b2',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Chemical Changes Unit Review”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf88efb6a693a1ecbc0f6','ppg6s34851fe0e137cac4b3b2',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L1. What Is a Force? (ppg6sf14ccc9d5d698f163322)
UPDATE "Lesson" SET "content" = '# What Is a Force?

*Grade 6 Science · Unit 3 of 10 · Forces · Lesson 1*

## Objective

**I can** define force as a push or pull; measure force conceptually in newtons.

## Warm-up (2 minutes)

Quick think: Define force as a push or pull; measure force conceptually in newtons — give one example from life or lab.

## Teach

### Big idea

A **force** is a push or pull. Forces have strength and direction.

### Example 1 — Example 1

Kicking a ball applies a force; gravity pulls downward.

### Try this

Can a force exist without contact always?

**Check:** No — some forces are noncontact (gravity, magnetism).

### Example 2 — Example 2

Second example confirming “What Is a Force?”: change one variable or context and re-explain.

### Common mistake (this lesson only)

Confusing “What Is a Force?” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “What Is a Force?”?  
   **Answer:** Define force as a push or pull; measure force conceptually in newtons.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “What Is a Force?.”
2. Example for “What Is a Force?.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. A **force** is a push or pull.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “What Is a Force?” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “What Is a Force?” to a partner in 60 seconds with one diagram.
', "objectives" = '• Define force as a push or pull; measure force conceptually in newtons.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Define force as a push or pull; measure force conceptually in newtons.' WHERE "id" = 'ppg6sf14ccc9d5d698f163322' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sdd2713d2bcdf15dabe68','ppg6sf14ccc9d5d698f163322',NULL,'MULTIPLE_CHOICE','Core idea of “What Is a Force?” is closest to…','["A **force** is a push or pull.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s2206006e4e37141e0297','ppg6sf14ccc9d5d698f163322',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “What Is a Force?”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s68f05a6563ce0a88ad39','ppg6sf14ccc9d5d698f163322',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L2. Contact and Noncontact Forces (ppg6s82439a4754ca50ab1783)
UPDATE "Lesson" SET "content" = '# Contact and Noncontact Forces

*Grade 6 Science · Unit 3 of 10 · Forces · Lesson 2*

## Objective

**I can** classify gravity, friction, magnetism, applied, and normal forces.

## Warm-up (2 minutes)

Quick think: Classify gravity, friction, magnetism, applied, and normal forces — give one example from life or lab.

## Teach

### Big idea

**Contact** forces need touch (friction, normal). **Noncontact** act at a distance (gravity, magnetism).

### Example 1 — Example 1

Magnet pulls a paper clip through air — noncontact.

### Try this

Apply “Contact and Noncontact Forces.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Contact and Noncontact Forces.”

### Common mistake (this lesson only)

Confusing “Contact and Noncontact Forces” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Contact and Noncontact Forces”?  
   **Answer:** Classify gravity, friction, magnetism, applied, and normal forces.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Contact and Noncontact Forces.”
2. Example for “Contact and Noncontact Forces.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Contact** forces need touch (friction, normal).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Contact and Noncontact Forces” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Contact and Noncontact Forces” to a partner in 60 seconds with one diagram.
', "objectives" = '• Classify gravity, friction, magnetism, applied, and normal forces.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Classify gravity, friction, magnetism, applied, and normal forces.' WHERE "id" = 'ppg6s82439a4754ca50ab1783' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s1ebf0f3b8509c624d09a','ppg6s82439a4754ca50ab1783',NULL,'MULTIPLE_CHOICE','Core idea of “Contact and Noncontact Forces” is closest to…','["**Contact** forces need touch (friction, normal).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6see0e42336c25a7591e4d','ppg6s82439a4754ca50ab1783',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Contact and Noncontact Forces”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s120a97d414abc21fd79e','ppg6s82439a4754ca50ab1783',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L3. Gravity Near Earth (ppg6sa3f13fc475fe4db4bd6a)
UPDATE "Lesson" SET "content" = '# Gravity Near Earth

*Grade 6 Science · Unit 3 of 10 · Forces · Lesson 3*

## Objective

**I can** describe gravity as an attractive force toward Earth’s center; connect to weight.

## Warm-up (2 minutes)

Quick think: Describe gravity as an attractive force toward Earth’s center; connect to weight — give one example from life or lab.

## Teach

### Big idea

**Gravity** pulls objects toward Earth’s center; weight is the gravitational force on an object.

### Example 1 — Example 1

Drop a rock and a paper — air resistance differs, gravity still pulls both.

### Try this

Apply “Gravity Near Earth.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Gravity Near Earth.”

### Common mistake (this lesson only)

Confusing “Gravity Near Earth” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Gravity Near Earth”?  
   **Answer:** Describe gravity as an attractive force toward Earth’s center; connect to weight.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Gravity Near Earth.”
2. Example for “Gravity Near Earth.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Gravity** pulls objects toward Earth’s center; weight is the gravitational force on an object.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Gravity Near Earth” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Gravity Near Earth” to a partner in 60 seconds with one diagram.
', "objectives" = '• Describe gravity as an attractive force toward Earth’s center; connect to weight.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Describe gravity as an attractive force toward Earth’s center; connect to weight.' WHERE "id" = 'ppg6sa3f13fc475fe4db4bd6a' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sacff4ac3d217a77c8c09','ppg6sa3f13fc475fe4db4bd6a',NULL,'MULTIPLE_CHOICE','Core idea of “Gravity Near Earth” is closest to…','["**Gravity** pulls objects toward Earth’s center; weight is the gravitational force on an object.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s395aa485070498738bb7','ppg6sa3f13fc475fe4db4bd6a',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Gravity Near Earth”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s84663705a887b93fe818','ppg6sa3f13fc475fe4db4bd6a',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L4. Friction Helps and Hinders (ppg6sb9fb956d373554a9103d)
UPDATE "Lesson" SET "content" = '# Friction Helps and Hinders

*Grade 6 Science · Unit 3 of 10 · Forces · Lesson 4*

## Objective

**I can** explain how friction can start, stop, or slow motion depending on the situation.

## Warm-up (2 minutes)

Quick think: Explain how friction can start, stop, or slow motion depending on the situation — give one example from life or lab.

## Teach

### Big idea

**Friction** opposes sliding; it helps you walk and hinders sliding boxes.

### Example 1 — Example 1

Sneakers increase friction; ice decreases it.

### Try this

Apply “Friction Helps and Hinders.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Friction Helps and Hinders.”

### Common mistake (this lesson only)

Confusing “Friction Helps and Hinders” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Friction Helps and Hinders”?  
   **Answer:** Explain how friction can start, stop, or slow motion depending on the situation.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Friction Helps and Hinders.”
2. Example for “Friction Helps and Hinders.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Friction** opposes sliding; it helps you walk and hinders sliding boxes.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Friction Helps and Hinders” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Friction Helps and Hinders” to a partner in 60 seconds with one diagram.
', "objectives" = '• Explain how friction can start, stop, or slow motion depending on the situation.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Explain how friction can start, stop, or slow motion depending on the situation.' WHERE "id" = 'ppg6sb9fb956d373554a9103d' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s128dad1ecaeb34202aba','ppg6sb9fb956d373554a9103d',NULL,'MULTIPLE_CHOICE','Core idea of “Friction Helps and Hinders” is closest to…','["**Friction** opposes sliding; it helps you walk and hinders sliding boxes.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s6ed30ddea7068732acc0','ppg6sb9fb956d373554a9103d',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Friction Helps and Hinders”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s5da09062e8259499d82c','ppg6sb9fb956d373554a9103d',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L5. Magnetism Basics (ppg6sa85373235fae5ddb5ebf)
UPDATE "Lesson" SET "content" = '# Magnetism Basics

*Grade 6 Science · Unit 3 of 10 · Forces · Lesson 5*

## Objective

**I can** describe magnetic poles and attraction/repulsion without treating magnets as magic.

## Warm-up (2 minutes)

Quick think: Describe magnetic poles and attraction/repulsion without treating magnets as magic — give one example from life or lab.

## Teach

### Big idea

Magnets attract certain metals; poles attract opposite / repel like.

### Example 1 — Example 1

N near S → attract; N near N → repel.

### Try this

Apply “Magnetism Basics.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Magnetism Basics.”

### Common mistake (this lesson only)

Confusing “Magnetism Basics” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Magnetism Basics”?  
   **Answer:** Describe magnetic poles and attraction/repulsion without treating magnets as magic.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Magnetism Basics.”
2. Example for “Magnetism Basics.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Magnets attract certain metals; poles attract opposite / repel like.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Magnetism Basics” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Magnetism Basics” to a partner in 60 seconds with one diagram.
', "objectives" = '• Describe magnetic poles and attraction/repulsion without treating magnets as magic.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Describe magnetic poles and attraction/repulsion without treating magnets as magic.' WHERE "id" = 'ppg6sa85373235fae5ddb5ebf' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sd3519e0724077bebbd75','ppg6sa85373235fae5ddb5ebf',NULL,'MULTIPLE_CHOICE','Core idea of “Magnetism Basics” is closest to…','["Magnets attract certain metals; poles attract opposite / repel like.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s4094a712ca7f4c4123f3','ppg6sa85373235fae5ddb5ebf',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Magnetism Basics”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sffc2602fbb66355ea3db','ppg6sa85373235fae5ddb5ebf',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L6. Balanced and Unbalanced Forces (ppg6s827dea3788ed95c1896e)
UPDATE "Lesson" SET "content" = '# Balanced and Unbalanced Forces

*Grade 6 Science · Unit 3 of 10 · Forces · Lesson 6*

## Objective

**I can** decide whether forces are balanced; predict constant motion vs acceleration.

## Warm-up (2 minutes)

Quick think: Decide whether forces are balanced; predict constant motion vs acceleration — give one example from life or lab.

## Teach

### Big idea

**Balanced** forces → no change in motion; **unbalanced** → speed or direction changes.

### Example 1 — Example 1

Tug-of-war tie = balanced.

### Try this

Apply “Balanced and Unbalanced Forces.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Balanced and Unbalanced Forces.”

### Common mistake (this lesson only)

Confusing “Balanced and Unbalanced Forces” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Balanced and Unbalanced Forces”?  
   **Answer:** Decide whether forces are balanced; predict constant motion vs acceleration.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Balanced and Unbalanced Forces.”
2. Example for “Balanced and Unbalanced Forces.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Balanced** forces → no change in motion; **unbalanced** → speed or direction changes.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Balanced and Unbalanced Forces” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Balanced and Unbalanced Forces” to a partner in 60 seconds with one diagram.
', "objectives" = '• Decide whether forces are balanced; predict constant motion vs acceleration.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Decide whether forces are balanced; predict constant motion vs acceleration.' WHERE "id" = 'ppg6s827dea3788ed95c1896e' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s4d6f05e1270847f4e251','ppg6s827dea3788ed95c1896e',NULL,'MULTIPLE_CHOICE','Core idea of “Balanced and Unbalanced Forces” is closest to…','["**Balanced** forces → no change in motion; **unbalanced** → speed or direction changes.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s00c27b2ad3856d5a35a7','ppg6s827dea3788ed95c1896e',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Balanced and Unbalanced Forces”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sd737860bcf7ad8d2afb9','ppg6s827dea3788ed95c1896e',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L7. Net Force on a Line (ppg6sb80a0c30686dfbeceac1)
UPDATE "Lesson" SET "content" = '# Net Force on a Line

*Grade 6 Science · Unit 3 of 10 · Forces · Lesson 7*

## Objective

**I can** calculate simple one-dimensional net force from force diagrams.

## Warm-up (2 minutes)

Quick think: Calculate simple one-dimensional net force from force diagrams — give one example from life or lab.

## Teach

### Big idea

**Net force** is the combination along a line: same direction add; opposite subtract.

### Example 1 — Example 1

5 N right and 2 N left → 3 N right.

### Try this

Apply “Net Force on a Line.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Net Force on a Line.”

### Common mistake (this lesson only)

Confusing “Net Force on a Line” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Net Force on a Line”?  
   **Answer:** Calculate simple one-dimensional net force from force diagrams.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Net Force on a Line.”
2. Example for “Net Force on a Line.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Net force** is the combination along a line: same direction add; opposite subtract.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Net Force on a Line” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Net Force on a Line” to a partner in 60 seconds with one diagram.
', "objectives" = '• Calculate simple one-dimensional net force from force diagrams.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Calculate simple one-dimensional net force from force diagrams.' WHERE "id" = 'ppg6sb80a0c30686dfbeceac1' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s18eb1e9d3718aa4666f1','ppg6sb80a0c30686dfbeceac1',NULL,'MULTIPLE_CHOICE','Core idea of “Net Force on a Line” is closest to…','["**Net force** is the combination along a line: same direction add; opposite subtract.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sb8d6ed21facf14473dc0','ppg6sb80a0c30686dfbeceac1',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Net Force on a Line”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s647af2b30e2501a3b13e','ppg6sb80a0c30686dfbeceac1',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L8. Action–Reaction Pairs Intro (ppg6s19ed58c5c37944dbc0ee)
UPDATE "Lesson" SET "content" = '# Action–Reaction Pairs Intro

*Grade 6 Science · Unit 3 of 10 · Forces · Lesson 8*

## Objective

**I can** identify force pairs that are equal and opposite on interacting objects.

## Warm-up (2 minutes)

Quick think: Identify force pairs that are equal and opposite on interacting objects — give one example from life or lab.

## Teach

### Big idea

Forces come in pairs: A pushes B, B pushes A equally opposite (intro to Newton’s third).

### Example 1 — Example 1

Jumping: you push Earth, Earth pushes you.

### Try this

Apply “Action–Reaction Pairs Intro.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Action–Reaction Pairs Intro.”

### Common mistake (this lesson only)

Confusing “Action–Reaction Pairs Intro” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Action–Reaction Pairs Intro”?  
   **Answer:** Identify force pairs that are equal and opposite on interacting objects.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Action–Reaction Pairs Intro.”
2. Example for “Action–Reaction Pairs Intro.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Forces come in pairs: A pushes B, B pushes A equally opposite (intro to Newton’s third).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Action–Reaction Pairs Intro” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Action–Reaction Pairs Intro” to a partner in 60 seconds with one diagram.
', "objectives" = '• Identify force pairs that are equal and opposite on interacting objects.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Identify force pairs that are equal and opposite on interacting objects.' WHERE "id" = 'ppg6s19ed58c5c37944dbc0ee' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s3d9cd36b541ca6f884c4','ppg6s19ed58c5c37944dbc0ee',NULL,'MULTIPLE_CHOICE','Core idea of “Action–Reaction Pairs Intro” is closest to…','["Forces come in pairs: A pushes B, B pushes A equally opposite (intro to Newton’s third).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s6539cb797655e9d3e835','ppg6s19ed58c5c37944dbc0ee',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Action–Reaction Pairs Intro”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sa17c5000dbe0d81f52b4','ppg6s19ed58c5c37944dbc0ee',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L9. Forces Unit Synthesis (ppg6s7e1df09a8128596ab5b4)
UPDATE "Lesson" SET "content" = '# Forces Unit Synthesis

*Grade 6 Science · Unit 3 of 10 · Forces · Lesson 9*

## Objective

**I can** explain a real motion story using force types, net force, and evidence.

## Warm-up (2 minutes)

Quick think: Explain a real motion story using force types, net force, and evidence — give one example from life or lab.

## Teach

### Big idea

Connect force types, net force, and motion changes with examples.

### Example 1 — Example 1

Unbalanced net force changes motion; label directions.

### Try this

Apply “Forces Unit Synthesis.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Forces Unit Synthesis.”

### Common mistake (this lesson only)

Confusing “Forces Unit Synthesis” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Forces Unit Synthesis”?  
   **Answer:** Explain a real motion story using force types, net force, and evidence.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Forces Unit Synthesis.”
2. Example for “Forces Unit Synthesis.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Connect force types, net force, and motion changes with examples.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Forces Unit Synthesis” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Forces Unit Synthesis” to a partner in 60 seconds with one diagram.
', "objectives" = '• Explain a real motion story using force types, net force, and evidence.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Explain a real motion story using force types, net force, and evidence.' WHERE "id" = 'ppg6s7e1df09a8128596ab5b4' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s9bfa9857ac52ef3b654a','ppg6s7e1df09a8128596ab5b4',NULL,'MULTIPLE_CHOICE','Core idea of “Forces Unit Synthesis” is closest to…','["Connect force types, net force, and motion changes with examples.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s8e5ad5d9d3f9cfb07dda','ppg6s7e1df09a8128596ab5b4',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Forces Unit Synthesis”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s007dbe46c2d830a611ab','ppg6s7e1df09a8128596ab5b4',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L1. Energy as the Ability to Cause Change (ppg6s8755981153c0c2d075a1)
UPDATE "Lesson" SET "content" = '# Energy as the Ability to Cause Change

*Grade 6 Science · Unit 4 of 10 · Energy · Lesson 1*

## Objective

**I can** define energy and distinguish forms without inventing energy from nowhere.

## Warm-up (2 minutes)

Quick think: Define energy and distinguish forms without inventing energy from nowhere — give one example from life or lab.

## Teach

### Big idea

**Energy** is the ability to cause change or do work (Grade 6 framing).

### Example 1 — Example 1

A moving ball can knock pins — energy in motion.

### Try this

Apply “Energy as the Ability to Cause Change.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Energy as the Ability to Cause Change.”

### Common mistake (this lesson only)

Confusing “Energy as the Ability to Cause Change” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Energy as the Ability to Cause Change”?  
   **Answer:** Define energy and distinguish forms without inventing energy from nowhere.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Energy as the Ability to Cause Change.”
2. Example for “Energy as the Ability to Cause Change.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Energy** is the ability to cause change or do work (Grade 6 framing).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Energy as the Ability to Cause Change” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Energy as the Ability to Cause Change” to a partner in 60 seconds with one diagram.
', "objectives" = '• Define energy and distinguish forms without inventing energy from nowhere.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Define energy and distinguish forms without inventing energy from nowhere.' WHERE "id" = 'ppg6s8755981153c0c2d075a1' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sceecce15078cd34b82bb','ppg6s8755981153c0c2d075a1',NULL,'MULTIPLE_CHOICE','Core idea of “Energy as the Ability to Cause Change” is closest to…','["**Energy** is the ability to cause change or do work (Grade 6 framing).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s1becccea3a76984c1a84','ppg6s8755981153c0c2d075a1',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Energy as the Ability to Cause Change”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s47d6acb3b4e62774343c','ppg6s8755981153c0c2d075a1',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L2. Kinetic Energy (ppg6s119a81204f109871568a)
UPDATE "Lesson" SET "content" = '# Kinetic Energy

*Grade 6 Science · Unit 4 of 10 · Energy · Lesson 2*

## Objective

**I can** relate kinetic energy to mass and speed qualitatively.

## Warm-up (2 minutes)

Quick think: Relate kinetic energy to mass and speed qualitatively — give one example from life or lab.

## Teach

### Big idea

**Kinetic energy** is energy of motion; faster or more mass → more KE (qualitative).

### Example 1 — Example 1

Sprint vs walk.

### Try this

Apply “Kinetic Energy.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Kinetic Energy.”

### Common mistake (this lesson only)

Confusing “Kinetic Energy” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Kinetic Energy”?  
   **Answer:** Relate kinetic energy to mass and speed qualitatively.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Kinetic Energy.”
2. Example for “Kinetic Energy.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Kinetic energy** is energy of motion; faster or more mass → more KE (qualitative).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Kinetic Energy” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Kinetic Energy” to a partner in 60 seconds with one diagram.
', "objectives" = '• Relate kinetic energy to mass and speed qualitatively.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Relate kinetic energy to mass and speed qualitatively.' WHERE "id" = 'ppg6s119a81204f109871568a' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s00c4ef806ba2f4cc9a4c','ppg6s119a81204f109871568a',NULL,'MULTIPLE_CHOICE','Core idea of “Kinetic Energy” is closest to…','["**Kinetic energy** is energy of motion; faster or more mass → more KE (qualitative).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s5374b4611019d7a195ec','ppg6s119a81204f109871568a',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Kinetic Energy”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s6c5b6ae1727c82708d1b','ppg6s119a81204f109871568a',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L3. Gravitational Potential Energy (ppg6se0285aa1586ccf9a67e3)
UPDATE "Lesson" SET "content" = '# Gravitational Potential Energy

*Grade 6 Science · Unit 4 of 10 · Energy · Lesson 3*

## Objective

**I can** relate GPE to height and mass in everyday contexts.

## Warm-up (2 minutes)

Quick think: Relate GPE to height and mass in everyday contexts — give one example from life or lab.

## Teach

### Big idea

**GPE** depends on mass, gravity, and height above a reference.

### Example 1 — Example 1

Book on a high shelf has more GPE than on the floor.

### Try this

Apply “Gravitational Potential Energy.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Gravitational Potential Energy.”

### Common mistake (this lesson only)

Confusing “Gravitational Potential Energy” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Gravitational Potential Energy”?  
   **Answer:** Relate GPE to height and mass in everyday contexts.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Gravitational Potential Energy.”
2. Example for “Gravitational Potential Energy.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **GPE** depends on mass, gravity, and height above a reference.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Gravitational Potential Energy” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Gravitational Potential Energy” to a partner in 60 seconds with one diagram.
', "objectives" = '• Relate GPE to height and mass in everyday contexts.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Relate GPE to height and mass in everyday contexts.' WHERE "id" = 'ppg6se0285aa1586ccf9a67e3' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6se5d7d351befae2251c3a','ppg6se0285aa1586ccf9a67e3',NULL,'MULTIPLE_CHOICE','Core idea of “Gravitational Potential Energy” is closest to…','["**GPE** depends on mass, gravity, and height above a reference.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s719311cb167040d1720a','ppg6se0285aa1586ccf9a67e3',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Gravitational Potential Energy”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6se1566712a828b207a5c6','ppg6se0285aa1586ccf9a67e3',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L4. Elastic and Chemical Potential Energy (ppg6s78f198b0d9d3916392a4)
UPDATE "Lesson" SET "content" = '# Elastic and Chemical Potential Energy

*Grade 6 Science · Unit 4 of 10 · Energy · Lesson 4*

## Objective

**I can** identify stored energy in springs, rubber bands, food, and fuels at intro level.

## Warm-up (2 minutes)

Quick think: Identify stored energy in springs, rubber bands, food, and fuels at intro level — give one example from life or lab.

## Teach

### Big idea

Stored energy in stretched springs (**elastic**) or in chemical bonds/food/fuel (**chemical**).

### Example 1 — Example 1

Drawn bow; battery; sandwich.

### Try this

Apply “Elastic and Chemical Potential Energy.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Elastic and Chemical Potential Energy.”

### Common mistake (this lesson only)

Confusing “Elastic and Chemical Potential Energy” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Elastic and Chemical Potential Energy”?  
   **Answer:** Identify stored energy in springs, rubber bands, food, and fuels at intro level.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Elastic and Chemical Potential Energy.”
2. Example for “Elastic and Chemical Potential Energy.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Stored energy in stretched springs (**elastic**) or in chemical bonds/food/fuel (**chemical**).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Elastic and Chemical Potential Energy” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Elastic and Chemical Potential Energy” to a partner in 60 seconds with one diagram.
', "objectives" = '• Identify stored energy in springs, rubber bands, food, and fuels at intro level.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Identify stored energy in springs, rubber bands, food, and fuels at intro level.' WHERE "id" = 'ppg6s78f198b0d9d3916392a4' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sa021be478b8b0f314922','ppg6s78f198b0d9d3916392a4',NULL,'MULTIPLE_CHOICE','Core idea of “Elastic and Chemical Potential Energy” is closest to…','["Stored energy in stretched springs (**elastic**) or in chemical bonds/food/fuel (**chemical**).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sda14e298432ff526bd6d','ppg6s78f198b0d9d3916392a4',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Elastic and Chemical Potential Energy”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s6a8650ba70fa05f374ee','ppg6s78f198b0d9d3916392a4',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L5. Energy Transfers and Transformations (ppg6s52db904977957d4849fb)
UPDATE "Lesson" SET "content" = '# Energy Transfers and Transformations

*Grade 6 Science · Unit 4 of 10 · Energy · Lesson 5*

## Objective

**I can** track energy as it transfers between objects or transforms between forms.

## Warm-up (2 minutes)

Quick think: Track energy as it transfers between objects or transforms between forms — give one example from life or lab.

## Teach

### Big idea

Energy can **transfer** between objects and **transform** forms (KE↔PE) but totals conserve in ideal closed systems.

### Example 1 — Example 1

Pendulum: PE at top ↔ KE at bottom.

### Try this

Apply “Energy Transfers and Transformations.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Energy Transfers and Transformations.”

### Common mistake (this lesson only)

Confusing “Energy Transfers and Transformations” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Energy Transfers and Transformations”?  
   **Answer:** Track energy as it transfers between objects or transforms between forms.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Energy Transfers and Transformations.”
2. Example for “Energy Transfers and Transformations.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Energy can **transfer** between objects and **transform** forms (KE↔PE) but totals conserve in ideal closed systems.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Energy Transfers and Transformations” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Energy Transfers and Transformations” to a partner in 60 seconds with one diagram.
', "objectives" = '• Track energy as it transfers between objects or transforms between forms.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Track energy as it transfers between objects or transforms between forms.' WHERE "id" = 'ppg6s52db904977957d4849fb' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sbcbd404cd6ca446f47bc','ppg6s52db904977957d4849fb',NULL,'MULTIPLE_CHOICE','Core idea of “Energy Transfers and Transformations” is closest to…','["Energy can **transfer** between objects and **transform** forms (KE↔PE) but totals conserve in ideal closed systems.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sd7625577a40e5c77c3d6','ppg6s52db904977957d4849fb',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Energy Transfers and Transformations”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sb254963edeff2832055c','ppg6s52db904977957d4849fb',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L6. Conservation of Energy Habit (ppg6s9517f118746c78f2cfdf)
UPDATE "Lesson" SET "content" = '# Conservation of Energy Habit

*Grade 6 Science · Unit 4 of 10 · Energy · Lesson 6*

## Objective

**I can** use conservation language: energy changes form; totals stay accountable in a system.

## Warm-up (2 minutes)

Quick think: Use conservation language: energy changes form; totals stay accountable in a system — give one example from life or lab.

## Teach

### Big idea

Track energy: it does not appear from nowhere; account for heat/sound when “lost.”

### Example 1 — Example 1

Sliding block warms — KE to thermal.

### Try this

Apply “Conservation of Energy Habit.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Conservation of Energy Habit.”

### Common mistake (this lesson only)

Confusing “Conservation of Energy Habit” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Conservation of Energy Habit”?  
   **Answer:** Use conservation language: energy changes form; totals stay accountable in a system.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Conservation of Energy Habit.”
2. Example for “Conservation of Energy Habit.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Track energy: it does not appear from nowhere; account for heat/sound when “lost.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Conservation of Energy Habit” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Conservation of Energy Habit” to a partner in 60 seconds with one diagram.
', "objectives" = '• Use conservation language: energy changes form; totals stay accountable in a system.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Use conservation language: energy changes form; totals stay accountable in a system.' WHERE "id" = 'ppg6s9517f118746c78f2cfdf' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s13f12a90eb39c22e73ff','ppg6s9517f118746c78f2cfdf',NULL,'MULTIPLE_CHOICE','Core idea of “Conservation of Energy Habit” is closest to…','["Track energy: it does not appear from nowhere; account for heat/sound when “lost.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s736abba89564fb34e492','ppg6s9517f118746c78f2cfdf',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Conservation of Energy Habit”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s4d67e801f19ccca4353d','ppg6s9517f118746c78f2cfdf',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L7. Waves Transfer Energy (ppg6sa215770ce55db475b397)
UPDATE "Lesson" SET "content" = '# Waves Transfer Energy

*Grade 6 Science · Unit 4 of 10 · Energy · Lesson 7*

## Objective

**I can** describe waves as energy movers that do not permanently transport the medium.

## Warm-up (2 minutes)

Quick think: Describe waves as energy movers that do not permanently transport the medium — give one example from life or lab.

## Teach

### Big idea

**Waves** transfer energy without transferring matter permanently (ripples).

### Example 1 — Example 1

Sound waves move energy through air.

### Try this

Apply “Waves Transfer Energy.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Waves Transfer Energy.”

### Common mistake (this lesson only)

Confusing “Waves Transfer Energy” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Waves Transfer Energy”?  
   **Answer:** Describe waves as energy movers that do not permanently transport the medium.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Waves Transfer Energy.”
2. Example for “Waves Transfer Energy.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Waves** transfer energy without transferring matter permanently (ripples).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Waves Transfer Energy” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Waves Transfer Energy” to a partner in 60 seconds with one diagram.
', "objectives" = '• Describe waves as energy movers that do not permanently transport the medium.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Describe waves as energy movers that do not permanently transport the medium.' WHERE "id" = 'ppg6sa215770ce55db475b397' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s8521b1a426c9ef80abc0','ppg6sa215770ce55db475b397',NULL,'MULTIPLE_CHOICE','Core idea of “Waves Transfer Energy” is closest to…','["**Waves** transfer energy without transferring matter permanently (ripples).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s67c8447e6b1fccb37e39','ppg6sa215770ce55db475b397',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Waves Transfer Energy”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sdd5afc1d695abbe7ac01','ppg6sa215770ce55db475b397',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L8. Energy Unit Review (ppg6s1e87f1611e7bd1488865)
UPDATE "Lesson" SET "content" = '# Energy Unit Review

*Grade 6 Science · Unit 4 of 10 · Energy · Lesson 8*

## Objective

**I can** mixed practice connecting KE, PE, transfers, and conservation language.

## Warm-up (2 minutes)

Quick think: Mixed practice connecting KE, PE, transfers, and conservation language — give one example from life or lab.

## Teach

### Big idea

Map KE, PE types, transfers, conservation language, waves.

### Example 1 — Example 1

One story with labels.

### Try this

Apply “Energy Unit Review.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Energy Unit Review.”

### Common mistake (this lesson only)

Confusing “Energy Unit Review” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Energy Unit Review”?  
   **Answer:** Mixed practice connecting KE, PE, transfers, and conservation language.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Energy Unit Review.”
2. Example for “Energy Unit Review.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Map KE, PE types, transfers, conservation language, waves.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Energy Unit Review” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Energy Unit Review” to a partner in 60 seconds with one diagram.
', "objectives" = '• Mixed practice connecting KE, PE, transfers, and conservation language.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Mixed practice connecting KE, PE, transfers, and conservation language.' WHERE "id" = 'ppg6s1e87f1611e7bd1488865' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6scc434671fb5894ad5758','ppg6s1e87f1611e7bd1488865',NULL,'MULTIPLE_CHOICE','Core idea of “Energy Unit Review” is closest to…','["Map KE, PE types, transfers, conservation language, waves.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6seec44b77b727c5aaf9b4','ppg6s1e87f1611e7bd1488865',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Energy Unit Review”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s38cbc65107bad6164ecb','ppg6s1e87f1611e7bd1488865',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L1. Earth’s Place in the Solar System (ppg6s87edeb3f59a0dbd47680)
UPDATE "Lesson" SET "content" = '# Earth’s Place in the Solar System

*Grade 6 Science · Unit 5 of 10 · Earth-Sun-Moon System · Lesson 1*

## Objective

**I can** locate Earth among the Sun and planets; scale ideas with humility about distances.

## Warm-up (2 minutes)

Quick think: Locate Earth among the Sun and planets; scale ideas with humility about distances — give one example from life or lab.

## Teach

### Big idea

Earth orbits the Sun; Moon orbits Earth; scale is huge compared to classroom models.

### Example 1 — Example 1

Not to scale drawings still teach order.

### Try this

Apply “Earth’s Place in the Solar System.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Earth’s Place in the Solar System.”

### Common mistake (this lesson only)

Confusing “Earth’s Place in the Solar System” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Earth’s Place in the Solar System”?  
   **Answer:** Locate Earth among the Sun and planets; scale ideas with humility about distances.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Earth’s Place in the Solar System.”
2. Example for “Earth’s Place in the Solar System.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Earth orbits the Sun; Moon orbits Earth; scale is huge compared to classroom models.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Earth’s Place in the Solar System” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Earth’s Place in the Solar System” to a partner in 60 seconds with one diagram.
', "objectives" = '• Locate Earth among the Sun and planets; scale ideas with humility about distances.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Locate Earth among the Sun and planets; scale ideas with humility about distances.' WHERE "id" = 'ppg6s87edeb3f59a0dbd47680' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s0c669e2976a25237eb0d','ppg6s87edeb3f59a0dbd47680',NULL,'MULTIPLE_CHOICE','Core idea of “Earth’s Place in the Solar System” is closest to…','["Earth orbits the Sun; Moon orbits Earth; scale is huge compared to classroom models.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s8be11052468a2ddafe5a','ppg6s87edeb3f59a0dbd47680',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Earth’s Place in the Solar System”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s579a9b3bdb31f912ee8a','ppg6s87edeb3f59a0dbd47680',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L2. Day and Night (ppg6s6a27c83e0464a466a15b)
UPDATE "Lesson" SET "content" = '# Day and Night

*Grade 6 Science · Unit 5 of 10 · Earth-Sun-Moon System · Lesson 2*

## Objective

**I can** explain day/night using Earth’s rotation — not the Sun “going away.”

## Warm-up (2 minutes)

Quick think: Explain day/night using Earth’s rotation — not the Sun “going away.” — give one example from life or lab.

## Teach

### Big idea

Earth **rotates** on its axis ≈24 h → day/night.

### Example 1 — Example 1

Sun “rises” because Earth turns.

### Try this

Apply “Day and Night.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Day and Night.”

### Common mistake (this lesson only)

Confusing “Day and Night” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Day and Night”?  
   **Answer:** Explain day/night using Earth’s rotation — not the Sun “going away.”

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Day and Night.”
2. Example for “Day and Night.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Earth **rotates** on its axis ≈24 h → day/night.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Day and Night” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Day and Night” to a partner in 60 seconds with one diagram.
', "objectives" = '• Explain day/night using Earth’s rotation — not the Sun “going away.”
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Explain day/night using Earth’s rotation — not the Sun “going away.”' WHERE "id" = 'ppg6s6a27c83e0464a466a15b' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6se6a873ea4e99ed907e65','ppg6s6a27c83e0464a466a15b',NULL,'MULTIPLE_CHOICE','Core idea of “Day and Night” is closest to…','["Earth **rotates** on its axis ≈24 h → day/night.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s173730452c1f927411ef','ppg6s6a27c83e0464a466a15b',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Day and Night”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s91083d70a6661b8b940f','ppg6s6a27c83e0464a466a15b',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L3. Seasons and Tilt (ppg6s8cc89e2042f15ea69738)
UPDATE "Lesson" SET "content" = '# Seasons and Tilt

*Grade 6 Science · Unit 5 of 10 · Earth-Sun-Moon System · Lesson 3*

## Objective

**I can** connect seasons to Earth’s tilt and orbit, not to distance-from-Sun myths.

## Warm-up (2 minutes)

Quick think: Connect seasons to Earth’s tilt and orbit, not to distance-from-Sun myths — give one example from life or lab.

## Teach

### Big idea

**Tilt** + orbit → seasons; not primarily distance from Sun.

### Example 1 — Example 1

Summer: your hemisphere tilts toward Sun — longer days / more direct rays.

### Try this

Apply “Seasons and Tilt.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Seasons and Tilt.”

### Common mistake (this lesson only)

Confusing “Seasons and Tilt” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Seasons and Tilt”?  
   **Answer:** Connect seasons to Earth’s tilt and orbit, not to distance-from-Sun myths.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Seasons and Tilt.”
2. Example for “Seasons and Tilt.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Tilt** + orbit → seasons; not primarily distance from Sun.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Seasons and Tilt” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Seasons and Tilt” to a partner in 60 seconds with one diagram.
', "objectives" = '• Connect seasons to Earth’s tilt and orbit, not to distance-from-Sun myths.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Connect seasons to Earth’s tilt and orbit, not to distance-from-Sun myths.' WHERE "id" = 'ppg6s8cc89e2042f15ea69738' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s92d8458071b25ff88266','ppg6s8cc89e2042f15ea69738',NULL,'MULTIPLE_CHOICE','Core idea of “Seasons and Tilt” is closest to…','["**Tilt** + orbit → seasons; not primarily distance from Sun.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s362bc423275bd01eaa10','ppg6s8cc89e2042f15ea69738',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Seasons and Tilt”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s9ea887158d7f72133a7d','ppg6s8cc89e2042f15ea69738',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L4. Moon Phases from Earth (ppg6s4db89ab6d4eb7307eb26)
UPDATE "Lesson" SET "content" = '# Moon Phases from Earth

*Grade 6 Science · Unit 5 of 10 · Earth-Sun-Moon System · Lesson 4*

## Objective

**I can** predict moon phase patterns from relative positions of Earth, Moon, and Sun.

## Warm-up (2 minutes)

Quick think: Predict moon phase patterns from relative positions of Earth, Moon, and Sun — give one example from life or lab.

## Teach

### Big idea

Phases are about how much of the lit half we see as Moon orbits Earth.

### Example 1 — Example 1

New → crescent → quarter → full…

### Try this

Apply “Moon Phases from Earth.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Moon Phases from Earth.”

### Common mistake (this lesson only)

Confusing “Moon Phases from Earth” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Moon Phases from Earth”?  
   **Answer:** Predict moon phase patterns from relative positions of Earth, Moon, and Sun.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Moon Phases from Earth.”
2. Example for “Moon Phases from Earth.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Phases are about how much of the lit half we see as Moon orbits Earth.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Moon Phases from Earth” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Moon Phases from Earth” to a partner in 60 seconds with one diagram.
', "objectives" = '• Predict moon phase patterns from relative positions of Earth, Moon, and Sun.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Predict moon phase patterns from relative positions of Earth, Moon, and Sun.' WHERE "id" = 'ppg6s4db89ab6d4eb7307eb26' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sddf3e43bc6a6800ff354','ppg6s4db89ab6d4eb7307eb26',NULL,'MULTIPLE_CHOICE','Core idea of “Moon Phases from Earth” is closest to…','["Phases are about how much of the lit half we see as Moon orbits Earth.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sa8bb5f43878130b7b2af','ppg6s4db89ab6d4eb7307eb26',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Moon Phases from Earth”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s5af741d99ab9e95dc060','ppg6s4db89ab6d4eb7307eb26',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L5. Solar and Lunar Eclipses (ppg6sb719172804e24d959ead)
UPDATE "Lesson" SET "content" = '# Solar and Lunar Eclipses

*Grade 6 Science · Unit 5 of 10 · Earth-Sun-Moon System · Lesson 5*

## Objective

**I can** model why eclipses are rare using shadow geometry.

## Warm-up (2 minutes)

Quick think: Model why eclipses are rare using shadow geometry — give one example from life or lab.

## Teach

### Big idea

**Solar:** Moon blocks Sun for Earth viewers. **Lunar:** Earth shadow on Moon.

### Example 1 — Example 1

Rare lineup of Sun–Moon–Earth.

### Try this

Apply “Solar and Lunar Eclipses.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Solar and Lunar Eclipses.”

### Common mistake (this lesson only)

Confusing “Solar and Lunar Eclipses” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Solar and Lunar Eclipses”?  
   **Answer:** Model why eclipses are rare using shadow geometry.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Solar and Lunar Eclipses.”
2. Example for “Solar and Lunar Eclipses.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Solar:** Moon blocks Sun for Earth viewers.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Solar and Lunar Eclipses” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Solar and Lunar Eclipses” to a partner in 60 seconds with one diagram.
', "objectives" = '• Model why eclipses are rare using shadow geometry.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Model why eclipses are rare using shadow geometry.' WHERE "id" = 'ppg6sb719172804e24d959ead' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s382e84896944cc3c7d43','ppg6sb719172804e24d959ead',NULL,'MULTIPLE_CHOICE','Core idea of “Solar and Lunar Eclipses” is closest to…','["**Solar:** Moon blocks Sun for Earth viewers.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s6a30df261aa94f73ca2e','ppg6sb719172804e24d959ead',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Solar and Lunar Eclipses”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sa6e0e16519acf688e566','ppg6sb719172804e24d959ead',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L6. Tides Intro (ppg6sb9debe699aa2a3c86d07)
UPDATE "Lesson" SET "content" = '# Tides Intro

*Grade 6 Science · Unit 5 of 10 · Earth-Sun-Moon System · Lesson 6*

## Objective

**I can** connect tidal patterns to the Moon’s gravitational influence at an intro level.

## Warm-up (2 minutes)

Quick think: Connect tidal patterns to the Moon’s gravitational influence at an intro level — give one example from life or lab.

## Teach

### Big idea

Moon’s gravity (and Sun’s) tug ocean water → **tides**.

### Example 1 — Example 1

Two high/two low roughly per day in many places.

### Try this

Apply “Tides Intro.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Tides Intro.”

### Common mistake (this lesson only)

Confusing “Tides Intro” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Tides Intro”?  
   **Answer:** Connect tidal patterns to the Moon’s gravitational influence at an intro level.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Tides Intro.”
2. Example for “Tides Intro.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Moon’s gravity (and Sun’s) tug ocean water → **tides**.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Tides Intro” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Tides Intro” to a partner in 60 seconds with one diagram.
', "objectives" = '• Connect tidal patterns to the Moon’s gravitational influence at an intro level.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Connect tidal patterns to the Moon’s gravitational influence at an intro level.' WHERE "id" = 'ppg6sb9debe699aa2a3c86d07' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s719f2af8cfd51e9e2dce','ppg6sb9debe699aa2a3c86d07',NULL,'MULTIPLE_CHOICE','Core idea of “Tides Intro” is closest to…','["Moon’s gravity (and Sun’s) tug ocean water → **tides**.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6saef31d3f33167354b8c5','ppg6sb9debe699aa2a3c86d07',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Tides Intro”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sb67f79fd3db606413ede','ppg6sb9debe699aa2a3c86d07',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L7. Scale Models and Limits (ppg6s2319ff8969679bdef1e2)
UPDATE "Lesson" SET "content" = '# Scale Models and Limits

*Grade 6 Science · Unit 5 of 10 · Earth-Sun-Moon System · Lesson 7*

## Objective

**I can** critique classroom models: what they show well and what they distort.

## Warm-up (2 minutes)

Quick think: Critique classroom models: what they show well and what they distort — give one example from life or lab.

## Teach

### Big idea

Models help but distort size/distance; always name what is inaccurate.

### Example 1 — Example 1

Classroom orbit demo is not to scale.

### Try this

Apply “Scale Models and Limits.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Scale Models and Limits.”

### Common mistake (this lesson only)

Confusing “Scale Models and Limits” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Scale Models and Limits”?  
   **Answer:** Critique classroom models: what they show well and what they distort.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Scale Models and Limits.”
2. Example for “Scale Models and Limits.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Models help but distort size/distance; always name what is inaccurate.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Scale Models and Limits” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Scale Models and Limits” to a partner in 60 seconds with one diagram.
', "objectives" = '• Critique classroom models: what they show well and what they distort.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Critique classroom models: what they show well and what they distort.' WHERE "id" = 'ppg6s2319ff8969679bdef1e2' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sabe074cb6ec27b5905ba','ppg6s2319ff8969679bdef1e2',NULL,'MULTIPLE_CHOICE','Core idea of “Scale Models and Limits” is closest to…','["Models help but distort size/distance; always name what is inaccurate.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s2dfd5f4f9aa5d2d9b80a','ppg6s2319ff8969679bdef1e2',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Scale Models and Limits”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s0dda35689480636a54b0','ppg6s2319ff8969679bdef1e2',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L8. Earth-Sun-Moon Unit Synthesis (ppg6s8d3b0486ccb9004ce668)
UPDATE "Lesson" SET "content" = '# Earth-Sun-Moon Unit Synthesis

*Grade 6 Science · Unit 5 of 10 · Earth-Sun-Moon System · Lesson 8*

## Objective

**I can** explain one phenomenon (season, phase, or eclipse) with a labeled model + CER.

## Warm-up (2 minutes)

Quick think: Explain one phenomenon (season, phase, or eclipse) with a labeled model + CER — give one example from life or lab.

## Teach

### Big idea

Connect rotation, revolution, tilt, phases, eclipses, tides.

### Example 1 — Example 1

One cause map.

### Try this

Apply “Earth-Sun-Moon Unit Synthesis.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Earth-Sun-Moon Unit Synthesis.”

### Common mistake (this lesson only)

Confusing “Earth-Sun-Moon Unit Synthesis” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Earth-Sun-Moon Unit Synthesis”?  
   **Answer:** Explain one phenomenon (season, phase, or eclipse) with a labeled model + CER.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Earth-Sun-Moon Unit Synthesis.”
2. Example for “Earth-Sun-Moon Unit Synthesis.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Connect rotation, revolution, tilt, phases, eclipses, tides.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Earth-Sun-Moon Unit Synthesis” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Earth-Sun-Moon Unit Synthesis” to a partner in 60 seconds with one diagram.
', "objectives" = '• Explain one phenomenon (season, phase, or eclipse) with a labeled model + CER.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Explain one phenomenon (season, phase, or eclipse) with a labeled model + CER.' WHERE "id" = 'ppg6s8d3b0486ccb9004ce668' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s644aeb4d3f0f295576c7','ppg6s8d3b0486ccb9004ce668',NULL,'MULTIPLE_CHOICE','Core idea of “Earth-Sun-Moon Unit Synthesis” is closest to…','["Connect rotation, revolution, tilt, phases, eclipses, tides.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s0897af714738a4da19f7','ppg6s8d3b0486ccb9004ce668',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Earth-Sun-Moon Unit Synthesis”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s137fade26cc3f1e916c5','ppg6s8d3b0486ccb9004ce668',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L1. Earth’s Spheres Overview (ppg6s321e7545e991daec02a1)
UPDATE "Lesson" SET "content" = '# Earth’s Spheres Overview

*Grade 6 Science · Unit 6 of 10 · Earth’s Systems and Structure · Lesson 1*

## Objective

**I can** name geosphere, hydrosphere, atmosphere, and biosphere and give one interaction.

## Warm-up (2 minutes)

Quick think: Name geosphere, hydrosphere, atmosphere, and biosphere and give one interaction — give one example from life or lab.

## Teach

### Big idea

**Geo/hydro/atmo/bio** spheres interact.

### Example 1 — Example 1

Rain (hydro) weathers rock (geo).

### Try this

Apply “Earth’s Spheres Overview.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Earth’s Spheres Overview.”

### Common mistake (this lesson only)

Confusing “Earth’s Spheres Overview” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Earth’s Spheres Overview”?  
   **Answer:** Name geosphere, hydrosphere, atmosphere, and biosphere and give one interaction.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Earth’s Spheres Overview.”
2. Example for “Earth’s Spheres Overview.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Geo/hydro/atmo/bio** spheres interact.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Earth’s Spheres Overview” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Earth’s Spheres Overview” to a partner in 60 seconds with one diagram.
', "objectives" = '• Name geosphere, hydrosphere, atmosphere, and biosphere and give one interaction.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Name geosphere, hydrosphere, atmosphere, and biosphere and give one interaction.' WHERE "id" = 'ppg6s321e7545e991daec02a1' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s6bab764f6988db929bba','ppg6s321e7545e991daec02a1',NULL,'MULTIPLE_CHOICE','Core idea of “Earth’s Spheres Overview” is closest to…','["**Geo/hydro/atmo/bio** spheres interact.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s2a9ed4274ae2d9a75e8e','ppg6s321e7545e991daec02a1',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Earth’s Spheres Overview”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf6e61ff95b74727a3810','ppg6s321e7545e991daec02a1',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L2. Layers of Earth (Intro) (ppg6s92713548ef544789a5af)
UPDATE "Lesson" SET "content" = '# Layers of Earth (Intro)

*Grade 6 Science · Unit 6 of 10 · Earth’s Systems and Structure · Lesson 2*

## Objective

**I can** describe crust, mantle, and core at a Grade 6 model level.

## Warm-up (2 minutes)

Quick think: Describe crust, mantle, and core at a Grade 6 model level — give one example from life or lab.

## Teach

### Big idea

Crust, mantle, outer core, inner core — increasing depth/pressure.

### Example 1 — Example 1

Crust is thin compared to whole Earth.

### Try this

Apply “Layers of Earth (Intro).”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Layers of Earth (Intro).”

### Common mistake (this lesson only)

Confusing “Layers of Earth (Intro)” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Layers of Earth (Intro)”?  
   **Answer:** Describe crust, mantle, and core at a Grade 6 model level.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Layers of Earth (Intro).”
2. Example for “Layers of Earth (Intro).”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Crust, mantle, outer core, inner core — increasing depth/pressure.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Layers of Earth (Intro)” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Layers of Earth (Intro)” to a partner in 60 seconds with one diagram.
', "objectives" = '• Describe crust, mantle, and core at a Grade 6 model level.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Describe crust, mantle, and core at a Grade 6 model level.' WHERE "id" = 'ppg6s92713548ef544789a5af' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s8b2072eea1e2b588a934','ppg6s92713548ef544789a5af',NULL,'MULTIPLE_CHOICE','Core idea of “Layers of Earth (Intro)” is closest to…','["Crust, mantle, outer core, inner core — increasing depth/pressure.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s4a62bc399a2ead3f2f18','ppg6s92713548ef544789a5af',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Layers of Earth (Intro)”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sc143d0f32524cd02c5c7','ppg6s92713548ef544789a5af',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L3. Rocks and the Rock Cycle (ppg6sdad754e8102929664d73)
UPDATE "Lesson" SET "content" = '# Rocks and the Rock Cycle

*Grade 6 Science · Unit 6 of 10 · Earth’s Systems and Structure · Lesson 3*

## Objective

**I can** connect igneous, sedimentary, and metamorphic rocks through processes.

## Warm-up (2 minutes)

Quick think: Connect igneous, sedimentary, and metamorphic rocks through processes — give one example from life or lab.

## Teach

### Big idea

Igneous, sedimentary, metamorphic cycle via melt, weather, pressure/heat.

### Example 1 — Example 1

Lava cools → igneous.

### Try this

Apply “Rocks and the Rock Cycle.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Rocks and the Rock Cycle.”

### Common mistake (this lesson only)

Confusing “Rocks and the Rock Cycle” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Rocks and the Rock Cycle”?  
   **Answer:** Connect igneous, sedimentary, and metamorphic rocks through processes.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Rocks and the Rock Cycle.”
2. Example for “Rocks and the Rock Cycle.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Igneous, sedimentary, metamorphic cycle via melt, weather, pressure/heat.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Rocks and the Rock Cycle” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Rocks and the Rock Cycle” to a partner in 60 seconds with one diagram.
', "objectives" = '• Connect igneous, sedimentary, and metamorphic rocks through processes.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Connect igneous, sedimentary, and metamorphic rocks through processes.' WHERE "id" = 'ppg6sdad754e8102929664d73' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s4d1fc4f76a925c20505c','ppg6sdad754e8102929664d73',NULL,'MULTIPLE_CHOICE','Core idea of “Rocks and the Rock Cycle” is closest to…','["Igneous, sedimentary, metamorphic cycle via melt, weather, pressure/heat.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s45436e717f4b9dfc1a36','ppg6sdad754e8102929664d73',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Rocks and the Rock Cycle”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sc24ddad346134e91c29d','ppg6sdad754e8102929664d73',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L4. Plate Tectonics Basics (ppg6s11fefc2a34aaf3af3c21)
UPDATE "Lesson" SET "content" = '# Plate Tectonics Basics

*Grade 6 Science · Unit 6 of 10 · Earth’s Systems and Structure · Lesson 4*

## Objective

**I can** explain that plates move slowly and cause earthquakes, volcanoes, and mountain building.

## Warm-up (2 minutes)

Quick think: Explain that plates move slowly and cause earthquakes, volcanoes, and mountain building — give one example from life or lab.

## Teach

### Big idea

Earth’s plates move slowly — earthquakes, mountains, volcanoes at boundaries.

### Example 1 — Example 1

Texas is not on a major plate boundary like California.

### Try this

Apply “Plate Tectonics Basics.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Plate Tectonics Basics.”

### Common mistake (this lesson only)

Confusing “Plate Tectonics Basics” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Plate Tectonics Basics”?  
   **Answer:** Explain that plates move slowly and cause earthquakes, volcanoes, and mountain building.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Plate Tectonics Basics.”
2. Example for “Plate Tectonics Basics.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Earth’s plates move slowly — earthquakes, mountains, volcanoes at boundaries.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Plate Tectonics Basics” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Plate Tectonics Basics” to a partner in 60 seconds with one diagram.
', "objectives" = '• Explain that plates move slowly and cause earthquakes, volcanoes, and mountain building.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Explain that plates move slowly and cause earthquakes, volcanoes, and mountain building.' WHERE "id" = 'ppg6s11fefc2a34aaf3af3c21' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s5c13982b330d58a57fdd','ppg6s11fefc2a34aaf3af3c21',NULL,'MULTIPLE_CHOICE','Core idea of “Plate Tectonics Basics” is closest to…','["Earth’s plates move slowly — earthquakes, mountains, volcanoes at boundaries.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s8ae2a16541564f4370d1','ppg6s11fefc2a34aaf3af3c21',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Plate Tectonics Basics”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6se77e5c65fa07359e7d62','ppg6s11fefc2a34aaf3af3c21',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L5. Texas Geology Hooks (ppg6s29317415c4f7b3c5e881)
UPDATE "Lesson" SET "content" = '# Texas Geology Hooks

*Grade 6 Science · Unit 6 of 10 · Earth’s Systems and Structure · Lesson 5*

## Objective

**I can** connect East Texas landscapes to sedimentary history and resources without oversimplifying.

## Warm-up (2 minutes)

Quick think: Connect East Texas landscapes to sedimentary history and resources without oversimplifying — give one example from life or lab.

## Teach

### Big idea

Texas has varied geology: Gulf Coast sediments, Hill Country limestone, etc.

### Example 1 — Example 1

Local fossils and oil history connect to sedimentary stories.

### Try this

Apply “Texas Geology Hooks.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Texas Geology Hooks.”

### Common mistake (this lesson only)

Confusing “Texas Geology Hooks” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Texas Geology Hooks”?  
   **Answer:** Connect East Texas landscapes to sedimentary history and resources without oversimplifying.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Texas Geology Hooks.”
2. Example for “Texas Geology Hooks.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Texas has varied geology: Gulf Coast sediments, Hill Country limestone, etc.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Texas Geology Hooks” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Texas Geology Hooks” to a partner in 60 seconds with one diagram.
', "objectives" = '• Connect East Texas landscapes to sedimentary history and resources without oversimplifying.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Connect East Texas landscapes to sedimentary history and resources without oversimplifying.' WHERE "id" = 'ppg6s29317415c4f7b3c5e881' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sc2bcd594c6eb17187e0f','ppg6s29317415c4f7b3c5e881',NULL,'MULTIPLE_CHOICE','Core idea of “Texas Geology Hooks” is closest to…','["Texas has varied geology: Gulf Coast sediments, Hill Country limestone, etc.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s26880d22c2807038f68c','ppg6s29317415c4f7b3c5e881',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Texas Geology Hooks”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6se31e0ff538994bf0f3fe','ppg6s29317415c4f7b3c5e881',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L6. Weathering, Erosion, Deposition (ppg6s50c0e08f96dee5995d5c)
UPDATE "Lesson" SET "content" = '# Weathering, Erosion, Deposition

*Grade 6 Science · Unit 6 of 10 · Earth’s Systems and Structure · Lesson 6*

## Objective

**I can** distinguish weathering from erosion and deposition with local examples.

## Warm-up (2 minutes)

Quick think: Distinguish weathering from erosion and deposition with local examples — give one example from life or lab.

## Teach

### Big idea

**Weathering** breaks; **erosion** moves; **deposition** drops sediments.

### Example 1 — Example 1

River canyon story.

### Try this

Apply “Weathering, Erosion, Deposition.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Weathering, Erosion, Deposition.”

### Common mistake (this lesson only)

Confusing “Weathering, Erosion, Deposition” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Weathering, Erosion, Deposition”?  
   **Answer:** Distinguish weathering from erosion and deposition with local examples.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Weathering, Erosion, Deposition.”
2. Example for “Weathering, Erosion, Deposition.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Weathering** breaks; **erosion** moves; **deposition** drops sediments.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Weathering, Erosion, Deposition” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Weathering, Erosion, Deposition” to a partner in 60 seconds with one diagram.
', "objectives" = '• Distinguish weathering from erosion and deposition with local examples.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Distinguish weathering from erosion and deposition with local examples.' WHERE "id" = 'ppg6s50c0e08f96dee5995d5c' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s040c16833c29518f34c2','ppg6s50c0e08f96dee5995d5c',NULL,'MULTIPLE_CHOICE','Core idea of “Weathering, Erosion, Deposition” is closest to…','["**Weathering** breaks; **erosion** moves; **deposition** drops sediments.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s3ed671d97309390c68b2','ppg6s50c0e08f96dee5995d5c',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Weathering, Erosion, Deposition”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s5a72c30e9a32c9d15fab','ppg6s50c0e08f96dee5995d5c',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L7. Water Cycle as a System (ppg6s4d228a8fcd080d0fb808)
UPDATE "Lesson" SET "content" = '# Water Cycle as a System

*Grade 6 Science · Unit 6 of 10 · Earth’s Systems and Structure · Lesson 7*

## Objective

**I can** trace water through evaporation, condensation, precipitation, and runoff.

## Warm-up (2 minutes)

Quick think: Trace water through evaporation, condensation, precipitation, and runoff — give one example from life or lab.

## Teach

### Big idea

Evaporation, condensation, precipitation, runoff/collection — closed Earth water idea.

### Example 1 — Example 1

East Texas rain → streams → Gulf path.

### Try this

Apply “Water Cycle as a System.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Water Cycle as a System.”

### Common mistake (this lesson only)

Confusing “Water Cycle as a System” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Water Cycle as a System”?  
   **Answer:** Trace water through evaporation, condensation, precipitation, and runoff.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Water Cycle as a System.”
2. Example for “Water Cycle as a System.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Evaporation, condensation, precipitation, runoff/collection — closed Earth water idea.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Water Cycle as a System” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Water Cycle as a System” to a partner in 60 seconds with one diagram.
', "objectives" = '• Trace water through evaporation, condensation, precipitation, and runoff.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Trace water through evaporation, condensation, precipitation, and runoff.' WHERE "id" = 'ppg6s4d228a8fcd080d0fb808' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sc1407c6726bfc5cb9366','ppg6s4d228a8fcd080d0fb808',NULL,'MULTIPLE_CHOICE','Core idea of “Water Cycle as a System” is closest to…','["Evaporation, condensation, precipitation, runoff/collection — closed Earth water idea.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sff2783afa1f9bec7239d','ppg6s4d228a8fcd080d0fb808',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Water Cycle as a System”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s48dc501252db92ddccad','ppg6s4d228a8fcd080d0fb808',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L8. Earth Systems Unit Review (ppg6scc216b550f8269fdced3)
UPDATE "Lesson" SET "content" = '# Earth Systems Unit Review

*Grade 6 Science · Unit 6 of 10 · Earth’s Systems and Structure · Lesson 8*

## Objective

**I can** explain a change (flood, landslide, or rock formation) across multiple spheres.

## Warm-up (2 minutes)

Quick think: Explain a change (flood, landslide, or rock formation) across multiple spheres — give one example from life or lab.

## Teach

### Big idea

Spheres + rock cycle + water cycle + plates as interacting systems.

### Example 1 — Example 1

One Texas example tying two spheres.

### Try this

Apply “Earth Systems Unit Review.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Earth Systems Unit Review.”

### Common mistake (this lesson only)

Confusing “Earth Systems Unit Review” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Earth Systems Unit Review”?  
   **Answer:** Explain a change (flood, landslide, or rock formation) across multiple spheres.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Earth Systems Unit Review.”
2. Example for “Earth Systems Unit Review.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Spheres + rock cycle + water cycle + plates as interacting systems.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Earth Systems Unit Review” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Earth Systems Unit Review” to a partner in 60 seconds with one diagram.
', "objectives" = '• Explain a change (flood, landslide, or rock formation) across multiple spheres.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Explain a change (flood, landslide, or rock formation) across multiple spheres.' WHERE "id" = 'ppg6scc216b550f8269fdced3' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s046cff5bba2de00afe4c','ppg6scc216b550f8269fdced3',NULL,'MULTIPLE_CHOICE','Core idea of “Earth Systems Unit Review” is closest to…','["Spheres + rock cycle + water cycle + plates as interacting systems.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s13dbcd4d1e46e15b5fc6','ppg6scc216b550f8269fdced3',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Earth Systems Unit Review”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s4d976c00593aa4c954af','ppg6scc216b550f8269fdced3',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L1. Natural Resources Inventory (ppg6se6ab796f44f5fb2453c3)
UPDATE "Lesson" SET "content" = '# Natural Resources Inventory

*Grade 6 Science · Unit 7 of 10 · Managing and Protecting Natural Resources · Lesson 1*

## Objective

**I can** classify renewable and nonrenewable resources with Texas-relevant examples.

## Warm-up (2 minutes)

Quick think: Classify renewable and nonrenewable resources with Texas-relevant examples — give one example from life or lab.

## Teach

### Big idea

Resources: renewable vs nonrenewable; water, soil, minerals, fuels, forests.

### Example 1 — Example 1

Classify timber vs coal.

### Try this

Apply “Natural Resources Inventory.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Natural Resources Inventory.”

### Common mistake (this lesson only)

Confusing “Natural Resources Inventory” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Natural Resources Inventory”?  
   **Answer:** Classify renewable and nonrenewable resources with Texas-relevant examples.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Natural Resources Inventory.”
2. Example for “Natural Resources Inventory.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Resources: renewable vs nonrenewable; water, soil, minerals, fuels, forests.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Natural Resources Inventory” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Natural Resources Inventory” to a partner in 60 seconds with one diagram.
', "objectives" = '• Classify renewable and nonrenewable resources with Texas-relevant examples.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Classify renewable and nonrenewable resources with Texas-relevant examples.' WHERE "id" = 'ppg6se6ab796f44f5fb2453c3' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6secb06ef1ae5c39604845','ppg6se6ab796f44f5fb2453c3',NULL,'MULTIPLE_CHOICE','Core idea of “Natural Resources Inventory” is closest to…','["Resources: renewable vs nonrenewable; water, soil, minerals, fuels, forests.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s23bce09a6af46edc697c','ppg6se6ab796f44f5fb2453c3',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Natural Resources Inventory”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf5f5399079d53f9734e9','ppg6se6ab796f44f5fb2453c3',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L2. Energy Resources Tradeoffs (ppg6sb8ce37af3a7e00eaeb92)
UPDATE "Lesson" SET "content" = '# Energy Resources Tradeoffs

*Grade 6 Science · Unit 7 of 10 · Managing and Protecting Natural Resources · Lesson 2*

## Objective

**I can** compare resource options using evidence about availability, impact, and cost — not slogans.

## Warm-up (2 minutes)

Quick think: Compare resource options using evidence about availability, impact, and cost — not slogans — give one example from life or lab.

## Teach

### Big idea

Every energy source has benefits and costs (pollution, land, reliability).

### Example 1 — Example 1

Solar vs natural gas table.

### Try this

Apply “Energy Resources Tradeoffs.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Energy Resources Tradeoffs.”

### Common mistake (this lesson only)

Confusing “Energy Resources Tradeoffs” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Energy Resources Tradeoffs”?  
   **Answer:** Compare resource options using evidence about availability, impact, and cost — not slogans.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Energy Resources Tradeoffs.”
2. Example for “Energy Resources Tradeoffs.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Every energy source has benefits and costs (pollution, land, reliability).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Energy Resources Tradeoffs” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Energy Resources Tradeoffs” to a partner in 60 seconds with one diagram.
', "objectives" = '• Compare resource options using evidence about availability, impact, and cost — not slogans.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Compare resource options using evidence about availability, impact, and cost — not slogans.' WHERE "id" = 'ppg6sb8ce37af3a7e00eaeb92' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s829d28eee70ebdedde37','ppg6sb8ce37af3a7e00eaeb92',NULL,'MULTIPLE_CHOICE','Core idea of “Energy Resources Tradeoffs” is closest to…','["Every energy source has benefits and costs (pollution, land, reliability).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s6add38c8fd78904daf29','ppg6sb8ce37af3a7e00eaeb92',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Energy Resources Tradeoffs”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s0a23d6399ee81a852f3e','ppg6sb8ce37af3a7e00eaeb92',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L3. Water as a Precious Resource (ppg6sde64f9f7b9aa3a78110c)
UPDATE "Lesson" SET "content" = '# Water as a Precious Resource

*Grade 6 Science · Unit 7 of 10 · Managing and Protecting Natural Resources · Lesson 3*

## Objective

**I can** explain why freshwater management matters in Texas climates.

## Warm-up (2 minutes)

Quick think: Explain why freshwater management matters in Texas climates — give one example from life or lab.

## Teach

### Big idea

Freshwater is limited; conservation and clean supply matter in Texas droughts.

### Example 1 — Example 1

Leak fix = stewardship.

### Try this

Apply “Water as a Precious Resource.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Water as a Precious Resource.”

### Common mistake (this lesson only)

Confusing “Water as a Precious Resource” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Water as a Precious Resource”?  
   **Answer:** Explain why freshwater management matters in Texas climates.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Water as a Precious Resource.”
2. Example for “Water as a Precious Resource.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Freshwater is limited; conservation and clean supply matter in Texas droughts.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Water as a Precious Resource” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Water as a Precious Resource” to a partner in 60 seconds with one diagram.
', "objectives" = '• Explain why freshwater management matters in Texas climates.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Explain why freshwater management matters in Texas climates.' WHERE "id" = 'ppg6sde64f9f7b9aa3a78110c' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s2477a2f072ce87f724bc','ppg6sde64f9f7b9aa3a78110c',NULL,'MULTIPLE_CHOICE','Core idea of “Water as a Precious Resource” is closest to…','["Freshwater is limited; conservation and clean supply matter in Texas droughts.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s187fc8924bc670352d3c','ppg6sde64f9f7b9aa3a78110c',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Water as a Precious Resource”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sb0cc7341a1ff7911dea4','ppg6sde64f9f7b9aa3a78110c',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L4. Soil and Land Use (ppg6s122da550a749a02f5267)
UPDATE "Lesson" SET "content" = '# Soil and Land Use

*Grade 6 Science · Unit 7 of 10 · Managing and Protecting Natural Resources · Lesson 4*

## Objective

**I can** connect soil health to farming, runoff, and erosion control.

## Warm-up (2 minutes)

Quick think: Connect soil health to farming, runoff, and erosion control — give one example from life or lab.

## Teach

### Big idea

Soil supports food; erosion and poor use damage it.

### Example 1 — Example 1

Cover crops / careful plowing ideas.

### Try this

Apply “Soil and Land Use.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Soil and Land Use.”

### Common mistake (this lesson only)

Confusing “Soil and Land Use” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Soil and Land Use”?  
   **Answer:** Connect soil health to farming, runoff, and erosion control.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Soil and Land Use.”
2. Example for “Soil and Land Use.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Soil supports food; erosion and poor use damage it.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Soil and Land Use” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Soil and Land Use” to a partner in 60 seconds with one diagram.
', "objectives" = '• Connect soil health to farming, runoff, and erosion control.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Connect soil health to farming, runoff, and erosion control.' WHERE "id" = 'ppg6s122da550a749a02f5267' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s98d5b43f009b28a903e4','ppg6s122da550a749a02f5267',NULL,'MULTIPLE_CHOICE','Core idea of “Soil and Land Use” is closest to…','["Soil supports food; erosion and poor use damage it.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf18ccaa85208dbf62d5a','ppg6s122da550a749a02f5267',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Soil and Land Use”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s4f2983d4e216c8087a07','ppg6s122da550a749a02f5267',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L5. Human Impact Evidence (ppg6s99501b856793fbc3b60a)
UPDATE "Lesson" SET "content" = '# Human Impact Evidence

*Grade 6 Science · Unit 7 of 10 · Managing and Protecting Natural Resources · Lesson 5*

## Objective

**I can** use data (not vibes) to describe how human activity can help or harm systems.

## Warm-up (2 minutes)

Quick think: Use data (not vibes) to describe how human activity can help or harm systems — give one example from life or lab.

## Teach

### Big idea

Use data/examples of pollution, habitat loss, resource use — evidence not slogans.

### Example 1 — Example 1

Before/after photos or counts.

### Try this

Apply “Human Impact Evidence.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Human Impact Evidence.”

### Common mistake (this lesson only)

Confusing “Human Impact Evidence” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Human Impact Evidence”?  
   **Answer:** Use data (not vibes) to describe how human activity can help or harm systems.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Human Impact Evidence.”
2. Example for “Human Impact Evidence.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Use data/examples of pollution, habitat loss, resource use — evidence not slogans.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Human Impact Evidence” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Human Impact Evidence” to a partner in 60 seconds with one diagram.
', "objectives" = '• Use data (not vibes) to describe how human activity can help or harm systems.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Use data (not vibes) to describe how human activity can help or harm systems.' WHERE "id" = 'ppg6s99501b856793fbc3b60a' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s10385c2538a4da193a71','ppg6s99501b856793fbc3b60a',NULL,'MULTIPLE_CHOICE','Core idea of “Human Impact Evidence” is closest to…','["Use data/examples of pollution, habitat loss, resource use — evidence not slogans.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s460ff47547fa1c04fcf1','ppg6s99501b856793fbc3b60a',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Human Impact Evidence”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s405d379eb28839631788','ppg6s99501b856793fbc3b60a',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L6. Conservation and Stewardship Habits (ppg6se6a5b975cff30ddc86ab)
UPDATE "Lesson" SET "content" = '# Conservation and Stewardship Habits

*Grade 6 Science · Unit 7 of 10 · Managing and Protecting Natural Resources · Lesson 6*

## Objective

**I can** propose practical stewardship actions tied to science explanations.

## Warm-up (2 minutes)

Quick think: Propose practical stewardship actions tied to science explanations — give one example from life or lab.

## Teach

### Big idea

Stewardship = responsible care; reduce, reuse, rethink plus community rules.

### Example 1 — Example 1

School recycling with honest sorting.

### Try this

Apply “Conservation and Stewardship Habits.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Conservation and Stewardship Habits.”

### Common mistake (this lesson only)

Confusing “Conservation and Stewardship Habits” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Conservation and Stewardship Habits”?  
   **Answer:** Propose practical stewardship actions tied to science explanations.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Conservation and Stewardship Habits.”
2. Example for “Conservation and Stewardship Habits.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Stewardship = responsible care; reduce, reuse, rethink plus community rules.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Conservation and Stewardship Habits” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Conservation and Stewardship Habits” to a partner in 60 seconds with one diagram.
', "objectives" = '• Propose practical stewardship actions tied to science explanations.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Propose practical stewardship actions tied to science explanations.' WHERE "id" = 'ppg6se6a5b975cff30ddc86ab' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s9b25d0b0553117ad4163','ppg6se6a5b975cff30ddc86ab',NULL,'MULTIPLE_CHOICE','Core idea of “Conservation and Stewardship Habits” is closest to…','["Stewardship = responsible care; reduce, reuse, rethink plus community rules.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s683e52ea167618a29408','ppg6se6a5b975cff30ddc86ab',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Conservation and Stewardship Habits”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s427ee4d882dbc35db3cc','ppg6se6a5b975cff30ddc86ab',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L7. Resources Unit Synthesis (ppg6s10425bd5bffc467793e5)
UPDATE "Lesson" SET "content" = '# Resources Unit Synthesis

*Grade 6 Science · Unit 7 of 10 · Managing and Protecting Natural Resources · Lesson 7*

## Objective

**I can** argue for one management choice using claims, evidence, and tradeoffs.

## Warm-up (2 minutes)

Quick think: Argue for one management choice using claims, evidence, and tradeoffs — give one example from life or lab.

## Teach

### Big idea

Inventory + tradeoffs + stewardship plan for one Texas resource.

### Example 1 — Example 1

One-pager.

### Try this

Apply “Resources Unit Synthesis.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Resources Unit Synthesis.”

### Common mistake (this lesson only)

Confusing “Resources Unit Synthesis” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Resources Unit Synthesis”?  
   **Answer:** Argue for one management choice using claims, evidence, and tradeoffs.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Resources Unit Synthesis.”
2. Example for “Resources Unit Synthesis.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Inventory + tradeoffs + stewardship plan for one Texas resource.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Resources Unit Synthesis” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Resources Unit Synthesis” to a partner in 60 seconds with one diagram.
', "objectives" = '• Argue for one management choice using claims, evidence, and tradeoffs.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Argue for one management choice using claims, evidence, and tradeoffs.' WHERE "id" = 'ppg6s10425bd5bffc467793e5' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s3db7c55381da3285fb71','ppg6s10425bd5bffc467793e5',NULL,'MULTIPLE_CHOICE','Core idea of “Resources Unit Synthesis” is closest to…','["Inventory + tradeoffs + stewardship plan for one Texas resource.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s2642ed8166341a18848a','ppg6s10425bd5bffc467793e5',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Resources Unit Synthesis”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sfb3af5b579ee612d8257','ppg6s10425bd5bffc467793e5',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L1. Ecosystem Components (ppg6sce709517947f56cbcbe8)
UPDATE "Lesson" SET "content" = '# Ecosystem Components

*Grade 6 Science · Unit 8 of 10 · Interactions in Ecosystems · Lesson 1*

## Objective

**I can** distinguish biotic and abiotic factors in a local ecosystem model.

## Warm-up (2 minutes)

Quick think: Distinguish biotic and abiotic factors in a local ecosystem model — give one example from life or lab.

## Teach

### Big idea

Living (biotic) + nonliving (abiotic) parts interacting.

### Example 1 — Example 1

Pond: fish, plants, water, sunlight, rocks.

### Try this

Apply “Ecosystem Components.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Ecosystem Components.”

### Common mistake (this lesson only)

Confusing “Ecosystem Components” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Ecosystem Components”?  
   **Answer:** Distinguish biotic and abiotic factors in a local ecosystem model.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Ecosystem Components.”
2. Example for “Ecosystem Components.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Living (biotic) + nonliving (abiotic) parts interacting.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Ecosystem Components” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Ecosystem Components” to a partner in 60 seconds with one diagram.
', "objectives" = '• Distinguish biotic and abiotic factors in a local ecosystem model.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Distinguish biotic and abiotic factors in a local ecosystem model.' WHERE "id" = 'ppg6sce709517947f56cbcbe8' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s9f32bccdcc35d9f0c40a','ppg6sce709517947f56cbcbe8',NULL,'MULTIPLE_CHOICE','Core idea of “Ecosystem Components” is closest to…','["Living (biotic) + nonliving (abiotic) parts interacting.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s5045882e4e5e51b7f473','ppg6sce709517947f56cbcbe8',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Ecosystem Components”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s5917fa1cfa903a449527','ppg6sce709517947f56cbcbe8',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L2. Habitats and Niches (ppg6sad7958bb9b4be677b03a)
UPDATE "Lesson" SET "content" = '# Habitats and Niches

*Grade 6 Science · Unit 8 of 10 · Interactions in Ecosystems · Lesson 2*

## Objective

**I can** explain habitat vs niche with concrete organism examples.

## Warm-up (2 minutes)

Quick think: Explain habitat vs niche with concrete organism examples — give one example from life or lab.

## Teach

### Big idea

**Habitat** = address; **niche** = role/job in the ecosystem.

### Example 1 — Example 1

Woodpecker nest site vs insect-eating role.

### Try this

Apply “Habitats and Niches.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Habitats and Niches.”

### Common mistake (this lesson only)

Confusing “Habitats and Niches” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Habitats and Niches”?  
   **Answer:** Explain habitat vs niche with concrete organism examples.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Habitats and Niches.”
2. Example for “Habitats and Niches.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Habitat** = address; **niche** = role/job in the ecosystem.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Habitats and Niches” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Habitats and Niches” to a partner in 60 seconds with one diagram.
', "objectives" = '• Explain habitat vs niche with concrete organism examples.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Explain habitat vs niche with concrete organism examples.' WHERE "id" = 'ppg6sad7958bb9b4be677b03a' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6se966a066775adbb39b83','ppg6sad7958bb9b4be677b03a',NULL,'MULTIPLE_CHOICE','Core idea of “Habitats and Niches” is closest to…','["**Habitat** = address; **niche** = role/job in the ecosystem.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf74196d8ad11b7844e20','ppg6sad7958bb9b4be677b03a',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Habitats and Niches”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s94153de0950ae71dfd64','ppg6sad7958bb9b4be677b03a',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L3. Food Chains and Food Webs (ppg6s16865bd86f4a3302eefa)
UPDATE "Lesson" SET "content" = '# Food Chains and Food Webs

*Grade 6 Science · Unit 8 of 10 · Interactions in Ecosystems · Lesson 3*

## Objective

**I can** trace energy flow; prefer webs over single chains for realism.

## Warm-up (2 minutes)

Quick think: Trace energy flow; prefer webs over single chains for realism — give one example from life or lab.

## Teach

### Big idea

Chains are single paths; webs show many feeding links; arrows show energy flow to the eater.

### Example 1 — Example 1

Grass → rabbit → hawk.

### Try this

Apply “Food Chains and Food Webs.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Food Chains and Food Webs.”

### Common mistake (this lesson only)

Confusing “Food Chains and Food Webs” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Food Chains and Food Webs”?  
   **Answer:** Trace energy flow; prefer webs over single chains for realism.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Food Chains and Food Webs.”
2. Example for “Food Chains and Food Webs.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Chains are single paths; webs show many feeding links; arrows show energy flow to the eater.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Food Chains and Food Webs” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Food Chains and Food Webs” to a partner in 60 seconds with one diagram.
', "objectives" = '• Trace energy flow; prefer webs over single chains for realism.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Trace energy flow; prefer webs over single chains for realism.' WHERE "id" = 'ppg6s16865bd86f4a3302eefa' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s50158062aa287dd64e5a','ppg6s16865bd86f4a3302eefa',NULL,'MULTIPLE_CHOICE','Core idea of “Food Chains and Food Webs” is closest to…','["Chains are single paths; webs show many feeding links; arrows show energy flow to the eater.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sb56ff0a01cd69e0c27f7','ppg6s16865bd86f4a3302eefa',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Food Chains and Food Webs”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s3b08d5eeb79e4ba72530','ppg6s16865bd86f4a3302eefa',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L4. Producers, Consumers, Decomposers (ppg6sad2f6c43354af76c54ef)
UPDATE "Lesson" SET "content" = '# Producers, Consumers, Decomposers

*Grade 6 Science · Unit 8 of 10 · Interactions in Ecosystems · Lesson 4*

## Objective

**I can** classify roles and explain why decomposers matter.

## Warm-up (2 minutes)

Quick think: Classify roles and explain why decomposers matter — give one example from life or lab.

## Teach

### Big idea

Producers make food (photosynthesis); consumers eat; decomposers recycle.

### Example 1 — Example 1

Fungi on a log.

### Try this

Apply “Producers, Consumers, Decomposers.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Producers, Consumers, Decomposers.”

### Common mistake (this lesson only)

Confusing “Producers, Consumers, Decomposers” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Producers, Consumers, Decomposers”?  
   **Answer:** Classify roles and explain why decomposers matter.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Producers, Consumers, Decomposers.”
2. Example for “Producers, Consumers, Decomposers.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Producers make food (photosynthesis); consumers eat; decomposers recycle.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Producers, Consumers, Decomposers” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Producers, Consumers, Decomposers” to a partner in 60 seconds with one diagram.
', "objectives" = '• Classify roles and explain why decomposers matter.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Classify roles and explain why decomposers matter.' WHERE "id" = 'ppg6sad2f6c43354af76c54ef' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s61055cb602bf27a89518','ppg6sad2f6c43354af76c54ef',NULL,'MULTIPLE_CHOICE','Core idea of “Producers, Consumers, Decomposers” is closest to…','["Producers make food (photosynthesis); consumers eat; decomposers recycle.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s1deedcb5904e58381afe','ppg6sad2f6c43354af76c54ef',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Producers, Consumers, Decomposers”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s9200623bbe12039ef637','ppg6sad2f6c43354af76c54ef',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L5. Competition and Predation (ppg6s9b06ff28441bf78b5520)
UPDATE "Lesson" SET "content" = '# Competition and Predation

*Grade 6 Science · Unit 8 of 10 · Interactions in Ecosystems · Lesson 5*

## Objective

**I can** describe interactions that shape populations without moralizing animals.

## Warm-up (2 minutes)

Quick think: Describe interactions that shape populations without moralizing animals — give one example from life or lab.

## Teach

### Big idea

Compete for limited resources; predation is hunter/prey.

### Example 1 — Example 1

Two birds, one nesting cavity.

### Try this

Apply “Competition and Predation.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Competition and Predation.”

### Common mistake (this lesson only)

Confusing “Competition and Predation” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Competition and Predation”?  
   **Answer:** Describe interactions that shape populations without moralizing animals.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Competition and Predation.”
2. Example for “Competition and Predation.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Compete for limited resources; predation is hunter/prey.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Competition and Predation” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Competition and Predation” to a partner in 60 seconds with one diagram.
', "objectives" = '• Describe interactions that shape populations without moralizing animals.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Describe interactions that shape populations without moralizing animals.' WHERE "id" = 'ppg6s9b06ff28441bf78b5520' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6saee215c5db0dda07e250','ppg6s9b06ff28441bf78b5520',NULL,'MULTIPLE_CHOICE','Core idea of “Competition and Predation” is closest to…','["Compete for limited resources; predation is hunter/prey.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sd992cad13ef26b7968dd','ppg6s9b06ff28441bf78b5520',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Competition and Predation”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sb7dc66157a64c3f3eacb','ppg6s9b06ff28441bf78b5520',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L6. Symbiosis Intro (ppg6s878eddd9e9cfa3a18eda)
UPDATE "Lesson" SET "content" = '# Symbiosis Intro

*Grade 6 Science · Unit 8 of 10 · Interactions in Ecosystems · Lesson 6*

## Objective

**I can** identify mutualism, commensalism, and parasitism with evidence.

## Warm-up (2 minutes)

Quick think: Identify mutualism, commensalism, and parasitism with evidence — give one example from life or lab.

## Teach

### Big idea

Close long-term species relationships: mutualism, commensalism, parasitism (intro).

### Example 1 — Example 1

Bee + flower mutualism.

### Try this

Apply “Symbiosis Intro.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Symbiosis Intro.”

### Common mistake (this lesson only)

Confusing “Symbiosis Intro” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Symbiosis Intro”?  
   **Answer:** Identify mutualism, commensalism, and parasitism with evidence.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Symbiosis Intro.”
2. Example for “Symbiosis Intro.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Close long-term species relationships: mutualism, commensalism, parasitism (intro).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Symbiosis Intro” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Symbiosis Intro” to a partner in 60 seconds with one diagram.
', "objectives" = '• Identify mutualism, commensalism, and parasitism with evidence.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Identify mutualism, commensalism, and parasitism with evidence.' WHERE "id" = 'ppg6s878eddd9e9cfa3a18eda' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s8bc56c10527bc72eaa46','ppg6s878eddd9e9cfa3a18eda',NULL,'MULTIPLE_CHOICE','Core idea of “Symbiosis Intro” is closest to…','["Close long-term species relationships: mutualism, commensalism, parasitism (intro).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s96984e511b504a901553','ppg6s878eddd9e9cfa3a18eda',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Symbiosis Intro”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf5ee195a4de8c2bfa21d','ppg6s878eddd9e9cfa3a18eda',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L7. Ecosystem Changes and Stability (ppg6s10c8f615a71455be52ad)
UPDATE "Lesson" SET "content" = '# Ecosystem Changes and Stability

*Grade 6 Science · Unit 8 of 10 · Interactions in Ecosystems · Lesson 7*

## Objective

**I can** predict how removing a key species or resource can ripple through a web.

## Warm-up (2 minutes)

Quick think: Predict how removing a key species or resource can ripple through a web — give one example from life or lab.

## Teach

### Big idea

Change can be natural or human-caused; stability ≠ frozen forever.

### Example 1 — Example 1

Drought reshuffles a food web.

### Try this

Apply “Ecosystem Changes and Stability.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Ecosystem Changes and Stability.”

### Common mistake (this lesson only)

Confusing “Ecosystem Changes and Stability” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Ecosystem Changes and Stability”?  
   **Answer:** Predict how removing a key species or resource can ripple through a web.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Ecosystem Changes and Stability.”
2. Example for “Ecosystem Changes and Stability.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Change can be natural or human-caused; stability ≠ frozen forever.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Ecosystem Changes and Stability” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Ecosystem Changes and Stability” to a partner in 60 seconds with one diagram.
', "objectives" = '• Predict how removing a key species or resource can ripple through a web.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Predict how removing a key species or resource can ripple through a web.' WHERE "id" = 'ppg6s10c8f615a71455be52ad' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s24b4823ec9bf34576558','ppg6s10c8f615a71455be52ad',NULL,'MULTIPLE_CHOICE','Core idea of “Ecosystem Changes and Stability” is closest to…','["Change can be natural or human-caused; stability ≠ frozen forever.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sa6a0fb44dd75c411fc5c','ppg6s10c8f615a71455be52ad',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Ecosystem Changes and Stability”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sa2917fdfcedf5924bb33','ppg6s10c8f615a71455be52ad',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L8. Ecosystems Unit Review (ppg6s19e9cd4a38bcc0b6f140)
UPDATE "Lesson" SET "content" = '# Ecosystems Unit Review

*Grade 6 Science · Unit 8 of 10 · Interactions in Ecosystems · Lesson 8*

## Objective

**I can** build a mini food web and justify two interaction claims with evidence.

## Warm-up (2 minutes)

Quick think: Build a mini food web and justify two interaction claims with evidence — give one example from life or lab.

## Teach

### Big idea

Components → roles → energy flow → interactions → change.

### Example 1 — Example 1

Labeled web.

### Try this

Apply “Ecosystems Unit Review.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Ecosystems Unit Review.”

### Common mistake (this lesson only)

Confusing “Ecosystems Unit Review” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Ecosystems Unit Review”?  
   **Answer:** Build a mini food web and justify two interaction claims with evidence.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Ecosystems Unit Review.”
2. Example for “Ecosystems Unit Review.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Components → roles → energy flow → interactions → change.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Ecosystems Unit Review” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Ecosystems Unit Review” to a partner in 60 seconds with one diagram.
', "objectives" = '• Build a mini food web and justify two interaction claims with evidence.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Build a mini food web and justify two interaction claims with evidence.' WHERE "id" = 'ppg6s19e9cd4a38bcc0b6f140' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s3f434ad64555dd12f0e9','ppg6s19e9cd4a38bcc0b6f140',NULL,'MULTIPLE_CHOICE','Core idea of “Ecosystems Unit Review” is closest to…','["Components → roles → energy flow → interactions → change.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s21ad82c0510ec25a0bb3','ppg6s19e9cd4a38bcc0b6f140',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Ecosystems Unit Review”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s48b86504cc95700446fc','ppg6s19e9cd4a38bcc0b6f140',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L1. Cells as Building Blocks (ppg6s4105bd2a88d748d84169)
UPDATE "Lesson" SET "content" = '# Cells as Building Blocks

*Grade 6 Science · Unit 9 of 10 · Cells and Organisms · Lesson 1*

## Objective

**I can** argue that living things are made of cells; connect structure to function at intro level.

## Warm-up (2 minutes)

Quick think: Argue that living things are made of cells; connect structure to function at intro level — give one example from life or lab.

## Teach

### Big idea

All living things are made of **cells** — basic units of life.

### Example 1 — Example 1

Skin cells vs unicellular amoeba.

### Try this

Apply “Cells as Building Blocks.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Cells as Building Blocks.”

### Common mistake (this lesson only)

Confusing “Cells as Building Blocks” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Cells as Building Blocks”?  
   **Answer:** Argue that living things are made of cells; connect structure to function at intro level.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Cells as Building Blocks.”
2. Example for “Cells as Building Blocks.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. All living things are made of **cells** — basic units of life.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Cells as Building Blocks” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Cells as Building Blocks” to a partner in 60 seconds with one diagram.
', "objectives" = '• Argue that living things are made of cells; connect structure to function at intro level.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Argue that living things are made of cells; connect structure to function at intro level.' WHERE "id" = 'ppg6s4105bd2a88d748d84169' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s1990ddb919e8e8b04ffe','ppg6s4105bd2a88d748d84169',NULL,'MULTIPLE_CHOICE','Core idea of “Cells as Building Blocks” is closest to…','["All living things are made of **cells** — basic units of life.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf55c8968765cf36703ec','ppg6s4105bd2a88d748d84169',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Cells as Building Blocks”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s0fbdec2632ec5ae991a9','ppg6s4105bd2a88d748d84169',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L2. Plant vs Animal Cells (ppg6sd56d6e4e726b04b904f7)
UPDATE "Lesson" SET "content" = '# Plant vs Animal Cells

*Grade 6 Science · Unit 9 of 10 · Cells and Organisms · Lesson 2*

## Objective

**I can** compare key organelles students can map on diagrams (cell wall, chloroplast, etc.).

## Warm-up (2 minutes)

Quick think: Compare key organelles students can map on diagrams (cell wall, chloroplast, etc.) — give one example from life or lab.

## Teach

### Big idea

Both have membrane, cytoplasm, nucleus (euk.); plants also cell wall + chloroplasts (typical).

### Example 1 — Example 1

Chloroplasts → photosynthesis.

### Try this

Apply “Plant vs Animal Cells.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Plant vs Animal Cells.”

### Common mistake (this lesson only)

Confusing “Plant vs Animal Cells” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Plant vs Animal Cells”?  
   **Answer:** Compare key organelles students can map on diagrams (cell wall, chloroplast, etc.).

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Plant vs Animal Cells.”
2. Example for “Plant vs Animal Cells.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Both have membrane, cytoplasm, nucleus (euk.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Plant vs Animal Cells” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Plant vs Animal Cells” to a partner in 60 seconds with one diagram.
', "objectives" = '• Compare key organelles students can map on diagrams (cell wall, chloroplast, etc.).
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Compare key organelles students can map on diagrams (cell wall, chloroplast, etc.).' WHERE "id" = 'ppg6sd56d6e4e726b04b904f7' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6se0adbf093b05c2e9647d','ppg6sd56d6e4e726b04b904f7',NULL,'MULTIPLE_CHOICE','Core idea of “Plant vs Animal Cells” is closest to…','["Both have membrane, cytoplasm, nucleus (euk.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sc8b30c726ff6575e74ed','ppg6sd56d6e4e726b04b904f7',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Plant vs Animal Cells”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6seef622ae4b8ce77c718b','ppg6sd56d6e4e726b04b904f7',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L3. Microscope Habits (ppg6se29dd8763d5cac5bdb8c)
UPDATE "Lesson" SET "content" = '# Microscope Habits

*Grade 6 Science · Unit 9 of 10 · Cells and Organisms · Lesson 3*

## Objective

**I can** practice responsible observation: focus, scale, and honest drawings.

## Warm-up (2 minutes)

Quick think: Practice responsible observation: focus, scale, and honest drawings — give one example from life or lab.

## Teach

### Big idea

Start on low power, focus gently, carry with two hands, never use coarse on high.

### Example 1 — Example 1

Specimen centered before zooming.

### Try this

Apply “Microscope Habits.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Microscope Habits.”

### Common mistake (this lesson only)

Confusing “Microscope Habits” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Microscope Habits”?  
   **Answer:** Practice responsible observation: focus, scale, and honest drawings.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Microscope Habits.”
2. Example for “Microscope Habits.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Start on low power, focus gently, carry with two hands, never use coarse on high.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Microscope Habits” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Microscope Habits” to a partner in 60 seconds with one diagram.
', "objectives" = '• Practice responsible observation: focus, scale, and honest drawings.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Practice responsible observation: focus, scale, and honest drawings.' WHERE "id" = 'ppg6se29dd8763d5cac5bdb8c' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sd66beb1c3d8684903469','ppg6se29dd8763d5cac5bdb8c',NULL,'MULTIPLE_CHOICE','Core idea of “Microscope Habits” is closest to…','["Start on low power, focus gently, carry with two hands, never use coarse on high.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s6d2b09364b5defd725db','ppg6se29dd8763d5cac5bdb8c',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Microscope Habits”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sec79c8f03ba92602960b','ppg6se29dd8763d5cac5bdb8c',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L4. Unicellular and Multicellular Life (ppg6s77e1ede714ed87dbc86b)
UPDATE "Lesson" SET "content" = '# Unicellular and Multicellular Life

*Grade 6 Science · Unit 9 of 10 · Cells and Organisms · Lesson 4*

## Objective

**I can** contrast single-celled organisms with multicellular organization.

## Warm-up (2 minutes)

Quick think: Contrast single-celled organisms with multicellular organization — give one example from life or lab.

## Teach

### Big idea

One-celled organisms do all jobs in one cell; multicellular specialize.

### Example 1 — Example 1

Bacteria vs human.

### Try this

Apply “Unicellular and Multicellular Life.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Unicellular and Multicellular Life.”

### Common mistake (this lesson only)

Confusing “Unicellular and Multicellular Life” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Unicellular and Multicellular Life”?  
   **Answer:** Contrast single-celled organisms with multicellular organization.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Unicellular and Multicellular Life.”
2. Example for “Unicellular and Multicellular Life.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. One-celled organisms do all jobs in one cell; multicellular specialize.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Unicellular and Multicellular Life” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Unicellular and Multicellular Life” to a partner in 60 seconds with one diagram.
', "objectives" = '• Contrast single-celled organisms with multicellular organization.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Contrast single-celled organisms with multicellular organization.' WHERE "id" = 'ppg6s77e1ede714ed87dbc86b' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sebaf3bf6e7025700a9d2','ppg6s77e1ede714ed87dbc86b',NULL,'MULTIPLE_CHOICE','Core idea of “Unicellular and Multicellular Life” is closest to…','["One-celled organisms do all jobs in one cell; multicellular specialize.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sc81d4320cb5b23f353a1','ppg6s77e1ede714ed87dbc86b',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Unicellular and Multicellular Life”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s860cb17ecf5d0ccecfcb','ppg6s77e1ede714ed87dbc86b',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L5. Organization: Cells to Systems (ppg6saef8bc0070113724e548)
UPDATE "Lesson" SET "content" = '# Organization: Cells to Systems

*Grade 6 Science · Unit 9 of 10 · Cells and Organisms · Lesson 5*

## Objective

**I can** sequence cells → tissues → organs → systems with a human or plant example.

## Warm-up (2 minutes)

Quick think: Sequence cells → tissues → organs → systems with a human or plant example — give one example from life or lab.

## Teach

### Big idea

Cells → tissues → organs → systems → organism.

### Example 1 — Example 1

Heart muscle cells → heart → circulatory.

### Try this

Apply “Organization: Cells to Systems.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Organization: Cells to Systems.”

### Common mistake (this lesson only)

Confusing “Organization: Cells to Systems” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Organization: Cells to Systems”?  
   **Answer:** Sequence cells → tissues → organs → systems with a human or plant example.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Organization: Cells to Systems.”
2. Example for “Organization: Cells to Systems.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Cells → tissues → organs → systems → organism.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Organization: Cells to Systems” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Organization: Cells to Systems” to a partner in 60 seconds with one diagram.
', "objectives" = '• Sequence cells → tissues → organs → systems with a human or plant example.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Sequence cells → tissues → organs → systems with a human or plant example.' WHERE "id" = 'ppg6saef8bc0070113724e548' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sce4d859af777d0cb6d68','ppg6saef8bc0070113724e548',NULL,'MULTIPLE_CHOICE','Core idea of “Organization: Cells to Systems” is closest to…','["Cells → tissues → organs → systems → organism.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sac924dbba5dd5df9b42c','ppg6saef8bc0070113724e548',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Organization: Cells to Systems”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s88a12797deffb3a963e9','ppg6saef8bc0070113724e548',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L6. Photosynthesis Overview (ppg6sc856dbb55c6189a28890)
UPDATE "Lesson" SET "content" = '# Photosynthesis Overview

*Grade 6 Science · Unit 9 of 10 · Cells and Organisms · Lesson 6*

## Objective

**I can** explain that plants capture light energy to make sugars; write inputs/outputs carefully.

## Warm-up (2 minutes)

Quick think: Explain that plants capture light energy to make sugars; write inputs/outputs carefully — give one example from life or lab.

## Teach

### Big idea

Plants use light, CO₂, water to make sugars + oxygen (overview equation idea).

### Example 1 — Example 1

Chloroplasts are the workplace.

### Try this

Apply “Photosynthesis Overview.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Photosynthesis Overview.”

### Common mistake (this lesson only)

Confusing “Photosynthesis Overview” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Photosynthesis Overview”?  
   **Answer:** Explain that plants capture light energy to make sugars; write inputs/outputs carefully.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Photosynthesis Overview.”
2. Example for “Photosynthesis Overview.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Plants use light, CO₂, water to make sugars + oxygen (overview equation idea).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Photosynthesis Overview” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Photosynthesis Overview” to a partner in 60 seconds with one diagram.
', "objectives" = '• Explain that plants capture light energy to make sugars; write inputs/outputs carefully.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Explain that plants capture light energy to make sugars; write inputs/outputs carefully.' WHERE "id" = 'ppg6sc856dbb55c6189a28890' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sed8318563b5784905e43','ppg6sc856dbb55c6189a28890',NULL,'MULTIPLE_CHOICE','Core idea of “Photosynthesis Overview” is closest to…','["Plants use light, CO₂, water to make sugars + oxygen (overview equation idea).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf986d7d588fd0fd211df','ppg6sc856dbb55c6189a28890',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Photosynthesis Overview”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sb17b8a1e4853f99a475d','ppg6sc856dbb55c6189a28890',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L7. Human Body Systems Intro (ppg6s6da01b2b1c8b3d39775c)
UPDATE "Lesson" SET "content" = '# Human Body Systems Intro

*Grade 6 Science · Unit 9 of 10 · Cells and Organisms · Lesson 7*

## Objective

**I can** map how two systems work together (e.g., respiratory + circulatory).

## Warm-up (2 minutes)

Quick think: Map how two systems work together (e.g., respiratory + circulatory) — give one example from life or lab.

## Teach

### Big idea

Systems cooperate: digestive, respiratory, circulatory, etc.

### Example 1 — Example 1

Oxygen path: lungs → blood → cells.

### Try this

Apply “Human Body Systems Intro.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Human Body Systems Intro.”

### Common mistake (this lesson only)

Confusing “Human Body Systems Intro” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Human Body Systems Intro”?  
   **Answer:** Map how two systems work together (e.g., respiratory + circulatory).

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Human Body Systems Intro.”
2. Example for “Human Body Systems Intro.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Systems cooperate: digestive, respiratory, circulatory, etc.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Human Body Systems Intro” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Human Body Systems Intro” to a partner in 60 seconds with one diagram.
', "objectives" = '• Map how two systems work together (e.g., respiratory + circulatory).
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Map how two systems work together (e.g., respiratory + circulatory).' WHERE "id" = 'ppg6s6da01b2b1c8b3d39775c' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s0508173c2708e1f005c8','ppg6s6da01b2b1c8b3d39775c',NULL,'MULTIPLE_CHOICE','Core idea of “Human Body Systems Intro” is closest to…','["Systems cooperate: digestive, respiratory, circulatory, etc.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf0b38ad8b5b098a6ef58','ppg6s6da01b2b1c8b3d39775c',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Human Body Systems Intro”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s9515aa22512edf0fa8ec','ppg6s6da01b2b1c8b3d39775c',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L8. Cells & Organisms Unit Synthesis (ppg6s03c6c1f1cec30ec348f4)
UPDATE "Lesson" SET "content" = '# Cells & Organisms Unit Synthesis

*Grade 6 Science · Unit 9 of 10 · Cells and Organisms · Lesson 8*

## Objective

**I can** use a diagram + CER to connect cell structures to organism needs.

## Warm-up (2 minutes)

Quick think: Use a diagram + CER to connect cell structures to organism needs — give one example from life or lab.

## Teach

### Big idea

Cell parts → organism organization → photosynthesis link to ecosystems.

### Example 1 — Example 1

One diagram + 5 labels.

### Try this

Apply “Cells & Organisms Unit Synthesis.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Cells & Organisms Unit Synthesis.”

### Common mistake (this lesson only)

Confusing “Cells & Organisms Unit Synthesis” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Cells & Organisms Unit Synthesis”?  
   **Answer:** Use a diagram + CER to connect cell structures to organism needs.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Cells & Organisms Unit Synthesis.”
2. Example for “Cells & Organisms Unit Synthesis.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Cell parts → organism organization → photosynthesis link to ecosystems.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Cells & Organisms Unit Synthesis” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Cells & Organisms Unit Synthesis” to a partner in 60 seconds with one diagram.
', "objectives" = '• Use a diagram + CER to connect cell structures to organism needs.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Use a diagram + CER to connect cell structures to organism needs.' WHERE "id" = 'ppg6s03c6c1f1cec30ec348f4' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s68a0bcb36cdf35db1b64','ppg6s03c6c1f1cec30ec348f4',NULL,'MULTIPLE_CHOICE','Core idea of “Cells & Organisms Unit Synthesis” is closest to…','["Cell parts → organism organization → photosynthesis link to ecosystems.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s0aa8bd6e10c4b426f8b0','ppg6s03c6c1f1cec30ec348f4',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Cells & Organisms Unit Synthesis”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sbacb594de1d85b34dc80','ppg6s03c6c1f1cec30ec348f4',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L1. Traits We Can Observe (ppg6sd5b448ec5a091e565d9f)
UPDATE "Lesson" SET "content" = '# Traits We Can Observe

*Grade 6 Science · Unit 10 of 10 · Traits and the Environment · Lesson 1*

## Objective

**I can** distinguish inherited traits from learned behaviors and environmental effects.

## Warm-up (2 minutes)

Quick think: Distinguish inherited traits from learned behaviors and environmental effects — give one example from life or lab.

## Teach

### Big idea

**Traits** are features we can observe; some inherited, some influenced by environment.

### Example 1 — Example 1

Eye color vs scar.

### Try this

Apply “Traits We Can Observe.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Traits We Can Observe.”

### Common mistake (this lesson only)

Confusing “Traits We Can Observe” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Traits We Can Observe”?  
   **Answer:** Distinguish inherited traits from learned behaviors and environmental effects.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Traits We Can Observe.”
2. Example for “Traits We Can Observe.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Traits** are features we can observe; some inherited, some influenced by environment.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Traits We Can Observe” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Traits We Can Observe” to a partner in 60 seconds with one diagram.
', "objectives" = '• Distinguish inherited traits from learned behaviors and environmental effects.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Distinguish inherited traits from learned behaviors and environmental effects.' WHERE "id" = 'ppg6sd5b448ec5a091e565d9f' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sf92b5ec8c65a4bd36b20','ppg6sd5b448ec5a091e565d9f',NULL,'MULTIPLE_CHOICE','Core idea of “Traits We Can Observe” is closest to…','["**Traits** are features we can observe; some inherited, some influenced by environment.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s58daefb61877bf5e86b6','ppg6sd5b448ec5a091e565d9f',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Traits We Can Observe”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s0ea0fd59416804a7498a','ppg6sd5b448ec5a091e565d9f',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L2. Variation Within a Species (ppg6s5fe296f20212894f9823)
UPDATE "Lesson" SET "content" = '# Variation Within a Species

*Grade 6 Science · Unit 10 of 10 · Traits and the Environment · Lesson 2*

## Objective

**I can** explain why variation matters for survival in changing conditions.

## Warm-up (2 minutes)

Quick think: Explain why variation matters for survival in changing conditions — give one example from life or lab.

## Teach

### Big idea

Individuals differ — variation matters for survival stories.

### Example 1 — Example 1

Seedling heights differ.

### Try this

Apply “Variation Within a Species.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Variation Within a Species.”

### Common mistake (this lesson only)

Confusing “Variation Within a Species” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Variation Within a Species”?  
   **Answer:** Explain why variation matters for survival in changing conditions.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Variation Within a Species.”
2. Example for “Variation Within a Species.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Individuals differ — variation matters for survival stories.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Variation Within a Species” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Variation Within a Species” to a partner in 60 seconds with one diagram.
', "objectives" = '• Explain why variation matters for survival in changing conditions.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Explain why variation matters for survival in changing conditions.' WHERE "id" = 'ppg6s5fe296f20212894f9823' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sd642132e50ee4a9a60d7','ppg6s5fe296f20212894f9823',NULL,'MULTIPLE_CHOICE','Core idea of “Variation Within a Species” is closest to…','["Individuals differ — variation matters for survival stories.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sfc3a4040ed0110b93548','ppg6s5fe296f20212894f9823',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Variation Within a Species”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s362d6d157240afe001b3','ppg6s5fe296f20212894f9823',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L3. Genes as Instructions (Intro) (ppg6s0672d6fcca0005cb6609)
UPDATE "Lesson" SET "content" = '# Genes as Instructions (Intro)

*Grade 6 Science · Unit 10 of 10 · Traits and the Environment · Lesson 3*

## Objective

**I can** introduce genes as inherited instructions without overclaiming DNA detail.

## Warm-up (2 minutes)

Quick think: Introduce genes as inherited instructions without overclaiming DNA detail — give one example from life or lab.

## Teach

### Big idea

**Genes** are instructions inherited from parents (intro — not full molecular detail).

### Example 1 — Example 1

Offspring resemble parents in patterns.

### Try this

Apply “Genes as Instructions (Intro).”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Genes as Instructions (Intro).”

### Common mistake (this lesson only)

Confusing “Genes as Instructions (Intro)” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Genes as Instructions (Intro)”?  
   **Answer:** Introduce genes as inherited instructions without overclaiming DNA detail.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Genes as Instructions (Intro).”
2. Example for “Genes as Instructions (Intro).”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Genes** are instructions inherited from parents (intro — not full molecular detail).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Genes as Instructions (Intro)” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Genes as Instructions (Intro)” to a partner in 60 seconds with one diagram.
', "objectives" = '• Introduce genes as inherited instructions without overclaiming DNA detail.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Introduce genes as inherited instructions without overclaiming DNA detail.' WHERE "id" = 'ppg6s0672d6fcca0005cb6609' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sfa95a5ef5b8dcdabc2b8','ppg6s0672d6fcca0005cb6609',NULL,'MULTIPLE_CHOICE','Core idea of “Genes as Instructions (Intro)” is closest to…','["**Genes** are instructions inherited from parents (intro — not full molecular detail).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sa5f28599f7967bd3c6e5','ppg6s0672d6fcca0005cb6609',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Genes as Instructions (Intro)”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s739f111f7a53804c3996','ppg6s0672d6fcca0005cb6609',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L4. Environment Shapes Expression (ppg6sa508cbcb199ced0bde57)
UPDATE "Lesson" SET "content" = '# Environment Shapes Expression

*Grade 6 Science · Unit 10 of 10 · Traits and the Environment · Lesson 4*

## Objective

**I can** give examples where environment influences how traits appear (height nutrition, etc.).

## Warm-up (2 minutes)

Quick think: Give examples where environment influences how traits appear (height nutrition, etc.) — give one example from life or lab.

## Teach

### Big idea

Environment can affect how traits show (plant height vs sunlight).

### Example 1 — Example 1

Identical instructions, different light.

### Try this

Apply “Environment Shapes Expression.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Environment Shapes Expression.”

### Common mistake (this lesson only)

Confusing “Environment Shapes Expression” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Environment Shapes Expression”?  
   **Answer:** Give examples where environment influences how traits appear (height nutrition, etc.).

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Environment Shapes Expression.”
2. Example for “Environment Shapes Expression.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Environment can affect how traits show (plant height vs sunlight).
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Environment Shapes Expression” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Environment Shapes Expression” to a partner in 60 seconds with one diagram.
', "objectives" = '• Give examples where environment influences how traits appear (height nutrition, etc.).
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Give examples where environment influences how traits appear (height nutrition, etc.).' WHERE "id" = 'ppg6sa508cbcb199ced0bde57' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s73852e750b6887ced6e7','ppg6sa508cbcb199ced0bde57',NULL,'MULTIPLE_CHOICE','Core idea of “Environment Shapes Expression” is closest to…','["Environment can affect how traits show (plant height vs sunlight).","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sd0387e40f8fca1e6b6d4','ppg6sa508cbcb199ced0bde57',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Environment Shapes Expression”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s2f3d68ec9e41b730c8f8','ppg6sa508cbcb199ced0bde57',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L5. Adaptations Are Not Wishes (ppg6sce4a03baaf72e2d1c41c)
UPDATE "Lesson" SET "content" = '# Adaptations Are Not Wishes

*Grade 6 Science · Unit 10 of 10 · Traits and the Environment · Lesson 5*

## Objective

**I can** define adaptations as heritable traits that help survival/reproduction in a habitat.

## Warm-up (2 minutes)

Quick think: Define adaptations as heritable traits that help survival/reproduction in a habitat — give one example from life or lab.

## Teach

### Big idea

**Adaptations** are inherited traits that help survival/reproduction in a habitat — not something an animal “decides” mid-life.

### Example 1 — Example 1

Cactus spines story — population over generations framing.

### Try this

Apply “Adaptations Are Not Wishes.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Adaptations Are Not Wishes.”

### Common mistake (this lesson only)

Confusing “Adaptations Are Not Wishes” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Adaptations Are Not Wishes”?  
   **Answer:** Define adaptations as heritable traits that help survival/reproduction in a habitat.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Adaptations Are Not Wishes.”
2. Example for “Adaptations Are Not Wishes.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. **Adaptations** are inherited traits that help survival/reproduction in a habitat — not something an animal “decides” mid-life.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Adaptations Are Not Wishes” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Adaptations Are Not Wishes” to a partner in 60 seconds with one diagram.
', "objectives" = '• Define adaptations as heritable traits that help survival/reproduction in a habitat.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Define adaptations as heritable traits that help survival/reproduction in a habitat.' WHERE "id" = 'ppg6sce4a03baaf72e2d1c41c' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6seb293f8f9b3668873d17','ppg6sce4a03baaf72e2d1c41c',NULL,'MULTIPLE_CHOICE','Core idea of “Adaptations Are Not Wishes” is closest to…','["**Adaptations** are inherited traits that help survival/reproduction in a habitat — not something an animal “decides” mid-life.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sd08f87c2321bca83a46f','ppg6sce4a03baaf72e2d1c41c',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Adaptations Are Not Wishes”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s7d15ac3ffc5d8544fa28','ppg6sce4a03baaf72e2d1c41c',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L6. Selective Pressures Stories (ppg6s62f27c74a928fb8ea38b)
UPDATE "Lesson" SET "content" = '# Selective Pressures Stories

*Grade 6 Science · Unit 10 of 10 · Traits and the Environment · Lesson 6*

## Objective

**I can** reason about how conditions can favor certain variations over generations (intro).

## Warm-up (2 minutes)

Quick think: Reason about how conditions can favor certain variations over generations (intro) — give one example from life or lab.

## Teach

### Big idea

Pressures (predators, climate, food) make some traits more successful over generations.

### Example 1 — Example 1

Beak example simplified.

### Try this

Apply “Selective Pressures Stories.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Selective Pressures Stories.”

### Common mistake (this lesson only)

Confusing “Selective Pressures Stories” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Selective Pressures Stories”?  
   **Answer:** Reason about how conditions can favor certain variations over generations (intro).

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Selective Pressures Stories.”
2. Example for “Selective Pressures Stories.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Pressures (predators, climate, food) make some traits more successful over generations.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Selective Pressures Stories” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Selective Pressures Stories” to a partner in 60 seconds with one diagram.
', "objectives" = '• Reason about how conditions can favor certain variations over generations (intro).
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Reason about how conditions can favor certain variations over generations (intro).' WHERE "id" = 'ppg6s62f27c74a928fb8ea38b' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s8d0ff4f0d0b41685b3b9','ppg6s62f27c74a928fb8ea38b',NULL,'MULTIPLE_CHOICE','Core idea of “Selective Pressures Stories” is closest to…','["Pressures (predators, climate, food) make some traits more successful over generations.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s0fa9a560566c96f6696e','ppg6s62f27c74a928fb8ea38b',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Selective Pressures Stories”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6sd1dd840d6f32534f40d2','ppg6s62f27c74a928fb8ea38b',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L7. Traits Unit Review (ppg6s36ac46b5fdcdda5cd21e)
UPDATE "Lesson" SET "content" = '# Traits Unit Review

*Grade 6 Science · Unit 10 of 10 · Traits and the Environment · Lesson 7*

## Objective

**I can** sort claim types: inherited, environmental, both — with evidence.

## Warm-up (2 minutes)

Quick think: Sort claim types: inherited, environmental, both — with evidence — give one example from life or lab.

## Teach

### Big idea

Traits, variation, genes intro, environment, adaptation honesty.

### Example 1 — Example 1

Sort inherited vs not.

### Try this

Apply “Traits Unit Review.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Traits Unit Review.”

### Common mistake (this lesson only)

Confusing “Traits Unit Review” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Traits Unit Review”?  
   **Answer:** Sort claim types: inherited, environmental, both — with evidence.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Traits Unit Review.”
2. Example for “Traits Unit Review.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Traits, variation, genes intro, environment, adaptation honesty.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Traits Unit Review” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Traits Unit Review” to a partner in 60 seconds with one diagram.
', "objectives" = '• Sort claim types: inherited, environmental, both — with evidence.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Sort claim types: inherited, environmental, both — with evidence.' WHERE "id" = 'ppg6s36ac46b5fdcdda5cd21e' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s2c06541d8f750c39da3c','ppg6s36ac46b5fdcdda5cd21e',NULL,'MULTIPLE_CHOICE','Core idea of “Traits Unit Review” is closest to…','["Traits, variation, genes intro, environment, adaptation honesty.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s7ec8a08a52f39b8e8c8a','ppg6s36ac46b5fdcdda5cd21e',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Traits Unit Review”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s39e75bbf1c719153bd0d','ppg6s36ac46b5fdcdda5cd21e',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L8. Year Capstone: Systems Thinking (ppg6sd640234d94da039b2e01)
UPDATE "Lesson" SET "content" = '# Year Capstone: Systems Thinking

*Grade 6 Science · Unit 10 of 10 · Traits and the Environment · Lesson 8*

## Objective

**I can** connect matter/energy, Earth systems, ecosystems, and traits in one stewardship CER.

## Warm-up (2 minutes)

Quick think: Connect matter/energy, Earth systems, ecosystems, and traits in one stewardship CER — give one example from life or lab.

## Teach

### Big idea

Science systems: matter, energy, Earth, life — parts interact; models have limits.

### Example 1 — Example 1

Pick two units and show a link.

### Try this

Apply “Year Capstone: Systems Thinking.”

**Check:** On-skill.

### Example 2 — Example 2

Add a second case for “Year Capstone: Systems Thinking.”

### Common mistake (this lesson only)

Confusing “Year Capstone: Systems Thinking” with a neighboring idea. Fix: say the definition, then test your example against it.

## Guided practice (we do)

1. What is the big idea of “Year Capstone: Systems Thinking”?  
   **Answer:** Connect matter/energy, Earth systems, ecosystems, and traits in one stewardship CER.

2. Give one confirming example.  
   **Answer:** On-skill.

3. Name a common mix-up to avoid.  
   **Answer:** Neighboring concept / wrong test.

## Independent practice

Complete each item. Show your thinking.

1. State the core idea of “Year Capstone: Systems Thinking.”
2. Example for “Year Capstone: Systems Thinking.”
3. Non-example?
4. Diagram or table.
5. Word problem / scenario.
6. Exit-style check.

### Answer key (try first)

1. Science systems: matter, energy, Earth, life — parts interact; models have limits.
2. Must match definition.
3. Contrast.
4. Labeled.
5. Solved with today''s idea.
6. Short correct answer.

## Exit ticket

1. Define or state “Year Capstone: Systems Thinking” in one sentence.
2. Give one example.

## Stretch (optional)

Teach “Year Capstone: Systems Thinking” to a partner in 60 seconds with one diagram.
', "objectives" = '• Connect matter/energy, Earth systems, ecosystems, and traits in one stewardship CER.
• Use a model, table, or labeled example.
• Check with a definition test or second representation.', "description" = 'Connect matter/energy, Earth systems, ecosystems, and traits in one stewardship CER.' WHERE "id" = 'ppg6sd640234d94da039b2e01' AND "courseId" = 'cmuh9bwv803vyedanwfbbyd4j';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6s1f50fb228ef90831342f','ppg6sd640234d94da039b2e01',NULL,'MULTIPLE_CHOICE','Core idea of “Year Capstone: Systems Thinking” is closest to…','["Science systems: matter, energy, Earth, life — parts interact; models have limits.","Matter has no mass","Forces never have direction","Cells are optional for life"]',0,'Lesson idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6scec05f621c94bfc9ea3c','ppg6sd640234d94da039b2e01',NULL,'MULTIPLE_CHOICE','Best next move when stuck on “Year Capstone: Systems Thinking”?','["Reread the definition and test an example","Guess with no model","Skip science words","Change the question"]',0,'Definition + example.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6se5d3de4ad5c3c60ae82f','ppg6sd640234d94da039b2e01',NULL,'MULTIPLE_CHOICE','Strong science answers usually include…','["a clear claim plus evidence or a labeled model","only feelings","only a doodle with no labels","copied jokes"]',0,'Claim + evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

