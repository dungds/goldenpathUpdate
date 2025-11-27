"use client";
import { useGlobal } from "@/app/context/SiteGlobalsContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { H1, Paragraph, Button } from "@/components/ui";

export default function HeroSection() {
  const { settings } = useGlobal();
  const sectionRef = useRef(null);
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div 
        className="relative md:gap-10 lg:gap-30 md:pt-12 pb-10 text-text-on-dark md:px-10 lg:px-20 grid grid-cols-1 gap-6 items-center md:grid-cols-[3fr_4fr] bg-[url(/img/bg-hero.jpg)] bg-no-repeat bg-center"
        style={{ y, opacity }}
      >
        {/* Left Content */}
        <motion.div 
          className="order-2 md:order-1 mx-4 md:mx-0 pt-6 pb-6 md:pb-10 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <motion.span
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
            <span className="text-sm font-medium">✨ Welcome to Innovation</span>
          </motion.div>

          {/* Title with Gradient */}
          <motion.div variants={itemVariants}>
            <H1 className="relative">
              <motion.span
                className="inline-block"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, currentColor 0%, #8b5cf6 50%, currentColor 100%)",
                  backgroundSize: "200% auto",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
              >
                {settings.banner_title}
              </motion.span>
            </H1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <Paragraph className="md:text-xl pt-2 md:pt-6 pb-6 md:pb-10">
              {settings.banner_description}
            </Paragraph>
          </motion.div>

          {/* CTA Button with Magnetic Effect */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              href="/about" 
              className="relative overflow-hidden group"
            >
              <motion.span 
                className="relative z-10"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Contact Us
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute right-4 top-1/2 -translate-y-1/2"
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 mt-8 pt-8 border-t border-white/20"
          >
            {[
              { label: "Projects", value: "500+" },
              { label: "Clients", value: "200+" },
              { label: "Years", value: "10+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="cursor-default"
              >
                <motion.div
                  className="text-2xl md:text-3xl font-bold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm opacity-70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="relative order-1 md:order-2 h-full"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="relative inset-0"
            animate={floatingAnimation}
          >
            {settings.main_banner_url && (
              <>
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Image with hover effect */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={settings.main_banner_url}
                    alt="Hero Banner"
                    fill={false}
                    width={800}
                    height={400}
                    className="md:max-h-[500px] w-full h-auto object-contain relative md:absolute top-0 drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-20 h-20 border-4 border-purple-500/30 rounded-full"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
                  animate={{
                    rotate: -360,
                    y: [0, -10, 0]
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <span className="text-sm">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}