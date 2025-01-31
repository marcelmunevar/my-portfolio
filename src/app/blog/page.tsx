import type { Metadata } from "next";
import { Suspense } from "react";
import Heading1 from "@/components/common/Heading-1";
import Posts from "@/components/blog/Posts";
import BlogCardSkeleton from "@/components/blog/PostsSkeleton";

export const metadata: Metadata = {
  title: "Blog | Marcel's Portfolio",
  description:
    "Read my latest thoughts and insights on web development, including React, Next.js, and full-stack development.",
};

export default function BlogHome() {
  return (
    <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl mb-8">
      <Heading1 text="Blog" />
      <p className="mb-4">
        I&apos;ve integrated a streaming feature on my blog page to provide a
        smoother and more dynamic reading experience. You might notice a brief
        loading animation (skeletons) while the content is being fetched, but
        rest assured, this is just a visual cue to enhance your browsing
        experience. Enjoy seamless reading!{" "}
      </p>

      <Suspense fallback={<BlogCardSkeleton />}>
        <Posts />
      </Suspense>
    </div>
  );
}
