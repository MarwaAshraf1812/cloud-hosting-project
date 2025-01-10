import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";
import { UpdateComment } from "@/utils/dtos";
interface Props {
  params: {
    id: string;
  };
}

/**
 * @method PUT
 * @endpoint /api/comments/[id]
 * @description Update a Comment
 * @access Private
 */

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!comment) {
      return NextResponse.json(
        { message: "Comment not found" },
        { status: 404 }
      );
    }

    const user = verifyToken(request);
    if (user === null || user.id !== comment.userId) {
      return NextResponse.json(
        {
          message: "You are not allowed, you are not the owner of this comment",
        },
        { status: 401 }
      );
    }
    const body = (await request.json()) as UpdateComment;
    const updatedComment = await prisma.comment.update({
      where: { id: parseInt(params.id) },
      data: {
        content: body.content,
      },
    });

    return NextResponse.json({ comment: updatedComment }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @method DELETE
 * @endpoint /api/comments/[id]
 * @description Delete a Comment
 * @access Private
 */

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!comment) {
      return NextResponse.json(
        { message: "Comment not found" },
        { status: 404 }
      );
    }

    const user = verifyToken(request);
    if (user === null) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    if (user.isAdmin || user.id === comment.userId) {
      

    await prisma.comment.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json(
      { message: "Comment deleted successfully" },
      { status: 200 }
    );

  }
  return NextResponse.json(
    { message: "You are not allowed to delete this comment" },
    { status: 401
    });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
