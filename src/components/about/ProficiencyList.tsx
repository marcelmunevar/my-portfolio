import React from "react";
import { Proficiency as proficiencyType } from "@/utils/getHomepagePosts";
import Heading2 from "../common/Heading-2";
import Proficiency from "./Proficiency";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";

interface ProficiencyListProps {
  proficiencies: proficiencyType[];
}

const ProficiencyList: React.FC<ProficiencyListProps> = ({ proficiencies }) => {
  return (
    <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
      <Heading2 text="Education" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {proficiencies.map((proficiency) => {
          const solidIcon = (SolidIcons as any)[proficiency.fields.icon];
          const brandIcon = (BrandIcons as any)[proficiency.fields.icon];
          const icon = solidIcon ?? brandIcon;
          console.log(proficiency.fields);
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
