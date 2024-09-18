"use client";
import type { FC } from "react";
import { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/cms/modal";
import TableAnggota from "@/components/cms/table-anggota";
import { dataDummyAnggota } from "@/lib/static/data-dummy-anggota";

const ITEMS_PER_PAGE = 9;

const AdminPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const totalPages = Math.ceil(dataDummyAnggota.length / ITEMS_PER_PAGE);
  const paginatedData = dataDummyAnggota.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePrevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="w-5/6 p-6 bg-white rounded-2xl shadow-md">
        {/* Action Button */}
        <div className="flex gap-4 mb-6">
          <Button variant="destructive">
            <Trash2 className="w-5" />
            <span className="ml-2">Delete</span>
          </Button>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild={true}>
              <Button className="bg-[#29AC4A]">
                <Plus className="w-5" />
                <span className="ml-2">Add</span>
              </Button>
            </DialogTrigger>
            <Modal />
          </Dialog>
        </div>

        {/* Tabel */}
        <TableAnggota paginatedData={paginatedData} />

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4">
          <Button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </Button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
