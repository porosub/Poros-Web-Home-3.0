"use client";
import { LogOut, FileText, Users2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Sidebar = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="w-64 bg-white flex flex-col">
      <Link href="/admin">
        <div
          className="flex px-14 py-10 items-center justify-center gap-3 "
          onClick={() => {
            setActiveItem(0);
          }}
        >
          <Image
            src="/svg/logo/poros-plain.svg"
            width={40}
            height={40}
            alt="Logo Poros"
          />
          <h1 className="font-semibold text-2xl">Dashboard</h1>
        </div>
      </Link>

      <div className="flex-1">
        <ul className="text-lg font-normal w-full grid grid-cols-1 gap-y-3">
          <Link href="/admin">
            <li
              className={`flex items-center gap-6 p-3 rounded-md w-3/4 mx-auto transition-colors duration-200 cursor-pointer ${
                activeItem === 0
                  ? "bg-[#29AC4A] text-white"
                  : "hover:bg-[#29AC4A] hover:text-white"
              }`}
              onClick={() => {
                setActiveItem(0);
              }}
            >
              <Users2 />
              <span>List Anggota</span>
            </li>
          </Link>
          <Link href="/admin/blog">
            <li
              className={`flex items-center gap-6 p-3 rounded-md w-3/4 mx-auto transition-colors duration-200 cursor-pointer ${
                activeItem === 1
                  ? "bg-[#29AC4A] text-white"
                  : "hover:bg-[#29AC4A] hover:text-white"
              }`}
              onClick={() => {
                setActiveItem(1);
              }}
            >
              <FileText />
              <span>Blog</span>
            </li>
          </Link>
        </ul>
      </div>

      <Link href="/">
        <div className="text-lg font-normal">
          <div className="flex items-center gap-6 p-4 rounded-md w-3/4 mx-auto mb-4 hover:bg-slate-200 transition-colors duration-200 text-[#C40027] cursor-pointer">
            <LogOut />
            <span>Logout</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
