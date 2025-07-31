"use client";
import { use } from "react";
import Image from "next/image";
import { services, industries } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FraSection";
import ServiceSection from "@/components/ServiceSection";
import { H2, Paragraph, Button, H3, H4 } from "@/components/ui";
import { useState } from "react";

export default function IndustryDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const industry = industries.find((s) => s.id.toString() === id);
  if (!industry) return notFound();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // chặn reload trang
    console.log("Send contact:", form); // kiểm tra kết quả
  };
  return (
    <section>
      <section className="pt-4 md:pt-6 grid grid-cols-1 md:grid-cols-2 section-container gap-4 md:gap-8 lg:gap-12">
        <div>
          <Image
            src={industry.image}
            alt="image service"
            height={400}
            width={600}
          />
        </div>
        <div className="text-text-on-dark flex flex-col gap-4 md:gap-6 md:pyy-14 py-6 pb-10 ">
          <H2 className="text-3xl md:text-4xl lg:text-5xl">{industry.title}</H2>
          <Paragraph className="md:text-lg lg:text-xl">
            {industry.description}
          </Paragraph>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-background-neutral px-4 py-10 md:py-16 md:px-10 lg:px-20">
          <H2 className="pb-4">
            Business and IT Consultants in UAE: Unlocking Success with Expertise
          </H2>
          <Paragraph>
            Managing your IT infrastructure can be challenging if you do not
            have enough experts in your company. Consequently, requesting IT
            consultancy services in Dubai can help you overcome the challenges
            you may face with technology. We provide managed IT services focused
            on maintaining and monitoring your IT systems to get rid of
            unnecessary stress and ensure everything runs smoothly.<br></br>
            <br></br>
            We are proud of our team of business and IT consultants in UAE
            because they focus on delivering the best service to our clients.
            You can start taking advantage of all the benefits an IT consulting
            firm in Dubai like ours can provide to your business. With our
            unmatched assistance, you can focus on your core activities while we
            manage your IT infrastructure.
          </Paragraph>
        </div>
        <div className="bg-primary px-4 py-10 md:py-16  md:px-10 lg:px-20">
          <div className="pb-4 ">
            <Paragraph className="text-lg font-medium ">
              Ready to expand in Dubai and the UAE? Our expert advice helps you
              make the right decisions for lasting growth.
            </Paragraph>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-background-neutral px-4 py-6  "
          >
            <input
              name="name"
              onChange={handleChange}
              placeholder="Name"
              value={form.name}
              className="w-full bg-background-light p-2 border border-gray-300  focus:border-primary focus:outline-none text-text-primary"
            />
            <input
              name="email"
              onChange={handleChange}
              placeholder="Email*"
              value={form.email}
              className="w-full bg-background-light  p-2  border border-gray-300  focus:border-primary focus:outline-none"
            />

            <Button type="submit" variant="dark" className=" px-12 py-2 ">
              Submit
            </Button>
          </form>
        </div>
      </section>

      <section className="relative bg-[url(/img/bg-black-wave.png)] bg-no-repeat bg-cover">
        <div className=" gap-4 md:gap-8 pt-14 md:pt-20  md:py-10  grid grid-cols-1 md:grid-cols-2 md:section-container  ">
          <div className="px-4 md:px-0">
            <H2 className="lg:text-5xl text-text-on-dark">Why you Need us? </H2>
            <ul className="text-text-on-dark py-6 md:py-10 flex flex-col gap-4 ">
              <li className="flex gap-2">
                <div className=" pl-6 before:content-[''] before:absolute before:top-1.5 before:left-0 relative before:w-2 before:h-2 before:bg-primary">
                  <H4>Efficiency</H4>
                  <Paragraph className="text-text-dark-muted pt-1">
                    As your IT consultant Dubai, we help you reduce the risks by
                    making cybersecurity improvements.
                  </Paragraph>
                </div>
              </li>
              <li className="flex gap-2">
                <div className=" pl-6 before:content-[''] before:absolute before:top-1.5 before:left-0 relative before:w-2 before:h-2 before:bg-primary">
                  <H4>Efficiency</H4>
                  <Paragraph className="text-text-dark-muted pt-1">
                    As your IT consultant Dubai, we help you reduce the risks by
                    making cybersecurity improvements. Plus, with our IT support
                    and setup
                  </Paragraph>
                </div>
              </li>
              <li className="flex gap-2">
                <div className=" pl-6 before:content-[''] before:absolute before:top-1.5 before:left-0 relative before:w-2 before:h-2 before:bg-primary">
                  <H4>Efficiency</H4>
                  <Paragraph className="text-text-dark-muted pt-1">
                    As your IT consultant Dubai, we help you reduce the risks by
                    making cybersecurity improvements. Plus, with our IT support
                    and setup, you can enhance performance and maximize
                    productivity, thus, improving efficiency.
                  </Paragraph>
                </div>
              </li>
            </ul>
          </div>
          <div className=" ">
            <div className="flex relative text-center md:justify-self-center md:center">
              <Image
                src={"/img/decor.png"}
                alt="decor"
                className=" hidden md:block absolute -left-6 -bottom-6"
                width={120}
                height={120}
              />
              <Image
                src="/uploads/services-banner2.png"
                width={600}
                height={300}
                className=" w-full max-w-[500px] h-auto object-cover "
                priority
                alt="banner about us 2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="md:section-container bg-background-neutral grid grid-cols-1 md:grid-cols-2 pt-10 md:gap-4 lg:gap-10 md:py-20">
        <div className="flex md:justify-self-center order-2 md:order-1">
          <Image
            src="/uploads/services-banner3.png"
            width={600}
            height={300}
            className="w-full h-auto object-cover "
            priority
            alt="banner about us 2"
          />
        </div>
        <div className="order-1 md:order-2 text-text-primary md:py-10  px-4 flex flex-col gap-4 lg:py-16 pb-10 ">
          <H2 className="lg:text-5xl ">Benefits</H2>
          <Paragraph>
            If your organization is through new internal procedures, running
            into issues with its culture, or just needs a new business plan to
            reflect your vision for the future, consulting services are
            essential. Therefore, the first step you should take if you want to
            make improvements in your business is to choose Us. <br></br>
            <br></br>
            We can adapt our solutions to support a range of change activities,
            from small tactical improvements to significant transformational
            programs. Our experts.
          </Paragraph>
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
      <ServiceSection />

      <section className="py-8 md:py-14 bg-background-neutral section-container">
        <H2 className="md:pb-4">Industries</H2>
        <ul className=" py-4 flex gap-2 flex-wrap">
          {industries.map((industry) => (
            <li
              className=" bg-background hover:bg-primary font-semibold px-8 py-4 md:px-16 md:py-4 rounded-sm"
              key={industry.id}
            >
              <Link href={`/industries/${industry.id}`}>{industry.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactForm />
      {/* <FaqSection /> */}
    </section>
  );
}
