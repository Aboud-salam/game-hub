import {
  Card,
  CardBody,
  Image,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

export const CardSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height={"266px"}>
          <Image />
        </Skeleton>
        <CardBody>
          <SkeletonText my={1} noOfLines={3} spacing="1" skeletonHeight="4" />
        </CardBody>
      </Card>
    </>
  );
};
