import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useActivePage = (): number => {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState<number>(() => {
    if (pathname === "/") return 0;
    if (pathname === "/blog") return 1;
    if (pathname === "/tentang-kami") return 2;
    return 0;
  });

  useEffect(() => {
    if (pathname === "/") setActivePage(0);
    else if (pathname === "/blog") setActivePage(1);
    else if (pathname === "/tentang-kami") setActivePage(2);
  }, [pathname]);

  return activePage;
};
