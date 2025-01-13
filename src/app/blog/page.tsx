// app/post/page.js
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/card";
import Heading1 from "../components/Heading-1";
import { parseISO, format } from "date-fns";
import { Image } from "@nextui-org/image";

// Define the types for your data
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

function Date(dateString: string) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

function getImage(posts: PostsResponse, post: Post) {
  const assetId = post.fields.featuredImage.sys.id;
  const asset = posts.includes.Asset.find((asset) => asset.sys.id === assetId);
  return asset ? `https:${asset.fields.file.url}` : "/marcel.png";
}

export default async function BlogHome() {
  const data = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?content_type=pageBlogPost&include=1`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );

  const posts = (await data.json()) as PostsResponse;

  return (
    <div>
      <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl mb-8">
        <Heading1 text="Blog" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.items.map((post: Post) => (
            <Link key={post.fields.slug} href={`/blog/${post.fields.slug}`}>
              <Card className="h-full">
                <CardBody className="h-full justify-between">
                  <h4 className="text-primary mb-4 text-xl font-bold">
                    {post.fields.title}
                  </h4>
                  <Image
                    src={getImage(posts, post)}
                    width={500}
                    height={0}
                    alt=""
                    className="mb-4"
                  />
                  <p className="mb-4">{post.fields.shortDescription}</p>

                  <p className="text-default-500">
                    {Date(post.fields.publishedDate)}
                  </p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
