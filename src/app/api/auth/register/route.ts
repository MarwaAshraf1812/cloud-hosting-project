import prisma from "@/utils/db";
import { RegisterUser } from "@/utils/dtos";
import { RegisterUserSchema } from "@/utils/validationSchemas";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { generateToken } from '@/utils/generateToken';
import { JWTPayload } from "@/utils/types";


/**
 * @method POST
 * @endpoint /api/auth/register
 * @description Register a new user
 * @access Public
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as RegisterUser;
    const validation = RegisterUserSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: body.email },
    })
    if (user) {
      return NextResponse.json(
        { message: "This user already registered" },
        { status: 400 }
      );
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(body.password, salt);

    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        isAdmin: true,
      }
    })

    const JwtPayload: JWTPayload = {
      id: newUser.id,
      username: newUser.username,
      isAdmin: newUser.isAdmin
    }

    const token = generateToken(JwtPayload);

    return NextResponse.json(
      { ...newUser, token },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
}