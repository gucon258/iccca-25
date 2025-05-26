"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function SpecialTracks() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-expand on larger screens
  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeDevice = window.innerWidth >= 768;
      setIsExpanded(isLargeDevice);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  const handleDownload = () => {
    // Path to the Word document in the public folder
    const fileUrl = "/Call for Papers_Special Session_ICCCA.docx";
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'ICCCA2025_Special_Tracks_Proposal.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-4 md:px-16 my-8"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#024CAD] text-left">
          Call for Special Tracks
        </h2>
        <button
          className="p-2 text-gray-700 focus:outline-none rounded-full"
          onClick={toggleExpand}
        >
          <ChevronDown 
            className={`transition-transform ${isExpanded ? 'rotate-180' : ''} animate-breathing`} 
          />
        </button>
      </div>

      {isExpanded && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
            The 2025 IEEE 7th International Conference on Computing, Communication, and Automation (ICCCA 2025) invites researchers, academicians, and industry experts to propose Special Tracks and serve as Track Chairs. These tracks will highlight focused, cutting-edge themes and foster impactful scholarly exchange in emerging domains of computing and communication.
            </p>
            

            <div className="bg-gray-50 p-5 rounded-lg border mt-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Guidelines for Track Chairs</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>All papers must be submitted through the conference CMT portal</li>
                <li>A minimum of 60 paper submissions is mandatory to qualify for track-related benefits</li>
                <li>A maximum of 4 co-authors is allowed per paper</li>
                <li>A Track Chair may submit up to 2 papers as an author in their own track</li>
                <li>A single author may have a maximum of 3 accepted papers</li>
                <li>The Turnitin plagiarism score must not exceed 10%</li>
                <li>Track Chairs must provide a list of 50 reviewers in Excel format, including: Name, Email ID, Phone Number, Affiliation, CMT ID</li>
                <li>Each paper must be reviewed by at least three reviewers</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col items-center">
              <p className="text-gray-700 mb-4 text-center">
                For detailed information, please download the complete Special Tracks Proposal template.
              </p>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-[#024CAD] hover:bg-blue-700 text-white font-medium py-2.5 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <Download size={18} />
                Download Special Tracks Proposal Template
              </button>
              
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
