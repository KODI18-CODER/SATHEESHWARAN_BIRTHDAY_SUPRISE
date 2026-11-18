import React, { useState } from "react";
import { unlockSecretDoor } from "../lib/supabase.js";
import secretMessages from "../data/secretMessages.js";

const doors = [
  { id: "door1", title: "Secret One", emoji: "💌" },
  { id: "door2", title: "A Memory", emoji: "📸" },
  { id: "door3", title: "A Little Truth", emoji: "🌷" },
  { id: "door4", title: "A Promise", emoji: "🌙" },
  { id: "door5", title: "The Final Secret", emoji: "💎" },
];

export default function SecretVault() {
  const [activeDoor, setActiveDoor] = useState(null);
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const currentMessage = secretMessages.find(
    (item) => item.id === activeDoor
  );

  const handleUnlock = async (event) => {
    event.preventDefault();

    if (!activeDoor || !password.trim() || loading) return;

    setLoading(true);
    setMessage("");

    const result = await unlockSecretDoor(activeDoor, password);

    setLoading(false);
    setMessage(result.message);

    if (result.success) {
      setUnlocked((previous) =>
        previous.includes(activeDoor)
          ? previous
          : [...previous, activeDoor]
      );
      setPassword("");
    }
  };

  const closeDoor = () => {
    setActiveDoor(null);
    setPassword("");
    setMessage("");
  };

  return (
    <section className="section">
      <div className="section-title">
        <h1>The Secret Vault 🔐</h1>
        <p className="section-description">
          Five doors, five surprises. Can you unlock them all?
        </p>
      </div>

      <div className="secret-grid">
        {doors.map((door) => {
          const isUnlocked = unlocked.includes(door.id);

          return (
            <button
              key={door.id}
              className={`secret-door ${isUnlocked ? "unlocked" : ""}`}
              onClick={() => {
                setActiveDoor(door.id);
                setPassword("");
                setMessage("");
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>
                {isUnlocked ? "🔓" : door.emoji}
              </span>
              <strong>{door.title}</strong>
              <span>{isUnlocked ? "Unlocked!" : "Tap to open"}</span>
            </button>
          );
        })}
      </div>

      <p className="text-center muted" style={{ marginTop: 20 }}>
        Unlocked {unlocked.length} of 5 secret doors 💜
      </p>

      {activeDoor && (
        <div
          className="candle-popup"
          role="dialog"
          aria-modal="true"
          aria-label="Secret door"
          onClick={closeDoor}
        >
          <div
            className="candle-popup-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={closeDoor}
              aria-label="Close secret door"
            >
              ×
            </button>

            {unlocked.includes(activeDoor) && currentMessage ? (
              <>
                <div style={{ fontSize: "3rem" }}>
                  {currentMessage.emoji}
                </div>
                <h2>{currentMessage.title}</h2>
                <p>{currentMessage.message}</p>
                <p style={{ marginTop: 15, color: "#8c69b5" }}>
                  {currentMessage.closing}
                </p>
                <button
                  className="primary-button"
                  style={{ marginTop: 20 }}
                  onClick={closeDoor}
                >
                  Keep This Secret 💜
                </button>
              </>
            ) : (
              <>
                <div style={{ fontSize: "3rem" }}>🔐</div>
                <h2>Unlock Your Surprise</h2>
                <p className="muted">
                  Enter the secret password to open this door.
                </p>

                <form className="secret-form" onSubmit={handleUnlock}>
                  <input
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    autoComplete="off"
                    required
                  />

                  <button
                    className="primary-button"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Checking..." : "Unlock Door 💜"}
                  </button>
                </form>

                {message && (
                  <p role="status" style={{ marginTop: 15 }}>
                    {message}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}