import React from "react";
import type { FC } from "react";
import Image from "next/image";

interface DepartmentProps {
  gambar: string;
  nama: string;
}

const Department: FC<DepartmentProps> = (props) => {
  const { gambar, nama } = props;
  return (
    <div className="bg-secondaryYellow w-full mt-4 aspect-video md:aspect-square flex justify-center rounded-lg relative">
      <h3 className="-translate-y-1/2 h-fit bg-primaryGreen p-2 rounded-full text-primaryGreenForeground font-semibold text-[14px] z-10">
        {nama}
      </h3>
      <Image
        fill={true}
        src={gambar}
        alt={`${nama} image`}
        className="absolute inset-0 object-contain p-6"
      />
    </div>
  );
};

export default Department;
