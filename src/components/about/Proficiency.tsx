import React from "react";
import Heading3 from "../common/Heading-3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";

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
            <FontAwesomeIcon icon={icon} className="text-6xl text-cyan-600" />
          </div>
          <div>
            <Heading3 text={heading} />
            <p dangerouslySetInnerHTML={{ __html: text }} />
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
