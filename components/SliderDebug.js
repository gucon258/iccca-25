"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { data } from '@/utils/slideArray';

const SliderDebug = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full px-4 py-3 mx-auto lg:px-8">
      <h2>Debug: Slider Images</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.slice(0, 4).map((d, index) => (
          <div key={d.name} className="border p-2">
            <p>Image {index + 1}: {d.name}</p>
            <p>Path: {d.src}</p>
            <div className="relative w-full h-32 bg-gray-200">
              <Image
                src={d.src}
                alt={d.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                onError={(e) => {
                  console.error(`Failed to load image: ${d.src}`, e);
                }}
                onLoad={() => {
                  console.log(`Successfully loaded: ${d.src}`);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderDebug;