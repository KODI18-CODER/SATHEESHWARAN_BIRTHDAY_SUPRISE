import React from "react";
import reasons from "../data/reasons.js";

export default function Reasons() {
  return (
    <section className="section">
      <div className="section-title">
        <h1>23 Reasons Why You're Special 💜</h1>
        <p className="section-description">
          Twenty-three little reminders of what makes you, YOU.
        </p>
      </div>

      <div className="grid-3">
        {reasons.map((reason) => (
          <article className="reason-card" key={reason.id}>
            <span className="reason-number">{reason.id}</span>
            <div style={{ fontSize: "2rem", marginBottom: 10 }}>
              {reason.emoji}
            </div>
            <h3>{reason.title}</h3>
            <p>{reason.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}