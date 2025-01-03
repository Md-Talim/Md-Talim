import { Sidebar } from "@/components/navigation";
import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const beVietnamPro = Plus_Jakarta_Sans({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--sans",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--mono",
});

export const metadata: Metadata = {
  title: "Talim's Portfolio | Full-Stack Developer",
  description:
    "Hi, I'm Talim, a full-stack developer building impactful applications and exploring core computer science concepts. Open for internships and collaborations!",
  keywords: [
    "Talim",
    "full-stack developer",
    "portfolio",
    "internships",
    "web development",
    "backend development",
    "system design",
    "operating systems",
    "databases",
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        id="root"
        className={`${beVietnamPro.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <div className="grid grid-cols-[54px_1fr]">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
