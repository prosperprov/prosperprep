import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";

type D1Binding = ConstructorParameters<typeof PrismaD1>[0];

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createClient() {
  let db: D1Binding | undefined;
  try {
    db = (getCloudflareContext().env as { DB?: D1Binding }).DB;
  } catch {
    // The standard Next.js build and local Node development run without Workers.
  }
  return new PrismaClient({
    ...(db ? { adapter: new PrismaD1(db) } : {}),
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

function isStale(client: PrismaClient) {
  // After `prisma generate` adds models, a hot-reloaded Next process can keep an
  // old PrismaClient on globalThis that is missing the new delegates.
  return typeof (client as { teacherGrade?: { findMany?: unknown } }).teacherGrade?.findMany !== "function";
}

let prisma = globalForPrisma.prisma ?? createClient();
if (isStale(prisma)) {
  void prisma.$disconnect().catch(() => undefined);
  prisma = createClient();
}

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma };
