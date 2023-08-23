import {
  Card,
  CardBody,
  Image,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
interface Props {
  url: string;
}
export const CardSkeleton = ({ url }: Props) => {
  return (
    <>
      <Card width="400px" borderRadius={10} overflow={"hidden"}>
        <Skeleton>
          <Image src={url} />
        </Skeleton>
        <CardBody>
          <SkeletonText my={1} noOfLines={3} spacing="1" skeletonHeight="4" />
        </CardBody>
      </Card>
    </>
  );
};
