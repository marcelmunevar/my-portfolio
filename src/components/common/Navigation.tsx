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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/use-disclosure";
import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";
import Heading3 from "@/components/common/Heading-3";

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const currentPath = usePathname();
  const menuItems = [
    { text: "About", href: "/" },
    { text: "Resume", href: "/resume" },
    { text: "Samples", href: "/samples" },
    { text: "Blog", href: "/blog" },
  ];

  return (
    <>
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
                <p className="font-bold text-inherit">
                  Marcel&apos;s Portfolio
                </p>
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
          <HeroLink
            onPress={onOpen}
            color="foreground"
            size="lg"
            className="cursor-pointer"
          >
            <FontAwesomeIcon icon={faCog} className="" />
          </HeroLink>
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Settings</ModalHeader>
            <ModalBody>
              <div className="">
                <main className="my-4 ">
                  <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl mb-12">
                    <div className="mb-8">
                      <Heading3 text="Theme Options" />
                    </div>
                    <div className=" grid grid-cols-1 gap-8">
                      <div className="flex gap-5 align-middle items-center">
                        <span>Dark/Light</span>
                        <ThemeSwitcher />
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
