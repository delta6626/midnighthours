"use client";

import { createContext, FC, useContext, useEffect, useState } from "react";
import { AppState, StoryType } from "@/types";
import { checkTimePeriod, pickTodayStory } from "@/utils";

const AppContext = createContext<AppState | null>(null);

export const AppProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSiteOpen, setIsSiteOpen] = useState(false);
  const [audioVolume, setAudioVolume] = useState(0.3);
  const [isBackgroundMusicOn, setBackgroundMusicOn] = useState(true);
  const [isScareMode, setScareMode] = useState(false);
  const [todayStory, setTodayStory] = useState<StoryType | null>(null);
  const [isStoryComplete, setIsStoryComplete] = useState(false);

  useEffect(() => {
    setIsSiteOpen(checkTimePeriod());
    setTodayStory(pickTodayStory());
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSiteOpen,
        setIsSiteOpen,
        audioVolume,
        setAudioVolume,
        isBackgroundMusicOn,
        setBackgroundMusicOn,
        isScareMode,
        setScareMode,
        todayStory,
        setTodayStory,
        isStoryComplete,
        setIsStoryComplete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
