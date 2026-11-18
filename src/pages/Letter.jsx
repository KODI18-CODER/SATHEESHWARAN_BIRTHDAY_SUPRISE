import React, { useState } from "react";

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section">
      <div className="section-title">
        <h1>A Little Letter for You 💌</h1>
        <p className="section-description">
          Some words are better kept in a letter.
        </p>
      </div>

      {!isOpen ? (
        <div className="envelope-container">
          <div
            className="envelope animate-float"
            onClick={() => setIsOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setIsOpen(true);
              }
            }}
            aria-label="Open your birthday letter"
          >
            <span style={{ fontSize: "3rem", zIndex: 1 }}>💌</span>
          </div>

          <p>You've received a special letter. Tap to open it! 💜</p>

          <button
            className="primary-button"
            onClick={() => setIsOpen(true)}
          >
            Open My Letter
          </button>
        </div>
      ) : (
        <article className="letter-paper animate-fade-up">
          <h2>A day to remember — 18 11 2003</h2>

          <p>Dear MYLUU, 💜</p>

          <p style={{ marginTop: 18 }}>
            Today is all about celebrating you and the beautiful person
            you are. I wanted to create something a little different,
            something you could open and explore whenever you wanted
            to feel special.
          </p>

          <p style={{ marginTop: 15 }}>
            Life gives us so many memories, little conversations,
            silly moments, unexpected laughs, and experiences that
            stay in our hearts. I hope you always remember the
            beautiful moments and look forward to the ones still
            waiting for you.
          </p>

          <p style={{ marginTop: 15 }}>
            Never doubt your worth. Keep smiling, keep growing,
            chase your dreams, and never stop being yourself.
            You deserve happiness, peace, success, and all the
            wonderful things life has to offer.
          </p>

          <p style={{ marginTop: 15 }}>
            No matter how much life changes, I hope you always
            have reasons to smile. And remember, I'll always be
            there for you. 🫶
          </p>

          <p style={{ marginTop: 20 }}>
            Happy 23rd Birthday, MYLUU! 🎂
          </p>

          <p
            className="script-font"
            style={{ marginTop: 25, fontSize: "1.8rem", color: "#8c69b5" }}
          >
            With lots of love, always 💜
          </p>

          <button
            className="secondary-button"
            style={{ marginTop: 25 }}
            onClick={() => setIsOpen(false)}
          >
            Close Letter 💌
          </button>
        </article>
      )}
    </section>
  );
}