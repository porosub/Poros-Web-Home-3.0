import type React from "react";
import TentangKamiStrukturAnggota from "@/components/tentang-kami-perkenalan-departemen/Anggota/tentang-kami-struktur-anggota";

const Home: React.FC = () => {
  return (
    <main className="overflow-hidden flex flex-col gap-16">
      <section className="mt-12">
        <TentangKamiStrukturAnggota />
      </section>
    </main>
  );
};

export default Home;
