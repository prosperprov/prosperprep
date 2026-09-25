"use client";

import { FormEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { brand, pricingCopy, mvpCatalog } from "@/config/brand";
import { MvpBanner } from "@/components/MvpBanner";

const grades = [
  { value: 0, label: "Kindergarten", band: "elementary" as const },
  ...[1, 2, 3, 4, 5].map((n) => ({ value: n, label: `Grade ${n}`, band: "elementary" as const })),
  ...[6, 7, 8].map((n) => ({ value: n, label: `Grade ${n}`, band: "middle" as const })),
  ...[9, 10, 11, 12].map((n) => ({ value: n, label: `Grade ${n}`, band: "high" as const })),
];

function planForBand(band: "elementary" | "middle" | "high") {
  return pricingCopy[band];
}

export default function EnrollPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [grade, setGrade] = useState(7);
  const [step, setStep] = useState<"account" | "subscribe">(session ? "subscribe" : "account");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (session) setStep("subscribe");
  }, [session]);

  useEffect(() => {
    if (params.get("checkout") === "cancel") {
      setMessage("Checkout was canceled. You can try again.");
    }
  }, [params]);

  const selected = grades.find((g) => g.value === grade)!;
  const plan = planForBand(selected.band);

  async function createAccount(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name")),
      email: String(fd.get("email")),
      password: String(fd.get("password")),
      role: "STUDENT",
      grade,
    };
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      setLoading(false);
      setError(data.error || "Could not create account");
      return;
    }
    await signIn("credentials", {
      email: payload.email,
      password: payload.password,
      redirect: false,
    });
    setLoading(false);
    setStep("subscribe");
    router.refresh();
  }

  async function subscribe(demo: boolean) {
    if (status !== "authenticated") {
      setError("Please create an account or log in first.");
      return;
    }
    setLoading(true);
    setError("");
    const res = await fetch("/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ grade, demo }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Enrollment failed");
      return;
    }
    if (data.mode === "stripe" && data.url) {
      window.location.href = data.url;
      return;
    }
    router.push(data.redirect || "/dashboard/student");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Enroll at {brand.name}</h1>
      <p className="mt-2 text-slate-600">
        Pick a grade, create your school account, and start a monthly online path. Current catalog:{" "}
        <strong>{mvpCatalog.label}</strong> — teachable starter modules with a published roadmap for
        deeper lessons (not yet a full-year credit map). Tuition: $99 / $129 / $159.
      </p>
      <div className="mt-4">
        <MvpBanner compact />
      </div>
      {message && (
        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          {message}
        </p>
      )}

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-slate-900">1. Choose grade</h2>
        <select
          value={grade}
          onChange={(e) => setGrade(Number(e.target.value))}
          className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2"
        >
          {grades.map((g) => (
            <option key={g.value} value={g.value}>
              {g.label}
            </option>
          ))}
        </select>
        <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-950">
          <p className="font-semibold">
            {plan.name} · ${plan.price}/month
          </p>
          <p className="mt-1">{plan.blurb}</p>
        </div>
      </div>

      {step === "account" && !session && (
        <form
          onSubmit={createAccount}
          className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 className="font-semibold text-slate-900">2. Create student account</h2>
          {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
          <input name="name" required placeholder="Student full name" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
          <input name="password" type="password" minLength={8} required placeholder="Password (min 8)" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-800 py-2.5 font-semibold text-white hover:bg-emerald-900 disabled:opacity-60"
          >
            {loading ? "Creating…" : "Continue to subscription"}
          </button>
          <p className="text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link href="/login?callbackUrl=/enroll" className="text-emerald-800 underline">
              Log in
            </Link>
          </p>
        </form>
      )}

      {(step === "subscribe" || session) && (
        <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900">2. Start monthly subscription</h2>
          {session && (
            <p className="text-sm text-slate-600">
              Signed in as <strong>{session.user.email}</strong>
            </p>
          )}
          {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
          <p className="text-sm text-slate-600">Continue to secure checkout to start your subscription.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              disabled={loading || status !== "authenticated"}
              onClick={() => subscribe(false)}
              className="flex-1 rounded-xl bg-emerald-800 py-2.5 font-semibold text-white hover:bg-emerald-900 disabled:opacity-60"
            >
              {loading ? "Working…" : "Continue to checkout"}
            </button>
            {process.env.NODE_ENV !== "production" && <button
              type="button"
              disabled={loading || status !== "authenticated"}
              onClick={() => subscribe(true)}
              className="flex-1 rounded-xl border border-emerald-800 py-2.5 font-semibold text-emerald-900 hover:bg-emerald-50 disabled:opacity-60"
            >
              Demo subscribe (no charge)
            </button>}
          </div>
        </div>
      )}
    </div>
  );
}
