import type { FC } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  deskripsi?: string;
  innerBox?: string;
}

export const Card: FC<CardProps> = (props) => {
  const { children, deskripsi, innerBox = "p-5", ...resprops } = props;
  return (
    <div {...resprops}>
      <div
        className={`rounded-2xl h-full bg-gray-200 flex items-center flex-col ${innerBox}`}
      >
        {children ?? (
          <div className="w-full aspect-video md:aspect-square bg-gray-500 rounded-lg"></div>
        )}
        <p className="mt-5 text-center text-sm w-full self-start">
          {deskripsi ?? "lorem iplsu dolor sit amet"}
        </p>
      </div>
    </div>
  );
};
