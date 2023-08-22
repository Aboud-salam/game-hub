import apiClient from "../services/api-client";
import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
interface Game {
  id: number;
  name: string;
}
interface FetchResponse {
  count: number;
  results: Game[];
}
export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
