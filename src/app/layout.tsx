// src/app/layout.tsx
import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { profile } from "@/content/profile";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--f-display",
  style: ["normal", "italic"],
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--f-body",
});

export const metadata: Metadata = {
  title: `${profile.name}: Research and Engineering`,
  description: profile.summary.slice(0, 160),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}