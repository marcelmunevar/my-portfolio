import BlogPost from "../../components/BlogPost";

interface PageProps {
  params: { slug: string };
}

export default async function BlogPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl my-8">
      <BlogPost params={params} />
    </div>
  );
}
