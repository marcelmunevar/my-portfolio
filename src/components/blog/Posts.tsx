import Link from "next/link";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { Avatar } from "@nextui-org/avatar";
import { parseISO, format } from "date-fns";
import { getPosts } from "@/utils/getPosts";

interface Post {
  fields: {
    slug: string;
    title: string;
    shortDescription: string;
    publishedDate: string;
    featuredImage: {
      sys: {
        id: string;
      };
    };
  };
}

interface Asset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
    };
  };
}

interface PostsResponse {
  items: Post[];
  includes: {
    Asset: Asset[];
  };
}

interface BlogCardProps {
  post: Post;
  posts: PostsResponse;
}

function formatDate(dateString: string) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

function getImage(posts: PostsResponse, post: Post) {
  const assetId = post.fields.featuredImage.sys.id;
  const asset = posts.includes.Asset.find((asset) => asset.sys.id === assetId);
  return asset ? `https:${asset.fields.file.url}` : "/marcel.png";
}

function BlogCard({ post, posts }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.fields.slug}`}>
      <Card className="h-full">
        <CardBody className="h-full justify-between">
          <h3 className="text-xl lg:text-2xl tracking-tight text-primary mb-4">
            {post.fields.title}
          </h3>
          <Image
            src={getImage(posts, post)}
            width={384}
            height={256}
            alt={post.fields.title}
            className="mb-4"
            priority={true}
          />
          <p className="mb-4">{post.fields.shortDescription}</p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-default-500">
              {formatDate(post.fields.publishedDate)}
            </p>
            <Avatar name="Marcel" size="md" src="/marcel.png" />
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.items.map((post: Post) => (
        <BlogCard key={post.fields.slug} post={post} posts={posts} />
      ))}
    </div>
  );
}
