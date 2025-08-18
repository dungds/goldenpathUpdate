import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import ServiceSection from "@/components/ServiceSection";
import { H2, Paragraph, Button, H3, H4 } from "@/components/ui";
import ConsultationForm from "@/components/ConsultationForm";
import type { Industry } from "@/app/lib/types/industries";
import { getGlobalData } from "@/app/lib/api/fetchGlobal";
import { fetchItemBySlug } from "@/app/lib/api/fetchCollection";
const { services, industries } = await getGlobalData();

export default async function IndustryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [industry] = await Promise.all([
    fetchItemBySlug<Industry>("industries", slug),
  ]);

  if (!industry) return notFound();

  return (
    <section>
      <section className="pt-4 md:pt-6 grid grid-cols-1 md:grid-cols-2 section-container gap-4 md:gap-8 lg:gap-12">
        <div>
          {industry.section1_image && (
            <Image
              src={industry.section1_image}
              alt="image service"
              loading="lazy"
              height={400}
              width={600}
            />
          )}
        </div>
        <div className="text-text-on-dark flex flex-col gap-4 md:gap-6 md:pyy-14 py-6 pb-10 ">
          <H2 className="text-3xl md:text-4xl lg:text-5xl">{industry.name}</H2>
          {industry.section1_description && (
            <div
              className="prose md:text-lg lg:text-xl"
              dangerouslySetInnerHTML={{
                __html: industry.section1_description,
              }}
            />
          )}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-background-neutral px-4 py-10 md:py-16 md:px-10 lg:px-20">
          <H2 className="pb-4">{industry.section2_title} </H2>
          {industry.section2_description && (
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: industry.section2_description,
              }}
            />
          )}
        </div>
        <div className="bg-primary px-4 py-10 md:py-16  md:px-10 lg:px-20">
          <div className="pb-4 ">
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
              {" "}
              {industry.section3_main_title}{" "}
            </H2>
            <ul className="text-text-on-dark py-6 md:py-10 flex flex-col gap-4 ">
              {(
                industry.section3_list as unknown as {
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
                          __html: item.section3_description,
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
              {industry.section3_image && (
                <Image
                  src={industry.section3_image}
                  width={600}
                  height={300}
                  className=" w-full max-w-[500px] h-auto object-cover "
                  alt="banner about us 2"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="md:section-container bg-background-neutral grid grid-cols-1 md:grid-cols-2 pt-10 md:gap-4 lg:gap-10 md:py-20">
        <div className="flex md:justify-self-center order-2 md:order-1">
          {industry.section4_image && (
            <Image
              src={industry.section4_image}
              loading="lazy"
              width={600}
              height={300}
              className="w-full h-auto object-cover "
              alt="banner about us 2"
            />
          )}
        </div>
        <div className="order-1 md:order-2 text-text-primary md:py-10  px-4 flex flex-col gap-4 lg:py-16 pb-10 ">
          <H2 className="lg:text-5xl ">{industry.section4_title}</H2>

          {industry.section4_description && (
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: industry.section4_description,
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
      <ServiceSection services={services} />

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
