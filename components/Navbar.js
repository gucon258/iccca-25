"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import conflogo from "@/assets/logo/conflogo.png";

const Navbar = () => {
  // Mobile Menu States
  const [isOpen, setIsOpen] = useState(false);
  const [mobileKeynoteSessionsOpen, setMobileKeynoteSessionsOpen] = useState(false);
  const [mobileScheduleOpen, setMobileScheduleOpen] = useState(false);
  const [mobilePreviousConferencesOpen, setMobilePreviousConferencesOpen] = useState(false);
  const [mobileAwardsOpen, setMobileAwardsOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);


  // Desktop Menu State
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const mobileNavRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
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
    setMobileKeynoteSessionsOpen(false);
    setMobileScheduleOpen(false);
    setMobilePreviousConferencesOpen(false);
    setMobileAwardsOpen(false);
    setMobileEventsOpen(false);

    setActiveDropdown(null);
  };

  const handleMouseEnter = (menuLabel) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(menuLabel);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const navLinkClasses = "text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group py-2";
  const dropdownClasses = "absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2";
  const dropdownItemClasses = "block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-[#BE2727]/95 backdrop-blur-md shadow-lg py-2"
        : "bg-[#BE2727] py-4"
        }`}
    >
      <div className="mx-auto w-full max-w-screen-2xl flex justify-between items-center px-6 lg:px-12">
        {/* Logo Section */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-[160px] h-[45px] sm:w-[180px] sm:h-[50px] transition-transform duration-300 group-hover:scale-105">
            <Image
              src={conflogo}
              alt="ICCCA Logo"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left' }}
              priority
              className="drop-shadow-sm"
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={closeMenu}
              />
              <motion.div
                ref={mobileNavRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="lg:hidden fixed right-0 top-0 h-full w-[300px] bg-white z-50 shadow-2xl overflow-y-auto"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-end mb-8">
                    <button
                      onClick={closeMenu}
                      className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <ul className="flex flex-col gap-4 flex-1">
                    <li>
                      <Link href="/" onClick={closeMenu} className="block text-lg font-semibold text-gray-800 hover:text-red-600 py-2">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/registration" onClick={closeMenu} className="block text-lg font-semibold text-gray-800 hover:text-red-600 py-2">
                        Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/committee/members" onClick={closeMenu} className="block text-lg font-semibold text-gray-800 hover:text-red-600 py-2">
                        Committee
                      </Link>
                    </li>


                    {/* Mobile Dropdowns */}
                    {[
                      {
                        label: "Keynote Sessions",
                        state: mobileKeynoteSessionsOpen,
                        setter: setMobileKeynoteSessionsOpen,
                        items: [
                          { label: "Message from Chairman AICTE", href: "/keynote-sessions/message" },
                          { label: "Speakers", href: "/keynote-sessions/speakers" }
                        ]
                      },
                      {
                        label: "Events",
                        state: mobileEventsOpen,
                        setter: setMobileEventsOpen,
                        items: [
                          { label: "WIE-Hackerearth 2025", href: "/events/wie" },
                          { label: "I'CEO", href: "/events/iceo" }
                        ]
                      },

                      {
                        label: "Schedule",
                        state: mobileScheduleOpen,
                        setter: setMobileScheduleOpen,
                        items: [
                          { label: "Offline Schedule", href: "/schedule/offline" },
                          { label: "Online Schedule", href: "/schedule/online" },
                          { label: "Conference Program Schedule", href: "/schedule/keynote" }
                        ]
                      },
                      {
                        label: "Awards",
                        state: mobileAwardsOpen,
                        setter: setMobileAwardsOpen,
                        items: [
                          { label: "Events Award", href: "/awards/best-poster" }
                        ]
                      }
                    ].map((menu) => (
                      <li key={menu.label}>
                        <button
                          onClick={() => menu.setter(!menu.state)}
                          className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 hover:text-red-600 py-2"
                        >
                          {menu.label}
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${menu.state ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {menu.state && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-gray-50 rounded-lg mt-2"
                            >
                              {menu.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeMenu}
                                  className="block px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 text-sm font-medium"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}

                    <li>
                      <Link href="/guidelines" onClick={closeMenu} className="block text-lg font-semibold text-gray-800 hover:text-red-600 py-2">
                        Guidelines
                      </Link>
                    </li>
                    <li>
                      <Link href="/sponsors" onClick={closeMenu} className="block text-lg font-semibold text-gray-800 hover:text-red-600 py-2">
                        Sponsors
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" onClick={closeMenu} className="block text-lg font-semibold text-gray-800 hover:text-red-600 py-2">
                        Contact
                      </Link>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <a
                      href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCCAconf2025"
                      target="_blank"
                      className="block w-full"
                      onClick={closeMenu}
                    >
                      <button className="w-full bg-gradient-to-r from-[#DE4060] via-[#A73E9C] to-[#438ACC] text-white font-bold rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        Submit Paper
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/" className={navLinkClasses}>
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/registration" className={navLinkClasses}>
                Registration
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/committee/members" className={navLinkClasses}>
                Committee
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>


            {/* Desktop Dropdowns */}
            {[
              {
                label: "Keynote Sessions",
                items: [
                  { label: "Message from Chairman AICTE", href: "/keynote-sessions/message" },
                  { label: "Speakers", href: "/keynote-sessions/speakers" }
                ]
              },
              {
                label: "Events",
                items: [
                  { label: "WIE-Hackerearth 2025", href: "/events/wie" },
                  { label: "I'CEO", href: "/events/iceo" }
                ]
              },

              {
                label: "Previous Conferences",
                items: [
                  { label: "2021", href: "https://ieeexplore.ieee.org/xpl/conhome/9666052/proceeding", external: true },
                  { label: "2020", href: "https://ieeexplore.ieee.org/xpl/conhome/9250743/proceeding", external: true },
                  { label: "2018", href: "https://ieeexplore.ieee.org/xpl/conhome/8766336/proceeding", external: true },
                  { label: "2017", href: "https://ieeexplore.ieee.org/xpl/conhome/8168800/proceeding", external: true },
                  { label: "2016", href: "https://ieeexplore.ieee.org/xpl/conhome/7795276/proceeding", external: true },
                  { label: "2015", href: "https://ieeexplore.ieee.org/xpl/conhome/7126877/proceeding", external: true }
                ]
              },
              {
                label: "Schedule",
                items: [
                  { label: "Offline Schedule", href: "/schedule/offline" },
                  { label: "Online Schedule", href: "/schedule/online" },
                  { label: "Conference Program Schedule", href: "/schedule/keynote" }
                ]
              },
              {
                label: "Awards",
                items: [
                  { label: "Events Award", href: "/awards/best-poster" }
                ]
              }
            ].map((menu) => (
              <li key={menu.label} className="relative">
                <div
                  className={`flex items-center gap-1 cursor-pointer ${navLinkClasses}`}
                  onMouseEnter={() => handleMouseEnter(menu.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {menu.label} <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === menu.label ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </div>
                <AnimatePresence>
                  {activeDropdown === menu.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={dropdownClasses}
                      onMouseEnter={() => handleMouseEnter(menu.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {menu.items.map((item) => (
                        item.external ? (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={dropdownItemClasses}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={dropdownItemClasses}
                          >
                            {item.label}
                          </Link>
                        )
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}

            <li>
              <Link href="/guidelines" className={navLinkClasses}>
                Guidelines
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/sponsors" className={navLinkClasses}>
                Sponsors
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className={navLinkClasses}>
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>

          {/* Submit Button Desktop */}
          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCCAconf2025"
            target="_blank"
          >
            <button className="bg-white text-[#BE2727] hover:bg-gray-100 font-bold rounded-full px-6 py-2.5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm tracking-wide">
              Submit Paper
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
