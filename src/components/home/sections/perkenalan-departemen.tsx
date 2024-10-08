"use client";

import type React from "react";

import {
  dataDepartemenKeorganisasian,
  dataDepartemenRND,
} from "@/lib/static/data-departemen";
import DepartmentCard from "../cards/departement-card";
import CustomSwiper, { SwiperSlide } from "@/components/ui/swiper";

const PerkenalanDepartemen: React.FC = () => {
  return (
    <div className="flex flex-col justify-center relative">
      <div className="bg-gradient-ball position-gradient-ball" />

      <div
        className="text-textDarkBlue text-center font-rubik text-4xl md:text-5xl font-semibold mb-6 md:mb-8 mt-8"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <h2 className="md:inline-block flex flex-col">
          Departemen <span>R&D</span>
        </h2>
      </div>
      <CustomSwiper containerClassName="md:hidden" navigationId="perkenalan">
        {dataDepartemenRND.map(({ deskripsi, gambar, nama }, index) => (
          <SwiperSlide
            key={index}
            className="sm:flex-[0_0_50%] flex-[0_0_100%] px-[10px]"
          >
            <DepartmentCard
              key={nama}
              description={deskripsi}
              image={gambar}
              name={nama}
              className="h-full"
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>

      <div className="grid-cols-3 mx-32 lg:mx-48 gap-5 hidden md:grid">
        {dataDepartemenRND.map(({ deskripsi, gambar, nama }) => (
          <DepartmentCard
            key={nama}
            description={deskripsi}
            image={gambar}
            name={nama}
          />
        ))}
      </div>

      <div
        className="text-textDarkBlue text-center font-rubik text-4xl md:text-5xl font-semibold mb-6 md:mb-8 mt-16"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <h2 className="md:inline-block flex flex-col">
          Departemen <span>Keorganisasian</span>
        </h2>
      </div>
      <CustomSwiper
        containerClassName="md:hidden"
        navigationId="keorganisasian"
      >
        {dataDepartemenKeorganisasian.map(
          ({ deskripsi, gambar, nama }, index) => (
            <SwiperSlide
              key={index}
              className="sm:flex-[0_0_50%] flex-[0_0_100%] px-[10px]"
            >
              <DepartmentCard
                key={nama}
                description={deskripsi}
                image={gambar}
                name={nama}
                className="h-full"
              />
            </SwiperSlide>
          ),
        )}
      </CustomSwiper>

      <div className="hidden md:grid grid-cols-3 mx-32 lg:mx-48 gap-5 pb-20">
        {dataDepartemenKeorganisasian.map(({ deskripsi, gambar, nama }) => (
          <DepartmentCard
            key={nama}
            description={deskripsi}
            image={gambar}
            name={nama}
            className="hidden md:block overflow-hidden"
          />
        ))}
      </div>
    </div>
  );
};

export default PerkenalanDepartemen;
