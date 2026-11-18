import React, { useState } from "react";
import confetti from "canvas-confetti";
import candleMessages from "../data/candleMessages.js";

export default function Cake() {
  const [selectedCandle, setSelectedCandle] = useState(null);
  const [visited, setVisited] = useState([]);
  const [blownOut, setBlownOut] = useState(false);

  const openCandle = (candle) => {
    setSelectedCandle(candle);

    setVisited((previous) =>
      previous.includes(candle.id)
        ? previous
        : [...previous, candle.id]
    );
  };

  const blowCandles = () => {
    setBlownOut(true);
    setSelectedCandle(null);

    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 140,
        origin: { y: 0.5 },
      });
    }, 400);
  };

  return (
    <section className="section">
      <div className="section-title">
        <h1>A Cake Just for You! 🎂</h1>
        <p className="section-description">
          Tap each candle to discover a little birthday message.
        </p>
      </div>

      <div className="cake-container">
        <div className="cake" aria-label="Birthday cake with 23 candles">
          {candleMessages.map((candle, index) => {
            const row = Math.floor(index / 8);
            const column = index % 8;
            const left = 5 + column * 13;

            return (
              <button
                key={candle.id}
                className="candle"
                style={{
                  left: `${left}%`,
                  bottom: `${100 + row * 12}%`,
                  opacity: blownOut ? 0.45 : 1,
                }}
                onClick={() => openCandle(candle)}
                aria-label={`Open candle ${candle.id}`}
                title={`Candle ${candle.id}`}
              >
                {!blownOut && <span className="candle-flame" />}
              </button>
            );
          })}

          <div className="cake-layer cake-layer-top" />
          <div className="cake-layer cake-layer-middle" />
          <div className="cake-layer cake-layer-bottom" />
        </div>

        <p>
          Candles discovered: <strong>{visited.length} / 23</strong>
        </p>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${(visited.length / 23) * 100}%` }}
          />
        </div>

        <p className="muted">
          {blownOut
            ? "Your birthday wish is on its way! 💜"
            : "Make a wish and blow out your candles!"}
        </p>

        <button
          className="primary-button"
          onClick={blowCandles}
          disabled={blownOut}
        >
          {blownOut ? "Candles Blown Out ✨" : "Blow Out All Candles 🕯️"}
        </button>

        {blownOut && (
          <button
            className="secondary-button"
            onClick={() => {
              setBlownOut(false);
              setVisited([]);
            }}
          >
            Light Them Again 🔥
          </button>
        )}
      </div>

      {selectedCandle && (
        <div
          className="candle-popup"
          role="dialog"
          aria-modal="true"
          aria-label={`Message from candle ${selectedCandle.id}`}
          onClick={() => setSelectedCandle(null)}
        >
          <div
            className="candle-popup-content animate-fade-up"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => setSelectedCandle(null)}
              aria-label="Close message"
            >
              ×
            </button>

            <div style={{ fontSize: "3rem" }}>
              {selectedCandle.emoji}
            </div>
            <h2>Candle {selectedCandle.id}</h2>
            <p>{selectedCandle.message}</p>

            <button
              className="primary-button"
              style={{ marginTop: 20 }}
              onClick={() => setSelectedCandle(null)}
            >
              Aww, Thank You! 💜
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
