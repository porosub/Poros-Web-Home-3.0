import type { FC } from "react";
import Carousel from "../Carousel";
import { Card } from "../Card";
import { programKerja } from "./data-program-kerja";
import Image from "next/image";

const ProgramKerja: FC = () => {
  return (
    <>
      <h2 className="font-bold text-white text-5xl text-center px-5 md:px-20">
        Program Kerja
      </h2>
      <Carousel
        options={{ dragFree: false, align: "start" }}
        containerClassName="lg:px-56"
      >
        {programKerja.map(({ description, imagePath }, index) => {
          return (
            <Card
              key={index}
              className="flex-[0_0_100%] pl-[20px]"
              innerBox="p-7"
              deskripsi={description}
            >
              <div className="relative w-full h-56 overflow-hidden bg-gray-500 rounded-md">
                <Image
                  src={imagePath}
                  alt="Pic"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </Card>
          );
        })}
      </Carousel>
    </>
  );
};

export default ProgramKerja;
