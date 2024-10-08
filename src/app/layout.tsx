import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Flips and Turns",
  description: "Collaborative Website by 200",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="flex h-screen w-screen min-w-[300px] flex-col overflow-hidden">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
