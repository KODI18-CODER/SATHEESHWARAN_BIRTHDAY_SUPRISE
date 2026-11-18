import React from "react";

export default function LoadingScreen({
  message = "Preparing a little surprise for you...",
}) {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-heart">💜</div>

      <h2>Just a Moment!</h2>

      <p>{message}</p>

      <div className="loading-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
