import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function convertObjectToQueryParams(obj: Record<string, any>): string {
  return Object.keys(obj)
    .filter(
      (key) =>
        obj[key] !== null && obj[key] !== undefined && obj[key] !== "default",
    )
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase() 
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-") 
    .replace(/-+/g, "-")
    .trim(); 
};
