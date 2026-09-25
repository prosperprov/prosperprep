"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { brand } from "@/config/brand";

const grades = [
  { value: 0, label: "Kindergarten" },
  ...Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: `Grade ${i + 1}` })),
];

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name")),
      email: String(fd.get("email")),
      password: String(fd.get("password")),
      role: String(fd.get("role") || "STUDENT"),
      grade: fd.get("grade") !== "" ? Number(fd.get("grade")) : undefined,
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
    router.push(payload.role === "STUDENT" ? "/enroll" : "/dashboard");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-2xl font-bold text-slate-900">Create your account</h1>
      <p className="mt-2 text-sm text-slate-600">
        Join {brand.name} online school. After signup, students complete enrollment and monthly
        subscription.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Full name</span>
          <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Email</span>
          <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Password (min 8 characters)</span>
          <input name="password" type="password" minLength={8} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">I am a…</span>
          <select name="role" defaultValue="STUDENT" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
            <option value="STUDENT">Student</option>
            <option value="PARENT">Parent / guardian</option>
            <option value="TEACHER">Teacher</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Grade (students)</span>
          <select name="grade" defaultValue="7" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
            {grades.map((g) => (
              <option key={g.value} value={g.value}>
                {g.label}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-emerald-800 py-2.5 font-semibold text-white hover:bg-emerald-900 disabled:opacity-60"
        >
          {loading ? "Creating…" : "Create account"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-slate-600">
        Already enrolled?{" "}
        <Link href="/login" className="font-medium text-emerald-800 underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
