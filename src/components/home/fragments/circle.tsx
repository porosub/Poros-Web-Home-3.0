import { cn } from "@/lib/utils";
import type React from "react";
import type { FC } from "react";

interface CircleProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Circle: FC<CircleProps> = ({ className, ...props }) => {
  return <span className={cn(className, "rounded-full -z-10")} {...props} />;
};

export default Circle;
