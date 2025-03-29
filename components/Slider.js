"use client";

import React, { useEffect, useState } from 'react';
import { data } from '@/utils/slideArray';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  // Add responsive breakpoints handling
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full px-4 py-3 mx-auto lg:px-8">
      {isMounted && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-lg shadow-lg"
          style={{ width: '100%', height: 'auto' }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              height: '30vh',
            },
            // when window width is >= 640px
            640: {
              height: '50vh',
            },
            // when window width is >= 768px
            768: {
              height: '70vh',
            },
            // when window width is >= 1024px
            1024: {
              height: '90vh',
            },
          }}
        >
          {data.map((d) => (
            <SwiperSlide key={d.name}>
              <div className="relative w-full h-full">
                <img
                  src={d.src}
                  alt={d.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Slider;