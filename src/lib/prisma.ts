import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";

type D1Binding = ConstructorParameters<typeof PrismaD1>[0];

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const d1Clients = new WeakMap<object, PrismaClient>();

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
    let client = d1Clients.get(db);
    if (!client) {
      client = new PrismaClient({ adapter: new PrismaD1(db), log: ["error"] });
      d1Clients.set(db, client);
    }
    return client;
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
