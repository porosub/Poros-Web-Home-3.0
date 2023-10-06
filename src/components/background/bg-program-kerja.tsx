import React from "react";
import type { FC } from "react";
import Image from "next/image";

const BgProgramKerja: FC = () => {
  return (
    <>
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
    </>
  );
};

export default BgProgramKerja;
