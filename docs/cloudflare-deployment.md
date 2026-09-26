# Prosper Prep Cloudflare deployment

This setup creates the real hosting path on a temporary `workers.dev` address. Attach the school's domain to the same Worker later; the D1 database and application code stay in place.

## Before the first deployment

1. In Cloudflare, create a D1 database named `prosperprep-school`. Copy its database ID into `wrangler.jsonc` in place of `REPLACE_WITH_CLOUDFLARE_D1_DATABASE_ID` and commit that change. The ID is a resource identifier, not a secret.
2. Apply the migrations once before inviting users. In Workers Builds, a build command of `npm run db:migrate:cloudflare && npm run build:cloudflare` will apply pending migrations on each deployment and leave already-applied migrations alone. The Builds API token must have **D1 Edit** permission for this database; Cloudflare's default Worker deployment token may lack that permission. Alternatively, from an authenticated checkout run `npm ci` and `npm run db:migrate:cloudflare` once. **Do not run `npm run db:setup` on D1:** it is a destructive local demo seed.
3. Create the first admin without putting a password in Git: run `npm run admin:provision` from an interactive terminal, then `npx wrangler d1 execute prosperprep-school --remote --file .data/provision-admin.sql`. Delete `.data/provision-admin.sql` after verifying the account. Admins can create teachers and scholarship students in the dashboard.
4. Set runtime secrets in Cloudflare Workers & Pages → your Worker → Settings → Variables & Secrets: `NEXTAUTH_SECRET` (a new random secret, at least 32 bytes), `NEXTAUTH_URL` (the actual `https://...workers.dev` URL), and, before accepting paid enrollment, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ELEMENTARY`, `STRIPE_PRICE_MIDDLE`, and `STRIPE_PRICE_HIGH`. Configure Stripe Checkout and Billing Portal in the Stripe dashboard and point Stripe's webhook to `<NEXTAUTH_URL>/api/stripe/webhook`. Set `RESEND_API_KEY` and a verified `EMAIL_FROM` before depending on email notifications. Never put secrets in Git or `wrangler.jsonc`.
5. Connect `prosperprov/prosperprep` branch `main` in Cloudflare Workers Builds. Use repository root `/`, build command `npm run db:migrate:cloudflare && npm run build:cloudflare` if the Builds API token has D1 Edit permission (otherwise apply migrations separately and use `npm run build:cloudflare`), deploy command `npx wrangler deploy`, and Node.js 20 or newer. Set Worker name `prosper-prep-school` to match `wrangler.jsonc`. Cloudflare can assign a `workers.dev` URL; set `NEXTAUTH_URL` to that exact URL and redeploy.

The production migration creates 3 plans, 82 courses, 792 lessons, 266 quizzes, and 7,655 questions. It contains **no users, enrollment, or student records**. The development demo credentials do not exist in D1. Local development continues to use `.env` and SQLite; production uses the `DB` D1 binding.

## Before inviting families

- Verify the worker's home page, catalog, admin login, teacher creation, registration, enrollment, Stripe test payment, webhook delivery, quiz submission, gradebook, parent access, and grade-targeted session alerts with test users.
- Confirm tuition and course claims. Much of the K–12 catalog is still starter content; a passing deployment build does not make those courses full-year instruction.
- For the domain launch, update `NEXTAUTH_URL` to the final HTTPS domain, set the Cloudflare custom domain for the same Worker, update Stripe's webhook endpoint, and redeploy. Keep the same D1 binding.

## Checks available without a Cloudflare account

`npm run build` checks the Next.js app. `npm run build:cloudflare` packages it for Workers. `npx wrangler deploy --dry-run` checks Worker bundling. D1 migrations can be applied with `--local` before touching the remote database.
