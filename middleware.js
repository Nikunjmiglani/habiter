// app/middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const isAuth = !!token;
  const { pathname } = req.nextUrl;

  // If the user is not authenticated and trying to access a protected route
  if (!isAuth && pathname.startsWith("/dashboard")) {
    const loginUrl = new URL("/auth/signin", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*"], // Protect all /dashboard routes
};

