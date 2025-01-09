import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value as string;
  if (!token) {
    return NextResponse.json(
      { message: "No token provided, access denied" },
      { status: 401 } // Unauthorized
    );
  }
}

export const config = {
  matcher: ['/api/auth/profile/:path*'],
}