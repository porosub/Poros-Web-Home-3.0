import React from "react";
import type { FC } from "react";
import Image from "next/image";
import Rectangle from "../fragments/rectangle";
import Circle from "../fragments/circle";

const BgTentangKami: FC = () => {
  return (
    <div className="w-full h-full absolute top-0 -z-10">
      <Rectangle className="absolute top-0 right-16 bg-[#ffde5b] md:w-10 md:h-10 w-5 h-5 rotate-45" />
      <Rectangle className="absolute md:-bottom-36 -bottom-16 left-16 bg-[#ffde5b] md:w-14 md:h-14 w-7 h-7 rotate-45" />
      <Circle className="absolute top-0 left-1/4 bg-[#53bc6e] md:w-14 md:h-14 w-4 h-4" />
      <Circle className="absolute bottom-0 right-1/4 bg-[#53bc6e] md:w-10 md:h-10 w-5 h-5" />
      <Image
        src="/svg/fragments/doughnut.svg"
        alt="doughnut background shape"
        width={150}
        height={150}
        className="h-[120%] aspect-square absolute md:left-0 -left-16 -top-5 -z-10"
      />
    </div>
  );
};

export default BgTentangKami;
