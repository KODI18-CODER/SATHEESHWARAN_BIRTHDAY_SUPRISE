import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

export default function Finale() {
  useEffect(() => {
    const colors = ["#b99ae8", "#ef9fbe", "#ffe3a8", "#c5f0dc"];

    const duration = 3500;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 5,
        angle: 60,
        spread: 65,
        origin: { x: 0 },
        colors,
      });

      confetti({
        particleCount: 5,
        angle: 120,
        spread: 65,
        origin: { x: 1 },
        colors,
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="finale-section">
      <div className="animate-float" style={{ fontSize: "4rem" }}>
        🎆🎂💜
      </div>

      <p className="gradient-text">And that's not all...</p>

      <h1 className="finale-title">
        Happy 23rd Birthday, MYLUU!
      </h1>

      <p className="finale-message">
        May your life be filled with beautiful memories, endless laughter,
        wonderful opportunities, genuine love, and all the happiness
        your heart can hold.
      </p>

      <div className="card" style={{ maxWidth: 600 }}>
        <p style={{ fontSize: "1.15rem" }}>
          You are one of a kind. Keep smiling, keep dreaming,
          and never forget how special you are. 🥺
        </p>
        <p className="script-font" style={{ fontSize: "2rem", marginTop: 18 }}>
          You deserve the whole universe. 💜
        </p>
      </div>

      <p style={{ marginTop: 25 }}>
        Made with love, just for you. 👻💎🫀
      </p>

      <div className="flex-center" style={{ gap: 12, flexWrap: "wrap", marginTop: 25 }}>
        <Link to="/home" className="primary-button">
          Explore Again 💗
        </Link>
        <Link to="/" className="secondary-button">
          Start from Beginning 🎀
        </Link>
      </div>
    </section>
  );
}