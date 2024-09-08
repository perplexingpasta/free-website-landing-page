import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-S1DSVVST36"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S1DSVVST36');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
