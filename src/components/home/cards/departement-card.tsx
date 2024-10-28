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
    <Card deskripsi={description} {...resProps} className="text-base">
      <div className="w-full mt-1 aspect-video md:aspect-square flex flex-col gap-4 items-center justify-center rounded-lg relative">
        <h3 className="text-center h-fit w-full bg-primaryGreen py-2 px-4 rounded-full text-primaryGreenForeground font-semibold text-[20px] z-10">
          {name}
        </h3>
        <div className="relative w-4/5 aspect-square">
          <Image fill={true} src={image} alt={`${name} image`} />
        </div>
      </div>
    </Card>
  );
};

export default DepartmentCard;
