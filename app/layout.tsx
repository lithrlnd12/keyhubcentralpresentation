import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KeyHub Central — Pitch Deck",
  description:
    "Unified Business Management for Contracting Companies. Stop juggling tools. Start running your business.",
  openGraph: {
    title: "KeyHub Central — Pitch Deck",
    description: "One Platform. Everything Connected.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-bg-darker text-white`}>
        {children}
      </body>
    </html>
  );
}
