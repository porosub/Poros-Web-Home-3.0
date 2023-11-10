import { cn } from "@/lib/utils";
import React from "react";

interface DepartmentProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  nama: string;
  jabatan: string;
}

const Struktur: React.FC<DepartmentProps> = ({ nama, jabatan, className }) => {
  return (
    <div
      className={cn(
        "bg-[#212C4F] rounded-[20px] mt-4 flex flex-col items-center justify-center p-3 w-full min-h-full",
        className,
      )}
    >
      <span
        className="font-rubik font-medium lg:text-2xl text-[20px] text-[#FFD633] mb-1 lg:mb-2"
        style={{ lineHeight: "3vh", textAlign: "center" }}
      >
        {nama}
      </span>
      <span
        className="font-rubik text-[15px] lg:text-lg xl:text-xl text-white"
        style={{ lineHeight: "3vh", textAlign: "center" }}
      >
        {jabatan}
      </span>
    </div>
  );
};

export default Struktur;
