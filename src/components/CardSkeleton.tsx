import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const CardSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height={"266px"}></Skeleton>
        <CardBody>
          <SkeletonText my={1} noOfLines={3} spacing="1" skeletonHeight="4" />
        </CardBody>
      </Card>
    </>
  );
};
