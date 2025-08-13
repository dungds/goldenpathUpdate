import { notFound } from 'next/navigation';

export async function fetchCollection<T>(endpoint: string): Promise<T[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/api/${endpoint}`, {
next: {
      revalidate: false, 
      tags: ["collection"], 
    },  });

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  const data = await res.json();
  return data.data;
}

export async function fetchItemBySlug<T>(endpoint: string, slug: string): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/${endpoint}/${slug}`, {
     next: {
      revalidate: false, 
      tags: ["collectionSlug"], 
    }, 
  });

  if (!res.ok) {
    // Nếu API trả lỗi -> điều hướng 404
    notFound();
  }
  const data = await res.json();
  return data.data;
}