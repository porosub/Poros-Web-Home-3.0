import Image from "next/image";
import type { FC } from "react";

interface CardAnggotaProps extends React.HTMLAttributes<HTMLDivElement> {
  nama: string;
  jabatan: string;
  foto?: string;
}

export const CardAnggota: FC<CardAnggotaProps> = ({
  nama,
  jabatan,
  foto,
  className,
  ...rest
}) => {
  return (
    <div
      className={`rounded-3xl shadow-lg bg-gray-100 flex flex-col items-center p-8 gap-8 ${className}`}
      {...rest}
    >
      <div className="bg-yellow-400 w-full h-[250px] rounded-3xl flex items-center justify-center relative overflow-hidden">
        {foto != null && foto !== "" ? (
          <Image
            src={foto}
            alt={`${nama} Image`}
            className="rounded-lg object-cover"
            fill
          />
        ) : (
          <div className="bg-yellow-400 w-full h-full rounded-3xl"></div>
        )}
      </div>
      <div className="w-full px-4 lg:px-8">
        <div className="w-full text-center text-white bg-[#1E2A5E] rounded-3xl p-2">
          <p className="text-yellow-400 font-semibold">{nama}</p>
          <p className="text-sm">{jabatan}</p>
        </div>
      </div>
    </div>
  );
};
