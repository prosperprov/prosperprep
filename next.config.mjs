/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Keep Prisma out of the webpack bundle so model delegates (e.g. teacherGrade)
    // are not stripped / stubbed after schema changes.
    serverComponentsExternalPackages: ["@prisma/client", ".prisma/client", "prisma"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // YouTube embeds require a Referer; same-origin strips it → Error 153.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/prek/play/:slug",
        destination: "/prek/learn/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
