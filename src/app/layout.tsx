import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import ChatWidget from "@/components/ChatWidget";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowFirst Plumbing | North Somerset Plumber",
  description:
    "FlowFirst Plumbing, independent plumber based in Shipham with over 10 years experience. Covering North Somerset, Bath & North East Somerset, Sedgemoor and Bristol. Emergency callouts, repairs, leak detection and more.",
  keywords: [
    "plumber Shipham",
    "North Somerset plumber",
    "Bristol plumber",
    "Sedgemoor plumber",
    "emergency plumbing Somerset",
    "FlowFirst Plumbing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">
        <ScrollProgress />
        <SmoothScroll />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
