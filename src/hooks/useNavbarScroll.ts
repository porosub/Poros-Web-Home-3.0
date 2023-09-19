import { useEffect, useState } from "react";

// custom hook for navbar background color transition on scroll
export const useNavbarScroll = (): boolean => {
  const [changeNav, setChangeNav] = useState<boolean>(false);

  const handleNavbarScroll = (): void => {
    if (window.scrollY >= 20) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarScroll);

    return () => {
      removeEventListener("scroll", handleNavbarScroll);
    };
  }, [changeNav]);

  return changeNav;
};
