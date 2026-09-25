import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { stripeConfigured } from "@/lib/stripe";

/** Informational endpoint — enrollment API creates Checkout sessions. */
export async function GET() {
  const session = await getSession();
  return NextResponse.json({
    configured: stripeConfigured(),
    signedIn: Boolean(session),
    hint: "POST /api/enroll with { grade } to start Checkout when Stripe keys are set.",
  });
}
