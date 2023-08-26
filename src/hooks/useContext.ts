import React from "react";
import { GameQueryState } from "../App";

export const SearchContext = React.createContext<GameQueryState>(
  {} as GameQueryState
);
