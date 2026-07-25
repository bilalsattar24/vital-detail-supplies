import type { Metadata } from "next";
import { Barlow_Condensed, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vital Detail Supplies | Auto Detailing Supplies in Alhambra, CA",
  description:
    "Premium auto detailing supplies for professionals and enthusiasts in Alhambra. Soaps, sealants, ceramic coatings, tools, and a 24/7 spot-free water station. Full online store coming soon.",
  keywords: [
    "auto detailing supplies",
    "car detailing products",
    "Alhambra",
    "ceramic coating",
    "spot-free water",
    "Vital Detail Supplies",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${barlow.variable} h-full`}>
      <body className="min-h-full bg-ink text-foam antialiased">{children}</body>
    </html>
  );
}
