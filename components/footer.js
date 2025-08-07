import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-8 font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo and Address Column */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="mb-4 md:mb-0 relative h-20 md:h-24 w-[200px] md:w-[240px]">
                <Image 
                  src="/logos/conflogo2.png" 
                  alt="ICCCA Logo" 
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 200px, 240px"
                />
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  Galgotias University, Plot No. 2, Yamuna Expy,<br />
                  opposite Buddha International Circuit,<br />
                  Sector 17A, Greater Noida,<br />
                  Uttar Pradesh 203201
                </p>
              </div>
            </div>
          </div>

          {/* Links and Socials */}
          <div className="flex gap-12 md:gap-24">
            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-white hover:text-white/80 transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-white hover:text-white/80 transition-colors duration-200">Events</a></li>
                <li><a href="#" className="text-white hover:text-white/80 transition-colors duration-200">Gallery</a></li>
                <li><a href="#" className="text-white hover:text-white/80 transition-colors duration-200">Program</a></li>
                <li><a href="#" className="text-white hover:text-white/80 transition-colors duration-200">IEEE U.P.</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Socials</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-white hover:text-white/80 transition-colors duration-200">LinkedIn</a></li>
                <li><a href="#" className="text-white hover:text-white/80 transition-colors duration-200">Instagram</a></li>
                <li><a href="#" className="text-white hover:text-white/80 transition-colors duration-200">YouTube</a></li>
                <li><a href="#" className="text-white hover:text-white/80 transition-colors duration-200">Facebook</a></li>
                <li><a href="#" className="text-white hover:text-white/80 transition-colors duration-200">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="container mx-auto px-6 mt-6 pt-4 border-t border-white/20 text-center text-sm">
        <p>© Copyright 2025 ICCCA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;