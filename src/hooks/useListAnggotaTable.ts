import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useSearchParams, useRouter } from "next/navigation";
import type { ColumnDef, Table } from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: Array<ColumnDef<TData, TValue>>;
  data: TData[];
  searchQuery?: string;
}

export const useListAnggotaTable = ({
  columns,
  data,
  searchQuery = "",
}: DataTableProps<any, any>): Table<any> => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const validCurrentPage =
    !Number.isNaN(currentPage) && currentPage > 0 ? currentPage : 1;

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / 10),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: {
        pageIndex: validCurrentPage - 1,
        pageSize: 6,
      },
    },
    onPaginationChange: (updater) => {
      const newPage =
        typeof updater === "function"
          ? updater(table.getState().pagination).pageIndex + 1
          : updater.pageIndex + 1;

      const queryParams = new URLSearchParams();
      queryParams.set("page", newPage.toString());
      if (searchQuery !== "") {
        queryParams.set("search", searchQuery);
      }
      router.push(`?${queryParams.toString()}`);
    },
  });

  return table;
};
