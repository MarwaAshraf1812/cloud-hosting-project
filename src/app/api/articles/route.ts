import { Article } from '@/utils/types';
import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/utils/data";
import { ArticleSchema } from '@/utils/validationSchemas';
import { CreateArticle } from '@/utils/dtos';

/**
 * @method GET
 * @endpoint ~/api/articles
 * @description Get all articles
 * @param request 
 * @access public
 * @returns 
 */
export function GET(request: NextRequest ) {
  console.log(request);
  return NextResponse.json(articles, {status: 200});
}


/**
 * @method POST
 * @endpoint ~/api/articles
 * @description Create an article
 * @param request 
 * @access private
 * @returns 
 */
export async function POST(request: NextRequest ) {
  const body = (await request.json()) as CreateArticle;

  const validation = ArticleSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json({message: validation.error.errors[0].message}, {status: 400});
  }

  const newArticle:Article = {
    id: articles.length + 1,
    userId: 200,
    title: body.title,
    body: body.body
  };
  articles.push(newArticle);
  return NextResponse.json({message: "Article created successfully", article: newArticle}, {status: 201});
}
