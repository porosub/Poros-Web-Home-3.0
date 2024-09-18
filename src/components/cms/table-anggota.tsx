import React from "react";
import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { PenBoxIcon } from "lucide-react";

interface Anggota {
  id: number;
  nama: string;
  foto: string;
  jabatan: string;
  divisi: string;
}

interface AnggotaTableProps {
  paginatedData: Anggota[];
}

const TableAnggota: FC<AnggotaTableProps> = ({ paginatedData }) => {
  return (
    <Table>
      <TableHeader className="bg-[#EEEEEE]">
        <TableRow>
          <TableHead className="w-[100px]">
            <Checkbox />
          </TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Foto</TableHead>
          <TableHead>Jabatan</TableHead>
          <TableHead>Divisi</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-[#FAFAFA]">
        {paginatedData.map((anggota) => (
          <TableRow key={anggota.id}>
            <TableCell className="font-medium">
              <Checkbox />
            </TableCell>
            <TableCell>{anggota.nama}</TableCell>
            <TableCell>
              <img
                src={anggota.foto}
                alt={`Foto of ${anggota.nama}`}
                className="w-10 h-10 rounded-full"
              />
            </TableCell>
            <TableCell>{anggota.jabatan}</TableCell>
            <TableCell>{anggota.divisi}</TableCell>
            <TableCell>
              <PenBoxIcon />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableAnggota;
