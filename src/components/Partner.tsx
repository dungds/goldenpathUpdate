"use client";

/* globals.css */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import { industries } from "@/lib/data";

import { partners } from "@/lib/data";
export default function PartnerSlider() {
  // trong component

  return (
    <section className="bg-background  lg:px-40 px-6 py-6 md:py-14">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={industries.length > 4}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
        className="bg-background cursor-grab "
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="h-24 w-full relative">
              <Image
                src={partner.image}
                fill
                alt="partner logo"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
