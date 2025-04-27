"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ConstellationContext = createContext<{
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}>({
  isVisible: true,
  setIsVisible: () => {},
});

export const useConstellation = () => useContext(ConstellationContext);

export function ConstellationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get initial state from localStorage
    const savedVisibility = localStorage.getItem("constellationVisible");
    if (savedVisibility !== null) {
      setIsVisible(savedVisibility === "true");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    // Save state to localStorage when it changes
    if (mounted) {
      localStorage.setItem("constellationVisible", isVisible.toString());
    }
  }, [isVisible, mounted]);

  if (!mounted) return null;

  return (
    <ConstellationContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </ConstellationContext.Provider>
  );
}
