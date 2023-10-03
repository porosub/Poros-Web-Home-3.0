"use client";
import Carousel from "@/components/Carousel";
import dataDepartemen from "./data-departemen";
import { cardDepartemen as CardDepartemen } from "./card-data-departemen";

const PerkenalanDepartemen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto">
      <div
        className="text-[#212C4F] text-center font-rubik text-[24px] md:text-[48px] font-semibold mb-6 mt-6 md:mb-8 mt-8"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <span className="md:hidden">
          Departemen <br />
        </span>
        <span className="hidden md:inline-block">Departemen R&D</span>
        <span className="md:hidden">R&D</span>
      </div>

      {/* Mobile pakai Carousel 1*/}
      <div className="md:hidden">
        <div className="max-w-[512px] max-h-[512px]">
          <Carousel options={{ dragFree: false }}>
            {dataDepartemen.map((departemen, idx) => (
              <CardDepartemen
                key={idx}
                departemen={departemen}
                className="pl-[20px]"
              />
            ))}
          </Carousel>
        </div>
      </div>

      {/* Desktop tanpa Carousel 1*/}
      <div className="hidden md:flex md:justify-center md:space-x-6 ">
        {dataDepartemen.map((departemen, idx) => (
          <div
            key={idx}
            className="relative w-[320px] h-[320px] bg-[#EEE] rounded-[15px] shadow-md"
          >
            <div className="absolute top-[24px] left-1/2 transform -translate-x-1/2 w-[280px] h-[150px] bg-[#FDE172] rounded-[15px] shadow-md">
              <img
                src={departemen.gambar}
                alt={departemen.nama}
                className="w-full h-full object-cover rounded-[15px]"
              />
            </div>

            <div className="absolute top-[11px] left-1/2 transform -translate-x-1/2 w-[140px] h-[40px] bg-[var(--Primary,#29AC4A)] rounded-[35px] flex items-center justify-center overflow-hidden">
              <span className="text-[15px] text-[#212C4F] font-rubik font-medium">
                {departemen.nama}
              </span>
            </div>

            <div className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 w-[265px] h-[100px] text-[#212C4F] text-center font-rubik text-[14px] font-normal overflow-hidden p-2">
              {departemen.deskripsi}
            </div>
          </div>
        ))}
      </div>

      <div
        className="text-[#212C4F] text-center font-rubik text-[24px] md:text-[48px] font-semibold mb-6 mt-6 md:mb-8 mt-8"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <span className="md:hidden">
          Departemen <br />
        </span>
        <span className="hidden md:inline-block">
          Departemen keorganisasian
        </span>
        <span className="md:hidden">Keorganisasian</span>
      </div>

      {/* Mobile pakai Carousel 2*/}
      <div className="md:hidden">
        <div className="max-w-[512px] max-h-[512px]">
          <Carousel options={{ dragFree: false }}>
            {dataDepartemen.map((departemen, idx) => (
              <CardDepartemen
                key={idx}
                departemen={departemen}
                className="pl-[20px]"
              />
            ))}
          </Carousel>
        </div>
      </div>

      {/* Desktop tanpa Carousel 2*/}
      <div className="hidden md:flex md:justify-center md:space-x-6 ">
        {dataDepartemen.map((departemen, idx) => (
          <div
            key={idx}
            className="relative w-[320px] h-[320px] bg-[#EEE] rounded-[15px] shadow-md"
          >
            <div className="absolute top-[24px] left-1/2 transform -translate-x-1/2 w-[280px] h-[150px] bg-[#FDE172] rounded-[15px] shadow-md">
              <img
                src={departemen.gambar}
                alt={departemen.nama}
                className="w-full h-full object-cover rounded-[15px]"
              />
            </div>

            <div className="absolute top-[11px] left-1/2 transform -translate-x-1/2 w-[140px] h-[40px] bg-[var(--Primary,#29AC4A)] rounded-[35px] flex items-center justify-center overflow-hidden">
              <span className="text-[15px] text-[#212C4F] font-rubik font-medium whitespace-nowrap">
                {departemen.nama}
              </span>
            </div>

            <div className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 w-[265px] h-[100px] text-[#212C4F] text-center font-rubik text-[14px] font-normal overflow-hidden p-2">
              {departemen.deskripsi}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerkenalanDepartemen;
