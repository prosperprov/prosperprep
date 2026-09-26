import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { cache } from "react";

type D1Binding = ConstructorParameters<typeof PrismaD1>[0];

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const getD1Client = cache((db: D1Binding) =>
  new PrismaClient({ adapter: new PrismaD1(db), log: ["error"] })
);

function isStale(client: PrismaClient) {
  // HMR may retain a client generated before a schema change.
  return typeof (client as { teacherGrade?: { findMany?: unknown } }).teacherGrade?.findMany !== "function";
}

function getClient(): PrismaClient {
  let db: D1Binding | undefined;
  try {
    db = (getCloudflareContext().env as { DB?: D1Binding }).DB;
  } catch {
    // Next.js builds and local Node development have no request context.
  }

  if (db) {
    return getD1Client(db);
  }

  if (process.env.NODE_ENV === "production" && !process.env.DATABASE_URL) {
    throw new Error("D1 binding unavailable for this database request");
  }
  let client = globalForPrisma.prisma;
  if (!client || isStale(client)) {
    if (client) void client.$disconnect().catch(() => undefined);
    client = new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    });
    if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;
  }
  return client;
}

// Server modules are loaded before the first request. Resolve the D1 binding
// when a delegate is used, inside OpenNext's request context.
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, property) {
    const client = getClient();
    const value = Reflect.get(client, property);
    return typeof value === "function" ? value.bind(client) : value;
  },
});
