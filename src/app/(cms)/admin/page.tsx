"use client";
import Modal from "@/components/cms/modal";
import SearchInput from "@/components/cms/search-input";
import { type Anggota, getColumns } from "@/components/cms/table/column";
import DataTable from "@/components/cms/table/data-table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useListAnggotaTable } from "@/hooks/useListAnggotaTable";
import { dataDummyAnggota } from "@/lib/static/data-dummy-anggota";
import { Plus, Trash2 } from "lucide-react";
import { useState, type FC } from "react";

const AdminPage: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Anggota[]>(dataDummyAnggota);
  const [selectedAnggota, setSelectedAnggota] = useState<Anggota | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const columns = getColumns({ setSelectedAnggota, setIsEditModalOpen });

  const table = useListAnggotaTable({
    data: filteredData,
    columns,
    searchQuery: search,
  });

  return (
    <div className="flex w-full min-h-screen py-10 box-border items-center justify-center">
      <div className="w-5/6 overflow-y-auto p-6 bg-white rounded-2xl shadow-md">
        <div className="flex justify-between gap-5">
          <SearchInput
            search={search}
            setSearch={setSearch}
            setFilteredData={setFilteredData}
            dataDummyAnggota={dataDummyAnggota}
          />
          <div className="flex justify-end gap-2 mb-6">
            <Button
              variant="destructive"
              disabled={table.getFilteredSelectedRowModel().rows.length === 0}
            >
              <Trash2 className="w-5" />
              <span className="ml-2">Hapus</span>
            </Button>

            <Dialog>
              <DialogTrigger asChild={true}>
                <Button className="">
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
