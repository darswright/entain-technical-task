import { useEffect, useState } from "react";
import calculateTimeLeft from "../utils/calculateTimeLeft";

export default function RaceCountdown({ startTime }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startTime));
  console.log(timeLeft);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(startTime));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return timeLeft ? timerComponents : "Race underway";
}
