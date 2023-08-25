import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Highlight,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImgUrl from "../services/imgae-url";
import { Spinner } from "@chakra-ui/react";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  // const [selectedIndex, setSelectedIndex] = useState(0);
  //   handling the error by not loading the genres list , so the whole application doesn't crash
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack py={2}>
            <Image
              src={getCroppedImgUrl(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Button
              variant={"link"}
              key={genre.id}
              fontSize={"lg"}
              onClick={() => {
                onSelectGenre(genre);
              }}
            >
              {genre.id === selectedGenre?.id ? (
                <Highlight query={genre.name} styles={{ color: "orange" }}>
                  {genre.name}
                </Highlight>
              ) : (
                genre.name
              )}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
