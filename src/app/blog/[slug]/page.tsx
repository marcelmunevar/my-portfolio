import { Suspense } from "react";
import Post from "@/components/blog/Post";
import BlogPostSkeleton from "@/components/blog/PostSkeleton";
import { getPosts, getPost } from "@/utils/getPosts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const posts = await getPost(params.slug);
  const post = posts.items[0];

  if (!post) {
    return {
      title: "Post Not Found | Marcel's Portfolio",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.fields.title} | Marcel's Portfolio`,
    description: post.fields.shortDescription,
  };
}

export default async function BlogPage({ params }: PageProps) {
  const posts = await getPost(params.slug);
  const post = posts.items[0];

  if (!post) {
    notFound();
  }

  return (
    <Suspense fallback={<BlogPostSkeleton />}>
      <Post post={post} posts={posts} />
    </Suspense>
  );
}
