import React from 'react';
import { sponsors } from '@/utils/slideArray';

const ScrollingLogos = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap my-14"> {/* Key for horizontal scrolling */}
      <div className="animate-scroll flex"> {/* Container for the scrolling logos */}
        {sponsors.map((sponsor, index) => (
          <div key={index} className="mx-10 flex-shrink-0"> {/* Space between logos and prevent shrinking */}
            <img src={sponsor.logo} alt={sponsor.name} className="h-28 w-auto" /> {/* Adjust height as needed */}
          </div>
        ))}

        {/* Duplicate logos for seamless loop */}
        {sponsors.map((sponsor, index) => (
          <div key={`duplicate-${index}`} className="mx-4 flex-shrink-0">
            <img src={sponsor.logo} alt={sponsor.name} className="h-28 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;