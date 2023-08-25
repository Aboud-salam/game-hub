import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { PlatformsList } from "./components/PlatformsList";

function App() {
  const [selectedGenre, setGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setPlatform] = useState("");
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" px={5}>
          <GenresList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformsList
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(selectedPlatform) => setPlatform(selectedPlatform)}
        />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
