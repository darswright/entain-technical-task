import { ListItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import RaceCountdown from "./RaceCountdown";

export default function RaceItem({ race }) {
  if (!race) return null;

  const {
    race_id: id,
    race_number: number,
    meeting_name: meeting,
    advertised_start: start,
  } = race || {};
  const { seconds } = start || {};

  return (
    <ListItem key={id} borderWidth="1px" borderRadius="lg" p={2}>
      <p>Race #{number}</p>
      <p>Meeting Name: {meeting}</p>
      <p>
        <RaceCountdown raceId={id} startTime={seconds} />
      </p>
    </ListItem>
  );
}

RaceItem.propTypes = {
  race: PropTypes.shape({}).isRequired,
};
