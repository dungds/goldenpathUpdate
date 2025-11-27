import type { Setting } from "../types/settings";
export async function fetchSettings(): Promise<Setting> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/api/settings`, {
    next: {
      revalidate: 3600,
      tags: ["settings"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch settings");
  }

  const json = await res.json();

  return json.original;
}