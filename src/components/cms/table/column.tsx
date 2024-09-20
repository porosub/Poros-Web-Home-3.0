// Define the Anggota type
import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { PenBoxIcon } from "lucide-react";

// Define the type for Anggota
export type Anggota = {
  id: number;
  nama: string;
  foto: string;
  jabatan: string;
  divisi: string;
};

// Define the columns
// Define the columns using Array<T> instead of T[]
export const columns: Array<ColumnDef<Anggota>> = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={(value) => {
          table.toggleAllRowsSelected(value === true); // Explicitly check for boolean true
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(value === true); // Explicitly check for boolean true
        }}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "nama",
    header: "Nama",
  },
  {
    accessorKey: "foto",
    header: "Foto",
  },
  {
    accessorKey: "jabatan",
    header: "Jabatan",
  },
  {
    accessorKey: "divisi",
    header: "Divisi",
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => <PenBoxIcon />,
  },
];
