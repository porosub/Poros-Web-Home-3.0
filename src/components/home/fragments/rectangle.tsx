import { cn } from "@/lib/utils";
import type React from "react";
import type { FC } from "react";

interface RectangleProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Rectangle: FC<RectangleProps> = ({ className, ...props }) => {
  return <span className={cn(className, "-z-10")} {...props} />;
};

export default Rectangle;
