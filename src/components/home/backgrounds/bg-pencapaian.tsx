import React from "react";
import type { FC } from "react";
import Rectangle from "../fragments/rectangle";
import Triangle from "../fragments/triangle";
import Circle from "../fragments/circle";

const BgPencapaian: FC = () => {
  return (
    <div className="w-full h-full absolute top-0 -z-10">
      <Triangle className="absolute top-8 right-4 md:right-20 border-b-[#53bc6e] md:border-x-[30px] md:border-b-[50px] border-x-[20px] border-b-[30px] -rotate-90" />
      <Circle className="absolute -top-10 right-1/4 bg-[#ffde5b] md:w-10 md:h-10 w-5 h-5" />
      <Rectangle className="absolute top-0 left-8 md:left-16 bg-[#53bc6e] md:w-10 md:h-10 w-5 h-5 rotate-45" />
      <Rectangle className="absolute bottom-0 left-16 bg-[#ffde5b] md:w-10 md:h-10 w-5 h-5 rotate-45" />
      <Circle className="absolute -bottom-1/4 -right-10 bg-gradient-ball md:w-60 md:h-60 w-40 h-40" />
    </div>
  );
};

export default BgPencapaian;
