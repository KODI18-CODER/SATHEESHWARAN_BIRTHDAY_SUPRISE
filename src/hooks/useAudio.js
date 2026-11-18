import { useCallback, useEffect, useRef, useState } from "react";

export default function useAudio({
  src,
  loop = false,
  initialVolume = 0.5,
  autoPlay = false,
} = {}) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(
    Math.min(1, Math.max(0, initialVolume))
  );
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!src) {
      audioRef.current = null;
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setError(null);
      return;
    }

    const audio = new Audio(src);

    audio.loop = loop;
    audio.volume = volume;
    audio.muted = isMuted;
    audio.preload = "metadata";

    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () =>
      setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () =>
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
    const handleEnded = () => {
      if (!loop) {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    };
    const handleError = () => {
      setError("Audio could not be loaded. Check the audio file.");
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    if (autoPlay) {
      audio.play().catch(() => {
        setError("Press play to start the audio.");
      });
    }

    return () => {
      audio.pause();

      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);

      audio.src = "";
      audioRef.current = null;
    };
  }, [src, loop]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const play = useCallback(async () => {
    if (!audioRef.current) {
      setError("No audio file is available.");
      return false;
    }

    try {
      await audioRef.current.play();
      setError(null);
      return true;
    } catch {
      setError("Unable to play audio. Please try again.");
      return false;
    }
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const togglePlay = useCallback(async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      await play();
    } else {
      pause();
    }
  }, [play, pause]);

  const toggleMute = useCallback(() => {
    setIsMuted((previous) => !previous);
  }, []);

  const changeVolume = useCallback((nextVolume) => {
    const safeVolume = Math.min(1, Math.max(0, Number(nextVolume)));
    setVolume(safeVolume);
  }, []);

  const seek = useCallback((time) => {
    if (!audioRef.current) return;

    const safeTime = Math.min(
      audioRef.current.duration || 0,
      Math.max(0, Number(time))
    );

    audioRef.current.currentTime = safeTime;
    setCurrentTime(safeTime);
  }, []);

  const stop = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
  }, []);

  return {
    audioRef,
    isPlaying,
    isMuted,
    volume,
    currentTime,
    duration,
    error,
    play,
    pause,
    togglePlay,
    toggleMute,
    changeVolume,
    seek,
    stop,
  };
}
