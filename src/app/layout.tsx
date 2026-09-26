import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
});

const serifFont = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "F&B Setup Proposal & Business Profile | We Build F&B Businesses",
  description:
    "Interactive F&B Business Proposal & Case Study. We help entrepreneurs build and launch their own F&B concepts using real operating experience and POS sales performance data.",
  keywords: [
    "F&B Setup",
    "F&B Proposal",
    "Restaurant Consulting",
    "Setup Quán Lẩu Bò",
    "Tư Vấn Mô Hình F&B",
    "Case Study F&B",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${sansFont.variable} ${serifFont.variable} ${monoFont.variable} font-sans bg-[#0A0A0C] text-[#F4F4F6] antialiased selection:bg-amber-500 selection:text-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}
