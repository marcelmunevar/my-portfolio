import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface NavigationItemProps {
  text: string;
  icon: IconDefinition;
  url: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ text, icon, url }) => {
  const currentPath = usePathname();
  return (
    <Link href={url}>
      <div
        className={`flex flex-col items-center justify-center border-2 border-zinc-800 rounded-lg ${
          currentPath === url ? "bg-red-600" : "bg-zinc-900"
        } hover:bg-red-600 w-20 h-20 `}
      >
        <FontAwesomeIcon icon={icon} className="text-xl" />
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default NavigationItem;
