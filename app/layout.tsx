import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Be_Vietnam_Pro, EB_Garamond } from "next/font/google";
import "./globals.css";

const sansFont = Be_Vietnam_Pro({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const serifFont = EB_Garamond({
  weight: ["600", "800"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Md. Talim",
    default: "Md. Talim",
  },
  description: "Building experiences for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className={`${sansFont.variable} ${serifFont.variable}`}>
        <div className="max-w-5xl mx-auto py-12 px-4 min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
