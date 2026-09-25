import Link from "next/link";
import { brand, brandAssets } from "@/config/brand";
import { getSession } from "@/lib/auth";
import { SignOutButton } from "./SignOutButton";
import { MobileNav } from "./MobileNav";

export async function Nav() {
  const session = await getSession();
  const role = session?.user?.role;
  const dash =
    role === "TEACHER"
      ? "/dashboard/teacher"
      : role === "ADMIN"
        ? "/dashboard/admin"
        : role === "PARENT"
          ? "/dashboard/parent"
          : role === "STUDENT"
            ? "/dashboard/student"
            : null;

  const links = [
    { href: "/courses", label: "Courses" },
    { href: "/pricing", label: "Pricing" },
    ...(dash ? [{ href: dash, label: "Dashboard" }] : []),
  ];

  const authDesktop = session ? (
    <>
      <span className="hidden text-slate-500 sm:inline">{session.user.name}</span>
      <SignOutButton />
    </>
  ) : (
    <>
      <Link
        href="/login"
        className="rounded-lg px-3 py-1.5 text-slate-700 hover:bg-slate-100"
      >
        Log in
      </Link>
      <Link
        href="/enroll"
        className="rounded-lg bg-emerald-800 px-3 py-1.5 font-medium text-white hover:bg-emerald-900"
      >
        Enroll
      </Link>
    </>
  );

  const authMobile = session ? (
    <div className="flex flex-col gap-2">
      <p className="px-3 text-sm text-slate-500">{session.user.name}</p>
      <SignOutButton />
    </div>
  ) : (
    <div className="flex flex-col gap-2">
      <Link
        href="/login"
        className="flex min-h-[44px] items-center justify-center rounded-lg border border-slate-200 px-3 py-3 text-slate-800 hover:bg-slate-50"
      >
        Log in
      </Link>
      <Link
        href="/enroll"
        className="flex min-h-[44px] items-center justify-center rounded-lg bg-emerald-800 px-3 py-3 font-medium text-white hover:bg-emerald-900"
      >
        Enroll
      </Link>
    </div>
  );

  return (
    <header className="relative sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brandAssets.mark}
            alt=""
            className="h-9 w-9 rounded-full object-contain bg-black"
          />
          <span className="leading-tight">
            {brand.shortName}
            <span className="block text-[10px] font-normal uppercase tracking-wider text-emerald-800">
              {brand.tagline}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-emerald-800">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 text-sm md:flex">{authDesktop}</div>
        <MobileNav links={links} authSlot={authMobile} />
      </div>
    </header>
  );
}
