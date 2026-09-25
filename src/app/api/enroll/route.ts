import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { gradeBandFor } from "@/lib/grades";
import {
  getStripe,
  stripeConfigured,
  programSlugForBand,
  resolveStripePriceId,
} from "@/lib/stripe";

const schema = z.object({
  grade: z.number().int().min(0).max(12),
  demo: z.boolean().optional(),
});

export async function POST(req: Request) {
  const session = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { grade, demo } = schema.parse(body);
    const band = gradeBandFor(grade);
    const program = programSlugForBand(band);

    const plan = await prisma.plan.findFirst({
      where: { gradeBand: band, active: true },
    });
    if (!plan) {
      return NextResponse.json({ error: "No plan found for that grade band" }, { status: 400 });
    }

    const priceId = resolveStripePriceId(band, plan.stripePriceId);
    // Public enrollment must never activate a student without verified payment.
    // Scholarships are issued through the authenticated admin workflow.
    if (process.env.NODE_ENV === "production" && (demo || !stripeConfigured() || !priceId)) {
      return NextResponse.json(
        { error: "Online enrollment is temporarily unavailable. Please contact the school." },
        { status: 503 }
      );
    }
    const useStripe = stripeConfigured() && !demo && Boolean(priceId);
    const stripe = getStripe();

    await prisma.user.update({
      where: { id: session.user.id },
      data: { grade },
    });

    if (useStripe && stripe && priceId) {
      const enrollment = await prisma.enrollment.create({
        data: {
          userId: session.user.id,
          planId: plan.id,
          grade,
          status: "PENDING",
          demoMode: false,
        },
      });

      const origin = process.env.NEXTAUTH_URL || "http://localhost:3000";
      const meta = {
        userId: session.user.id,
        enrollmentId: enrollment.id,
        program,
      };

      // Omit payment_method_types so Dashboard dynamic payment methods apply
      // (cards, Google Pay/wallets, PayPal, Cash App Pay). Checkout Sessions do not
      // take automatic_payment_methods — that is a PaymentIntent-only param.
      const checkout = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: `${origin}/dashboard/student?checkout=success`,
        cancel_url: `${origin}/enroll?checkout=cancel`,
        customer_email: session.user.email || undefined,
        client_reference_id: session.user.id,
        allow_promotion_codes: true,
        metadata: meta,
        subscription_data: {
          metadata: meta,
        },
      });

      return NextResponse.json({
        mode: "stripe",
        url: checkout.url,
        enrollmentId: enrollment.id,
      });
    }

    // Demo path — activate without charging (Stripe not configured or demo forced)
    const enrollment = await prisma.enrollment.create({
      data: {
        userId: session.user.id,
        planId: plan.id,
        grade,
        status: "ACTIVE",
        demoMode: true,
        startedAt: new Date(),
      },
    });

    return NextResponse.json({
      mode: "demo",
      enrollmentId: enrollment.id,
      redirect: session.user.role === "PARENT" ? "/dashboard/parent" : "/dashboard/student",
    });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues[0]?.message || "Invalid input" }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ error: "Enrollment failed" }, { status: 500 });
  }
}
