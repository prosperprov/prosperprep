/**
 * Format lesson/video duration for student UI.
 * Prefer exact M:SS from videoDurationSec; else rounded "N min" from durationMin.
 */
export function formatLessonDurationLabel(opts: {
  videoDurationSec?: number | null;
  durationMin?: number | null;
}): string | null {
  const sec = opts.videoDurationSec;
  if (sec != null && Number.isFinite(sec) && sec > 0) {
    const total = Math.round(sec);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  }
  const minutes = opts.durationMin;
  if (minutes == null || !Number.isFinite(minutes) || minutes <= 0) return null;
  const m = Math.round(minutes);
  return m === 1 ? "1 min" : `${m} min`;
}
