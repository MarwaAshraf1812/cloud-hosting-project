import prisma from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { JWTPayload } from "@/utils/types";

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
    })

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const token = request.headers.get('token') as string;
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JWTPayload;
    if (!decoded) {
      return NextResponse.json(
        { message: "No token provided, access denied" },
        { status: 401 } // Unauthorized
      );
    }

    if (decoded.id === user.id) {
      await prisma.user.delete({
        where: { id: user.id }
      })
  
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
