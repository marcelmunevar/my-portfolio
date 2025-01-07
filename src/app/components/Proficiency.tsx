import React from "react";
import Heading3 from "./Heading-3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Card, CardBody } from "@nextui-org/card";

interface ProficiencyProps {
  heading: string;
  text: string;
  icon: IconDefinition;
}

const Proficiency: React.FC<ProficiencyProps> = ({ text, heading, icon }) => {
  return (
    <Card className="mb-4">
      <CardBody>
        <div className="flex flex-col lg:flex-row gap-8">
          <div>
            <FontAwesomeIcon icon={icon} className="text-6xl text-cyan-400" />
          </div>
          <div>
            <Heading3 text={heading} />
            <p>{text}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Proficiency;
