
import React from "react";
import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";

export default function Videos() {
  return (
    <section className="birthday-video-page">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="birthday-video-heading"
      >
        <span>🎬 A little surprise for you</span>
        <h1>Our Special Birthday Video 💜</h1>
        <p>
          A little video, made with love, especially for you.
        </p>
      </motion.div>

      <motion.div
        className="birthday-video-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="birthday-video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/birthday-cover.jpg"
          >
            <source
              src="/videos/birthday-video.mp4"
              type="video/mp4"
            />
            Your browser does not support video playback.
          </video>
        </div>

        <div className="birthday-video-caption">
          <Film size={20} />
          <div>
            <h3>Made just for MYLUU 💎</h3>
            <p>Every little moment is special. 💗</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
