import Image from "next/image";
import FaqSection from "@/components/FraSection";
import ContactForm from "@/components/ContactForm";
import PartnerSlider from "@/components/Partner";
import { H2, Paragraph, Button, H3, H4 } from "@/components/ui";
import { fetchFaqs } from "../lib/api/faqs";
import { fetchPartners } from "../lib/api/FetchImage";
import { fetchAbout } from "../lib/api/fetchAbout";

export default async function About() {
  const [faqs, partners, about] = await Promise.all([
    fetchFaqs(),
    fetchPartners(),
    fetchAbout(),
  ]);

  return (
    <section>
      <section className="py-10 pb-20 md:p-16 section-container grid grid-cols-1 md:grid-cols-2  text-text-on-dark md:gap-10 lg:gap-20 gap-6">
        <div>
          <H2 className="max-w-[600px] lg:text-5xl">{about.section1.title} </H2>
        </div>

        {about.section1.description && (
          <div
            className="prose md:text-xl"
            dangerouslySetInnerHTML={{
              __html: about.section1.description,
            }}
          />
        )}
      </section>
      <section className="relative bg-background-neutral">
        <div className="md:section-container -translate-y-10 flex justify-center">
          {about.section2.image && (
            <Image
              src={about.section2.image}
              width={2100}
              height={945}
              alt="about us banner"
              loading="lazy"
            />
          )}
        </div>
        <div className="-mt-10 gap-8 py-8 pb-14 md:py-10 md:pb-20 grid grid-cols-1 md:grid-cols-2 section-container ">
          <div className="md:pt-14 ">
            <H2 className="lg:text-5xl">{about.section2.title}</H2>

            {about.section2.description && (
              <div
                className="prose pt-2 md:text-xl md:pt-6 text-justify"
                dangerouslySetInnerHTML={{
                  __html: about.section2.description,
                }}
              />
            )}
          </div>
          <div>
            <ul className="bg-background px-4 py-10 flex flex-col gap-4 shadow-[0_1px_16px_0_rgba(0,_0,_0,_0.18)]  rounded-md ">
              {about.section2.list.map((item, index) => (
                <li key={index} className="flex gap-2 md:px-6">
                  <div className=" pl-4  md:pl-6 before:content-[''] before:absolute before:top-2 before:left-0 relative before:w-2 before:h-2 before:bg-primary">
                    <H4>{item.title}</H4>
                    <Paragraph className="text-text-muted   pt-1">
                      {item.description}
                    </Paragraph>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-10">
        <div className="relative">
          {about.section3.image && (
            <Image
              src={about.section3.image}
              loading="lazy"
              className="md:object-cover w-auto"
              fill
              alt="banner about us 2"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
        <div className="relative md:hidden">
          {about.section3.image && (
            <Image
              src={about.section3.image}
              width={600}
              height={300}
              loading="lazy"
              className="w-full h-auto object-cover "
              alt="banner about us 2"
            />
          )}
        </div>
        <div className="text-text-on-dark md:py-10 p-4 flex flex-col gap-4 lg:py-16 py-10 md:pr-10 lg:pr-20">
          <H2 className="lg:text-5xl ">{about.section3.title}</H2>

          {about.section3.description && (
            <div
              className="prose text-justify"
              dangerouslySetInnerHTML={{
                __html: about.section3.description,
              }}
            />
          )}
        </div>
      </section>

      <PartnerSlider partners={partners} />
      <ContactForm />

      <FaqSection faqs={faqs} />
    </section>
  );
}
