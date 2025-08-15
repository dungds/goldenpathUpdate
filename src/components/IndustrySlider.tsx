"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { stripHtml } from "string-strip-html";
import { H2, Paragraph, Button, H3 } from "@/components/ui";
import type { Industry } from "@/app/lib/types/industries";

type Props = {
  industries: Industry[];
};

export default function IndustrySlider({ industries }: Props) {
  if (!Array.isArray(industries) || industries.length === 0) {
    return null;
  }

  return (
    <section className="bg-white w-full relative overflow-hidden md:pb-0">
      <div className="section-container pb-6">
        <H2>Our Expert Industries</H2>
      </div>

      <div className="md:mx-10 lg:mx-20">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={4}
          loop={industries.length > 4}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="pb-10 mx-12 custom-swiper-pagination"
        >
          {industries.map((industry) => (
            <SwiperSlide key={industry.id}>
              <div className="relative cursor-grab p-4 pb-8 text-white h-80 md:h-96 flex flex-col justify-between group transition-all duration-300 ease-in-out">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={industry.section1_image}
                    alt={industry.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 md:group-hover:bg-primary/90 transition-colors duration-300" />
                </div>

                <div className="relative flex flex-col h-full justify-end md:group-hover:-translate-y-6 transition-transform duration-300">
                  <div>
                    <H3 className="text-2xl font-semibold">{industry.name}</H3>
                    <Paragraph className="text-base mt-2 line-clamp-3">
                      {stripHtml(industry.section1_description).result}
                    </Paragraph>
                  </div>

                  <Button
                    variant="outline"
                    href={`/industries/${industry.slug}`}
                    className="text-text-on-dark mt-6 md:hidden md:group-hover:md:block"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-4 md:flex hidden justify-center gap-4">
        <button className="custom-swiper-button-prev text-text-primary font-bold px-4 py-4 bg-primary rounded-full hover:bg-primary-dark transition-all duration-300 ease-in-out">
          <Icon icon="prime:arrow-left" width="24" height="24" />
        </button>
        <button className="custom-swiper-button-next text-text-primary font-bold px-4 py-4 bg-primary rounded-full hover:bg-primary-dark transition-all duration-300 ease-in-out">
          <Icon icon="prime:arrow-right" width="24" height="24" />
        </button>
      </div>
    </section>
  );
}
