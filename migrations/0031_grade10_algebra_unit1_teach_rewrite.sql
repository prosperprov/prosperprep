-- Grade 10 Algebra Unit 1: hand-authored Teach / Practice / Exit + skill-aligned Lesson Checks.
-- Updates content, objectives, description, and Question rows for Unit 1 (8 lessons).
-- Preserves lesson IDs and videoUrl (videos updated in a separate migration).
-- Do NOT run db:setup. Safe for production D1 (prosperprep-school).
-- Source: scripts/data/grade10-math-unit1-hand-teach.json

-- 1. Function Notation & Linear Forms (ppg10mebb94672c802a9fb7e31)
UPDATE "Lesson" SET "content" = '# Function Notation & Linear Forms

*Grade 10 Algebra & Beyond · Unit 1 of 10 · Linear Functions & Systems · Lesson 1*

## Objective

**I can** use function notation with linear rules and rewrite the same line in slope-intercept, point-slope, and standard form.

## Warm-up (3–5 minutes)

A savings plan is modeled by `f(x) = 40x + 120`, where `x` is months and `f(x)` is dollars saved.

1. What does `f(0)` mean in the story?
2. Estimate `f(6)` without a calculator, then compute exactly.

## Teach

### Function notation for a linear rule

`f(x)` means “the output of rule `f` when the input is `x`.” For a linear function, the rule has a **constant rate of change**.

Example: `f(x) = 3x + 5`

- `f(2) = 3(2) + 5 = 11`
- `f(-1) = 3(-1) + 5 = 2`

The same relationship can be written `y = 3x + 5`. Function notation just names the rule.

### Three forms of a line

1. **Slope-intercept:** `y = mx + b` (or `f(x) = mx + b`)
   - `m` = slope (rate of change)
   - `b` = y-intercept (value when `x = 0`)

2. **Point-slope:** `y - y₁ = m(x - x₁)`
   - Use when you know slope `m` and one point `(x₁, y₁)`.

3. **Standard form:** `Ax + By = C`
   - `A`, `B`, `C` are usually integers; `A` and `B` not both zero.
   - Useful for integer intercepts and for systems later.

### Worked example A — convert forms

A line has slope `2` and passes through `(3, 1)`.

**Point-slope:** `y - 1 = 2(x - 3)`

**Slope-intercept:**  
`y - 1 = 2x - 6` → `y = 2x - 5` → `f(x) = 2x - 5`

**Standard form:**  
`y = 2x - 5` → `-2x + y = -5` → multiply by `-1` → `2x - y = 5`

**Check:** Plug `(3, 1)` into each form.  
`f(3) = 2(3) - 5 = 1` ✓ · `2(3) - 1 = 5` ✓

### Worked example B — read a story

College savings: `f(x) = 50x + 200` dollars after `x` months.

- Slope `50` means **$50 added each month**.
- `f(0) = 200` means **$200 already saved** at the start.
- Find months to reach $700: `50x + 200 = 700` → `50x = 500` → `x = 10`.

### Common mistakes

- Treating `f` as a variable to multiply (`f × x`) instead of a rule name.
- Changing slope when rewriting forms (distribution / sign errors).
- Declaring forms “different lines” without checking a shared point.

### Connect

Linear fluency (notation + forms) is the launch pad for slope stories, inequalities, and systems in Unit 1.

## Guided practice (we do)

1. Given `f(x) = -4x + 7`, find `f(0)`, `f(2)`, and `f(-1)`.  
   **Answers:** 7; −1; 11.

2. Write `y - 4 = 3(x + 1)` in slope-intercept and standard form.  
   **Answers:** `y = 3x + 7`; `3x - y = -7` (or equivalent integer form).

3. Error hunt: A student rewrote `y = (1/2)x + 3` as `x + 2y = 3`. What went wrong?  
   **Repair:** Multiply by 2: `2y = x + 6` → `-x + 2y = 6` or `x - 2y = -6`.

## Independent practice

Complete each item with visible work. Try first; then use the answer key.

1. If `f(x) = 5x - 2`, find `f(3)` and `f(-2)`.
2. A line has slope `-3` and y-intercept `4`. Write `f(x)` and evaluate `f(2)`.
3. Write the point-slope equation of the line through `(2, -1)` with slope `4`, then convert to slope-intercept.
4. Convert `y = -2x + 6` to standard form with integer coefficients.
5. Convert `3x - 6y = 12` to slope-intercept form.
6. A gym membership costs `$25` to join plus `$15` per month. Write `f(x)` for total cost after `x` months and find `f(8)`.

### Answer key (try first)

1. `f(3) = 13`; `f(-2) = -12`
2. `f(x) = -3x + 4`; `f(2) = -2`
3. `y + 1 = 4(x - 2)`; `y = 4x - 9`
4. `2x + y = 6` (or `-2x - y = -6`)
5. `y = (1/2)x - 2`
6. `f(x) = 15x + 25`; `f(8) = 145`

## Exit ticket

1. In one sentence, what does `f(4)` tell you that “the y-value when x is 4” also tells you?
2. Name one common mistake when converting forms and how you would repair it.
3. Create a 2-step practice item for a classmate that requires converting point-slope to slope-intercept.

## Wrap-up

Strong Grade 10 algebra shows **structure + check**. Tomorrow: slope as a rate of change with units.
', "objectives" = '• Evaluate and interpret f(x) for linear rules.
• Convert among slope-intercept, point-slope, and standard form.
• Check that equivalent forms describe the same line.', "description" = 'Use f(x) with linear rules and move fluently among slope-intercept, point-slope, and standard form.' WHERE "id" = 'ppg10mebb94672c802a9fb7e31' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10mbcbaf553139b29405b00','ppg10mebb94672c802a9fb7e31',NULL,'MULTIPLE_CHOICE','If f(x) = 3x − 5, what is f(4)?','["7", "12", "−2", "17"]',0,'f(4) = 3(4) − 5 = 12 − 5 = 7.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m431090c08a98d8070fa2','ppg10mebb94672c802a9fb7e31',NULL,'MULTIPLE_CHOICE','Which equation is the slope-intercept form of y − 2 = 4(x + 1)?','["y = 4x + 6", "y = 4x − 2", "y = 4x + 2", "y = −4x + 6"]',0,'y − 2 = 4x + 4 → y = 4x + 6.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m5530ee52fefd64c8c4f6','ppg10mebb94672c802a9fb7e31',NULL,'MULTIPLE_CHOICE','Convert y = −2x + 3 to standard form with integer coefficients.','["2x + y = 3", "−2x + y = 3", "2x − y = 3", "x + 2y = 3"]',0,'Add 2x to both sides: 2x + y = 3.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- 2. Slope as Rate of Change (ppg10mf62371bb3e984bccbf8c)
UPDATE "Lesson" SET "content" = '# Slope as Rate of Change

*Grade 10 Algebra & Beyond · Unit 1 of 10 · Linear Functions & Systems · Lesson 2*

## Objective

**I can** find slope from points or a graph and interpret it as a rate of change with units.

## Warm-up (3–5 minutes)

A runner covers 6 miles in 48 minutes at a steady pace. About how many miles per hour is that? Estimate first, then compute.

## Teach

### Slope formula

For points `(x₁, y₁)` and `(x₂, y₂)` with `x₂ ≠ x₁`:

`m = (y₂ - y₁) / (x₂ - x₁)` = rise / run

- Positive slope → line rises left to right
- Negative slope → line falls left to right
- Zero slope → horizontal line
- Undefined slope → vertical line (`x₂ = x₁`)

### Worked example A — two points

Points `(1, 4)` and `(5, 12)`.

`m = (12 - 4) / (5 - 1) = 8/4 = 2`

**Check:** From `(1, 4)`, move right 2 and up 4 to `(3, 8)`, then right 2 and up 4 to `(5, 12)`. Same slope.

### Worked example B — units

A tank has 20 gallons at `t = 0` hours and 8 gallons at `t = 3` hours (steady leak).

`m = (8 - 20) / (3 - 0) = -12/3 = -4`

**Meaning:** The water level falls **4 gallons per hour**.

### Common mistakes

- Subtracting coordinates in inconsistent order (mixing which point is “first”).
- Calling a vertical line “zero slope” instead of undefined.
- Dropping units when explaining a real rate.

### Connect

Tomorrow you will build full line equations from slope and a point.

## Guided practice (we do)

1. Slope through `(0, 5)` and `(4, -3)`. **Answer:** `m = -2`.
2. A price rises from `$12` to `$18` over 3 months. Slope with units? **Answer:** `$2 per month`.
3. Error hunt: Student uses `(4-0)/(5-(-3))` for points `(0,5)` and `(4,-3)`. Repair the order. **Answer:** `(-3-5)/(4-0) = -2`.

## Independent practice

1. Find slope of the line through `(2, 7)` and `(6, 15)`.
2. Find slope through `(-1, 4)` and `(3, 4)`.
3. Find slope through `(5, 1)` and `(5, 9)` — carefully.
4. A car travels from mile marker 20 to mile marker 95 in 1.5 hours. What is the average rate of change (mph)?
5. On a graph, a line passes through `(0, 0)` and `(3, -6)`. State slope and whether the line rises or falls.
6. Table: `x: 1, 3, 5` and `y: 10, 4, -2`. Is the rate of change constant? If so, what is it?

### Answer key (try first)

1. `m = 2`
2. `m = 0` (horizontal)
3. undefined (vertical)
4. `50` mph
5. `m = -2`; falls left to right
6. Yes; `m = -3`

## Exit ticket

1. Why must you keep the same “first point / second point” order in both numerator and denominator?
2. Give a real-world story for slope `-5` with units.
3. Write one practice item that forces a choice among zero, negative, and undefined slope.

## Wrap-up

Slope is a **rate**. Label units whenever the story has them.
', "objectives" = '• Compute slope from two points or a graph.
• Interpret slope with units in a real context.
• Distinguish positive, negative, zero, and undefined slope.', "description" = 'Interpret slope in tables, graphs, and real contexts with units.' WHERE "id" = 'ppg10mf62371bb3e984bccbf8c' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10mb6d679ca34ac945c0f32','ppg10mf62371bb3e984bccbf8c',NULL,'MULTIPLE_CHOICE','What is the slope of the line through (1, 4) and (5, 12)?','["2", "3", "1/2", "8"]',0,'m = (12−4)/(5−1) = 8/4 = 2.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m85a38bdd0733c0d2e694','ppg10mf62371bb3e984bccbf8c',NULL,'MULTIPLE_CHOICE','A tank drops from 30 gallons to 18 gallons in 4 hours at a steady rate. What is the rate of change?','["−3 gallons per hour", "3 gallons per hour", "−12 gallons per hour", "12 gallons per hour"]',0,'m = (18−30)/4 = −12/4 = −3 gal/h.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m7d4081b807987ca457ec','ppg10mf62371bb3e984bccbf8c',NULL,'MULTIPLE_CHOICE','The line through (2, 7) and (2, −1) has which slope?','["undefined", "0", "4", "−4"]',0,'x-coordinates match → vertical line → undefined slope.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- 3. Writing Equations of Lines (ppg10m406e6666389aef59c152)
UPDATE "Lesson" SET "content" = '# Writing Equations of Lines

*Grade 10 Algebra & Beyond · Unit 1 of 10 · Linear Functions & Systems · Lesson 3*

## Objective

**I can** write the equation of a line from a point and slope, from two points, or using parallel/perpendicular conditions.

## Warm-up (3–5 minutes)

A line has slope `3` and passes through `(2, 1)`. Guess `y` when `x = 4`, then write an equation and check.

## Teach

### Point-slope → slope-intercept

Given slope `m` and point `(x₁, y₁)`:

`y - y₁ = m(x - x₁)` → solve for `y` to get `y = mx + b`.

### Two points

1. Compute `m = (y₂ - y₁)/(x₂ - x₁)`.
2. Use either point in point-slope form.
3. Convert to slope-intercept if asked.

### Parallel and perpendicular

- Parallel lines: same slope, different intercepts.
- Perpendicular lines: slopes are negative reciprocals (`m` and `-1/m` when `m ≠ 0`).

### Worked example A — two points

Points `(1, 2)` and `(4, 11)`.

`m = (11-2)/(4-1) = 9/3 = 3`

`y - 2 = 3(x - 1)` → `y = 3x - 1`

**Check:** `3(4)-1 = 11` ✓

### Worked example B — perpendicular

Line `y = 2x + 1`. Write the perpendicular line through `(0, 5)`.

Slope of new line: `-1/2`. Through `(0, 5)`: `y = (-1/2)x + 5`.

### Common mistakes

- Using the reciprocal without the negative for perpendicular slopes.
- Mixing which coordinates belong to which point when finding slope.
- Forgetting to distribute the slope in point-slope form.

## Guided practice (we do)

1. Equation through `(0, -4)` with slope `5`. **Answer:** `y = 5x - 4`.
2. Equation through `(2, 3)` and `(6, 3)`. **Answer:** `y = 3` (horizontal).
3. Line parallel to `y = -4x + 7` through `(1, 0)`. **Answer:** `y = -4x + 4`.

## Independent practice

1. Write slope-intercept form for slope `-2` through `(3, 5)`.
2. Write the equation through `(-1, 4)` and `(2, -5)`.
3. Write the equation of the vertical line through `(7, -2)`.
4. Find the line perpendicular to `y = (1/3)x - 8` through `(0, 1)`.
5. A line passes through `(0, 0)` and `(5, 15)`. Write `f(x)`.
6. Is `(4, 7)` on the line `y = 2x - 1`? Show the check.

### Answer key (try first)

1. `y = -2x + 11`
2. `m = -3`; `y = -3x + 1`
3. `x = 7`
4. `y = -3x + 1`
5. `f(x) = 3x`
6. `2(4)-1 = 7` → yes

## Exit ticket

1. Why does point-slope need only one point once slope is known?
2. State the perpendicular slope to `m = -4`.
3. Create a two-point equation problem for a classmate.

## Wrap-up

Tomorrow: graphing linear inequalities with solid/dashed boundaries.
', "objectives" = '• Write a line equation from slope and a point, or from two points.
• Use parallel and perpendicular slope relationships.
• Verify by substitution that a given point lies on the line.', "description" = 'Build line equations from two points, a point and slope, or parallel/perpendicular conditions.' WHERE "id" = 'ppg10m406e6666389aef59c152' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10me2fab8c152730391da1b','ppg10m406e6666389aef59c152',NULL,'MULTIPLE_CHOICE','Write the slope-intercept equation of the line with slope −3 through (2, 5).','["y = −3x + 11", "y = −3x + 5", "y = −3x − 1", "y = 3x + 11"]',0,'y − 5 = −3(x − 2) → y = −3x + 6 + 5 = −3x + 11.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m5d00b69fd3eba1b53717','ppg10m406e6666389aef59c152',NULL,'MULTIPLE_CHOICE','A line through (0, 0) and (4, 10) can be written as:','["y = (5/2)x", "y = (2/5)x", "y = 10x", "y = 4x + 10"]',0,'m = 10/4 = 5/2; through origin → y = (5/2)x.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10ma78cf8bff11992a36354','ppg10m406e6666389aef59c152',NULL,'MULTIPLE_CHOICE','Which line is perpendicular to y = 2x − 7?','["y = −(1/2)x + 3", "y = 2x + 3", "y = (1/2)x − 7", "y = −2x + 1"]',0,'Negative reciprocal of 2 is −1/2.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- 4. Graphing Linear Inequalities (ppg10m61e2fdb33d8d6359795c)
UPDATE "Lesson" SET "content" = '# Graphing Linear Inequalities

*Grade 10 Algebra & Beyond · Unit 1 of 10 · Linear Functions & Systems · Lesson 4*

## Objective

**I can** graph linear inequalities in two variables using the correct boundary style and a test point.

## Warm-up (3–5 minutes)

On a number line, graph `x > 2` and `x ≥ 2`. What is the only visual difference?

## Teach

### Boundary and shading

For `y > mx + b`, `y < mx + b`, `y ≥ mx + b`, `y ≤ mx + b`:

1. Graph the boundary line `y = mx + b`.
2. Use a **dashed** line for `<` or `>`; **solid** for `≤` or `≥`.
3. Test a point not on the line (often `(0,0)` if available).
4. Shade the half-plane that makes the inequality true.

### Worked example A

Graph `y < 2x - 1`.

- Boundary: `y = 2x - 1`, dashed.
- Test `(0,0)`: `0 < -1`? False → shade the side that does **not** include `(0,0)` (below the line for this slope-intercept form when y is isolated).

### Worked example B — rearrange first

`2x + 4y ≥ 8` → `y ≥ - (1/2)x + 2`.

Solid boundary; shade above / on the line (test `(0,3)`: true).

### Common mistakes

- Using a solid line for a strict inequality.
- Shading without a test point.
- Forgetting to reverse the inequality when dividing by a negative (when rearranging).

## Guided practice (we do)

1. Boundary style for `y ≤ -x + 4`? **Solid.**
2. Test `(0,0)` in `y > x + 1`. True or false? **False** (`0 > 1` is false).
3. Error hunt: Student shades both sides. Repair move? **One half-plane only; retest.**

## Independent practice

1. Describe how to graph `y ≥ 3x - 2` (boundary + shade).
2. Graph description for `y < -x`.
3. Rewrite `x - 2y > 6` with `y` isolated; state inequality direction.
4. Is `(1, 1)` a solution to `y ≤ 2x + 1`?
5. Is `(0, 0)` a solution to `3x + 3y < 0`?
6. Write an inequality whose graph is the half-plane above the solid line `y = -x + 5`.

### Answer key (try first)

1. Solid line `y=3x-2`; shade above (include boundary).
2. Dashed line `y=-x`; shade below.
3. `-2y > -x + 6` → `y < (1/2)x - 3` (flip when dividing by −2).
4. Yes: `1 ≤ 2+1`.
5. No: `0 < 0` is false.
6. `y ≥ -x + 5`

## Exit ticket

1. When do you use a dashed boundary?
2. Why is a test point required?
3. Write one inequality and name a point that is not a solution.

## Wrap-up

Next: systems by graphing — where two lines (or tables) meet.
', "objectives" = '• Graph a linear inequality in two variables with correct boundary and shading.
• Choose solid vs dashed boundaries for ≤/≥ vs </> .
• Test a point to confirm the solution half-plane.', "description" = 'Graph half-planes; shade solution sets carefully with solid/dashed boundaries.' WHERE "id" = 'ppg10m61e2fdb33d8d6359795c' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m434f9befc4d882a14bb4','ppg10m61e2fdb33d8d6359795c',NULL,'MULTIPLE_CHOICE','For y < 2x − 1, the boundary line should be:','["dashed", "solid", "horizontal only", "vertical only"]',0,'Strict inequalities use a dashed boundary.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m4f3f0b3ef421dfea8428','ppg10m61e2fdb33d8d6359795c',NULL,'MULTIPLE_CHOICE','Is (0, 0) a solution of y ≥ x + 2?','["No", "Yes", "Only if x is positive", "Cannot tell"]',0,'0 ≥ 0 + 2 is false.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m9de45337a9aff3283757','ppg10m61e2fdb33d8d6359795c',NULL,'MULTIPLE_CHOICE','After rewriting x − 2y > 6 for y, which is correct?','["y < (1/2)x − 3", "y > (1/2)x − 3", "y < −(1/2)x − 3", "y > −(1/2)x + 3"]',0,'−2y > −x + 6 → divide by −2 and flip: y < (1/2)x − 3.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- 5. Systems by Graphing & Tables (ppg10m75a64306c503610aa3fc)
UPDATE "Lesson" SET "content" = '# Systems by Graphing & Tables

*Grade 10 Algebra & Beyond · Unit 1 of 10 · Linear Functions & Systems · Lesson 5*

## Objective

**I can** estimate solutions to linear systems from graphs or tables and verify in both equations.

## Warm-up (3–5 minutes)

Guess the intersection of `y = x + 1` and `y = -x + 5` by thinking about where they meet, then check algebraically.

## Teach

### What a solution means

An ordered pair `(x, y)` solves a system only if it makes **every** equation true.

Graphically: intersection point(s) of the graphs.

### Cases

- One solution: lines intersect once (different slopes).
- No solution: parallel distinct lines (same slope, different intercepts).
- Infinitely many: same line (equivalent equations).

### Worked example A

System: `y = 2x + 1` and `y = -x + 7`.

Estimate intersection near `x = 2`: `2(2)+1=5` and `-2+7=5` → `(2, 5)`.

**Check both:** ✓ ✓

### Worked example B — table

| x | y=x+3 | y=2x |
| - | ----- | ---- |
| 1 | 4 | 2 |
| 2 | 5 | 4 |
| 3 | 6 | 6 |

Intersection from table: `(3, 6)`.

### Common mistakes

- Stopping after one equation checks.
- Calling parallel lines “infinite solutions.”
- Reading graph intersections without verifying algebraically when precision matters.

## Guided practice (we do)

1. Check whether `(1, 4)` solves `x+y=5` and `2x-y=-2`. **Yes:** 1+4=5; 2-4=-2.
2. Slopes both `3`, intercepts `2` and `-1`. Solutions? **None (parallel).**
3. Tables match for every x. Solutions? **Infinitely many.**

## Independent practice

1. Solve by inspection/graph reasoning: `y=x` and `y=4-x`.
2. Does `(3, 1)` solve `x+2y=5` and `3x-y=8`?
3. Classify: `y=2x+1` and `y=2x-4`.
4. Classify: `2x+2y=10` and `x+y=5`.
5. From a table, find the x where `y=3x-1` equals `y=x+5`.
6. Write a system with no solution.

### Answer key (try first)

1. `(2, 2)`
2. Yes: 3+2=5; 9-1=8
3. No solution
4. Infinitely many
5. `3x-1=x+5` → `2x=6` → `x=3`
6. Example: `y=x` and `y=x+2`

## Exit ticket

1. What must you do after reading an intersection from a sketch?
2. How do you recognize infinite solutions from equations?
3. Create a one-solution system for a classmate.

## Wrap-up

Tomorrow: substitution — algebraic precision when graphs are hard to read.
', "objectives" = '• Estimate a system solution from a graph.
• Check a candidate ordered pair in both equations.
• Classify a system as one solution, none, or infinitely many from graphs/tables.', "description" = 'Estimate solutions graphically and check with substitution into both equations.' WHERE "id" = 'ppg10m75a64306c503610aa3fc' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m2739b5ce3bc8c8c11777','ppg10m75a64306c503610aa3fc',NULL,'MULTIPLE_CHOICE','The solution of y = x + 1 and y = −x + 5 is:','["(2, 3)", "(1, 2)", "(3, 2)", "(0, 5)"]',0,'x+1=−x+5 → 2x=4 → x=2; y=3.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m447910b238e0e5f5703e','ppg10m75a64306c503610aa3fc',NULL,'MULTIPLE_CHOICE','Two lines with the same slope and different intercepts have:','["no solution", "one solution", "infinitely many solutions", "exactly two solutions"]',0,'Parallel distinct lines never meet.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m8b927e00e57de74a74bd','ppg10m75a64306c503610aa3fc',NULL,'MULTIPLE_CHOICE','If two equations graph as the same line, the system has:','["infinitely many solutions", "no solution", "exactly one solution", "only integer solutions"]',0,'Equivalent equations share every point on the line.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- 6. Systems by Substitution (ppg10m95b71a331fffa96fa38f)
UPDATE "Lesson" SET "content" = '# Systems by Substitution

*Grade 10 Algebra & Beyond · Unit 1 of 10 · Linear Functions & Systems · Lesson 6*

## Objective

**I can** solve a 2×2 linear system by substitution and verify in both equations.

## Warm-up (3–5 minutes)

If `y = 3x - 1` and `x + y = 11`, estimate `x`, then solve exactly.

## Teach

### Substitution steps

1. Solve one equation for one variable (choose the easiest).
2. Substitute that expression into the other equation.
3. Solve for the remaining variable.
4. Back-substitute to find the other variable.
5. Check in **both** originals.

### Worked example A

`y = 2x + 1`  
`3x + y = 16`

Substitute: `3x + (2x + 1) = 16` → `5x + 1 = 16` → `5x = 15` → `x = 3`  
`y = 2(3)+1 = 7`  
Solution: `(3, 7)`

**Check:** `3(3)+7=16` ✓ and `y=2(3)+1=7` ✓

### Worked example B — no solution

`y = 4x + 2`  
`y = 4x - 5`

Substitute: `4x + 2 = 4x - 5` → `2 = -5` false → **no solution**.

### Common mistakes

- Forgetting parentheses when substituting an expression with two terms.
- Checking only one equation.
- Dividing incorrectly when coefficients are messy — slow down and rewrite.

## Guided practice (we do)

1. `y = x - 1`, `x + y = 9`. **Answer:** `(5, 4)`.
2. `x = y + 2`, `2x + y = 11`. **Answer:** `y = 7/3`, `x = 13/3`.
3. Error hunt: Student substitutes but drops the `+1`. Repair from that step.

## Independent practice

1. `y = x + 4` and `2x + y = 10`
2. `x = 2y - 3` and `3x + y = 8`
3. `y = -3x` and `2x + 2y = 8`
4. `y = 5x + 1` and `y = 5x - 2`
5. `x + y = 6` and `y = 2x`
6. `2x - y = 5` and `y = x - 1`

### Answer key (try first)

1. `(2, 6)`
2. `(13/7, 17/7)` → better: from `x=2y-3`: `3(2y-3)+y=8` → `6y-9+y=8` → `7y=17` → `y=17/7`, `x=13/7`
3. `2x + 2(-3x)=8` → `-4x=8` → `x=-2`, `y=6`
4. No solution
5. `(2, 4)`
6. `2x - (x-1)=5` → `x+1=5` → `x=4`, `y=3`

## Exit ticket

1. Why do parentheses matter in substitution?
2. What equation result signals no solution?
3. Write a substitution-friendly system (one variable already isolated).

## Wrap-up

Tomorrow: elimination — useful when isolation looks messy.
', "objectives" = '• Solve a linear system by isolating a variable and substituting.
• Check solutions in both original equations.
• Recognize no-solution and infinite-solution outcomes while substituting.', "description" = 'Solve 2×2 linear systems by substitution with a full check.' WHERE "id" = 'ppg10m95b71a331fffa96fa38f' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10mf2621cc559d64275d0eb','ppg10m95b71a331fffa96fa38f',NULL,'MULTIPLE_CHOICE','Solve: y = 2x + 1 and 3x + y = 16. What is x?','["3", "2", "5", "7"]',0,'3x+(2x+1)=16 → 5x=15 → x=3.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10maa5639987cd5a9dacba5','ppg10m95b71a331fffa96fa38f',NULL,'MULTIPLE_CHOICE','Solve: y = x − 1 and x + y = 9. What is the solution pair?','["(5, 4)", "(4, 5)", "(9, 8)", "(1, 0)"]',0,'x+(x−1)=9 → 2x=10 → x=5, y=4.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m0ad27ecd69deaa368885','ppg10m95b71a331fffa96fa38f',NULL,'MULTIPLE_CHOICE','Substituting y = 4x + 2 into y = 4x − 5 yields 2 = −5. The system has:','["no solution", "one solution", "infinitely many solutions", "two solutions"]',0,'A false statement means the lines never meet.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- 7. Systems by Elimination (ppg10m059cda1f94c454de63e8)
UPDATE "Lesson" SET "content" = '# Systems by Elimination

*Grade 10 Algebra & Beyond · Unit 1 of 10 · Linear Functions & Systems · Lesson 7*

## Objective

**I can** eliminate a variable by combining equations and solve the resulting one-variable equation.

## Warm-up (3–5 minutes)

Add: `(2x + y = 7)` and `(x - y = 2)`. What happens to `y`?

## Teach

### Elimination idea

If coefficients of one variable are opposites, add the equations to cancel that variable. If they match, subtract. If not, multiply one or both equations first.

### Worked example A

`2x + 3y = 12`  
`4x - 3y = 6`

Add: `6x = 18` → `x = 3`  
`2(3)+3y=12` → `6+3y=12` → `y=2`  
Solution `(3, 2)`

### Worked example B — multiply first

`x + 2y = 9`  
`3x + 4y = 17`

Multiply first by 3: `3x + 6y = 27`  
Subtract second: `(3x+6y)-(3x+4y)=27-17` → `2y=10` → `y=5`  
`x+10=9` → `x=-1`  
Solution `(-1, 5)`

### Special cases

- `0 = 5` → no solution
- `0 = 0` → infinitely many

### Common mistakes

- Multiplying only one side of an equation.
- Forgetting to multiply every term.
- Adding when you meant to subtract (sign errors on both variables).

## Guided practice (we do)

1. `x+y=10`, `x-y=2`. **Answer:** `(6, 4)`.
2. `2x+y=7`, `2x+3y=13`. Subtract. **Answer:** `(2, 3)`.
3. Name the first multiply step for `2x+3y=1`, `5x+6y=4` to eliminate `y`.

## Independent practice

1. `x + y = 8` and `x - y = 2`
2. `3x + 2y = 16` and `3x - 2y = 8`
3. `2x + 5y = 9` and `4x + 5y = 13`
4. `x + 2y = 7` and `2x + 4y = 10`
5. `2x - y = 5` and `x + y = 4`
6. `3x + 4y = 10` and `6x + 8y = 20`

### Answer key (try first)

1. `(5, 3)`
2. `(4, 2)`
3. Subtract: `-2x = -4` → `x=2`; `4+5y=9` → `y=1`
4. No solution (`2x+4y=14` vs `10`)
5. Add: `3x=9` → `x=3`, `y=1`
6. Infinitely many (second is double the first)

## Exit ticket

1. When do you multiply before eliminating?
2. What does `0=0` after elimination mean?
3. Write a system best suited to elimination (opposites already present).

## Wrap-up

Tomorrow: applications — translate stories into systems and solve.
', "objectives" = '• Solve a 2×2 system by adding/subtracting equations to eliminate a variable.
• Multiply equations as needed to align coefficients.
• Check solutions and identify special cases.', "description" = 'Solve 2×2 linear systems by elimination with aligned coefficients.' WHERE "id" = 'ppg10m059cda1f94c454de63e8' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m0844cd86a8d1951e8fae','ppg10m059cda1f94c454de63e8',NULL,'MULTIPLE_CHOICE','Add 2x+3y=12 and 4x−3y=6. What is x?','["3", "2", "6", "0"]',0,'6x=18 → x=3.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m9b9f731d0f3a617df9b3','ppg10m059cda1f94c454de63e8',NULL,'MULTIPLE_CHOICE','Solve x+y=10 and x−y=2 by elimination. The solution is:','["(6, 4)", "(4, 6)", "(8, 2)", "(5, 5)"]',0,'Add: 2x=12 → x=6; y=4.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m00cda6ad1d5688a8e1dc','ppg10m059cda1f94c454de63e8',NULL,'MULTIPLE_CHOICE','After elimination you get 0 = 0. The system has:','["infinitely many solutions", "no solution", "exactly one solution", "only the origin"]',0,'0=0 is always true → dependent equations.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- 8. Systems Applications (ppg10m55feea6366e7888027d0)
UPDATE "Lesson" SET "content" = '# Systems Applications

*Grade 10 Algebra & Beyond · Unit 1 of 10 · Linear Functions & Systems · Lesson 8*

## Objective

**I can** turn a two-unknown situation into a system, solve it, and interpret the answer with units.

## Warm-up (3–5 minutes)

Adult tickets `$12`, student tickets `$8`. Two families spend `$88` on 9 tickets. Estimate how many adult tickets before solving.

## Teach

### Modeling checklist

1. Define variables with units (`a` = adult tickets, `s` = student tickets).
2. Write two independent equations (often a total-count and a total-value).
3. Solve; label the answer.
4. Check in the story, not only in algebra.

### Worked example A — tickets

`a + s = 9`  
`12a + 8s = 88`

From first: `s = 9 - a`  
`12a + 8(9-a) = 88` → `12a + 72 - 8a = 88` → `4a = 16` → `a = 4`, `s = 5`

**Check:** `12(4)+8(5)=48+40=88` ✓

### Worked example B — mixture / break-even style

A food truck’s profit: `P = 6x - 90` dollars for `x` meals. Another day uses `P = 4x - 40`. For what `x` are profits equal?

`6x - 90 = 4x - 40` → `2x = 50` → `x = 25` meals.

### Common mistakes

- Variables that do not match the story units.
- Writing two equations that say the same thing.
- Reporting `(x,y)` without stating what each number means.

## Guided practice (we do)

1. Phones and cases: 15 items total; phones `$200`, cases `$30`; total `$1710`. Set up the system (do not finish if time is short).  
   `p+c=15`, `200p+30c=1710`.

2. Solve that system. **Answer:** `p=6`, `c=9`.

3. Error hunt: Student gets a fractional number of tickets. What should they recheck?

## Independent practice

1. `x` notebooks at `$3` and `y` pens at `$1`. Total 20 items cost `$42`. Find `x` and `y`.
2. Boat: still-water speed `b`, current `c`. Downstream `b+c=10`, upstream `b-c=6`. Find `b` and `c`.
3. Two plans: `Cost A = 20 + 5m`, `Cost B = 8m`. When is A cheaper than B? (inequality OK; also find break-even.)
4. Coins: `d` dimes and `q` quarters; 12 coins worth `$2.10`. Find `d` and `q`.
5. Create numbers: 40 students in vans of 8 and cars of 4; 7 vehicles. How many vans?
6. Check `(3, 5)` in `x+y=8` and `4x+2y=22`.

### Answer key (try first)

1. `3x+y=42`, `x+y=20` → `x=11`, `y=9`
2. `b=8`, `c=2`
3. Break-even `20+5m=8m` → `m=20/3≈6.67`; A cheaper when `20+5m < 8m` → `m > 20/3`
4. `d+q=12`, `10d+25q=210` → `q=6`, `d=6`
5. `v+c=7`, `8v+4c=40` → `v=3`, `c=4`
6. Yes: 3+5=8; 12+10=22

## Exit ticket

1. Why do application systems need two independent relationships?
2. How do you know your answer is reasonable in context?
3. Write a short ticket/money story that needs a system.

## Wrap-up

Unit 1 complete after your Unit Check: linear forms, slope, inequalities, and systems — structure + check every time.
', "objectives" = '• Translate a two-unknown story into a linear system.
• Solve with substitution or elimination.
• Interpret the solution with units and check reasonableness.', "description" = 'Model real situations with 2×2 systems and interpret solutions with units.' WHERE "id" = 'ppg10m55feea6366e7888027d0' AND "courseId" = 'cmuh9by2508leedan8cb09q8z';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m7d8076755a2e37f2fa2d','ppg10m55feea6366e7888027d0',NULL,'MULTIPLE_CHOICE','Adult tickets $12, student $8; 9 tickets cost $88. How many adult tickets?','["4", "5", "3", "6"]',0,'a+s=9, 12a+8s=88 → a=4, s=5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10md37dfd3e83ee6f7dd353','ppg10m55feea6366e7888027d0',NULL,'MULTIPLE_CHOICE','Downstream b+c=10 and upstream b−c=6. What is still-water speed b?','["8", "6", "10", "4"]',0,'Add: 2b=16 → b=8.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg10m4d744589355053fd1dcb','ppg10m55feea6366e7888027d0',NULL,'MULTIPLE_CHOICE','Why must an application system use two independent relationships?','["One equation alone leaves infinitely many pairs that fit a single constraint", "Two equations always guarantee integer answers", "Variables cannot share units", "Graphs cannot show money stories"]',0,'A single linear constraint has infinitely many solutions; a second independent constraint pins down one pair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

