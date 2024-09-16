import type { Metadata } from "next";
import type React from "react";

import { Rubik } from "next/font/google";
import "./globals.css";

const mainFont = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beranda | POROS Organization of Open Source FILKOM UB",
  description:
    "Lembaga Semi Otonom FILKOM UB yang mewadahi pengguna GNU/Linux serta perangkat lunak sumber terbuka, bebas dan legal",
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
