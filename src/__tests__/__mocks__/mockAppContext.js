import { createContext } from "react";

const races = require("./mockRaces.json");

const { data } = races;
const { race_summaries: summaries } = data;

export const RaceContext = createContext();

// eslint-disable-next-line react/prop-types
export default function RaceProvider({ children, ...props }) {
  return (
    <RaceContext.Provider
      value={{
        status: "success",
        error: false,
        categoriseRaces: () => Object.values(summaries),
        removeRace: () => {},
        ...props,
      }}
    >
      {children}
    </RaceContext.Provider>
  );
}
