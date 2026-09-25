import { stripeConfigured } from "@/lib/stripe";

export function StripeBanner() {
  if (stripeConfigured()) return null;
  if (process.env.NODE_ENV === "production") {
    return <div className="bg-amber-50 px-4 py-2 text-center text-sm text-amber-900">Online enrollment is temporarily unavailable. Please contact the school.</div>;
  }
  return (
    <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-sm text-amber-900">
      Stripe keys are not configured — enrollments use <strong>demo mode</strong> (no real charges).
      Add <code className="rounded bg-amber-100 px-1">STRIPE_*</code> env vars for live Checkout.
    </div>
  );
}
