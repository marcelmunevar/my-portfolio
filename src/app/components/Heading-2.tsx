import React from "react";

interface HeadingProps {
  text: string;
}

const Heading2: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-8">
      <h2 className="text-2xl lg:text-4xl font-bold leading-none tracking-tight mr-16 mb-4 lg:mb-0">
        {text}
      </h2>
    </div>
  );
};

export default Heading2;
