"use client";

import { createContext, useContext } from "react";
import type { Service } from "@/app/lib/types/services";
import type { Industry } from "@/app/lib/types/industries";
import type { Setting } from "@/app/lib/types/settings";
interface GlobalContextType {
  settings: Setting;
  services: Service[];
  industries: Industry[];
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export function GlobalProvider({
  value,
  children,
}: {
  value: GlobalContextType;
  children: React.ReactNode;
}) {
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
