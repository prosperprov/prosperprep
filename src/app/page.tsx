import Link from "next/link";
import { brand, pricingCopy } from "@/config/brand";
import { BookOpen, Calendar, Users, ShieldCheck, Trophy, GraduationCap } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Nonprofit · {brand.location} · Online K–12 school
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
              Academics. Athletics.{" "}
              <span className="text-emerald-300">Entrepreneurs who finish strong.</span>
            </h1>
            <p className="mt-4 text-lg text-emerald-50/90">{brand.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/enroll"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-emerald-950 hover:bg-emerald-50"
              >
                Start enrollment
              </Link>
              <Link
                href="/prek"
                className="rounded-xl border border-amber-300/80 bg-amber-300/20 px-5 py-3 font-semibold text-amber-50 hover:bg-amber-300/30"
              >
                Free Pre-K Learn
              </Link>
              <Link
                href="/login"
                className="rounded-xl border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10"
              >
                School login
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold">What this school portal delivers</h2>
            <ul className="mt-4 space-y-3 text-emerald-50">
              <li className="flex gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                K–12 academics plus ACT/SAT, athletics, entrepreneurship/finance, and Bible study
              </li>
              <li className="flex gap-3">
                <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                Live teacher sessions — schedule, join, and lead from one dashboard
              </li>
              <li className="flex gap-3">
                <Users className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                Student, parent, teacher, and admin roles with clear access
              </li>
              <li className="flex gap-3">
                <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                Built for strong academics, athletics, and financial independence after high school
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                Monthly subscription enrollment — transparent nonprofit pricing
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-center text-sm text-slate-600">
            Already exploring Player Development, Academic Support, Competition & Exposure, Community
            Center, Tutoring, or Community Engagement on our main site?{" "}
            <strong className="text-slate-900">This app is the missing school login and online classroom.</strong>
          </p>
        </div>
      </section>

      <section className="border-b border-amber-100 bg-gradient-to-r from-amber-50 via-rose-50 to-sky-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center md:flex-row md:text-left">
          <div className="flex-1">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-800">Free for families</p>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-900 md:text-3xl">
              Pre-K Learn Hub — bright activities, no login
            </h2>
            <p className="mt-2 text-slate-700">
              Letters, numbers, colors, shapes, and puzzles in a kid-bright Prosper Prep learn space.
              Open and learn free while you explore our K–12 school.
            </p>
          </div>
          <Link
            href="/prek"
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-2xl bg-emerald-800 px-6 py-3 font-bold text-white shadow-md hover:bg-emerald-900"
          >
            Enter Pre-K Learn
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Monthly online school plans</h2>
          <p className="mt-2 text-slate-600">
            Serious academics, athletics, and entrepreneurship — clear nonprofit pricing
            ($99 / $129 / $159).
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {Object.values(pricingCopy).map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-emerald-800">{plan.grades}</p>
              <h3 className="mt-1 text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-3xl font-bold text-slate-900">${plan.price}</span>
                <span className="text-slate-500"> / month</span>
              </p>
              <p className="mt-3 flex-1 text-sm text-slate-600">{plan.blurb}</p>
              <Link
                href="/enroll"
                className="mt-6 block rounded-xl bg-emerald-800 px-4 py-2.5 text-center font-medium text-white hover:bg-emerald-900"
              >
                Enroll now
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          See the{" "}
          <Link href="/pricing" className="text-emerald-800 underline">
            full pricing page
          </Link>{" "}
          or{" "}
          <Link href="/courses" className="text-emerald-800 underline">
            Course Catalog
          </Link>
          .
        </p>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold text-slate-900">How online school works here</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Enroll & subscribe",
                body: "Choose Kindergarten through Grade 12, create your account, and complete secure checkout to start your monthly plan.",
              },
              {
                step: "2",
                title: "Open your dashboard",
                body: "Students and parents see courses by grade, schedule, upcoming live sessions, and progress. Teachers manage rosters and rooms.",
              },
              {
                step: "3",
                title: "Join live sessions",
                body: "Teachers schedule sessions with a meeting URL or auto-generated Jitsi room. One click to join — no extra API keys required.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-900">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <BookOpen className="mx-auto h-10 w-10 text-emerald-800" />
        <h2 className="mt-4 text-3xl font-bold text-slate-900">Ready for the next level — and for business</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Train for the next level. Learn to build income skills. Grow in faith and character. Questions? Reach us at{" "}
          <a href={`mailto:${brand.supportEmail}`} className="text-emerald-800 underline">
            {brand.supportEmail}
          </a>
          .
        </p>
        <Link
          href="/enroll"
          className="mt-8 inline-block rounded-xl bg-emerald-800 px-6 py-3 font-semibold text-white hover:bg-emerald-900"
        >
          Enroll your student
        </Link>
      </section>
    </div>
  );
}
