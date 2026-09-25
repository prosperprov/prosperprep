import Link from "next/link";
import { brand, pricingCopy } from "@/config/brand";
import { MvpBanner } from "@/components/MvpBanner";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Monthly online school pricing</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        {brand.name} is a nonprofit program in {brand.location}. These monthly paths fund online
        K–12 instruction, live teacher sessions, and student support — aligned with our mission of
        serious academics, athletic scholarship readiness, and entrepreneurship for financial
        independence. Catalog depth is labeled honestly as Foundations / MVP modules while we expand
        lessons (see roadmap below).
      </p>
      <div className="mt-6">
        <MvpBanner />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {Object.values(pricingCopy).map((plan) => (
          <div key={plan.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-emerald-800">{plan.grades}</p>
            <h2 className="mt-1 text-xl font-bold">{plan.name}</h2>
            <p className="mt-4">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-slate-500"> / month</span>
            </p>
            <p className="mt-3 flex-1 text-sm text-slate-600">{plan.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>✓ Foundations / MVP subject catalog for the grade band</li>
              <li>✓ Student & parent dashboards</li>
              <li>✓ Live session access</li>
              <li>✓ Lesson progress tracking & schedule</li>
            </ul>
            <Link
              href="/enroll"
              className="mt-6 block rounded-xl bg-emerald-800 px-4 py-2.5 text-center font-medium text-white hover:bg-emerald-900"
            >
              Enroll
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-slate-500">
        Questions about family scholarships or multi-student households? Email{" "}
        <a href={`mailto:${brand.supportEmail}`} className="text-emerald-800 underline">
          {brand.supportEmail}
        </a>
        .
      </p>
    </div>
  );
}
