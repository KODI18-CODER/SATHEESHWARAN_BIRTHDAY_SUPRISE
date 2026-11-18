import React, { useState } from "react";

const memories = [
  { src: "/images/memory-01.jpg", caption: "A moment to remember 💜" },
  { src: "/images/memory-02.jpg", caption: "One for the memories 🌸" },
  { src: "/images/memory-03.jpg", caption: "A beautiful little moment ✨" },
  { src: "/images/memory-04.jpg", caption: "Keep this smile forever 😊" },
  { src: "/images/memory-05.jpg", caption: "A memory close to the heart 🫶" },
  { src: "/images/memory-06.jpg", caption: "Little moments, big memories 🦋" },
  { src: "/images/memory-07.jpg", caption: "More memories to come 🎀" },
];

export default function Memories() {
  const [selected, setSelected] = useState(null);

  const changePhoto = (direction) => {
    setSelected((current) =>
      (current + direction + memories.length) % memories.length
    );
  };

  return (
    <section className="section">
      <div className="section-title">
        <h1>Our Little Memory Lane 📸</h1>
        <p className="section-description">
          Every picture holds a moment. Every moment holds a memory.
        </p>
      </div>

      <div className="photo-grid">
        {memories.map((memory, index) => (
          <button
            className="photo-card"
            key={memory.src}
            onClick={() => setSelected(index)}
            aria-label={`View memory ${index + 1}`}
            style={{ padding: 0, border: 0, textAlign: "left" }}
          >
            <img
              src={memory.src}
              alt={memory.caption}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <p className="photo-caption">{memory.caption}</p>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setSelected(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close photo"
          >
            ×
          </button>

          <button
            className="secondary-button"
            onClick={(event) => {
              event.stopPropagation();
              changePhoto(-1);
            }}
          >
            ←
          </button>

          <div onClick={(event) => event.stopPropagation()}>
            <img src={memories[selected].src} alt={memories[selected].caption} />
            <p style={{ color: "white", textAlign: "center", marginTop: 12 }}>
              {memories[selected].caption}
            </p>
          </div>

          <button
            className="secondary-button"
            onClick={(event) => {
              event.stopPropagation();
              changePhoto(1);
            }}
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}