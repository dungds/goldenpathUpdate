"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useGlobal } from "@/app/context/SiteGlobalsContext";
import { AnimatePresence, motion } from "framer-motion";


export default function Header() {
const { settings, services = [], industries = [] } = useGlobal();
const [hoveredDropdown, setHoveredDropdown] = useState<"industries" | "services" | null>(null);

  const pathname = usePathname();

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
 <div
            className={`relative ${activeClass("/industries")}`}
            onMouseEnter={() => setHoveredDropdown("industries")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer select-none">
              Industries
              <Icon
                icon="dashicons:arrow-down"
                width="20"
                height="20"
                className={`text-primary transition-transform duration-300 ${
                  hoveredDropdown === "industries" ? "-rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <AnimatePresence>
              {hoveredDropdown === "industries" && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.32, 0, 0.2, 1] }}
                  className="absolute top-full left-0 mt-2 bg-background/95 backdrop-blur-2xl shadow-2xl rounded-2xl border border-white/10 overflow-hidden min-w-[240px] py-4 z-50 pointer-events-auto"
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background/95 rotate-45 border-l border-t border-white/10" />
                  {industries.map((industry) => (
                    <motion.div
                      key={industry.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="px-8 py-3"
                    >
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="block text-text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 normal-case"
                      >
                        {industry.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>


{/* service */}

 <div
            className={`relative ${activeClass("/services")}`}
            onMouseEnter={() => setHoveredDropdown("services")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer select-none">
              Services
              <Icon
                icon="dashicons:arrow-down"
                width="20"
                height="20"
                className={`text-primary transition-transform duration-300 ${
                  hoveredDropdown === "services" ? "-rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <AnimatePresence>
              {hoveredDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.32, 0, 0.2, 1] }}
                  className="absolute top-full left-0  mt-2 bg-background/95 backdrop-blur-2xl shadow-2xl rounded-2xl border border-white/10 overflow-hidden min-w-[240px] py-4 z-50 pointer-events-auto"
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background/95 rotate-45 border-l border-t border-white/10" />
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="px-8 py-3"
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="block text-text-muted hover:text-primary hover:translate-x-1 transition-all duration-300 normal-case"
                      >
                        {service.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
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
