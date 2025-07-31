import Image from "next/image";
import FaqSection from "@/components/FraSection";
import ContactForm from "@/components/ContactForm";
import PartnerSlider from "@/components/Partner";
import { H2, Paragraph, Button, H3, H4 } from "@/components/ui";
import { fetchFaqs } from "../lib/api/faqs";
import { fetchPartners } from "../lib/api/FetchImage";

export default async function About() {
  const faqs = await fetchFaqs();
  const partners = await fetchPartners();
  console.log("Fetched partner:", partners);

  return (
    <section>
      <section className="py-10 pb-20 md:p-16 section-container grid grid-cols-1 md:grid-cols-2  text-text-on-dark md:gap-10 lg:gap-20 gap-6">
        <div>
          <H2 className="max-w-[600px] lg:text-5xl">
            Your Best Business Partner for Success in Dubai, UAE
          </H2>
        </div>
        <Paragraph className="md:text-xl">
          Start your road to success with the consultancy support from experts
          that you deserve. Our team has extensive experience in supporting
          various businesses, so you can trust that your processes will be in
          good hands.
        </Paragraph>
      </section>
      <section className="relative bg-background-neutral">
        <div className="md:section-container -translate-y-10 flex justify-center">
          <Image
            className=""
            src="/uploads/about-banner.png"
            width={2100}
            height={945}
            alt="about us banner"
          />
        </div>
        <div className="-mt-10 gap-8 py-8 pb-14 md:py-10 md:pb-20 grid grid-cols-1 md:grid-cols-2 section-container ">
          <div className="md:pt-14 ">
            <H2 className="lg:text-5xl">
              Our Mission Is To Take Your Business Further
            </H2>
            <Paragraph className="  pt-2 md:text-xl md:pt-6">
              We have the experience and resources you need to bring your
              company to a new level. We wants to empower you and help you reach
              new heights. Let us make the most out of what you have and enjoy
              the benefits of it.
            </Paragraph>
          </div>
          <div>
            <ul className="bg-background px-4 py-10 flex flex-col gap-4 shadow-[0_1px_16px_0_rgba(0,_0,_0,_0.18)]  rounded-md ">
              <li className="flex gap-2">
                <div className=" pl-4 md:pl-6 before:content-[''] before:absolute before:top-2 before:left-0 relative before:w-2 before:h-2 before:bg-primary">
                  <H4>Efficiency</H4>
                  <Paragraph className="text-text-muted pt-1">
                    As your IT consultant Dubai, we help you reduce the risks by
                    making cybersecurity improvements. Plus, with our IT support
                    and setup, you can enhance performance and maximize
                    productivity, thus, improving efficiency.
                  </Paragraph>
                </div>
              </li>
              <li className="flex gap-2">
                <div className=" pl-4 md:pl-6 before:content-[''] before:absolute before:top-2 before:left-0 relative before:w-2 before:h-2 before:bg-primary">
                  <H4>Efficiency</H4>
                  <Paragraph className="text-text-muted pt-1">
                    As your IT consultant Dubai, we help you reduce the risks by
                    making cybersecurity improvements. Plus, with our IT support
                    and setup, you can enhance performance and maximize
                    productivity, thus, improving efficiency.
                  </Paragraph>
                </div>
              </li>
              <li className="flex gap-2">
                <div className=" pl-4 md:pl-6 before:content-[''] before:absolute before:top-2 before:left-0 relative before:w-2 before:h-2 before:bg-primary">
                  <H4>Efficiency</H4>
                  <Paragraph className="text-text-muted pt-1">
                    As your IT consultant Dubai, we help you reduce the risks by
                    making cybersecurity improvements. Plus, with our IT support
                    and setup, you can enhance performance and maximize
                    productivity, thus, improving efficiency.
                  </Paragraph>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-10">
        <div className="relative">
          <Image
            src="/uploads/about-banner2.jpg"
            className="md:object-cover w-auto"
            fill
            priority
            alt="banner about us 2"
          />
        </div>
        <div className="relative md:hidden">
          <Image
            src="/uploads/about-banner2.jpg"
            width={600}
            height={300}
            className="w-full h-auto object-cover "
            priority
            alt="banner about us 2"
          />
        </div>
        <div className="text-text-on-dark md:py-10 p-4 flex flex-col gap-4 lg:py-16 py-10 md:pr-10 lg:pr-20">
          <H2 className="lg:text-5xl ">Why Choose Us?</H2>
          <Paragraph>
            If your organization is through new internal procedures, running
            into issues with its culture, or just needs a new business plan to
            reflect your vision for the future, consulting services are
            essential. Therefore, the first step you should take if you want to
            make improvements in your business is to choose Us. <br></br>
            <br></br>
            We can adapt our solutions to support a range of change activities,
            from small tactical improvements to significant transformational
            programs. Our experts and experienced business advisors in
            Dubai prioritize the needs of their customers. Hence, their
            motivation is to deliver greatness. Additionally, they are able to
            work effectively with numerous business and technical firms while
            navigating and managing difficult tasks.
          </Paragraph>
        </div>
      </section>

      <PartnerSlider partners={partners} />
      <ContactForm />
      <FaqSection faqs={faqs} />
    </section>
  );
}
