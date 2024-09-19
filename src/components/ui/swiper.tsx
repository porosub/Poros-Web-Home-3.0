"use client";

import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { FC, PropsWithChildren } from "react";
import { LeftArrowIcon } from "./icons/left-arrow-icon";
import { RightArrowIcon } from "./icons/right-arrow-icon";
import dynamic from "next/dynamic";
const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper), {
    ssr: false,
  });

type SwiperProps = {
  containerClassName?: string;
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  speed?: number;
  navigationId?: string;
} & PropsWithChildren;

const CustomSwiper: FC<SwiperProps> = ({
  containerClassName,
  className,
  slidesPerView = 1,
  spaceBetween = 20,
  speed = 1000,
  navigationId = "default",
  children,
}) => {
  return (
    <div className={`flex justify-center ${containerClassName}`}>
      {/* Tombol navigasi kiri */}
      <div className="flex items-center pl-5">
        <button
          type="button"
          className={`custom-prev-btn-${navigationId} h-fit flex justify-center items-center w-16 md:w-20 text-red-500 disabled:text-gray-400`}
        >
          <LeftArrowIcon className="h-full mr-1" />
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
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
      <div className="flex items-center pr-5">
        <button
          type="button"
          className={`custom-next-btn-${navigationId} h-fit flex justify-center items-center w-16 md:w-20 text-red-500 disabled:text-gray-400`}
        >
          <RightArrowIcon className="h-full mr-1" />
        </button>
      </div>
    </div>
  );
};

export { SwiperSlide };
export default CustomSwiper;
