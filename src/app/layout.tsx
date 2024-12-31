import type { Metadata } from "next";
import Head from "next/head";
import { Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "flips and turns",
  description: "Collaborative Website by 200",
  icons: {
    icon: "/logo.svg",
  },
};

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex h-dvh w-screen min-w-[300px] flex-col">
        {children}
      </body>
    </html>
  );
}
