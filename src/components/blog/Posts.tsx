import BlogCard from "@/components/blog//BlogCard";
import { PostSingle, PostsResponse } from "@/utils/getPosts";

interface PostsProps {
  posts: PostsResponse;
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.items.map((post: PostSingle) => (
        <BlogCard key={post.fields.slug} post={post} posts={posts} />
      ))}
    </div>
  );
}
