import React from "react";

const elements = [
  "💜", "✨", "🦋", "🌸", "💗",
  "⭐", "🎀", "🫧", "💕", "👻",
  "💎", "🌷", "✨", "🦋", "💜",
];

export default function FloatingElements() {
  return (
    <div className="floating-elements" aria-hidden="true">
      {elements.map((element, index) => (
        <span
          className="floating-element"
          key={index}
          style={{
            left: `${(index * 37 + 5) % 100}%`,
            animationDelay: `${(index % 7) * -1.8}s`,
            animationDuration: `${12 + (index % 5) * 2}s`,
            fontSize: `${16 + (index % 4) * 7}px`,
          }}
        >
          {element}
        </span>
      ))}
    </div>
  );
}
