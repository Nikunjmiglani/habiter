/** @type {import('next').NextConfig} */
const nextConfig = {
  // You can keep this if you have other config settings
  experimental: {
    serverActions: true,
  },
  // ✅ Add this to apply middleware to /dashboard routes
  matcher: ["/dashboard/:path*"],
};

export default nextConfig;
