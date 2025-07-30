"use client";

/* globals.css */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Icon } from "@iconify/react";
import { industries } from "@/lib/data";
import { H2, Paragraph, Button, H3 } from "@/components/ui";

export default function IndustrySlider() {
  // trong component

  return (
    <section className="bg-white   w-full relative overflow-hidden md:pb-0">
      <div className="section-container pb-6  ">
        <H2 className="  ">Our Expert Industries</H2>
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
          pagination={{
            clickable: true,
          }}
          className="pb-10  mx-12 custom-swiper-pagination"
        >
          {industries.map((industry) => (
            <SwiperSlide key={industry.id}>
              <div
                className="relative bg-cover bg-no-repeat cursor-grab  p-4 pb-8 text-white h-80  md:h-96 flex flex-col justify-between group ition-all duration-300 ease-in-out"
                style={{ backgroundImage: `url(${industry.image})` }}
              >
                <div
                  className="absolute inset-0 bg-black/50 z-0 md:group-hover:bg-primary/90 md:group-hover: transition-colors     transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration:300; pointer-events-auto"
                />
                <div
                  className="relative flex flex-col  h-full justify-end md:group-hover:-translate-y-6 transition-transform transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 300; md:group-hover:text-text-primary"
                >
                  <div>
                    <H3 className="text-2xl font-semibold">{industry.title}</H3>
                    <Paragraph className="text-base mt-2 line-clamp-3">
                      {industry.description}
                    </Paragraph>
                  </div>

                  <Button
                    variant="outline"
                    href={industry.slug}
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
      <div className="mt-4 md:flex hidden justify-center gap-4 ">
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
