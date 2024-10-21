import type { IResponse } from "@/lib/types/general-types";
import { ApiClass } from "./client";
import type { IMember } from "@/lib/types/member-types";

class MemberService extends ApiClass {
  public async getAllMembers(
    query?: Record<string, string>,
  ): Promise<IResponse<IMember[]>> {
    const token = JSON.parse(localStorage.getItem("token") ?? "");

    const res = await this.axiosInstance.get(
      `/members?${new URLSearchParams(query).toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res;
  }
}

export const MemberApi = new MemberService();
