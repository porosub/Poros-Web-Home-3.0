import type { FC, HTMLAttributes } from "react";

export const Card: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      <div className="w-full aspect-video md:aspect-square bg-gray-500 rounded-lg"></div>
      <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad
        labore commodi modi debitis iure culpa error excepturi nemo? Natus.
      </p>
    </div>
  );
};
