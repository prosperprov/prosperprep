import { mvpCatalog } from "@/config/brand";

export function MvpBanner({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        <p className="font-semibold">{mvpCatalog.label}</p>
        <p className="mt-1">{mvpCatalog.shortBlurb}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-950">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
        {mvpCatalog.label}
      </p>
      <p className="mt-1 font-medium">{mvpCatalog.honestyNote}</p>
      <p className="mt-2">{mvpCatalog.shortBlurb}</p>
      <p className="mt-3 font-semibold">{mvpCatalog.roadmapTitle}</p>
      <ul className="mt-1 list-disc space-y-1 pl-5">
        {mvpCatalog.roadmap.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
