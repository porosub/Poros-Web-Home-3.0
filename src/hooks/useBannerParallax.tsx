import { type RefObject, useEffect, useRef, useState } from "react";

interface IUseBannerParallax {
  videoRef: RefObject<HTMLVideoElement>;
  scrollY: number;
}

export const useBannerParallax = (): IUseBannerParallax => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    videoRef,
    scrollY,
  };
};
