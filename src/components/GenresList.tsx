import { HStack, Text, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/imgae-url";
import { Spinner } from "@chakra-ui/react";
const GenresList = () => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem>
          <HStack py={2} cursor={"pointer"}>
            <Image
              src={getCroppedImgUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Text key={genre.id} fontSize={"lg"}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
