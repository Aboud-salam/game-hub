import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
import { CardBadge } from "./CardBadge";
import getCroppedImgUrl from "../services/imgae-url";
import useGames from "../hooks/useGames";
import { CardSkeleton } from "./CardSkeleton";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  const { isLoaded } = useGames();
  const modImgUrl = getCroppedImgUrl(game.background_image);
  if (!isLoaded) return <CardSkeleton url={modImgUrl} />;
  return (
    <Card>
      <Image src={modImgUrl} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CardBadge game={game} />
        </HStack>
      </CardBody>
    </Card>
  );
};
