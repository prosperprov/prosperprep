import bcrypt from "bcryptjs";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { createInterface } from "node:readline/promises";

if (!process.stdin.isTTY || !process.stdin.setRawMode) {
  throw new Error("Run this script in an interactive terminal; never pass a password on the command line.");
}

const rl = createInterface({ input: process.stdin, output: process.stdout });
const name = (await rl.question("Admin name: ")).trim();
const email = (await rl.question("Admin email: ")).trim().toLowerCase();
rl.close();
if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  throw new Error("Enter a valid name and email.");
}

process.stdout.write("Admin password (hidden): ");
process.stdin.setRawMode(true);
process.stdin.resume();
let password = "";
try {
  password = await new Promise((resolve, reject) => {
    const onKey = (chunk) => {
      for (const char of chunk.toString()) {
        if (char === "\u0003") {
          process.stdin.off("data", onKey);
          reject(new Error("Canceled"));
        } else if (char === "\r" || char === "\n") {
          process.stdin.off("data", onKey);
          resolve(password);
          return;
        } else if (char === "\u007f" || char === "\b") {
          password = password.slice(0, -1);
        } else {
          password += char;
        }
      }
    };
    process.stdin.on("data", onKey);
  });
} finally {
  process.stdin.setRawMode(false);
  process.stdin.pause();
  process.stdout.write("\n");
}
if (password.length < 12) throw new Error("Use at least 12 characters.");

const quote = (value) => `'${value.replaceAll("'", "''")}'`;
const sql = `INSERT INTO "User" ("id", "email", "name", "passwordHash", "role", "createdAt", "updatedAt") VALUES (${quote(randomUUID())}, ${quote(email)}, ${quote(name)}, ${quote(await bcrypt.hash(password, 12))}, 'ADMIN', ${Date.now()}, ${Date.now()});\n`;
password = "";
await mkdir(".data", { recursive: true });
await writeFile(".data/provision-admin.sql", sql, { mode: 0o600, flag: "wx" });
console.log("Created .data/provision-admin.sql. Apply it once to the intended D1 database and delete the file afterward.");
