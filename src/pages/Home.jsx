import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Camera,
  Flower2,
  Cake,
  Film,
  Mail,
  LockKeyhole,
  Sparkles,
  Gift,
  ArrowRight,
} from "lucide-react";

const surprises = [
  {
    number: "01",
    icon: Heart,
    emoji: "💜",
    title: "23 Reasons",
    description: "23 little reasons that make you such a special person.",
    link: "/reasons",
    color: "pink",
  },
  {
    number: "02",
    icon: Camera,
    emoji: "📸",
    title: "Our Memories",
    description: "A little collection of moments and memories.",
    link: "/memories",
    color: "purple",
  },
  {
    number: "03",
    icon: Flower2,
    emoji: "🌸",
    title: "23 Wishes",
    description: "A collection of wishes for your beautiful new chapter.",
    link: "/wishes",
    color: "peach",
  },
  {
    number: "04",
    icon: Cake,
    emoji: "🎂",
    title: "Birthday Cake",
    description: "Make a wish and blow out all your birthday candles.",
    link: "/cake",
    color: "blue",
  },
  {
    number: "05",
    icon: Film,
    emoji: "🎬",
    title: "Birthday Video",
    description: "A little video surprise made especially for you.",
    link: "/videos",
    color: "mint",
  },
  {
    number: "06",
    icon: Mail,
    emoji: "💌",
    title: "A Letter for You",
    description: "Words from my heart that I wanted you to read.",
    link: "/letter",
    color: "rose",
  },
  {
    number: "07",
    icon: LockKeyhole,
    emoji: "🔐",
    title: "Secret Vault",
    description: "Some little secrets are waiting to be unlocked.",
    link: "/secret-vault",
    color: "lavender",
  },
  {
    number: "08",
    icon: Sparkles,
    emoji: "✨",
    title: "Grand Finale",
    description: "One last surprise to end your birthday journey.",
    link: "/finale",
    color: "gold",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={15} />
            <span>A LITTLE SURPRISE FOR SOMEONE SPECIAL</span>
            <Sparkles size={15} />
          </div>

          <p className="hero-eyebrow">Today is all about you</p>

          <h1 className="hero-title">
            Happy 23rd
            <br />
            Birthday,
            <br />
            <span className="hero-name">MYLUU!</span>
            <span className="hero-heart"> 💜</span>
          </h1>

          <p className="hero-description">
            This little corner of the internet is filled with wishes,
            memories, surprises, and lots of love. Every little part
            was created to make your day a little more special.
          </p>

          <div className="hero-buttons">
            <Link to="/wishes" className="hero-button primary">
              <Gift size={18} />
              Make a Wish
              <span>🎂</span>
            </Link>

            <Link to="/memories" className="hero-button secondary">
              <Camera size={18} />
              View Memories
            </Link>
          </div>

          <div className="hero-bottom-note">
            <Heart size={16} fill="currentColor" />
            <span>Made with love, just for you</span>
          </div>
        </div>

        {/* HERO PHOTO */}
        <div className="hero-photo-section">
          <div className="hero-photo-decoration decoration-one">✦</div>
          <div className="hero-photo-decoration decoration-two">♡</div>
          <div className="hero-photo-decoration decoration-three">✧</div>

          <div className="hero-photo-frame">
            <img
              src="/images/myluu-profile.jpg"
              alt="A special birthday memory"
              className="hero-photo"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="hero-photo-sticker">
            <div className="sticker-icon">🎀</div>
            <div>
              <strong>23 &amp; Beautiful</strong>
              <small>Another year of being YOU!</small>
            </div>
          </div>
        </div>
      </section>

      {/* SURPRISE CARDS */}
      <section className="surprises-section">
        <div className="surprises-heading">
          <span className="section-kicker">A WORLD MADE FOR YOU</span>

          <h2>
            Little Surprises,
            <span> Big Love 💗</span>
          </h2>

          <p>
            Explore every little surprise I've prepared for your special day.
          </p>
        </div>

        <div className="surprises-grid">
          {surprises.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                to={item.link}
                className={`surprise-card surprise-${item.color}`}
                key={item.number}
              >
                <div className="surprise-card-top">
                  <span className="surprise-number">{item.number}</span>

                  <span className="surprise-icon">
                    <Icon size={22} />
                  </span>
                </div>

                <div className="surprise-emoji">{item.emoji}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="surprise-card-bottom">
                  <span>Open Surprise</span>
                  <ArrowRight size={17} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FINAL HOME MESSAGE */}
      <section className="home-final-message">
        <div className="final-message-icon">
          <Heart fill="currentColor" size={26} />
        </div>

        <p>
          No matter where life takes you,
          <br />
          always remember how special you are.
        </p>

        <span>Happy Birthday, MYLUU! 💜</span>
      </section>

      <footer className="home-footer">
        <p>
          Made with <Heart size={13} fill="currentColor" /> for MYLUU
        </p>

        <span>A day to remember · 18 11 2003</span>
      </footer>
    </div>
  );
}