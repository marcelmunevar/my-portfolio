import { Suspense } from "react";
import Post from "@/components/blog/Post";
import BlogPostSkeleton from "@/components/blog/PostSkeleton";
import { getPosts } from "@/utils/getPosts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function BlogPage({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <Suspense fallback={<BlogPostSkeleton />}>
      <Post params={resolvedParams} />
    </Suspense>
  );
}
