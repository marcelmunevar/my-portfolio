import React from "react";
import Heading3 from "./Heading-3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ResumeItemProps {
  date: string;
  title: string;
  institution: string;
  distinction?: string;
}

const ResumeItem: React.FC<ResumeItemProps> = ({
  date,
  title,
  institution,
  distinction,
}) => {
  return (
    <div className=" border-2  border-zinc-800 rounded p-4 mb-4">
      <div className="flex flex-col gap-1">
        <p className="text-gray-400">{date}</p>
        <p className="">{title} </p>
        <p className="text-gray-400 font-bold">{distinction} </p>
        <p className="text-gray-400">{institution}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
