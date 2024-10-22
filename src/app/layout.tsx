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
      <body className=" bg-white antialiased" suppressHydrationWarning>
        <main className="m-0 p-0 overflow-x-hidden">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
