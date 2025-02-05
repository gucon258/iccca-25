import React from "react";
import target from '@/assets/logo/target.svg';

const Banner = () => {
  return (
    <div className="relative flex items-center p-6 bg-gradient-to-r from-[#F6434B] to-[#E12685] text-white rounded-bl-3xl rounded-tr-none rounded-br max-w-[95%]  mx-auto my-5 lg:my-10">
      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-center">
        ICCSAI - 2025 will be held at Galgotias University, Greater Noida, India (NCR New Delhi). This prestigious event brings together global researchers, academics, and industry professionals to discuss advancements in Communication, Security, and Artificial Intelligence.
      </p>
      <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 size-11 md:size-20 lg:size-24">
        <img src={target.src} alt="target" className="h-full w-full object-cover rounded-full" />
      </div>
    </div>
  );
};

export default Banner;

