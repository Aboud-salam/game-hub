import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchingBox from "./SearchingBox";
export const NavBar = () => {
  return (
    <HStack gap={4} padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <SearchingBox />
      <ColorModeSwitch />
    </HStack>
  );
};
