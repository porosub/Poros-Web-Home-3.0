import React from "react";
import Carousel from "../../Carousel";
import { Card } from "../../Card";
import { dataStrukturAnggota } from "./data-anggota";
import Struktur from "../struktur";

const TentangKamiStrukturAnggota = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-4 mb-24">
        <h2 className="font-rubik lg:text-3xl font-medium lg:font-bold text-[#212C4F] mb-2 lg:w-[1100px]">
          Struktur Anggota
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
        {dataStrukturAnggota.map((struktur, index) =>
          index % 2 === 0 ? (
            <div
              key={struktur.id}
              className="sm:flex-[0_0_50%] flex-[0_0_100%] pl-[20px] relative"
            >
              <Card className="w-full bg-gray-200 rounded-lg shadow-md mb-4">
                <img
                  src={struktur.gambar}
                  className="w-full aspect-video md:aspect-square rounded-lg"
                />
                <Struktur nama={struktur.nama} jabatan={struktur.divisi} />
              </Card>
              {dataStrukturAnggota[index + 1] && (
                <div className="relative">
                  <Card className="w-full bg-gray-200 rounded-lg shadow-md">
                    <img
                      src={dataStrukturAnggota[index + 1].gambar}
                      className="w-full aspect-video md:aspect-square rounded-lg"
                    />
                    <Struktur
                      nama={dataStrukturAnggota[index + 1].nama}
                      jabatan={dataStrukturAnggota[index + 1].divisi}
                    />
                  </Card>
                </div>
              )}
            </div>
          ) : null,
        )}
      </Carousel>
      <div className="hidden md:block">
        <div className="grid grid-cols-4 mx-32 lg:mx-48 gap-6 lg:gap-10">
          {dataStrukturAnggota.map((struktur, index) => (
            <div
              key={struktur.id}
              className={`md:block ${
                (index + 1) % 2 === 0 ? "md:order-last" : "md:order-first"
              }`}
            >
              <Card>
                <img
                  src={struktur.gambar}
                  className="w-full aspect-video md:aspect-square rounded-lg"
                />
                <Struktur nama={struktur.nama} jabatan={struktur.divisi} />
                {struktur.divisi && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
                    <span className="text-xs font-bold bg-white px-2 py-1 rounded">
                      {struktur.divisi}
                    </span>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TentangKamiStrukturAnggota;
