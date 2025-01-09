import React from "react";
import Heading3 from "./Heading-3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";

interface ProficiencyProps {
  heading: string;
  text: string;
  icon: IconDefinition;
  footerText?: string;
  footerLink?: string;
}

const Proficiency: React.FC<ProficiencyProps> = ({
  text,
  heading,
  icon,
  footerText,
  footerLink,
}) => {
  return (
    <Card>
      <CardBody>
        <div className="flex flex-col lg:flex-row gap-8">
          <div>
            <FontAwesomeIcon icon={icon} className="text-6xl text-secondary" />
          </div>
          <div>
            <Heading3 text={heading} />
            <p>{text}</p>
          </div>
        </div>
      </CardBody>
      {footerText || footerLink ? (
        <>
          <hr />
          <CardFooter>
            <Link
              className="cursor-pointer"
              showAnchorIcon
              color="primary"
              href={footerLink}
              target="_blank"
            >
              {footerText}{" "}
            </Link>
          </CardFooter>
        </>
      ) : (
        false
      )}
    </Card>
  );
};

export default Proficiency;
