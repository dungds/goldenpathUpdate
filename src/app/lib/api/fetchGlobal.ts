import { fetchSettings } from "./fetchSettings";
import { fetchCollection } from "./fetchCollection";
import type { Service } from "@/app/lib/types/services";
import type { Industry } from "@/app/lib/types/industries";
import type { Setting } from "@/app/lib/types/settings";
export async function getGlobalData() : Promise<{
  settings: Setting;
  services: Service[];
  industries: Industry[];
}> {
  const [settings, services, industries] = await Promise.all([
    fetchSettings(),
    fetchCollection<Service>("services"),
    fetchCollection<Industry>("industries"),
  ]);

  return {
    settings,
    services,
    industries,
  };
}


