import BlogPost from "../../../components/blog/Post";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl my-8">
      <BlogPost params={resolvedParams} />
    </div>
  );
}
