// components/SearchInput.tsx
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  search: string;
  setSearch: (value: string) => void;
  className?: string;
}

const SearchInput = ({
  search,
  setSearch,
  className = "w-1/2",
}: SearchInputProps): JSX.Element => {
  return (
    <Input
      className={className}
      placeholder="Cari anggota"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchInput;
