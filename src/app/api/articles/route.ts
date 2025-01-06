import { NextRequest, NextResponse } from "next/server";
import { ArticleSchema } from "@/utils/validationSchemas";
import { CreateArticle } from "@/utils/dtos";
import prisma  from "@/utils/db";

/**
 * @method GET
 * @endpoint ~/api/articles
 * @description Get all articles
 * @param request
 * @access public
 * @returns
 */
export async function GET() {
  try {
    const articles = await prisma.article.findMany();
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
