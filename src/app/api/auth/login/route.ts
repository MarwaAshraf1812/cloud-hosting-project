import prisma from "@/utils/db";
import { LoginUser } from "@/utils/dtos";
import { LoginUserSchema } from "@/utils/validationSchemas";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { generateToken } from "@/utils/generateToken";
import { JWTPayload } from "@/utils/types";

/**
 * @method POST
 * @endpoint /api/auth/login
 * @description Login a user
 * @access Public
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as LoginUser;
    const validation = LoginUserSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {email: body.email}
    });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 }
      );
    }

    const isPasswordValid = bcrypt.compareSync(body.password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 }
      );
    }

    const JWTPayload: JWTPayload = {
        id: user.id,
        username: user.username,
        isAdmin: user.isAdmin
      }
    const token = generateToken(JWTPayload);

    return NextResponse.json(
      { message: "Authenticated", token },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
}