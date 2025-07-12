"use client";

import { Switch } from "@heroui/switch";
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
          <span className={className}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="4" cy="4" r="2" fill="#00C2FF" />
              <circle cx="12" cy="6" r="1.5" fill="#00C2FF" />
              <circle cx="20" cy="4" r="1.8" fill="#00C2FF" />
              <circle cx="6" cy="12" r="1" fill="#00C2FF" />
              <circle cx="16" cy="10" r="2" fill="#00C2FF" />
              <circle cx="10" cy="18" r="1.2" fill="#00C2FF" />
              <circle cx="18" cy="18" r="1.5" fill="#00C2FF" />
            </svg>
          </span>
        ) : (
          <span className={className}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="4" cy="4" r="2" fill="#999999" />
              <circle cx="12" cy="6" r="1.5" fill="#999999" />
              <circle cx="20" cy="4" r="1.8" fill="#999999" />
              <circle cx="6" cy="12" r="1" fill="#999999" />
              <circle cx="16" cy="10" r="2" fill="#999999" />
              <circle cx="10" cy="18" r="1.2" fill="#999999" />
              <circle cx="18" cy="18" r="1.5" fill="#999999" />
            </svg>
          </span>
        )
      }
    />
  );
}
