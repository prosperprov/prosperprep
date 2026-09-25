import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getStripe, stripeConfigured } from "@/lib/stripe";

/**
 * POST /api/billing/portal
 * Auth required. Creates a Stripe Customer Billing Portal session for the
 * signed-in user's stripeCustomerId and returns { url }.
 */
export async function POST() {
  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  if (!stripeConfigured()) {
    return NextResponse.json(
      { error: "Stripe is not configured (demo mode)" },
      { status: 501 }
    );
  }

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: "Stripe unavailable" }, { status: 501 });
  }

  const enrollment = await prisma.enrollment.findFirst({
    where: {
      userId: session.user.id,
      stripeCustomerId: { not: null },
    },
    orderBy: { updatedAt: "desc" },
  });

  // Parents may manage a linked child's billing customer if they have none of their own
  let customerId = enrollment?.stripeCustomerId ?? null;
  if (!customerId && session.user.role === "PARENT") {
    const links = await prisma.parentChild.findMany({
      where: { parentId: session.user.id },
      include: {
        child: {
          include: {
            enrollments: {
              where: { stripeCustomerId: { not: null } },
              orderBy: { updatedAt: "desc" },
              take: 1,
            },
          },
        },
      },
    });
    customerId =
      links.flatMap((l) => l.child.enrollments).find((e) => e.stripeCustomerId)
        ?.stripeCustomerId ?? null;
  }

  if (!customerId) {
    return NextResponse.json(
      { error: "No Stripe customer on file. Complete a paid enrollment first." },
      { status: 404 }
    );
  }

  const origin = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const returnPath =
    session.user.role === "PARENT" ? "/dashboard/parent" : "/dashboard/student";

  try {
    const portal = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${origin}${returnPath}`,
    });
    return NextResponse.json({ url: portal.url });
  } catch (e) {
    console.error("Billing portal error", e);
    return NextResponse.json({ error: "Could not open billing portal" }, { status: 500 });
  }
}
