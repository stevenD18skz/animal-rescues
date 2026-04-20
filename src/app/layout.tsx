import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taylor's Hope | Ayudemos a Taylor",
  description: "Campaña de rescate y adopción para Taylor, una gatita valiente que necesita ayuda urgente.",
  keywords: ["rescate animal", "adopción de gatos", "ayuda Taylor", "Taylor's Hope"],
  openGraph: {
    title: "Taylor's Hope | Ayudemos a Taylor",
    description: "Campaña de rescate y adopción para Taylor, una gatita valiente que necesita ayuda urgente.",
    url: "https://animal-rescues.vercel.app/",
    siteName: "Taylor's Hope",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://linktr.ee/Ayudagatica",
        width: 1200,
        height: 630,
        alt: "Taylor's Hope - Ayudemos a esta gatita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor's Hope | Ayudemos a Taylor",
    description: "Campaña de rescate y adopción para Taylor, una gatita valiente que necesita ayuda urgente.",
    images: ["https://linktr.ee/Ayudagatica"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
