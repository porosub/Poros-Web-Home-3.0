import Image from "next/image";
import type { FC } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  deskripsi?: string;
  gambar?: string;
  children?: React.ReactNode;
  innerBox?: string;
}

export const Card: FC<CardProps> = (props) => {
  const { gambar, children, deskripsi, innerBox = "p-5", ...resprops } = props;
  return (
    <div {...resprops}>
      <div
        className={`rounded-2xl h-full bg-gray-200 flex items-center flex-col ${innerBox}`}
      >
        {children ??
          (gambar != null && (
            <div className="w-full shrink-0 relative aspect-square">
              <Image
                src={gambar}
                fill={true}
                className="object-cover object-top aspect-square rounded-lg"
                alt="Card Image"
              />
            </div>
          ))}
        <p className="mt-5 w-full self-start">{deskripsi}</p>
      </div>
    </div>
  );
};
