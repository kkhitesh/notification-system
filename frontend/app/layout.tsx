import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notification System Demo",
  description: "Demo of a notification system using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <div className="h-8 bg-green-400/70 items-center flex justify-center font-semibold text-xs">🎉 Welcome! 🎉</div>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
