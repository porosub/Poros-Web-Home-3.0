import type { FC } from "react";
import Carousel from "../Carousel";
import { Card } from "../Card";

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
        <Card className="flex-[0_0_100%] pl-[20px]" innerBox="p-7">
          <div className="relative w-full aspect-video bg-gray-500 rounded-md"></div>
        </Card>
        <Card className="flex-[0_0_100%] pl-[20px]" innerBox="p-7">
          <div className="relative w-full aspect-video bg-gray-500 rounded-md"></div>
        </Card>
        <Card className="flex-[0_0_100%] pl-[20px]" innerBox="p-7">
          <div className="relative w-full aspect-video bg-gray-500 rounded-md"></div>
        </Card>
        <Card className="flex-[0_0_100%] pl-[20px]" innerBox="p-7">
          <div className="relative w-full aspect-video bg-gray-500 rounded-md"></div>
        </Card>
        <Card className="flex-[0_0_100%] pl-[20px]" innerBox="p-7">
          <div className="relative w-full aspect-video bg-gray-500 rounded-md"></div>
        </Card>
      </Carousel>
    </>
  );
};

export default ProgramKerja;
