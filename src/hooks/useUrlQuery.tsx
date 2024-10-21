"use client";

import type { IGeneralFilter } from "@/lib/types/general-types";
import { convertObjectToQueryParams } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { type DebouncedState, useDebounce } from "use-debounce";

interface IUrlQueryHook {
  urlQuery: IGeneralFilter;
  setUrlQuery: React.Dispatch<React.SetStateAction<IGeneralFilter>>;
  debouncedQuery: [
    IGeneralFilter,
    DebouncedState<(value: IGeneralFilter) => void>,
  ];
}

function useUrlQuery(): IUrlQueryHook {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? undefined;
  const page = searchParams.get("page") ?? undefined;

  const [urlQuery, setUrlQuery] = useState<IGeneralFilter>({
    search,
    page: page !== undefined ? Number.parseInt(page) : undefined,
  });

  const debouncedQuery = useDebounce(urlQuery, 700);

  useEffect(() => {
    const existingParams = Object.fromEntries(searchParams.entries());

    const queryParams = convertObjectToQueryParams({
      ...existingParams,
      ...debouncedQuery,
    });

    const newUrl = `${pathname}?${queryParams}`;

    router.push(newUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  return { urlQuery, setUrlQuery, debouncedQuery };
}

export default useUrlQuery;
