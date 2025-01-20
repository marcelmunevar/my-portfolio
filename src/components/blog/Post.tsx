import { notFound } from "next/navigation";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Heading1 from "../common/Heading-1";
import Heading2 from "../common/Heading-2";
import { parseISO, format } from "date-fns";
import { Image } from "@nextui-org/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  Document,
  BLOCKS,
  INLINES,
  MARKS,
  Block,
  Inline,
} from "@contentful/rich-text-types";
import type { Metadata } from "next";
import { Code } from "@nextui-org/code";
import ClientBreadcrumbs from "../common/ClientBreadcrumbs";
import { Suspense } from "react";
import BlogPostSkeleton from "./PostSkeleton";

// Define the types for your data
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

interface PostsResponse {
  items: Post[];
  includes: {
    Asset: {
      sys: {
        id: string;
      };
      fields: {
        file: {
          url: string;
        };
      };
    }[];
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

// Add this new function to handle the fetch
async function getBlogPost(slug: string) {
  const data = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?content_type=pageBlogPost&include=1&fields.slug=${slug}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );

  const posts: PostsResponse = await data.json();
  return posts;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const posts = await getBlogPost(params.slug);
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

async function BlogPostContent({ slug }: { slug: string }) {
  const posts = await getBlogPost(slug);
  const post = posts.items[0];

  if (!post) {
    notFound();
  }

  const content = post.fields.content;

  let renderedContent;

  // Check if the content is a rich text Document (it should have nodeType)
  if (content && content.nodeType) {
    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (
          node: Block | Inline,
          children: React.ReactNode
        ) => <p className="mb-4">{children}</p>,
        [INLINES.HYPERLINK]: (
          node: Block | Inline,
          children: React.ReactNode
        ) => (
          <a href={node.data.uri} target="_blank" className="text-primary">
            {children}
          </a>
        ),
        [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
          <ul className="list-disc pl-4">{children}</ul>
        ),
        [BLOCKS.HEADING_3]: (
          node: Block | Inline,
          children: React.ReactNode
        ) => (
          <h3 className="text-xl lg:text-2xl leading-none tracking-tight mb-4">
            {children}
          </h3>
        ),
      },
      renderMark: {
        [MARKS.CODE]: (text: React.ReactNode) => <Code>{text}</Code>,
      },
    };
    renderedContent = documentToReactComponents(content as Document, options);
  } else if (typeof content === "string") {
    // If it's a string (HTML content), render it directly
    renderedContent = <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    <>
      <ClientBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.fields.title, href: `/blog/${post.fields.slug}` },
        ]}
      />

      <Card className="h-full">
        <CardHeader className="flex flex-col items-start">
          <Heading1 text={post.fields.title} />
        </CardHeader>
        <CardBody className="h-full">
          <Image
            src={getImage(posts, post)}
            width={800}
            height={0}
            alt={post.fields.title}
            className="mb-4"
          />

          <p className="text-default-500 mb-4">
            {Date(post.fields.publishedDate)}
          </p>
          <Heading2 text={post.fields.shortDescription} />
          {renderedContent}
        </CardBody>
      </Card>
    </>
  );
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Suspense fallback={<BlogPostSkeleton />}>
        <BlogPostContent slug={params.slug} />
      </Suspense>
    </div>
  );
}
