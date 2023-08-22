import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
export const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, xl: 3 }}
        padding={"10px"}
        spacing={10}
      >
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
