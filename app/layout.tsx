import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruei\'s Blog",
  description: "Ruei\'s Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="mx-auto px-6 py-10 max-w-2xl bg-[--bg] text-[--text]">
        <header className="mb-14 flex items-center">
            <h3 className="font-black text-2xl">Ruei&apos;s blog</h3>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
