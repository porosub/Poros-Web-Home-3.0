import TentangKamiStrukturBPH from "@/components/tentang-kami-perkenalan-departemen/BPH/tentang-kami-struktur-bph";
import type React from "react";

const Home: React.FC = () => {
  return (
    <main className="overflow-hidden flex flex-col gap-16">
      <section className="mt-12">
        <TentangKamiStrukturBPH />
      </section>
    </main>
  );
};

export default Home;
