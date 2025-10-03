import React from "react";
import CardList from "./CardList";
import {
  HomepagePostsResponse,
  HomepagePost,
  getReferencedCards,
} from "@/utils/getHomepagePosts";

interface CardSectionProps {
  homepagePostsResponse: HomepagePostsResponse;
}

const CardSection: React.FC<CardSectionProps> = ({ homepagePostsResponse }) => {
  const homepageItems = homepagePostsResponse.items;

  return (
    <>
      {homepageItems.map((item: HomepagePost) => {
        const cards = getReferencedCards(homepagePostsResponse, item);
        return (
          <div key={item.fields.title}>
            <CardList title={item.fields.title} cards={cards} />
          </div>
        );
      })}
    </>
  );
};

export default CardSection;
