import type { Metadata } from "next";
import Heading1 from "../components/Heading-1";
import { Suspense } from "react";
import BlogCardSkeleton from "../components/PostListSkeleton";
import PostList from "../components/PostList";

export const metadata: Metadata = {
  title: "Blog | Marcel's Portfolio",
  description:
    "Read my latest thoughts and insights on web development, including React, Next.js, and full-stack development.",
};

export default function BlogHome() {
  return (
    <div>
      <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl mb-8">
        <Heading1 text="Blog" />
        <Suspense fallback={<BlogCardSkeleton />}>
          <PostList />
        </Suspense>
      </div>
    </div>
  );
}
