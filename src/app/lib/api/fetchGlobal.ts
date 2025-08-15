import { fetchSettings } from "./fetchSettings";
import { fetchCollection } from "./fetchCollection";
import type { Service } from "@/app/lib/types/services";
import type { Industry } from "@/app/lib/types/industries";
import type { Setting } from "@/app/lib/types/settings";
import { Faq } from "../types/faqs";
import { fetchFaqs } from "./faqs";
import { fetchPartners } from "./FetchImage";
import type { LogoPartner } from "../types/logoPartners";
export async function getGlobalData() : Promise<{
  settings: Setting;
  services: Service[];
  industries: Industry[];
  faqs: Faq[];
  partners: LogoPartner[];

}> {
  const [settings, services, industries,faqs,partners] = await Promise.all([
    fetchSettings(),
    fetchCollection<Service>("services"),
    fetchCollection<Industry>("industries"),
    fetchFaqs(),
    fetchPartners(),
  ]);

  return {
    settings,
    services,
    industries,
    faqs,
    partners,
  };
}


