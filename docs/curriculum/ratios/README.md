# Grade 6 Math Unit 1 — Ratios (hand-authored)

Source of truth for student-facing Teach/Warm-up/Guided/Exit/Check:

- `scripts/data/grade6-unit1-ratios.mjs`
- Rebuild docs + migration + `prisma/grade6-math/year.ts` patch:  
  `node scripts/build-unit1-ratios-rewrite.mjs`
- Production apply: `migrations/0014_grade6_ratios_teach_rewrite.sql` via  
  `npm run db:migrate:cloudflare` (never `db:setup`)

**Do not** re-run `node scripts/gen-grade6-math-year.mjs` expecting Mad-Libs for Unit 1 — the generator merges this hand file for `unit.n === 1` only. Prefer editing the data module above.

Keep existing 10 lesson IDs/titles. Independent practice stays on-skill from the banks (light polish OK).
