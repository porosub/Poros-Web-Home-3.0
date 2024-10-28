import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface UsePaginationResult<T> {
  currentPage: number;
  totalPages: number;
  paginatedData: T[];
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const usePagination = <T>(
  initialPage: number,
  data: T[],
  itemsPerPage: number,
): UsePaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const router = useRouter();
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") ?? "0"; // Extract tab parameter from URL

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  const handlePrevPage = (): void => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      router.push(`?tab=${tab}&page=${newPage}`); // Preserve the tab parameter
    }
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      router.push(`?tab=${tab}&page=${newPage}`); // Preserve the tab parameter
    }
  };

  return {
    currentPage,
    totalPages,
    paginatedData,
    handlePrevPage,
    handleNextPage,
  };
};

export default usePagination;
