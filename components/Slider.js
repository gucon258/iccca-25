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

  // Show first image immediately for better LCP
  const firstImage = data[0];

  return (
    <div className="w-full px-4 py-3 mx-auto lg:px-8">
      {/* Show first image immediately for LCP optimization */}
      {!isMounted && (
        <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={firstImage.src}
            alt={firstImage.name || "Slide 1"}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority={true}
            style={{
              objectPosition: 'center center'
            }}
          />
        </div>
      )}

      {/* Show slider only after mounted */}
      {isMounted && (
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
              <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={d.src}
                  alt={d.name || `Slide ${index + 1}`}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  style={{
                    objectPosition: 'center center'
                  }}
                  onError={(e) => {
                    console.error(`Failed to load image: ${d.src}`, e);
                  }}
                  onLoad={() => {
                    if (index === 0) {
                      console.log(`LCP image loaded: ${d.src}`);
                    }
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Slider;