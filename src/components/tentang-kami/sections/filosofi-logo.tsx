import Image from "next/image";
import type { FC } from "react";

export const FilosofiLogo: FC = () => {
  return (
    <section className="w-full relative h-fit flex pb-24 flex-col gap-28 items-center">
      <div className="absolute w-40 md:w-80 -left-20 md:-left-40 -top-20 -z-10 aspect-square">
        <Image
          src={"/svg/fragments/logo-bg-circle.svg"}
          alt="tes"
          fill={true}
          className="object-top"
        />
      </div>
      <div className="absolute w-40 md:w-80 -right-20 md:-right-40 -bottom-32 -z-10 aspect-square">
        <Image
          src={"/svg/fragments/logo-bg-circle.svg"}
          alt="tes"
          fill={true}
          className="object-top"
        />
      </div>
      <h2
        className="flex gap-4 pz-5 text-shadow text-4xl sm:text-7xl md:text-8xl"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        <span className="p-4 shadow-xl bg-muted text-primaryGreen font-semibold -tracking-wide">
          Filosofi
        </span>
        <span className="p-4 bg-primaryGreen shadow-xl text-muted font-semibold -tracking-wide">
          Logo
        </span>
      </h2>
      <div className="flex relative px-5 items-center justify-center gap-5 md:gap-10">
        <div className="absolute w-[50rem] md:w-[75rem] -top-[200%] -z-20 aspect-square">
          <Image
            src={"/svg/fragments/logo-circle-gradient.svg"}
            alt="tes"
            fill={true}
            className="object-top"
          />
        </div>
        <div className="w-20 basis-1/3 md:w-52 aspect-square h-fit relative">
          <Image
            src={"/svg/logo/poros.svg"}
            alt="tes"
            fill={true}
            className="object-top"
          />
        </div>
        <div className="flex md:w-1/2 text-xs md:text-sm flex-col gap-3  md:gap-10 font-medium">
          <div className="flex bg-muted gap-5 items-center justify-center py-4 px-5 shadow-xl rounded-2xl">
            <div className="basis-1/6">
              <div className="relative w-full aspect-square">
                <Image
                  src={"svg/logo/poros-plain.svg"}
                  alt="tes"
                  fill={true}
                  className="object-top"
                />
              </div>
            </div>
            <p className="basis-5/6">
              Kupu-kupu melambangkan semangat bermetamorfosis
            </p>
          </div>
          <div className="flex bg-muted gap-5 items-center justify-center py-4 px-5 shadow-xl rounded-2xl">
            <div className="basis-1/6 flex justify-center">
              <div className="relative w-full aspect-square bg-primaryGreen rounded-full"></div>
            </div>
            <p className="basis-5/6">Hijau melambangkan kebebasan</p>
          </div>
        </div>
      </div>
    </section>
  );
};
