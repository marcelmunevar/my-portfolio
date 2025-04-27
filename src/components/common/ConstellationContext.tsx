"use client";

import { createContext, useContext } from "react";

export const ConstellationContext = createContext<{
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}>({
  isVisible: true,
  setIsVisible: () => {},
});

export const useConstellation = () => useContext(ConstellationContext);
