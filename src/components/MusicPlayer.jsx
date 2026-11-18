import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [error, setError] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
        setError(false);
      } catch {
        setError(true);
        setPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;

    const handleError = () => setError(true);

    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday-music.mp3"
        loop
        preload="auto"
      />

      <div className="birthday-music-player">
        <button
          className="music-play-button"
          onClick={toggleMusic}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? <Pause size={17} /> : <Play size={17} />}

          <span>{playing ? "Pause" : "Play Music"}</span>
        </button>

        <button
          className="music-volume-button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute music" : "Mute music"}
        >
          {muted ? <VolumeX size={19} /> : <Volume2 size={19} />}
        </button>

        {error && (
          <span className="music-error-message">
            Music not found. Check public/music/birthday-music.mp3
          </span>
        )}
      </div>
    </>
  );
}