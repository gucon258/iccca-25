"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { data } from '@/utils/slideArray';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until mounted (prevents hydration issues)
  if (!isMounted) {
    return (
      <div className="w-full px-4 py-3 mx-auto lg:px-8">
        <div className="w-full h-[50vh] bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading slider...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-3 mx-auto lg:px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-lg shadow-lg"
        style={{ width: '100%', height: 'auto' }}
      >
        {data.map((d, index) => (
          <SwiperSlide key={d.name}>
            <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] bg-gray-100">
              <Image
                src={d.src}
                alt={d.name || `Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority={index === 0}
                onError={(e) => {
                  console.error(`Failed to load image: ${d.src}`, e);
                }}
                onLoad={() => {
                  console.log(`Successfully loaded: ${d.src}`);
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;