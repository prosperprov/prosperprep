# Grade 6 Math — full-year path

## What shipped

- **11 units** matching the live Khan G6 map (skip “Khan for families”): Ratios → Arithmetic with rational numbers → Rates and percentages → Exponents and order of operations → Negative numbers → Variables & expressions → Equations & inequalities → Plane figures → Coordinate plane → 3D figures → Data and statistics.
- **102 original Prosper Prep lessons** (~7.5–8k characters each) with Objective, Warm-up, Teach (examples + common mistakes), Guided practice, Independent practice (answer key collapsed), Exit ticket, Stretch, optional Khan “extra practice” link note.
- **11 Unit Check quizzes** (10 MC each), `sectionKey` = `unit-1` … `unit-11`.
- **UI:** Grade 6 course page uses expandable **Units** accordion; lesson chrome shows **Unit X of 11**.
- Old 9 math stubs retired (`sectionKey = retired`, hidden from year path).

## Files

| Path | Role |
|------|------|
| `scripts/gen-grade6-math-year.mjs` | Regenerates content + migration |
| `prisma/grade6-math/year.ts` | Lesson + quiz seeds for local `db:setup` |
| `content/grade6/math/outline.json` | Unit counts meta |
| `migrations/0005_grade6_math_year.sql` | Production D1 upsert (no user wipe) |
| `docs/curriculum/khan-g6-study-notes.md` | Includes § Live UI study (2026-09-29) |

## Production D1 (do **not** run `db:setup`)

```bash
npm run db:migrate:cloudflare
# or: npx wrangler d1 migrations apply prosperprep-school --remote
```

## Verify as student6@prosperprep.org

1. Log in at https://school.prosperprep.org
2. Open Grade 6 classroom → **Mathematics**
3. Confirm **Year path · Units** shows 11 expandable units (not a flat 9-item list)
4. Open Unit 1 lesson 1 — body should teach with practice + exit checks
5. Spot-check a mid/late unit (e.g. Unit 7 or 11)

```sql
SELECT sectionKey, COUNT(*) FROM Lesson
WHERE courseId = 'cmuh9bwto03qledantwv3vsfd' AND sectionKey LIKE 'unit-%'
GROUP BY sectionKey ORDER BY sectionKey;

SELECT title, length(content) AS n FROM Lesson
WHERE courseId = 'cmuh9bwto03qledantwv3vsfd' AND sectionKey = 'unit-1'
ORDER BY "order" LIMIT 3;
```

## ELA handoff (next)

Finish Math solidly first. Next turn: same pipeline for Grade 6 ELA — multi-unit year path, original PP bodies, expandable units UI already reusable via `sectionKey=unit-N` + accordion. Prefer CKLA-aligned topical units + grammar-in-context; do not paste Khan ELA text.
