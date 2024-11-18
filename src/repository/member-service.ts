import type { IResponse } from "@/lib/types/general-types";
import { ApiClass } from "./client";
import type { IMember } from "@/lib/types/member-types";
import { cookies } from "next/headers";
import { getCookie } from "@/lib/cookie";

class MemberService extends ApiClass {
  public async getAllMembers(
    query: Record<string, any> = {},
  ): Promise<IResponse<IMember[]>> {
    const token = await getCookie("token");
    const res = await this.axiosInstance.get(
      `/members?${new URLSearchParams(query).toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  }
}

export const MemberApi = new MemberService();
