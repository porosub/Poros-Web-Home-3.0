"use client";

import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import Link from "next/link";
import { MenuIcon } from "./icons/MenuIcon";
import POROSLogo from "../../public/logo-poros.svg";
import Image from "next/image";
import { useState } from "react";

const Navbar: React.FC = () => {
  const changeNav = useNavbarScroll();
  const [activePage, setActivePage] = useState(0);

  return (
    <nav
      className={`fixed w-full flex py-3 z-30 px-5 md:px-10 bg-white justify-between items-center transition-all duration-150 ${
        changeNav ? "bg-opacity-60" : "bg-opacity-0"
      }`}
    >
      <Link
        onClick={() => {
          setActivePage(0);
        }}
        href={"/"}
        className="relative h-12 w-12"
      >
        <Image
          src={POROSLogo}
          alt="logo poros"
          fill={true}
          className={`${changeNav ? "opacity-1" : "opacity-0"} duration-150`}
        />
      </Link>

      <button
        type="button"
        title="show menu"
        aria-label="show menu"
        className="block md:hidden"
      >
        <MenuIcon className="h-10 w-10" />
      </button>

      <ul className="hidden font-medium md:grid grid-cols-3 gap-y-2 grid-rows-[1fr,5px] justify-items-center">
        <li>
          <Link
            onClick={() => {
              setActivePage(0);
            }}
            href={""}
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setActivePage(1);
            }}
            href={""}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setActivePage(2);
            }}
            href={""}
          >
            Tentang Kami
          </Link>
        </li>
        <div
          className="w-full h-full duration-200"
          style={{ transform: `translateX(${100 * activePage}%)` }}
        >
          <span className="bg-textDarkBlue block mx-auto h-full w-[80%] rounded-lg" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
