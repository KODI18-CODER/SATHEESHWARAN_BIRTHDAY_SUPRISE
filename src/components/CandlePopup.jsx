import React from "react";

export default function CandlePopup({ candle, onClose }) {
  if (!candle) return null;

  return (
    <div
      className="candle-popup"
      role="dialog"
      aria-modal="true"
      aria-label={`Candle ${candle.id} message`}
      onClick={onClose}
    >
      <div
        className="candle-popup-content animate-fade-up"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="popup-close"
          onClick={onClose}
          aria-label="Close popup"
        >
          ×
        </button>

        <div style={{ fontSize: "3rem" }}>
          {candle.emoji}
        </div>

        <h2>Candle {candle.id}</h2>

        <p>{candle.message}</p>

        <button
          type="button"
          className="primary-button"
          style={{ marginTop: 20 }}
          onClick={onClose}
        >
          Aww, Thank You! 💜
        </button>
      </div>
    </div>
  );
}