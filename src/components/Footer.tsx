import Link from "next/link";
import { brand, brandAssets } from "@/config/brand";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 md:flex-row md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brandAssets.mark}
              alt=""
              className="h-10 w-10 rounded-full object-contain bg-black"
            />
            <p className="font-semibold text-slate-900">{brand.name}</p>
          </div>
          <p className="mt-1 max-w-sm">
            Nonprofit · {brand.location} · Online K–12
          </p>
          <p className="mt-2">
            <a href={`mailto:${brand.supportEmail}`} className="text-emerald-800 hover:underline">
              {brand.supportEmail}
            </a>
          </p>
          <p className="mt-1">
            <a
              href={brand.marketingSite}
              className="text-emerald-800 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              prosperprep.org
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/courses" className="hover:text-emerald-800">
            Courses
          </Link>
          <Link href="/pricing" className="hover:text-emerald-800">
            Pricing
          </Link>
          <Link href="/enroll" className="hover:text-emerald-800">
            Enroll
          </Link>
          <Link href="/login" className="hover:text-emerald-800">
            School login
          </Link>
          <Link href="/privacy" className="hover:text-emerald-800">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-emerald-800">
            Terms
          </Link>
        </div>
        <p className="text-slate-500">© {new Date().getFullYear()} {brand.name}</p>
      </div>
    </footer>
  );
}
