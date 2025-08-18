import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getGlobalData } from "./lib/api/fetchGlobal";
import Script from "next/script";
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

export async function generateMetadata(): Promise<Metadata> {
  const { settings } = await getGlobalData();
  console.log("Favicon from API:", settings?.favicon);

  return {
    title: settings?.meta_title || "Default Title",
    description: settings?.meta_description || "Default description",
    icons: {
      icon: [
        {
          url: settings?.favicon
            ? `${settings.favicon}?v=${Date.now()}`
            : "/favicon.ico",
          type: "image/png",
          sizes: "16x16",
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { settings, services, industries } = await getGlobalData();

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
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
