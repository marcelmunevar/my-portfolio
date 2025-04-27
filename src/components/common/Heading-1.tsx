import React from "react";
import { Card } from "@nextui-org/card";

interface HeadingProps {
  text: string;
}

const Heading1: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-8">
      <Card className="bg-transparent shadow-none">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight lg:mr-16 mb-4 lg:mb-0 py-4">
          {text}
        </h1>
      </Card>
      <div className="h-1 bg-secondary relative self-start lg:self-center w-64"></div>
    </div>
  );
};

export default Heading1;
