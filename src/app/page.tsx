import POROSLogo from "@/components/POROSLogo";
import { HeroLeftElement } from "@/components/home/HeroLeftElement";
import { HeroLeftElementMobile } from "@/components/home/HeroLeftElementMobile";
import { HeroRightElement } from "@/components/home/HeroRightElement";
import { HeroRightElementMobile } from "@/components/home/HomeRightElementMobile";
import type React from "react";

const Home: React.FC = () => {
  return (
    <main className="h-[130vh] overflow-hidden">
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
    </main>
  );
};

export default Home;
