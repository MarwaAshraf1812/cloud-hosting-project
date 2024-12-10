import { Article } from "@/utils/types";
import Link from "next/link";
import React from "react";

interface SinglePageProps {
  params: Promise<{ id: string }>; 
}

const SingleArticlePage = async ({ params }: SinglePageProps) => {
  const { id } = await params;

  // Fetch article data
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }
  const article: Article = await response.json();

  return (
    <section className="container p-5 m-auto w-full px-5 pt-8 md:w-3/4 fixed_height">
      <div className="shadow-lg p-5">
        <h1 className="text-2xl font-bold text-blue-400">{article.title}</h1>
        <div>
          <div>
            <span className="font-bold">Author: </span>
            <span>{article.userId}</span>
          </div>
          <div>
            <span className="font-bold">Date:</span>
            <span>1/1/2023</span>
          </div>
          <p className="mt-5 text-gray-600">{article.body}</p>
        </div>
        <div className="mt-5">
          <Link
            href="/articles"
            className="text-blue-400 block mt-6 hover:text-blue-700 underline"
          >
            Go to Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleArticlePage;
