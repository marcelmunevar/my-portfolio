import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Marcel's React Portfolio",
  description: "My React portfolio. Built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <GoogleAnalytics gaId="G-EV253K0KMF" />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
