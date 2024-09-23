import { DialogClose, DialogContent } from "@/components/ui/dialog";
import type React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Modal: React.FC = () => {
  return (
    <DialogContent>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nama
          </label>
          <Input id="name" placeholder="Lorem ipsum" className="mt-3" />
        </div>

        <div>
          <label
            htmlFor="jabatan"
            className="block text-sm font-medium text-gray-700"
          >
            Jabatan
          </label>
          <Input id="jabatan" placeholder="Lorem ipsum" className="mt-3" />
        </div>

        <div>
          <label
            htmlFor="divisi"
            className="block text-sm font-medium text-gray-700"
          >
            Divisi
          </label>
          <Input id="divisi" placeholder="Lorem ipsum" className="mt-3" />
        </div>

        <div>
          <label
            htmlFor="divisi"
            className="block text-sm font-medium text-gray-700"
          >
            Foto
          </label>
          <Button variant="ghost" className="mt-3 font-normal">
            Add File
          </Button>
        </div>
      </form>

      <DialogClose asChild={true}>
        <Button className="mt-4">Simpan</Button>
      </DialogClose>
    </DialogContent>
  );
};

export default Modal;
