import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/">
        <Image
          src="/pixel_clock.svg"
          alt="pixel clock"
          className="logo"
          width={100}
          height={100}
        />
      </Link>
      <div className="glitch" data-text="Welcome to MidnightHours">
        Welcome to MidnightHours
      </div>

      <h1>Hello world</h1>
    </>
  );
}
