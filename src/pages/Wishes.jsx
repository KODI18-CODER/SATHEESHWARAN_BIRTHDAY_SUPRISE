import React from "react";
import wishes from "../data/wishes.js";

export default function Wishes() {
  return (
    <section className="section">
      <div className="section-title">
        <h1>23 Wishes for MYLUU 🌸</h1>
        <p className="section-description">
          One wish for every year, with many more beautiful years ahead.
        </p>
      </div>

      <div className="grid-3">
        {wishes.map((wish) => (
          <article className="wish-card" key={wish.id}>
            <span className="wish-number">{wish.id}</span>
            <div style={{ fontSize: "2rem", marginBottom: 10 }}>
              {wish.emoji}
            </div>
            <h3>{wish.title}</h3>
            <p>{wish.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}