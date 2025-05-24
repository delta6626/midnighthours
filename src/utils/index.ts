import storiesData from "@/data/stories.json";
import { StoryType } from "@/types";

export const checkTimePeriod = () => {
  const currentHour = new Date().getHours();

  // Only open between 12 AM and 5 AM
  return currentHour >= 0 && currentHour < 5;
};

/**
 * Picks a "story of the day" in a consistent way for all users.
 * Uses today's date to generate a hash, then selects a story from the list based on that hash.
 * This ensures everyone sees the same story each day, and the story changes daily.
 * @returns today's story
 */
export const pickTodayStory = () => {
  const hashCode = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  };

  const now = new Date();
  const dateKey = now.toDateString();
  const index = hashCode(dateKey) % storiesData.length;
  const story = storiesData[index] as StoryType;

  return story;
};
