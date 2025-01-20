interface Post {
  fields: {
    slug: string;
    title: string;
    shortDescription: string;
    publishedDate: string;
    featuredImage: {
      sys: {
        id: string;
      };
    };
  };
}

interface Asset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
    };
  };
}

interface PostsResponse {
  items: Post[];
  includes: {
    Asset: Asset[];
  };
}


export async function getPosts(): Promise<PostsResponse> {
    const data = await fetch(
        `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?content_type=pageBlogPost&include=1`,
        {
          method: "GET", 
          headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          },
          next: { revalidate: 60 },
        }
      );
    
      
  const posts: PostsResponse = await data.json();
  return posts;  
}