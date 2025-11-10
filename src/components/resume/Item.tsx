import React from "react";
import { Card, CardBody } from "@heroui/card";

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
    <Card className="mb-6 fade-in-right">
      <CardBody className="flex flex-col gap-1">
        <p className="text-xl font-bold text-default-900 mb-1">{institution}</p>
        <p className="text-xs text-default-400 mb-1">{date}</p>
        <p className="text-base font-medium text-default-800 leading-tight">
          {title}
        </p>
        {distinction && (
          <p className="italic text-primary text-sm mb-1">{distinction}</p>
        )}
      </CardBody>
    </Card>
  );
};

export default ResumeItem;
