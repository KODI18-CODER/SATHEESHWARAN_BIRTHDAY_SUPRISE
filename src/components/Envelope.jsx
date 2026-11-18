import React, { useState } from "react";

export default function Envelope({
  title = "A Special Letter for You 💌",
  children,
}) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="envelope-container">
      {!opened ? (
        <>
          <button
            type="button"
            className="envelope animate-float"
            onClick={() => setOpened(true)}
            aria-label="Open birthday envelope"
          >
            <span style={{ fontSize: "3rem" }}>💌</span>
          </button>

          <h2>{title}</h2>
          <p>Tap to open your special letter.</p>
        </>
      ) : (
        <div className="letter-paper animate-fade-up">
          {children || (
            <p>
              Dear MYLUU, wishing you a lifetime of happiness,
              beautiful memories, and endless smiles. Happy Birthday! 💜
            </p>
          )}

          <button
            type="button"
            className="secondary-button"
            style={{ marginTop: 20 }}
            onClick={() => setOpened(false)}
          >
            Close Letter 💌
          </button>
        </div>
      )}
    </div>
  );
}