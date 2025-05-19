"use client";

import { Button } from "@/components/Button";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";
import GlitchText from "@/components/GlitchText";

export default function Closed() {
  const closeTab = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <>
      <section className="section section--closed">
        <GlitchText size="lg" width="500px">
          Site is closed!
        </GlitchText>

        <h3 className="subtitle">Come back at midnight.</h3>

        <Button onClick={closeTab}>
          <img src="/assets/exit-icon.svg" alt="" />
          <span>Ok, I'm leaving</span>
        </Button>
      </section>
      <CountdownTimer />
      <Footer />
    </>
  );
}
