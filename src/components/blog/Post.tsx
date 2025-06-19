import { notFound } from "next/navigation";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Heading1 from "../common/Heading-1";
import Heading2 from "../common/Heading-2";
import Image from "next/image";
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
import { getPost, formatDate, getImage } from "@/utils/getPosts";

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const posts = await getPost(params.slug);
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

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getPost(params.slug);
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
    <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl my-4">
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
            height={533}
            alt={post.fields.title}
            className="mb-4"
            priority={true}
          />

          <p className="text-default-500 mb-4">
            {formatDate(post.fields.publishedDate)}
          </p>
          <Heading2 text={post.fields.shortDescription} />
          {renderedContent}
        </CardBody>
      </Card>
    </div>
  );
}
