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
    <main className="overflow-hidden">
      <section className="flex h-[35rem] relative">
        <HeroLeftElement className="h-full hidden md:block absolute -top-20 -z-10 -left-[40%] md:left-0" />
        <HeroLeftElementMobile className="h-full -z-10 absolute md:hidden -top-20 left-0" />
        <div className="flex justify-center w-full items-center md:mr-[40%] lg:mr-[20%]">
          <POROSLogo className="w-32 -translate-y-16 aspect-square md:hidden" />
          <h1 className="font-bold text-8xl hidden md:block">POROS</h1>
        </div>
        <HeroRightElement className="h-full hidden md:block absolute -z-10 -right-[130%] md:-right-32 lg:-right-5" />
        <HeroRightElementMobile className="h-full -z-10 absolute md:hidden -top-10 right-0" />
        <POROSLogo className="w-52 lg:w-60 hidden md:block aspect-square absolute right-32 top-32" />
      </section>
      <section className="flex flex-col justify-center gap-10 pb-20">
        <h2 className="font-bold text-5xl text-center px-5 md:px-20">
          Pencapaian
        </h2>
        <Carousel
          options={{ dragFree: false, align: "start" }}
          containerClassName="px-16 md:px-20"
        >
          <Card className="w-full sm:w-1/2 md:w-1/3 shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-1/2 md:w-1/3 shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-1/2 md:w-1/3 shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-1/2 md:w-1/3 shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-1/2 md:w-1/3 shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-1/2 md:w-1/3 shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-1/2 md:w-1/3 shrink-0 rounded-2xl bg-gray-200 p-5" />
          <Card className="w-full sm:w-1/2 md:w-1/3 shrink-0 rounded-2xl bg-gray-200 p-5" />
        </Carousel>
      </section>
    </main>
  );
};

export default Home;
