import React from "react";
import { Badge } from "@/components/ui/badge";
import Carousel from "../../Carousel";
import { Card } from "../../Card";
import { dataStrukturBPI } from "./data-struktur-bpi";
import Struktur from "../struktur";

const TentangKamiStrukturBPI = () => {
  return (
    <div>
      <div
        className="w-full bg-[#29AC4A] h-6 lg:h-12 flex justify-center items-center"
        style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.30)" }}
      >
        <Badge
          className="bg-[#FFD633] font-rubik text-[#212C4F] w-[300px] h-[40px] lg:w-[350px] lg:h-[70px] rounded-[34px] shadow-md flex justify-center items-center text-[34px]"
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          Daftar Pengurus
        </Badge>
      </div>

      <div className="flex flex-col items-center my-4 mb-24">
        <h2 className="font-rubik lg:text-3xl font-medium lg:font-bold text-[#212C4F] mb-2 lg:w-[1100px]">
          Struktur BPI
        </h2>
        <div className="w-[330px] lg:w-[1100px] h-[3px] bg-[#C3C3C3]"></div>
      </div>

      <Carousel
        options={{
          dragFree: false,
          align: "start",
        }}
        containerClassName="md:hidden"
      >
        {dataStrukturBPI.map((struktur) => (
          <Card className="sm:flex-[0_0_50%] flex-[0_0_100%] pl-[20px]">
            <img
              src={struktur.gambar}
              className="w-full aspect-video md:aspect-square rounded-lg"
            />
            <Struktur nama={struktur.nama} jabatan={struktur.jabatan} />
          </Card>
        ))}
      </Carousel>
      <div className="hidden md:block">
        <div className="xl:mx-16">
          <div className="grid grid-cols-2 mx-40 lg:mx-64 xl:mx-96 gap-6 lg:gap-10">
            {dataStrukturBPI.map((struktur) => (
              <Card className="h-[380px] w-[300px]">
                <img
                  src={struktur.gambar}
                  className="w-full aspect-video md:aspect-square rounded-lg"
                />
                <Struktur nama={struktur.nama} jabatan={struktur.jabatan} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKamiStrukturBPI;
