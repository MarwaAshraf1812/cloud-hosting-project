import bcrypt from "bcryptjs";
import prisma from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "@/utils/verifyToken";
import { UpdateUserSchema } from "@/utils/validationSchemas";
import { UpdateUser } from '@/utils/dtos';

interface Props {
  params: {
    id: string;
  };
}

/**
 * @method DELETE
 * @endpoint /api/auth/profile/:id
 * @description Delete a Profile
 * @access Private
 */

export async function DELETE (request: NextRequest, {params} : Props){
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        comments: true,
      }
    })

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const decoded = verifyToken(request);
    if (decoded !== null  && decoded.id === user.id) {
      await prisma.user.delete({
        where: { id: user.id }
      })

      const commentIds: number[] = user?.comments.map((comment) => comment.id);
      await prisma.comment.deleteMany({
        where: {
          id: {
            in: commentIds,
          },
        },
      });

      return NextResponse.json(
        { message: "Your account has been deleted" },
        { status: 403 }
      );
    }
    return NextResponse.json({ message: "Only user can delete his account" }, { status: 401 });
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
  }
}

/**
 * @method GET
 * @endpoint /api/auth/profile/:id
 * @description  Get a Profile by ID
 * @access Private
 */

export async function GET(request: NextRequest, {params} : Props){
  try {
    const user = await prisma.user.findUnique({
      where: {id: parseInt(params.id)},
      select: {
        id: true,
        username: true,
        email: true,
        isAdmin: true,
        createdAt: true,
        updatedAt: true,
      }
      });
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const decoded = verifyToken(request);
    if (decoded === null || decoded.id !== user.id) {
      return NextResponse.json({ message: "Only user can view his profile" }, { status: 401 });
    }
    return NextResponse.json(
      user ,
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 500 }
      );
  }
}

/**
 * @method PUT
 * @endpoint /api/auth/profile/:id
 * @description  Update a Profile by ID
 * @access Private
 */

export async function PUT(request: NextRequest, {params} : Props){
  try {
    const user = await prisma.user.findUnique({
      where: {id: parseInt(params.id)},
      select: {
        id: true,
        username: true,
        email: true,
        isAdmin: true,
        createdAt: true,
        updatedAt: true,
      }
    })

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const decoded = verifyToken(request);
    if (decoded === null || decoded.id !== user.id) {
      return NextResponse.json({ message: "Only user can update his profile" }, { status: 403 });
    }

    const body = await request.json() as UpdateUser;
    const validation = UpdateUserSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    if (body.password) {
      if (body.password.length < 6) {
        return NextResponse.json(
          { message: "Password must be at least 6 characters" },
          { status: 400 }
        );
      }
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password, salt);
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
    });
    return NextResponse.json(user , { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
    
  }
}