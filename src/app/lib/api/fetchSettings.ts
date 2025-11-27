import { log } from "console";
import type { Setting } from "../types/settings";
export async function fetchSettings(): Promise<Setting> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/api/settings`, {
    // next: {
    //   revalidate: 86400,
    //   tags: ["settings"],
    // },
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch settings");
  }

  const json = await res.json();

  return json.original;
}