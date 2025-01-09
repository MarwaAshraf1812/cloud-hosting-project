import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 * @method GET
 * @endpoint /api/auth/logout
 * @description Logout a User
 * @access Public
 */

export async function GET(request: NextRequest) {
  try {
    if (request.cookies.get("token")) {
      (await cookies()).delete("token");
      return NextResponse.json(
        { message: "You have been logged out" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
