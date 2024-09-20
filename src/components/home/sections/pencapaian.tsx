"use client";
import { Card } from "@/components/ui/card";
import { dataPencapaian } from "@/lib/static/data-pencapaian";
import type { FC } from "react";
import CustomSwiper, { SwiperSlide } from "@/components/ui/swiper";

const Pencapaian: FC = () => {
  return (
    <>
      <h2
        className="font-bold text-5xl text-center px-5 md:px-20 text-textDarkBlue"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        Pencapaian
      </h2>

      {/* Custom Swiper */}
      <CustomSwiper containerClassName="lg:mx-32" navigationId="pencapaian">
        {dataPencapaian.map((pencapaian, i) => (
          <SwiperSlide
            key={i}
            className="sm:flex-[0_0_33%] flex-[0_0_100%] px-[10px]"
          >
            <Card
              deskripsi={pencapaian.deskripsi}
              gambar={pencapaian.gambar}
              className="h-full"
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </>
  );
};

export default Pencapaian;
