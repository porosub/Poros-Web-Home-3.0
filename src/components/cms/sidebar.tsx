"use client";
import { Laptop2, LogOut, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";
import type { FC } from "react";

const Sidebar: FC = () => {
  const pathName = usePathname();
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-white flex flex-col p-5 gap-5">
      <Link href="/admin" className="pb-5 border-b">
        <div className="flex items-center justify-center gap-3 ">
          <Image
            src="/svg/logo/poros.svg"
            width={40}
            height={40}
            alt="Logo Poros"
          />
          <h1 className="font-semibold text-2xl">Dashboard</h1>
        </div>
      </Link>

      <nav className="flex-1">
        <ul className="text-base font-medium w-full grid grid-cols-1">
          <Link href="/admin">
            <li
              className={`flex items-center gap-3 p-3 rounded-md transition-colors duration-200 cursor-pointer ${
                pathName === "/admin"
                  ? "bg-primaryGreen text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <Users2 />
              <span>List Anggota</span>
            </li>
          </Link>
          <Link href="/admin/blog">
            <li
              className={`flex items-center gap-3 p-3 rounded-md transition-colors duration-200 cursor-pointer ${
                pathName === "/admin/blog"
                  ? "bg-primaryGreen text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              <Laptop2 />
              <span>Blog</span>
            </li>
          </Link>
        </ul>
      </nav>

      <Button
        onClick={() => {
          void logout();
        }}
        className="flex items-center gap-3 p-4 rounded-md hover:bg-destructive/90 hover:text-white bg-transparent transition-colors duration-200 text-destructive cursor-pointer"
      >
        <LogOut className="w-5 h-5" />
        <span>Log out</span>
      </Button>
    </div>
  );
};

export default Sidebar;
