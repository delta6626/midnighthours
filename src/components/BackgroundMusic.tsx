"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.2;

    const playAudio = () => {
      audio.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/assets/scary-ambient-background.mp3"
      preload="auto"
    />
  );
}
