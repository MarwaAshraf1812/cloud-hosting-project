const articleSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function ArticleLoading() {
  return (
    <section className="container mx-auto px-5 mt-5 fixed_height mb-5 animate-pulse">
      <div className="w-full md:w-2/3 m-auto rounded flex justify-center mb-5 bg-gray-300 h-12"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articleSkeleton.map((index) => (
          <div key={index} className="bg-gray-300 rounded-lg p-5">
            <div className="h-40 bg-gray-400 mb-5"></div>
            <div className="h-4 bg-gray-400 w-4/5 mb-3"></div>
            <div className="h-4 bg-gray-400 w-3/5 mb-3"></div>
            <div className="h-4 bg-gray-400 w-4/6"></div>
          </div>
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
}

export default ArticleLoading;
