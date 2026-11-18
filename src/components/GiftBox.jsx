import React, { useState } from "react";
import confetti from "canvas-confetti";

export default function GiftBox({
  title = "A Little Gift for You",
  message = "You deserve all the happiness in the world, MYLUU! 💜",
}) {
  const [opened, setOpened] = useState(false);

  const openGift = () => {
    if (opened) return;

    setOpened(true);

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.65 },
    });
  };

  return (
    <div className="gift-container">
      <button
        type="button"
        className={`gift-box ${opened ? "gift-opened" : ""}`}
        onClick={openGift}
        aria-label={opened ? "Gift opened" : "Open birthday gift"}
      >
        <span className="gift-emoji">
          {opened ? "🎉" : "🎁"}
        </span>
      </button>

      <h2>{opened ? "Surprise! 💜" : title}</h2>

      {!opened ? (
        <p>Tap the gift to discover your surprise!</p>
      ) : (
        <div className="gift-message animate-fade-up">
          <p>{message}</p>
        </div>
      )}

      {opened && (
        <button
          className="secondary-button"
          onClick={() => setOpened(false)}
          style={{ marginTop: 15 }}
        >
          Close Gift 🎀
        </button>
      )}
    </div>
  );
}