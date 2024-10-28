import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useRouter, useSearchParams } from "next/navigation";

interface Anggota {
  id: number;
  nama: string;
  foto: string;
  jabatan: string;
  divisi: string;
}

interface SearchInputProps {
  search: string;
  setSearch: (value: string) => void;
  setFilteredData: (value: Anggota[]) => void;
  dataDummyAnggota: Anggota[];
}

const SearchInput = ({
  search,
  setSearch,
  setFilteredData,
  dataDummyAnggota,
}: SearchInputProps): JSX.Element => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [debouncedSearch] = useDebounce(search.trim(), 1000);

  useEffect(() => {
    if (debouncedSearch !== "") {
      const filtered = dataDummyAnggota.filter(
        (item) =>
          (item.nama.trim() !== "" &&
            item.nama.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
          item.foto.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          item.jabatan.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          item.divisi.toLowerCase().includes(debouncedSearch.toLowerCase()),
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(dataDummyAnggota);
    }

    const queryParams = new URLSearchParams();
    if (debouncedSearch !== "") {
      queryParams.set("search", debouncedSearch);
    }
    const page = searchParams.get("page") ?? "defaultPage";

    queryParams.set("page", page);
    router.push(`?${queryParams.toString()}`);
  }, [
    debouncedSearch,
    router,
    searchParams,
    dataDummyAnggota,
    setFilteredData,
  ]);

  return (
    <Input
      className="w-1/2"
      placeholder="Cari anggota"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
};

export default SearchInput;
