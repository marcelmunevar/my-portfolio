import React from "react";
import { Card as CardType } from "@/utils/getHomepagePosts";
import Heading2 from "../common/Heading-2";
import Card from "./Card";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface CardListProps {
  title: string;
  cards: CardType[];
}

const CardList: React.FC<CardListProps> = ({ cards, title }) => {
  return (
    <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
      <Heading2 text={title} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((card, idx) => {
          const solidIcon = SolidIcons[
            card.fields.icon as keyof typeof SolidIcons
          ] as IconDefinition;
          const brandIcon = BrandIcons[
            card.fields.icon as keyof typeof BrandIcons
          ] as IconDefinition;
          const icon = solidIcon ?? brandIcon;
          return (
            <Card
              key={idx}
              heading={card.fields.heading}
              description={card.fields.description}
              icon={icon}
              footerLink={card.fields.footerLink}
              footerText={card.fields.footerText}
              chips={card.fields.chips ? card.fields.chips.split(/\r?\n/) : []}
              twoColumnSpan={card.fields.twoColumnSpan}
              imagesrc={card.fields.imagesrc}
              name={card.fields.name}
              title={card.fields.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
