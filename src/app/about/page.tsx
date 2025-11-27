import FaqSection from "@/components/FraSection";
import ContactForm from "@/components/ContactForm";
import PartnerSlider from "@/components/Partner";
import { fetchAbout } from "../lib/api/fetchAbout";
import { getDynamicData } from "../lib/api/fetchGlobal";
import type { About } from "../lib/types/about";

import AboutContent from "@/components/AboutContent";

export default async function About() {

  const [about, { faqs, partners }] = await Promise.all([
    fetchAbout(),
    getDynamicData(),
  ]);

  return (
    <section>
          <AboutContent about={about} />

      <PartnerSlider partners={partners} />
      <ContactForm />

      <FaqSection faqs={faqs} />
    </section>
  );
}
