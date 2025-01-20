import { Suspense } from "react";
import Post from "@/components/blog/Post";
import BlogPostSkeleton from "@/components/blog/PostSkeleton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <Suspense fallback={<BlogPostSkeleton />}>
      <Post params={resolvedParams} />
    </Suspense>
  );
}
