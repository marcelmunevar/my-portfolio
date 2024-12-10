import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface HeadingProps {
  text: string;
  icon?: IconDefinition;
}

const Heading3: React.FC<HeadingProps> = ({ text, icon }) => {
  return (
    <div className="flex flex-row mb-4 items-center">
      {icon && (
        <FontAwesomeIcon icon={icon} className="text-xl text-cyan-400 mr-4" />
      )}
      <h2 className="text-xl lg:text-2xl font-bold leading-none tracking-tight mr-16 mb-4 lg:mb-0">
        {text}
      </h2>
    </div>
  );
};

export default Heading3;
