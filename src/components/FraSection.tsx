"use client";

import { useState } from "react";
import { H2, Paragraph } from "@/components/ui";
import { Icon } from "@iconify/react";
import type { Faq } from "@/app/lib/types/faqs";

export default function FaqSection({ faqs = [] }: { faqs?: Faq[] }) {
  if (!faqs || faqs.length === 0) {
    return <div>No FAQs found</div>;
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-container py-10 md:py-16 bg-background-neutral flex flex-col justify-center items-center">
      <H2 className="text-2xl font-bold">Frequently Asked Questions</H2>
      <Paragraph className="text-base md:text-xl text-center pt-2 md:pt-4 pb-6 md:pb-10">
        These are some of the most frequently asked questions
      </Paragraph>

      <div className="max-w-3xl mx-auto space-y-4 w-full">
        {faqs.map((faq) => {
          const isOpen = openIndex === faq.id;

          return (
            <div
              key={faq.id}
              className="bg-white px-4 p-3 w-full   rounded-md transition-all duration-300 ease-in-out"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full text-left flex gap-6 justify-between text-lg "
              >
                <span className="font-medium">{faq.question}</span>
                <span>
                  {isOpen ? (
                    <Icon icon="line-md:minus" width="24" height="24" />
                  ) : (
                    <Icon icon="line-md:plus" width="24" height="24" />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96  mt-4" : "max-h-0 "
                }`}
              >
                <div className="mb-2 text-text-muted">{faq.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
