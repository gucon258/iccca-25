"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import conflogo from "@/assets/logo/conflogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommitteeOpen, setIsCommitteeOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isPreviousConferencesOpen, setIsPreviousConferencesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileNavRef = useRef(null);
  const leaveTimer = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCommitteeOpen(false);
        setIsScheduleOpen(false);
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
      if (window.innerWidth >= 1024) {
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
    setIsCommitteeOpen(false);
    setIsScheduleOpen(false);
  };

  const handleMouseEnter = (setter) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
    }
    setter(true);
  };

  const handleMouseLeave = (setter) => {
    leaveTimer.current = setTimeout(() => {
      setter(false);
    }, 200); // 200ms delay before closing
  };

  return (
    <nav className="bg-[#BE2727] sticky top-0 z-50 w-full shadow-lg">
      <div className="mx-auto w-full max-w-screen-xl 2xl:max-w-screen-2xl flex justify-between items-center px-6 py-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/#" className="flex items-center">
            <div className="flex items-center gap-8">
            <div className="relative w-[150px] h-[40px] sm:w-[180px] sm:h-[45px] md:w-[200px] md:h-[50px] lg:w-[225px] lg:h-[55px]">
                <Image 
                  src={conflogo}
                  alt="ICCCA Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                  className="scale-125"
                  priority
                />
              </div>
              {/* <div className="h-[40px] w-[2px] bg-white/80 rounded-full sm:h-[45px] md:h-[50px]"></div>
              <div className="relative w-[180px] h-[40px] sm:w-[200px] sm:h-[45px] md:w-[220px] md:h-[50px] hover:opacity-90 transition-opacity">
                {/* <Image 
                  src="/logos/gulogowhite.png" 
                  alt="Galgotias University Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                /> */}
              {/* </div> */} 
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileNavRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed left-0 top-[60px] w-full bg-gradient-to-r from-primary-dark to-primary overflow-y-auto"
            >
              <ul className="flex flex-col gap-6 font-semibold text-center p-8">
                <li>
                  <Link href="/#" onClick={closeMenu}>
                    <span className="text-white text-lg hover:text-accent-light transition-colors duration-200">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/registration" onClick={closeMenu}>
                    <span className="text-white text-lg hover:text-accent-light transition-colors duration-200">Registration</span>
                  </Link>
                </li>
                <li>
                  <div
                    className="text-white text-lg hover:text-accent-light flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200"
                    onClick={() => setIsCommitteeOpen(!isCommitteeOpen)}
                  >
                    Committee <ChevronDown size={16} className={`transition-transform duration-300 ${isCommitteeOpen ? 'rotate-180' : ''}`} />
                  </div>
                  <AnimatePresence>
                    {isCommitteeOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full bg-primary-dark text-white rounded-md shadow-lg mt-2 overflow-hidden"
                      >
                        <Link href="/committee/members" onClick={closeMenu}>
                          <div className="px-4 py-3 hover:bg-primary">Members</div>
                        </Link>
                        <div className="px-4 py-3 hover:bg-primary cursor-not-allowed opacity-75">Speakers</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
                <li>
                  <Link href="/guidelines" onClick={closeMenu}>
                    <span className="text-white text-lg hover:text-accent-light transition-colors duration-200">Guidelines</span>
                  </Link>
                </li>
                <li>
                  <div
                    className="text-white text-lg hover:text-accent-light flex items-center justify-center gap-1 cursor-not-allowed opacity-75 transition-colors duration-200"
                    onClick={(e) => e.preventDefault()}
                  >
                    Schedule <ChevronDown size={16} />
                  </div>
                </li>
              </ul>

              {/* Submit Button in Mobile Menu */}
              <div className="flex justify-center mt-4 mb-8">
                <a
                  href="https://cmt3.research.microsoft.com/User/Login"
                  target="_blank"
                  className="w-4/5"
                  onClick={closeMenu}
                >
                  <button className="w-full bg-accent hover:bg-accent-dark text-white font-medium rounded-xl px-4 py-3 transition-all duration-300 ease-in-out">
                    Submit your paper
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/#">
                <span className="text-white hover:text-accent-light transition-colors duration-200">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/registration">
                <span className="text-white hover:text-accent-light transition-colors duration-200">Registration</span>
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <div
                className="text-white hover:text-accent-light flex items-center gap-1 cursor-pointer transition-colors duration-200"
                onMouseEnter={() => handleMouseEnter(setIsCommitteeOpen)}
                onMouseLeave={() => handleMouseLeave(setIsCommitteeOpen)}
              >
                Committee <ChevronDown size={16} className={`transition-transform duration-300 ${isCommitteeOpen ? 'rotate-180' : ''}`} />
              </div>
              <AnimatePresence>
                {isCommitteeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-primary-dark text-white rounded-md shadow-lg overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(setIsCommitteeOpen)}
                    onMouseLeave={() => handleMouseLeave(setIsCommitteeOpen)}
                  >
                    <Link href="/committee/members">
                      <div className="px-4 py-3 hover:bg-primary">Members</div>
                    </Link>
                    <div className="px-4 py-3 hover:bg-primary cursor-not-allowed opacity-75">Speakers</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li>
              <Link href="/guidelines">
                <span className="text-white hover:text-accent-light transition-colors duration-200">Guidelines</span>
              </Link>
            </li>
            <li className="relative">
              <div
                className="text-white hover:text-accent-light flex items-center gap-1 cursor-pointer transition-colors duration-200"
                onMouseEnter={() => handleMouseEnter(setIsPreviousConferencesOpen)}
                onMouseLeave={() => handleMouseLeave(setIsPreviousConferencesOpen)}
              >
                Previous Conferences <ChevronDown size={16} className={`transition-transform duration-300 ${isPreviousConferencesOpen ? 'rotate-180' : ''}`} />
              </div>
              <AnimatePresence>
                {isPreviousConferencesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-primary-dark text-white rounded-md shadow-lg overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(setIsPreviousConferencesOpen)}
                    onMouseLeave={() => handleMouseLeave(setIsPreviousConferencesOpen)}
                  >
                    <a 
                      href="https://ieeexplore.ieee.org/xpl/conhome/9573501/proceeding" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-3 hover:bg-primary"
                    >
                      2021
                    </a>
                    <a 
                      href="https://ieeexplore.ieee.org/xpl/conhome/9230460/proceeding" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-3 hover:bg-primary"
                    >
                      2020
                    </a>
                    <a 
                      href="https://ieeexplore.ieee.org/xpl/conhome/8933293/proceeding" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-3 hover:bg-primary"
                    >
                      2019
                    </a>
                    <a 
                      href="https://ieeexplore.ieee.org/xpl/conhome/8671767/proceeding" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-3 hover:bg-primary"
                    >
                      2018
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li className="relative">
              <div
                className="text-white hover:text-accent-light flex items-center gap-1 cursor-not-allowed opacity-75 transition-colors duration-200"
                onClick={(e) => e.preventDefault()}
              >
                Schedule <ChevronDown size={16} />
              </div>
            </li>
          </ul>

          {/* Submit Button Desktop */}
          <a
            href="https://cmt3.research.microsoft.com/User/Login"
            target="_blank"
          >
            <button className="bg-gradient-to-r from-[#DE4060] via-[#A73E9C] to-[#438ACC] hover:bg-gradient-to-bl text-white font-medium rounded-xl px-6 py-2 transition-all duration-300 ease-in-out">
              Submit your paper
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
