import type { Faq } from "../types/faqs";
export async function fetchFaqs(): Promise<Faq[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
    throw new Error("API URL is not defined");
  }

  const res = await fetch(`${baseUrl}/api/faqs`, {
     next: {
      revalidate: false, 
      tags: ["faqs"], 
    }, 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch FAQs");
  }

  const data = await res.json();



  return data;

}