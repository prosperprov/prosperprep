/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Keep Prisma out of the webpack bundle so model delegates (e.g. teacherGrade)
    // are not stripped / stubbed after schema changes.
    serverComponentsExternalPackages: ["@prisma/client", "prisma"],
  },
};

export default nextConfig;
