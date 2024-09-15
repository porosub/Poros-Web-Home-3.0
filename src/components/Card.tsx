import Image from "next/image";
import type { FC } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  deskripsi?: string;
  innerBox?: string;
  gambar?: string;
}

export const Card: FC<CardProps> = (props) => {
  const { gambar, children, deskripsi, innerBox = "p-5", ...resprops } = props;
  return (
    <div {...resprops}>
      <div
        className={`rounded-2xl h-full bg-gray-200 flex items-center flex-col ${innerBox}`}
      >
        {children ?? (
          <div className="w-full relative aspect-square">
            <Image
              src={gambar!}
              fill
              className="object-cover object-top aspect-square rounded-lg"
              alt="Card Image"
              unoptimized
            />
          </div>
        )}
        <p className="mt-5 text-center text-sm w-full self-start">
          {deskripsi ?? "lorem iplsu dolor sit amet"}
        </p>
      </div>
    </div>
  );
};
