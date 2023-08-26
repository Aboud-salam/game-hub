import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSearch: (searcText: string) => void;
}
const SearchingBox = ({ onSearch }: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchInput.current) onSearch(searchInput.current.value);
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
