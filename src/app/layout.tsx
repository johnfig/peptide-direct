import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://peptiderxdirect.com"
  ),
  title: {
    default: "PeptideRx Direct | Prescription Peptide Therapy Delivered",
    template: "%s | PeptideRx Direct",
  },
  description:
    "Physician-prescribed peptide therapy delivered to your door. BPC-157, Sermorelin, CJC-1295 & more. Licensed providers in all 50 states. Start your free consultation today.",
  keywords: [
    "peptide therapy",
    "BPC-157",
    "Sermorelin",
    "CJC-1295",
    "Ipamorelin",
    "telehealth",
    "prescription peptides",
    "peptide therapy online",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PeptideRx Direct",
    title: "PeptideRx Direct | Prescription Peptide Therapy Delivered",
    description:
      "Physician-prescribed peptide therapy delivered to your door. Licensed providers in all 50 states.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PeptideRx Direct | Prescription Peptide Therapy Delivered",
    description:
      "Physician-prescribed peptide therapy delivered to your door. Licensed providers in all 50 states.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className="font-sans antialiased">
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
