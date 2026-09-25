import { NextResponse } from "next/server";
import { getStripe, enrollmentStatusFromSubscription } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";

export const runtime = "nodejs";

async function findEnrollment(opts: {
  enrollmentId?: string | null;
  subscriptionId?: string | null;
  customerId?: string | null;
}) {
  if (opts.enrollmentId) {
    const byId = await prisma.enrollment.findUnique({ where: { id: opts.enrollmentId } });
    if (byId) return byId;
  }
  if (opts.subscriptionId) {
    const bySub = await prisma.enrollment.findFirst({
      where: { stripeSubscriptionId: opts.subscriptionId },
      orderBy: { updatedAt: "desc" },
    });
    if (bySub) return bySub;
  }
  if (opts.customerId) {
    const byCust = await prisma.enrollment.findFirst({
      where: { stripeCustomerId: opts.customerId },
      orderBy: { updatedAt: "desc" },
    });
    if (byCust) return byCust;
  }
  return null;
}

async function notifyPaymentFailed(userId: string | null | undefined, detail: string) {
  const title = "Payment failed";
  const body = detail || "Your Prosper Preparatory subscription payment failed.";
  console.warn("[billing] payment_failed", { userId, body });
  try {
    await prisma.notification.create({
      data: {
        userId: userId || null,
        type: "payment_failed",
        title,
        body,
        meta: JSON.stringify({ at: new Date().toISOString() }),
      },
    });
  } catch (e) {
    console.error("Notification stub failed", e);
  }
}


function subscriptionIdFromInvoice(invoice: Stripe.Invoice): string | null {
  // Legacy top-level field (may still appear on older API payloads)
  const legacy = (invoice as { subscription?: string | Stripe.Subscription | null }).subscription;
  if (typeof legacy === "string") return legacy;
  if (legacy && typeof legacy === "object" && "id" in legacy) return legacy.id;

  // Stripe API 2024+: parent.subscription_details.subscription
  const parent = invoice.parent;
  const subDetails = parent?.subscription_details;
  if (subDetails) {
    const sub = (subDetails as { subscription?: string | Stripe.Subscription }).subscription;
    if (typeof sub === "string") return sub;
    if (sub && typeof sub === "object" && "id" in sub) return sub.id;
  }
  return null;
}

export async function POST(req: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) {
    return NextResponse.json(
      { error: "Stripe webhook not configured (needs STRIPE_SECRET_KEY + STRIPE_WEBHOOK_SECRET)" },
      { status: 501 }
    );
  }

  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  if (!sig) return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret);
  } catch (err) {
    console.error("Webhook signature error", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Idempotency: skip if we already processed this Stripe event.id
  const existing = await prisma.stripeEvent.findUnique({ where: { id: event.id } });
  if (existing) {
    return NextResponse.json({ received: true, duplicate: true });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const checkout = event.data.object as Stripe.Checkout.Session;
        const enrollmentId = checkout.metadata?.enrollmentId;
        const customerId = typeof checkout.customer === "string" ? checkout.customer : null;
        const subscriptionId =
          typeof checkout.subscription === "string" ? checkout.subscription : null;

        const enrollment = await findEnrollment({
          enrollmentId,
          subscriptionId,
          customerId,
        });

        if (enrollment) {
          await prisma.enrollment.update({
            where: { id: enrollment.id },
            data: {
              status: "ACTIVE",
              startedAt: enrollment.startedAt ?? new Date(),
              stripeCustomerId: customerId ?? enrollment.stripeCustomerId,
              stripeSubscriptionId: subscriptionId ?? enrollment.stripeSubscriptionId,
              demoMode: false,
            },
          });
        } else {
          console.warn("checkout.session.completed: no enrollment found", {
            enrollmentId,
            customerId,
            subscriptionId,
          });
        }
        break;
      }

      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        const enrollment = await findEnrollment({
          enrollmentId: sub.metadata?.enrollmentId,
          subscriptionId: sub.id,
          customerId: typeof sub.customer === "string" ? sub.customer : null,
        });
        if (enrollment) {
          await prisma.enrollment.update({
            where: { id: enrollment.id },
            data: {
              status: enrollmentStatusFromSubscription(sub.status),
              stripeSubscriptionId: sub.id,
              stripeCustomerId:
                typeof sub.customer === "string" ? sub.customer : enrollment.stripeCustomerId,
              demoMode: false,
            },
          });
        }
        break;
      }

      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const enrollment = await findEnrollment({
          enrollmentId: sub.metadata?.enrollmentId,
          subscriptionId: sub.id,
          customerId: typeof sub.customer === "string" ? sub.customer : null,
        });
        if (enrollment) {
          await prisma.enrollment.update({
            where: { id: enrollment.id },
            data: { status: "CANCELED", demoMode: false },
          });
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = typeof invoice.customer === "string" ? invoice.customer : null;
        const subscriptionId = subscriptionIdFromInvoice(invoice);

        const enrollment = await findEnrollment({
          subscriptionId,
          customerId,
        });
        if (enrollment) {
          await prisma.enrollment.update({
            where: { id: enrollment.id },
            data: { status: "PAST_DUE", demoMode: false },
          });
          await notifyPaymentFailed(
            enrollment.userId,
            `Invoice ${invoice.id} payment failed for your Prosper Preparatory subscription.`
          );
        } else {
          await notifyPaymentFailed(null, `invoice.payment_failed with no matching enrollment (${invoice.id})`);
        }
        break;
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = typeof invoice.customer === "string" ? invoice.customer : null;
        const subscriptionId = subscriptionIdFromInvoice(invoice);

        const enrollment = await findEnrollment({
          subscriptionId,
          customerId,
        });
        if (enrollment && (enrollment.status === "PAST_DUE" || enrollment.status === "UNPAID")) {
          await prisma.enrollment.update({
            where: { id: enrollment.id },
            data: { status: "ACTIVE", demoMode: false },
          });
        }
        break;
      }

      default:
        // Acknowledge unhandled types without error
        break;
    }

    await prisma.stripeEvent.create({
      data: { id: event.id, type: event.type },
    });
  } catch (e) {
    console.error("Webhook handler error", event.type, e);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
