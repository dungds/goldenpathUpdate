"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useGlobal } from "@/app/context/SiteGlobalsContext";


export default function Header() {
const { settings, services = [], industries = [] } = useGlobal();
  
  const pathname = usePathname();
  // console.log(settings);

  const activeClass = (href: string) => {
    if (href === "/") {
      return pathname === "/" ? "text-primary" : "";
    }
    return pathname.startsWith(href) ? "text-primary" : "";
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!settings) return null;

  // console.log(settings.site_logo_url);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-background-inverse text-text-on-dark section-container ${
        isScrolled ? "shadow" : ""
      }`}
    >
      <div className="md:border-b  border-white  flex justify-between items-center py-4 md:py-2">
        <div>
          <Link href={"/"}>
          {/* <Image src={settings.site_logo_url} alt="logo Golden Path" width={200} height={80} /> */}
            <img
              src={settings.site_logo_url}
              className="w-24 md:w-32"
              width="180"
              height="55"
              alt="logo Golden Path"
            />
          </Link>
        </div>
        <nav className="hidden lg:space-x-16 md:space-x-6 uppercase md:flex justify-between items-center ">
          <Link href="/" className={`link-style ${activeClass("/")}`}>
            Home
          </Link>
          <div
            className={`group relative cursor-pointer ${activeClass(
              "/industries"
            )}`}
          >
            <div className=" flex gap-0.5 items-center ">
              Industries
              <Icon
                className="text-primary transition-all duration-200 ease-in-out group-hover:rotate-180"
                icon="dashicons:arrow-down"
                width="20"
                height="20"
              />
            </div>
            <div className="absolute top-6 hidden transition-all duration-300 ease-in-out group-hover:flex flex-col bg-background py-2 z-50 text-text-muted rounded-md capitalize  w-auto shadow-lg">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/industries/${industry.slug}`}
                  className="px-4 py-2 hover:text-primary-dark  whitespace-nowrap"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
          <div
            className={`group relative cursor-pointer ${activeClass(
              "/services"
            )}`}
          >
            <div className=" flex gap-0.5 items-center ">
              Services
              <Icon
                className="text-primary transition-all duration-200 ease-in-out group-hover:rotate-180"
                icon="dashicons:arrow-down"
                width="20"
                height="20"
              />
            </div>
            <div className="absolute top-6 hidden transition-all duration-300 ease-in-out group-hover:flex flex-col bg-background py-2 z-50 text-text-muted rounded-md capitalize  w-auto shadow-lg">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="px-4 py-2 hover:text-primary-dark  whitespace-nowrap"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className={`link-style ${activeClass("/about")}`}>
            About Us
          </Link>
          <Link
            href="/contact"
            className={`link-style ${activeClass("/contact")}`}
          >
            Contact
          </Link>
        </nav>
        <MobileMenu  />
      </div>
    </header>
  );
}
