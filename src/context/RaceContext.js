import {
  createContext,
  useCallback,
  useMemo,
  useEffect,
  useState,
} from "react";
import PropTypes from "prop-types";
import useAsync from "../hooks/useAsync";
import fetchRaces from "../utils/fetchRaces";

const categories = {
  greyhound: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
  harness: "161d9be2-e909-4326-8c2c-35ed71fb460b",
  horse: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
};

export const RaceContext = createContext();

export default function RaceProvider({ children }) {
  // Fetch races from API
  const { status, value, error, execute } = useAsync(fetchRaces);

  // Store "race_summaries" and "next_to_go_ids"
  const { race_summaries: summaries, next_to_go_ids: orderedIds } = value || {};

  // Create new state from manipulating stored data
  const [data, setData] = useState();

  // Convert race summaries to an array
  useEffect(() => {
    if (Object.values(summaries || {}).length && status === "success") {
      setData(Object.values(summaries));
    }
  }, [summaries, status]);

  // Match race summaries to next to go ids order in new array
  // and only keep first 5 items in array
  const orderedRaces = useMemo(() => {
    if (data && data.length && orderedIds && orderedIds.length) {
      return (orderedIds || [])
        .map((race) => data.find((val) => val.race_id === race))
        .filter((i) => !!i)
        .slice(0, 5);
    }
    return null;
  }, [data, orderedIds]);

  // Refetch races when race list drops below 5
  useEffect(() => {
    if (
      status === "success" &&
      orderedRaces &&
      orderedRaces.length &&
      orderedRaces.length < 5
    ) {
      execute();
    }
  }, [status, orderedRaces]);

  // If a race category tab is clicked
  // filter out races that do not match the category
  const categoriseRaces = useCallback(
    (category) => {
      if (!category) return orderedRaces || [];

      let catId = "";
      if (categories[category]) catId = categories[category];

      return (orderedRaces || []).filter((item) => item.category_id === catId);
    },
    [orderedRaces]
  );

  // Remove race from list 1 minute after start time
  const removeRace = useCallback(
    (raceId) => {
      setTimeout(() => {
        const filteredRaces = orderedRaces.filter(
          (item) => item.race_id !== raceId
        );
        setData(filteredRaces);
      }, 1000 * 60);
    },
    [orderedRaces]
  );

  return (
    <RaceContext.Provider
      value={{
        status,
        error,
        categoriseRaces,
        removeRace,
        categories,
      }}
    >
      {children}
    </RaceContext.Provider>
  );
}

RaceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
