"use client";

import { Badge } from "@/components/ui/badge";
import type React from "react";
import { Element } from "react-scroll";

const TentangKami: React.FC = () => {
  return (
    <Element name="home-about">
      <section className="w-full max-w-3xl h-auto flex flex-col items-center justify-center p-4 md:p-8">
        <div
          className="flex items-center space-x-2 mb-4 text-4xl md:text-4xl font-bold"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <span>Tentang</span>
          <Badge
            className="bg-[#29AC4A] font-rubik text-3xl md:text-4xl"
            style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Kami
          </Badge>
        </div>
        <div className="w-full text-center [max-inline-size:50ch] [text-wrap:balance] text-[#212C4F] font-rubik text-lg">
          POROS Organization of Open Source merupakan sebuah lembaga semi otonom
          yang mewadahi pengguna GNU/Linux serta perangkat lunak sumber terbuka,
          bebas dan legal yang bertempat di Fakultas Ilmu Komputer Universitas
          Brawijaya
        </div>
      </section>
    </Element>
  );
};

export default TentangKami;
