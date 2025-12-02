import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

import { GlobalProvider } from "./context/SiteGlobalsContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteGlobals } from "./lib/api/fetchGlobal";
import Script from "next/script";
export const revalidate = 3600; // ISR cho layout

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
  const { settings } = await getSiteGlobals();
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
     openGraph: {
      title: settings?.meta_title || "Default Title",
      description: settings?.meta_description || "Default description",
      images: settings?.social_share_image
        ? [
            {
              url: settings.social_share_image,
              width: 1200,
              height: 630,
              alt: settings.meta_title || "Social Share Image",
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: settings?.meta_title || "Default Title",
      description: settings?.meta_description || "Default description",
      images: settings?.social_share_image ? [settings.social_share_image] : [],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { settings, services, industries } = await getSiteGlobals();
console.log(`[RootLayout] Loaded at ${new Date().toISOString()}`);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <GlobalProvider value={{ settings, services, industries }}>

        <Header
          
        />

                  <main className="mt-20">
                    {children}</main>

        <Footer />
        </GlobalProvider>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
