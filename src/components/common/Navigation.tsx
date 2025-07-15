"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import NextLink from "next/link";
import { Link as HeroLink } from "@heroui/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const currentPath = usePathname();
  const menuItems = [
    { text: "About", href: "/" },
    { text: "Resume", href: "/resume" },
    { text: "Samples", href: "/samples" },
    { text: "Blog", href: "/blog" },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-content1"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NextLink href="/" passHref legacyBehavior>
          <HeroLink as="a" color="foreground" size="lg">
            <NavbarBrand>
              <AcmeLogo />
              <p className="font-bold text-inherit">Marcel&apos;s Portfolio</p>
            </NavbarBrand>
          </HeroLink>
        </NextLink>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => {
          const isActive = currentPath === item.href;
          return (
            <NavbarItem key={`${item.text}-${index}`} isActive={isActive}>
              <NextLink href={item.href} passHref legacyBehavior>
                <HeroLink
                  as="a"
                  color={isActive ? "primary" : "foreground"}
                  size="lg"
                >
                  {item.text}
                </HeroLink>
              </NextLink>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NextLink href="/settings" passHref legacyBehavior>
          <HeroLink
            color={currentPath === "/settings" ? "primary" : "foreground"}
            size="lg"
          >
            <FontAwesomeIcon icon={faCog} className="" />
          </HeroLink>
        </NextLink>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.text}-${index}`}
            isActive={currentPath === item.href}
          >
            <NextLink href={item.href} passHref legacyBehavior>
              <HeroLink
                onPress={() => setIsMenuOpen(!isMenuOpen)}
                color={currentPath === item.href ? "primary" : "foreground"}
                className="w-full"
                size="lg"
              >
                {item.text}
              </HeroLink>
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
