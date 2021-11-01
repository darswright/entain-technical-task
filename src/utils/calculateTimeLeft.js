const calculateTimeLeft = (seconds) => {
  const currentTime = +new Date();
  const startTime = +new Date(seconds * 1000);
  const difference = startTime - currentTime;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return false;
};

export default calculateTimeLeft;
