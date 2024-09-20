"use client";
import type { FC } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/cms/modal";
import { dataDummyAnggota } from "@/lib/static/data-dummy-anggota";
import DataTable from "@/components/cms/table/data-table";
import { columns } from "@/components/cms/table/column";

const AdminPage: FC = () => {
  return (
    <div className="flex w-full min-h-screen py-10 box-border items-center justify-center">
      <div className="w-5/6 overflow-y-auto p-6 bg-white rounded-2xl shadow-md">
        {/* Action Button */}
        <div className="flex gap-4 mb-6">
          <Button variant="destructive">
            <Trash2 className="w-5" />
            <span className="ml-2">Delete</span>
          </Button>

          <Dialog>
            <DialogTrigger asChild={true}>
              <Button className="bg-primaryGreen">
                <Plus className="w-5" />
                <span className="ml-2">Add</span>
              </Button>
            </DialogTrigger>
            <Modal />
          </Dialog>
        </div>

        <DataTable columns={columns} data={dataDummyAnggota} />
      </div>
    </div>
  );
};

export default AdminPage;
