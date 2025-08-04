import Image from "next/image";
import { H1, Paragraph, Button, H3 } from "@/components/ui";
import type { Setting } from "@/app/lib/types/settings";
export default function HeroSection({ settings }: { settings: Setting }) {
  return (
    <section className="">
      <div className="md:gap-10 lg:gap-30 md:pt-12 pb-10 text-text-on-dark  md:px-10 lg:px-20 grid grid-cols-1  gap-6 items-center md:grid-cols-[3fr_4fr] bg-[url(/img/bg-hero.jpg)] bg-no-repeat bg-center">
        <div className="order-2 md:order-1 mx-4 md:mx-0 pt-6 pb-6 md:pb-10">
          <H1>{settings.banner_title}</H1>
          <Paragraph className="md:text-xl pt-2 md:pt-6 pb-6 md:pb-10">
            {settings.banner_description}
          </Paragraph>
          <Button href="/about" className="">
            Contact Us
          </Button>
        </div>
        <div className=" relative  order-1 md:order-2 h-full">
          <div className=" relative inset-0 ">
            {settings.main_banner_url && (
              <Image
                src={settings.main_banner_url}
                alt="Hero Banner"
                fill={false}
                width={800}
                height={400}
                className="md:max-h-[500px] w-full h-auto object-contain relative md:absolute top-0"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
