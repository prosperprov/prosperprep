# Applying the Grade 6 core content update

## What shipped

- `prisma/grade6-core.ts` — authored bodies for all **9 lessons × 4 core courses** (ELA, Math, Life & Earth Science, World History).
- Wired in `prisma/curriculum.ts` so local `npm run db:setup` / seed regenerates Grade 6 core from this module.
- `migrations/0004_grade6_core_content.sql` — **UPDATE**-only migration for existing D1 catalog rows (same lesson IDs as `0002_catalog.sql`). Does **not** touch users, progress, quizzes, or specialty Grade 6 courses (Entrepreneurship, Athletic Pathway, Bible).

## Local (SQLite)

```bash
# Disposable local DB only — destroys demo data
npm run db:setup
```

Or, if you only need to refresh Grade 6 lesson text without a full reseed, run the UPDATE file against local D1/SQLite with your usual client.

## Production D1 (Cloudflare) — do **not** run `db:setup`

Preferred (migrations pipeline):

```bash
npm run db:migrate:cloudflare
# equivalent: npx wrangler d1 migrations apply prosperprep-school --remote
```

Workers Builds already runs `db:migrate:cloudflare` when configured per `docs/cloudflare-deployment.md`. Merging this migration to `main` and deploying applies it once.

One-shot file execute (if you need to apply the SQL without the migrations table flow):

```bash
npx wrangler d1 execute prosperprep-school --remote --file migrations/0004_grade6_core_content.sql
```

## Verify

```sql
SELECT title, length(content) AS n FROM Lesson
WHERE id IN (
  'cmuh9bwto03qnedanvih6z14d', -- Ratios
  'cmuh9bwsd03laedanptmprhap'  -- Theme
);
```

Expect `n` well above the old ~1–2k starter stubs (typically several thousand characters of markdown).
