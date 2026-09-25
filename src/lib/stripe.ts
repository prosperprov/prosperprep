import Stripe from "stripe";
import type { GradeBand } from "@/types/school";

export type ProgramSlug = "elementary" | "middle" | "high";

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || !key.startsWith("sk_")) return null;
  // apiVersion omitted so the installed stripe package default is used
  return new Stripe(key);
}

export function stripeConfigured() {
  return Boolean(
    process.env.STRIPE_SECRET_KEY?.startsWith("sk_") &&
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.startsWith("pk_")
  );
}

/** Map grade band → Dashboard program slug used in Checkout metadata. */
export function programSlugForBand(band: GradeBand | string): ProgramSlug {
  switch (band) {
    case "ELEMENTARY":
      return "elementary";
    case "MIDDLE":
      return "middle";
    case "HIGH":
      return "high";
    default:
      return "elementary";
  }
}

/**
 * Resolve Stripe Price ID from env (preferred) or plan.stripePriceId fallback.
 * Env: STRIPE_PRICE_ELEMENTARY | STRIPE_PRICE_MIDDLE | STRIPE_PRICE_HIGH
 */
export function resolveStripePriceId(
  band: GradeBand | string,
  planStripePriceId?: string | null
): string | null {
  const envKey =
    band === "ELEMENTARY"
      ? process.env.STRIPE_PRICE_ELEMENTARY
      : band === "MIDDLE"
        ? process.env.STRIPE_PRICE_MIDDLE
        : band === "HIGH"
          ? process.env.STRIPE_PRICE_HIGH
          : undefined;

  const fromEnv = envKey?.trim();
  if (fromEnv && fromEnv.startsWith("price_")) return fromEnv;

  const fromPlan = planStripePriceId?.trim();
  if (fromPlan && fromPlan.startsWith("price_")) return fromPlan;

  return null;
}

/** Map Stripe subscription.status → Enrollment.status */
export function enrollmentStatusFromSubscription(
  status: Stripe.Subscription.Status | string
): string {
  switch (status) {
    case "active":
    case "trialing":
      return "ACTIVE";
    case "past_due":
      return "PAST_DUE";
    case "unpaid":
      return "UNPAID";
    case "canceled":
      return "CANCELED";
    case "paused":
      return "PAUSED";
    case "incomplete":
    case "incomplete_expired":
      return "PENDING";
    default:
      return "PENDING";
  }
}
