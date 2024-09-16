import Image from "next/image";
import type { FC } from "react";

export const Hero: FC = () => {
  return (
    <section className="relative aspect-[3/5] sm:aspect-[3/4] md:aspect-[3/3] lg:aspect-[16/11] w-full px-5 md:px-10 pt-10">
      <Image
        src={"/svg/fragments/bg-pengenalan-poros.svg"}
        alt="Bg Pengenalan POROS"
        fill={true}
        className="object-cover object-top -z-10"
      />
      <div className="mt-10 md:mt-20">
        <h1 className="text-5xl md:text-6xl lg:text-8xl flex flex-col gap-7 font-semibold">
          <span className="text-textDarkBlue bg-secondaryYellow w-fit px-5 py-2 shadow-lg">
            POROS
          </span>
          <span className="text-secondaryYellow bg-textDarkBlue w-fit px-5 py-2 shadow-lg">
            itu apa sih?
          </span>
        </h1>

        <p className="text-backgroundWhite sm:w-2/3 md:w-1/2 mt-10">
          POROS Organization of Open Source merupakan sebuah lembaga semi otonom
          yang mewadahi pengguna GNU/Linux serta perangkat lunak sumber terbuka,
          bebas dan legal yang bertempat di Fakultas Ilmu Komputer Universitas
          Brawijaya
        </p>
      </div>
    </section>
  );
};
