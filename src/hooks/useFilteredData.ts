import { IResponse } from "@/lib/types/general-types";
import { IMember } from "@/lib/types/member-types";
import { useMemo } from "react";
import { useDebounce } from "use-debounce";

export const useFilteredData = (data: IMember[], searchQuery: string) => {
  const [debouncedSearch] = useDebounce(searchQuery?.trim(), 1000);

  const filteredData = useMemo(() => {
    if (!data) return [];

    const mappedData = data.map((item) => ({
      nama: item.name,
      jabatan: item.position,
      divisi: item.division,
      foto: item.imageFileName,
      id: item.id,
    }));

    if (!debouncedSearch) return mappedData;

    const searchLower = debouncedSearch.toLowerCase();
    return mappedData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchLower),
      ),
    );
  }, [data, debouncedSearch]);

  return filteredData;
};
