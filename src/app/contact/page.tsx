"use client";
import { H2, H3, Paragraph } from "@/components/ui";
import { Icon } from "@iconify/react";

import Link from "next/link";

import { useGlobal } from "../context/SiteGlobalsContext";
import ContactFormPage from "@/components/ContactFormPage";

export default  function Contact() {
  const { settings } = useGlobal();

  return (
    <section className="pt-6">
      <div className="relative -mt-2 py-10 lg:py-20 md:-mt-10 bg-[url(/img/contact-banner.jpg)] bg-cover bg-no-repeat bg-left-bottom section-container grid grid-cols-1 md:grid-cols-2  text-text-on-dark">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative flex flex-col justify-center">
          <H2 className="text-3xl md:text-5xl">Contact Us</H2>
          <p className="font-bold text-lg md:text-2xl pt-2  md:pt-6">
            How can we help?
          </p>
          <Paragraph className="md:max-w-[500px] font-light text-text-dark-muted text-lg">
            To submit a question or request, please fill out the form. We will
            respond as soon as possible.
          </Paragraph>
        </div>
      </div>
      <div className=" bg-no-repeat bg-left-top text-text-primary bg-background-neutral  md:pb-16 pt-10 md:pt-16">
        <div className="section-container gap-10 md:gap-10 lg:gap-20 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div>
              <H3 className="py-0 mb-4 pl-2 border-l-8 border-primary">
                OUR INFORMATION
              </H3>
              <ul className="flex-col flex  ">
                <li className="flex gap-1 items-center py-2   ">
                  <div className=" w-6 h-6 flex-shrink-0 flex items-center justify-center text-ondark">
                    <Icon icon="lets-icons:gps-fixed" className="w-6 h-6" />
                  </div>
                  <Paragraph className="text-dark-muted md:text-lg text-text-">
                    {settings.address}
                  </Paragraph>
                </li>
                <li className="flex gap-1 items-center py-2 ">
                  <div className=" w-6 h-6 flex-shrink-0 flex items-center justify-center text-ondark">
                    <Icon icon="mdi:email" className="text-ondark w-6 h-6" />
                  </div>

                  <Paragraph className="text-dark-muted md:text-lg">
                    {settings.email}
                  </Paragraph>
                </li>
                <li className="flex gap-1 items-center py-2 ">
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-ondark">
                    <Icon
                      icon="solar:phone-bold"
                      className="text-ondark w-6 h-6"
                    />
                  </div>

                  <Paragraph className="text-text-muted md:text-lg">
                    {settings.phone}
                  </Paragraph>
                </li>
              </ul>
            </div>
            <div>
              <H3 className="py-0 mb-4 pl-2 border-l-8 border-primary">
                FOLLOW US
              </H3>

              <div className="pt-4">
                <ul className="flex gap-4 ">
                  <li>
                    <Link href={settings.linkedin}>
                      <Icon
                        className="border   hover:text-primary border-gray-400  rounded-full p-3"
                        icon="basil:linkedin-solid"
                        width="48"
                        height="48"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href={settings.facebook_url}>
                      <Icon
                        className="border  p-3  hover:text-primary border-gray-400  rounded-full"
                        icon="typcn:social-facebook"
                        width="48"
                        height="48"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href={settings.youtube}>
                      <Icon
                        className="border p-3  border-gray-400 rounded-full hover:text-primary"
                        icon="famicons:logo-instagram"
                        width="48"
                        height="48"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ContactFormPage />
        </div>
      </div>
    </section>
  );
}
