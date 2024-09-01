import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
        <div>
          <h1>LAB01</h1>
          <Link href="/">......Home</Link>{"......"}<Link href="/pokemon">Pokemon</Link>
          {"......"}
          <Link href="/aboutme">AboutMe......</Link>
        </div>
        {children}
        </header>
      </body>
    </html>
  );
}
