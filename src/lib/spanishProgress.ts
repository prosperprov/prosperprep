"use client";

import { SPANISH_UNIT } from "@/lib/spanishUnit";

export function loadCompletedLessons(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(SPANISH_UNIT.storageKey);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

export function markLessonComplete(slug: string) {
  if (typeof window === "undefined") return;
  try {
    const current = loadCompletedLessons();
    if (current.includes(slug)) return;
    window.localStorage.setItem(SPANISH_UNIT.storageKey, JSON.stringify([...current, slug]));
  } catch {
    // Private mode or blocked storage: the lesson still finishes in this visit.
  }
}
