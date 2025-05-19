"use client";

import { useAppContext } from "@/contexts/AppContext";
import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const { isBackgroundMusicOn } = useAppContext();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isBackgroundMusicOn) {
      audio.pause();
      return;
    }

    audio.loop = true;
    audio.volume = 0.2;

    audio.play();

    return () => {
      audio.pause();
    };
  }, [isBackgroundMusicOn]);

  return (
    <audio
      ref={audioRef}
      src="/assets/scary-ambient-background.mp3"
      preload="auto"
    />
  );
}
