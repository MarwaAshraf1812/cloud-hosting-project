import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";
import { CreateComment } from "@/utils/dtos";
import { CreateCommentSchema } from "@/utils/validationSchemas";

/**
 * @method POST
 * @endpoint /api/comments
 * @description Create a Comment
 * @access Private
 */

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateComment;

    if (!body) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const decoded = verifyToken(request);
    if (decoded === null) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const validation = CreateCommentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        content: body.content,
        userId: decoded.id,
        articleId: body.articleId,
      },
    });

    return NextResponse.json(
      { message: "Comment created successfully", comment },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * @method GET
 * @endpoint /api/comments
 * @description Get all Comments
 * @access Public
 */

export async function GET(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (user === null) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    if (user.isAdmin) {
      const comments = await prisma.comment.findMany();
      if (!comments) {
        return NextResponse.json(
          { message: "No comments found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ comments }, { status: 200 });
    }
    return NextResponse.json(
      { message: "Only admin can access this comments" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
