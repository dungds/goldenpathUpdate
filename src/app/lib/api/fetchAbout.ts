import type { About } from "../types/about";

export async function fetchAbout(): Promise<About> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const res = await fetch(`${baseUrl}/api/about`, {
    next: {
      revalidate: 86400,    // Cache 24h
      tags: ["about"],      // Tag để revalidate
    },
  });

  if (!res.ok) throw new Error("Failed to fetch About");
  
  const json = await res.json();
  return json.data || json; // Tùy structure API của bạn
}