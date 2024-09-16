import type { FC, SVGAttributes } from "react";

export const LeftArrowIcon: FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};
