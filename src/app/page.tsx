import Image from "next/image";

import FaqSection from "@/components/FraSection";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import IndustrySlider from "@/components/IndustrySlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnerSlider from "@/components/Partner";
import { H2, Paragraph, Button, H3 } from "@/components/ui";
import { fetchFaqs } from "./lib/api/faqs";
import { fetchCollection } from "./lib/api/fetchCollection";
import { fetchPartners } from "./lib/api/FetchImage";
import type { Service } from "./lib/types/services";
import { fetchAbout } from "./lib/api/fetchAbout";
import type { Industry } from "./lib/types/industries";
import type { Setting } from "./lib/types/settings";
import { fetchSettings } from "./lib/api/fetchSettings";
export default async function Home() {
  const [faqs, partners, about, services, industries, settings] =
    await Promise.all([
      fetchFaqs(),
      fetchPartners(),
      fetchAbout(),
      fetchCollection<Service>("services"),
      fetchCollection<Industry>("industries"),
      fetchSettings(),
    ]);
  return (
    <div className="">
      {settings && <HeroSection settings={settings} />}
      <ServiceSection services={services} />
      <WhyChooseUs About={about} />
      <PartnerSlider partners={partners} />
      <IndustrySlider industries={industries} />
      <section className="md:pt-16 pt-8 pb-0 md:py-20 md:section-container bg-[url(/img/bg-industries.jpg)] bg-no-repeat  bg-cover bg-top">
        <div className="grid grid-cols-1 md:bg-white md:grid-cols-2 gap-10 md:shadow-[0_1px_16px_0_rgba(0,_0,_0,_0.18)]  md:rounded-md relative">
          <div className="absolute bottom-0 md:-bottom-20 right-0 z-10">
            <Image
              src="/img/woman-photo-2.png"
              width={500}
              height={600}
              className="w-auto h-64 md:w-[500px] md:h-auto"
              loading="lazy"
              alt="woman"
            />
          </div>
          <div className="md:p-8 md:py-16 mx-4">
            <H3 className="font-bold">
              We enable businesses in the UAE to stay ahead with our consultancy
              solutions.
            </H3>
            <Paragraph className="pt-2 pb-6">
              Focus on expanding your business across the region while we, as a
              leading consultancy in Dubai, empower your success.
            </Paragraph>

            <Button href="/contact">Contact Us</Button>
          </div>
          <div className="  h-60 md:h-auto w-full relative">
            <Image
              src="/img/image_13.jpg"
              loading="lazy"
              alt="image"
              fill
              className="cover"
            />
          </div>
        </div>
      </section>
      <ContactForm />
      <FaqSection faqs={faqs} />
    </div>
  );
}
