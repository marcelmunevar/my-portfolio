import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export default function BlogPostSkeleton() {
  return (
    <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl my-8">
      {/* Breadcrumbs skeleton */}
      <div className="flex gap-2 items-center mb-4">
        <Skeleton className="h-4 w-12 rounded-lg" />
        <Skeleton className="h-4 w-4 rounded-lg" />
        <Skeleton className="h-4 w-12 rounded-lg" />
        <Skeleton className="h-4 w-4 rounded-lg" />
        <Skeleton className="h-4 w-32 rounded-lg" />
      </div>

      <Card className="h-full">
        <CardHeader className="flex flex-col items-start">
          <Skeleton className="h-8 w-3/4 rounded-lg" />
        </CardHeader>
        <CardBody className="h-full space-y-4">
          <Skeleton className="rounded-lg">
            <div className="h-[400px] rounded-lg bg-default-300"></div>
          </Skeleton>

          <Skeleton className="w-48 h-4 rounded-lg" />

          <Skeleton className="w-full h-6 rounded-lg" />

          <div className="space-y-3">
            <Skeleton className="w-full h-4 rounded-lg" />
            <Skeleton className="w-full h-4 rounded-lg" />
            <Skeleton className="w-4/5 h-4 rounded-lg" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
