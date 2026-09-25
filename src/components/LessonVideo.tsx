"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Privacy-enhanced YouTube embed with minimal chrome.
 * - youtube-nocookie + stripped player chrome
 * - Optional branded poster (never use Khan/YouTube thumbnails when provided)
 * - Captions forced off (cc_load_policy=0 + IFrame API unloadModule)
 * - Full-width opaque top/bottom overlay bars hide YouTube/Khan chrome;
 *   Prosper mark sits on the bottom bar (non-clickable). No scale/crop.
 * Burned-in open captions that are part of the video frames cannot be stripped.
 */

const CHROME_PARAMS =
  "rel=0&modestbranding=1&controls=0&cc_load_policy=0&iv_load_policy=3&showinfo=0&fs=0&disablekb=1&playsinline=1&enablejsapi=1";

function extractYouTubeId(raw: string): string | null {
  try {
    const trimmed = raw.trim();
    if (!trimmed) return null;
    const url = new URL(trimmed);
    const host = url.hostname.replace(/^www\./, "").toLowerCase();

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      if (url.pathname.startsWith("/embed/")) {
        const id = url.pathname.split("/")[2];
        return id && /^[\w-]{11}$/.test(id) ? id : null;
      }
      if (url.pathname.startsWith("/shorts/")) {
        const id = url.pathname.split("/")[2];
        return id && /^[\w-]{11}$/.test(id) ? id : null;
      }
      const v = url.searchParams.get("v");
      return v && /^[\w-]{11}$/.test(v) ? v : null;
    }
  } catch {
    if (/^[\w-]{11}$/.test(raw.trim())) return raw.trim();
  }
  return null;
}

function postPlayerCommand(
  win: Window,
  func: string,
  args: unknown[] = []
) {
  win.postMessage(JSON.stringify({ event: "command", func, args }), "*");
}

function forceCaptionsOff(win: Window | null | undefined) {
  if (!win) return;
  // Listen handshake then unload captions module / clear track
  win.postMessage(JSON.stringify({ event: "listening", id: 1 }), "*");
  postPlayerCommand(win, "unloadModule", ["captions"]);
  postPlayerCommand(win, "setOption", ["captions", "track", {}]);
  postPlayerCommand(win, "setOption", ["cc", "track", {}]);
}

export function youtubeEmbedUrl(raw: string, opts?: { autoplay?: boolean }): string | null {
  const id = extractYouTubeId(raw);
  if (!id) return null;
  const autoplay = opts?.autoplay ? "&autoplay=1&mute=0" : "";
  const origin =
    typeof window !== "undefined"
      ? `&origin=${encodeURIComponent(window.location.origin)}`
      : "";
  return `https://www.youtube-nocookie.com/embed/${id}?${CHROME_PARAMS}${autoplay}${origin}`;
}

export function LessonVideo({
  videoUrl,
  title = "Lesson video",
  posterUrl,
}: {
  videoUrl: string;
  title?: string;
  /** Branded poster; when set, YouTube/Khan thumbnails are never shown */
  posterUrl?: string | null;
}) {
  const id = useMemo(() => extractYouTubeId(videoUrl), [videoUrl]);
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const embed = useMemo(
    () => (id ? youtubeEmbedUrl(videoUrl, { autoplay: playing }) : null),
    // rebuild when playing flips so autoplay + origin land correctly
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id, videoUrl, playing]
  );

  useEffect(() => {
    if (!playing) return;
    const run = () => forceCaptionsOff(iframeRef.current?.contentWindow);
    run();
    const t1 = window.setTimeout(run, 400);
    const t2 = window.setTimeout(run, 1200);
    const t3 = window.setTimeout(run, 2500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [playing, embed]);

  if (!id || !embed) return null;

  const poster = posterUrl?.trim() || null;

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
      <div className="border-b border-slate-800 px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-300">
        Watch · {title}
      </div>
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {playing ? (
          <>
            <iframe
              ref={iframeRef}
              className="absolute inset-0 h-full w-full border-0"
              src={embed}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => forceCaptionsOff(iframeRef.current?.contentWindow)}
            />
            {/* Full-width top bar — covers Khan/YouTube title chrome edge to edge */}
            <div
              aria-hidden
              className="pointer-events-auto absolute inset-x-0 top-0 z-10 h-11 bg-black sm:h-12"
            />
            {/* Full-width bottom bar — tall enough to cover YouTube link, icon, more-videos, copy-link */}
            <div
              aria-hidden
              className="pointer-events-auto absolute inset-x-0 bottom-0 z-10 flex h-14 items-center bg-black pl-2 sm:h-16 sm:pl-2.5"
            >
              {/* Prosper mark on bottom-left; blocks clicks, not a link */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/branding/prosper-mark.png?v=official1"
                alt=""
                width={36}
                height={36}
                draggable={false}
                className="pointer-events-none h-8 w-8 select-none rounded-full object-contain sm:h-9 sm:w-9"
              />
            </div>
          </>
        ) : poster ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex h-full w-full flex-col items-center justify-end pb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:pb-10"
            aria-label={`Play ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-800 text-white shadow-lg ring-4 ring-white/20 transition group-hover:scale-105 group-hover:bg-emerald-700">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex h-full w-full flex-col items-center justify-end gap-3 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 px-6 pb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:pb-10"
            aria-label={`Play ${title}`}
          >
            <p className="absolute left-6 right-6 top-[38%] text-center text-lg font-semibold text-white sm:text-xl">
              {title}
            </p>
            <p className="absolute left-6 right-6 top-[48%] text-center text-xs uppercase tracking-wide text-emerald-200/80">
              Prosper Preparatory Online School
            </p>
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-800 text-white shadow-lg ring-4 ring-white/20 transition group-hover:scale-105 group-hover:bg-emerald-700">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
