import React from "react";
import Carousel from "../../Carousel";
import { Card } from "../../Card";
import { dataStrukturBPH } from "./data-struktur-bph";
import Struktur from "../struktur";

const specialIds = [1, 3, 5, 7, 9, 11];

const TentangKamiStrukturBPH = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-4 mb-24">
        <h2 className="font-rubik lg:text-3xl font-medium lg:font-bold text-[#212C4F] mb-2 lg:w-[1100px]">
          Struktur BPH
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
        {dataStrukturBPH.map((struktur, index) =>
          index % 2 === 0 ? (
            <div
              key={struktur.id}
              className="sm:flex-[0_0_50%] flex-[0_0_100%] pl-[20px] relative"
            >
              {specialIds.includes(struktur.id) && (
                <div key={struktur.id} className="text-center py-2">
                  <span className="text-lg font-bold">{`${struktur.divisi}`}</span>
                </div>
              )}
              <Card className="w-full bg-gray-200 rounded-lg shadow-md mb-4">
                <img
                  src={struktur.gambar}
                  className="w-full aspect-video md:aspect-square rounded-lg"
                />
                <Struktur nama={struktur.nama} jabatan={struktur.jabatan} />
              </Card>
              {dataStrukturBPH[index + 1] && (
                <div className="relative">
                  <Card className="w-full bg-gray-200 rounded-lg shadow-md">
                    <img
                      src={dataStrukturBPH[index + 1].gambar}
                      className="w-full aspect-video md:aspect-square rounded-lg"
                    />
                    <Struktur
                      nama={dataStrukturBPH[index + 1].nama}
                      jabatan={dataStrukturBPH[index + 1].jabatan}
                    />
                  </Card>
                </div>
              )}
            </div>
          ) : null,
        )}
      </Carousel>
      <div className="hidden md:block">
        <div className="grid grid-cols-3 mx-32 lg:mx-48 gap-6 lg:gap-10">
          {dataStrukturBPH
            .filter((struktur) => struktur.id >= 1 && struktur.id <= 6)
            .map((struktur, index) => (
              <div
                key={struktur.id}
                className={`md:block ${
                  (index + 1) % 2 === 0 ? "md:order-last" : "md:order-first"
                }`}
              >
                {specialIds.includes(struktur.id) && (
                  <div className="text-center lg:mb-8 py-2">
                    <span className="text-lg lg:text-3xl font-bold">{`${struktur.divisi}`}</span>
                  </div>
                )}
                <Card>
                  <img
                    src={struktur.gambar}
                    className="w-full aspect-video md:aspect-square rounded-lg"
                  />
                  <Struktur nama={struktur.nama} jabatan={struktur.jabatan} />
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
      <div className="hidden md:block mt-24">
        <div className="grid grid-cols-3 mx-32 lg:mx-48 gap-6 lg:gap-10">
          {dataStrukturBPH
            .filter((struktur) => struktur.id >= 7 && struktur.id <= 12)
            .map((struktur, index) => (
              <div
                key={struktur.id}
                className={`md:block ${
                  (index + 1) % 2 === 0 ? "md:order-last" : "md:order-first"
                }`}
              >
                {specialIds.includes(struktur.id) && (
                  <div className="text-center lg:mb-8 py-2">
                    <span className="text-lg lg:text-3xl font-bold">{`${struktur.divisi}`}</span>
                  </div>
                )}
                <Card>
                  <img
                    src={struktur.gambar}
                    className="w-full aspect-video md:aspect-square rounded-lg"
                  />
                  <Struktur nama={struktur.nama} jabatan={struktur.jabatan} />
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

export default TentangKamiStrukturBPH;
