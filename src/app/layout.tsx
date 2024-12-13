import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

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
    <html lang="en" className={roboto.className}>
      <body className="">
        <GoogleAnalytics gaId="G-EV253K0KMF" />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
