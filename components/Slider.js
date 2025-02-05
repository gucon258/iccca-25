"use client";

import React from 'react'
import {data} from '@/utils/slideArray'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Slider = () => {
  return (
    <div className="  mx-auto py-3 lg:mx-27.5 lg:my-1 sm:mx-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-lg  shadow-lg sm:h-[30vh] md:h-[70vh] lg:h-[90vh]"
      >
        {data.map((d) => (
          <SwiperSlide key={d.name}>
            <div className="relative h-full w-full ">
              <img
                src={d.src}
                alt={d.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

