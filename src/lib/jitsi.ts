import { brand } from "@/config/brand";

/** Build a Jitsi Meet room URL — no API keys required. */
export function jitsiRoomUrl(slug: string) {
  const prefix = brand.shortName.toLowerCase().replace(/\s+/g, "");
  const safe = slug.replace(/[^a-zA-Z0-9-_]/g, "-").toLowerCase();
  return `https://meet.jit.si/${prefix}-${safe}`;
}

export function makeSessionSlug(title: string) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
  const suffix = Math.random().toString(36).slice(2, 8);
  return `${base || "session"}-${suffix}`;
}
