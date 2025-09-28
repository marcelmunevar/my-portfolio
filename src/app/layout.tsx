import type { Metadata } from "next";
import Navigation from "../components/common/Navigation";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "@heroui/link";
import BackToTopButton from "../components/common/BackToTopButton";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcel's Portfolio",
  description:
    "Explore my portfolio showcasing responsive designs, cutting-edge web development techniques, and seamless user experiences.",
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
          <BackToTopButton />
          <footer className="text-center bg-content1 p-5">
            <div className="container max-w-4xl m-auto flex flex-row justify-between items-center">
              <div>
                <p>Marcel M &copy; 2025</p>
              </div>
              <div className="">
                <Link
                  isExternal
                  href="https://www.linkedin.com/in/marcelmunevar/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-4xl text-secondary mx-2"
                  />
                </Link>
                <Link
                  isExternal
                  href="https://github.com/marcelmunevar?tab=repositories"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-4xl text-secondary mx-2"
                  />
                </Link>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
