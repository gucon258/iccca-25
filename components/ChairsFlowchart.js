"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { chairs } from "@/utils/slideArray";

export default function ChairsFlowchart() {
  const [isFlowchartOpen, setIsFlowchartOpen] = useState(false);
  const [openChair, setOpenChair] = useState(null);

  // Split tracks into regular and special sessions
  const regularTracks = chairs.slice(0, 5); // First 5 tracks (Main Track + 4 regular tracks)
  const specialTracks = chairs.slice(5); // Remaining tracks

  // Detect screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeDevice = window.innerWidth >= 768;
      setIsFlowchartOpen(isLargeDevice);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleFlowchart = () => {
    setIsFlowchartOpen((prev) => !prev);
  };

  const toggleChair = (index) => {
    setOpenChair(openChair === index ? null : index);
  };

  const renderTrackSection = (tracks, startIndex, sectionTitle) => (
    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold text-[#024CAD] mb-4 border-b border-gray-300 pb-2">
        {sectionTitle}
      </h3>
      <div className="space-y-3">
        {tracks.map((category, index) => {
          const globalIndex = startIndex + index;
          let trackLabel = "";

          if (sectionTitle === "Regular Tracks") {
            if (index === 0) {
              trackLabel = "Main Track: ";
            } else {
              trackLabel = `Track ${index}: `;
            }
          } else {
            trackLabel = `Track ${index + 5}: `;
          }

          return (
            <div key={globalIndex} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full flex justify-between items-center p-3 text-sm md:text-base font-medium text-left text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50 transition-colors"
                onClick={() => toggleChair(globalIndex)}
              >
                <span className="flex-1 pr-2">
                  <span className="font-bold text-[#024CAD] mr-2">{trackLabel}</span>
                  {category.title}
                </span>
                <span className="flex-shrink-0">
                  {openChair === globalIndex ? '-' : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>
              {openChair === globalIndex && (
                <div className="p-3 border-t border-gray-200 bg-gray-50">
                  <ul className="list-disc pl-6 space-y-2">
                    {Array.isArray(category.chairpersons) && category.chairpersons.length > 0 ? (
                      category.chairpersons.map((chair, i) => (
                        <li key={i} className="text-gray-600 text-sm">{chair}</li>
                      ))
                    ) : (
                      <li className="text-gray-500 italic text-sm">Chairs not listed</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:px-16">
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-2xl font-bold text-[#024CAD] text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleFlowchart}
        >
          Conference Tracks
        </button>
        <button
          className="p-2 text-gray-700 focus:outline-none rounded-full"
          onClick={toggleFlowchart}
        >
          <ChevronDown className={`transition-transform ${isFlowchartOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isFlowchartOpen && (
        <>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-red-600 text-left mb-4">
              Conference Tracks, Track Chairs and Related Topics
            </h2>
            <p className="text-gray-700 mb-6 italic">
              The conference welcomes high-quality submissions in these areas and related domains; contributions are not limited to the topics listed above.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Regular Tracks Column */}
            <div>
              {renderTrackSection(regularTracks, 0, "Regular Tracks")}
            </div>

            {/* Special Sessions/Tracks Column */}
            <div>
              {renderTrackSection(specialTracks, 5, "Special Sessions/Tracks")}
            </div>
          </div>
        </>
      )}
    </div>
  );
}