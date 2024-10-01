import { DialogClose, DialogContent } from "@/components/ui/dialog";
import type React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { type Anggota } from "./table/column";
import { useEffect, useState } from "react";

interface ModalProps {
  anggota?: Anggota | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ anggota, onClose }) => {
  const [nama, setNama] = useState<string>("");
  const [jabatan, setJabatan] = useState<string>("");
  const [divisi, setDivisi] = useState<string>("");

  useEffect(() => {
    if (anggota !== null && anggota !== undefined) {
      setNama(anggota.nama);
      setJabatan(anggota.jabatan);
      setDivisi(anggota.divisi);
    }
  }, [anggota]);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onClose();
  };

  return (
    <DialogContent>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="nama"
            className="block text-sm font-medium text-gray-700"
          >
            Nama
          </label>
          <Input
            id="nama"
            value={nama}
            onChange={(e) => {
              setNama(e.target.value);
            }}
            placeholder="Nama Anggota"
            className="mt-3"
            required={true}
          />
        </div>

        <div>
          <label
            htmlFor="jabatan"
            className="block text-sm font-medium text-gray-700"
          >
            Jabatan
          </label>
          <Input
            id="jabatan"
            value={jabatan}
            onChange={(e) => {
              setJabatan(e.target.value);
            }}
            placeholder="Jabatan"
            className="mt-3"
            required={true}
          />
        </div>

        <div>
          <label
            htmlFor="divisi"
            className="block text-sm font-medium text-gray-700"
          >
            Divisi
          </label>
          <Input
            id="divisi"
            value={divisi}
            onChange={(e) => {
              setDivisi(e.target.value);
            }}
            placeholder="Divisi"
            className="mt-3"
            required={true}
          />
        </div>

        <div>
          <label
            htmlFor="foto"
            className="block text-sm font-medium text-gray-700"
          >
            Foto
          </label>
          <input type="file" id="foto" className="mt-3" />
        </div>
      </form>

      <DialogClose asChild={true}>
        <Button type="submit" className="mt-4">
          Simpan
        </Button>
      </DialogClose>
    </DialogContent>
  );
};

export default Modal;
