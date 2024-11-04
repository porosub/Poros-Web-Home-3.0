"use client";
import { FC } from "react";
import dataDummyBlog from "@/lib/static/data-dummy-blog";
import SearchBar from "@/components/blog/SearchBar";
import PaginationControls from "@/components/blog/PaginationControls";
import BlogCard from "@/components/blog/BlogCard";
import { useBlogPagination } from "@/hooks/useBlogPagination";

// Constants
const ITEMS_PER_PAGE = 10;

const Blog: FC = () => {
  const { page, setPage, setSearchQuery, paginatedPosts, totalPages } =
    useBlogPagination({
      posts: dataDummyBlog,
      itemsPerPage: ITEMS_PER_PAGE,
    });

  return (
    <main className="min-w-[350px] overflow-hidden flex flex-col gap-24">
      <section className="relative w-full px-6 md:px-20 mt-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
          <h2 className="text-2xl font-semibold">BLOG POROS FILKOM UB</h2>
          <SearchBar onChange={setSearchQuery} />
        </div>

        <div className="my-10 flex flex-wrap justify-center gap-12">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="flex justify-center my-8">
          <PaginationControls
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </section>
    </main>
  );
};

export default Blog;
