"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

/**
 * Lesson YouTube embed.
 *
 * Mobile (iOS Safari especially) will not start playback when:
 * - controls=0 hides the only play button, and
 * - autoplay=1&mute=0 is blocked because the iframe is created after the tap, and
 * - pointer-events overlays cover the player so a second tap never reaches YouTube.
 * On phones we mount the iframe immediately with controls=1 and playsinline=1
 * so the student's tap lands on YouTube's own play button (a real user gesture).
 */

const MOBILE_PLAYER_QUERY = "(max-width: 767px), (pointer: coarse)";

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

function postPlayerCommand(win: Window, func: string, args: unknown[] = []) {
  win.postMessage(JSON.stringify({ event: "command", func, args }), "*");
}

function forceCaptionsOff(win: Window | null | undefined) {
  if (!win) return;
  win.postMessage(JSON.stringify({ event: "listening", id: 1 }), "*");
  postPlayerCommand(win, "unloadModule", ["captions"]);
  postPlayerCommand(win, "setOption", ["captions", "track", {}]);
  postPlayerCommand(win, "setOption", ["cc", "track", {}]);
}

export function youtubeEmbedUrl(
  raw: string,
  opts?: { autoplay?: boolean }
): string | null {
  const id = extractYouTubeId(raw);
  if (!id) return null;
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    // controls=0 prevents mobile playback: iOS has no play control and ignores
    // a parent-page tap as the user gesture once the iframe loads asynchronously.
    controls: "1",
    cc_load_policy: "0",
    iv_load_policy: "3",
    playsinline: "1",
    fs: "1",
    enablejsapi: "1",
  });
  if (opts?.autoplay) {
    // Do not set mute=0. Unmuted autoplay is rejected on iOS and leaves a dead player.
    params.set("autoplay", "1");
  }
  if (typeof window !== "undefined") {
    params.set("origin", window.location.origin);
  }
  // www.youtube.com (not nocookie) so iOS sends a first-party-style embed referrer.
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
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
  // null until mounted so SSR and hydration both show the poster, then phones
  // switch to the native player before the user can tap a dead poster.
  const [nativePlayer, setNativePlayer] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia(MOBILE_PLAYER_QUERY);
    const apply = () => setNativePlayer(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const showIframe = nativePlayer || playing;
  // Autoplay only after an explicit poster click on desktop. Phones use YouTube's button.
  const embed = useMemo(
    () =>
      id && showIframe
        ? youtubeEmbedUrl(videoUrl, { autoplay: playing && !nativePlayer })
        : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id, videoUrl, playing, nativePlayer, showIframe]
  );

  useEffect(() => {
    if (!showIframe) return;
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
  }, [showIframe, embed]);

  if (!id) return null;

  const poster = posterUrl?.trim() || null;

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
      <div className="border-b border-slate-800 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-emerald-200 sm:text-sm">
        ▶ Watch video · {title}
      </div>
      <div
        className="relative aspect-video w-full overflow-hidden bg-black"
        data-lesson-video-mode={nativePlayer ? "native" : showIframe ? "playing" : "poster"}
      >
        {showIframe && embed ? (
          <iframe
            ref={iframeRef}
            className="absolute inset-0 h-full w-full border-0"
            src={embed}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share"
            allowFullScreen
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={() => forceCaptionsOff(iframeRef.current?.contentWindow)}
          />
        ) : poster ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex h-full w-full flex-col items-center justify-end gap-3 pb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:pb-10"
            aria-label={`Watch video: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-800 text-white shadow-lg ring-4 ring-white/20 transition group-hover:scale-105 group-hover:bg-emerald-700 sm:h-[4.5rem] sm:w-[4.5rem]">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="relative z-10 rounded-full bg-black/70 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white shadow-md">
              Watch video
            </span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex h-full w-full flex-col items-center justify-end gap-3 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 px-6 pb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:pb-10"
            aria-label={`Watch video: ${title}`}
          >
            <p className="absolute left-4 right-4 top-[32%] text-center text-base font-semibold text-white sm:left-6 sm:right-6 sm:top-[38%] sm:text-xl">
              {title}
            </p>
            <p className="absolute left-4 right-4 top-[48%] text-center text-[10px] uppercase tracking-wide text-emerald-200/80 sm:left-6 sm:right-6 sm:text-xs">
              Prosper Preparatory Online School
            </p>
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-800 text-white shadow-lg ring-4 ring-white/20 transition group-hover:scale-105 group-hover:bg-emerald-700 sm:h-[4.5rem] sm:w-[4.5rem]">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="relative z-10 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white ring-1 ring-white/30">
              Watch video
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
