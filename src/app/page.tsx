import Image from "next/image";
import type React from "react";

import PerkenalanDepartemen from "@/components/perkenalan-departemen/perkenalan-departemen";
import TentangKami from "@/components/tentang-kami/tentang-kami";

import BgPencapaian from "@/components/background/bg-pencapaian";
import BgTentangKami from "@/components/background/bg-tentang-kami";
import Hero from "@/components/home/Hero";
import Pencapaian from "@/components/pencapaian/pencapaian";
import ProgramKerja from "@/components/program-kerja/programKerja";

const Home: React.FC = () => {
  return (
    <main className="overflow-hidden flex flex-col gap-16">
      <section>
        <Hero />
      </section>
      <section className="flex flex-col items-center justify-center mb-24 relative">
        <BgTentangKami />
        <TentangKami />
      </section>
      <section className="flex flex-col justify-center pb-20">
        <PerkenalanDepartemen />
      </section>
      <section className="relative mt-20 flex flex-col bg-[#212C4F] justify-center gap-10 pt-10 pb-20">
        <div className="absolute -top-64 w-full translate-y-11 -z-10 h-72">
          <Image
            src={"/proker-top-wave.svg"}
            alt="tes"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-28 w-full translate-y-11 -z-10 h-72">
          <Image
            src={"/proker-bottom-wave.svg"}
            alt="tes"
            fill={true}
            className="object-cover"
          />
        </div>
        <ProgramKerja />
      </section>
      <section className="flex mt-44 flex-col justify-center gap-10 pb-20 relative">
        <BgPencapaian />
        <Pencapaian />
      </section>
    </main>
  );
};

export default Home;
