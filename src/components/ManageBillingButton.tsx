"use client";

import { useState } from "react";

type Props = {
  /** When false, button is hidden or shown disabled with a demo note. */
  hasStripeCustomer: boolean;
  demoOnly?: boolean;
};

export function ManageBillingButton({ hasStripeCustomer, demoOnly }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (demoOnly && !hasStripeCustomer) {
    return (
      <p className="mt-4 text-sm text-slate-500">
        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-400"
        >
          Manage billing
        </button>
        <span className="ml-2">Unavailable in demo mode (no Stripe customer).</span>
      </p>
    );
  }

  if (!hasStripeCustomer) return null;

  async function openPortal() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/billing/portal", { method: "POST" });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error || "Could not open billing portal");
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Network error opening billing portal");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={openPortal}
        disabled={loading}
        className="rounded-lg border border-emerald-800 bg-white px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-50 disabled:opacity-60"
      >
        {loading ? "Opening…" : "Manage billing"}
      </button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
