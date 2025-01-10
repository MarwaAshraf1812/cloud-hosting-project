import { NextRequest, NextResponse } from "next/server";
import { UpdateArticle } from "@/utils/dtos";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";

interface Props {
  params: { id: string };
}

/**
 * @method GET
 * @endpoint ~/api/articles/:id
 * @description Get single article by id
 * @param request, { params }
 * @access public
 * @returns
 */
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
}

/**
 * @method PUT
 * @endpoint ~/api/articles/:id
 * @description Update single article by id
 * @param request, { params }
 * @access private
 * @returns
 */
export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const user = verifyToken(request);
    if (user == null || !user.isAdmin) {
      return NextResponse.json(
        { message: "Only admins can update articles" },
        { status: 401 }
      );
    }
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }

    const body = (await request.json()) as UpdateArticle;
    const updatedArticle = await prisma.article.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body.title,
        description: body.description,
      },
    });
    return NextResponse.json(updatedArticle, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
}

/**
 * @method DELETE
 * @endpoint ~/api/articles/:id
 * @description delete single article by id
 * @param request, { params }
 * @access private
 * @returns
 */
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const user = verifyToken(request);
    if (user == null || !user.isAdmin) {
      return NextResponse.json(
        { message: "Only admins can delete articles" },
        { status: 401 }
      );
    }
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }
    await prisma.article.delete({
      where: { id: parseInt(params.id) },
    });
    return NextResponse.json({ message: "Article deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
}
