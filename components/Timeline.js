"use client"

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { events } from "@/utils/slideArray";

const Timeline = () => {

  const [progressIndex, setProgressIndex] = useState('');
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      setProgressIndex(0);
      const interval = setInterval(() => {
        setProgressIndex(() => (1.5));
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setProgressIndex(0);
    }
  }, [isInView]);

  return (

<div ref={timelineRef} className="flex items-center justify-center py-5 sm:py-10">
    <motion.div
      className="relative flex flex-col items-center w-full max-w-[98vw] opacity-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Timeline Bar - Starts at First Event */}
      <div className="absolute top-3 sm:top-6 w-[80%] sm:w-[90%] h-[1px] sm:h-1 bg-[#D2D2D2]">
        {/* Progress Bar */}
        <motion.div
          className="h-full bg-[#4B82C8] relative"
          initial={{ width: 0 }}
          animate={{
            width: isInView
              ? `${(progressIndex / (events.length - 1)) * 100}%`
              : "0%",
          }}
          transition={{ duration: 1 }}
        />
  
        {/* Moving Circle Head */}
        <motion.div
          className="absolute top-1/2 size-2 sm:size-5  bg-[#F43C52] rounded-full shadow-lg animate-breathing"
          initial={{ left: "0%" }}
          animate={{
            left: isInView
              ? `${(progressIndex / (events.length - 1)) * 100}%`
              : "0%",
          }}
          transition={{ duration: 1 }}
          style={{ transform: "translate(-50%, -50%)" }} // Centers the circle
        />
      </div>
  
      {/* Events */}
      <div className="relative flex w-full justify-between">
        {events.map((event, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Timeline Circle */}
            <motion.div
              className={`size-7 sm:size-14  rounded-full border-4 ${
                index <= progressIndex ? "border-red-500" : "border-gray-300"
              } bg-white flex items-center justify-center`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div
                className={`size-4 sm:size-9 rounded-full ${
                  index <= progressIndex ? "bg-red-500" : "bg-gray-300"
                }`}
                aria-hidden="true"
              ></div>
            </motion.div>
  
            {/* Event Description */}
            <motion.p
              className="text-center mt-3 text-[6px] sm:text-sm md:text-base text-gray-600 w-full font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              >
              <span>{event.date}</span> <br />
              <span>{event.description}</span>
            </motion.p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>

  
  );
};

export default Timeline;

