"use client";
import dataDepartemen from "./data-departemen";
import hookDepartemen from "@/hooks/hook-departemen";

const PerkenalanDepartemen = () => {
  const { currentSlide, prevSlide, nextSlide } = hookDepartemen(dataDepartemen);
  const departemenAktif = dataDepartemen[currentSlide];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className="text-[#212C4F] text-center font-rubik text-[15px] font-semibold leading-[22px] mb-4"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        Departemen <br />
        keorganisasian
      </div>

      {/* Box Luar */}
      <div className="relative w-[240px] h-[240px] bg-[#EEE] rounded-[15px] shadow-md">
        {/* Arrow Left */}
        <img
          src="arrow-left.svg"
          alt="Arrow Left"
          className="absolute left-[-45px] w-[25px] h-[25px] top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={prevSlide}
        />

        {/* Arrow Right */}
        <img
          src="arrow-right.svg"
          alt="Arrow Right"
          className="absolute right-[-45px] w-[25px] h-[25px] top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={nextSlide}
        />

        {/* Box Gambar */}
        <div className="absolute top-[24px] left-1/2 transform -translate-x-1/2 w-[200px] h-[110px] bg-[#FDE172] rounded-[15px] shadow-md">
          <img
            src={departemenAktif.gambar}
            alt={departemenAktif.nama}
            className="w-full h-full object-cover rounded-[15px]"
          />
        </div>

        {/* nama divisi */}
        <div className="absolute top-[11px] left-1/2 transform -translate-x-1/2 w-[100px] h-[30px] bg-[var(--Primary,#29AC4A)] rounded-[35px] flex items-center justify-center overflow-hidden">
          <span className="text-[12px] text-[#212C4F] font-rubik font-medium whitespace-nowrap">
            {departemenAktif.nama}
          </span>
        </div>

        {/* Box Deskripsi divisi */}
        <div className="absolute bottom-[16px] left-1/2 transform -translate-x-1/2 w-[185px] h-[82px] text-[#212C4F] text-center font-rubik text-[12px] font-normal tracking-tight overflow-hidden p-2">
          {departemenAktif.deskripsi}
        </div>
      </div>
    </div>
  );
};

export default PerkenalanDepartemen;
