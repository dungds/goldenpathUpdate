import type { LogoPartner } from "../types/logoPartners";

export async function fetchPartners(): Promise<LogoPartner[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log("[fetchPartners] called at", new Date().toISOString());

  const res = await fetch(`${baseUrl}/api/partner`, {
    // next: {
    //   revalidate: 3000,
    //   tags: ["partner"],
    // },
    cache: "no-store"
  });

  if (!res.ok) throw new Error("Failed to fetch partners");

  const data = await res.json();
  return data.data;
}
