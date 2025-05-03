import { LinkButton } from "@/components/Button";
import Footer from "@/components/Footer";
import GlitchText from "@/components/GlitchText";

export default function Closed() {
  return (
    <>
      <section className="section section--closed">
        <GlitchText size="lg" width="500px">
          Site is closed!
        </GlitchText>

        <h3 className="subtitle">Come back at midnight.</h3>

        <LinkButton url={"/goback"}>
          <img src="/assets/exit-icon.svg" alt="" />
          <span>Ok, I'm leaving</span>
        </LinkButton>
      </section>
      <section className="timer">02:56:32</section>
      <Footer />
    </>
  );
}
