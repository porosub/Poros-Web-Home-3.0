import React from "react";
import { Badge } from "@/components/ui/badge";

const Footer: React.FC = () => {
  const Instagram = () => {
    return (
      <img
        src="/instagram.svg"
        alt="Instagram"
        className="w-6 h-6 cursor-pointer"
      />
    );
  };

  const Twitter = () => {
    return (
      <img
        src="/twitter.svg"
        alt="Twitter"
        className="w-6 h-6 cursor-pointer ml-4"
      />
    );
  };

  const Youtube = () => {
    return (
      <img
        src="/youtube.svg"
        alt="YouTube"
        className="w-6 h-6 cursor-pointer ml-4"
      />
    );
  };

  return (
    <div className="w-[390px] h-[190px] bg-[#212C4F] dark:bg-[var(--Dark)]">
      <div className="inline-flex items-start mx-7 mt-7 mb-12 bg-invisible justify-between">
        {/* box 1 */}
        <div className="w-[162px] h-[77px] flex flex-col text-left">
          <div className="text-[var(--Secondary,#FFD633)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-rubik text-[15px] font-medium tracking-tight">
            Temui Kami
          </div>
          <div className="mt-2 text-[#FAFAFA] font-rubik text-[7px] font-normal leading-[12px] tracking-tight">
            Gedung Kreativitas Mahasiswa Lt 2 Fakultas Ilmu Komputer Universitas
            Brawijaya Jalan Veteran Nomor 8, Lowokwaru, Malang, Jawa Timur 65145
            Email : porosub@gmail.com
          </div>
        </div>

        {/* box 2 */}
        <div className="ml-[25px] flex flex-col text-left">
          <div className="text-[var(--Secondary,#FFD633)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-rubik text-[15px] font-medium leading-[22px] tracking-tight">
            Kunjungi
          </div>
          <div className="mt-2 text-[var(--variasi,#FF6464)] font-rubik text-[7px] font-normal leading-[10px] tracking-tight">
            Beranda &gt;
          </div>
          <div className="mt-2 text-[var(--variasi,#FF6464)] font-rubik text-[7px] font-normal leading-[10px] tracking-tight">
            Blogs &gt;
          </div>
          <div className="mt-2 text-[var(--variasi,#FF6464)] font-rubik text-[7px] font-normal leading-[10px] tracking-tight">
            Tentang Kami &gt;
          </div>
        </div>

        {/* box 3 */}
        <div className="ml-[25px] flex flex-col text-left">
          <div className="text-[var(--Secondary,#FFD633)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-rubik text-[15px] font-medium leading-[22px] tracking-tight">
            Akses
          </div>
          <Badge className="mt-2 bg-[#29AC4A] text-white font-rubik text-[7px] font-normal leading-[15px] tracking-tight text-center">
            Masuk
          </Badge>
        </div>
      </div>

      {/* garis pemisah */}
      <div className="w-[367px] h-[1px] bg-white mx-auto mb-30"></div>

      {/* box 4 */}
      <div className="mt-2 mimimi ml-3 mr-3 mb-15 text-[#FAFAFA] font-rubik text-[7px] font-medium text-left flex justify-between items-center">
        <div>© 2023, POROS Filkom UB 2023</div>
        <div className="flex">
          <Instagram />
          <Twitter />
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
