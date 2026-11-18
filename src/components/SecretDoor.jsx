import React, { useState } from "react";
import { unlockSecretDoor } from "../lib/supabase.js";

export default function SecretDoor({
  door,
  unlocked = false,
  onUnlocked,
}) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!door?.id || !password.trim() || loading) return;

    setLoading(true);
    setMessage("");

    const result = await unlockSecretDoor(door.id, password);

    setLoading(false);
    setMessage(result.message);

    if (result.success) {
      setPassword("");
      onUnlocked?.(door.id);
    }
  };

  return (
    <article className={`secret-door ${unlocked ? "unlocked" : ""}`}>
      <div style={{ fontSize: "2.5rem" }}>
        {unlocked ? "🔓" : door?.emoji || "🔐"}
      </div>

      <h3>{door?.title || "Secret Door"}</h3>

      {unlocked ? (
        <p>Successfully unlocked! 💜</p>
      ) : (
        <form onSubmit={handleSubmit} className="secret-form">
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            autoComplete="off"
            required
          />

          <button
            type="submit"
            className="primary-button"
            disabled={loading}
          >
            {loading ? "Checking..." : "Unlock 🔐"}
          </button>

          {message && <p role="status">{message}</p>}
        </form>
      )}
    </article>
  );
}