export type StoryType = {
  title: string;
  textFile: string;
  audioFile: string;
};

export type AppState = {
  isSiteOpen: boolean;
  setIsSiteOpen: (value: boolean) => void;
  audioVolume: number;
  setAudioVolume: (value: number) => void;
  isBackgroundMusicOn: boolean;
  setBackgroundMusicOn: (value: boolean) => void;
  isScareMode: boolean;
  setScareMode: (value: boolean) => void;
  todayStory: StoryType | null;
  setTodayStory: (story: StoryType | null) => void;
  isStoryComplete: boolean;
  setIsStoryComplete: (value: boolean) => void;
};
