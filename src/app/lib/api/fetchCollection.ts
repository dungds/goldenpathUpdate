import { url } from 'inspector';
import { notFound } from 'next/navigation';

const TAGS = {
  settings: "settings",
  services: "services",
  industries: "industries",
  faqs: "faqs",
  partners: "partners",
} as const;

export async function fetchCollection<T>(endpoint: keyof typeof TAGS | string): Promise<T[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/api/${endpoint}`;
  const tag = TAGS[endpoint as keyof typeof TAGS] || endpoint;

  console.log(
    `%c[FETCH COLLECTION] ${endpoint} → ${url}`,
    'color: red; font-size: 16px; font-weight: bold; background: yellow; padding: 4px;'
  );

  const startTime = Date.now();
  
  const res = await fetch(url, {
    next: {
      revalidate: 86400,    
      tags: [tag],          
    },
  });

  const duration = Date.now() - startTime;
  const cacheStatus = res.headers.get('x-vercel-cache') || 'UNKNOWN';
  
  // Cache hit thường < 100ms, miss thường > 300ms
  const isCacheHit = duration < 100;
  
  console.log(
    `%c[RESULT] ${endpoint}`,
    `color: ${isCacheHit ? 'green' : 'orange'}; font-weight: bold; font-size: 14px;`,
    {
      duration: `${duration}ms`,
      cache: cacheStatus,
      status: isCacheHit ? '⚡ CACHE HIT' : '🔄 FETCHED',
      timestamp: new Date().toISOString().split('T')[1].split('.')[0]
    }
  );

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);

  const json = await res.json();
  return json.data || [];
}

export async function fetchItemBySlug<T>(
  endpoint: keyof typeof TAGS | string,
  slug: string
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
  const url = `${baseUrl}/api/${endpoint}/${slug}`;
  const tag = TAGS[endpoint as keyof typeof TAGS] || endpoint;
  
  console.log(
    `%c[FETCH ITEM] ${endpoint}/${slug} → ${url}`,
    'color: purple; font-size: 16px; font-weight: bold; background: cyan; padding: 4px;'
  );

  const startTime = Date.now();
  
  const res = await fetch(url, {
    next: {
      revalidate: 86400,
      tags: [`${tag}:${slug}`],   
    },
  });

  const duration = Date.now() - startTime;
  const cacheStatus = res.headers.get('x-vercel-cache') || 'UNKNOWN';
  const isCacheHit = duration < 100;

  console.log(
    `%c[RESULT] ${endpoint}/${slug}`,
    `color: ${isCacheHit ? 'green' : 'orange'}; font-weight: bold; font-size: 14px;`,
    {
      duration: `${duration}ms`,
      cache: cacheStatus,
      status: isCacheHit ? '⚡ CACHE HIT' : '🔄 FETCHED',
      timestamp: new Date().toISOString().split('T')[1].split('.')[0]
    }
  );

  if (!res.ok) {
    notFound(); 
  }

  const json = await res.json();
  return json.data;
}