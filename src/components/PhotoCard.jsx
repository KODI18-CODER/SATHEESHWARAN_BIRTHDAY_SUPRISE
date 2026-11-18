import React from "react";

export default function PhotoCard({
  src,
  caption = "A beautiful memory 💜",
  onClick,
}) {
  return (
    <button
      type="button"
      className="photo-card"
      onClick={onClick}
      aria-label={`View ${caption}`}
    >
      {src ? (
        <img
          src={src}
          alt={caption}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <div className="photo-placeholder">
          <span>📸</span>
          <p>Add your photo here</p>
        </div>
      )}

      <p className="photo-caption">{caption}</p>
    </button>
  );
}
