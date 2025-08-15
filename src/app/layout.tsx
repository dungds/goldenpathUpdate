import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getGlobalData } from "./lib/api/fetchGlobal";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// let globalDataCache: Awaited<ReturnType<typeof getGlobalData>>;
// async function getDataOnce() {
//   if (!globalDataCache) {
//     globalDataCache = await getGlobalData();
//   }
//   return globalDataCache;
// }
const { settings, services, industries } = await getGlobalData();

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: settings?.meta_title || "Default Title",
    description: settings?.meta_description || "Default description",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header
          settings={settings}
          services={services}
          industries={industries}
        />
        <main className="bg-background-inverse pt-16 md:pt-24">{children}</main>
        <Footer
          settings={settings}
          services={services}
          industries={industries}
        />
      </body>
    </html>
  );
}
