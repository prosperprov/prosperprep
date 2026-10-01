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

## Still stub / showcase (not expanded in this pass)

- ACT Prep · Grade 10 (9 lessons)
- SAT Prep · Grade 10 (9 lessons)
- College Athletic Pathway · Grade 10 (9 lessons) — coursework only; no athletic-scholarship marketing
- Entrepreneurship & Financial Independence · Grade 10 (9 lessons)
- Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study · Grade 10 (24 showcase lessons — denser than other electives; not rebuilt to 80-lesson year path yet)

## Generators

```bash
node scripts/gen-grade10-math-year.mjs
node scripts/gen-grade10-ela-year.mjs
node scripts/gen-grade10-science-year.mjs
node scripts/gen-grade10-history-year.mjs
```

## Verify on school.prosperprep.org

1. Admin creates or selects a student with ACTIVE enrollment at **grade 10**.
2. Sign in as that student → Course catalog shows G10 courses only.
3. Open Algebra & Beyond / English Literature / Biology & Chemistry / U.S. & World History.
4. Confirm Unit 1 open, later units locked until Unit 1 cleared (lessons complete or Unit Check ≥ 60%).
5. Open a lesson: teach body, practice, lesson check, optional video when mapped.
