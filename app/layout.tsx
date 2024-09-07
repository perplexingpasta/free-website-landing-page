// import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { CombinedProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Céleste Consulting | Helping Dermatologists with Consistent, Predictable & Loyal Patient Acquisition",
  description:
    "We help dermatologists with consistent, predictable & loyal patient acquisition. We get dermatologists more patients and help them grow their practice online by running paid ads on facebook and google and professional website development using nextjs. We also help set up their google business profile and increase google reviews on google maps of their clinic.",
  other: {
    "twitter:image": "/images/ogmeta.png",
    "twitter:card": "céleste consulting",
    "og:url": "https://www.celesteconsulting.in/",
    "og:image": "/images/ogmeta.png",
    "og:type": "website",
  },
  icons: {
    icon: ["/images/favicon.ico"],
    apple: ["/images/apple-touch-icon.png"],
    shortcut: ["/images/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <CombinedProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        {/* <Analytics /> */}
        {/* </CombinedProvider> */}
      </body>
    </html>
  );
}
