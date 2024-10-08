"use client";

import dynamic from "next/dynamic";
import type { FC, PropsWithChildren } from "react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { LeftArrowIcon } from "./icons/left-arrow-icon";
import { RightArrowIcon } from "./icons/right-arrow-icon";

const Swiper = dynamic(async () => (await import("swiper/react")).Swiper, {
  ssr: false,
});

type SwiperProps = {
  containerClassName?: string;
  className?: string;
  speed?: number;
  navigationId?: string;
} & PropsWithChildren;

const CustomSwiper: FC<SwiperProps> = ({
  containerClassName,
  className,
  speed = 1000,
  navigationId = "default",
  children,
}) => {
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={`flex justify-center ${containerClassName}`}>
      {/* Tombol navigasi kiri */}
      <div className="flex items-center ">
        <button
          ref={prevBtnRef}
          type="button"
          className={`custom-prev-btn-${navigationId} h-fit flex justify-center items-center w-12 md:w-20 text-red-500 disabled:text-gray-400`}
        >
          <LeftArrowIcon className="h-full mr-1" />
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        navigation={{
          prevEl: `.custom-prev-btn-${navigationId}`,
          nextEl: `.custom-next-btn-${navigationId}`,
        }}
        pagination={{ clickable: true }}
        speed={speed}
        watchOverflow={false}
        className={`overflow-hidden cursor-grab active:cursor-grabbing ${className}`}
      >
        {children}
      </Swiper>

      {/* Tombol navigasi kanan */}
      <div className="flex items-center">
        <button
          ref={nextBtnRef}
          type="button"
          className={`custom-next-btn-${navigationId} h-fit flex justify-center items-center w-12 md:w-20 text-red-500 disabled:text-gray-400`}
        >
          <RightArrowIcon className="h-full mr-1" />
        </button>
      </div>
    </div>
  );
};

export { SwiperSlide };
export default CustomSwiper;
