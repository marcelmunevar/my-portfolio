import Link from "next/link";
import { Card, CardBody } from "@heroui/card";
import Image from "next/image";
import { formatDate, getImage } from "@/utils/getPosts";
import { PostSingle, PostsResponse } from "@/utils/getPosts";

interface BlogCardProps {
  post: PostSingle;
  posts: PostsResponse;
}

export default function BlogCard({ post, posts }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.fields.slug}`}>
      <Card className="h-full fade-in-right">
        <CardBody className="h-full justify-between">
          <h3 className="text-xl lg:text-2xl tracking-tight text-primary mb-4">
            {post.fields.title}
          </h3>
          <Image
            src={getImage(posts, post)}
            width={584}
            height={389}
            alt={post.fields.title}
            className="mb-4"
            priority={true}
          />
          <p className="mb-4">{post.fields.shortDescription}</p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-default-500">
              {formatDate(post.fields.publishedDate)}
            </p>
            <div className="w-12 h-12 rounded-full overflow-hidden inline-block">
              <Image
                src="/marcel.png"
                alt="Marcel"
                width={40}
                height={40}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
