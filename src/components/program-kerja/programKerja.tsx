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
        containerClassName="lg:px-44"
        className="flex gap-5 ml-0"
      >
        <Card className="w-full shrink-0 rounded-2xl bg-gray-200 p-5">
          <div className="relative w-full aspect-video bg-gray-500 rounded-md"></div>
        </Card>
        <Card className="w-full shrink-0 rounded-2xl bg-gray-200 p-5">
          <div className="relative w-full aspect-video bg-gray-500 rounded-md"></div>
        </Card>
        <Card className="w-full shrink-0 rounded-2xl bg-gray-200 p-5">
          <div className="relative w-full aspect-video bg-gray-500 rounded-md"></div>
        </Card>
        <Card className="w-full shrink-0 rounded-2xl bg-gray-200 p-5">
          <div className="relative w-full aspect-video bg-gray-500 rounded-md"></div>
        </Card>
        <Card className="w-full shrink-0 rounded-2xl bg-gray-200 p-5">
          <div className="relative w-full aspect-video bg-gray-500 rounded-md"></div>
        </Card>
      </Carousel>
    </>
  );
};

export default ProgramKerja;
