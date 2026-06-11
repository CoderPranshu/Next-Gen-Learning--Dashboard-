import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LearnHub Dashboard",
  description: "Modern Learning Dashboard built with Next.js, Supabase, Tailwind CSS and Framer Motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-black text-white">

        <MobileNav />

        <main className="min-h-screen flex">

          <Sidebar />

          <div className="flex-1">
            {children}
          </div>

        </main>

      </body>
    </html>
  );
}