import ArticleItem from "../../components/articles/ArticleItem";
import { Article } from "../../utils/types";
import { Metadata } from "next";
import SearchArticleInput from "./SearchArticleInput";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles about programming and web development",
};

const ArticlePage = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts" //{cache: "no-store"} // Disable cache
  );
  const articles: Article[] = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return (
    <section className="container mx-auto px-5 mt-5 fixed_height mb-5">
      <SearchArticleInput />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {articles.slice(0, 9).map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default ArticlePage;
