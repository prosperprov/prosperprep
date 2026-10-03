import { brand, pricingCopy } from "@/config/brand";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Use</h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: September 22, 2026 · {brand.name} · Nonprofit · {brand.location}
      </p>
      <div className="mt-8 space-y-6 text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Agreement</h2>
          <p className="mt-2">
            By creating an account or enrolling, you agree to these Terms and our{" "}
            <Link href="/privacy" className="text-emerald-800 underline">
              Privacy Policy
            </Link>
            . {brand.name} is a nonprofit educational program in {brand.location} offering an online
            K–12 school portal alongside programs described at prosperprep.org.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Educational service</h2>
          <p className="mt-2">
            {brand.name} provides online K–12 lessons, assessments, and live sessions through this
            portal. Coursework here is school instruction. It does not by itself confer accreditation
            or NCAA eligibility.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Accounts & parental consent</h2>
          <p className="mt-2">
            Parents/guardians are responsible for students under 18 (and must consent for under-13
            accounts under COPPA). Keep credentials confidential. Roles (student, parent, teacher,
            admin) control access; parents see linked children only.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Tuition</h2>
          <p className="mt-2">
            Published monthly plans: Elementary ${pricingCopy.elementary.price}, Middle $
            {pricingCopy.middle.price}, High ${pricingCopy.high.price}. Tuition is billed through
            secure checkout. Refunds and cancellations follow the processor and school policies
            communicated at purchase.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Acceptable use</h2>
          <p className="mt-2">
            Use the portal for legitimate schoolwork. Do not cheat on assessments, harass others,
            disrupt live sessions, or attempt unauthorized access. Specialty courses (athletics, entrepreneurship, Bible study) are educational only — not legal,
            recruiting, investment, or pastoral counseling advice.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Intellectual property</h2>
          <p className="mt-2">
            Lesson content, branding, and software are owned by {brand.name} or its licensors.
            Students retain ownership of their original submitted work where applicable.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Disclaimers</h2>
          <p className="mt-2">
            The service is provided “as is.” We do not guarantee admission, scholarships, test
            scores, or business outcomes. Live rooms may use third-party meeting tools (e.g., Jitsi).
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-2">
            Questions:{" "}
            <a href={`mailto:${brand.supportEmail}`} className="text-emerald-800 underline">
              {brand.supportEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
