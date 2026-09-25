import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createClient() {
  return new PrismaClient({
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
