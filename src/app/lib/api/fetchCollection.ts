import { notFound } from 'next/navigation';

export async function fetchCollection<T>(endpoint: string): Promise<T[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/api/${endpoint}`;
  console.log(`[fetchCollection] Fetching: ${url} at ${new Date().toISOString()}`);
  console.log("Fetching from:", `${baseUrl}/global`);
  const res = await fetch(`${baseUrl}/api/${endpoint}`, {
    // next: { tags: [endpoint], revalidate: 3600 }
    cache: "no-store"
  });
  console.log(`[fetchCollection] Response status: ${res.status}`);

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  const data = await res.json();
  console.log(`[fetchCollection] Received ${data?.data?.length || 0} items from ${endpoint}`);
  console.log("[fetchCollection] data:", JSON.stringify(data, null, 2));

  return data.data;
}

export async function fetchItemBySlug<T>(endpoint: string, slug: string): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/${endpoint}/${slug}`, {
    // next: {
    //   revalidate: 0,
    //   tags: ["collectionSlug"],
    // },
    cache: "no-store",
  });

  if (!res.ok) {
    // Nếu API trả lỗi -> điều hướng 404
    notFound();
  }
  const data = await res.json();
  return data.data;
}