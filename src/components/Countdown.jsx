import React, { useEffect, useState } from "react";

function calculateTime(targetDate) {
  const difference = Math.max(
    0,
    new Date(targetDate).getTime() - Date.now()
  );

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown({
  targetDate = "2026-11-18T00:00:00+05:30",
}) {
  const [time, setTime] = useState(() => calculateTime(targetDate));

  useEffect(() => {
    const update = () => setTime(calculateTime(targetDate));

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="countdown">
      {items.map((item) => (
        <div className="countdown-item" key={item.label}>
          <strong>{String(item.value).padStart(2, "0")}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}