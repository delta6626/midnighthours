import { LinkButton } from "@/components/Button";
import Footer from "@/components/Footer";
import GlitchText from "@/components/GlitchText";
import Image from "next/image";

export default function Open() {
  return (
    <>
      <section className="section section--open">
        <GlitchText size="lg" width="700px">
          Welcome to MidnightHours
        </GlitchText>
        <h3>You can only access it once per day!</h3>
        <LinkButton url={"/play"}>
          <Image src={"/assets/play-icon.svg"} alt="" width={50} height={50} />
          <span>I&apos;m ready</span>
        </LinkButton>
      </section>
      <Footer />
    </>
  );
}
