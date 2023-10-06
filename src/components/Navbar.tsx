"use client";

import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import Link from "next/link";
import { MenuIcon } from "./icons/MenuIcon";
import POROSLogo from "../../public/logo-poros.svg";
import Image from "next/image";
import { useState } from "react";
import { type Variants, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const changeNav = useNavbarScroll();
  const [activePage, setActivePage] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

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

  return (
    <>
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
            <Image src={"/icon-x.svg"} alt="X Icon" fill={true} />
          </button>
        </div>
        <div className="flex flex-col mt-10">
          <Link
            href={"/"}
            className="flex items-center justify-end border-b gap-5 py-4"
          >
            <span>Beranda</span>
            <div className="w-5 h-5 relative">
              <Image src={"/icon-home.svg"} alt="Home Icon" fill={true} />
            </div>
          </Link>
          <Link
            href={"/"}
            className="flex items-center justify-end border-b gap-5 py-4"
          >
            <span>Blogs</span>
            <div className="w-5 h-5 relative">
              <Image src={"/icon-blogs.svg"} alt="Blog Icon" fill={true} />
            </div>
          </Link>
          <Link
            href={"/"}
            className="flex items-center justify-end border-b gap-5 py-4"
          >
            <span>Tentang Kami</span>
            <div className="w-5 h-5 relative">
              <Image src={"/icon-info.svg"} alt="Info Icon" fill={true} />
            </div>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
