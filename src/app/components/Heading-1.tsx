import React from "react";

interface HeadingProps {
  text: string;
}

const Heading1: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-8">
      <h1 className="text-4xl lg:text-6xl font-bold tracking-tight lg:mr-16 mb-4 lg:mb-0 py-4">
        {text}
      </h1>
      <div className="h-1 bg-secondary relative self-start lg:self-center w-64"></div>
    </div>
  );
};

export default Heading1;
