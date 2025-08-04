"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { Icon } from "@iconify/react";
import type { Service } from "@/app/lib/types/services";
import type { Industry } from "@/app/lib/types/industries";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
type Props = {
  services: Service[];
  industries: Industry[];
};
export default function MobileMenu({ services, industries }: Props) {
  const pathname = usePathname();
  const activeClass = (href: string) => {
    if (href === "/") {
      return pathname === "/" ? "text-primary" : "";
    }
    return pathname.startsWith(href) ? "text-primary" : "";
  };

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    "industries" | "services" | null
  >(null);
  const toggleDropdow = (name: "industries" | "services") => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="md:hidden">
      <button aria-label="menu" onClick={() => setIsOpen(!isOpen)}>
        <Icon
          className="transition-all duration-300 ease-in-out"
          icon={isOpen ? "ep:close-bold" : "ri:menu-2-fill"}
          width="32"
          height="32"
        />
      </button>
      <div
        className={`fixed top-[76px]  right-0 h-full bg-[url(/img/bg-mobile-menu.jpg)] bg-no-repeat bg-right bg-cover bg-background-inverse transform transition-transform duration-300 ease-in-out z-50 border-t w-full border-background ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col py-10 gap-6 ">
          <Link
            aria-label="home"
            href="/"
            onClick={() => setIsOpen(false)}
            className={`text-3xl px-6 ${activeClass("/")}`}
          >
            Home
          </Link>
          <div>
            <button
              aria-label="industries"
              className={`flex gap-0.5 px-6 items-center ${activeClass(
                "/industries"
              )}`}
              onClick={() => toggleDropdow("industries")}
            >
              <span className=" text-3xl ">Industries</span>
              <Icon
                className={`text-primary transition-all duration-200 ease-in-out  ${
                  openDropdown === "industries" ? "rotate-0" : "-rotate-90"
                }`}
                icon="dashicons:arrow-down"
                width="20"
                height="20"
              />
            </button>
            <AnimatePresence initial={false}>
              {openDropdown === "industries" && (
                <motion.div
                  key="industries-dropdown"
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="flex flex-col gap-2 text-xl mt-2 py-4 bg-background-secondary overflow-hidden"
                >
                  {industries.map((item) => (
                    <Link
                      href={`/industries/${item.slug}`}
                      key={item.id}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenDropdown(null);
                      }}
                      className="px-4 pl-10 py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <button
              aria-label="services"
              className={`flex gap-0.5 px-6 items-center ${activeClass(
                "/services"
              )}`}
              onClick={() => toggleDropdow("services")}
            >
              <span className=" text-3xl ">Services</span>
              <Icon
                className={`text-primary transition-all duration-200 ease-in-out  ${
                  openDropdown === "services" ? "rotate-0" : "-rotate-90"
                }`}
                icon="dashicons:arrow-down"
                width="20"
                height="20"
              />
            </button>
            <AnimatePresence initial={false}>
              {openDropdown === "services" && (
                <motion.div
                  key="services-dropdown"
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col gap-2 text-xl mt-2 bg-background-secondary overflow-hidden py-4"
                >
                  {services.map((item) => (
                    <Link
                      href={`/services/${item.slug}`}
                      key={item.id}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenDropdown(null);
                      }}
                      className="px-4 pl-10 py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            aria-label="about us"
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`text-3xl px-6 ${activeClass("/about")}`}
          >
            About Us
          </Link>
          <Link
            aria-label="contact"
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`text-3xl px-6 ${activeClass("/contact")}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
