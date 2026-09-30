-- Sequential unit unlock overrides (Grade 6 year path).
-- maxUnlockedUnit = N means units 1..N are open for that student+course even if prior units incomplete.
-- Do NOT run db:setup. Safe for production D1 (prosperprep-school).

CREATE TABLE IF NOT EXISTS "UnitUnlockOverride" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "maxUnlockedUnit" INTEGER NOT NULL,
    "note" TEXT NOT NULL DEFAULT '',
    "createdById" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UnitUnlockOverride_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UnitUnlockOverride_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UnitUnlockOverride_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "UnitUnlockOverride_userId_courseId_key" ON "UnitUnlockOverride"("userId", "courseId");
CREATE INDEX IF NOT EXISTS "UnitUnlockOverride_courseId_idx" ON "UnitUnlockOverride"("courseId");
