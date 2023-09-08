import { Layout } from '@/components/Layout';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import local from 'next/font/local';
import { Providers } from './providers';

const primaryFont = local({
  src: '../fonts/primaryFont.ttf',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Md. Talim',
    default: 'Md. Talim - Frontend Developer, Programmer, and College Student',
  },
  description: 'I’m Talim, a Frontend Developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className={`flex h-full bg-zinc-50 ${primaryFont.className}`}>
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
