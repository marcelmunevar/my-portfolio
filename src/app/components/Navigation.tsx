import React from "react";
import NavigationItem from "./NavigationItem";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

interface HeadingProps {}

const Navigation: React.FC<HeadingProps> = ({}) => {
  return (
    <div className="container mx-auto max-w-4xl flex flex-row p-1 items-center justify-end gap-4 z-10 px-4">
      <NavigationItem icon={faUser} text="About" anchor="#about" />
      <NavigationItem icon={faFile} text="Resume" anchor="#resume" />
    </div>
  );
};

export default Navigation;
