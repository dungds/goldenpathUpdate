"use client";
import { useGlobal } from "@/app/context/SiteGlobalsContext";
import { motion } from "framer-motion";
import { 
  containerVariants, 
  fadeInUpVariants 
} from "@/lib/motion-variants";
import Image from "next/image";
import { H1, Paragraph, Button } from "@/components/ui";

export default function HeroSection() {
  const { settings } = useGlobal();

  

  

  return (
    <section className="">
      <div className="md:gap-10 lg:gap-30 md:pt-12 pb-10 text-text-on-dark
       md:px-10 lg:px-20 grid grid-cols-1 gap-6 items-center
       md:grid-cols-[3fr_4fr]">
        <Image
          src="/img/bg-hero.jpg"
          alt=""
          fill
          className="absolute inset-0 object-cover -z-10"
          priority
          quality={80}
        />
        
        <motion.div 
          className="order-2 md:order-1 mx-4 md:mx-0 pt-6 pb-6 md:pb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.div variants={fadeInUpVariants}>
            <H1>{settings.banner_title}</H1>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeInUpVariants}>
            <Paragraph className="md:text-xl pt-2 md:pt-6 pb-6 md:pb-10">
              {settings.banner_description}
            </Paragraph>
          </motion.div>

          {/* Button */}
          <motion.div variants={fadeInUpVariants}>
            <Button href="/about" className="">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative order-1 md:order-2 h-full">
          <div className="relative inset-0">
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