import type { Metadata } from "next";
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
      <body className="overflow-hidden w-screen h-screen flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
