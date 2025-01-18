import { Suspense } from "react";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./PostListSkeleton";

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

export default async function PostList() {
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

  const posts = (await data.json()) as PostsResponse;

  return (
    <Suspense fallback={<BlogCardSkeleton />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.items.map((post: Post) => (
          <BlogCard key={post.fields.slug} post={post} posts={posts} />
        ))}
      </div>
    </Suspense>
  );
}
