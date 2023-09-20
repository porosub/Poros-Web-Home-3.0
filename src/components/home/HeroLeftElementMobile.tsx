import type { FC, SVGAttributes } from "react";

export const HeroLeftElementMobile: FC<SVGAttributes<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="196"
      height="409"
      viewBox="0 0 196 409"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M196 0C96.5 0 96.5 349.5 -1.13954 408.937L-63 195.846L-45.3256 0H196Z"
        fill="#54BD6E"
      />
      <path
        d="M-45 0H80C73.3712 127.308 30.137 102.442 -7.04735 73.558L-45 0Z"
        fill="#29AC4A"
      />
    </svg>
  );
};
