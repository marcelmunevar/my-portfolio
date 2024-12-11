import React from "react";

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
    <div className=" border-2  border-zinc-800 rounded-lg p-4 mb-4">
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
