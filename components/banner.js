import React from "react";
import target from '@/assets/logo/target.svg';

const Banner = () => {
  return (
    <div className="relative flex items-center p-6 bg-gradient-to-r from-[#BE2727] to-[#F96604] text-white rounded-bl-3xl rounded-tr-none rounded-br max-w-[85%]  mx-auto my-5 lg:my-10">
      <p className="text-sm sm:text-medium md:text-xl lg:text-xl font-medium text-center">
      2025 IEEE 7th International Conference on Computing, Communication and Automation (ICCCA) will be held on November 28-30, 2025 at Galgotias University, Greater Noida, India (NCR New Delhi). This prestigious event, financially & Technically sponsored by IEEE Uttar Pradesh Section & IEEE IAS Society, brings together global researchers, academics, and industry professionals to discuss advancements in Computing, Communication, and Automation and many more .
      </p>
      <div className="absolute right-2 md:right-0 top-2 md:top-0 transform translate-x-1/2 -translate-y-1/2 size-11 md:size-20 lg:size-24">
        <img src={target.src} alt="target" className=" h-full w-full object-cover rounded-full" />
      </div>
    </div>
  );
};

export default Banner;

