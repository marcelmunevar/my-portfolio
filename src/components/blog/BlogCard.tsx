import Link from "next/link";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { Avatar } from "@nextui-org/avatar";
import { formatDate, getImage } from "@/utils/getPosts";

interface Post {
  fields: {
    slug: string;
    title: string;
    content: Document;
    publishedDate: string;
    shortDescription: string;
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

export default function BlogCard({ post, posts }: BlogCardProps) {
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
