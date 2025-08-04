import type { LogoPartner } from "../types/logoPartners";

export async function fetchPartners(): Promise<LogoPartner[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/api/partner`, {
    cache: "no-store", // Nếu muốn luôn lấy mới
  });

  if (!res.ok) throw new Error("Failed to fetch partners");

  const data = await res.json();
  return data.data;
}
