import TentangKamiStrukturBPI from "@/components/tentang-kami-perkenalan-departemen/BPI/tentang-kami-struktur-bpi";
import type React from "react";

const Home: React.FC = () => {
  return (
    <main className="overflow-hidden flex flex-col gap-16">
      <section>
        <TentangKamiStrukturBPI />
      </section>
    </main>
  );
};

export default Home;
