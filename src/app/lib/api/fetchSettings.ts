import type { Setting } from "../types/settings";
export async function fetchSettings():Promise<Setting> {
          const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/settings`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch settings");
  }

  return res.json();
}