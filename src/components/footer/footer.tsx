import Image from "next/image";
import type React from "react";
import { Button } from "../ui/button";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-[#212C4F] p-4 md:p-8">
      <div className="grid sm:grid-cols-3 grid-row-3 sm:items-start sm:justify-items-center gap-6 mx-10 mt-10 mb-12">
        <div className="flex flex-col">
          <div className="text-[var(--Secondary,#FFD633)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-rubik text-[15px] md:text-[20px] font-medium">
            Temui Kami
          </div>
          <div className="mt-2 text-[#FAFAFA] font-rubik text-[10px] md:text-[16px] font-normal ">
            Gedung Kreativitas Mahasiswa Lt 2 Fakultas Ilmu Komputer Universitas
            Brawijaya Jalan Veteran Nomor 8, Lowokwaru, Malang, Jawa Timur 65145
            Email : porosub@gmail.com
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-[var(--Secondary,#FFD633)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-rubik text-[15px] md:text-[20px] font-medium">
            Kunjungi
          </div>
          <Button
            variant="link"
            about="to home page"
            className="mt-2 w-fit p-0 text-[var(--variasi,#FF6464)] font-rubik text-[10px] md:text-[16px]"
          >
            Beranda &gt;
          </Button>
          <Button
            variant="link"
            about="to blogs page"
            className="mt-2 w-fit p-0 text-[var(--variasi,#FF6464)] font-rubik text-[10px] md:text-[16px]"
          >
            Blogs &gt;
          </Button>
          <Button
            variant="link"
            about="to about us page"
            className="mt-2 w-fit p-0 text-[var(--variasi,#FF6464)] font-rubik text-[10px] md:text-[16px]"
          >
            Tentang Kami &gt;
          </Button>
        </div>

        <div className="flex flex-col">
          <div className="text-[var(--Secondary,#FFD633)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-rubik text-[15px] md:text-[20px] font-medium ">
            Akses
          </div>
          <Button about="login" className="bg-accentRed mt-2 rounded-full w-24">
            Masuk
          </Button>
        </div>
      </div>

      <div className="w-full border-t border-white mx-auto my-4"></div>

      <div className="flex justify-between items-center px-4">
        <div className="text-[#FAFAFA] font-rubik text-[10px] md:text-[14px]">
          © {year}, POROS Filkom UB {year}
        </div>
        <div className="grid grid-cols-3 w-32 gap-4">
          <Image
            width={10}
            height={10}
            src="/instagram.svg"
            alt="Instagram"
            className="w-full cursor-pointer"
          />
          <Image
            width={10}
            height={10}
            src="/twitter.svg"
            alt="Twitter"
            className="w-full cursor-pointer"
          />
          <Image
            width={10}
            height={10}
            src="/youtube.svg"
            alt="YouTube"
            className="w-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
