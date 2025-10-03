import React from 'react';
import Image from 'next/image';
import { data } from '@/utils/slideArray';

const OptimizedSlider = () => {
  return (
    <div className="w-full px-4 py-3 mx-auto lg:px-8">
      {/* Immediate LCP image - no client-side delays */}
      <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh] bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={data[0].src}
          alt={data[0].name || "Conference Banner"}
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority={true}
          loading="eager"
          style={{
            objectPosition: 'center center'
          }}
        />
      </div>
      
      {/* Simple image gallery for other slides */}
      <div className="mt-4 grid grid-cols-5 gap-2">
        {data.slice(1, 6).map((d, index) => (
          <div key={d.name} className="relative h-16 bg-gray-200 rounded overflow-hidden">
            <Image
              src={d.src}
              alt={d.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 20vw, 15vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptimizedSlider;

