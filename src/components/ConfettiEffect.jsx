import React, { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiEffect({
  active = true,
  duration = 3000,
}) {
  useEffect(() => {
    if (!active) return;

    const colors = [
      "#b99ae8",
      "#ef9fbe",
      "#ffe3a8",
      "#c5f0dc",
      "#ffffff",
    ];

    const endTime = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() >= endTime) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 5,
        spread: 70,
        origin: { x: Math.random(), y: 0.6 },
        colors,
      });
    }, 180);

    return () => clearInterval(interval);
  }, [active, duration]);

  return null;
}