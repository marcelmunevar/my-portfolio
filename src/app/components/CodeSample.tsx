"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CodeSampleProps {
  title: string;
  href: string;
  imgsrc: string;
  tech: string;
}

const CodeSample: React.FC<CodeSampleProps> = ({
  title,
  href,
  imgsrc,
  tech,
}) => {
  return (
    <Link href={href} target="_blank">
      <div className=" border-2  border-zinc-800 rounded-lg p-4 mb-4 bg-gray-950 hover:bg-gray-900">
        <div className="flex flex-col gap-1">
          <Image
            className="mb-2 rounded-lg"
            src={imgsrc}
            width={796}
            height={540}
            alt=""
          />
          <p className="text-lg">{title}</p>
          <p className="text-zinc-400 text-xs">{tech}</p>
        </div>
      </div>
    </Link>
  );
};

export default CodeSample;
