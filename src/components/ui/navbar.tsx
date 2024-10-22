"use client";

import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import POROSLogo from "@/public/svg/logo/poros-flat.svg";
import { type Variants, motion } from "framer-motion";
import { HomeIcon, InfoIcon, LaptopIcon, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const changeNav = useNavbarScroll();
  const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();
  const initialActivePage =
    pathname === "/"
      ? 0
      : pathname === "/blog"
        ? 1
        : pathname === "/tentang-kami"
          ? 2
          : 0;
  const [activePage, setActivePage] = useState(initialActivePage);

  const sidebarVariants: Variants = {
    hidden: {
      x: "100%",
      transition: { type: "tween", duration: 0.2 },
    },
    visible: {
      x: 0,
      transition: { type: "tween", duration: 0.2 },
    },
  };

  useEffect(() => {
    if (pathname === "/") setActivePage(0);
    else if (pathname === "/blog") setActivePage(1);
    else if (pathname === "/tentang-kami") setActivePage(2);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed w-full flex py-3 z-30 px-5 md:px-10 bg-white justify-between items-center transition-all duration-150 ${
          changeNav ? "bg-opacity-60" : "bg-opacity-0"
        } ${changeNav || activePage === 2 ? "text-black" : "text-white"}`}
      >
        <Link
          onClick={() => {
            setActivePage(0);
          }}
          href={"/"}
          className="relative w-12 h-12"
        >
          <Image src={POROSLogo} alt="logo poros" fill={true} />
        </Link>

        <button
          type="button"
          title="show menu"
          aria-label="show menu"
          className="block md:hidden"
          onClick={() => {
            setShowSidebar((prev) => !prev);
          }}
        >
          <MenuIcon className="h-10 w-10" />
        </button>

        <ul className="hidden font-medium md:grid grid-cols-3 gap-y-2 grid-rows-[1fr,5px] justify-items-center">
          <li>
            <Link
              onClick={() => {
                setActivePage(0);
              }}
              href={"/"}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setActivePage(1);
              }}
              href={"/blog"}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setActivePage(2);
              }}
              href={"/tentang-kami"}
            >
              Tentang Kami
            </Link>
          </li>
          <div
            className="w-full h-full duration-200"
            style={{ transform: `translateX(${100 * activePage}%)` }}
          >
            <span className="bg-primaryGreen block mx-auto h-full w-[80%] rounded-lg" />
          </div>
        </ul>
      </nav>
      <motion.div
        initial="hidden"
        animate={showSidebar ? "visible" : "hidden"}
        variants={sidebarVariants}
        className="w-2/3 bg-white shadow-md h-screen p-5 fixed right-0 z-30"
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="relative h-5 w-5"
            onClick={() => {
              setShowSidebar((prev) => !prev);
            }}
          >
            <XIcon />
          </button>
        </div>
        <div className="flex flex-col mt-10">
          <Link
            href={"/"}
            className="flex items-center justify-end border-b gap-5 py-4"
          >
            <span>Beranda</span>
            <HomeIcon />
          </Link>
          <Link
            href={"/"}
            className="flex items-center justify-end border-b gap-5 py-4"
          >
            <span>Blogs</span>
            <LaptopIcon />
          </Link>
          <Link
            href={"/"}
            className="flex items-center justify-end border-b gap-5 py-4"
          >
            <span>Tentang Kami</span>
            <InfoIcon />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
