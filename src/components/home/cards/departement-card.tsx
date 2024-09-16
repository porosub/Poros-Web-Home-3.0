import type { FC } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface DepartmenCardtProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  name: string;
  description: string;
}

const DepartmentCard: FC<DepartmenCardtProps> = ({
  image,
  name,
  description,
  ...resProps
}) => {
  return (
    <Card deskripsi={description} {...resProps}>
      <div className="w-full mt-4 aspect-video md:aspect-square flex justify-center rounded-lg relative">
        <h3 className="-translate-y-1/2 h-fit bg-primaryGreen p-2 rounded-full text-primaryGreenForeground font-semibold text-[20px] z-10">
          {name}
        </h3>
        <Image
          fill={true}
          src={image}
          alt={`${name} image`}
          className="absolute inset-0 object-contain p-4 mt-6"
        />
      </div>
    </Card>
  );
};

export default DepartmentCard;
