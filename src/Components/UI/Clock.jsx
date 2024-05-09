import { useState, useEffect } from "react";

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval;

  const countDown = () => {
    const destination = new Date("May 31, 2024").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(interval);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    countDown();

    return () => {
      clearInterval(interval); 
    };
  }, []);

  return (
    <>
      <div className="flex items-center gap-6 text-white">
        <div className="text-white text-center">
          <h1 className="text-lg mb-1">{days}</h1>
          <p className="text-xs">Days</p>
        </div>
        <span> : </span>
        <div className="text-white text-center">
          <h1 className="text-lg mb-1">{hours}</h1>
          <p className="text-xs">Hours</p>
        </div>
        <span> : </span>
        <div className="text-white text-center">
          <h1 className="text-lg mb-1">{minutes}</h1>
          <p className="text-xs">Minutes</p>
        </div>
        <span> : </span>
        <div className="text-white text-center">
          <h1 className="text-lg mb-1">{seconds}</h1>
          <p className="text-xs">Seconds</p>
        </div>
      </div>
    </>
  );
};

export default Clock;
