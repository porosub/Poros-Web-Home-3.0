import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { Button } from "../ui/button";
import { InstagramIcon } from "./icons/instagram-icon";
import { YoutubeIcon } from "./icons/youtube-icon";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-[#212C4F] p-4 md:p-8">
      <div className="grid sm:grid-cols-3 grid-row-3 sm:items-start sm:justify-items-center gap-6 mx-4 mt-10 mb-12">
        <div className="flex flex-col">
          <div className="text-[var(--Secondary,#FFD633)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-rubik text-[15px] md:text-[20px] font-medium">
            Temui Kami
          </div>
          <div className="mt-2 text-[#FAFAFA] font-rubik text-[10px] md:text-[16px] font-normal space-y-2">
            <p>
              Gedung Kreativitas Mahasiswa Lt 2 Fakultas Ilmu Komputer
              Universitas Brawijaya Jalan Veteran Nomor 8, Lowokwaru, Malang,
              Jawa Timur 65145
            </p>
            <p>
              Email :{" "}
              <a href="mailto:porosub@gmail.com" className="hover:underline">
                porosub@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-[var(--Secondary,#FFD633)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-rubik text-[15px] md:text-[20px] font-medium">
            Kunjungi
          </h3>
          <Link
            href="/"
            about="to home page"
            className="w-fit font-medium hover:underline text-[var(--variasi,#FF6464)] font-rubik text-[10px] md:text-base"
          >
            Beranda &gt;
          </Link>
          <Link
            href="/blog"
            about="to blogs page"
            className="w-fit font-medium hover:underline text-[var(--variasi,#FF6464)] font-rubik text-[10px] md:text-base"
          >
            Blogs &gt;
          </Link>
          <Link
            href="/tentang-kami"
            about="to about us page"
            className="w-fit font-medium hover:underline text-[var(--variasi,#FF6464)] font-rubik text-[10px] md:text-base"
          >
            Tentang Kami &gt;
          </Link>
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
          <Link
            href="https://www.instagram.com/porosfilkom/"
            target="_blank"
            className="bg-white hover:bg-gray-300 transition-colors duration-150 w-[34px] overflow-hidden aspect-square flex items-center justify-center rounded-full"
          >
            <InstagramIcon className="w-5 aspect-square text-darkBlue" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC3Mh33VM0dwLlXiH_00qOJw"
            target="_blank"
            className="bg-white hover:bg-gray-300 transition-colors duration-150 w-[34px] overflow-hidden aspect-square flex items-center justify-center rounded-full"
          >
            <YoutubeIcon className="w-5 aspect-square text-darkBlue" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/porosfilkomub"
            target="_blank"
            className="bg-white hover:bg-gray-300 transition-colors duration-150 w-[34px] overflow-hidden aspect-square flex items-center justify-center rounded-full"
          >
            <LinkedinIcon className="w-5 aspect-square text-darkBlue fill-darkBlue" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
