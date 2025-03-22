"use client"; // Ensure interactivity for the mobile menu

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // For hamburger icon
import iccsailogo from "@/assets/logo/iccsailogo.png";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#BE2727] to-[#F96604] sticky top-0 z-50 w-full px-4 py-3 md:flex md:items-center md:justify-around">
      {/* Logo Section */}
      <div className="flex justify-between items-center">
        <Image src={iccsailogo} alt="ICCSAI Logo" width={110} height={55}/>
        
        {/* Hamburger Icon for Mobile */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navbar Links */}
      <div className={`md:flex items-center gap-6 text-white font-normal text-md 
          ${isOpen ? "block" : "hidden"} md:block`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 font-semibold text-right md:text-center">
          <Link href="/#"><li className="hover:text-gray-200">Home</li></Link>
          <Link href="/registration"><li className="hover:text-gray-200">Registration</li></Link>
          <li><a href="/committee" className="hover:text-gray-200">Committee</a></li>
          <Link href="/guidelines"><li className="hover:text-gray-200">Guidelines</li></Link>
          <Link href="https://ieeexplore.ieee.org/xpl/conhome/10420826/proceeding" target="_blank"><li className="hover:text-gray-200">ICCSAI-2023</li></Link>
        </ul>
      </div>

      {/* Submit Button */}
      <div className={`md:flex ${isOpen ? "block mt-3 text-right" : "hidden"} md:block md:text-left` }>
        <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025" target="_blank">
        <button className="bg-gradient-to-r from-[#DE4060] via-[#A73E9C] to-[#438ACC] 
          hover:bg-gradient-to-bl text-white font-normal rounded-xl px-4 py-2 transition duration-100">
          Submit your paper
        </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

