import { NextRequest, NextResponse } from "next/server";
import { ArticleSchema } from "@/utils/validationSchemas";
import { CreateArticle } from "@/utils/dtos";
import prisma from "@/utils/db";
import { ARTICLE_PER_PAGE } from "@/utils/constants";
import { verifyToken } from "@/utils/verifyToken";

/**
 * @method GET
 * @endpoint ~/api/articles
 * @description Get all articles by page number
 * @param request
 * @access public
 * @returns
 */
export async function GET(request: NextRequest) {
  try {
    const pageNumber = request.nextUrl.searchParams.get("pageNumber") || "1";

    const articles = await prisma.article.findMany({
      take: ARTICLE_PER_PAGE,
      skip: (parseInt(pageNumber) - 1) * ARTICLE_PER_PAGE,
    });
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
}

/**
 * @method POST
 * @endpoint ~/api/articles
 * @description Create an article
 * @param request
 * @access public
 * @returns
 */
export async function POST(request: NextRequest) {
  try {
    const user = verifyToken(request);

    if (user == null || !user.isAdmin) {
      return NextResponse.json(
        { message: "Only admins can create articles" },
        { status: 401 }
      );
    }

    const body = (await request.json()) as CreateArticle;

    const validation = ArticleSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const newArticle = await prisma.article.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });
    return NextResponse.json(
      { message: "Article created successfully", article: newArticle },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
}
