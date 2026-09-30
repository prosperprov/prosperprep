/** Shared by the header badge, docks, and the poller. Client-safe. */
export const MESSAGE_PULSE_EVENT = "pp-message-pulse";

/** Near-real-time poll. Workers + OpenNext do not keep a WebSocket open here. */
export const MESSAGE_POLL_MS = 8000;
