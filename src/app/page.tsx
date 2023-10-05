import type React from "react";

import PerkenalanDepartemen from "@/components/perkenalan-departemen/perkenalan-departemen";
import TentangKami from "@/components/tentang-kami/tentang-kami";

import Hero from "@/components/home/Hero";
import Pencapaian from "@/components/pencapaian/pencapaian";
import ProgramKerja from "@/components/program-kerja/ProgramKerja";
import Footer from "@/components/footer/footer";
import BgPencapaian from "@/components/background/bg-pencapaian";
import BgTentangKami from "@/components/background/bg-tentang-kami";
import BgProgramKerja from "@/components/background/bg-program-kerja";

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
      <section className="relative mt-20 flex flex-col bg-[#212C4F] justify-center gap-10 pt-10 pb-10">
        <BgProgramKerja />
        <ProgramKerja />
      </section>
      <section className="flex mt-44 flex-col justify-center gap-10 pb-20 relative">
        <BgPencapaian />
        <Pencapaian />
      </section>
      <section className="flex flex-col items-center justify-center h-full">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
