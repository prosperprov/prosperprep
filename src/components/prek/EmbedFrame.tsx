"use client";

type Props = {
  src: string;
  title: string;
  attribution: { label: string; href: string; provider: string; providerHref: string };
};

export function EmbedFrame({ src, title, attribution }: Props) {
  return (
    <div className="space-y-3 p-3 sm:p-4">
      <div className="relative w-full overflow-hidden rounded-2xl bg-slate-100" style={{ paddingBottom: "75%" }}>
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <p className="text-center text-sm text-slate-600">
        Learn{" "}
        <a href={attribution.href} className="font-semibold text-emerald-800 underline" target="_blank" rel="noreferrer">
          {attribution.label}
        </a>{" "}
        free on{" "}
        <a
          href={attribution.providerHref}
          className="font-semibold text-emerald-800 underline"
          target="_blank"
          rel="noreferrer"
        >
          {attribution.provider}
        </a>
        .
      </p>
    </div>
  );
}
