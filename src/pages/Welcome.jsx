import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <section className="welcome-section">
      <div className="animate-float" style={{ fontSize: "4rem" }}>
        💜👻💎
      </div>

      <p className="gradient-text">A little surprise made with love</p>

      <h1 className="welcome-title">
        Hey, MYLUU!
      </h1>

      <p className="hero-subtitle">
        Someone special deserves something special.
        Are you ready to open a little world made just for you?
      </p>

      <div className="card" style={{ maxWidth: 480 }}>
        <p>🎀 23 wishes · 23 reasons · Countless memories 🎀</p>
        <p style={{ marginTop: 10 }}>
          A day to remember — 18 11 2003
        </p>
      </div>

      <button
        className="primary-button"
        style={{ marginTop: 28 }}
        onClick={() => navigate("/home")}
      >
        Open Your Surprise 💌
      </button>

      <p className="muted" style={{ marginTop: 20 }}>
        Made with all the love in the world 💗
      </p>
    </section>
  );
}