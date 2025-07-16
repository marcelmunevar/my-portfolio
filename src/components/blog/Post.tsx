import { Card, CardBody, CardHeader } from "@heroui/card";
import { Snippet } from "@heroui/snippet";
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
import { Code } from "@heroui/code";
import ClientBreadcrumbs from "../common/ClientBreadcrumbs";
import { formatDate, PostSingle } from "@/utils/getPosts";

interface PostProps {
  post: PostSingle;
  image: string;
}

export default function Post({ post, image }: PostProps) {
  const content = post.fields.content;

  let renderedContent;

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
        [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => (
          <Snippet symbol="">
            <div className="whitespace-pre-wrap mt-4">{children}</div>
          </Snippet>
        ),
      },
      renderMark: {
        [MARKS.CODE]: (text: React.ReactNode) => <Code>{text}</Code>,
      },
      renderText: (text: string) => {
        // Split on \n and insert <br /> for soft breaks
        return text.split("\n").reduce((acc, segment, i) => {
          if (i === 0) return [segment];
          return [...acc, <br key={i} />, segment];
        }, [] as React.ReactNode[]);
      },
    };
    renderedContent = documentToReactComponents(
      content as unknown as Document,
      options
    );
  } else if (typeof content === "string") {
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
            src={image}
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
