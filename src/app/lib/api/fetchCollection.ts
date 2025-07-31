import type { Service } from "../types/services";
export async function fetchCollection<T>(endpoint: string): Promise<T[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/${endpoint}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  const data = await res.json();
  return data.data;
}

export async function fetchItemBySlug<T>(endpoint: string, slug: string): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/${endpoint}/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}/${slug}`);
  const data = await res.json();
  return data.data;
}