"use client";

import type React from "react";

import Department from "./departement";
import Carousel from "../Carousel";
import { dataDepartemenRND } from "./data-departemen-RnD";
import { dataDepartemenKeorganisasian } from "./data-departemen-keorganisasian";
import { Card } from "../Card";

const PerkenalanDepartemen: React.FC = () => {
  return (
    <div className="flex flex-col justify-center relative">
      <div className="bg-gradient-ball position-gradient-ball" />

      <div
        className="text-textDarkBlue text-center font-rubik text-[24px] md:text-[48px] font-semibold mb-6 md:mb-8 mt-8"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <h2 className="md:inline-block flex flex-col">
          Departemen <span>R&D</span>
        </h2>
      </div>

      <Carousel
        options={{
          dragFree: false,
          align: "start",
        }}
        containerClassName="md:hidden"
      >
        {dataDepartemenRND.map((departemen) => (
          <Card
            key={departemen.nama}
            deskripsi={departemen.deskripsi}
            className="sm:flex-[0_0_50%] flex-[0_0_100%] pl-[20px]"
          >
            <Department nama={departemen.nama} gambar={departemen.gambar} />
          </Card>
        ))}
      </Carousel>

      <div className="grid grid-cols-3 mx-32 lg:mx-48 gap-6 lg:gap-10">
        {dataDepartemenRND.map((departemen) => (
          <Card
            key={departemen.nama}
            deskripsi={departemen.deskripsi}
            className="hidden md:block"
          >
            <Department nama={departemen.nama} gambar={departemen.gambar} />
          </Card>
        ))}
      </div>

      <div
        className="text-textDarkBlue text-center font-rubik text-[24px] md:text-[48px] font-semibold mb-6 md:mb-8 mt-16"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <h2 className="md:inline-block flex flex-col">
          Departemen <span>Keorganisasian</span>
        </h2>
      </div>

      <Carousel
        options={{
          dragFree: false,
          align: "start",
        }}
        containerClassName="md:hidden"
      >
        {dataDepartemenKeorganisasian.map((departemen) => (
          <Card
            key={departemen.nama}
            deskripsi={departemen.deskripsi}
            className="sm:flex-[0_0_50%] flex-[0_0_100%] pl-[20px]"
          >
            <Department nama={departemen.nama} gambar={departemen.gambar} />
          </Card>
        ))}
      </Carousel>

      <div className="grid grid-cols-3 mx-32 lg:mx-48 gap-6 lg:gap-10 pb-20">
        {dataDepartemenKeorganisasian.map((departemen) => (
          <Card
            key={departemen.nama}
            deskripsi={departemen.deskripsi}
            className="hidden md:block overflow-hidden"
          >
            <Department nama={departemen.nama} gambar={departemen.gambar} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PerkenalanDepartemen;
