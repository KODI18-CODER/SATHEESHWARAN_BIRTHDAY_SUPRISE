import React, { useState } from "react";
import candleMessages from "../data/candleMessages.js";
import CandlePopup from "./CandlePopup.jsx";
import confetti from "canvas-confetti";

export default function BirthdayCake() {
  const [selectedCandle, setSelectedCandle] = useState(null);
  const [blownOut, setBlownOut] = useState(false);

  const blowCandles = () => {
    setBlownOut(true);

    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="birthday-cake-widget">
      <div className="cake" aria-label="Birthday cake">
        {candleMessages.map((candle, index) => (
          <button
            key={candle.id}
            type="button"
            className="candle"
            style={{
              left: `${5 + (index % 8) * 13}%`,
              bottom: `${100 + Math.floor(index / 8) * 12}%`,
            }}
            onClick={() => setSelectedCandle(candle)}
            aria-label={`Open candle ${candle.id}`}
          >
            {!blownOut && <span className="candle-flame" />}
          </button>
        ))}

        <div className="cake-layer cake-layer-top" />
        <div className="cake-layer cake-layer-middle" />
        <div className="cake-layer cake-layer-bottom" />
      </div>

      <button
        className="primary-button"
        onClick={blowCandles}
        disabled={blownOut}
      >
        {blownOut ? "Wish Made! 💜" : "Blow Out Candles 🕯️"}
      </button>

      {selectedCandle && (
        <CandlePopup
          candle={selectedCandle}
          onClose={() => setSelectedCandle(null)}
        />
      )}
    </div>
  );
}