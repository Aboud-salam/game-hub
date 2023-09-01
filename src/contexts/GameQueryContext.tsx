import { createContext } from "react";
import { GameQueryState } from "../App";
export const GameQueryContext = createContext<GameQueryState>(
  {} as GameQueryState
);
