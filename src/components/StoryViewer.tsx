"use client";

import { useEffect, useRef, useState } from "react";
import { pickTodayStory } from "@/utils";
import { useJumpscare } from "@/hooks/useJumpscare";
import Jumpscare from "./Jumpscare";

export default function StoryViewer() {
  const [storyText, setStoryText] = useState<string[]>([]);
  const [audioSrc, setAudioSrc] = useState("");
  const [audioDuration, setAudioDuration] = useState(60);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const jumpscareTrigger = useJumpscare(audioDuration);

  useEffect(() => {
    const story = pickTodayStory();

    fetch(`/stories/${story.textFile}`)
      .then((res) => res.text())
      .then((text) => {
        const paragraphs = text
          .split(/\n\s*\n/)
          .map((p) => p.trim())
          .filter(Boolean);
        setStoryText(paragraphs);
      });

    setAudioSrc(`/stories/${story.audioFile}`);
  }, []);

  useEffect(() => {
    if (
      !audioSrc ||
      !audioRef.current ||
      !scrollRef.current ||
      !containerRef.current
    )
      return;

    const audio = audioRef.current;
    const scrollElem = scrollRef.current;
    const container = containerRef.current;

    const syncScroll = () => {
      if (!audio.duration) return;

      const progress = audio.currentTime / audio.duration;
      const scrollDistance = scrollElem.scrollHeight - container.clientHeight;

      // how far down to start (0.5 = half the container height)
      const startOffset = container.clientHeight * 0.3;
      const totalDistance = scrollDistance + startOffset;

      const y = startOffset - progress * totalDistance;
      scrollElem.style.transform = `translateY(${y}px)`;

      requestAnimationFrame(syncScroll);
    };

    audio.addEventListener("loadedmetadata", () => {
      setAudioDuration(audio.duration);
      requestAnimationFrame(syncScroll);
    });

    audio.play();
  }, [audioSrc]);

  return (
    <div className="story">
      <h1 className="story__title">{pickTodayStory().title}</h1>

      <div className="story__container" ref={containerRef}>
        <div className="story__gradient--top"></div>
        <div className="story__scroll" ref={scrollRef}>
          {storyText.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div className="story__gradient--bottom"></div>
      </div>

      <div>
        {audioSrc && (
          <audio ref={audioRef} controls>
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>

      <Jumpscare trigger={jumpscareTrigger} />
    </div>
  );
}
