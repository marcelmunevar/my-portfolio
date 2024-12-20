"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";

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
    <div className="p-4">
      <div className="flex flex-col gap-1">
        <Image
          className="mb-2 rounded-lg border-1 border-gray-600"
          src={imgsrc}
          width={796}
          height={540}
          alt=""
        />
        <p className="text-lg">{title}</p>
        <p className="text-zinc-400 text-xs mb-4">{tech}</p>
        <div>
          {pageHref ? (
            <Button
              color="primary"
              as={Link}
              href={pageHref}
              target="_blank"
              className="mr-4"
            >
              View Page
            </Button>
          ) : (
            false
          )}
          {repoHref ? (
            <Button
              color="primary"
              as={Link}
              href={repoHref}
              target="_blank"
              variant="bordered"
            >
              View Repo
            </Button>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
