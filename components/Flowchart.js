'use client'
import React, { useState } from 'react';
import { categories } from '@/utils/slideArray';  // Importing categories from the external file
import {motion} from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Flowchart = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }} 
    viewport={{ once: true }}
     className="p-8 bg-white ">
      <h1 className="text-3xl font-bold text-center mb-8">Conference Topics & Key Highlights</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Flowchart Section */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-semibold mb-4">Conference Topics Flowchart</h2>
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow">
                <button
                  className="w-full flex justify-between items-center p-4 text-lg font-medium text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => toggleCategory(index)}
                >
                  <span>{category.title}</span>
                  <span>{openCategory === index ? '-' : <ChevronDown />}</span>
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

        {/* Key Highlights Section */}
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
    </motion.div>
  );
};

export default Flowchart;
