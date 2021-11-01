import React from "react";
import {
  Alert,
  AlertIcon,
  AlertDescription,
  Spinner,
  Center,
  List,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import RaceItem from "./RaceItem";

export default function RacesList({ error, status, value, category }) {
  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>
          There was an error fetching race data
        </AlertDescription>
      </Alert>
    );
  }

  if (status === "pending") {
    return (
      <Center h={200}>
        <Spinner />
      </Center>
    );
  }

  if (status === "success") {
    const raceSummariesArray = Object.values(value.race_summaries);
    const orderedRaces = value.next_to_go_ids.map((race) =>
      raceSummariesArray.find((item) => item.race_id === race)
    );

    if (category) {
      let catId = "";
      if (category === "greyhound") {
        catId = "9daef0d7-bf3c-4f50-921d-8e818c60fe61";
      } else if (category === "harness") {
        catId = "161d9be2-e909-4326-8c2c-35ed71fb460b";
      } else if (category === "horse") {
        catId = "4a2788f8-e825-4d36-9894-efd4baf1cfae";
      }

      const categorisedRaces = orderedRaces.filter(
        (item) => item.category_id === catId
      );

      return (
        <List spacing={3}>
          <RaceItem race={categorisedRaces[0]} />
          <RaceItem race={categorisedRaces[1]} />
          <RaceItem race={categorisedRaces[2]} />
          <RaceItem race={categorisedRaces[3]} />
          <RaceItem race={categorisedRaces[4]} />
        </List>
      );
    }

    return (
      <List spacing={3}>
        <RaceItem race={orderedRaces[0]} />
        <RaceItem race={orderedRaces[1]} />
        <RaceItem race={orderedRaces[2]} />
        <RaceItem race={orderedRaces[3]} />
        <RaceItem race={orderedRaces[4]} />
      </List>
    );
  }

  return null;
}

RacesList.defaultProps = {
  error: null,
  value: null,
  category: "",
};

RacesList.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string }),
  status: PropTypes.string.isRequired,
  value: PropTypes.shape({
    data: PropTypes.shape({
      race_summaries: PropTypes.shape({ race_id: PropTypes.string }),
      next_to_go_ids: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
  category: PropTypes.string,
};
