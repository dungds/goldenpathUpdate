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
          <Link href="/" className={`link-style ${activeClass("/")}`} >
            Home
          </Link>
          
          {/* ====== Industries Dropdown ====== */}
<div className={`group relative ${activeClass("/industries")}`}>
  <div className="flex items-center gap-1 cursor-pointer">
    Industries
    <Icon
      className="text-primary transition-transform duration-300 group-hover:rotate-180"
      icon="dashicons:arrow-down"
      width="20"
      height="20"
    />
  </div>

  {/* Dropdown - mượt hơn 300% */}
  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  translate-y-2 group-hover:translate-y-0 
                  transition-all duration-300 ease-out 
                  bg-background shadow-2xl rounded-xl border border-white/10 
                  py-4 min-w-[220px] backdrop-blur-xl">
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 
                    w-4 h-4 bg-background rotate-45 border-l border-t border-white/10" />
    
    {industries.map((industry) => (
      <Link
        key={industry.id}
        href={`/industries/${industry.slug}`}
        className="block px-6 py-3 text-text-muted hover:text-primary 
                   hover:bg-white/5 transition-colors duration-200 
                   first:rounded-t-xl last:rounded-b-xl"
      >
        {industry.name}
      </Link>
    ))}
  </div>
</div>

{/* ====== Services Dropdown (copy y hệt, chỉ đổi tên) ====== */}
<div className={`group relative ${activeClass("/services")}`}>
  <div className="flex items-center gap-1 cursor-pointer">
    Services
    <Icon
      className="text-primary transition-transform duration-300 group-hover:rotate-180"
      icon="dashicons:arrow-down"
      width="20"
      height="20"
    />
  </div>

  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  translate-y-2 group-hover:translate-y-0 
                  transition-all duration-300 ease-out 
                  bg-background shadow-2xl rounded-xl border border-white/10 
                  py-4 min-w-[220px] backdrop-blur-xl">
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 
                    w-4 h-4 bg-background rotate-45 border-l border-t border-white/10" />
    
    {services.map((service) => (
      <Link
        key={service.id}
        href={`/services/${service.slug}`}
        className="block px-6 py-3 text-text-muted hover:text-primary 
                   hover:bg-white/5 transition-colors duration-200 
                   first:rounded-t-xl last:rounded-b-xl"
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
