import type { Metadata } from "next";
import Heading1 from "@/components/common/Heading-1";
import Posts from "@/components/blog/Posts";
import ClientBreadcrumbs from "@/components/common/ClientBreadcrumbs";
import { getPosts } from "@/utils/getPosts";

export const metadata: Metadata = {
  title: "Blog | Marcel's Portfolio",
  description:
    "Read my latest thoughts and insights on web development.",
};

export default async function BlogHome() {
  const posts = await getPosts();

  return (
    <main className="my-4 ">
      <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl mb-8">
        <ClientBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
          ]}
        />
        <Heading1 text="Blog" />
        <Posts posts={posts} />
      </div>
    </main>
  );
}
