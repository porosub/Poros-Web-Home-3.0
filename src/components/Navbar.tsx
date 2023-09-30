"use client";

import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import Link from "next/link";
import { MenuIcon } from "./MenuIcon";
import POROSLogo from "../../public/logo-poros.svg";
import Image from "next/image";

const Navbar: React.FC = () => {
  const changeNav = useNavbarScroll();

  return (
    <nav
      className={`fixed w-full flex py-5 z-30 px-5 md:px-10 bg-white justify-between items-center transition-all duration-150 ${
        changeNav ? "bg-opacity-60" : "bg-opacity-0"
      className={`fixed w-full flex py-5 z-30 px-5 md:px-10 bg-white justify-between items-center transition-all duration-150 ${
        changeNav ? "bg-opacity-60" : "bg-opacity-0"
      }`}
    >
      <Link href={"/"} className="relative h-12 w-12">
        <Image src={POROSLogo} alt="logo poros" fill={true} />
      </Link>

      <button type="button" className="block md:hidden">
        <MenuIcon className="h-10 w-10" />
      </button>

      <ul className="hidden gap-5 items-center font-medium md:flex">
        <li>
          <Link href={"/beranda"}>Beranda</Link>
        </li>
        <li>
          <Link href={"/blogs"}>Blogs</Link>
        </li>
        <li>
          <Link href={"/tentang-kami"}>Tentang Kami</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
