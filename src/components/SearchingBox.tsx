import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { GameQueryContext } from "../contexts/GameQueryContext";
const SearchingBox = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const { gameQuery, setGameQuery } = useContext(GameQueryContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchInput.current)
          setGameQuery({
            ...gameQuery,
            searchText: searchInput.current.value,
          });
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchInput}
          borderRadius={20}
          variant={"filled"}
          type="text"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchingBox;
