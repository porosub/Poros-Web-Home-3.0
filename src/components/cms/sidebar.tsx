"use client";
import { LogOut, FileText, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useActiveTab from "@/hooks/useActiveTab";

const Sidebar = (): JSX.Element => {
  const { activeTab, handleTabClick } = useActiveTab();

  return (
    <div className="w-64 bg-white flex flex-col">
      <Link href="/admin?tab=0">
        <div
          className="flex px-14 py-10 items-center justify-center gap-3 "
          onClick={() => {
            handleTabClick("0");
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
        <ul className="text-base font-normal w-full grid grid-cols-1 gap-y-3">
          <Link href="/admin?tab=0">
            <li
              className={`flex items-center gap-6 p-3 rounded-md w-3/4 mx-auto transition-colors duration-200 cursor-pointer ${
                activeTab === "0"
                  ? "bg-primaryGreen text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => {
                handleTabClick("0");
              }}
            >
              <Users2 />
              <span>List Anggota</span>
            </li>
          </Link>
          <Link href="/admin/blog?tab=1">
            <li
              className={`flex items-center gap-6 p-3 rounded-md w-3/4 mx-auto transition-colors duration-200 cursor-pointer ${
                activeTab === "1"
                  ? "bg-primaryGreen text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => {
                handleTabClick("1");
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
