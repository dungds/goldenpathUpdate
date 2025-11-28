import type { About } from "../types/about";

const TAGS = {
  about: "about",
} as const;

export async function fetchAbout(): Promise<About> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/api/about`;
  const tag = TAGS.about;

  console.log(
    `%c[FETCH ABOUT] → ${url}`,
    'color: blue; font-weight: bold; font-size: 14px;'
  );

  const startTime = Date.now();

  const res = await fetch(url, {
    next: {
      revalidate: 3600, 
      tags: [tag],       
    },
  });

  const duration = Date.now() - startTime;
  const cacheStatus = res.headers.get("x-vercel-cache") || "UNKNOWN";
  const isCacheHit = duration < 100;

  console.log(
    `%c[RESULT ABOUT]`,
    `color: ${isCacheHit ? "green" : "orange"}; font-weight: bold; font-size: 14px;`,
    { duration: `${duration}ms`, cache: cacheStatus, status: isCacheHit ? "⚡ CACHE HIT" : "🔄 FETCHED" }
  );

  if (!res.ok) throw new Error("Fail to fetch About Us");

  const json = await res.json();
  return json.data;
}
