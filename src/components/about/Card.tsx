import React from "react";
import Heading3 from "../common/Heading-3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Card as HeroCard, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import Image from "next/image";

interface CardProps {
  heading: string;
  description?: string;
  icon?: IconDefinition;
  chips?: Array<string>;
  footerText?: string;
  footerLink?: string;
  twoColumnSpan?: boolean;
  imagesrc?: string | undefined;
  name?: string;
  title?: string;
}

const Card: React.FC<CardProps> = ({
  description,
  heading,
  icon,
  chips,
  footerText,
  footerLink,
  twoColumnSpan,
  imagesrc,
  name,
  title,
}) => {
  return (
    <HeroCard className={twoColumnSpan ? "col-span-2" : ""}>
      <CardBody>
        <div
          className={
            imagesrc
              ? "grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-items-center"
              : "flex flex-col lg:flex-row gap-8"
          }
        >
          {imagesrc ? (
            <div className="max-w-52 text-center">
              <Image
                alt=""
                className="w-100 mb-1 rounded-full"
                src={imagesrc}
                width={178}
                height={173}
                priority={true}
              />

              {name ? <p>{name}</p> : false}
              {title ? <p className="text-default-500">{title}</p> : false}
            </div>
          ) : (
            false
          )}
          {icon ? (
            <div>
              <FontAwesomeIcon icon={icon} className="text-6xl text-primary" />
            </div>
          ) : (
            false
          )}
          <div className="md:col-span-3">
            <Heading3 text={heading} />
            {description ? (
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            ) : (
              false
            )}
            {chips ? (
              <div className="flex gap-2 flex-wrap">
                {chips.map((chip, idx) => (
                  <Chip className="bg-chipBG text-white" key={idx}>
                    {chip}
                  </Chip>
                ))}
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </CardBody>
      {footerText && footerLink ? (
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
      ) : !footerLink && footerText ? (
        <>
          <hr />
          <CardFooter>
            <span>{footerText} </span>
          </CardFooter>
        </>
      ) : (
        false
      )}
    </HeroCard>
  );
};

export default Card;
