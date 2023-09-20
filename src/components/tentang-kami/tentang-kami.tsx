import React from "react";
import { Badge } from "@/components/ui/badge";

const TentangKami: React.FC = () => {
  return (
    <div className="w-[275px] h-[240px] flex flex-col items-center justify-center">
      <div className="flex w-[105px] h-[22px] mb-4">
        <span className="mr-1 ">Tentang</span>
        <Badge className="bg-[#29AC4A]">Kami</Badge>
      </div>
      <div className="w-[275px] h-[100px] text-center text-[#212C4F] font-rubik text-[11px] font-normal leading-[17px] tracking-tight">
        POROS Organization of Open Source merupakan sebuah lembaga semi otonom
        yang mewadahi pengguna GNU/Linux serta perangkat lunak sumber terbuka,
        bebas dan legal yang bertempat di Fakultas Ilmu Komputer Universitas
        Brawijaya
      </div>
    </div>
  );
};

export default TentangKami;
