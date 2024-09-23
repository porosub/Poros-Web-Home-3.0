import type { FC } from "react";
import Image from "next/image";
import BgLogin from "@/public/svg/fragments/bg-auth.svg";

const BgAuth: FC = () => {
  return (
    <div className="fixed w-screen h-screen -z-10">
      <Image
        src={BgLogin}
        alt="bg auth"
        className="object-cover bg-repeat h-screen"
        fill={true}
      />
    </div>
  );
};

export default BgAuth;
