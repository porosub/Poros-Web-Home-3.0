"use client";
import type { FC } from "react";
import { useState } from "react";
import { CardAnggota } from "@/components/ui/card-anggota";
import CustomSwiper, { SwiperSlide } from "@/components/ui/swiper";
import {
  dataDummyBPH,
  dataDummyBPI,
  dataDummyAnggotaPengurus,
} from "@/lib/static/data-dummy-pengurus";
import { Button } from "@/components/ui/button";

export const DaftarAnggota: FC = () => {
  const [showAllAnggota, setShowAllAnggota] = useState(false);

  const anggotaToShow = showAllAnggota
    ? dataDummyAnggotaPengurus
    : dataDummyAnggotaPengurus.slice(0, 6);

  return (
    <div className="flex flex-col items-center pt-24 w-full justify-center">
      <div className="relative w-full flex justify-center">
        <div className="bg-green-600 w-full h-8 md:h-12"></div>
        <div className="absolute bg-yellow-400 rounded-2xl md:rounded-3xl px-6 py-2 -bottom-2">
          <h1 className="text-[#1E2A5E] font-semibold text-[24px] md:text-[40px]">
            Daftar Pengurus
          </h1>
        </div>
      </div>

      {/* Struktur BPI */}
      <section className="w-full px-8 pt-16 md:px-16 md:pt-24">
        <h2 className="font-semibold text-[#1E2A5E] text-[24px] md:text-[40px]">
          Struktur BPI
        </h2>
        <div className="border-t w-full border-gray-300" />

        {/* Slider untuk Tablet dan Mobile */}
        <CustomSwiper
          containerClassName="lg:hidden"
          navigationId="struktur-bpi"
        >
          {dataDummyBPI.map((anggota) => (
            <SwiperSlide
              key={anggota.id}
              className="sm:flex-[0_0_50%] flex-[0_0_100%] p-[16px]"
            >
              <CardAnggota
                nama={anggota.nama}
                jabatan={anggota.jabatan}
                foto={anggota.foto}
                className=" h-full"
              />
            </SwiperSlide>
          ))}
        </CustomSwiper>

        {/* Responsif untuk Desktop */}
        <div className="hidden lg:flex flex-wrap justify-center gap-8 p-8">
          {dataDummyBPI.map((anggota) => (
            <CardAnggota
              key={anggota.id}
              nama={anggota.nama}
              jabatan={anggota.jabatan}
              foto={anggota.foto}
              className="flex-[0_1_30%] max-w-[400px]"
            />
          ))}
        </div>
      </section>

      {/* Struktur BPH */}
      <section className="w-full px-8 pt-16 md:px-16 md:pt-24">
        <h2 className="font-semibold text-[#1E2A5E] text-[24px] md:text-[40px]">
          Struktur BPH
        </h2>
        <div className="border-t mt-2 w-full border-gray-300" />

        {/* Slider untuk Tablet dan Mobile */}
        <CustomSwiper
          containerClassName="lg:hidden"
          navigationId="struktur-bph"
        >
          {dataDummyBPH.map((divisi) => (
            <SwiperSlide
              key={divisi.divisi}
              className="gap-8 sm:flex-[0_0_50%] flex-[0_0_100%] p-[16px]"
            >
              <div className="mb-1">
                <h3 className="text-[24px] font-bold mb-4 text-center text-[#1E2A5E]">
                  {divisi.divisi}
                </h3>
                {divisi.anggota.slice(0, 6).map((anggota) => (
                  <CardAnggota
                    key={anggota.id}
                    nama={anggota.nama}
                    jabatan={anggota.jabatan}
                    foto={anggota.foto}
                    className=" h-full mb-8"
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </CustomSwiper>

        {/* Responsif untuk Desktop */}
        <div className="hidden lg:flex flex-wrap justify-center gap-8 p-8">
          {dataDummyBPH.map((divisi) => (
            <div key={divisi.divisi} className="flex-[0_1_30%] max-w-[400px]">
              <h3 className="text-[32px] font-bold mb-4 text-center text-[#1E2A5E]">
                {divisi.divisi}
              </h3>
              {divisi.anggota.slice(0, 6).map((anggota) => (
                <CardAnggota
                  key={anggota.id}
                  nama={anggota.nama}
                  jabatan={anggota.jabatan}
                  foto={anggota.foto}
                  className="mb-8"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Struktur Anggota */}
      <section className="w-full p-8 md:p-16">
        <h2 className="font-semibold text-[#1E2A5E] text-[24px] md:text-[40px]">
          Struktur Anggota
        </h2>
        <div className="border-t mt-2 w-full border-gray-300" />

        {/* Slider untuk Tablet dan Mobile */}
        <CustomSwiper
          containerClassName="lg:hidden"
          navigationId="struktur-anggota"
        >
          {anggotaToShow.map((anggota) => (
            <SwiperSlide
              key={anggota.id}
              className="sm:flex-[0_0_50%] flex-[0_0_100%] p-[16px]"
            >
              <CardAnggota
                nama={anggota.nama}
                jabatan={anggota.jabatan}
                foto={anggota.foto}
                className=" h-full"
              />
            </SwiperSlide>
          ))}
        </CustomSwiper>

        {/* Responsif untuk Desktop */}
        <div className="hidden lg:flex flex-wrap justify-center gap-8 p-8">
          {anggotaToShow.map((anggota) => (
            <CardAnggota
              key={anggota.id}
              nama={anggota.nama}
              foto={anggota.foto}
              jabatan={anggota.jabatan}
              className="flex-[0_1_30%] max-w-[400px]"
            />
          ))}
        </div>

        <div className="hidden lg:flex justify-center mt-4">
          <Button
            onClick={() => {
              setShowAllAnggota((prev) => !prev);
            }}
            className="bg-[#1E2A5E] text-yellow-400 font-semibold rounded-full text-[16px] md:text-[24px] px-6 py-2 hover:bg-[#1E2A5E] cursor-pointer"
          >
            {showAllAnggota ? "Lihat lebih sedikit" : "Lihat lebih banyak"}
          </Button>
        </div>
      </section>
    </div>
  );
};
