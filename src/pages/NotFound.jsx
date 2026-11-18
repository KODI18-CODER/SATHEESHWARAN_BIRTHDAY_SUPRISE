import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="welcome-section">
      <div style={{ fontSize: "4rem" }}>🥺💜</div>

      <h1 className="welcome-title">Oops! Lost in the memories?</h1>

      <p className="hero-subtitle">
        This little page doesn't exist, but there are plenty of
        birthday surprises waiting for you.
      </p>

      <Link to="/home" className="primary-button">
        Back to Birthday Home 🏠
      </Link>
    </section>
  );
}