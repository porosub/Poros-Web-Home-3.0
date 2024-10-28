import useUrlQuery from "@/hooks/useUrlQuery";
import type { IGeneralFilter, IResponse } from "@/lib/types/general-types";
import type { IMember } from "@/lib/types/member-types";
import { MemberApi } from "@/repository/member-service";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

interface IQueryMembersHook {
  res: UseQueryResult<IResponse<IMember[]>, Error>;
  urlQuery: IGeneralFilter;
  setUrlQuery: React.Dispatch<React.SetStateAction<IGeneralFilter>>;
}

export const useQueryMembers = (): IQueryMembersHook => {
  const { urlQuery, setUrlQuery, debouncedQuery } = useUrlQuery();

  const res = useQuery({
    queryKey: ["members", { ...debouncedQuery }],
    queryFn: async () => {
      const res = await MemberApi.getAllMembers();

      return res;
    },
    placeholderData: (previousData) => previousData,
  });

  return {
    res,
    urlQuery,
    setUrlQuery,
  };
};
