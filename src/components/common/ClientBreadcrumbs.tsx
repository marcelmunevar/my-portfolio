"use client";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

interface ClientBreadcrumbsProps {
  items: {
    label: string;
    href: string;
  }[];
}

export default function ClientBreadcrumbs({ items }: ClientBreadcrumbsProps) {
  return (
    <Breadcrumbs className="mb-4">
      {items.map((item) => (
        <BreadcrumbItem
          key={item.href}
          href={item.href}
          classNames={{
            item: "whitespace-normal break-words",
          }}
        >
          {item.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
