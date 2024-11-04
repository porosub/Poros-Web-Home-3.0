import Image from "next/image";
import type { FC } from "react";

interface CardBlogProps extends React.HTMLAttributes<HTMLDivElement> {
  deskripsi?: string;
  gambar?: string;
  judul?: string;
  penulis?: string;
  tanggal?: string;
}

// Component Card
export const Card: FC<CardBlogProps> = ({
  gambar,
  deskripsi,
  judul,
  penulis,
  tanggal,
  className,
  ...resprops
}) => {
  return (
    <div
      {...resprops}
      className={`rounded-xl shadow-lg shadow-gray-400/60 overflow-hidden flex flex-col ${className}`}
    >
      {gambar != null && (
        <div className="relative w-full h-48 rounded-xl overflow-hidden">
          <Image
            src={gambar}
            alt="Card Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[12px] text-gray-500">
          by {penulis} | {tanggal}
        </p>
        <h3 className="text-base font-semibold mb-2">{judul}</h3>
        <p className="text-[14px] text-gray-700 overflow-hidden line-clamp-2">
          {deskripsi}
        </p>
      </div>
    </div>
  );
};
