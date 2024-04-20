import React, { useState, useEffect } from "react";

function CountdownTimer({ targetDate }) {
  const [countDown, setCountDown] = useState(
    targetDate - Math.floor(Date.now() / 1000)
  );

  useEffect(() => {
    if (countDown <= 0) return;

    const interval = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown, targetDate]);

  const days = Math.floor(countDown / (60 * 60 * 24));
  const hours = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countDown % (60 * 60)) / 60);
  const seconds = Math.floor(countDown % 60);

  return (
    <div className="flex justify-center items-center space-x-2 bg-gray-800 text-white rounded-lg px-4 py-2">
      <div className="text-3xl font-bold">{days}</div>
      <div>:</div>
      <div className="flex flex-col">
        <span className="text-xl font-bold">
          {hours.toString().padStart(2, "0")}
        </span>
        <span className="text-sm">hours</span>
      </div>
      <div>:</div>
      <div className="flex flex-col">
        <span className="text-xl font-bold">
          {minutes.toString().padStart(2, "0")}
        </span>
        <span className="text-sm">minutes</span>
      </div>
      <div>:</div>
      <div className="flex flex-col">
        <span className="text-xl font-bold">
          {seconds.toString().padStart(2, "0")}
        </span>
        <span className="text-sm">seconds</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
