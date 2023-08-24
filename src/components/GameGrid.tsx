import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import { CardSkeleton } from "./CardSkeleton";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
interface Props {
  selectedGenre: Genre | null;
}
export const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, xl: 3 }}
        padding={"10px"}
        spacing={5}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              <CardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
