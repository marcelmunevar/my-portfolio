import React from "react";
import { Proficiency as proficiencyType } from "@/utils/getHomepagePosts";
import Heading2 from "../common/Heading-2";
import Proficiency from "./Proficiency";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ProficiencyListProps {
  proficiencies: proficiencyType[];
}

const ProficiencyList: React.FC<ProficiencyListProps> = ({ proficiencies }) => {
  return (
    <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
      <Heading2 text="Education" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {proficiencies.map((proficiency) => {
          const solidIcon = SolidIcons[
            proficiency.fields.icon as keyof typeof SolidIcons
          ] as IconDefinition;
          const brandIcon = BrandIcons[
            proficiency.fields.icon as keyof typeof BrandIcons
          ] as IconDefinition;
          const icon = solidIcon ?? brandIcon;
          return (
            <Proficiency
              key={proficiency.fields.heading}
              heading={proficiency.fields.heading}
              text={proficiency.fields.description}
              icon={icon}
              footerLink={proficiency.fields.footerLink}
              footerText={proficiency.fields.footerText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProficiencyList;
