import { LinkButton } from "@/components/Button";
import Footer from "@/components/Footer";
import GlitchText from "@/components/GlitchText";

export default function Open() {
  return (
    <>
      <section className="section section--open">
        <GlitchText size="lg" width="700px">
          Welcome to MidnightHours
        </GlitchText>
        <h3>You can only access it once per day!</h3>
        <LinkButton url={"/play"}>
          <img src="/assets/play-icon.svg" alt="" />
          <span>I'm ready</span>
        </LinkButton>
      </section>
      <Footer />
    </>
  );
}
