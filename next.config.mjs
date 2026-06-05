/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    "better-auth",
    "@better-auth/mongo-adapter",
    "mongodb",
  ],
};

export default nextConfig;
