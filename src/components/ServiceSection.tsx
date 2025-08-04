"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import type { Service } from "@/app/lib/types/services";
import { H2, Paragraph, Button, H3 } from "@/components/ui";
import { stripHtml } from "string-strip-html";
type Props = {
  services: Service[];
};

export default function ServiceSection({ services }: Props) {
  const [selected, setSelected] = useState<Service>(services[0] ?? null);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[url(/img/swirl.png)] bg-no-repeat bg-left-top text-text-on-dark bg-background-secondary  md:pb-16 pt-10 md:pt-16">
      <div className=" section-container">
        <H2>Our Services</H2>
        <Paragraph className="text-lg">
          Game-changing solutions tailored for every sector
        </Paragraph>
      </div>

      <div className="text-text-primary md:mx-10 lg:mx-20  mt-6 md:mt-10  mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] md:gap-4">
        <div className="bg-background">
          <ul className="lg:p-4 md:p-2 bg-background ">
            {services.map((service, index) => (
              <li key={service.id}>
                <button
                  onClick={() => {
                    setSelected(service);
                    toggle(index);
                  }}
                  className={`text-left  p-4 w-full border-y md:border-none  ${
                    selected.id === service.id
                      ? "bg-primary font-bold border-none "
                      : "bg-white font-semibold  hover:bg-gray-100 "
                  } transition`}
                >
                  {service.name}
                </button>

                <div
                  className={` md:hidden  grid grid-cols-1   bg-background-neutral   transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-[2000px] opacity-100  pb-6  gap-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className=" w-full ">
                    {selected.section1_image && (
                      <Image
                        src={selected.section1_image}
                        alt={service.section1_description}
                        unoptimized
                        width={1000}
                        height={600}
                        className="   w-full h-auto"
                      />
                    )}
                  </div>
                  <div>
                    <Paragraph className="mb-4 line-clamp-5 px-4">
                      {stripHtml(selected.section1_description).result}
                    </Paragraph>

                    <div className="text-right">
                      <Button
                        className="bg-background-neutral text-primary "
                        href={`/services/${service.slug}`}
                      >
                        Explore
                        <Icon
                          className="pl-1"
                          icon="ep:arrow-right"
                          width="24"
                          height="24"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-background p-6 lg:p-12 space-y-6  grid-cols-1 md:grid-cols-2 gap-8 hidden md:grid">
          <div className="">
            <H3 className="text-2xl md:text-3xl font-medium underline underline-offset-4">
              {selected.name}
            </H3>
            <Paragraph className="my-6 md:line-clamp-[10]">
              {stripHtml(selected.section1_description).result}
            </Paragraph>

            <Button href={`/services/${selected.slug}`}>Explore</Button>
          </div>
          <div className="relative w-full">
            {selected.section1_image && (
              <Image
                src={selected.section1_image}
                alt="image services"
                fill
                className="object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
