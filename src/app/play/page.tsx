"use client";

import StoryViewer from "@/components/StoryViewer";
import { useAppContext } from "@/contexts/AppContext";

export default function Play() {
  const { isSiteOpen } = useAppContext();

  if (!isSiteOpen) return null;

  return (
    <>
      <section className="section section--play">
        <StoryViewer />
      </section>
    </>
  );
}
