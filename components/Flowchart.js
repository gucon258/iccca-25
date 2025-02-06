'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Component } from "lucide-react";
import { categories } from "@/utils/slideArray"; // Import categories data
import { chairs } from "@/utils/slideArray";

export default function ConferenceDetails() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openChair, setOpenChair] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleChair = (index) => {
    setOpenChair(openChair === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-2 md:p-8 bg-white md:px-16"
    >
      {/* <h1 className="text-3xl font-bold text-center mb-8">Conference Topics & Key Highlights</h1> */}
      <h1 className="relative w-fit tracking-tight text-balance py-2 font-bold !leading-tight text-gray-900 text-2xl md:text-6xl lg:text-7xl">
  Conference Topics & 
  <span
    className="px-2 inline-block"
    style={{
      background: "linear-gradient(to right, #BE2727, #F96604)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Key Highlights
  </span>
</h1>

<div className="rounded-lg">

      {/* Wrapper for side-by-side layout on desktop */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Conference Topics */}
        <div className="flex-1 bg-white rounded-lg shadow-md md:p-4">
      <h2 className="text-xl lg:text-2xl font-bold text-[#BE2727] mb-4 ">Conference Topics Flowchart</h2>
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow hover:scale-[1.02] transition-all">
                <button
                  className="w-full flex justify-between items-center md:p-4 text-lg font-medium text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  onClick={() => toggleCategory(index)}
                >
                  <div className="p-4 md:p-0 flex items-center justify-center gap-2"><Component color="#BE2727" className="hidden md:block" /> {category.title}</div>
                  <span>{openCategory === index ? '-' : <ChevronDown color="#BE2727" />}</span>
                </button>
                {openCategory === index && (
                  <div className="p-4 border-t border-gray-200">
                    <ul className="list-disc pl-6 space-y-2">
                      {category.topics.map((topic, i) => (
                        <li key={i} className="text-gray-600">{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✔</span>
              <div>
                <strong>Focus Areas:</strong> Advanced computing, information security, AI, and emerging trends in communication technologies.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✔</span>
              <div>
                <strong>Global Participation:</strong> International researchers, practitioners, and experts sharing cutting-edge research.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✔</span>
              <div>
                <strong>Expert Sessions:</strong> Keynote addresses and technical talks from industry leaders and academic pioneers.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
