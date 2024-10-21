import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "South Coast Transfer",
  description: "Book your transfer now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[1200px] bg-white mx-auto antialiased" suppressHydrationWarning>
        <main className="mx-10">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
