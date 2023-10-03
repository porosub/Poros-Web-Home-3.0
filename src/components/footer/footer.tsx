import React from "react";

const Footer: React.FC = () => {
  const Instagram = () => {
    return (
      <img
        src="/instagram.svg"
        alt="Instagram"
        className="w-6 h-6 md:w-10 h-10 cursor-pointer"
      />
    );
  };

  const Twitter = () => {
    return (
      <img
        src="/twitter.svg"
        alt="Twitter"
        className="w-6 h-6 md:w-10 h-10 cursor-pointer ml-4"
      />
    );
  };

  const Youtube = () => {
    return (
      <img
        src="/youtube.svg"
        alt="YouTube"
        className="w-6 h-6 md:w-10 h-10 cursor-pointer ml-4"
      />
    );
  };

  return (
    <div className="w-full bg-[#212C4F] p-4 md:p-8">
      <div className="flex justify-between mx-10 mt-10 mb-12">
        <div className="flex flex-col w-1/3">
          <div className="text-[var(--Secondary,#FFD633)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-rubik text-[15px] md:text-[20px] font-medium">
            Temui Kami
          </div>
          <div className="mt-2 text-[#FAFAFA] font-rubik text-[10px] md:text-[16px] font-normal ">
            Gedung Kreativitas Mahasiswa Lt 2 Fakultas Ilmu Komputer Universitas
            Brawijaya Jalan Veteran Nomor 8, Lowokwaru, Malang, Jawa Timur 65145
            Email : porosub@gmail.com
          </div>
        </div>

        <div className="flex flex-col w-1/3 ml-20 sd:ml-10">
          <div className="text-[var(--Secondary,#FFD633)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-rubik text-[15px] md:text-[20px] font-medium">
            Kunjungi
          </div>
          <div className="mt-2 text-[var(--variasi,#FF6464)] font-rubik text-[10px] md:text-[16px]">
            Beranda &gt;
          </div>
          <div className="mt-2 text-[var(--variasi,#FF6464)] font-rubik text-[10px] md:text-[16px]">
            Blogs &gt;
          </div>
          <div className="mt-2 text-[var(--variasi,#FF6464)] font-rubik text-[10px] md:text-[16px]">
            Tentang Kami &gt;
          </div>
        </div>

        <div className="flex flex-col w-1/3 ml-4">
          <div className="text-[var(--Secondary,#FFD633)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-rubik text-[15px] md:text-[20px] font-medium ">
            Akses
          </div>
          <div className="w-[100px] mt-2 bg-[#FF6464] text-white font-rubik text-[10px] md:text-[16px] text-center p-1 px-3 rounded flex-shrink-1">
            Masuk
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white mx-auto my-4"></div>

      <div className="flex justify-between items-center px-4">
        <div className="text-[#FAFAFA] font-rubik text-[10px] md:text-[14px]">
          © 2023, POROS Filkom UB 2023
        </div>
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
