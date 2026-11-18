import React from "react";

export default function SectionTitle({
  title,
  description,
  emoji = "💜",
}) {
  return (
    <div className="section-title">
      <span className="section-emoji">{emoji}</span>

      <h1>{title}</h1>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
}