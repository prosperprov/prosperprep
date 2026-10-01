import Link from "next/link";
import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { prekActivities, skillLabels } from "@/lib/prekActivities";

export const metadata: Metadata = {
  title: "Free Pre-K Play Hub",
  description:
    "Free Prosper Prep Pre-K games and puzzles — letters, numbers, colors, shapes, and memory. No login required.",
};

export default function PrekHubPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-gradient-to-br from-emerald-700 via-teal-600 to-sky-600 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #fde68a 0, transparent 28%), radial-gradient(circle at 80% 10%, #fda4af 0, transparent 26%), radial-gradient(circle at 70% 80%, #a5b4fc 0, transparent 30%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="mb-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
            Free · No login · Ages 3–5
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-tight md:text-5xl">
            Prosper Prep Pre-K Play Hub
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-50">
            Bright games and puzzles for letters, numbers, colors, shapes, and memory — built for little
            learners and families. Jump in and play free, anytime.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#activities"
              className="rounded-2xl bg-white px-5 py-3 text-base font-bold text-emerald-900 shadow-lg hover:bg-amber-50"
            >
              Start playing
            </a>
            <Link
              href="/enroll"
              className="rounded-2xl border-2 border-white/70 px-5 py-3 text-base font-bold text-white hover:bg-white/10"
            >
              Explore K–12 school
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-100 bg-amber-50">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-3">
          {[
            { title: "Tap & play", body: "Big buttons, short rounds, and cheerful feedback for Pre-K attention spans." },
            { title: "Skill mix", body: "Letters, numbers, colors, shapes, memory, and a logic puzzle — all in one hub." },
            { title: "Family friendly", body: "Public and free. No account wall between your child and the next activity." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-100">
              <h2 className="text-lg font-bold text-emerald-900">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="activities" className="bg-gradient-to-b from-white via-sky-50 to-emerald-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">Play now</h2>
            <p className="mt-2 text-slate-600">
              Pick an activity. Each opens instantly — Prosper Prep originals plus one open embed with credit.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {prekActivities.map((activity) => (
              <Link
                key={activity.slug}
                href={`/prek/play/${activity.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`bg-gradient-to-br ${activity.accent} px-5 py-8 text-center text-white`}>
                  <div className="text-5xl drop-shadow" aria-hidden>
                    {activity.emoji}
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider opacity-90">
                    {skillLabels[activity.skill]} · ~{activity.minutes} min
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-800">
                    {activity.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{activity.blurb}</p>
                  <span className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-emerald-800 px-4 py-2 text-sm font-bold text-white group-hover:bg-emerald-900">
                    Play {activity.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Ready for Kindergarten and beyond?</h2>
          <p className="mt-3 text-slate-600">
            {brand.shortName} offers online K–12 paths with live teacher sessions, dashboards, and monthly
            enrollment when your family is ready for the next step.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/enroll"
              className="rounded-xl bg-emerald-800 px-5 py-3 font-semibold text-white hover:bg-emerald-900"
            >
              Start enrollment
            </Link>
            <Link
              href="/courses"
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50"
            >
              Course catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
