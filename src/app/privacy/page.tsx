import { brand } from "@/config/brand";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 prose prose-slate">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: September 22, 2026 · {brand.name} · Nonprofit · {brand.location}
      </p>
      <div className="mt-8 space-y-6 text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Who we are</h2>
          <p className="mt-2">
            {brand.name} (“we,” “us”) operates the online school portal at this site and related
            services linked from{" "}
            <a href={brand.marketingSite} className="text-emerald-800 underline">
              {brand.domain}
            </a>
            . We are a nonprofit educational program based in {brand.location}. Contact:{" "}
            <a href={`mailto:${brand.supportEmail}`} className="text-emerald-800 underline">
              {brand.supportEmail}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Information we collect</h2>
          <p className="mt-2">
            Account details (name, email, role), enrollment grade and plan, lesson progress, quiz
            attempts and grades, live-session participation metadata, and billing identifiers when
            Stripe is configured. We do not invent or store payment card numbers on our servers —
            Stripe processes payments when keys are present.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">COPPA / children under 13</h2>
          <p className="mt-2">
            {brand.name} is a school-facing service. For students under 13, we expect a parent or
            legal guardian to create or approve the account, provide consent for educational use of
            the portal, and supervise enrollment. We do not knowingly collect personal information
            from children under 13 for marketing purposes. Parents may review, correct, or request
            deletion of a child’s account data by emailing {brand.supportEmail}. If we learn we
            collected under-13 data without appropriate parental consent, we will delete or restrict
            it promptly.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">FERPA-aware school posture</h2>
          <p className="mt-2">
            Education records generated in this portal (progress, grades, report cards) are treated
            as sensitive student academic information. We limit access by role (student, parent linked
            to the child, teacher, admin). We do not sell student education records. Directory-style
            disclosures, if ever needed for school operations, will follow a written notice process.
            This statement describes our posture; it is not legal advice and does not replace
            institutional FERPA counsel for partner schools.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">How we use information</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Deliver coursework, dashboards, live sessions, and grades</li>
            <li>Process enrollment and subscriptions</li>
            <li>Communicate about school operations and support</li>
            <li>Secure the service and prevent abuse</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Sharing</h2>
          <p className="mt-2">
            We share data with processors only as needed to run the school portal (e.g., hosting,
            authentication, Stripe for payments). We do not sell personal information.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Your choices</h2>
          <p className="mt-2">
            Parents and adult students may request access, correction, or deletion of account data
            via {brand.supportEmail}, subject to legitimate school record-retention needs.
          </p>
        </section>
        <p className="text-sm text-slate-500">
          See also our <Link href="/terms" className="text-emerald-800 underline">Terms of Use</Link>.
        </p>
      </div>
    </div>
  );
}
