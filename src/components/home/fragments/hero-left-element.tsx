import type { FC, SVGAttributes } from "react";

export const HeroLeftElement: FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="371"
      height="489"
      viewBox="0 0 371 489"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M371 -9C203 47 256.5 446.5 -35 489L-231 229.5L-175 -9H371Z"
        fill="#54BD6E"
      />
      <path
        d="M-175 -9H184C164.962 196.956 40.7934 156.728 -66 110L-175 -9Z"
        fill="#29AC4A"
      />
    </svg>
  );
};
