import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface FetchResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoaded(true);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoaded(false);
      });
    return () => controller.abort();
  }, []);
  return { games, error, isLoaded, setError };
};
export default useGames;
