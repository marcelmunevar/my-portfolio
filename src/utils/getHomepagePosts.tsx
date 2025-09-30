import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Proficiency {
  sys: {
    id: string;
  };
  fields: {
    heading: string;
    description: string;
    icon: string;
    footerText?: string;
    footerLink?: string;
  };
}

export interface HomepagePost {
  fields: {
    slug: string;
    title: string;
    content: Document;
    publishedDate: string;
    shortDescription: string;
    featuredImage: {
      sys: {
        id: string;
      };
    };
    proficiencies?: { sys: { id: string } }[];
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
    Entry?: Proficiency[];
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

// Get referenced proficiencies for a homepage post
export function getReferencedProficiencies(
  posts: HomepagePostsResponse,
  post: HomepagePost
): Proficiency[] {
  if (!post.fields.proficiencies || !posts.includes.Entry) return [];
  const proficiencyIds = post.fields.proficiencies.map((ref) => ref.sys.id);
  return posts.includes.Entry.filter((entry: Proficiency) =>
    proficiencyIds.includes(entry.sys.id)
  );
}
