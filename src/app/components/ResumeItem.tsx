import React from "react";
import { Card, CardBody } from "@nextui-org/card";

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
    <Card className="mb-4">
      <CardBody>
        <p className="text-default-500">{date}</p>
        <p className="">{title} </p>
        <p className="">{distinction} </p>
        <p className="text-default-500">{institution}</p>
      </CardBody>
    </Card>
  );
};

export default ResumeItem;
