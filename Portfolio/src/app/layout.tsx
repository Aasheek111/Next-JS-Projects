import type { Metadata } from "next";
import { Keania_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const keania = Keania_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Aashik Gautam Portfolio",
  description: "Aashik Gautam - Full Stack Developer and Mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${keania.className} bg-black text-white px-20`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
