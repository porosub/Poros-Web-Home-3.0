import Image from "next/image";
import type { FC } from "react";

const TentangKami: FC = () => {
  return (
    <main className="min-w-[350px] overflow-hidden flex flex-col gap-52">
      <section className="relative aspect-[3/5] sm:aspect-[3/4] md:aspect-[3/3] lg:aspect-[16/11] w-full px-5 md:px-10 pt-10">
        <Image
          src={"/bg-pengenalan-poros.svg"}
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
            POROS Organization of Open Source merupakan sebuah lembaga semi
            otonom yang mewadahi pengguna GNU/Linux serta perangkat lunak sumber
            terbuka, bebas dan legal yang bertempat di Fakultas Ilmu Komputer
            Universitas Brawijaya
          </p>
        </div>
      </section>
      <section className="relative mt-44 pb-20 w-full flex flex-col">
        <div className="relative flex flex-col gap-5 items-center justify-center">
          <div className="absolute hidden md:block aspect-[16/11] -z-10 md:w-[130%] lg:w-full min-h-[600px]">
            <Image
              src={"/visi-sun.svg"}
              alt="tes"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="absolute block md:hidden aspect-square -z-10 sm:w-[150%] md:w-[140%] translate-y-32 md:translate-y-52 min-w-[900px]">
            <Image
              src={"/visi-sun-mobile.svg"}
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
              src={"/visi-wave-top.svg"}
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
              src={"/visi-wave-bottom.svg"}
              alt="tes"
              fill={true}
              className="-z-10 -translate-y-[1px] object-cover object-top"
            />
          </div>
        </div>
      </section>
      <section className="w-full relative h-fit flex pb-10 flex-col gap-28 items-center">
        <div className="absolute w-40 md:w-80 -left-20 md:-left-40 -top-20 -z-10 aspect-square">
          <Image
            src={"/logo-bg-circle.svg"}
            alt="tes"
            fill={true}
            className="object-top"
          />
        </div>
        <div className="absolute w-40 md:w-80 -right-20 md:-right-40 -bottom-32 -z-10 aspect-square">
          <Image
            src={"/logo-bg-circle.svg"}
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
              src={"/logo-circle-gradient.svg"}
              alt="tes"
              fill={true}
              className="object-top"
            />
          </div>
          <div className="w-20 basis-1/3 md:w-52 aspect-square h-fit relative">
            <Image
              src={"/logo-poros.svg"}
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
                    src={"/logo-poros-2.svg"}
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
    </main>
  );
};

export default TentangKami;
