import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { useMemo } from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ADJACENT_PAGES = 1;

const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) => {
  const paginationItems = useMemo(() => {
    const items = [];
    const showEllipsisStart = currentPage > ADJACENT_PAGES + 2;
    const showEllipsisEnd = currentPage < totalPages - (ADJACENT_PAGES + 1);

    const renderPaginationLink = (page: number) => (
      <PaginationItem key={page}>
        <button
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
            ${
              currentPage === page
                ? "bg-[#212C4F] text-white border border-gray-300"
                : "border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
        >
          {page}
        </button>
      </PaginationItem>
    );

    // First page
    items.push(renderPaginationLink(1));

    // Start ellipsis
    if (showEllipsisStart) {
      items.push(
        <PaginationItem key="ellipsis-start">
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    // Middle pages
    for (
      let i = Math.max(2, currentPage - ADJACENT_PAGES);
      i <= Math.min(totalPages - 1, currentPage + ADJACENT_PAGES);
      i++
    ) {
      if (i === 1 || i === totalPages) continue;
      items.push(renderPaginationLink(i));
    }

    // End ellipsis
    if (showEllipsisEnd) {
      items.push(
        <PaginationItem key="ellipsis-end">
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    // Last page
    if (totalPages > 1) {
      items.push(renderPaginationLink(totalPages));
    }

    return items;
  }, [currentPage, totalPages, onPageChange]);

  return (
    <Pagination>
      <PaginationContent>
        {/* Go to beginning button */}
        <PaginationItem>
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className={`rounded-full w-8 h-8 flex items-center justify-center transition-colors border border-gray-300
              ${
                currentPage === 1
                  ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {"<<"}
          </button>
        </PaginationItem>

        {/* Previous button */}
        <PaginationItem>
          <button
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage <= 1}
            className={`rounded-full w-8 h-8 flex items-center justify-center transition-colors border border-gray-300
              ${
                currentPage <= 1
                  ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {"<"}
          </button>
        </PaginationItem>

        {/* Pagination items */}
        {paginationItems}

        {/* Next button */}
        <PaginationItem>
          <button
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage >= totalPages}
            className={`rounded-full w-8 h-8 flex items-center justify-center transition-colors border border-gray-300
              ${
                currentPage >= totalPages
                  ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {">"}
          </button>
        </PaginationItem>

        {/* Go to end button */}
        <PaginationItem>
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className={`rounded-full w-8 h-8 flex items-center justify-center transition-colors border border-gray-300
              ${
                currentPage === totalPages
                  ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {">>"}
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControls;
