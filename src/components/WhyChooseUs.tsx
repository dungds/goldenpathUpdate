"use client";
import { useRef, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { services, Service } from "@/lib/data";
import { H2, Paragraph, Button, H3 } from "@/components/ui";

export default function WhyChooseUs() {
  return (
    <section className=" bg-background   text-text-on-dark relative pt-10 md:pt-20 md:pb-10">
      <div className="  ">
        <div className="absolute inset-0 bg-[url(/img/bg-black-wave.jpg)] bg-no-repeat bg-cover z-0" />

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:gap-16  gap-10  md:px-10 lg:px-20 md:pb-12 ">
          <div className=" relative md:order-1 order-2  z-10 overflow-visible  ">
            <img
              src="/img/decor.jpg"
              className="lg:w-32  lg:h-32 z-10 absolute -top-4 -right-4 hidden lg:block"
              alt=""
            />

            <Image
              src="/whychoose.jpg"
              width={555}
              height={570}
              alt="why choose us image"
              className="max-h-[500px] w-full h-auto object-contain relative  top-0"
              priority
            />
          </div>

          {/* Cột text (trái) */}
          <div className="px-4 md:pt-10   md:order-2 order-1  z-10  ">
            <div className="">
              <H2 className="border-l-4 border-primary pl-6 ">Why choose us</H2>
              <Paragraph className="py-6">
                If you’re updating processes, addressing company culture issues,
                or creating a new business plan, expert consultancy services are
                essential. Working with top consultants in Dubai helps you adapt
                to market changes, reduce downtime, and stay competitive.
                <br />
                <br />
                Our tailored solutions support everything from small
                improvements to major transformations. Our experienced
                consultants in the UAE focus on your success, expertly guiding
                complex projects and collaborating effectively across business
                and technology teams.
              </Paragraph>
              <Button href="/about">More Information</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
