import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchingBox from "./SearchingBox";
interface Props {
  onSearch: (searcText: string) => void;
}
export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack gap={4} padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <SearchingBox onSearch={(searcText) => onSearch(searcText)} />
      <ColorModeSwitch />
    </HStack>
  );
};
