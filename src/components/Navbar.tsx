"use client";

import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import Link from "next/link";
import { MenuIcon } from "./MenuIcon";
import POROSLogo from "./POROSLogo";

const Navbar: React.FC = () => {
  const changeNav = useNavbarScroll();

  return (
    <nav
      className={`fixed w-full flex py-5 px-10 bg-white justify-between items-center transition-all duration-150 ${
        changeNav ? "bg-opacity-40" : "bg-opacity-0"
      }`}
    >
      <Link href={"/"}>
        <POROSLogo className="w-12 h-12" />
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
        <li>
          <button
            type="button"
            className="bg-[#FF6464] text-white rounded-full py-1 px-3"
          >
            Masuk
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
