"use client";
import { Card } from "@/components/ui/card";
import { programKerja } from "@/lib/static/data-program-kerja";
import Image from "next/image";
import type { FC } from "react";
import CustomSwiper,{ SwiperSlide } from "@/components/ui/swiper";


const ProgramKerja: FC = () => {
  return (
    <>
      <h2 className="font-bold text-white text-5xl text-center px-5 md:px-20">
        Program Kerja
      </h2>
      <CustomSwiper
        containerClassName="lg:px-56"
        slidesPerView={1}
        navigationId="programKerja"
      >
        {programKerja.map(({ description, imagePath }, index) => {
          return (
            <SwiperSlide key={index}>
              <Card className="flex-[0_0_100%] px-[20px] h-[400px]" deskripsi={description}>
                <div className="relative w-full aspect-video overflow-hidden bg-gray-500 rounded-md">
                  <Image
                    src={imagePath}
                    alt="Pic"
                    fill={true}
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
              </Card>
            </SwiperSlide>
          );
        })}
      </CustomSwiper>
    </>
  );
};

export default ProgramKerja;
