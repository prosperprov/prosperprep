# Prosper Preparatory — Online School MVP

Local full-stack MVP for **Prosper Preparatory** (`prosperprep.org`): K–12 online enrollment, monthly subscriptions, student/parent/teacher/admin dashboards, and live session scheduling.

Nonprofit · East Texas, USA · Online K–12

This app is the school portal (login, enrollment, dashboards, live rooms). The public marketing site at [prosperprep.org](https://prosperprep.org) covers Player Development, Academic Support, Competition & Exposure, Community Center, Tutoring, and Community Engagement.

Brand strings live in one file: `src/config/brand.ts`.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Prisma + SQLite
- NextAuth (credentials)
- Stripe Checkout + Billing + Customer Portal (test/live env vars)

## Quick start

```bash
cd /workspace/online-school
cp .env.example .env
npm install
npx prisma db push
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build check

```bash
npm run build
```

## Demo logins

Password for all: `demo1234`

| Role    | Email                     |
|---------|---------------------------|
| Student | student@prosperprep.org   |
| Parent  | parent@prosperprep.org    |
| Teacher | teacher@prosperprep.org   |
| Admin   | admin@prosperprep.org     |

## Stripe Billing (optional)

Launch uses **Stripe Billing only** (Checkout + Customer Portal). No Venmo/Braintree.

In local development, demo enrollment is available for testing. In production, public enrollment requires configured Stripe Checkout; scholarships are granted by School Ops. Never deploy the local SQLite file or run the demo seed in production.

## GitHub and Cloudflare launch

This archive is a development build, not a ready production deployment. The app uses Next.js 14 and Prisma's native SQLite client. Cloudflare Workers cannot use the local `prisma/dev.db` file as its production database. Migrate the persistence layer to Cloudflare D1 (or a hosted Postgres service), verify authentication and Stripe webhooks there, then deploy the app to a separate subdomain such as `school.prosperprep.org`.

The Git repository must exclude `.env`, `.data/`, all `*.db` files, and `demo-shots/`; these may contain student information, credentials, outgoing messages, or third-party reference video. The clean archive supplied separately excludes them. GitHub can then connect to Cloudflare Workers Builds for deployments on pushes after the database migration and framework compatibility work is complete.

Do not import demo accounts or reuse `demo1234` in a public environment. Move any real records from the local database using an audited migration after deciding where production data will live.

### Env vars

| Variable | Purpose |
|----------|---------|
| `STRIPE_SECRET_KEY` | `sk_test_...` (test) or `sk_live_...` (live) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_test_...` / `pk_live_...` |
| `STRIPE_WEBHOOK_SECRET` | Signing secret for `POST /api/stripe/webhook` |
| `STRIPE_PRICE_ELEMENTARY` | Monthly Price ID — Elementary **$99** |
| `STRIPE_PRICE_MIDDLE` | Monthly Price ID — Middle **$129** |
| `STRIPE_PRICE_HIGH` | Monthly Price ID — High **$159** |

Then re-seed (or update plans) so `stripePriceId` is stored, and use **Subscribe** on `/enroll`.

### Dashboard payment methods checklist

In [Stripe Dashboard → Settings → Payment methods](https://dashboard.stripe.com/settings/payment_methods) enable for Checkout:

- **Cards**
- **Google Pay** / link wallets (via cards + wallet settings)
- **PayPal**
- **Cash App Pay**

Do **not** hard-code `payment_method_types` in Checkout Session create — omit it so Dashboard dynamic payment methods control what shoppers see.

### Webhook events (`/api/stripe/webhook`)

Point a webhook (CLI or Dashboard) at `/api/stripe/webhook` and subscribe to:

- `checkout.session.completed` — activate Enrollment; store `stripeCustomerId` / `stripeSubscriptionId`
- `customer.subscription.updated` — sync Enrollment status (`ACTIVE` | `PAST_DUE` | `UNPAID` | `PAUSED` | `CANCELED` | `PENDING`)
- `customer.subscription.deleted` — mark `CANCELED`
- `invoice.payment_failed` — mark `PAST_DUE` + Notification stub
- `invoice.paid` — restore `ACTIVE` if was past due / unpaid

Events are idempotent via Prisma `StripeEvent` (primary key = Stripe `event.id`).

Local forward:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### Customer portal

`POST /api/billing/portal` (auth required) opens the Stripe Billing Portal for the user's `stripeCustomerId`. Student/parent dashboards show **Manage billing** when a Stripe customer exists (disabled note in pure demo mode).

Enable the portal in Dashboard → Settings → Billing → Customer portal.

## Key pages

- `/` — marketing landing
- `/pricing` — monthly plans
- `/enroll` — grade + account + subscribe
- `/login` · `/register`
- `/courses` · `/courses/[id]` — K–12 catalog with lesson lists
- `/courses/[id]/lessons/[lessonId]` — full Markdown lessons + mark complete
- `/dashboard/student` · `/parent` · `/teacher` · `/admin`

## QC scripts

```bash
npm run qc:content   # scripts/check-content.ts
npm run qc:courses   # scripts/report-courses.ts
npm run qc:counts
npm run qc:depth
```

## Demo shots

Do **not** publish files under `demo-shots/_archived_stale/` (old pricing/taglines). Regenerate fresh screenshots from the live UI.

## Curriculum

Catalog is **Foundations / MVP modules** (honest labeling on landing, pricing, courses, enroll). Grade 10 Math, ELA, and Bible are showcase-expanded (~24 lessons). Other courses still use starter modules (~9 lessons).

The Grade 7 entrepreneurship pilot now has three authored lessons, two short written practice prompts per lesson, graded checks, a twelve-question section quiz, and a teacher-scored evidence portfolio. See `docs/curriculum/grade-7-build-map.md` for the year plan and the remaining work. The other Grade 7 lessons still need the same depth review before being described as full-year courses.

Originally seeded as 52+ courses (K–12 × 4 subjects) with 9 teachable Markdown lessons each (objectives, teaching text, worked examples, practice + answer key, stretch). Seeded via `prisma/curriculum.ts` + `npm run db:seed`.

## Live sessions

Teachers schedule sessions from the teacher dashboard. Paste any meeting URL or leave blank to auto-generate a **Jitsi Meet** room URL (no external API keys).

## Contact

contact@prosperprep.org
