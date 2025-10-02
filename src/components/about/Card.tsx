import React from "react";
import Heading3 from "../common/Heading-3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Card as HeroCard, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";

interface CardProps {
  heading: string;
  description?: string;
  icon?: IconDefinition;
  chips?: Array<string>;
  footerText?: string;
  footerLink?: string;
}

const Card: React.FC<CardProps> = ({
  description,
  heading,
  icon,
  chips,
  footerText,
  footerLink,
}) => {
  return (
    <HeroCard>
      <CardBody>
        <div className="flex flex-col lg:flex-row gap-8">
          {icon ? (
            <div>
              <FontAwesomeIcon icon={icon} className="text-6xl text-primary" />
            </div>
          ) : (
            false
          )}
          <div>
            <Heading3 text={heading} />
            {description ? (
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            ) : (
              false
            )}
            {chips
              ? chips.map((chip, idx) => <Chip key={idx}>{chip}</Chip>)
              : false}
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
    </HeroCard>
  );
};

export default Card;
