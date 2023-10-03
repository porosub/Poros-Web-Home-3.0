import { Card } from "@/components/Card";
import Carousel from "@/components/Carousel";
import Footer from "@/components/footer/footer";
import { HeroLeftElement } from "@/components/home/HeroLeftElement";
import { HeroLeftElementMobile } from "@/components/home/HeroLeftElementMobile";
import { HeroRightElement } from "@/components/home/HeroRightElement";
import { HeroRightElementMobile } from "@/components/home/HomeRightElementMobile";
import TentangKami from "@/components/tentang-kami/tentang-kami";
import PerkenalanDepartemen from "@/components/perkenalan-departemen/perkenalan-departemen";
import Image from "next/image";
import type React from "react";

const Home: React.FC = () => {
  return (
    <main className="overflow-hidden flex flex-col gap-16">
      <section className="flex h-[32rem] md:h-screen relative bg-radial-gradient z-[-1]">
        <HeroLeftElement className="hidden md:block absolute top-0 h-fit -z-10 -left-[40%] md:left-0" />
        <HeroLeftElementMobile className="-z-10 absolute md:hidden top-0 left-0" />
        <div className="flex justify-center w-full items-center md:mr-[40%] lg:mr-[20%]">
          <div className="w-32 -translate-y-16 aspect-square md:hidden relative">
            <Image src={"/logo-poros.svg"} alt="Logo POROS" fill={true} />
          </div>
          <h1 className="font-bold lg:text-9xl text-8xl hidden md:block text-textDarkBlue">
            POROS
          </h1>
        </div>
        <HeroRightElement className="h-fit hidden md:block absolute -z-10 -right-[130%] md:-right-32 lg:-right-5" />
        <HeroRightElementMobile className="h-fit -z-10 absolute md:hidden -top-10 right-0" />
        <div className="w-52 lg:w-64 hidden md:block aspect-square absolute right-32 top-32">
          <Image src={"/logo-poros.svg"} alt="Logo POROS" fill={true} />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center h-screen">
        <TentangKami />
      </section>
      <section className="flex flex-col items-center justify-center h-full">
        <PerkenalanDepartemen />
      </section>
      <section className="flex flex-col justify-center gap-10 pb-20">
        <h2 className="font-bold text-5xl text-center px-5 md:px-20">
          Pencapaian
        </h2>
        <Carousel options={{ dragFree: false, align: "start" }}>
          <Card className="md:flex-[0_0_33.333%] flex-[0_0_50%] pl-[20px]" />
          <Card className="md:flex-[0_0_33.333%] flex-[0_0_50%] pl-[20px]" />
          <Card className="md:flex-[0_0_33.333%] flex-[0_0_50%] pl-[20px]" />
          <Card className="md:flex-[0_0_33.333%] flex-[0_0_50%] pl-[20px]" />
          <Card className="md:flex-[0_0_33.333%] flex-[0_0_50%] pl-[20px]" />
          <Card className="md:flex-[0_0_33.333%] flex-[0_0_50%] pl-[20px]" />
          <Card className="md:flex-[0_0_33.333%] flex-[0_0_50%] pl-[20px]" />
          <Card className="md:flex-[0_0_33.333%] flex-[0_0_50%] pl-[20px]" />
        </Carousel>
      </section>

      <section className="flex flex-col items-center justify-center h-full">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
