import TentangKami from "@/components/tentang-kami/tentang-kami";
import PerkenalanDepartemen from "@/components/perkenalan-departemen/perkenalan-departemen";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center px-4 py-6">
      <PerkenalanDepartemen />
      <TentangKami />
    </main>
  );
}
