"use client";

import { Switch } from "@nextui-org/switch";
import { useConstellation } from "./ConstellationProvider";

export function ConstellationSwitcher() {
  const { isVisible, setIsVisible } = useConstellation();

  return (
    <Switch
      onValueChange={setIsVisible}
      isSelected={isVisible}
      color="primary"
      size="lg"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <span className={className}>✨</span>
        ) : (
          <span className={className}>🌌</span>
        )
      }
    />
  );
}
