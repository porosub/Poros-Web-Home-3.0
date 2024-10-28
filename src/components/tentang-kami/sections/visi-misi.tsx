import Image from "next/image";
import type { FC } from "react";

export const VisiMisi: FC = () => {
  return (
    <section className="relative mt-44 pb-20 w-full flex flex-col">
      <div className="relative flex flex-col gap-5 items-center justify-center">
        <div className="absolute hidden md:block aspect-[16/11] -z-10 md:w-[130%] lg:w-full min-h-[600px]">
          <Image
            src={"/svg/fragments/visi-sun.svg"}
            alt="tes"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="absolute block md:hidden aspect-square -z-10 sm:w-[150%] md:w-[140%] translate-y-32 md:translate-y-52 min-w-[900px]">
          <Image
            src={"/svg/fragments/visi-sun-mobile.svg"}
            alt="tes"
            fill={true}
            className="object-cover"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl">VISI</h2>

        <p className="w-2/3 md:w-1/2 text-center text-sm md:text-base">
          Mewujudkan POROS yang unggul, berkompeten, dan prestatif dalam
          mengembangkan serta menyebarluaskan pemanfaatan teknologi informasi
          berbasis Linux dan Open Source di lingkungan FILKOM UB.
        </p>
      </div>
      <div className="relative text-white flex flex-col justify-center items-center">
        <div className="relative h-32 w-full">
          <Image
            src={"/svg/fragments/visi-wave-top.svg"}
            alt="tes"
            fill={true}
            className="-z-10 object-cover translate-y-[1px]"
          />
        </div>
        <div className="bg-[#FF6464] flex flex-col w-full gap-5 justify-center items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl">MISI</h2>

          <ul className="list-decimal text-sm md:text-base w-2/3">
            <li>
              Menjalin kolaborasi dan komunikasi secara aktif dan transparan
              dengan organisasi atau komunitas, baik internal maupun eksternal
              lingkungan FILKOM UB.
            </li>
            <li>
              Menerapkan dan menjalankan program kerja yang adaptif terhadap
              perkembangan teknologi informasi secara bertanggung jawab dan
              komitmen
            </li>
            <li>
              Meningkatkan daya saing dan kualitas melalui kontribusi dan
              prestasi anggota POROS
            </li>
            <li>
              Mendorong partisipasi aktif anggota POROS dalam setiap program
              kerja yang ada
            </li>
          </ul>
        </div>
        <div className="relative h-28 sm:h-36 md:h-48 lg:h-64 xl:h-72 w-full">
          <Image
            src={"/svg/fragments/visi-wave-bottom.svg"}
            alt="tes"
            fill={true}
            className="-z-10 -translate-y-[1px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};
