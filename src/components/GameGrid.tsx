import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import { CardSkeleton } from "./CardSkeleton";
export const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, xl: 3 }}
        padding={"10px"}
        spacing={10}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              <CardSkeleton key={Skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
