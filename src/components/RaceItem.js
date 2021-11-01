import { ListItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import RaceCountdown from "./RaceCountdown";

export default function RaceItem({ race }) {
  if (!race) return null;

  return (
    <ListItem key={race.race_id} borderWidth="1px" borderRadius="lg" p={2}>
      <p>Race #{race.race_number}</p>
      <p>Meeting Name: {race.meeting_name}</p>
      <p>
        <RaceCountdown startTime={race.advertised_start.seconds} />
      </p>
    </ListItem>
  );
}

RaceItem.propTypes = {
  race: PropTypes.arrayOf(PropTypes.object).isRequired,
};
