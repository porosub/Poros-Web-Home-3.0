import React from "react";
import type { FC } from "react";
import Carousel from "../Carousel";
import { Card } from "../Card";
import { dataPencapaian } from "./data-pencapaian";

const Pencapaian: FC = () => {
  return (
    <>
      <h2
        className="font-bold text-5xl text-center px-5 md:px-20 text-textDarkBlue"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        Pencapaian
      </h2>
      <Carousel
        options={{ dragFree: false, align: "start" }}
        containerClassName="lg:mx-32"
      >
        {dataPencapaian.map((pencapaian, i) => (
          <Card
            key={i}
            deskripsi={pencapaian.deskripsi}
            gambar={pencapaian.gambar}
            className="sm:flex-[0_0_33%] flex-[0_0_100%] pl-[20px]"
          />
        ))}
      </Carousel>
    </>
  );
};

export default Pencapaian;
