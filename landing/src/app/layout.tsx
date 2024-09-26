// File: src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kaduda AI - AI-Powered SMS Solutions",
  description: "Access advanced AI tools via SMS without internet connectivity. Revolutionizing AI access for everyone.",
  keywords: ["AI", "SMS", "Artificial Intelligence", "No Internet", "Kaduda AI", "Africa", "Technology"],
  authors: [{ name: "Tanishq Gupta" }, { name: "Ernest Adams Hawi" }],
  openGraph: {
    title: "Kaduda AI - AI-Powered SMS Solutions",
    description: "Access advanced AI tools via SMS without internet connectivity.",
    url: "https://www.kadudaai.com",
    siteName: "Kaduda AI",
    images: [
      {
        url: "https://www.kadudaai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kaduda AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaduda AI - AI-Powered SMS Solutions",
    description: "Access advanced AI tools via SMS without internet connectivity.",
    images: ["https://www.kadudaai.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}