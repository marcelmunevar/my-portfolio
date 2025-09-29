import React from "react";
import { Proficiency as proficiencyType } from "@/utils/getHomepagePosts";
import Heading2 from "../common/Heading-2";
import Proficiency from "./Proficiency";

interface ProficiencyListProps {
  proficiencies: proficiencyType[];
}

const ProficiencyList: React.FC<ProficiencyListProps> = ({ proficiencies }) => (
  <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
    <Heading2 text="Education" />
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
      {proficiencies.map((proficiency) => (
        <Proficiency
          heading={proficiency.fields.heading}
          text={proficiency.fields.description}
          icon={proficiency.fields.icon}
          footerLink={proficiency.fields.footerLink}
          footerText={proficiency.fields.footerText}
        />
      ))}
      ;
    </div>
  </div>
);

export default ProficiencyList;
