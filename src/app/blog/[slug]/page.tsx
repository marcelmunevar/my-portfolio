import BlogPost from "../../components/BlogPost";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl my-8">
      <BlogPost params={params} />
    </div>
  );
}
