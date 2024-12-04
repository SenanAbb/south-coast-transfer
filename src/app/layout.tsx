import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'South Coast Transfer',
  description: 'Book your transfer now!',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-white antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="m-0 p-0 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
