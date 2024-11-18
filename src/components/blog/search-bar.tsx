import { Search } from "lucide-react";
import { Input } from "../ui/input";

const SearchBar = ({ onChange }: { onChange: (value: string) => void }) => (
  <div className="relative w-full sm:w-64 md:w-72 lg:w-80">
    <Input
      type="search"
      placeholder="Search..."
      className="pl-4 pr-10 w-full"
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search blog posts"
    />
    <Search
      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none"
      aria-hidden="true"
    />
  </div>
);

export default SearchBar;
