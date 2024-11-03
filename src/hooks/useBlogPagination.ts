// hooks/useBlogPagination.ts
import { useState, useEffect, useMemo } from "react";
import { scrollToTop } from "@/lib/utils"; // You'll need to define this type
import { BlogPost } from "@/components/blog/BlogCard";

interface UseBlogPaginationProps {
  posts: BlogPost[];
  itemsPerPage: number;
}

interface UseBlogPaginationReturn {
  page: number;
  setPage: (page: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredPosts: BlogPost[];
  paginatedPosts: BlogPost[];
  totalPages: number;
}

export const useBlogPagination = ({
  posts,
  itemsPerPage,
}: UseBlogPaginationProps): UseBlogPaginationReturn => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [posts, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const paginatedPosts = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredPosts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPosts, page, itemsPerPage]);

  useEffect(() => {
    scrollToTop();
  }, [page]);

  useEffect(() => {
    setPage(1); // Reset to first page when search query changes
  }, [searchQuery]);

  return {
    page,
    setPage,
    searchQuery,
    setSearchQuery,
    filteredPosts,
    paginatedPosts,
    totalPages,
  };
};
