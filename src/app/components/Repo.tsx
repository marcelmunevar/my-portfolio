"use client";
import React from "react";
import Link from "next/link";

interface RepoProps {
  title: string;
  href: string;
  tech: string;
}

const Repo: React.FC<RepoProps> = ({ title, href, tech }) => {
  return (
    <Link href={href} target="_blank">
      <div className=" border-2  border-zinc-800 rounded-lg p-4 bg-gray-950 hover:bg-gray-900">
        <div className="flex flex-col gap-1">
          <p className="text-lg">{title}</p>
          <p className="text-zinc-400 text-xs">{tech}</p>
        </div>
      </div>
    </Link>
  );
};

export default Repo;
