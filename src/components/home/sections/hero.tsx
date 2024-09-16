import React from "react";
import type { FC } from "react";
import Image from "next/image";
import { HeroLeftElement } from "../fragments/hero-left-element";
import { HeroLeftElementMobile } from "../fragments/hero-left-element-mobile";
import { HeroRightElement } from "../fragments/hero-right-element";
import { HeroRightElementMobile } from "../fragments/hero-right-element-mobile";

const Hero: FC = () => {
  return (
    <div className="flex h-[32rem] md:h-screen relative bg-radial-gradient z-[-1]">
      <HeroLeftElement className="hidden md:block absolute top-0 h-fit -z-10 -left-[40%] md:left-0" />
      <HeroLeftElementMobile className="-z-10 absolute md:hidden top-0 left-0" />
      <div className="flex justify-center w-full items-center md:mr-[40%] lg:mr-[20%]">
        <div className="w-32 -translate-y-16 aspect-square md:hidden relative">
          <Image
            src={"/svg/logo/poros.svg"}
            alt="Logo POROS"
            fill={true}
            priority={true}
          />
        </div>
        <h1 className="font-bold text-8xl hidden md:block text-textDarkBlue">
          POROS
        </h1>
      </div>
      <HeroRightElement className="h-fit hidden md:block absolute -z-10 -right-[130%] md:-right-32 lg:-right-5" />
      <HeroRightElementMobile className="h-fit -z-10 absolute md:hidden -top-10 right-0" />
      <div className="w-52 lg:w-64 hidden md:block aspect-square absolute right-32 top-32">
        <Image src={"/svg/logo/poros.svg"} alt="Logo POROS" fill={true} />
      </div>
    </div>
  );
};

export default Hero;
