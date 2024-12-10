import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./globals.css";

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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
