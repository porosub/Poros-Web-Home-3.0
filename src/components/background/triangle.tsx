import { cn } from "@/lib/utils";
import type React from "react";
import type { FC } from "react";

interface TriangleProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Triangle: FC<TriangleProps> = ({ className, ...props }) => {
  return (
    <span
      className={cn(className, "border-solid border-x-transparent -z-10")}
      {...props}
    />
  );
};

export default Triangle;
