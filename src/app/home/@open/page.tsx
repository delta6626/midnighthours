import { LinkButton } from "@/components/Button";
import Footer from "@/components/Footer";
import GlitchText from "@/components/GlitchText";
import Image from "next/image";

export default function Open() {
  return (
    <>
      <section className="section section--open">
        <GlitchText size="md" width="910px">
          Welcome to MidnightHours
        </GlitchText>
        <h3 className="subtitle">You can only access it once per day!</h3>
        <LinkButton url={"/play"}>
          <Image src={"/assets/play-icon.svg"} alt="" width={50} height={50} />
          <span>I&apos;m ready</span>
        </LinkButton>
      </section>
      <Footer />
    </>
  );
}
