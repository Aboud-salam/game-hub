import { Badge } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
interface Props {
  game: Game;
}
export const CardBadge = ({ game }: Props) => {
  let color =
    game.metacritic >= 90 ? "green" : game.metacritic >= 75 ? "yellow" : "red";
  return (
    <Badge paddingX={2} borderRadius={4} fontSize={"md"} colorScheme={color}>
      {game.metacritic}
    </Badge>
  );
};
