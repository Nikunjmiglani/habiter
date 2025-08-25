/** @type {import('next').NextConfig} */
const nextConfig = {
 
  experimental: {
    serverActions: true,
  },
  
  matcher: ["/dashboard/:path*"],
};

export default nextConfig;
