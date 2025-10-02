export interface Card {
  sys: {
    id: string;
  };
  fields: {
    heading: string;
    description: string;
    icon: string;
    footerText?: string;
    footerLink?: string;
    chips?: string;
    twoColumnSpan?: boolean;
  };
}

export interface HomepagePost {
  fields: {
    title: string;
    cards: { sys: { id: string } }[];
    order: number;
  };
}

export interface Asset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
    };
  };
}

export interface HomepagePostsResponse {
  items: HomepagePost[];
  includes: {
    Asset: Asset[];
    Entry?: Card[];
  };
}

export async function getHomepagePosts(): Promise<HomepagePostsResponse> {
  const data = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?content_type=homepage&include=2&order=fields.order`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );

  const posts: HomepagePostsResponse = await data.json();
  return posts;
}

// Get referenced cards for a homepage post
export function getReferencedCards(
  posts: HomepagePostsResponse,
  post: HomepagePost
): Card[] {
  if (!post.fields.cards || !posts.includes.Entry) return [];
  const cardIds = post.fields.cards.map((ref) => ref.sys.id);
  // Preserve order from reference field
  const entries = posts.includes.Entry ?? [];
  return cardIds
    .map((id) => entries.find((entry: Card) => entry.sys.id === id))
    .filter((entry): entry is Card => !!entry);
}
