import NavBar from '@/components/NavBar';
import './globals.css';

export const metadata = {
  title: 'Mohammad Talim',
  description: "Talim's Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main className='container mx-auto flex h-screen max-w-3xl flex-col items-center gap-8 px-8 md:h-auto md:flex-row lg:min-w-[768px] lg:px-0'>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
