import { useEffect, useState, useMemo, useContext } from "react";
import { RaceContext } from "../context/RaceContext";
import calculateTimeLeft from "../utils/calculateTimeLeft";

export default function RaceCountdown({ raceId, startTime }) {
  const { removeRace } = useContext(RaceContext);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startTime));
  const { days, hours, minutes, seconds } = timeLeft || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(startTime));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const text = useMemo(() => {
    if (!timeLeft) return "";

    return Object.keys(timeLeft).reduce((agg, interval) => {
      if (timeLeft[interval] === 0 && interval === "seconds")
        return `${agg} ${timeLeft[interval]} ${interval} `;

      if (timeLeft[interval])
        return `${agg} ${timeLeft[interval]} ${interval} `;

      return agg;
    }, "");
  }, [days, hours, minutes, seconds]);

  useEffect(() => {
    if (!text) {
      removeRace(raceId);
    }
  }, [text, raceId]);

  if (!text) return "Race underway";

  return text;
}
