import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";

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
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body className="">
        <Providers>
          <GoogleAnalytics gaId="G-EV253K0KMF" />
          <Navigation />
          {children}
          <footer className="text-center bg-content1 p-5">
            <p>Marcel M &copy; 2025</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
