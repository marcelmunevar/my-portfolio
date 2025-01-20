import { Card, CardBody } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export default function PostListSkeleton() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <Card key={i} className="h-full">
          <CardBody className="h-full justify-between">
            <Skeleton className="rounded-lg mb-4">
              <div className="h-8 w-4/5 rounded-lg bg-default-300"></div>
            </Skeleton>

            <Skeleton className="w-full rounded-lg mb-4">
              <div className="h-48 w-full rounded-lg bg-default-300"></div>
            </Skeleton>

            <Skeleton className="w-full rounded-lg mb-4">
              <div className="h-20 w-full rounded-lg bg-default-300"></div>
            </Skeleton>

            <div className="flex flex-row items-center justify-between">
              <Skeleton className="rounded-lg">
                <div className="h-6 w-32 rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="rounded-full">
                <div className="h-10 w-10 rounded-full bg-default-300"></div>
              </Skeleton>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
