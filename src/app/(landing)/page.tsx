import type React from "react";

import BgPencapaian from "@/components/home/backgrounds/bg-pencapaian";
import BgProgramKerja from "@/components/home/backgrounds/bg-program-kerja";
import BgTentangKami from "@/components/home/backgrounds/bg-tentang-kami";
import Hero from "@/components/home/sections/hero";
import Pencapaian from "@/components/home/sections/pencapaian";
import PerkenalanDepartemen from "@/components/home/sections/perkenalan-departemen";
import ProgramKerja from "@/components/home/sections/program-kerja";
import TentangKami from "@/components/home/sections/tentang-kami";

const Home: React.FC = () => {
  return (
    <main className="overflow-hidden flex flex-col gap-16">
      <section>
        <Hero />
      </section>
      <section className="flex flex-col items-center justify-center mb-24 mt-20 relative">
        <BgTentangKami />
        <TentangKami />
      </section>
      <section className="flex flex-col justify-center pb-20">
        <PerkenalanDepartemen />
      </section>
      <section className="relative mt-20 flex flex-col bg-[#212C4F] justify-center gap-10 pt-10 pb-10">
        <BgProgramKerja />
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
