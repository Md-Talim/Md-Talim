import NavBar from '@/components/NavBar';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Mohammad Talim',
  description: "Talim's Website",
};

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} container mx-auto grid min-h-screen max-w-5xl grid-rows-[100px,_1fr] bg-darker text-light`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
