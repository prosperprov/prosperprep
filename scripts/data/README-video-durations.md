# Video duration sync (migration 0025)

- `video-durations-fetched.json` — unique YouTube ID → seconds (Piped / ANDROID_VR).
- `video-duration-gaps.json` — dead/unfetchable IDs; those lessons keep prior `durationMin` and have null `videoDurationSec`.

UI: `formatLessonDurationLabel` shows `M:SS` when `videoDurationSec` is set.
