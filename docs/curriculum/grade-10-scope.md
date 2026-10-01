# Prosper Preparatory — Grade 10 Scope (production cores)

**Status:** Full-year cores shipped (migrations 0026–0029)  
**Date:** 2026-10-01 (America/Chicago)

## Core courses (production-ready)

| Subject | Catalog title | Units | Lessons | Migration |
|---|---|---|---|---|
| Math | Algebra & Beyond · Grade 10 | 10 | 80 | `0026_grade10_math_year.sql` |
| ELA | English Literature · Grade 10 | 10 | 80 | `0027_grade10_ela_year.sql` |
| Science | Biology & Chemistry · Grade 10 | 10 | 80 | `0028_grade10_science_year.sql` |
| History | U.S. & World History · Grade 10 | 10 | 80 | `0029_grade10_history_year.sql` |

Each lesson: Teach → Independent practice (6 items) → Lesson Check (3 MC) → Unit Check (10 MC per unit).  
Sequential unit unlock enabled for Grade 10 (same rule as Grade 6).  
Student-facing prose is Prosper Prep original (no external curriculum brand names).

## Electives hidden for Grade 10 (cores only)

Prosper: **CORE CLASSES ONLY** for Grade 10. These remain in D1 with `published = 0` (not deleted) so other grades keep ACT/SAT/Athletic/Bible; re-enable later by publishing + restoring `specialtySubjectsForGrade(10)`.

- ACT Prep · Grade 10 — unpublished
- SAT Prep · Grade 10 — unpublished
- College Athletic Pathway · Grade 10 — unpublished (no athletic-scholarship marketing)
- Entrepreneurship & Financial Independence · Grade 10 — unpublished
- Bible Study · Grade 10 — unpublished

Migration: `0034_grade10_cores_only.sql`. App filter: `src/lib/courseVisibility.ts`.

## Generators

```bash
node scripts/gen-grade10-math-year.mjs
node scripts/gen-grade10-ela-year.mjs
node scripts/gen-grade10-science-year.mjs
node scripts/gen-grade10-history-year.mjs
```

## Verify on school.prosperprep.org

1. Admin creates or selects a student with ACTIVE enrollment at **grade 10**.
2. Sign in as that student → Course catalog / subject islands show the **four cores only** (no ACT/SAT/Athletic/Bible/Entrepreneurship).
3. Open Algebra & Beyond / English Literature / Biology & Chemistry / U.S. & World History.
4. Confirm Unit 1 open, later units locked until Unit 1 cleared (lessons complete or Unit Check ≥ 60%).
5. Open a lesson: teach body, practice, lesson check, optional video when mapped.

## 2026-10-01 follow-up (Algebra Unit 1 + videos)

- Migration `0031_grade10_algebra_unit1_teach_rewrite.sql` — hand-authored Algebra Unit 1 Teach/Practice/Exit + skill-aligned lesson checks (fixes template-empty feel on Unit 1 Lesson 1).
- Migration `0032_grade10_lesson_videos_expand.sql` — oEmbed-verified YouTube map for all 320 active G10 core lessons; clears broken IDs from `0030`.
- Source JSON: `scripts/data/grade10-math-unit1-hand-teach.json`, `scripts/data/grade10-lesson-videos.json`, `content/grade10/`.

- Hotfix `0033_grade10_lesson_videos_fix_junk.sql` — replace junk/non-official YouTube matches; Grade 10 lessons show video above teach body; `Referrer-Policy: strict-origin-when-cross-origin` for YouTube Error 153; repaired `prisma/grade10-math/year.ts` questions array that broke Workers Builds.
