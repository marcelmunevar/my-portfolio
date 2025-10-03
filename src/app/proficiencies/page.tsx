import CardList from "../../components/about/CardList";
import {
  getHomepagePosts,
  getReferencedCards,
} from "../../utils/getHomepagePosts";
import React from "react";

export default async function Page() {
  const homepagePostsResponse = await getHomepagePosts();
  const homepageItems = homepagePostsResponse.items;

  return (
    <main className="p-8">
      {homepageItems.map((item) => {
        const cards = getReferencedCards(homepagePostsResponse, item);
        return (
          <section key={item.fields.title} className="mb-10">
            <CardList title={item.fields.title} cards={cards} />
          </section>
        );
      })}
    </main>
  );
}
