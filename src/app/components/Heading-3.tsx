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
        <FontAwesomeIcon
          icon={icon}
          className="text-xl text-secondary ml-2 mr-4"
        />
      )}
      <h3 className="text-xl lg:text-2xl leading-none tracking-tight">
        {text}
      </h3>
    </div>
  );
};

export default Heading3;
