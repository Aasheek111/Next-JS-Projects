'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname=usePathname();

  return (
    <nav className={`flex justify-between p-4 bg-gray-900 rounded-2xl `}>
      <Link href={"/"}> Aashik</Link>

      <div className=" flex gap-6 ">
        <Link href={"/"}  className={pathname=="/" ?"text-blue-600" : ""}> Home</Link>
        <Link href={"/about"} className={pathname=="/about" ?"text-blue-600" : ""}> About</Link>

        <Link href={"/projects"} className={pathname=="/projects" ?"text-blue-600" : ""}> Projects</Link>
        <Link href={"/contact"} className={pathname=="/contact" ?"text-blue-600" : ""}> Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
