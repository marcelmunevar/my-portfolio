"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

interface PageProps {
  title: string;
  pageHref?: string;
  repoHref?: string;
  imgsrc: string;
  tech: string;
}

const Page: React.FC<PageProps> = ({
  title,
  pageHref,
  repoHref,
  imgsrc,
  tech,
}) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader>
        <div className="flex flex-col">
          <h4 className="font-bold text-large">{title}</h4>
          <p className="text-tiny uppercase font-bold"></p>
          <small className="text-default-500">{tech}</small>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Image
          className="object-cover rounded-xl"
          src={imgsrc}
          width={796}
          alt=""
        />
      </CardBody>
      <Divider />
      <CardFooter className="grid grid-cols-1">
        <div>
          {pageHref ? (
            <Link
              isExternal
              showAnchorIcon
              href={pageHref}
              target="_blank"
              className="mb-2"
            >
              Visit page.
            </Link>
          ) : (
            false
          )}
        </div>
        <div>
          {repoHref ? (
            <Link
              isExternal
              showAnchorIcon
              href={repoHref}
              target="_blank"
              className="mb-2"
            >
              Visit source code on GitHub.
            </Link>
          ) : (
            false
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Page;
