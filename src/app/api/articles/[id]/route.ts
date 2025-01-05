import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/utils/data";
import { UpdateArticle } from "@/utils/dtos";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Props {
  params: {id: string}
}

/**
 * @method GET
 * @endpoint ~/api/articles/:id
 * @description Get single article by id
 * @param request 
 * @access public
 * @returns 
 */
export async function GET(request: NextRequest , {params}: Props) {
  try {
    const article = await prisma.article.findUnique({where: {id: parseInt(params.id)}});
    if (!article) {
      return NextResponse.json({message: "Article not found"}, {status: 404});
    }
    return NextResponse.json(article, {status: 200});
  } catch (error) {
    return NextResponse.json({message: "An error occurred", error}, {status: 500});
  }
}


/**
 * @method PUT
 * @endpoint ~/api/articles/:id
 * @description Update single article by id
 * @param request 
 * @access public
 * @returns 
 */
export async function PUT(request: NextRequest , {params}: Props) {
  const article = articles.find(article => article.id === parseInt(params.id));
  if (!article) {
    return NextResponse.json({message: "Article not found"}, {status: 404});
  }

  const body = (await request.json()) as UpdateArticle;
  console.log(body);
  return NextResponse.json(article, {status: 200});
}

/**
 * @method DELETE
 * @endpoint ~/api/articles/:id
 * @description delete single article by id
 * @param request 
 * @access public
 * @returns 
 */
export async function DELETE(request: NextRequest , {params}: Props) {
  const article = articles.find(article => article.id === parseInt(params.id));
  if (!article) {
    return NextResponse.json({message: "Article not found"}, {status: 404});
  }
  return NextResponse.json({message: "Article deleted", article}, {status: 200});
}
