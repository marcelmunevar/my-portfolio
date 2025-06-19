import BlogCard from "@/components/blog//BlogCard";

interface Post {
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

interface PostsProps {
  posts: PostsResponse;
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.items.map((post: Post) => (
        <BlogCard key={post.fields.slug} post={post} posts={posts} />
      ))}
    </div>
  );
}
