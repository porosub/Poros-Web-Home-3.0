import type React from "react";
import { Badge } from "@/components/ui/badge";

const TentangKami: React.FC = () => {
  return (
    <div className="w-full max-w-3xl h-auto flex flex-col items-center justify-center p-4 md:p-8">
      <div
        className="flex items-center space-x-2 mb-4 text-[18px] md:text-[36px] font-bold"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <span>Tentang</span>
        <Badge
          className="bg-[#29AC4A] font-rubik text-[16px] md:text-[36px]"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          Kami
        </Badge>
      </div>
      <div className="w-full text-center [max-inline-size:50ch] [text-wrap:balance] text-[#212C4F] font-rubik text-xxs md:text-base">
        POROS Organization of Open Source merupakan sebuah lembaga semi otonom
        yang mewadahi pengguna GNU/Linux serta perangkat lunak sumber terbuka,
        bebas dan legal yang bertempat di Fakultas Ilmu Komputer Universitas
        Brawijaya
      </div>
    </div>
  );
};

export default TentangKami;
