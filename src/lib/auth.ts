import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";
import type { Role } from "@/types/school";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: Role;
      grade: number | null;
    };
  }
  interface User {
    role: Role;
    grade: number | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: Role;
    grade: number | null;
  }
}

/**
 * Session lifetime: 30 days, sliding.
 * The JWT cookie Max-Age / Expires is 30 days. NextAuth rewrites it when the
 * token is older than updateAge (24 hours), so normal use does not expire on
 * a short idle and the cookie survives browser restarts. Sign-out still
 * clears it. Idle for a full 30 days ends the session.
 *
 * Duration chosen: 30 days (NextAuth's own default, now explicit).
 *
 * Cloudflare Worker: NEXTAUTH_URL has been http://localhost:3000 in production.
 * NextAuth then issues non-Secure cookies (iOS drops those across restarts)
 * and redirects sign-out to localhost. If the configured URL is not https in
 * production, pin the public school origin and use Secure cookies.
 */
export const SESSION_MAX_AGE_SECONDS = 30 * 24 * 60 * 60;
const SESSION_UPDATE_AGE_SECONDS = 24 * 60 * 60;
const PUBLIC_ORIGIN = "https://school.prosperprep.org";

if (
  process.env.NODE_ENV === "production" &&
  !(process.env.NEXTAUTH_URL || "").startsWith("https://")
) {
  process.env.NEXTAUTH_URL = PUBLIC_ORIGIN;
}

const useSecureCookies = (process.env.NEXTAUTH_URL || "").startsWith("https://");

export const authOptions: NextAuthOptions = {
  useSecureCookies,
  session: {
    strategy: "jwt",
    maxAge: SESSION_MAX_AGE_SECONDS,
    updateAge: SESSION_UPDATE_AGE_SECONDS,
  },
  jwt: {
    maxAge: SESSION_MAX_AGE_SECONDS,
  },
  cookies: {
    sessionToken: {
      name: useSecureCookies
        ? "__Secure-next-auth.session-token"
        : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        maxAge: SESSION_MAX_AGE_SECONDS,
      },
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase().trim() },
        });
        if (!user) return null;
        const ok = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!ok) return null;
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role as Role,
          grade: user.grade,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.grade = user.grade ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.grade = token.grade;
      }
      return session;
    },
  },
};

export function getSession() {
  return getServerSession(authOptions);
}
