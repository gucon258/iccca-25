'use client'

import React from "react";
import Image from 'next/image';
import { cards } from "@/utils/slideArray";

const PersonSlider = () => {
  const speakers = [
    "Professor T. G. Sitharam",
    "Dr. Sri Niwas Singh",
    "Dr. Akshay Rathore",
    "Dr. J. Ramkumar",
    "Dr. Rajeev Kumar Singh",
    "Dr. Harivardhagini Subhadra",
    "Dr. Varun Kakar",
    "Dr. Mohammad Rihan",
    "Dr Bijaya Ketan Panigrahi",
    "Ayman EL-Refaie- Ph.D., FIEEE, FIET, FNAI",
    "Prof. Asheesh Kumar",
    "Dr. Brij B. Gupta",
    "Dr. Hironori Washizaki",
    "Dr. Supavadee Aramvith",
    "Dr. Vinay Kumar"
  ];

  const speakerCards = speakers.map(name => cards.find(card => card.name === name)).filter(Boolean);

  return (
    <div className="overflow-hidden bg-gray-100 py-6">
      <h1 className="relative text-center tracking-tight text-balance pb-6 font-bold !leading-tight text-gray-900 text-lg md:text-xl lg:text-2xl">
        Keynote Speakers
      </h1>
      <div className="flex w-max animate-scroll space-x-16" style={{
        animation: 'scroll 60s linear infinite',
      }}>
        {speakerCards.concat(speakerCards).map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-[300px] h-[150px] p-4 bg-[#BE2727] shadow-md relative"
          >
            <div className="w-1/3 flex items-center justify-center">
              <div className="absolute left-[-20px] size-28 bg-white">
                <Image
                  src={card.imgSrc || "/reshot-icon-user-ZXFJAEQURK.svg"}
                  alt={card.name}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            </div>
            <div className="text-white p-2 pl-8 w-full">
              <h2 className="text-lg font-bold">{card.name}</h2>
              <p className="text-sm line-clamp-2">{card.position}</p>
              <p className="text-sm line-clamp-1">{card.organization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonSlider;


