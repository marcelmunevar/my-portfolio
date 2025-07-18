import React from "react";
import { Card, CardBody } from "@heroui/card";

interface ResumeMultiItemProps {
  institution: string;
  items: Array<{
    title: string;
    date: string;
    distinction?: string;
  }>;
}

const ResumeMultiItem: React.FC<ResumeMultiItemProps> = ({
  institution,
  items,
}) => {
  return (
    <Card className="mb-6">
      <CardBody className="flex flex-col gap-2">
        <p className="text-xl font-bold text-default-900 mb-1">{institution}</p>
        <div className="flex flex-col gap-3">
          {items.map(({ title, date, distinction }, idx) => (
            <div key={idx} className="flex flex-col gap-0.5">
              <p className="text-xs text-default-400 mb-1">{date}</p>
              <p className="text-base font-semibold text-default-800 leading-tight">
                {title}
              </p>
              {distinction && (
                <p className="italic text-primary-600 text-sm mb-1">
                  {distinction}
                </p>
              )}
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default ResumeMultiItem;
