import BlogPost from "../../components/BlogPost";
import BlogPostSkeleton from "../../components/BlogPostSkeleton";
import { Suspense } from "react";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl my-8">
      <Suspense fallback={<BlogPostSkeleton />}>
        <BlogPost params={params} />
      </Suspense>
    </div>
  );
}
