import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
import { CardBadge } from "./CardBadge";
import getCroppedImgUrl from "../services/imgae-url";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  const modImgUrl = getCroppedImgUrl(game.background_image);
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
