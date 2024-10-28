import type {
  ILoginPayloadRoot,
  ILoginResponseRoot,
} from "@/lib/types/user-types";
import { ApiClass } from "./client";

class UserServices extends ApiClass {
  public async login(payload: ILoginPayloadRoot): Promise<ILoginResponseRoot> {
    const { data } = await this.axiosInstance.post<ILoginResponseRoot>(
      "/auth/login",
      payload,
    );

    return data;
  }
}

export const UserAPI = new UserServices();
