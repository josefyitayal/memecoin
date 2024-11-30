import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lost Mia dog",
  description: "Cute dog name mia is lost",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/photo_2024-11-30_12-09-33.jpg"
          type="image/jpeg"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
