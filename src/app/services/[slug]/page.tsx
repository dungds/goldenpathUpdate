import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import ServiceSection from "@/components/ServiceSection";
import { H2, Paragraph, Button, H3, H4 } from "@/components/ui";
import type { Service } from "@/app/lib/types/services";
import {
  fetchItemBySlug,
  fetchCollection,
} from "@/app/lib/api/fetchCollection";
import ConsultationForm from "@/components/ConsultationForm";
import { Industry } from "@/app/lib/types/industries";
export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>; // params là Promise
}) {
  const { slug } = await params; // await params để lấy slug

  const [service, servicesData, industries] = await Promise.all([
    fetchItemBySlug<Service>("services", slug),
    fetchCollection<Service>("services"),
    fetchCollection<Industry>("industries"),
  ]);

  if (!service) return notFound();

  return (
    <section>
      <section className="pt-4 md:pt-6 grid grid-cols-1 md:grid-cols-2 section-container gap-4 md:gap-8 lg:gap-12">
        <div>
          {service.section1_image && (
            <Image
              src={service.section1_image}
              alt="image service"
              height={400}
              width={600}
              loading="lazy"
            />
          )}
        </div>
        <div className="text-text-on-dark flex flex-col gap-4 md:gap-6 md:pyy-14 py-6 pb-10 ">
          <H2 className="text-3xl md:text-4xl lg:text-5xl">{service.name}</H2>

          {service.section1_description && (
            <div
              className="prose md:text-lg lg:text-xl"
              dangerouslySetInnerHTML={{
                __html: service.section1_description,
              }}
            />
          )}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-background-neutral px-4  py-10 md:px-10 lg:px-20 md:py-16">
          <H2 className="pb-4">{service.section2_title} </H2>

          {service.section2_description && (
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: service.section1_description,
              }}
            />
          )}
        </div>
        <div className="bg-primary px-4 py-10 md:px-10 md:py-16 lg:px-20">
          <div className="pb-4">
            <Paragraph className="text-lg font-medium ">
              Ready to expand in Dubai and the UAE? Our expert advice helps you
              make the right decisions for lasting growth.
            </Paragraph>
          </div>
          <ConsultationForm />
        </div>
      </section>

      <section className="relative bg-[url(/img/bg-black-wave.jpg)] bg-no-repeat bg-cover">
        <div className=" gap-4 md:gap-8 pt-14 md:pt-20  md:py-10  grid grid-cols-1 md:grid-cols-2 md:section-container  ">
          <div className="px-4 md:px-0">
            <H2 className="lg:text-5xl text-text-on-dark">
              {service.section3_main_title}
            </H2>
            <ul className="text-text-on-dark py-6 md:py-10 flex flex-col gap-4 ">
              {(
                service.section3_list as unknown as {
                  title: string;
                  section3_description: string;
                }[]
              )?.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <div className=" pl-6 before:content-[''] before:absolute before:top-1.5 before:left-0 relative before:w-2 before:h-2 before:bg-primary">
                    <H4>{item.title}</H4>

                    {item.section3_description && (
                      <div
                        className="prose text-text-dark-muted pt-1"
                        dangerouslySetInnerHTML={{
                          __html: service.section1_description,
                        }}
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className=" ">
            <div className="flex relative text-center md:justify-self-center md:center">
              <Image
                src={"/img/decor.jpg"}
                alt="decor"
                className=" hidden md:block absolute -left-6 -bottom-6"
                width={120}
                height={120}
                loading="lazy"
              />
              {service.section3_image && (
                <Image
                  src={service.section3_image}
                  width={600}
                  height={300}
                  className=" w-full max-w-[500px] h-auto object-cover "
                  loading="lazy"
                  alt="banner about us 2"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="md:section-container bg-background-neutral grid grid-cols-1 md:grid-cols-2 pt-10 md:gap-4 lg:gap-10 md:py-20">
        <div className="flex md:justify-self-center order-2 md:order-1">
          {service.section4_image && (
            <Image
              src={service.section4_image}
              width={600}
              height={300}
              className="w-full h-auto object-cover "
              loading="lazy"
              alt="banner about us 2"
            />
          )}
        </div>
        <div className="order-1 md:order-2 text-text-primary md:py-10  px-4 flex flex-col gap-4 lg:py-16 pb-10 ">
          <H2 className="lg:text-5xl ">{service.section4_title}</H2>

          {service.section4_description && (
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: service.section1_description,
              }}
            />
          )}
        </div>
      </section>
      <section className="bg-primary ">
        <div className="  py-10 gap-6 items-center md:gap-20 md:py-14 grid grid-cols-1 md:grid-cols-2 section-container">
          <H3 className="lg:text-4xl lg:font-medium">
            Like what you’ve seen? Get in touch to learn more.
          </H3>

          <Button
            variant="light"
            className="w-auto py-6 text-lg max-w-80"
            href="/contact"
          >
            Contact Us
          </Button>
        </div>
      </section>
      <ServiceSection services={servicesData} />

      <section className="py-8 md:py-14 bg-background-neutral section-container">
        <H2 className="md:pb-4">Industries</H2>
        <ul className=" py-4 flex gap-2 flex-wrap">
          {industries.map((industry) => (
            <li
              className=" bg-background hover:bg-primary font-semibold px-8 py-4 md:px-16 md:py-4 rounded-sm"
              key={industry.id}
            >
              <Link href={`/industries/${industry.slug}`}>{industry.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactForm />
      {/* <FaqSection /> */}
    </section>
  );
}
