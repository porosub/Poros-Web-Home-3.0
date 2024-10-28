import type { AxiosInstance } from "axios";
import axios from "axios";

export class ApiClass {
  public baseURL: string;
  private readonly config: Record<string, any>;
  public axiosInstance: AxiosInstance;

  constructor(
    baseURL: string = process.env.API_URL ?? "",
    config?: Record<string, any>,
  ) {
    this.baseURL = baseURL;

    this.config = config ?? {};

    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      ...this.config,
    });
  }
}
