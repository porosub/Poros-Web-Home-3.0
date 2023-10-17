import React from "react";
import type { FC } from "react";
import Image from "next/image";

const BgPengenalanPoros: FC = () => {
  return (
    <>
      <div className="absolute w-full -z-10 h-screen">
        <Image
          src={"/bg-pengenalan-poros.svg"}
          alt="tes"
          fill={true}
          className="object-cover"
        />
      </div>
    </>
  );
};

export default BgPengenalanPoros;
