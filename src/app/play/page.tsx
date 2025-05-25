"use client";

import { redirect } from "next/navigation";

import Header from "@/components/Header";
import StoryViewer from "@/components/StoryViewer";
import { useAppContext } from "@/contexts/AppContext";
import { checkTimePeriod } from "@/utils";
import { useEffect } from "react";

export default function Play() {
  const { setIsSiteOpen } = useAppContext();

  useEffect(() => {
    const isSiteOpen = checkTimePeriod();
    setIsSiteOpen(isSiteOpen);

    if (!isSiteOpen) {
      redirect("/home");
    }
  }, []);

  return (
    <>
      <Header />
      <section className="section section--play">
        <StoryViewer />
      </section>
    </>
  );
}
