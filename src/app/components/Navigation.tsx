"use client";
import React from "react";
import NavigationItem from "./NavigationItem";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Navigation: React.FC = ({}) => {
  return (
    <div className="container mx-auto max-w-4xl flex flex-row p-1 items-center justify-end gap-4 z-10 px-4">
      <NavigationItem icon={faUser} text="About" url="/about" />
      <NavigationItem icon={faFile} text="Resume" url="/resume" />
    </div>
  );
};

export default Navigation;
