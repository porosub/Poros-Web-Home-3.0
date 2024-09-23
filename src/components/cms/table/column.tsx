import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { PenBoxIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Anggota {
  id: number;
  nama: string;
  foto: string;
  jabatan: string;
  divisi: string;
}

// Define the columns
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
    cell: ({ row }) => (
      <Button variant={"secondary"} className="px-2 aspect-square">
        <PenBoxIcon strokeWidth="1.7" className="w-5 h-5" />
      </Button>
    ),
  },
];
