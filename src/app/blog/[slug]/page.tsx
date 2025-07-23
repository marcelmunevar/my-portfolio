import Post from "@/components/blog/Post";
import { getPosts, getPost, getImage } from "@/utils/getPosts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Posts from "@/components/blog/Posts";
import Heading2 from "@/components/common/Heading-2";

interface BlogPageParams {
  slug: string;
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
  params: Promise<BlogPageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getPost(slug);
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

export default async function BlogPage({
  params,
}: {
  params: Promise<BlogPageParams>;
}) {
  const { slug } = await params;
  const posts = await getPost(slug);
  const post = posts.items[0];
  const image = getImage(posts, post);

  if (!post) {
    notFound();
  }

  // Fetch all posts for related posts
  const allPosts = await getPosts();
  // Filter out the current post
  const relatedPosts = {
    ...allPosts,
    items: allPosts.items.filter((p) => p.fields.slug !== slug),
  };

  return (
    <>
      <Post post={post} image={image} />
      <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl my-8">
        <Heading2 text="Related Posts" />
        <Posts posts={relatedPosts} />
      </div>
    </>
  );
}
