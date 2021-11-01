import React, { useContext } from "react";
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
import { RaceContext } from "../context/RaceContext";

export default function RaceList({ category }) {
  const { error, status, categoriseRaces } = useContext(RaceContext);

  const races = categoriseRaces(category);

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
    return (
      <List spacing={3}>
        {races.map((race) => (
          <RaceItem key={race.race_id} race={race} />
        ))}
      </List>
    );
  }

  return null;
}

RaceList.defaultProps = {
  category: "",
};

RaceList.propTypes = {
  category: PropTypes.string,
};
