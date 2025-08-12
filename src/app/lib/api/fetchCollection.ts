import { notFound } from 'next/navigation';

export async function fetchCollection<T>(endpoint: string): Promise<T[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/api/${endpoint}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  const data = await res.json();
  return data.data;
}

export async function fetchItemBySlug<T>(endpoint: string, slug: string): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/${endpoint}/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // Nếu API trả lỗi -> điều hướng 404
    notFound();
  }
  const data = await res.json();
  return data.data;
}