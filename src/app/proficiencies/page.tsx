import ProficiencyList from "../../components/about/ProficiencyList";
import {
  getHomepagePosts,
  getReferencedProficiencies,
} from "../../utils/getHomepagePosts";
import React from "react";

export default async function Page() {
  const homepagePostsResponse = await getHomepagePosts();
  const homepageItems = homepagePostsResponse.items;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        All Proficiencies from Homepage Items
      </h1>
      {homepageItems.map((item) => {
        const proficiencies = getReferencedProficiencies(
          homepagePostsResponse,
          item
        );
        return (
          <section key={item.fields.title} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">{item.fields.title}</h2>
            <ProficiencyList proficiencies={proficiencies} />
          </section>
        );
      })}
    </main>
  );
}
