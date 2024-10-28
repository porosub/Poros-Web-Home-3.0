"use server";
import { cookies } from "next/headers";

export const setCookie = async (key: string, value: string): Promise<void> => {
  cookies().set(key, value);
};

export const deleteCookie = async (key: string): Promise<void> => {
  cookies().delete(key);
};
