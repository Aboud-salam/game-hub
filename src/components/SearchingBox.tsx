import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
const SearchingBox = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        variant={"filled"}
        type="text"
        placeholder="Search games..."
      />
    </InputGroup>
  );
};

export default SearchingBox;
