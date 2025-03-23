"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import iccsailogo from "@/assets/logo/iccsailogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const dropdownRef = useRef(null); // Ref for dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when resizing to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close mobile menu on large screens
        setIsDropdownOpen(false); // Close dropdown on large screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#BE2727] to-[#F96604] sticky top-0 z-50 w-full px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
        <Link href="/#"><Image src={iccsailogo} alt="ICCSAI Logo" width={110} height={55}/></Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute left-0 top-[60px] w-full bg-gradient-to-r from-[#BE2727] to-[#F96604] opacity-100 visible"
            >
              <ul className="flex flex-col gap-4 font-semibold text-center p-4">
                <Link href="/#">
                  <li className="text-white hover:text-gray-200 transition-colors duration-200">Home</li>
                </Link>
                <Link href="/registration">
                  <li className="text-white hover:text-gray-200 transition-colors duration-200">
                    Registration
                  </li>
                </Link>

                {/* Dropdown for Committee */}
                <li
                  className="relative"
                  onMouseEnter={() => !isOpen && setIsDropdownOpen(true)}
                  onMouseLeave={() => !isOpen && setIsDropdownOpen(false)}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  ref={dropdownRef}
                >
                  <span className="text-white hover:text-gray-200 flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200">
                    Committee <ChevronDown size={16} />
                  </span>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg transition-all duration-200 ease-in-out ${
                      isDropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <Link href="/committee/members">
                      <div className="px-4 py-2 hover:bg-gray-700 rounded-t-md">Members</div>
                    </Link>
                    <Link href="/committee/speakers">
                      <div className="px-4 py-2 hover:bg-gray-700 rounded-b-md">Speakers</div>
                    </Link>
                  </div>
                </li>

                <Link href="/guidelines">
                  <li className="text-white hover:text-gray-200 transition-colors duration-200">
                    Guidelines
                  </li>
                </Link>
                <Link
                  href="https://ieeexplore.ieee.org/xpl/conhome/10420826/proceeding"
                  target="_blank"
                >
                  <li className="text-white hover:text-gray-200 transition-colors duration-200">
                    ICCSAI-2023
                  </li>
                </Link>
              </ul>

              {/* Submit Button in Mobile Menu */}
              <div className="flex justify-center mt-4 mb-4">
                <a
                  href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025"
                  target="_blank"
                >
                  <button className="bg-gradient-to-r from-[#DE4060] via-[#A73E9C] to-[#438ACC] hover:bg-gradient-to-bl text-white font-normal rounded-xl px-4 py-2 transition-all duration-300 ease-in-out">
                    Submit your paper
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <ul className="flex flex-row gap-6 font-semibold text-left">
            <Link href="/#">
              <li className="text-white hover:text-gray-200 transition-colors duration-200">Home</li>
            </Link>
            <Link href="/registration">
              <li className="text-white hover:text-gray-200 transition-colors duration-200">
                Registration
              </li>
            </Link>

            {/* Dropdown for Committee */}
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              ref={dropdownRef}
            >
              <span className="text-white hover:text-gray-200 flex items-center gap-1 cursor-pointer transition-colors duration-200">
                Committee <ChevronDown size={16} />
              </span>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg transition-all duration-200 ease-in-out ${
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link href="/committee/members">
                  <div className="px-4 py-2 hover:bg-gray-700 rounded-t-md">Members</div>
                </Link>
                <Link href="/committee/speakers">
                  <div className="px-4 py-2 hover:bg-gray-700 rounded-b-md">Speakers</div>
                </Link>
              </div>
            </li>

            <Link href="/guidelines">
              <li className="text-white hover:text-gray-200 transition-colors duration-200">
                Guidelines
              </li>
            </Link>
            <Link
              href="https://ieeexplore.ieee.org/xpl/conhome/10420826/proceeding"
              target="_blank"
            >
              <li className="text-white hover:text-gray-200 transition-colors duration-200">
                ICCSAI-2023
              </li>
            </Link>
          </ul>
        </div>

        {/* Submit Button Desktop */}
        <div className="hidden md:flex">
          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025"
            target="_blank"
          >
            <button className="bg-gradient-to-r from-[#DE4060] via-[#A73E9C] to-[#438ACC] hover:bg-gradient-to-bl text-white font-normal rounded-xl px-4 py-2 transition-all duration-300 ease-in-out">
              Submit your paper
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;