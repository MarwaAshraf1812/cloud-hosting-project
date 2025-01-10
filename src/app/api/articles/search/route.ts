import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

/**
 * @method GET
 * @endpoint /api/articles/search?searchQuery=value
 * @description Get all Articles
 * @access Public
 */

export async function GET(request: NextRequest) {
  try {
    const searchQuery = request.nextUrl.searchParams.get("searchQuery");
    let articles;
    if (searchQuery) {
      articles = await prisma.article.findMany({
        where: {
          title: {
            contains: searchQuery,
            mode: "insensitive"},
        },
      });
    } else {
      articles = await prisma.article.findMany({ take: 6 });
    }

    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
