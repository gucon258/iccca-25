"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import iccsailogo from "@/assets/logo/iccsailogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileNavRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (isOpen && mobileNavRef.current && !mobileNavRef.current.contains(event.target) && !event.target.closest('button[aria-label="Toggle menu"]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close mobile menu when resizing to large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // Changed from 768 to 1024
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-[#BE2727] to-[#F96604] sticky top-0 z-50 w-full px-4 py-2 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section - Improved Logo Sizing */}
        <div className="flex items-center">
          <Link href="/#">
            <div className="relative w-[150px] h-[40px] sm:w-[180px] sm:h-[45px] md:w-[200px] md:h-[50px] lg:w-[225px] lg:h-[55px]">
              <Image 
                src={iccsailogo} 
                alt="ICCSAI Logo" 
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile and Tablets */}
        <button
          className="lg:hidden text-white focus:outline-none" // Changed from md:hidden to lg:hidden
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links - Mobile and Tablet Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileNavRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed left-0 top-[60px] w-full  bg-gradient-to-r from-[#BE2727] to-[#F96604] overflow-y-auto" // Changed from md:hidden to lg:hidden
            >
              <ul className="flex flex-col gap-6 font-semibold text-center p-8">
                <li>
                  <Link href="/#" onClick={closeMenu}>
                    <span className="text-white text-lg hover:text-gray-200 transition-colors duration-200">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/registration" onClick={closeMenu}>
                    <span className="text-white text-lg hover:text-gray-200 transition-colors duration-200">Registration</span>
                  </Link>
                </li>

                {/* Dropdown for Committee */}
                <li className="relative">
                  <div
                    className="text-white text-lg hover:text-gray-200 flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Committee <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''} `}/>
                  </div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full bg-gray-800 text-white rounded-md shadow-lg mt-2 overflow-hidden"
                      >
                        <Link href="/committee/members" onClick={closeMenu}>
                          <div className="px-4 py-3 hover:bg-gray-700">Members</div>
                        </Link>
                        <Link href="/committee/speakers" onClick={closeMenu}>
                          <div className="px-4 py-3 hover:bg-gray-700">Speakers</div>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link href="/guidelines" onClick={closeMenu}>
                    <span className="text-white text-lg hover:text-gray-200 transition-colors duration-200">Guidelines</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://ieeexplore.ieee.org/xpl/conhome/10420826/proceeding"
                    target="_blank"
                    onClick={closeMenu}
                  >
                    <span className="text-white text-lg hover:text-gray-200 transition-colors duration-200">ICCSAI-2023</span>
                  </Link>
                </li>
                <li>
                  <Link href="/forAuthors" onClick={closeMenu}>
                    <span className="text-white text-lg hover:text-gray-200 transition-colors duration-200">For Authors</span>
                  </Link>
                </li>
              </ul>

              {/* Submit Button in Mobile Menu */}
              <div className="flex justify-center mt-4 mb-8">
                <a
                  href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025"
                  target="_blank"
                  className="w-4/5"
                  onClick={closeMenu}
                >
                  <button className="w-full bg-gradient-to-r from-[#DE4060] via-[#A73E9C] to-[#438ACC] hover:bg-gradient-to-bl text-white font-medium rounded-xl px-4 py-3 transition-all duration-300 ease-in-out">
                    Submit your paper
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navbar Links for Desktop */}
        <div className="hidden lg:flex lg:items-center lg:gap-6"> {/* Changed from md:flex to lg:flex */}
          <ul className="flex flex-row gap-4 lg:gap-6 font-semibold text-left">
            <Link href="/#">
              <li className="text-white hover:text-gray-200 transition-colors duration-200 whitespace-nowrap">Home</li>
            </Link>
            <Link href="/registration">
              <li className="text-white hover:text-gray-200 transition-colors duration-200 whitespace-nowrap">
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
              <span className="text-white hover:text-gray-200 flex items-center gap-1 cursor-pointer transition-colors duration-200 whitespace-nowrap">
                Committee <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </span>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-4 -left-1 mt-2 w-48 bg-gray-200 text-black rounded-md shadow-lg transition-all duration-800  ease-in-out ${
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <Link href="/committee/members">
                  <div className="px-4 py-2 hover:bg-gray-300 rounded-t-md">Members</div>
                </Link>
                <Link href="/committee/speakers">
                  <div className="px-4 py-2 hover:bg-gray-300 rounded-b-md">Speakers</div>
                </Link>
              </div>
            </li>

            <Link href="/guidelines">
              <li className="text-white hover:text-gray-200 transition-colors duration-200 whitespace-nowrap">
                Guidelines
              </li>
            </Link>
            <Link
              href="https://ieeexplore.ieee.org/xpl/conhome/10420826/proceeding"
              target="_blank"
            >
              <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              ref={dropdownRef}
            >
              <span className="text-white hover:text-gray-200 flex items-center gap-1 cursor-pointer transition-colors duration-200 whitespace-nowrap">
                For Authors <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </span>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-4 -left-1 mt-2 w-48 bg-gray-200 text-black rounded-md shadow-lg transition-all duration-800  ease-in-out ${
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <Link href="/forAuthors/page">
                  <div className="px-4 py-2 hover:bg-gray-300 rounded-t-md">Online</div>
                </Link>
                <Link href="/forAuthors/page">
                  <div className="px-4 py-2 hover:bg-gray-300 rounded-b-md">Offline</div>
                </Link>
              </div>
            </li>

          </ul>
        </div>

        {/* Submit Button Desktop */}
        <div className="hidden lg:flex"> {/* Changed from md:flex to lg:flex */}
          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025"
            target="_blank"
          >
            <button className="bg-gradient-to-r from-[#DE4060] via-[#A73E9C] to-[#438ACC] hover:bg-gradient-to-bl text-white font-normal rounded-xl px-3 lg:px-4 py-2 transition-all duration-300 ease-in-out whitespace-nowrap text-sm lg:text-base">
              Submit your paper
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
