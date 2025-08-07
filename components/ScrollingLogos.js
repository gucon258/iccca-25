import React from 'react';
import Image from 'next/image';
import { sponsors } from '@/utils/slideArray';

const ScrollingLogos = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap my-14"> {/* Key for horizontal scrolling */}
      <div className="animate-scroll flex"> {/* Container for the scrolling logos */}
        {sponsors.map((sponsor, index) => (
          <div key={index} className="mx-10 flex-shrink-0 relative h-28 w-auto"> {/* Space between logos and prevent shrinking */}
            <Image 
              src={sponsor.logo} 
              alt={sponsor.name} 
              height={112}
              width={200}
              className="h-28 w-auto object-contain"
              sizes="200px"
            />
          </div>
        ))}

        {/* Duplicate logos for seamless loop */}
        {sponsors.map((sponsor, index) => (
          <div key={`duplicate-${index}`} className="mx-4 flex-shrink-0 relative h-28 w-auto">
            <Image 
              src={sponsor.logo} 
              alt={sponsor.name} 
              height={112}
              width={200}
              className="h-28 w-auto object-contain"
              sizes="200px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;