import { Card } from "@/components/Card";
import Carousel from "@/components/Carousel";
import POROSLogo from "@/components/POROSLogo";
import { HeroLeftElement } from "@/components/home/HeroLeftElement";
import { HeroLeftElementMobile } from "@/components/home/HeroLeftElementMobile";
import { HeroRightElement } from "@/components/home/HeroRightElement";
import { HeroRightElementMobile } from "@/components/home/HomeRightElementMobile";
import type React from "react";

const Home: React.FC = () => {
  return (
    <main className="overflow-hidden flex flex-col gap-16">
      <section className="flex h-[32rem] md:h-screen relative">
        <HeroLeftElement className="hidden md:block absolute top-0 h-fit -z-10 -left-[40%] md:left-0" />
        <HeroLeftElementMobile className="-z-10 absolute md:hidden top-0 left-0" />
        <div className="flex justify-center w-full items-center md:mr-[40%] lg:mr-[20%]">
          <POROSLogo className="w-32 -translate-y-20 aspect-square md:hidden" />
          <h1 className="font-bold text-8xl hidden md:block">POROS</h1>
        </div>
        <HeroRightElement className="h-fit hidden md:block absolute top-0 -z-10 -right-[130%] md:-right-32 lg:-right-5" />
        <HeroRightElementMobile className="-z-10 absolute md:hidden rop-0 right-0" />
        <POROSLogo className="w-52 lg:w-60 hidden md:block aspect-square absolute right-32 top-32" />
      </section>
      <section className="flex flex-col justify-center gap-10 pb-20">
        <h2 className="font-bold text-5xl text-center px-5 md:px-20">
          Pencapaian
        </h2>
        <Carousel
          options={{ dragFree: false, align: "start" }}
          containerClassName=""
        >
          <Card className="w-full sm:w-[48%] md:w-[32%] shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-[48%] md:w-[32%] shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-[48%] md:w-[32%] shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-[48%] md:w-[32%] shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-[48%] md:w-[32%] shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-[48%] md:w-[32%] shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-[48%] md:w-[32%] shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-[48%] md:w-[32%] shrink-0 rounded-2xl bg-gray-200 p-5" />
        </Carousel>
      </section>
    </main>
  );
};

export default Home;
