/** America/Chicago wall time for teacher/student dashboards (label CT). */
const CT_ZONE = "America/Chicago";

/**
 * Human-readable datetime, e.g. "Sep 30, 2:01 PM CT".
 * Accepts ISO string or Date; returns empty string for invalid/missing values.
 */
export function formatCtDateTime(value: string | Date | null | undefined): string {
  if (value == null || value === "") return "";
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  const core = d.toLocaleString("en-US", {
    timeZone: CT_ZONE,
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  return `${core} CT`;
}

/** Time-only for "Updated …" stamps, e.g. "2:01:05 PM CT". */
export function formatCtTime(value: string | Date | null | undefined): string {
  if (value == null || value === "") return "";
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  const core = d.toLocaleTimeString("en-US", {
    timeZone: CT_ZONE,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
  return `${core} CT`;
}
