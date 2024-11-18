"use client";
import { useState, type FC, useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Modal from "@/components/cms/modal";
import DataTable from "@/components/cms/table/data-table";
import { type Anggota, getColumns } from "@/components/cms/table/column";
import { useListAnggotaTable } from "@/hooks/useListAnggotaTable";
import SearchInput from "@/components/cms/search-input";
import { useQueryMembers } from "@/hooks/data/query/useQueryMembers";
import { useFilteredData } from "@/hooks/useFilteredData";

type UrlQuery = {
  search?: string;
  [key: string]: string | undefined;
};

const AdminPage: FC = () => {
  const [selectedAnggota, setSelectedAnggota] = useState<Anggota | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const {
    res: { data, isLoading, isError, error },
    urlQuery,
    setUrlQuery,
  } = useQueryMembers();

  const filteredData = useFilteredData(data?.data || [], urlQuery.search || "");

  const columns = getColumns({ setSelectedAnggota, setIsEditModalOpen });

  const table = useListAnggotaTable({
    data: filteredData,
    columns,
    searchQuery: urlQuery.search || "",
  });

  const handleSearch = (search: string) => {
    setUrlQuery((prev) => ({
      ...prev,
      search,
    }));
  };

  {
    isLoading
      ? console.log("Loading data...")
      : isError
        ? console.log("Error loading data:", error)
        : console.log("Fetched data:", data);
  }

  return (
    <div className="flex w-full min-h-screen py-10 box-border items-center justify-center">
      <div className="w-5/6 overflow-y-auto p-6 bg-white rounded-2xl shadow-md">
        <div className="flex justify-between gap-5 mb-6">
          <SearchInput
            search={urlQuery.search || ""}
            setSearch={handleSearch}
          />

          <div className="flex justify-end gap-2">
            <Button variant="destructive" disabled={filteredData.length === 0}>
              <Trash2 className="w-5" />
              <span className="ml-2">Hapus</span>
            </Button>

            <Dialog>
              <DialogTrigger asChild={true}>
                <Button>
                  <Plus className="w-5" />
                  <span className="ml-2">Tambah</span>
                </Button>
              </DialogTrigger>
              <Modal
                onClose={() => {
                  setIsEditModalOpen(false);
                }}
              />
            </Dialog>
          </div>
        </div>

        <DataTable table={table} />

        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          {selectedAnggota !== null && (
            <Modal
              anggota={selectedAnggota}
              onClose={() => {
                setIsEditModalOpen(false);
              }}
            />
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default AdminPage;
