import { Icon } from "@iconify/react";

import { Paragraph } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
import type { Setting } from "@/app/lib/types/settings";
import type { Service } from "@/app/lib/types/services";
import type { Industry } from "@/app/lib/types/industries";
type HeaderProps = {
  settings: Setting;
  services: Service[];
  industries: Industry[];
};
export default async function Header({
  settings,
  services,
  industries,
}: HeaderProps) {
  if (!settings) return null;

  return (
    <footer className="py-10 text-text-on-dark section-container bg-[url(/img/bg_footer.jpg)] bg-no-repeat bg-cover bg-gray-100 text-black">
      <div
        className="
                 grid lg:grid-cols-4  md:pt-6 lg:gap-4 md:grid-cols-2 md:gap-6 grid-cols-1"
      >
        <div className="flex-col flex gap-4">
          <div>
            {settings.site_logo_url && (
              <Image
                src={settings.site_logo_url}
                className="w-24 md:w-32"
                width={180}
                height={55}
                alt="logo Golden Path"
              />
            )}
          </div>

          <div>
            <ul className="flex-col flex gap-2 ">
              <li className="flex gap-1 items-center">
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-ondark">
                  <Icon icon="lets-icons:gps-fixed" className="w-6 h-6" />
                </div>
                <p className="md:text-lg text-left">{settings.address}</p>
              </li>
              <li className="flex gap-1 items-center">
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-ondark">
                  <Icon icon="mdi:email" className="text-ondark w-6 h-6" />
                </div>

                <Paragraph className="md:text-lg">{settings.email} </Paragraph>
              </li>
              <li className="flex gap-1 items-center">
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-ondark">
                  <Icon
                    icon="solar:phone-bold"
                    className="text-ondark w-6 h-6"
                  />
                </div>

                <Paragraph className="md:text-lg">{settings.phone}</Paragraph>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-col  gap-4 hidden md:flex">
          <div className='uppercase relative  before:content-[""] before:absolute before:left-0 before:w-2 before:h-4 before:bg-primary before:-translate-y-1/2 before:top-1/2 pl-4 text-lg'>
            Industries
          </div>
          <div>
            <ul className="flex-col flex gap-2 font-light">
              {industries.map((industry) =>
                industry.slug ? (
                  <li
                    key={industry.id}
                    className="flex gap-1 items-center hover:text-primary"
                  >
                    <Link href={industry.slug}> {industry.name}</Link>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
        <div className="flex-col  gap-4 hidden md:flex">
          <div className='uppercase relative  before:content-[""] before:absolute before:left-0 before:w-2 before:h-4 before:bg-primary before:-translate-y-1/2 before:top-1/2 pl-4 text-lg'>
            Services
          </div>
          <div>
            <ul className="flex-col flex gap-2 font-light">
              {services.map((service) =>
                service.slug ? (
                  <li
                    key={service.id}
                    className="flex gap-1 items-center hover:text-primary"
                  >
                    <Link href={service.slug}> {service.name}</Link>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
        <div className="flex-col flex gap-4">
          <div className=' uppercase relative  before:content-[""] before:absolute before:left-0 before:w-2 before:h-4 before:bg-primary before:-translate-y-1/2 before:top-1/2 pl-4 hidden md:block text-lg'>
            Company
          </div>
          <div>
            <ul className="font-light hidden md:flex flex-col gap-2">
              <li className="flex gap-1 items-center hover:text-primary font-normal">
                <Link href={"/about"}>About Us</Link>
              </li>
              <li className="flex gap-1 items-center hover:text-primary">
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
            <div className="pt-4">
              <ul className="flex gap-4 ">
                <li>
                  {settings.linkedin && (
                    <Link href={settings.linkedin}>
                      <Icon
                        className=" hover:text-primary border-white rounded-full p-1"
                        icon="basil:linkedin-solid"
                        width="30"
                        height="30"
                      />
                    </Link>
                  )}
                </li>
                <li>
                  {settings.facebook_url && (
                    <Link href={settings.facebook_url}>
                      <Icon
                        className="  hover:text-primary border-white rounded-full"
                        icon="typcn:social-facebook"
                        width="30"
                        height="30"
                      />
                    </Link>
                  )}
                </li>
                <li>
                  {settings.youtube && (
                    <Link href={settings.youtube}>
                      <Icon
                        className=" p-1  border-white rounded-full hover:text-primary"
                        icon="famicons:logo-instagram"
                        width="30"
                        height="30"
                      />
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center opacity-50 pt-8 font-normal text-sm md:pt-16 md:pb-4">
        {" "}
        © {new Date().getFullYear()} Golden Path. All rights reserved.
      </div>
    </footer>
  );
}
