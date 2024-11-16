import { FilosofiLogo } from "@/components/tentang-kami/sections/filosofi-logo";
import { Hero } from "@/components/tentang-kami/sections/hero";
import { VisiMisi } from "@/components/tentang-kami/sections/visi-misi";
import { DaftarAnggota } from "@/components/tentang-kami/sections/daftar-anggota";
import type { FC } from "react";

const TentangKami: FC = () => {
  return (
    <main className="min-w-[350px] overflow-hidden flex flex-col gap-24">
      <Hero />
      <VisiMisi />
      <FilosofiLogo />
      <DaftarAnggota />
    </main>
  );
};

export default TentangKami;
