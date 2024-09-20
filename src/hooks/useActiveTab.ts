"use client";
import { useSearchParams, useRouter } from "next/navigation";

interface UseActiveTabReturn {
  activeTab: string;
  handleTabClick: (tabIndex: string) => void;
}

const useActiveTab = (): UseActiveTabReturn => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("tab") ?? "0";

  const handleTabClick = (tabIndex: string): void => {
    router.push(`/admin?tab=${tabIndex}`);
  };

  return { activeTab, handleTabClick };
};

export default useActiveTab;
