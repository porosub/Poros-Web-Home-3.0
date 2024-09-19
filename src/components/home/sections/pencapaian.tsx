"use client";
import { Card } from "@/components/ui/card";
import { dataPencapaian } from "@/lib/static/data-pencapaian";
import React from "react";
import type { FC } from "react";
import CustomSwiper,{ SwiperSlide } from "@/components/ui/swiper";

const Pencapaian: FC = () => {
  return (
    <>
      <h2
        className="font-bold text-5xl text-center px-5 md:px-20 text-textDarkBlue"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        Pencapaian
      </h2>
      <CustomSwiper
        slidesPerView={3}
        spaceBetween={1}
        containerClassName="lg:mx-32"
        navigationId="pencapaian"
      >
        {dataPencapaian.map((pencapaian, i) => (
          <SwiperSlide key={i}>
            <Card
              deskripsi={pencapaian.deskripsi}
              gambar={pencapaian.gambar}
              className="sm:flex-[0_0_33%] flex-[0_0_100%] px-[20px]"
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </>
  );
};

export default Pencapaian;
