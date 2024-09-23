"use client";
import Modal from "@/components/cms/modal";
import { columns } from "@/components/cms/table/column";
import DataTable from "@/components/cms/table/data-table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useListAnggotaTable } from "@/hooks/useListAnggotaTable";
import { dataDummyAnggota } from "@/lib/static/data-dummy-anggota";
import { Plus, Trash2 } from "lucide-react";
import { type FC } from "react";

const AdminPage: FC = () => {
  const table = useListAnggotaTable({
    data: dataDummyAnggota,
    columns,
  });

  return (
    <div className="flex w-full min-h-screen py-10 box-border items-center justify-center">
      <div className="w-5/6 overflow-y-auto p-6 bg-white rounded-2xl shadow-md">
        <div className="flex justify-between gap-5">
          <Input className="w-1/2" placeholder="Cari anggota" />
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
              <Modal />
            </Dialog>
          </div>
        </div>

        <DataTable table={table} />
      </div>
    </div>
  );
};

export default AdminPage;
