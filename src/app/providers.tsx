"use client";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import ScrollAnimator from "@/components/common/ScrollAnimator";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {/* Global scroll animator: watches for elements with .fade-in-right and toggles .in-view */}
        <ScrollAnimator />
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
