/** @type {import('next').NextConfig} */
const nextConfig = {
  // serverExternalPackages: [
  //   "better-auth",
  //   "@better-auth/mongo-adapter",
  //   "mongodb",
  // ],
  experimental: {
    serverComponentsExternalPackages: ["@better-auth/kysely-adapter"],
  },
};

export default nextConfig;
