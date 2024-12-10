import Link from "next/link";
import React from "react";
import { Article } from "../../../utils/types";

interface ArticleItemProps {
  article: Article;
}

function ArticleItem({ article }: ArticleItemProps) {
  return (
    <article
      key={article.id}
      className="w-full md:2/5 sm:1/4 mb-5  my-1 border border-gray-200 p-6 hover:bg-gray-200 cursor-pointer shadow-lg"
    >
      <h2 className="font-bold line-clamp-1 text-blue-400">
        {article.title}
      </h2>
      <p>{article.body}</p>
      <Link
        className="text-blue-400 hover:text-blue-700 font-bold"
        href={`/articles/${article.id}`}
      >
        Read more
      </Link>
    </article>
  );
}

export default ArticleItem;
