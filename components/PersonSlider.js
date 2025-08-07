'use client'

import React from "react";
import Image from 'next/image';
import { cards } from "@/utils/slideArray";

const PersonSlider = () => {
  // const cards = Array(10).fill({
  //   name: "Dr Dhruv Galgotia",
  //   position: "CEO",
  //   organization: "Galgotia University India",
  //   imgSrc: "/ImportantPersons/dhruvSir 2.png", // Replace with the actual path
  // });

  return (
    <div className="overflow-hidden bg-gray-100 py-6">
      <h1 className="relative text-center tracking-tight text-balance pb-6 font-bold !leading-tight text-gray-900 text-lg md:text-xl lg:text-2xl">
  Committee Members
</h1>
      <div className="flex w-max animate-scroll space-x-16" style={{
    animation: 'scroll 60s linear infinite',
  }}>
        {cards.concat(cards).slice(0,18).map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-[300px] h-[150px] p-4 bg-[#BE2727] shadow-md relative"
          >
            <div className="w-1/3 flex items-center justify-center">
              <div className="absolute left-[-20px] size-28 bg-white">
                <Image
                  src={card.imgSrc}
                  alt={card.name}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            </div>
            <div className="text-white p-2 pl-8 w-full">
              <h2 className="text-lg font-bold">{card.name}</h2>
              <p className="text-sm">{card.position}</p>
              <p className="text-sm">{card.organization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonSlider;


