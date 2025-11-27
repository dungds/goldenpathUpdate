import { fetchSettings } from "./fetchSettings";
import { fetchCollection } from "./fetchCollection";
import type { Service } from "@/app/lib/types/services";
import type { Industry } from "@/app/lib/types/industries";
import type { Setting } from "@/app/lib/types/settings";
import { Faq } from "../types/faqs";
import { fetchFaqs } from "./faqs";
import { fetchPartners } from "./FetchImage";
import type { LogoPartner } from "../types/logoPartners";

export async function getSiteGlobals(): Promise<{
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
    settings, services, industries

  };
}
export async function getDynamicData(): Promise<{
  faqs: Faq[];
  partners: LogoPartner[];
}> {
  const [faqs, partners] = await Promise.all([
    fetchFaqs(),
    fetchPartners(),
  ]);
  console.log("[getDynamicData] result:", faqs);
  console.log("[getDynamicData] result:", partners);

  return { faqs, partners };
}


