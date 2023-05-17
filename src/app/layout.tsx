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
      <body className='container mx-auto bg-lighter'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
