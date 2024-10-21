"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import CustomSwiper, { SwiperSlide } from "@/components/ui/swiper";
import { dataPencapaian } from "@/lib/static/data-pencapaian";
import Image from "next/image";
import type { FC } from "react";

const Pencapaian: FC = () => {
  return (
    <>
      <h2
        className="font-bold text-4xl md:text-5xl text-center px-5 md:px-20 text-textDarkBlue"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        Pencapaian
      </h2>

      {/* Custom Swiper */}
      <CustomSwiper containerClassName="lg:mx-32" navigationId="pencapaian">
        {dataPencapaian.map(
          ({ img, title, competitionName, competitionType, teamName }, i) => (
            <SwiperSlide
              key={i}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33%] px-[10px]"
            >
              <Card className="h-full pb-0">
                <div className="space-y-2 -mb-5 h-full w-full">
                  <div className="w-full shrink-0 relative aspect-square">
                    <Image
                      src={img}
                      fill={true}
                      className="object-cover object-top aspect-square rounded-lg"
                      alt="Card Image"
                    />
                  </div>
                  <div className="text-center flex flex-col gap-4 items-center justify-between aspect-video">
                    <div className="flex flex-col items-center">
                      <div className="font-semibold text-lg flex items-center gap-1">
                        <h3>{title}</h3>
                      </div>
                      <p>{competitionName}</p>
                      <p className="text-sm">{competitionType}</p>
                    </div>
                    <Badge className="text-sm">{teamName}</Badge>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ),
        )}
      </CustomSwiper>
    </>
  );
};

export default Pencapaian;
