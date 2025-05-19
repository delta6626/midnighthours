"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState("Loading...");

  function getTimeUntilMidnight() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Set to 12:00 AM
    const diff = midnight.getTime() - now.getTime();

    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    // Start countdown after client mounts
    const updateTimer = () => {
      const newTime = getTimeUntilMidnight();
      setTimeLeft(newTime);

      if (newTime === "00:00:00") {
        window.location.reload();
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return <section className="timer">{timeLeft}</section>;
}
