"use client";

import Header from "@/components/Header";
import StoryViewer from "@/components/StoryViewer";
import { useAppContext } from "@/contexts/AppContext";
import { redirect } from "next/navigation";

export default function Play() {
  const { isSiteOpen } = useAppContext();

  if (!isSiteOpen) {
    console.log("Site isn't open");
    // redirect("/home");
  }

  return (
    <>
      <Header />
      <section className="section section--play">
        <StoryViewer />
      </section>
    </>
  );
}
