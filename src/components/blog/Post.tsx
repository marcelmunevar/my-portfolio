import { Card, CardBody, CardHeader } from "@heroui/card";
import { Snippet } from "@heroui/snippet";
import Heading1 from "../common/Heading-1";
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
import { Asset, EmbeddedImage, formatDate, PostSingle } from "@/utils/getPosts";

interface PostProps {
  post: PostSingle;
  image: string;
  assets: Asset[];
  entries: EmbeddedImage[];
}
export default function Post({ post, image, assets, entries }: PostProps) {
  const content = post.fields.content;

  let renderedContent;

  if (content && content.nodeType) {
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
          const entryId = node.data.target.sys.id;

          const entry = entries.find((entry) => entry.sys.id === entryId);

          if (!entry) {
            return null;
          }

          const assetId = entry.fields.image.sys.id;

          const asset = assets.find((asset) => asset.sys.id === assetId);

          if (!asset) {
            return null;
          }

          const imageUrl = `https:${asset.fields.file.url}`;

          return (
            <figure
              className={`mb-4 fade-in-right ${
                entry.fields.fullWidth ? "w-full" : ""
              }`}
            >
              <Image
                src={imageUrl}
                width={asset.fields.file.details?.image?.width ?? 800}
                height={asset.fields.file.details?.image?.height ?? 533}
                alt={entry.fields.caption || entry.fields.internalName}
                className="rounded-lg w-full h-auto"
              />

              {entry.fields.caption && (
                <figcaption className="text-sm text-default-500 mt-2">
                  {entry.fields.caption}
                </figcaption>
              )}
            </figure>
          );
        },
        [BLOCKS.PARAGRAPH]: (
          node: Block | Inline,
          children: React.ReactNode,
        ) => <p className="mb-4 fade-in-right">{children}</p>,
        [INLINES.HYPERLINK]: (
          node: Block | Inline,
          children: React.ReactNode,
        ) => (
          <a href={node.data.uri} target="_blank" className="text-primary">
            {children}
          </a>
        ),
        [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
          <ul className="list-disc pl-4 fade-in-right">{children}</ul>
        ),
        [BLOCKS.HEADING_2]: (
          node: Block | Inline,
          children: React.ReactNode,
        ) => (
          <h2 className="text-xl lg:text-2xl leading-none tracking-tight mb-4 fade-in-right">
            {children}
          </h2>
        ),
        [BLOCKS.HEADING_3]: (
          node: Block | Inline,
          children: React.ReactNode,
        ) => (
          <h3 className="text-xl lg:text-2xl leading-none tracking-tight mb-4 fade-in-right">
            {children}
          </h3>
        ),
        [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => (
          <Snippet
            symbol=""
            classNames={{
              base: "mb-4", // or any classes you want to override/add
              content: "mt-4",
              pre: "whitespace-pre-wrap",
            }}
          >
            {children}
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
      options,
    );
  } else if (typeof content === "string") {
    renderedContent = <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl my-4">
      <ClientBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/blog" },
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
            className="mb-4 fade-in-right"
            priority={true}
          />

          <p className="text-default-500 mb-4 fade-in-right">
            {formatDate(post.fields.publishedDate)}
          </p>
          {renderedContent}
        </CardBody>
      </Card>
    </div>
  );
}
