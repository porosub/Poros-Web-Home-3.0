import type { FC } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  deskripsi?: string;
}

export const Card: FC<CardProps> = (props) => {
  const { children, deskripsi, ...resprops } = props;
  return (
    <div {...resprops}>
      <div className="rounded-2xl bg-gray-200 p-[20px] flex items-center flex-col">
        {children ?? (
          <div className="w-full aspect-video md:aspect-square bg-gray-500 rounded-lg"></div>
        )}
        <p className="mt-5 self-start">
          {deskripsi ?? "lorem iplsu dolor sit amet"}
        </p>
      </div>
    </div>
  );
};
